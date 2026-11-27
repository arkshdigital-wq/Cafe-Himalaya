'use client'

import { useId, useState, type CSSProperties } from 'react'
import { Reveal } from './reveal'

type TeaOption = {
  id: 'karak' | 'zafrani' | 'adrak' | 'noon'
  number: string
  name: string
  note: string
  price: string
  accent: string
}

const teaOptions: TeaOption[] = [
  { id: 'karak', number: '01', name: 'Classic Karak', note: 'Assam, cardamom, evaporated milk', price: '6', accent: '#b4532a' },
  { id: 'zafrani', number: '02', name: 'Zafrani', note: 'Saffron threads, rose, pistachio dust', price: '12', accent: '#a75c36' },
  { id: 'adrak', number: '03', name: 'Adrak Masala', note: 'Fresh ginger, clove, black pepper', price: '8', accent: '#8b5b36' },
  { id: 'noon', number: '04', name: 'Kashmiri Noon', note: 'Pink tea, salt, crushed almond', price: '14', accent: '#b76d63' },
]

function TeaIllustration({ tea }: { tea: TeaOption }) {
  const titleId = useId()
  const style = { '--tasting-accent': tea.accent } as CSSProperties

  return (
    <svg
      className="tasting-illustration"
      viewBox="0 0 560 380"
      role="img"
      aria-labelledby={titleId}
      style={style}
    >
      <title id={titleId}>{`Line drawing of ${tea.name} chai`}</title>
      <path className="tasting-draw" pathLength={1} d="M54 315 C143 309 201 316 281 313 C376 309 437 318 506 311" />
      <path className="tasting-draw" pathLength={1} d="M90 329 C197 323 364 331 474 324" />

      {tea.id === 'karak' && (
        <g>
          <path className="tasting-draw" pathLength={1} d="M207 177 C231 187 297 187 321 176 L312 277 C310 294 222 294 219 277 Z" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M209 184 C235 197 295 197 319 183" />
          <path className="tasting-draw" pathLength={1} d="M218 252 C241 263 286 264 313 252" />
          <path className="tasting-draw tasting-detail" pathLength={1} d="M231 199 L232 247 M249 202 L249 255 M268 203 L267 257 M287 201 L286 255 M305 197 L303 249" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M245 156 C230 139 246 127 240 111 M278 151 C293 136 274 124 287 108 M306 158 C321 143 308 132 317 119" />
          <path className="tasting-draw" pathLength={1} d="M150 293 C166 283 181 285 191 296 C182 308 165 309 150 293 Z M159 291 L181 300 M168 286 L173 305" />
        </g>
      )}

      {tea.id === 'zafrani' && (
        <g>
          <path className="tasting-draw" pathLength={1} d="M194 198 C200 246 217 274 260 276 C303 277 320 249 326 198" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M192 199 C218 187 300 187 328 199 C304 212 219 213 192 199 Z" />
          <path className="tasting-draw" pathLength={1} d="M325 211 C357 202 369 218 357 238 C349 252 336 251 323 245 M211 280 C233 292 292 294 313 280" />
          <path className="tasting-draw" pathLength={1} d="M221 162 C207 147 223 136 218 121 M263 157 C274 143 257 130 271 115 M300 165 C316 152 304 138 314 126" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M374 252 C386 226 394 211 401 196 M391 229 C407 222 414 210 415 198 M382 240 C369 233 367 221 369 212 M405 215 C421 210 427 201 428 188" />
          <path className="tasting-draw" pathLength={1} d="M403 286 C414 276 427 277 435 288 C427 299 414 300 403 286 Z M410 282 L430 293" />
        </g>
      )}

      {tea.id === 'adrak' && (
        <g>
          <path className="tasting-draw" pathLength={1} d="M196 190 C219 199 303 199 324 190 L318 266 C316 282 300 290 262 290 C224 290 207 282 204 266 Z" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M198 195 C225 207 296 207 322 195 M208 247 C235 258 291 259 317 247" />
          <path className="tasting-draw" pathLength={1} d="M324 207 C363 197 377 216 368 240 C362 257 343 259 319 248 M220 176 C239 186 287 186 305 176" />
          <path className="tasting-draw" pathLength={1} d="M227 157 C213 142 230 130 223 115 M266 154 C282 140 265 128 280 111 M300 160 C315 148 302 135 313 123" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M139 294 C146 279 163 273 177 281 C188 288 187 301 174 307 C160 313 145 307 139 294 Z M151 284 C158 291 164 298 169 306 M166 279 C166 287 171 293 179 297" />
          <path className="tasting-draw" pathLength={1} d="M393 291 C401 278 416 277 424 288 C420 299 407 304 393 291 Z M399 286 L417 295 M432 279 L442 269 M438 284 L448 278" />
        </g>
      )}

      {tea.id === 'noon' && (
        <g>
          <path className="tasting-draw" pathLength={1} d="M184 211 C210 199 315 199 341 211 C336 257 314 282 263 284 C211 282 190 256 184 211 Z" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M183 211 C212 225 314 225 342 211 M199 244 C227 257 302 258 327 244" />
          <path className="tasting-draw" pathLength={1} d="M209 180 C194 164 212 151 205 136 M260 174 C277 159 259 144 275 128 M310 181 C327 167 313 154 325 139" />
          <path className="tasting-draw tasting-accent" pathLength={1} d="M144 291 C148 278 158 270 170 272 C182 274 189 286 185 298 C175 306 159 304 144 291 Z M154 280 C164 285 174 292 181 299 M176 275 C172 283 176 291 184 296" />
          <path className="tasting-draw" pathLength={1} d="M374 284 C383 271 397 271 405 283 C400 296 387 301 374 284 Z M380 279 L398 291 M417 296 C425 281 439 280 447 291 C442 303 429 307 417 296 Z M425 287 L441 300" />
        </g>
      )}
    </svg>
  )
}

