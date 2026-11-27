'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Item = { name: string; note: string; price: string; image: string }

const menu: Record<string, Item[]> = {
  Chai: [
    { name: 'Classic Karak', note: 'Assam, cardamom, evaporated milk', price: '6', image: '/images/hero-chai.png' },
    { name: 'Zafrani', note: 'Saffron threads, rose, pistachio dust', price: '12', image: '/images/spices.png' },
    { name: 'Adrak Masala', note: 'Fresh ginger, clove, black pepper', price: '8', image: '/images/spices.png' },
    { name: 'Kashmiri Noon', note: 'Pink tea, salt, crushed almond', price: '14', image: '/images/hero-chai.png' },
  ],
  Bites: [
    { name: 'Bun Maska', note: 'Soft bun, salted butter, griddled', price: '9', image: '/images/snacks.png' },
    { name: 'Punjabi Samosa', note: 'Spiced potato, pea, tamarind', price: '7', image: '/images/snacks.png' },
    { name: 'Chips Oman Paratha', note: 'Flaky paratha, cheese, crisps', price: '15', image: '/images/snacks.png' },
    { name: 'Keema Pav', note: 'Slow lamb mince, buttered pav', price: '22', image: '/images/interior.png' },
  ],
}

export function MenuSection() {
  const categories = Object.keys(menu)
  const [category, setCategory] = useState(categories[0])
  const [active, setActive] = useState(0)
  const items = menu[category]

  return (
    <section id="menu" className="menu-paper-texture relative isolate bg-foreground py-20 text-background md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal className="text-[11px] uppercase tracking-[0.25em] text-background/60">
              <span className="text-accent">§ 02</span> — The Menu
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-6 font-serif text-6xl leading-none tracking-tight md:text-8xl">
              Small <em className="text-accent">menu.</em>
              <br />
              Big pots.
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div role="tablist" aria-label="Menu categories" className="flex gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => {
                    setCategory(c)
                    setActive(0)
                  }}
                  className={cn(
                    'rounded-full border px-6 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300',
                    category === c
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-background/30 hover:border-background',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <ul key={category} className="md:col-span-7" role="tabpanel" aria-label={category}>
            {items.map((item, i) => (
              <li
                key={item.name}
                className={cn(
                  'animate-fade-up border-t border-background/20 transition-colors duration-300 last:border-b',
                  active === i ? 'bg-accent/10' : 'bg-transparent',
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  aria-pressed={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-6 py-6 text-left"
                >
                  <span className="text-[11px] tabular-nums text-background/50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        'block font-serif text-3xl transition-all duration-500 md:text-5xl',
                        active === i ? 'translate-x-3 italic text-accent' : 'group-hover:translate-x-2',
                      )}
                    >
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-background/60">{item.note}</span>
                  </span>
                  <span className="font-serif text-2xl tabular-nums">
                    <span className="text-xs uppercase tracking-[0.2em] text-background/50">AED </span>
                    {item.price}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative hidden md:col-span-5 md:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden">
              {items.map((item, i) => (
                <Image
                  key={item.name}
                  src={item.image}
                  alt={active === i ? item.name : ''}
                  fill
                  sizes="40vw"
                  className={cn(
                    'object-cover transition-all duration-700 ease-out',
                    active === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0',
                  )}
                />
              ))}
              <div className="absolute bottom-4 left-4 rounded-full bg-background px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground">
                {items[active]?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
