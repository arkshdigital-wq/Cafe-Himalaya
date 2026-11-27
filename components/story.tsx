import { Reveal } from './reveal'
import { ParallaxImage } from './parallax-image'
import { StoryChaiArt } from './story-chai-art'

const stats = [
  { value: '40', unit: 'min', label: 'Simmer time per pot' },
  { value: '1.2k', unit: '', label: 'Cups poured daily' },
  { value: '7', unit: 'yrs', label: 'In the neighbourhood' },
]

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <StoryChaiArt />
        </div>
        <div className="md:col-span-6">
          <Reveal className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-accent">§ 01</span> — The Story
          </Reveal>
          <Reveal as="h2" className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            We started with one dented pot, a borrowed stove, and a <em className="text-accent">stubborn</em>{' '}
            grandmother&apos;s recipe.
          </Reveal>
        </div>
      </div>

      <Reveal variant="line" className="my-12 h-px bg-foreground" />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <ParallaxImage
            src="/images/spices.png"
            alt="Cardamom pods, cinnamon, saffron and loose tea leaves on cream linen"
            className="aspect-[3/4]"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Fig. 02 — What goes in the pot
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 md:col-span-6 md:col-start-7">
          <div className="columns-1 gap-10 leading-relaxed text-muted-foreground lg:columns-2">
            <Reveal as="p" className="drop-cap mb-6 text-foreground">
              Every morning at six, the first pot of Nepali chiya goes on. Strong tea, crushed green cardamom,
              fresh ginger, and a whisper of saffron simmer together before full-fat milk is added and brought
              to a rolling boil three times. Inspired by the tea stalls and mountain homes of Nepal, it brings
              the warmth of the Himalayas to our table in Jumeirah Village.
            </Reveal>
            <Reveal as="p" delay={150}>
              That same Himalayan spirit shapes the way we welcome you: long tables, shared plates, cricket on
              the screen, and chai poured generously. No syrups or shortcuts—just warming spices, familiar faces,
              and a staff who&apos;ll remember your order by your second visit. Come for one cup. Stay for three.
            </Reveal>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-t border-foreground pt-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-serif text-5xl md:text-6xl">{stat.value}</span>
                  <span className="ml-1 font-serif text-xl italic text-accent">{stat.unit}</span>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
