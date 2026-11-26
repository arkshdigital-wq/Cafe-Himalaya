const words = ['Karak', 'Saffron', 'Cardamom', 'Bun Maska', 'Samosa', 'Zafrani', 'Ginger', 'Masala']

export function Marquee() {
  const items = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-foreground bg-foreground py-3 text-background" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        {items.map((word, i) => (
          <span key={i} className="flex items-center font-serif text-2xl italic md:text-4xl">
            <span className="inline-block -rotate-2 px-5">{word}</span>
            <span className="size-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
