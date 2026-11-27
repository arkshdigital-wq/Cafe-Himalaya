import Image from 'next/image'
import { FooterIllustration } from './footer-illustration'
import { Reveal } from './reveal'

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-foreground pt-20 pb-8 text-background">
      <FooterIllustration />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row md:gap-8">
          <Image
            src="/images/logo.png"
            alt="Café Himalaya"
            width={345}
            height={104}
            className="h-9 w-auto max-w-full object-contain md:h-12"
          />
          <nav aria-label="Social" className="text-[11px] uppercase tracking-[0.25em] text-background/60">
            <ul className="flex justify-center gap-6 sm:gap-8">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">TikTok</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Talabat</a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="mt-20 border-y border-background/15 py-10 md:py-12" aria-labelledby="footer-origin-title">
          <Reveal>
            <div className="grid items-end gap-5 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Field notes · Nepal · 28° N</p>
                <h2 id="footer-origin-title" className="mt-4 max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  The long way to a <em className="text-accent">good cup.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-background/65 md:justify-self-end">
                Coffee gathered in the highlands, tea plucked by hand, and a slow pour waiting at the end of the journey.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 flex flex-col justify-between gap-2 px-1 pt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-background/50 sm:flex-row sm:items-center">
            <span>Field study 01 · Nepal</span>
            <span>Himalaya <span className="text-accent">→</span> Terai <span className="text-accent">→</span> Dubai</span>
          </div>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-start gap-3 border-t border-background/20 pt-4">
              <span className="font-serif text-2xl italic text-accent">01</span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/55">Grown</p>
                <p className="mt-1 font-serif text-lg text-background/90">Highland coffee, Terai tea</p>
              </div>
            </li>
            <li className="flex items-start gap-3 border-t border-background/20 pt-4">
              <span className="font-serif text-2xl italic text-accent">02</span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/55">Gathered</p>
                <p className="mt-1 font-serif text-lg text-background/90">Picked by hand</p>
              </div>
            </li>
            <li className="flex items-start gap-3 border-t border-background/20 pt-4">
              <span className="font-serif text-2xl italic text-accent">03</span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/55">Prepared</p>
                <p className="mt-1 font-serif text-lg text-background/90">Dried, sorted, roasted</p>
              </div>
            </li>
            <li className="flex items-start gap-3 border-t border-background/20 pt-4">
              <span className="font-serif text-2xl italic text-accent">04</span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/55">Shared</p>
                <p className="mt-1 font-serif text-lg text-background/90">Simmered slowly in Dubai</p>
              </div>
            </li>
          </ol>
        </section>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-background/50 md:flex-row">
          <span>Café Himalaya — Dubai · JVM</span>
          <span>© {new Date().getFullYear()} Café Himalaya. All pots reserved.</span>
        </div>
      </div>
    </footer>
  )
}
