import Image from 'next/image'
import { Reveal } from './reveal'

export function TastingFlight() {
  return (
    <section id="tasting" className="scroll-mt-16 bg-background py-8 md:scroll-mt-20 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal as="h2" className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground md:text-sm">
          <span className="grid h-3 w-3 shrink-0 place-items-center rounded-full bg-accent/20" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Each mug is a project. Get a taste.
        </Reveal>
        <Reveal delay={120} className="relative mt-5 aspect-[16/9] w-full overflow-hidden sm:mt-7">
          <Image
            src="/images/himalaya-counter-line-art.png"
            alt="Hand-drawn Himalayan cafe counter with tea cups, a brass kettle, a leafy plant, and an espresso machine."
            fill
            sizes="(min-width: 1440px) 1400px, 100vw"
            className="object-contain"
          />
        </Reveal>
      </div>
    </section>
  )
}
