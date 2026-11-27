import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const hours = [
  { day: 'Mon — Thu', time: '7:00 — 01:00' },
  { day: 'Fri — Sat', time: '7:00 — 03:00' },
  { day: 'Sunday', time: '8:00 — 01:00' },
]

export function Visit() {
  return (
    <section id="visit" className="bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <Reveal className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-accent">§ 04</span> — Visit
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Pull up
            <br />a <em className="text-accent">chair.</em>
          </Reveal>
          <Reveal delay={200} className="mt-10">
            <a
              href="https://maps.google.com/?q=Jumeirah+Village+Dubai"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 border-b border-foreground pb-2 font-serif text-2xl md:text-3xl"
            >
              Get directions
              <ArrowUpRight
                className="size-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:col-span-6">
          <Reveal delay={100}>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Address</h3>
            <address className="mt-4 font-serif text-2xl not-italic leading-snug">
              Shop 4, District 12
              <br />
              Jumeirah Village
              <br />
              Dubai, UAE
            </address>
          </Reveal>
          <Reveal delay={200}>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Say hello</h3>
            <p className="mt-4 font-serif text-2xl leading-snug">
              <a href="tel:+97140000000" className="hover:text-accent transition-colors">
                +971 4 000 0000
              </a>
              <br />
                <a href="mailto:hello@cafehimalaya.ae" className="hover:text-accent transition-colors">
                  hello@cafehimalaya.ae
              </a>
            </p>
          </Reveal>
          <Reveal delay={300} className="sm:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Hours</h3>
            <dl className="mt-4">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between border-t border-border py-4 font-serif text-2xl">
                  <dt>{h.day}</dt>
                  <dd className="tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
