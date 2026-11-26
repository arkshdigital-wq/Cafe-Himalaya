'use client'

import { useEffect, useRef, useState } from 'react'

export function ChaiGlass() {
  const [drawKey, setDrawKey] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    if (!('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    let wasInView = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return

      if (entry.isIntersecting && !wasInView) {
        wasInView = true
        setIsInView(true)
        setDrawKey((key) => key + 1)
      } else if (!entry.isIntersecting && wasInView) {
        wasInView = false
        setIsInView(false)
      }
    }, { threshold: 0.2 })

    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  function replayDrawing() {
    setDrawKey((key) => key + 1)
  }

  return (
    <svg
      ref={svgRef}
      className={`cafe-line-art chai-glass block h-full w-full overflow-visible${isInView ? ' is-in-view' : ''}`}
      viewBox="40 0 310 420"
      role="img"
      tabIndex={0}
      aria-label="Line drawing of a ribbed chai glass with rising steam. Activate to redraw."
      onClick={replayDrawing}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          replayDrawing()
        }
      }}
    >
      <defs>
        <linearGradient id="chai-glass-fade" gradientUnits="userSpaceOnUse" x1="350" y1="0" x2="175" y2="0">
          <stop offset="0" stopColor="#75432d" stopOpacity="0" />
          <stop offset="1" stopColor="#75432d" stopOpacity="1" />
        </linearGradient>
      </defs>

      <g key={drawKey}>
        <path
          className="chai-glass-draw"
          pathLength={1}
          d="M250 418 C226 410 198 410 174.5 411.6 C194.1 358.2 218.1 291.3 232.7 243.1 C230.9 253 194.8 250.6 151.5 243 C108.1 235.4 73.4 225.2 75.1 215.3 C74.3 266 72.2 346.8 72.1 393.5 C93.7 409.5 148.8 419.2 174.5 411.6 L181.6 394.5 C151.9 401.5 96.8 391.8 71.3 375.1 L83.2 379.2 C86 349.3 84.6 328.7 86.6 306.7 C88.5 294.9 109.2 298.5 107.4 310.4 C104.3 332.2 102.9 357.3 100.3 382.2 C98.8 392.1 115.5 395.1 117.5 385.3 C121.6 360.6 124.9 335.8 128.2 314 C130.3 302.2 151.1 305.9 149 317.7 C145.2 339.4 139.3 363.7 134.7 388.3 C133.2 398.2 150 401.1 151.9 391.3 C157 366.9 164.3 342.8 169.8 321.4 C171.9 309.6 192.7 313.2 190.6 325 C186 346.6 176.7 370.3 169 394.4 C188.1 369.3 204.5 333.6 210.8 298.1 C203.8 303 174.1 298.8 142.6 293.2 C109.1 287.3 78.3 277.8 77.9 268.6 C79.6 258.8 113.6 261.7 147.1 267.6 C180.6 273.5 207.5 282.3 205.9 291.2 C204.7 298.1 178.9 294.6 153.3 290 C125.7 285.2 104.6 278.4 105.6 272.5 C106.7 266.6 130.3 270.8 145.7 275.5 C157.2 279.6 158.3 284.8 148.5 283.1 C162.5 271.1 198.5 265.1 186.5 233.1 C182.5 207.1 140.5 207.1 146.5 179.1 C148.5 153.1 192.5 157.1 188.5 127.1 C186.5 101.1 148.5 103.1 152.5 75.1 C154.5 51.1 186.5 51.1 182.5 27.1"
        />
        <path className="chai-glass-highlight" pathLength={1} d="M81.8 234.8 C81.4 248.9 80.9 263.1 80.8 275.2" />
        <path
          className="chai-glass-wisp"
          pathLength={1}
          d="M148.5 283.1 C162.5 271.1 198.5 265.1 186.5 233.1 C182.5 207.1 140.5 207.1 146.5 179.1 C148.5 153.1 192.5 157.1 188.5 127.1 C186.5 101.1 148.5 103.1 152.5 75.1 C154.5 51.1 186.5 51.1 182.5 27.1"
        />
        <path
          className="chai-glass-wisp chai-glass-wisp-secondary"
          pathLength={1}
          d="M182.5 253.1 C170.5 243.1 142.5 237.1 152.5 209.1 C156.5 187.1 190.5 185.1 186.5 163.1 C184.5 141.1 148.5 143.1 154.5 117.1 C156.5 95.1 184.5 97.1 180.5 75.1"
        />
      </g>
    </svg>
  )
}
