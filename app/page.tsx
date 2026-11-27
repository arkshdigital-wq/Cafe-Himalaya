import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Story } from '@/components/story'
import { TastingFlight } from '@/components/tasting-flight'
import { MenuSection } from '@/components/menu-section'
import { Ritual } from '@/components/ritual'
import { Visit } from '@/components/visit'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <TastingFlight />
        <MenuSection />
        <Ritual />
        <Visit />
      </main>
      <SiteFooter />
    </>
  )
}
