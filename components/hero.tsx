import { HimalayaOutline } from '@/components/himalaya-outline'
import { ChaiGlass } from '@/components/chai-glass'

const offerings = [
  { number: '01', name: 'Café', detail: 'A little Kathmandu in JVM', mobilePosition: 'col-start-1 row-start-1' },
  { number: '02', name: 'Chai', detail: 'Slow-simmered, always shared', mobilePosition: 'col-start-2 row-start-1' },
  { number: '03', name: 'Beans', detail: 'Nepal-grown, thoughtfully roasted', mobilePosition: 'col-start-1 row-start-2' },
  { number: '04', name: 'Bites', detail: 'Something good with every cup', mobilePosition: 'col-start-2 row-start-2' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 -translate-y-4 h-80 opacity-40 md:h-96" aria-hidden="true">
        <HimalayaOutline />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-12 md:px-10 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-4xl py-14 text-center md:py-20">
          <p className="animate-fade-up text-[10px] uppercase tracking-[0.32em] text-accent" style={{ animationDelay: '100ms' }}>
            Café Himalaya
          </p>
          <h1 className="mt-5 font-serif text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.045em] text-balance">
            <span className="animate-rise block" style={{ animationDelay: '250ms' }}>
              A taste of
            </span>
            <span className="animate-rise block italic text-accent" style={{ animationDelay: '400ms' }}>
              the highlands.
            </span>
          </h1>
          <p className="animate-fade-up mx-auto mt-7 max-w-md text-sm leading-7 text-muted-foreground md:text-base" style={{ animationDelay: '650ms' }}>
            Nepal-grown coffee, cardamom-kissed chiya, and the comfort of a table with room for everyone.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-2 items-center gap-x-4 gap-y-2 pb-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:grid-cols-3 sm:gap-4">
          <span className="text-left">From the Himalayas</span>
          <span className="hidden text-center sm:block">Kathmandu spirit · Dubai warmth</span>
          <span className="text-right">Jumeirah Village</span>
        </div>


        <div
          id="offerings"
          className="mx-auto mb-10 grid max-w-5xl grid-cols-2 grid-rows-2 items-center gap-x-3 gap-y-2 pb-3 sm:grid-cols-[repeat(4,minmax(0,1fr))_16rem] sm:grid-rows-1 sm:gap-4"
        >
          {offerings.map((item) => (
            <a
              key={item.number}
              href="#menu"
              className={`group ${item.mobilePosition} border-b border-foreground/20 py-5 transition-colors duration-300 hover:bg-card/60 sm:col-start-auto sm:row-start-auto md:border-b-0 md:px-5 md:py-6 md:first:pl-0`}
            >
              <span className="text-[9px] tracking-[0.2em] text-accent">{item.number}</span>
              <span className="mt-1 flex items-center justify-between font-serif text-2xl md:text-3xl">
                {item.name}
                <span className="text-sm text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">↗</span>
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{item.detail}</span>
            </a>
          ))}
          <div className="col-span-2 col-start-1 row-start-3 aspect-square w-48 justify-self-center sm:col-span-1 sm:col-start-auto sm:row-start-auto sm:w-full sm:max-w-64">
            <ChaiGlass />
          </div>
        </div>
      </div>
    </section>
  )
}
