export function CoffeeMachineArt() {
  return (
    <svg
      className="coffee-machine-art h-auto w-full"
      viewBox="0 0 720 480"
      role="img"
      aria-labelledby="coffee-machine-title coffee-machine-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="coffee-machine-title">A hand-drawn espresso machine</title>
      <desc id="coffee-machine-description">
        Fine terracotta line art of a countertop espresso machine pulling a fresh cup, with rising steam and coffee beans.
      </desc>
      <g className="machine-lines">
        <path d="M218 103c0-17 13-30 30-30h183c17 0 30 13 30 30v190H218V103Z" />
        <path d="M201 293h278v39H201zM228 332h223v20H228z" />
        <path d="M245 73V48h68v25M392 73V48h44v25" />
        <path d="M274 49V31h39v18M392 49V31h44v18" />
        <path d="M265 112h147v85H265z" />
        <path d="M282 127h113v52H282z" />
        <path d="M285 210h104M297 220h80" />
        <circle cx="246" cy="126" r="9" />
        <circle cx="422" cy="126" r="9" />
        <path d="M246 116v-9m0 38v-9m-10-10h-9m38 0h-9M422 116v-9m0 38v-9m-10-10h-9m38 0h-9" />
        <path d="M331 198v34c0 12 10 22 22 22h43" />
        <path d="M386 254h56" />
        <path d="M433 207v43" />
        <path d="M421 207h24" />
        <path d="M353 254v29m50-29v29" />
        <path d="M326 283h106" />
        <path d="M345 287v13c0 16 13 29 29 29s29-13 29-29v-13" />
        <path d="M344 300h60" />
        <path d="M340 283h69" />
        <path d="M447 174h31v15h-31zM459 189v63" />
        <path d="M218 359h239M237 359v12m28-12v12m28-12v12m28-12v12m28-12v12m28-12v12m28-12v12m28-12v12" />
        <path d="M190 372h300M206 390h269" />
        <path d="M250 404h191" />
        <path d="M290 391v21m113-21v21" />
        <path d="M357 140c-12-16-5-29 4-41 8-9 11-17 6-28M381 136c-9-14-5-24 3-33" className="machine-steam" />
        <path d="M169 370c-16-2-24 6-24 17s8 17 22 18m362-35c17-2 25 6 25 17s-8 17-23 18" />
        <path d="M121 407c9-10 22-10 30 0-8 11-21 11-30 0Zm13-1c-3-9 3-17 12-18 4 9-1 17-12 18Zm365 1c9-10 22-10 30 0-8 11-21 11-30 0Zm13-1c-3-9 3-17 12-18 4 9-1 17-12 18Z" />
        <path d="M177 300c-15 5-22 15-21 28m382-28c15 5 22 15 21 28" className="machine-detail" />
      </g>
    </svg>
  )
}
