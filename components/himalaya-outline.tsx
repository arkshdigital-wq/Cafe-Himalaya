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
  { base: 0.92, amplitude: 0.76, frequency: 5.5, phase: 0.08, speed: 0.004, parallax: 4, color: '#75432d', opacity: 0.58 },
  { base: 1.12, amplitude: 0.94, frequency: 4.4, phase: 0.36, speed: 0.006, parallax: 7, color: '#b4532a', opacity: 0.22 },
]

function ridgeShape(position: number, frequency: number, phase: number) {
  const cyclePosition = position * frequency + phase
  const cycleIndex = Math.floor(cyclePosition)
  const progress = cyclePosition - cycleIndex
  const landmarks = [
    [0, 0.06],
    [0.13, 0.78],
    [0.25, 0.09],
    [0.43, 0.58],
    [0.52, 0.05],
    [0.72, 1],
    [0.82, 0.12],
    [0.93, 0.68],
    [1, 0.06],
  ] as const

  for (let index = 1; index < landmarks.length; index++) {
    const [rightPosition, rightHeight] = landmarks[index]
    if (progress <= rightPosition) {
      const [leftPosition, leftHeight] = landmarks[index - 1]
      const segmentProgress = (progress - leftPosition) / (rightPosition - leftPosition)
      const peakVariation = Math.abs(Math.sin((cycleIndex + phase) * 2.17 + index * 1.41)) * 0.18
      const adjustedRightHeight = rightHeight > 0.2 ? rightHeight * (1 - peakVariation) : rightHeight
      return leftHeight + (adjustedRightHeight - leftHeight) * segmentProgress
    }
  }

  return 0.06
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
        context.lineJoin = 'miter'
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
