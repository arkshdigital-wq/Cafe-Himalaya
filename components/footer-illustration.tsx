'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function FooterIllustration() {
  const illustrationRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const illustration = illustrationRef.current
    if (!illustration) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(illustration)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
    >
      <div className={`footer-illustration-loop relative w-full ${isInView ? 'is-active' : ''}`}>
        <Image
          src="/images/footer-tea-garden-reference.png"
          alt=""
          width={1440}
          height={495}
          sizes="100vw"
          loading="eager"
          style={{ filter: 'hue-rotate(-160deg)' }}
          className="block h-auto w-full opacity-60"
        />
        <Image
          src="/images/footer-himalaya-peaks-overlay.png"
          alt=""
          width={1792}
          height={592}
          sizes="100vw"
          loading="eager"
          style={{
            filter: 'hue-rotate(-160deg) contrast(1.08)',
            width: '106.4%',
            left: '-3.2%',
            transform: 'scale(0.94, 1.18)',
            transformOrigin: 'bottom center',
          }}
          className="absolute bottom-0 h-auto max-w-none opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
      </div>
    </div>
  )
}
