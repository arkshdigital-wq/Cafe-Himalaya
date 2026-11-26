'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#ritual', label: 'Ritual' },
  { href: '#visit', label: 'Visit' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/90 py-3 text-foreground backdrop-blur-md border-b border-border'
          : 'bg-background/90 py-4 text-foreground backdrop-blur-md md:bg-transparent md:py-6',
      )}
    >
      <div className="relative mx-auto flex max-w-7xl items-center px-6 md:px-10">
        <a
          href="#top"
          aria-hidden={scrolled}
          tabIndex={scrolled ? -1 : undefined}
          className={cn(
            'absolute left-1/2 top-1/2 z-10 block -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-[max-height,opacity] duration-300 hover:opacity-80',
            scrolled ? 'pointer-events-none max-h-0 opacity-0' : 'max-h-12 opacity-100 md:max-h-14',
          )}
        >
          <Image
            src="/images/logo.png"
            alt="Café Himalaya"
            width={345}
            height={104}
            priority
            className={cn('w-auto transition-all duration-500', scrolled ? 'h-8 md:h-9' : 'h-9 md:h-13')}
          />
        </a>
        <nav aria-label="Primary" className="w-full">
          <div className="flex w-full items-center justify-between">
            {[links.slice(0, 2), links.slice(2)].map((group) => (
              <ul
                key={group[0].href}
                className="flex items-center gap-3 text-[8px] uppercase tracking-[0.08em] sm:gap-4 sm:text-[9px] sm:tracking-[0.16em] md:gap-10 md:text-xs md:tracking-[0.2em]"
              >
                {group.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="group relative py-1">
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
