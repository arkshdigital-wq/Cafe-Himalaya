const wisps = [
  { d: 'M150 400 C 110 330, 190 280, 150 210 S 110 90, 150 20', w: 10, delay: 0 },
  { d: 'M180 400 C 220 340, 140 290, 185 220 S 230 110, 190 30', w: 8, delay: -1.4 },
  { d: 'M120 400 C 90 350, 150 300, 115 240 S 80 130, 120 60', w: 7, delay: -2.6 },
  { d: 'M210 400 C 240 360, 190 310, 220 250 S 250 160, 215 90', w: 6, delay: -0.8 },
  { d: 'M160 400 C 130 320, 200 270, 160 190 S 130 80, 170 0', w: 12, delay: -3.4 },
]

export function SteamWisps() {
  return (
    <svg viewBox="0 0 300 400" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <filter id="steam-blur" x="-50%" y="-20%" width="200%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g filter="url(#steam-blur)" fill="none" strokeLinecap="round">
        {wisps.map((wisp, i) => (
          <path
            key={i}
            d={wisp.d}
            strokeWidth={wisp.w}
            className="animate-wisp stroke-background"
            style={{ animationDelay: `${wisp.delay}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
