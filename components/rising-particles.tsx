import type { CSSProperties } from 'react'

type Kind = 'bean' | 'leaf'

const particles: { kind: Kind; x: number; size: number; dur: number; delay: number; drift: number; spin: number }[] = [
  { kind: 'bean', x: 4, size: 22, dur: 14, delay: -2, drift: 40, spin: 220 },
  { kind: 'leaf', x: 11, size: 30, dur: 17, delay: -9, drift: -30, spin: -160 },
  { kind: 'bean', x: 19, size: 16, dur: 12, delay: -6, drift: 25, spin: 300 },
  { kind: 'leaf', x: 27, size: 24, dur: 16, delay: -13, drift: 50, spin: 140 },
  { kind: 'bean', x: 34, size: 20, dur: 13, delay: -1, drift: -45, spin: -260 },
  { kind: 'bean', x: 42, size: 14, dur: 11, delay: -8, drift: 20, spin: 200 },
  { kind: 'leaf', x: 49, size: 28, dur: 18, delay: -4, drift: -20, spin: 120 },
  { kind: 'bean', x: 56, size: 18, dur: 12.5, delay: -11, drift: 35, spin: -240 },
  { kind: 'leaf', x: 63, size: 22, dur: 15, delay: -7, drift: -40, spin: -180 },
  { kind: 'bean', x: 70, size: 24, dur: 14.5, delay: -3, drift: 30, spin: 280 },
  { kind: 'leaf', x: 77, size: 26, dur: 16.5, delay: -12, drift: 45, spin: 160 },
  { kind: 'bean', x: 84, size: 16, dur: 11.5, delay: -5, drift: -25, spin: -220 },
  { kind: 'leaf', x: 91, size: 30, dur: 19, delay: -10, drift: -35, spin: 130 },
  { kind: 'bean', x: 97, size: 20, dur: 13.5, delay: -14, drift: -50, spin: 260 },
]

function Bean() {
  return (
    <svg viewBox="-12 -16 24 32" className="h-full w-full">
      <ellipse rx={10} ry={14} fill="#5a3522" />
      <ellipse rx={10} ry={14} fill="url(#bean-sheen)" />
      <path d="M0 -12 C -5 -4 5 4 0 12" fill="none" stroke="#24150d" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

function Leaf() {
  return (
    <svg viewBox="-12 -16 24 32" className="h-full w-full">
      <path d="M0 -15 C 10 -8 10 8 0 15 C -10 8 -10 -8 0 -15Z" fill="#6f8a45" />
      <path d="M0 -13 L0 13 M0 -4 L5 -8 M0 2 L-5 -2 M0 7 L5 4" fill="none" stroke="#3f5326" strokeWidth={1} />
    </svg>
  )
}

export function RisingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg width={0} height={0} className="absolute">
        <defs>
          <radialGradient id="bean-sheen" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#a0663f" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#5a3522" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: `${p.x}%`,
              '--size': `${p.size}px`,
              '--dur': `${p.dur}s`,
              '--delay': `${p.delay}s`,
              '--drift': `${p.drift}px`,
              '--spin': `${p.spin}deg`,
            } as CSSProperties
          }
        >
          <span className="particle-body">{p.kind === 'bean' ? <Bean /> : <Leaf />}</span>
          <span className="particle-vapor" />
        </span>
      ))}
    </div>
  )
}
