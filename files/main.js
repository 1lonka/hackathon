/* ─────────────────────────────────────────────
   OBSCURA — main.js
   ───────────────────────────────────────────── */

/* ── CURSOR ────────────────────────────────── */
(function initCursor() {
  const dot = document.getElementById('cur-dot');
  if (!dot) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Grow on interactive elements
  const interactable = 'a, button, .sdot, .tl-dot, .cam-frame, .arr-btn';
  document.querySelectorAll(interactable).forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hovering'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hovering'));
  });
})();

/* ── FLOATING PARTICLES ────────────────────── */
(function spawnParticles() {
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'ptcl';
    const sz = 0.5 + Math.random() * 1.6;
    Object.assign(p.style, {
      width:  sz + 'px',
      height: sz + 'px',
      left:   Math.random() * 100 + 'vw',
      animationDuration: (10 + Math.random() * 18) + 's',
      animationDelay:    (Math.random() * 22) + 's',
    });
    document.body.appendChild(p);
  }
})();

/* ── SIDE DOT NAV ──────────────────────────── */
(function initSideDots() {
  const sections = ['hero', 'timeline'];
  const sdots    = document.querySelectorAll('.sdot');

  sdots.forEach(d => {
    d.addEventListener('click', () => {
      const el = document.getElementById(sections[+d.dataset.sec]);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  sections.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (!el) return;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          sdots.forEach((d, i) => d.classList.toggle('active', i === idx));
      });
    }, { threshold: 0.35 }).observe(el);
  });
})();

/* ── TIMELINE / CAMERA GALLERY ─────────────── */
(function initTimeline() {
  if (typeof CAMERAS === 'undefined') return;

  let current  = 0;
  let animating = false;

  const display    = document.getElementById('camDisplay');
  const svgWrap    = document.getElementById('camSvgWrap');
  const nameEl     = document.getElementById('camName');
  const eraEl      = document.getElementById('camEra');
  const descEl     = document.getElementById('camDesc');
  const countEl    = document.getElementById('camIdx');
  const fillEl     = document.getElementById('tlFill');
  const dotsWrap   = document.getElementById('tlDots');
  const prevBtn    = document.getElementById('prevBtn');
  const nextBtn    = document.getElementById('nextBtn');
  const camFrame   = document.getElementById('camFrame');

  // Build dots
  CAMERAS.forEach((c, i) => {
    const d = document.createElement('div');
    d.className = 'tl-dot' + (i === 0 ? ' on' : '');
    d.dataset.year = c.year;
    d.addEventListener('click', () => goTo(i, i > current ? 'next' : 'prev'));
    dotsWrap.appendChild(d);
  });

  function updateDots() {
    const pct   = current / (CAMERAS.length - 1) * 100;
    fillEl.style.width = pct + '%';
    document.querySelectorAll('.tl-dot').forEach((d, i) =>
      d.classList.toggle('on', i === current)
    );
  }

  function render(dir) {
    const c = CAMERAS[current];

    display.classList.add('out');

    setTimeout(() => {
      svgWrap.innerHTML   = c.svg;
      nameEl.textContent  = c.name;
      eraEl.textContent   = c.era;
      descEl.textContent  = c.desc;
      countEl.textContent = current + 1;
      updateDots();

      display.classList.remove('out');
      if (dir) {
        display.classList.add(dir === 'next' ? 'anim-next' : 'anim-prev');
        setTimeout(() => display.classList.remove('anim-next', 'anim-prev'), 500);
      }
      animating = false;
    }, 320);
  }

  function goTo(idx, dir) {
    if (animating || idx === current) return;
    animating = true;
    current   = idx;
    render(dir);
  }

  prevBtn.addEventListener('click', () => {
    if (current > 0) goTo(current - 1, 'prev');
  });
  nextBtn.addEventListener('click', () => {
    if (current < CAMERAS.length - 1) goTo(current + 1, 'next');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && current < CAMERAS.length - 1) goTo(current + 1, 'next');
    if (e.key === 'ArrowLeft'  && current > 0)                   goTo(current - 1, 'prev');
  });

  // Click on camera → future detail page
  camFrame.addEventListener('click', () => {
    camFrame.style.transition = 'transform .15s';
    camFrame.style.transform  = 'scale(.97)';
    setTimeout(() => { camFrame.style.transform = ''; }, 160);
    // window.location.href = `detail.html?id=${current}`;
  });

  // Initial render
  render(null);
})();
