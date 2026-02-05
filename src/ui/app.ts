import { packages, type TravelPackage } from '../data/packages'

const MICROSEASONS: Array<{ title: string; window: string; notes: string }> = [
  {
    title: 'Roots & steps',
    window: 'Oct–Apr',
    notes:
      'Better trekking conditions for Nongriat / living root bridge routes; plan buffer for rain and slippery steps.'
  },
  {
    title: 'Crystal river days',
    window: 'Nov–Mar',
    notes:
      'Clearer water + pleasant temps around Dawki/Shnongpdeng for boating and camp vibes.'
  },
  {
    title: 'Wildlife window',
    window: 'Nov–Apr',
    notes:
      'Kaziranga is most commonly visited in the drier months for safaris; confirm park opening dates each season.'
  }
]

export function renderApp(mount: HTMLDivElement | null) {
  if (!mount) return

  const state = {
    soundOn: false,
    audio: null as HTMLAudioElement | null,
    activePackageId: packages[0]?.id ?? null
  }

  mount.innerHTML = buildShell()

  const grid = mustGet<HTMLDivElement>('#packageGrid')
  const openPackages = mustGet<HTMLButtonElement>('#openPackages')
  const modal = mustGet<HTMLDivElement>('#packageModal')
  const closeModal = mustGet<HTMLButtonElement>('#closePackage')
  const soundToggle = mustGet<HTMLButtonElement>('#soundToggle')

  function paint() {
    grid.innerHTML = packages.map((p) => packageCard(p)).join('')

    const hint = mustGet<HTMLDivElement>('#heroHint')
    hint.textContent = `Two packages. Same design language. Choose your ending: Meghalaya only, or Meghalaya + Kaziranga.`

    const cardButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-open-package]'))
    cardButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.openPackage
        if (!id) return
        state.activePackageId = id
        setModal(true)
      })
    })
  }

  function setModal(open: boolean) {
    modal.classList.toggle('is-open', open)
    modal.setAttribute('aria-hidden', String(!open))
    if (open) {
      paintModal(state.activePackageId)
      const first = modal.querySelector<HTMLElement>('button, a, [tabindex]')
      first?.focus()
    } else {
      openPackages.focus()
    }
  }

  openPackages.addEventListener('click', () => {
    const top = document.querySelector('#packages')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  closeModal.addEventListener('click', () => setModal(false))

  modal.addEventListener('click', (e) => {
    if (e.target === modal) setModal(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) setModal(false)
  })

  soundToggle.addEventListener('click', async () => {
    state.soundOn = !state.soundOn
    soundToggle.setAttribute('aria-pressed', String(state.soundOn))
    soundToggle.textContent = state.soundOn ? 'Ambient: on' : 'Ambient'

    if (!state.soundOn) {
      state.audio?.pause()
      return
    }

    if (!state.audio) {
      state.audio = buildAmbientAudio()
      document.body.appendChild(state.audio)
    }

    try {
      await state.audio.play()
    } catch {
      state.soundOn = false
      soundToggle.setAttribute('aria-pressed', 'false')
      soundToggle.textContent = 'Ambient'
    }
  })

  paint()
}

function packageCard(p: TravelPackage) {
  const badges = [
    `<span class="badge">${escapeHtml(p.durationLabel)}</span>`,
    `<span class="badge">${escapeHtml(p.pickupLabel)}</span>`
  ].join('')

  const brief = p.itineraryBrief
    .map((d) => `<li><span class="badge">Day ${d.day}</span> ${escapeHtml(d.title)}</li>`)
    .join('')

  const highlights = p.highlights.map((h) => `<span class="badge">${escapeHtml(h)}</span>`).join('')

  return `
    <article class="card card--package">
      <div class="card__meta">${badges}</div>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.subtitle)}</p>
      <div class="package__cols">
        <div>
          <div class="card__meta" style="margin-bottom:8px"><span class="badge">Itinerary brief</span></div>
          <ol class="daylist">${brief}</ol>
        </div>
        <div>
          <div class="card__meta" style="margin-bottom:8px"><span class="badge">Highlights</span></div>
          <div class="card__meta">${highlights}</div>
        </div>
      </div>
      <div class="package__cta">
        <button class="btn" type="button" data-open-package="${escapeAttr(p.id)}">View full itinerary</button>
      </div>
    </article>
  `
}

function paintModal(activePackageId: string | null) {
  const modalBody = mustGet<HTMLDivElement>('#packageModalBody')
  const p = packages.find((x) => x.id === activePackageId) ?? packages[0]
  if (!p) {
    modalBody.innerHTML = ''
    return
  }

  const brief = p.itineraryBrief.map((d) => modalDay(d.day, d.title, [])).join('')
  const detailed = p.itineraryDetailed.map((d) => modalDay(d.day, d.title, d.details)).join('')

  modalBody.innerHTML = `
    <div class="card__meta" style="margin-bottom:10px">
      <span class="badge">${escapeHtml(p.durationLabel)}</span>
      <span class="badge">${escapeHtml(p.pickupLabel)}</span>
      <span class="badge">Contact: ${escapeHtml(p.contact.name)} ${escapeHtml(p.contact.phone)}</span>
    </div>

    <h4 class="modal__subtitle">Itinerary (brief)</h4>
    <div class="itinerary">${brief}</div>

    <h4 class="modal__subtitle" style="margin-top:14px">Itinerary (detailed)</h4>
    <div class="itinerary">${detailed}</div>

    <div class="split" style="margin-top:14px">
      <div>
        <h4 class="modal__subtitle">Inclusions</h4>
        <ul class="list">${p.inclusions.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      </div>
      <div>
        <h4 class="modal__subtitle">Exclusions</h4>
        <ul class="list">${p.exclusions.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      </div>
    </div>

    <h4 class="modal__subtitle" style="margin-top:14px">Important information</h4>
    <ul class="list">${p.importantInfo.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>

    <h4 class="modal__subtitle" style="margin-top:14px">References</h4>
    <div class="card__meta">
      ${p.sources
        .map(
          (s) =>
            `<a class="badge" href="${escapeAttr(s.href)}" target="_blank" rel="noreferrer">${escapeHtml(
              s.label
            )}</a>`
        )
        .join('')}
    </div>
  `
}

function modalDay(day: number, title: string, bullets: string[]) {
  return `
    <div class="itinerary__day">
      <div class="itinerary__head">
        <span class="badge">Day ${day}</span>
        <div class="itinerary__title">${escapeHtml(title)}</div>
      </div>
      ${
        bullets.length
          ? `<ul class="list">${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
          : ''
      }
    </div>
  `
}

function buildShell() {
  return `
    <a class="skip" href="#main">Skip to content</a>

    <header class="topbar" role="banner">
      <div class="wrap topbar__inner">
        <div class="brand" aria-label="Sarthi">
          <div class="brand__mark" aria-hidden="true">SA</div>
          <div class="brand__text">
            <div class="brand__name">Sarthi</div>
            <div class="brand__tag">Northeast India • Expedition Atelier</div>
          </div>
        </div>

        <nav class="nav" aria-label="Primary">
          <a href="#packages">Packages</a>
          <a href="#microseasons">Micro-seasons</a>
          <a href="#studio">Studio</a>
          <a href="#sources">References</a>
        </nav>

        <div class="topbar__actions">
          <button class="btn btn--ghost" id="soundToggle" type="button" aria-pressed="false">Ambient</button>
          <button class="btn" id="openPackages" type="button">View packages</button>
        </div>
      </div>
    </header>

    <main id="main" class="main" role="main">
      <section class="hero" aria-label="Intro">
        <div class="wrap hero__inner">
          <div>
            <p class="eyebrow">Two packages. No clutter.</p>
            <h1>
              Meghalaya,
              <span class="gradient">done right</span>
            </h1>
            <p class="lede">
              A backpacking-style flow through Shillong, Cherrapunjee, Nongriat and Dawki — with an optional wildlife finale
              in <em>Kaziranga</em>.
            </p>

            <p class="lede" id="heroHint" style="margin-top:12px;font-size:13px"></p>
          </div>

          <aside class="panel" aria-label="How to plan">
            <div class="panel__head"><p class="panel__title">What this includes</p></div>
            <div class="panel__body">
              <p class="lede" style="margin:0;font-size:14px">
                Both packages are built around:
                <span class="gradient">root bridges</span>,
                <span class="gradient">falls</span>,
                <span class="gradient">Dawki waters</span>, and
                <span class="gradient">Shillong evenings</span>.
              </p>
              <div style="margin-top:12px" class="card__meta">
                <span class="badge">Pickup: Ex-Guwahati</span>
                <span class="badge">Small-group vibe</span>
                <span class="badge">Day-wise plan inside</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="packages" class="section" aria-label="Packages">
        <div class="wrap">
          <div class="section__head">
            <h2>Packages</h2>
            <p>Pick Meghalaya only, or add Kaziranga.</p>
          </div>
          <div class="grid" id="packageGrid"></div>
        </div>
      </section>

      <section id="microseasons" class="section" aria-label="Micro-seasons">
        <div class="wrap">
          <div class="section__head">
            <h2>Micro-seasons</h2>
            <p>Because “best time to visit” is too blunt a tool.</p>
          </div>
          <div class="grid">
            ${MICROSEASONS.map(
              (m) => `
              <article class="card">
                <div class="card__meta"><span class="badge">${escapeHtml(m.window)}</span></div>
                <h3>${escapeHtml(m.title)}</h3>
                <p>${escapeHtml(m.notes)}</p>
              </article>
            `
            ).join('')}
          </div>
        </div>
      </section>

      <section id="studio" class="section" aria-label="Studio">
        <div class="wrap">
          <div class="section__head">
            <h2>The studio</h2>
            <p>Small, specific, and respectful.</p>
          </div>

          <div class="grid">
            <article class="card">
              <div class="card__meta"><span class="badge">Principle</span></div>
              <h3>Fewer places, deeper stays</h3>
              <p>We’d rather give you one morning worth remembering than twelve rushed stops.</p>
            </article>
            <article class="card">
              <div class="card__meta"><span class="badge">Principle</span></div>
              <h3>Routes are “mood-first”</h3>
              <p>Start with what you want to feel. The itinerary is the translation.</p>
            </article>
            <article class="card">
              <div class="card__meta"><span class="badge">Principle</span></div>
              <h3>We cite our sources</h3>
              <p>Claims are linked. If a detail matters, you’ll see where it came from.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="sources" class="section" aria-label="Sources">
        <div class="wrap">
          <div class="section__head">
            <h2>References</h2>
            <p>Primary/official references where possible.</p>
          </div>

          <div class="panel">
            <div class="panel__body">
              <div class="card__meta" style="margin-bottom:10px">
                <span class="badge">UNESCO</span>
                <a class="badge" href="https://whc.unesco.org/en/list/337/" target="_blank" rel="noreferrer">Kaziranga National Park</a>
                <a class="badge" href="https://whc.unesco.org/en/tentativelists/6606/" target="_blank" rel="noreferrer">Living Root Bridge Cultural Landscapes</a>
              </div>
              <p class="small" style="margin-top:12px">
                Note: Some Northeast destinations require permits (e.g., ILP / PAP depending on state and nationality). This site is a design demo; verify requirements on official state portals when you travel.
              </p>
            </div>
          </div>

          <footer class="footer">
            <div class="wrap">
              <p style="margin:0">© ${new Date().getFullYear()} Sarthi (demo). Built with TypeScript + Vite.</p>
            </div>
          </footer>
        </div>
      </section>
    </main>

    <div class="modal" id="packageModal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Package details">
      <div class="modal__panel">
        <div class="modal__head">
          <h3 class="modal__title">Package details</h3>
          <button class="iconbtn" id="closePackage" type="button" aria-label="Close">✕</button>
        </div>
        <div class="modal__body">
          <div id="packageModalBody"></div>
        </div>
      </div>
    </div>
  `
}

function mustGet<T extends Element>(selector: string): T {
  const el = document.querySelector(selector)
  if (!el) throw new Error(`Missing element: ${selector}`)
  return el as T
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function escapeAttr(input: string) {
  return escapeHtml(input)
}

function buildAmbientAudio(): HTMLAudioElement {
  const audio = document.createElement('audio')
  audio.loop = true
  audio.volume = 0.25

  // A tiny embedded wav (very short) is expensive; instead we synthesize a soft noise bed.
  // We do this by using an oscillator through a lowpass filter. No external assets.
  // We implement it via WebAudio but keep an <audio> tag for simple state.

  const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  const filter = ctx.createBiquadFilter()

  osc.type = 'triangle'
  osc.frequency.value = 96

  filter.type = 'lowpass'
  filter.frequency.value = 480
  filter.Q.value = 0.8

  gain.gain.value = 0

  osc.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  let target = 0.08
  const ramp = () => {
    gain.gain.setTargetAtTime(target, ctx.currentTime, 0.2)
  }

  const start = async () => {
    if (ctx.state !== 'running') await ctx.resume()
    target = 0.08
    ramp()
  }

  const stop = () => {
    target = 0
    ramp()
  }

  audio.play = (async () => {
    await start()
    return Promise.resolve()
  }) as unknown as HTMLMediaElement['play']

  audio.pause = (() => {
    stop()
  }) as unknown as HTMLMediaElement['pause']

  return audio
}
