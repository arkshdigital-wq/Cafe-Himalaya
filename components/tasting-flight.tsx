import Image from 'next/image'
import { Reveal } from './reveal'

const cups = [
  {
    number: '01',
    name: 'Classic Karak',
    note: 'Strong Assam, cardamom, slow-simmered.',
    image: '/images/cup-classic-karak.png',
  },
  {
    number: '02',
    name: 'Zafrani',
    note: 'Saffron threads, rose, pistachio dust.',
    image: '/images/cup-zafrani.png',
  },
  {
    number: '03',
    name: 'Adrak Masala',
    note: 'Fresh ginger, clove, black pepper.',
    image: '/images/cup-adrak-masala.png',
  },
  {
    number: '04',
    name: 'Kashmiri Noon',
    note: 'Blush-pink tea, salt, crushed almond.',
    image: '/images/cup-kashmiri-noon.png',
  },
]

export function TastingFlight() {
  return (
    <section id="tasting" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            A little something from the pot
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-5 font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
            Every cup has a story.
            <br />
            <em className="text-accent">Get a taste.</em>
          </Reveal>
        </div>
        <Reveal delay={200} className="max-w-sm text-sm leading-6 text-muted-foreground">
          A few sips of the Himalayas: slow-simmered chai, layered with spice, and always served warm.
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
        {cups.map((cup, index) => (
          <Reveal key={cup.number} delay={index * 90} className="h-full">
            <a
              href="#menu"
              aria-label={`${cup.name}: ${cup.note} Explore the full menu.`}
              className="group flex h-full flex-col border border-border/80 bg-card/50 p-3 transition-colors duration-300 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-4"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <Image
                  src={cup.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 23vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="flex flex-1 flex-col pt-4 sm:pt-5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-accent">Pour {cup.number}</span>
                <h3 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">{cup.name}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{cup.note}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
