import { Reveal } from './reveal'
import { ParallaxImage } from './parallax-image'
import { CoffeeMachineArt } from './coffee-machine-art'

const steps = [
  { title: 'Crush', body: 'Green cardamom and ginger, pounded fresh in brass, never pre-ground.' },
  { title: 'Boil', body: 'Leaves, water and spice brought up three times to coax out the colour.' },
  { title: 'Pull', body: 'Poured from a height to aerate — that’s where the froth comes from.' },
]

export function Ritual() {
  return (
    <section id="ritual" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-accent">§ 03</span> — The Ritual
        </Reveal>

        <blockquote className="mx-auto mt-12 max-w-5xl text-center">
          <Reveal as="p" className="font-serif text-4xl leading-[1.1] tracking-tight text-balance md:text-7xl">
            &ldquo;Good chai isn&apos;t made. It&apos;s <em className="text-accent">waited for.</em>&rdquo;
          </Reveal>
          <Reveal as="footer" delay={150} className="mt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            — Ammi, head of the pot
          </Reveal>
        </blockquote>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl items-center gap-10 px-6 md:mt-32 md:grid-cols-2 md:px-10">
        <Reveal className="max-w-lg">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-accent">Fig. 03</span> — Coffee, drawn slowly
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
            A little room for <em className="text-accent">the ritual.</em>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Fresh-ground beans, a careful pull, and a warm cup shared at the table. Good things take the time they take.
          </p>
        </Reveal>
        <Reveal delay={150} className="flex justify-center">
          <CoffeeMachineArt />
        </Reveal>
      </div>

      <ParallaxImage
        src="/images/interior.png"
        alt="Warm interior of the chai house at dusk with pendant lights and wooden benches"
        className="mt-20 h-[60vh] md:h-[85vh]"
        strength={120}
      />

      <div className="mx-auto mt-20 grid max-w-7xl gap-12 px-6 md:grid-cols-3 md:px-10">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 150} className="border-t border-foreground pt-6">
            <span className="font-serif text-lg italic text-accent">No. {i + 1}</span>
            <h3 className="mt-2 font-serif text-5xl">{step.title}</h3>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
