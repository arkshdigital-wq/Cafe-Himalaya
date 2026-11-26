const flagColors = ['#3d6aa8', '#efe6d6', '#b4392a', '#4b7d52', '#d9a83a']
const flagCount = 31
const width = 1440
const sag = 60

const flags = Array.from({ length: flagCount }, (_, i) => {
  const t = (i + 0.5) / flagCount
  const x = width * t
  const y = 8 + 2 * sag * t * (1 - t)
  return { x, y, color: flagColors[i % flagColors.length], delay: (i % 7) * -0.4 }
})

export function PrayerFlags() {
  return (
    <svg viewBox={`0 0 ${width} 110`} preserveAspectRatio="xMidYMin slice" className="h-full w-full" aria-hidden="true">
      <path
        d={`M0 8 Q${width / 2} ${8 + sag * 2} ${width} 8`}
        fill="none"
        className="stroke-background/30"
        strokeWidth={1}
      />
      {flags.map((flag, i) => (
        <g key={i} transform={`translate(${flag.x - 13} ${flag.y})`}>
          <rect
            width={26}
            height={32}
            fill={flag.color}
            opacity={0.8}
            className="animate-flutter"
            style={{ animationDelay: `${flag.delay}s` }}
          />
        </g>
      ))}
    </svg>
  )
}
