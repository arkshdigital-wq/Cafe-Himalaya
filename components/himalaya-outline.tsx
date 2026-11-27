'use client'

import { useEffect, useRef } from 'react'

type Ridge = {
  base: number
  amplitude: number
  frequency: number
  phase: number
  speed: number
  parallax: number
  color: string
  opacity: number
}

const ridges: Ridge[] = [
  { base: 0.64, amplitude: 0.46, frequency: 3.6, phase: 0.4, speed: 0.022, parallax: 4, color: '#75432d', opacity: 0.72 },
]

function ridgeShape(position: number, frequency: number, phase: number) {
  const wave = (value: number) => 1 - Math.abs(Math.sin(value))
  const shape =
    (wave(position * frequency + phase) +
      0.45 * wave(position * frequency * 2.3 + phase + 1.7) +
      0.2 * wave(position * frequency * 5.1 + phase + 3)) /
    1.65
  return Math.pow(shape, 1.2)
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

      ridges.forEach((ridge) => {
        const offset = pointer.current * ridge.parallax
        context.beginPath()
        for (let i = 0; i < segments; i++) {
          const x = (i - 1) * 3
          const elevation = ridgeShape(
            (x + offset) / Math.max(width, 1) + seconds * ridge.speed,
            ridge.frequency,
            ridge.phase,
          )
          const y = height * ridge.base - elevation * height * ridge.amplitude
          if (i === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
        context.strokeStyle = ridge.color
        context.globalAlpha = ridge.opacity
        context.lineWidth = 1.15
        context.lineJoin = 'round'
        context.lineCap = 'round'
        context.stroke()
      })
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
