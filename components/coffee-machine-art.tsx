import Image from 'next/image'

export function CoffeeMachineArt() {
  return (
    <Image
      className="coffee-machine-art h-auto w-full mix-blend-multiply"
      src="/images/espresso-machine-editorial.png"
      alt="An illustrated stainless-steel espresso machine pulling a fresh demitasse"
      width={1376}
      height={768}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}
