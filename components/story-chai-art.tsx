'use client'

import { useEffect, useRef, useState } from 'react'

export function StoryChaiArt() {
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
      className={`cafe-line-art story-chai-art block h-auto w-full overflow-visible${isInView ? ' is-in-view' : ''}`}
      viewBox="0 0 960 380"
      role="img"
      tabIndex={0}
      aria-label="Flowing line drawing of a chai cup on a saucer with rising steam. Activate to redraw."
      onClick={replayDrawing}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          replayDrawing()
        }
      }}
    >
      <defs>
        <linearGradient id="story-line-fade" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="260" y2="0">
          <stop offset="0" stopColor="#75432d" stopOpacity="0" />
          <stop offset="1" stopColor="#75432d" stopOpacity="1" />
        </linearGradient>
      </defs>

      <g key={drawKey} transform="translate(-240 0)">
        <path
          className="story-draw story-art-main"
          pathLength={1}
          d="M500 320 C525 312 550 316 570 316 C590 316 635 354 700 354 C772 354 836 340 832 312 C830 298 800 290 768 290 C815 284 872 270 872 232 C872 196 842 176 812 190 C828 196 830 226 808 238 C796 246 786 234 794 224 C800 216 802 205 800 195 C808 275 760 304 700 304 C640 304 592 275 600 195 C602 180 650 170 700 170 C756 170 800 180 800 195 C800 210 752 220 700 220 C650 220 612 212 610 200 C608 190 650 184 700 184 C748 184 782 190 782 200 C782 210 748 213 712 211 C678 209 664 198 680 191 C696 184 722 192 716 202 C712 208 700 204 704 198 C716 188 752 180 742 158 C732 134 690 128 702 102 C714 76 750 82 744 58 C738 36 710 30 722 10"
        />
        <path
          className="story-draw story-art-band"
          pathLength={1}
          d="M612 240 C640 262 662 226 700 244 C738 262 762 228 790 242"
        />
        <path
          className="story-art-wisp"
          pathLength={1}
          d="M704 198 C716 188 752 180 742 158 C732 134 690 128 702 102 C714 76 750 82 744 58 C738 36 710 30 722 10"
        />
        <path className="story-art-wisp story-art-wisp-secondary" pathLength={1} d="M740 186 C778 160 752 136 774 108 C796 80 764 58 782 26" />
      </g>
    </svg>
  )
}
