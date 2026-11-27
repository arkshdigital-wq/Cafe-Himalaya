'use client'

import { useEffect, useRef } from 'react'

type Ridge = {
  base: number
  amplitude: number
  speed: number
  parallax: number
  color: string
  opacity: number
}

type Peak = {
  center: number
  height: number
  leftWidth: number
  rightWidth: number
}

const ridge: Ridge = {
  base: 0.86,
  amplitude: 0.82,
  speed: 0.006,
  parallax: 4,
  color: '#75432d',
  opacity: 0.72,
}

const peaks: Peak[] = [
  { center: 0.035, height: 0.56, leftWidth: 0.13, rightWidth: 0.09 },
  { center: 0.15, height: 0.3, leftWidth: 0.035, rightWidth: 0.045 },
  { center: 0.25, height: 0.82, leftWidth: 0.1, rightWidth: 0.19 },
  { center: 0.45, height: 0.38, leftWidth: 0.05, rightWidth: 0.065 },
  { center: 0.61, height: 0.7, leftWidth: 0.2, rightWidth: 0.11 },
  { center: 0.77, height: 0.27, leftWidth: 0.035, rightWidth: 0.05 },
  { center: 0.87, height: 1, leftWidth: 0.08, rightWidth: 0.16 },
]

function ridgeShape(position: number) {
  const wrappedPosition = ((position % 1) + 1) % 1
  let highestPeak = 0

  peaks.forEach((peak) => {
    const distance = ((wrappedPosition - peak.center + 1.5) % 1) - 0.5
    const reach = distance < 0 ? peak.leftWidth : peak.rightWidth
    const shoulder = Math.max(0, 1 - Math.abs(distance) / reach)
    highestPeak = Math.max(highestPeak, peak.height * Math.pow(shoulder, 2.2))
  })

  const detail =
    Math.sin(wrappedPosition * Math.PI * 58 + 0.4) * 0.018 +
    Math.sin(wrappedPosition * Math.PI * 94 + 2.1) * 0.008
  const contour = 0.1 + highestPeak * 0.86 + detail * Math.sqrt(highestPeak)
  return Math.max(0.1, Math.min(0.99, contour))
}

export function HimalayaOutline() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = { current: 0, target: 0 }
    let width = 0
    let height = 0
    let animationFrame = 0

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)
      pointer.current += (pointer.target - pointer.current) * 0.035
      const seconds = time / 1000
      const segments = Math.ceil(width / 3) + 2

      const offset = pointer.current * ridge.parallax
      context.beginPath()
      for (let i = 0; i < segments; i++) {
        const x = (i - 1) * 3
        const elevation = ridgeShape((x + offset) / Math.max(width, 1) + seconds * ridge.speed)
        const y = height * ridge.base - elevation * height * ridge.amplitude
        if (i === 0) context.moveTo(x, y)
        else context.lineTo(x, y)
      }
      context.strokeStyle = ridge.color
      context.globalAlpha = ridge.opacity
      context.lineWidth = 1.3
      context.lineJoin = 'round'
      context.lineCap = 'round'
      context.stroke()
      context.globalAlpha = 1
    }

    const animate = (time: number) => {
      draw(time)
      animationFrame = window.requestAnimationFrame(animate)
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      if (reducedMotion.matches) draw(0)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.target = ((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5) * 2
    }

    const onMotionChange = () => {
      window.cancelAnimationFrame(animationFrame)
      if (reducedMotion.matches) draw(0)
      else animationFrame = window.requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    reducedMotion.addEventListener('change', onMotionChange)
    resize()
    if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(animate)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      reducedMotion.removeEventListener('change', onMotionChange)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
}