export function TastingFlight() {
  const groupName = useId()
  const [selectedId, setSelectedId] = useState<TeaOption['id']>('karak')
  const selectedTea = teaOptions.find((tea) => tea.id === selectedId) ?? teaOptions[0]

  return (
    <section id="tasting" className="scroll-mt-16 bg-background py-10 md:scroll-mt-20 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal as="h2" className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground md:text-sm">
          <span className="grid h-3 w-3 shrink-0 place-items-center rounded-full bg-accent/20" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Each mug is a project. Get a taste.
        </Reveal>

        <div className="mt-5 grid items-center gap-7 sm:mt-7 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] md:gap-12">
          <Reveal delay={120} className="relative flex aspect-[14/10] w-full items-center justify-center">
            <TeaIllustration key={selectedTea.id} tea={selectedTea} />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal as="p" delay={180} className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Choose a chai
            </Reveal>
            <fieldset className="mt-2 grid grid-cols-2 gap-x-4 md:grid-cols-1">
              <legend className="sr-only">Select a chai to see its drawing</legend>
              {teaOptions.map((tea) => {
                const inputId = `${groupName}-${tea.id}`

                return (
                  <label key={tea.id} htmlFor={inputId} className="group cursor-pointer">
                    <input
                      className="peer sr-only"
                      id={inputId}
                      name={groupName}
                      type="radio"
                      value={tea.id}
                      checked={selectedId === tea.id}
                      onChange={() => setSelectedId(tea.id)}
                    />
                    <span className="flex items-baseline gap-3 border-b border-foreground/15 py-3 transition-colors peer-checked:border-accent peer-checked:text-accent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-accent">{tea.number}</span>
                      <span className={`font-serif text-lg transition-transform group-hover:translate-x-1${selectedId === tea.id ? ' italic' : ''}`}>{tea.name}</span>
                    </span>
                  </label>
                )
              })}
            </fieldset>

            <Reveal delay={240} className="mt-5 border-t border-foreground/15 pt-4">
              <div aria-live="polite" aria-atomic="true">
                <p className="font-serif text-2xl leading-tight">{selectedTea.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{selectedTea.note}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">AED {selectedTea.price}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
