/* ─────────────────────────────────────────────
   OBSCURA — cameras.js  |  Camera data
   ───────────────────────────────────────────── */

const CAMERAS = [
  {
    name: "Camera Obscura",
    era: "c. 1550 — Pre-Photography",
    year: "1550",
    desc: "The ancestor of all cameras — a darkened room that projected an inverted image through a tiny aperture. Used by artists and scientists for centuries before film was invented.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="26" y="50" width="188" height="152" rx="6" fill="#2d1a0a" stroke="#bc9976" stroke-width="1.5"/>
      <rect x="40" y="64" width="160" height="122" rx="4" fill="#1a0e07" stroke="#7a5c3a" stroke-width="1"/>
      <rect x="46" y="70" width="148" height="110" fill="#0d0805"/>
      <circle cx="120" cy="125" r="36" fill="none" stroke="#bc9976" stroke-width="1.5"/>
      <circle cx="120" cy="125" r="7" fill="#e0a800"/>
      <line x1="120" y1="125" x2="58" y2="76" stroke="#e0a800" stroke-width=".7" opacity=".3"/>
      <line x1="120" y1="125" x2="182" y2="76" stroke="#e0a800" stroke-width=".7" opacity=".3"/>
      <line x1="120" y1="125" x2="58" y2="174" stroke="#e0a800" stroke-width=".7" opacity=".3"/>
      <line x1="120" y1="125" x2="182" y2="174" stroke="#e0a800" stroke-width=".7" opacity=".3"/>
      <rect x="112" y="44" width="16" height="10" rx="2" fill="#bc9976"/>
      <text x="120" y="220" text-anchor="middle" fill="#bc9976" font-size="8" font-family="serif" letter-spacing="3">OBSCURA</text>
    </svg>`
  },
  {
    name: "Daguerreotype",
    era: "1839 — First Practical Camera",
    year: "1839",
    desc: "Louis Daguerre's revolutionary silver-plate process stunned the world. Unparalleled sharpness, each image unique — a one-of-a-kind mirror of memory.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="42" y="34" width="156" height="182" rx="5" fill="#251508" stroke="#bc9976" stroke-width="1.5"/>
      <rect x="52" y="46" width="136" height="112" rx="3" fill="#160c05" stroke="#8a6940" stroke-width="1"/>
      <rect x="58" y="52" width="124" height="100" fill="#0a0603"/>
      <rect x="58" y="52" width="124" height="100" fill="url(#dag)" opacity=".75"/>
      <defs>
        <linearGradient id="dag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e0a800" stop-opacity=".13"/>
          <stop offset="50%" stop-color="#fff8f0" stop-opacity=".04"/>
          <stop offset="100%" stop-color="#bc9976" stop-opacity=".09"/>
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="192" rx="28" ry="12" fill="#3d2510" stroke="#bc9976" stroke-width="1"/>
      <rect x="104" y="30" width="32" height="8" rx="2" fill="#bc9976"/>
      <text x="120" y="228" text-anchor="middle" fill="#bc9976" font-size="7" font-family="serif" letter-spacing="1.5">DAGUERREOTYPE</text>
    </svg>`
  },
  {
    name: "Kodak No. 1",
    era: "1888 — Photography for Everyone",
    year: "1888",
    desc: "George Eastman's genius — a pre-loaded box camera that democratized photography with the legendary slogan: 'You press the button, we do the rest.'",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="46" y="46" width="148" height="140" rx="11" fill="#8B0000" stroke="#bc9976" stroke-width="1.5"/>
      <circle cx="120" cy="114" r="40" fill="#1a0e07" stroke="#bc9976" stroke-width="2"/>
      <circle cx="120" cy="114" r="29" fill="#0d0805" stroke="#7a5c3a" stroke-width="1"/>
      <circle cx="120" cy="114" r="15" fill="#111"/>
      <circle cx="120" cy="114" r="6" fill="#e0a800" opacity=".82"/>
      <circle cx="132" cy="102" r="3.5" fill="#fff8f0" opacity=".35"/>
      <rect x="158" y="62" width="24" height="14" rx="3" fill="#5a1a1a" stroke="#bc9976" stroke-width="1"/>
      <rect x="48" y="56" width="12" height="120" rx="2" fill="#5a1a1a"/>
      <text x="120" y="210" text-anchor="middle" fill="#e0a800" font-size="13" font-family="serif" letter-spacing="5" font-weight="bold">KODAK</text>
    </svg>`
  },
  {
    name: "Leica I",
    era: "1925 — The 35mm Revolution",
    year: "1925",
    desc: "Oskar Barnack's masterpiece — the world's first truly portable 35mm camera. It transformed photojournalism and gave birth to street photography.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="24" y="80" width="192" height="100" rx="5" fill="#2a2a2a" stroke="#bc9976" stroke-width="1.5"/>
      <rect x="26" y="82" width="188" height="7" fill="#1a1a1a"/>
      <rect x="26" y="171" width="188" height="7" fill="#1a1a1a"/>
      <circle cx="106" cy="130" r="34" fill="#1a1a1a" stroke="#8a8a8a" stroke-width="2"/>
      <circle cx="106" cy="130" r="23" fill="#0d0d0d" stroke="#555" stroke-width="1"/>
      <circle cx="106" cy="130" r="11" fill="#111"/>
      <circle cx="106" cy="130" r="4" fill="#e0a800" opacity=".82"/>
      <circle cx="118" cy="118" r="3" fill="#fff8f0" opacity=".4"/>
      <rect x="154" y="92" width="52" height="34" rx="2" fill="#1a1a1a" stroke="#555" stroke-width="1"/>
      <rect x="158" y="96" width="44" height="26" fill="#0d0d0d"/>
      <rect x="42" y="70" width="30" height="14" rx="3" fill="#2a2a2a" stroke="#7a7a7a" stroke-width="1"/>
      <text x="106" y="208" text-anchor="middle" fill="#e0a800" font-size="11" font-family="serif" letter-spacing="5">LEICA</text>
    </svg>`
  },
  {
    name: "Rolleiflex",
    era: "1929 — The Twin-Lens Reflex",
    year: "1929",
    desc: "Two lenses, one camera. The Rolleiflex's waist-level viewfinder and square format gave portrait masters unmatched intimacy with their subjects.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="62" y="20" width="116" height="200" rx="8" fill="#2a1a0e" stroke="#bc9976" stroke-width="1.5"/>
      <rect x="70" y="28" width="100" height="76" rx="5" fill="#1a0e07" stroke="#7a5c3a" stroke-width="1"/>
      <circle cx="120" cy="66" r="30" fill="#0d0805" stroke="#bc9976" stroke-width="1.5"/>
      <circle cx="120" cy="66" r="20" fill="#111" stroke="#555" stroke-width="1"/>
      <circle cx="120" cy="66" r="9" fill="#1a1a1a"/>
      <circle cx="120" cy="66" r="3.5" fill="#e0a800" opacity=".7"/>
      <rect x="70" y="116" width="100" height="84" rx="5" fill="#1a0e07" stroke="#7a5c3a" stroke-width="1"/>
      <circle cx="120" cy="158" r="30" fill="#0d0805" stroke="#bc9976" stroke-width="1.5"/>
      <circle cx="120" cy="158" r="20" fill="#111" stroke="#555" stroke-width="1"/>
      <circle cx="120" cy="158" r="9" fill="#1a1a1a"/>
      <circle cx="120" cy="158" r="4" fill="#e0a800" opacity=".85"/>
      <circle cx="131" cy="148" r="3" fill="#fff8f0" opacity=".3"/>
      <text x="120" y="232" text-anchor="middle" fill="#bc9976" font-size="8" font-family="serif" letter-spacing="2">ROLLEIFLEX</text>
    </svg>`
  },
  {
    name: "Polaroid Land",
    era: "1948 — Instant Gratification",
    year: "1948",
    desc: "Edwin Land's instant camera delivered a developed print in 60 seconds — making the invisible act of memory visible and immediate for the very first time.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="36" y="46" width="168" height="128" rx="14" fill="#d8d4ce" stroke="#bc9976" stroke-width="1.5"/>
      <rect x="48" y="58" width="144" height="80" rx="7" fill="#1a1a1a" stroke="#555" stroke-width="1"/>
      <circle cx="100" cy="98" r="27" fill="#0d0d0d" stroke="#555" stroke-width="1.5"/>
      <circle cx="100" cy="98" r="17" fill="#111"/>
      <circle cx="100" cy="98" r="7.5" fill="#1a1a1a"/>
      <circle cx="100" cy="98" r="3" fill="#e0a800" opacity=".82"/>
      <circle cx="112" cy="86" r="3" fill="#fff8f0" opacity=".4"/>
      <rect x="140" y="66" width="42" height="30" rx="5" fill="#cc3333" stroke="#aa2222" stroke-width="1"/>
      <rect x="146" y="72" width="30" height="18" rx="2" fill="#ff5555" opacity=".7"/>
      <rect x="36" y="172" width="168" height="32" rx="5" fill="#c8c4be" stroke="#bc9976" stroke-width="1"/>
      <rect x="52" y="176" width="136" height="24" rx="3" fill="#e2e0dc"/>
      <text x="120" y="226" text-anchor="middle" fill="#e0a800" font-size="10" font-family="sans-serif" letter-spacing="4" font-weight="bold">POLAROID</text>
    </svg>`
  },
  {
    name: "Nikon F",
    era: "1959 — The SLR Standard",
    year: "1959",
    desc: "The camera that defined modern SLR photography. Interchangeable lenses, through-the-lens viewing, and rugged build — the choice of photojournalists worldwide.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="20" y="70" width="184" height="118" rx="6" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/>
      <polygon points="64,70 176,70 190,45 52,45" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/>
      <rect x="70" y="38" width="100" height="10" rx="3" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
      <circle cx="106" cy="130" r="42" fill="#111" stroke="#555" stroke-width="2"/>
      <circle cx="106" cy="130" r="30" fill="#0d0d0d" stroke="#444" stroke-width="1"/>
      <circle cx="106" cy="130" r="17" fill="#111"/>
      <circle cx="106" cy="130" r="6" fill="#e0a800" opacity=".72"/>
      <circle cx="118" cy="118" r="4.5" fill="#fff8f0" opacity=".3"/>
      <rect x="158" y="78" width="40" height="102" rx="5" fill="#222" stroke="#555" stroke-width="1"/>
      <circle cx="178" cy="108" r="16" fill="#1a1a1a" stroke="#444" stroke-width="1"/>
      <rect x="26" y="60" width="32" height="14" rx="3" fill="#222" stroke="#555" stroke-width="1"/>
      <text x="106" y="212" text-anchor="middle" fill="#e0a800" font-size="12" font-family="sans-serif" letter-spacing="5" font-weight="bold">NIKON</text>
    </svg>`
  },
  {
    name: "Canon EOS 650",
    era: "1987 — The Autofocus Era",
    year: "1987",
    desc: "Canon's fully electronic lens mount enabled blazing autofocus for the first time. The EOS system rewrote the rules and opened photography to a new generation.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="16" y="62" width="208" height="130" rx="10" fill="#1e1e1e" stroke="#555" stroke-width="1.5"/>
      <rect x="16" y="62" width="208" height="22" rx="10" fill="#151515"/>
      <rect x="94" y="38" width="84" height="30" rx="7" fill="#1e1e1e" stroke="#555" stroke-width="1.5"/>
      <circle cx="98" cy="128" r="47" fill="#111" stroke="#444" stroke-width="2"/>
      <circle cx="98" cy="128" r="35" fill="#0d0d0d" stroke="#333" stroke-width="1"/>
      <circle cx="98" cy="128" r="21" fill="#111"/>
      <circle cx="98" cy="128" r="8" fill="#1a1a1a"/>
      <circle cx="98" cy="128" r="3.5" fill="#e0a800" opacity=".75"/>
      <circle cx="112" cy="114" r="4.5" fill="#fff8f0" opacity=".35"/>
      <rect x="160" y="72" width="30" height="18" rx="4" fill="#e0a800"/>
      <rect x="24" y="72" width="20" height="20" rx="3" fill="#333" stroke="#555" stroke-width="1"/>
      <text x="98" y="214" text-anchor="middle" fill="#e0a800" font-size="12" font-family="sans-serif" letter-spacing="5" font-weight="bold">CANON</text>
    </svg>`
  },
  {
    name: "Smartphone Era",
    era: "2007–Present — Computational Photography",
    year: "2007",
    desc: "The camera in your pocket reinvented photography with AI-driven processing, multiple lenses, and night mode. A billion photographers — and counting.",
    svg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:210px;height:210px">
      <rect x="68" y="10" width="104" height="220" rx="18" fill="#1a1a1a" stroke="#555" stroke-width="1.5"/>
      <rect x="71" y="13" width="98" height="214" rx="16" fill="#111"/>
      <rect x="91" y="17" width="58" height="8" rx="4" fill="#222"/>
      <rect x="74" y="28" width="92" height="168" rx="6" fill="#0a0a0a" stroke="#222" stroke-width=".5"/>
      <rect x="74" y="28" width="92" height="168" rx="6" fill="url(#scr2)" opacity=".6"/>
      <defs>
        <radialGradient id="scr2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e0a800" stop-opacity=".08"/>
          <stop offset="100%" stop-color="#bc9976" stop-opacity=".02"/>
        </radialGradient>
      </defs>
      <rect x="76" y="32" width="38" height="38" rx="8" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
      <circle cx="87" cy="43" r="7" fill="#0d0d0d" stroke="#444" stroke-width="1"/>
      <circle cx="87" cy="43" r="2.8" fill="#e0a800" opacity=".72"/>
      <circle cx="103" cy="43" r="7" fill="#0d0d0d" stroke="#444" stroke-width="1"/>
      <circle cx="103" cy="43" r="2.8" fill="#e0a800" opacity=".72"/>
      <circle cx="87" cy="59" r="7" fill="#0d0d0d" stroke="#444" stroke-width="1"/>
      <circle cx="87" cy="59" r="2.8" fill="#e0a800" opacity=".72"/>
      <circle cx="95" cy="51" r="2.8" fill="#c8920a" opacity=".5"/>
      <rect x="68" y="78" width="8" height="32" rx="4" fill="#222" stroke="#333" stroke-width=".5"/>
      <rect x="68" y="118" width="8" height="24" rx="4" fill="#222" stroke="#333" stroke-width=".5"/>
      <text x="120" y="235" text-anchor="middle" fill="#e0a800" font-size="7.5" font-family="monospace" letter-spacing="3">COMPUTATIONAL</text>
    </svg>`
  }
];
