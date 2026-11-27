import Image from 'next/image'
import { Reveal } from './reveal'

const featuredDrinks = [
  {
    name: 'Chai',
    image: '/images/featured-cardamom-chai.jpg',
    alt: 'Masala chai poured into a glass beside cardamom pods.',
  },
  {
    name: 'Coffee',
    image: '/images/featured-latte.jpg',
    alt: 'Overhead view of a heart-patterned latte in a white cup.',
  },
  {
    name: 'Smoothies',
    image: '/images/featured-banana-smoothie.webp',
    alt: 'Banana smoothie topped with peanut butter, served in a glass.',
  },
]

export function FeaturedDrinks() {
  return (
    <section
      id="featured-drinks"
      className="bg-background py-12 text-foreground md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal as="h2" className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          A few café favourites
        </Reveal>
        <Reveal className="grid grid-cols-3 gap-3 sm:gap-5">
          {featuredDrinks.map((drink) => (
            <figure key={drink.name} className="group min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
                <Image
                  src={drink.image}
                  alt={drink.alt}
                  fill
                  sizes="(max-width: 639px) 31vw, (max-width: 1023px) 30vw, 360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="border-b border-foreground/20 py-2 sm:py-4">
                <h3 className="font-serif text-base sm:text-2xl">{drink.name}</h3>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
