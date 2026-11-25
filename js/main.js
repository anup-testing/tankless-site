/* =========================================================
   The Tankless: shared script
   1. SITE config (edit business details here)
   2. Icon set
   3. Shared components (header, footer, testimonials, CTA bar)
   4. UI modules (nav, reveal, counters, accordion, tabs,
      slider, calculator, symptom picker, forms, ripple)
   5. Boot
   ========================================================= */

/* ---------- 1. SITE config ---------- */
/* All media lives on the WordPress media library. Swap URLs here, or
   download the files into /assets and point these at "assets/...". */
const MEDIA_BASE = "https://thetankless.ca/wp-content/uploads";
const MEDIA = {
  logo: "assets/the-tankless-logo.png", // white-on-transparent; needs a dark background
  video: `${MEDIA_BASE}/2026/05/the-Tankless.mp4`,
  zeroMaint: `${MEDIA_BASE}/2026/11/cd0683c861fb384084634f4f0f01bed3194a7e1b.webp`,
  install: `${MEDIA_BASE}/2026/10/installation-services.webp`,
  product: `${MEDIA_BASE}/2026/09/download-1.png`,
  repairOpen: `${MEDIA_BASE}/2026/06/freepik_edit_generate-9-different-angles-of-this-image-Tile-8-1.webp`,
  checks: `${MEDIA_BASE}/2026/11/f19971a1a8f704b685a16fc6033c86c208176be7.webp`,
  t1: `${MEDIA_BASE}/2025/11/testimonial-1.jpg`,
  t2: `${MEDIA_BASE}/2025/11/testimonial-2.jpg`,
  t3: `${MEDIA_BASE}/2025/11/testimonial-3.jpg`
};

const SITE = {
  name: "The Tankless",
  tagline: "Endless hot water, engineered on demand. Professionally installed across Ontario.",
  phone: "",                       // The live site lists no phone number. Add one here (and phoneHref) to show it.
  phoneHref: "",
  email: "support@thetankless.ca",
  address: "301 Bradwick Drive, Vaughan, ON L4K 1K5",
  support: "24/7/365 support",
  nav: [
    { label: "Home", href: "index.html", id: "home" },
    { label: "Installation", href: "installation.html", id: "installation" },
    { label: "Repair", href: "repair.html", id: "repair" },
    { label: "Zero Maintenance", href: "maintenance.html", id: "maintenance" },
    { label: "About Us", href: "about.html", id: "about" },
    { label: "Blog", href: "blog.html", id: "blog" },
    { label: "Contact", href: "#contact", id: "contact" }
  ],
  services: [
    { label: "Tankless Installation", href: "installation.html" },
    { label: "Tankless Repair", href: "repair.html" },
    { label: "Zero Maintenance", href: "maintenance.html" }
  ],
  company: [
    { label: "About Us", href: "about.html" },
    { label: "Blog", href: "blog.html" },
    { label: "Contact Us", href: "https://thetankless.ca/contact-us/" }
  ],
  legal: [
    { label: "Privacy Policy", href: "https://thetankless.ca/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://thetankless.ca/terms-and-conditions/" }
  ],
  testimonials: [
    { name: "John", city: "Toronto", photo: MEDIA.t1, text: "Hard water killed our old tank. With The Tankless, we've had zero issues, and I love controlling it from my phone." },
    { name: "Jennifer", city: "Kitchener", photo: MEDIA.t3, text: "We switched to The Tankless and instantly cut our bills. Plus, no more fights over hot water in the mornings!" },
    { name: "Michael", city: "Waterloo", photo: MEDIA.t2, text: "Finally, hot water that doesn't quit. No scaling, no stress, just comfort every day." },
    { name: "Amanda", city: "Waterloo", text: "We love not having to think about our hot water anymore. It works seamlessly with our daily routine, and the convenience has been worth the upgrade." },
    { name: "Robert", city: "Hamilton", text: "From installation to daily use, everything has been great. We love having dependable hot water without the hassle of a traditional water tank." }
  ]
};

/* ---------- 2. Icons (inline SVG, stroke = currentColor) ---------- */
const svg = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const ICONS = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  left: svg('<path d="M15 18l-6-6 6-6"/>'),
  right: svg('<path d="M9 18l6-6-6-6"/>'),
  up: svg('<path d="M12 19V5M6 11l6-6 6 6"/>'),
  phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
  pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  clock: svg('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  check: svg('<path d="M20 6 9 17l-5-5"/>'),
  maple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5l1.9 3.7 2-1-.9 6.3 3-3.1.7 1.6 3.1-.7-1.1 3.7 1.6.8-5.4 4.2.6 1.8-5-.8.2 4.5h-1.4l.2-4.5-5 .8.6-1.8-5.4-4.2 1.6-.8-1.1-3.7 3.1.7.7-1.6 3 3.1-.9-6.3 2 1z"/></svg>',
  bolt: svg('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
  drop: svg('<path d="M12 2.7 17.7 8.4a8 8 0 1 1-11.4 0z"/>'),
  expand: svg('<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>'),
  wifi: svg('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01"/>'),
  refresh: svg('<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12A9 9 0 0 1 18.5 5.8L21 8M21 3v5h-5M3 21v-5h5"/>'),
  wrench: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>'),
  headset: svg('<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'),
  shield: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
  tag: svg('<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><path d="M7 7h.01"/>')
};

const LOGO = `
<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
  <defs>
    <linearGradient id="lgF" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1ea7ff"/><stop offset="1" stop-color="#1ea7ff"/></linearGradient>
    <linearGradient id="lgW" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6cc4ff"/><stop offset="1" stop-color="#6cc4ff"/></linearGradient>
  </defs>
  <rect x="1" y="1" width="38" height="38" rx="11" fill="#1c222b"/>
  <path d="M20 8c3 4.5 6 7.4 6 11.3a6 6 0 0 1-12 0C14 15.4 17 12.5 20 8z" fill="url(#lgF)"/>
  <path d="M9 30c2.2-1.6 4.4-1.6 6.6 0s4.4 1.6 6.6 0 4.4-1.6 6.6 0 2.2 1.6 2.2 1.6" stroke="url(#lgW)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
</svg>`;

const LOGO_FALLBACK = `${LOGO}<span>the<em>Tankless</em></span>`;
const logoHTML = () => `<img class="logo-img" src="${MEDIA.logo}" alt="${SITE.name}" width="776" height="290" data-logo>`;
function initLogoFallback() {
  $$("img[data-logo]").forEach(img => {
    const swap = () => { img.outerHTML = LOGO_FALLBACK; };
    if (img.complete && img.naturalWidth === 0) swap(); else img.addEventListener("error", swap, { once: true });
  });
}

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- 3. Shared components ---------- */
function renderHeader() {
  const mount = $('[data-component="header"]');
  if (!mount) return;
  const page = document.body.dataset.page;
  const links = SITE.nav.map(n =>
    `<a href="${n.href}" class="${n.id === page ? "is-active" : ""}" ${n.id === page ? 'aria-current="page"' : ""}>${n.label}</a>`
  ).join("");

  mount.outerHTML = `
  <div class="scroll-progress" aria-hidden="true"></div>
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="${SITE.name} home">${logoHTML()}</a>
      <nav class="nav" id="site-nav" aria-label="Main">${links}</nav>
      <div class="header-actions">
        ${SITE.phone ? `<a class="header-phone" href="${SITE.phoneHref}">${ICONS.phone}${SITE.phone}</a>` : ""}
        <a href="#contact" class="btn btn--primary btn--sm">Free Quote ${ICONS.arrow}</a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const mount = $('[data-component="footer"]');
  if (!mount) return;
  const list = arr => arr.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join("");
  mount.outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo" aria-label="${SITE.name} home">${logoHTML()}</a>
          <p>${SITE.tagline}</p>
        </div>
        <div><h4>Services</h4><ul>${list(SITE.services)}</ul></div>
        <div><h4>Company</h4><ul>${list(SITE.company)}</ul></div>
        <div><h4>Get in touch</h4>
          <ul>
            ${SITE.phone ? `<li><a href="${SITE.phoneHref}">${SITE.phone}</a></li>` : ""}
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>${SITE.address}</li>
            <li>${SITE.support}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
        <div class="footer-end">
          <nav aria-label="Legal">${SITE.legal.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</nav>
          <button type="button" class="theme-toggle" data-theme-toggle aria-label="Switch to light theme" aria-pressed="false">
            <span class="tt-track"><span class="tt-thumb">
              <svg class="tt-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
              <svg class="tt-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            </span></span>
            <span class="tt-label">Dark mode</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
  <div class="mobile-cta" aria-label="Quick actions">
    ${SITE.phone ? `<a class="btn btn--ghost" href="${SITE.phoneHref}">${ICONS.phone} Call</a>` : ""}
    <a class="btn btn--primary" href="#contact">Free Quote</a>
  </div>
  <button class="to-top" aria-label="Back to top">${ICONS.up}</button>`;
}

/* Contact section: <div data-component="contact" data-title="..." data-lead="..." data-service="repair"></div> */
function renderContact() {
  $$('[data-component="contact"]').forEach(el => {
    const { title = "Ready to go tankless?", lead = "Tell us a little about your home and we'll come back with a clear, no-pressure quote.", service = "" } = el.dataset;
    const opt = (v, l) => `<option value="${v}" ${v === service ? "selected" : ""}>${l}</option>`;
    el.outerHTML = `
    <section class="section section--dark" id="contact">
      <div class="container contact-grid">
        <div data-reveal="left">
          <span class="eyebrow">Free consultation</span>
          <h2>${title}</h2>
          <p class="hero-lead">${lead}</p>
          <div data-component="contact-info"></div>
        </div>
        <div class="form-card" data-reveal="right">
          <form data-validate novalidate>
            <h3>Request your free quote</h3>
            <div class="form-grid">
              <div class="field"><input id="fn" name="firstName" placeholder=" " required autocomplete="given-name"><label for="fn">First name</label><span class="field-error">Please enter your first name.</span></div>
              <div class="field"><input id="ln" name="lastName" placeholder=" " required autocomplete="family-name"><label for="ln">Last name</label><span class="field-error">Please enter your last name.</span></div>
              <div class="field"><input id="em" type="email" name="email" placeholder=" " required autocomplete="email"><label for="em">Email</label><span class="field-error">Enter a valid email address.</span></div>
              <div class="field"><input id="ph" type="tel" name="phone" placeholder=" " autocomplete="tel"><label for="ph">Phone (optional)</label><span class="field-error">Enter a valid phone number.</span></div>
              <div class="field field--full">
                <select id="sv" name="service" required>
                  ${opt("", "Choose a service")}${opt("installation", "New installation / tank-to-tankless")}${opt("replacement", "Tankless replacement")}${opt("repair", "Repair or diagnosis")}${opt("maintenance", "Maintenance / descaling")}${opt("other", "Something else")}
                </select><label for="sv">What do you need?</label><span class="field-error">Please choose a service.</span>
              </div>
              <div class="field field--full"><textarea id="ms" name="message" placeholder=" " required minlength="10"></textarea><label for="ms">Tell us about your home or the issue</label><span class="field-error">A few words help us prepare (10+ characters).</span></div>
            </div>
            <div class="form-foot">
              <small>Our team is here to assist you 24/7/365.</small>
              <button type="submit" class="btn btn--primary">Send request ${ICONS.arrow}</button>
            </div>
          </form>
          <div class="form-success" role="status">
            <div class="icon-tile">${ICONS.check}</div>
            <h3>Thanks, request received</h3>
            <p>A tankless advisor will be in touch with you shortly.</p>
          </div>
        </div>
      </div>
    </section>`;
  });
}

function renderContactInfo() {
  $$('[data-component="contact-info"]').forEach(el => {
    el.outerHTML = `
    <div class="contact-info">
      ${SITE.phone ? `<a href="${SITE.phoneHref}">${ICONS.phone}<span><small>Call us</small>${SITE.phone}</span></a>` : ""}
      <a href="mailto:${SITE.email}">${ICONS.mail}<span><small>Email</small>${SITE.email}</span></a>
      <div>${ICONS.pin}<span><small>Head office</small>${SITE.address}</span></div>
      <div>${ICONS.clock}<span><small>Support</small>${SITE.support}</span></div>
    </div>`;
  });
}

function renderTestimonials() {
  const track = $("[data-testimonials]");
  if (!track) return;
  const stars = ICONS.star.repeat(5);
  track.innerHTML = SITE.testimonials.map(t => `
    <article class="card t-card">
      <div class="t-stars" aria-label="5 out of 5 stars">${stars}</div>
      <blockquote>“${t.text}”</blockquote>
      <div class="t-author">
        <span class="avatar" aria-hidden="true">${t.photo ? `<img src="${t.photo}" alt="" loading="lazy" onerror="this.remove()">` : ""}${t.photo ? "" : t.name[0]}</span>
        <span><strong>${t.name}</strong><small>${t.city}, ON</small></span>
      </div>
    </article>`).join("");
}

/* Inject icon placeholders: <span data-icon="arrow"></span> */
function renderIcons() {
  $$("[data-icon]").forEach(el => { el.outerHTML = ICONS[el.dataset.icon] || ""; });
}

/* ---------- 4. UI modules ---------- */

/* Header: scrolled state, hide on scroll down, progress bar, back-to-top, mobile CTA */
function initScrollUI() {
  const header = $(".site-header");
  const progress = $(".scroll-progress");
  const toTop = $(".to-top");
  const mobileCta = $(".mobile-cta");
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header?.classList.toggle("is-scrolled", y > 30);
    const navOpen = document.body.classList.contains("nav-open");
    header?.classList.toggle("is-hidden", !navOpen && y > 400 && y > lastY);
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    toTop?.classList.toggle("is-shown", y > 700);
    mobileCta?.classList.toggle("is-shown", y > 500);
    lastY = y;
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
  update();
}

/* Mobile navigation */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  if (!toggle || !nav) return;
  const setOpen = open => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setOpen(false); });
}

/* Scroll reveal: add data-reveal (+ optional ="left|right|zoom" and data-delay) */
function initReveal() {
  const items = $$("[data-reveal], .step");
  items.forEach(el => { if (el.dataset.delay) el.style.setProperty("--delay", el.dataset.delay + "s"); });
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("is-visible")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

/* Animated counters: <span data-count="20" data-decimals="0">0</span> */
function initCounters() {
  const els = $$("[data-count]");
  if (!els.length) return;
  const run = el => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    if (prefersReducedMotion) { el.textContent = target.toFixed(decimals); return; }
    const dur = 1600;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* FAQ accordion: .faq-item > button.faq-q + .faq-a */
function initAccordion() {
  $$(".faq-list").forEach(list => {
    const single = list.dataset.single !== "false";
    $$(".faq-item", list).forEach((item, i) => {
      const btn = $(".faq-q", item);
      const panel = $(".faq-a", item);
      const id = `faq-${Math.random().toString(36).slice(2, 8)}-${i}`;
      panel.id = id;
      btn.setAttribute("aria-controls", id);
      btn.setAttribute("aria-expanded", item.classList.contains("is-open"));
      btn.addEventListener("click", () => {
        const willOpen = !item.classList.contains("is-open");
        if (single) $$(".faq-item", list).forEach(o => { o.classList.remove("is-open"); $(".faq-q", o).setAttribute("aria-expanded", "false"); });
        item.classList.toggle("is-open", willOpen);
        btn.setAttribute("aria-expanded", willOpen);
      });
    });
  });
}

/* Tabs: [data-tabs] > .tab[aria-controls] + .tab-panel[id] (arrow-key support) */
function initTabs() {
  $$("[data-tabs]").forEach(group => {
    const tabs = $$('[role="tab"]', group);
    const select = tab => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", e => {
        const dir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus(); select(next);
      });
    });
    select(tabs.find(t => t.getAttribute("aria-selected") === "true") || tabs[0]);
  });
}

/* Testimonial slider with dots, arrows, swipe and autoplay */
function initSlider(root = $(".testimonials"), opts = {}) {
  if (!root) return;
  const track = $(".t-track", root);
  const cards = $$(opts.slide || ".t-card", track);
  if (!cards.length) return;
  const dotsWrap = $(".t-dots", root);
  let index = 0, timer;

  const perView = opts.perView || (() => (window.innerWidth <= 640 ? 1 : window.innerWidth <= 960 ? 2 : 3));
  const sizeSlides = () => {
    if (!opts.perView) return;
    const n = perView(), gap = parseFloat(getComputedStyle(track).gap) || 0;
    cards.forEach(c => { c.style.flex = `0 0 calc((100% - ${gap * (n - 1)}px) / ${n})`; });
  };
  const maxIndex = () => Math.max(0, cards.length - perView());

  const buildDots = () => {
    dotsWrap.innerHTML = "";
    for (let i = 0; i <= maxIndex(); i++) {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `Go to slide ${i + 1}`);
      b.addEventListener("click", () => { go(i); restart(); });
      dotsWrap.appendChild(b);
    }
  };
  const go = i => {
    index = Math.max(0, Math.min(i, maxIndex()));
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const w = cards[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * w}px)`;
    $$("button", dotsWrap).forEach((d, di) => d.setAttribute("aria-current", di === index));
  };
  const next = () => go(index >= maxIndex() ? 0 : index + 1);
  const prev = () => go(index <= 0 ? maxIndex() : index - 1);
  const restart = () => { clearInterval(timer); if (opts.mobileOnly && !window.matchMedia(opts.mobileOnly).matches) return; if (!prefersReducedMotion) timer = setInterval(next, 6000); };

  $("[data-prev]", root)?.addEventListener("click", () => { prev(); restart(); });
  $("[data-next]", root)?.addEventListener("click", () => { next(); restart(); });
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", restart);

  let startX = null;
  track.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); restart(); }
    startX = null;
  });

  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { sizeSlides(); buildDots(); go(index); restart(); }, 150); });
  sizeSlides(); buildDots(); go(0); restart();
}

/* Sizing estimator
   Peak flow = sum of fixtures running at once (GPM).
   Required BTU ≈ GPM × 500 × ΔT(°F) / efficiency.  */
function initCalculator() {
  const root = $("[data-calc]");
  if (!root) return;
  const out = {
    gpm: $("[data-out='gpm']", root),
    rise: $("[data-out='rise']", root),
    size: $("[data-out='size']", root),
    desc: $("[data-out='desc']", root),
    bar: $(".gauge .bar", root)
  };
  const temp = $("#inletTemp", root);
  const tempLabel = $("[data-out='inlet']", root);
  const TARGET_C = 41;       // ~105°F mixed delivery temp (standard sizing practice for showers/faucets)
  const EFF = 0.95;          // condensing gas unit
  const CIRC = 2 * Math.PI * 80;
  out.bar.style.strokeDasharray = CIRC;

  const update = () => {
    let gpm = 0;
    $$(".fixture", root).forEach(f => { gpm += parseFloat(f.dataset.gpm) * parseInt($("output", f).value, 10); });
    const inlet = parseInt(temp.value, 10);
    const riseF = Math.round((TARGET_C - inlet) * 1.8);
    const btu = gpm * 500 * riseF / EFF;

    let size, desc;
    if (gpm === 0) { size = "–"; desc = "Add the fixtures you run at the same time during your busiest moment."; }
    else if (btu <= 120000) { size = "Compact"; desc = "A compact unit or point-of-use heater may cover this. Common for condos and smaller homes."; }
    else if (btu <= 160000) { size = "Mid-size"; desc = "A mid-capacity whole-home unit (roughly 150–160k BTU) is a typical fit."; }
    else if (btu <= 199000) { size = "Whole-home"; desc = "A full-capacity residential unit (about 199k BTU) is likely needed. Gas line and meter capacity should be checked."; }
    else { size = "High demand"; desc = "This exceeds a single residential unit. Two units in cascade, or staggering use, is usually the answer."; }

    out.gpm.textContent = gpm.toFixed(1);
    out.rise.textContent = riseF;
    out.size.textContent = size;
    out.desc.textContent = desc;
    tempLabel.textContent = `${inlet}°C`;
    const pct = Math.min(gpm / 10, 1);
    out.bar.style.strokeDashoffset = CIRC * (1 - pct);
    const fill = ((inlet - temp.min) / (temp.max - temp.min)) * 100;
    temp.style.setProperty("--fill", fill + "%");
  };

  root.addEventListener("click", e => {
    const btn = e.target.closest("[data-step]");
    if (!btn) return;
    const o = $("output", btn.closest(".stepper"));
    const v = Math.max(0, Math.min(6, parseInt(o.value, 10) + parseInt(btn.dataset.step, 10)));
    o.value = v; o.textContent = v;
    update();
  });
  temp.addEventListener("input", update);
  update();
}

/* Symptom picker (repair page), uses the same tab pattern */
/* handled by initTabs via role="tab" */

/* Contact forms: client-side validation + demo success state.
   Hook your backend in `submitForm` (fetch to Formspree / WP endpoint / etc.). */
async function submitForm(data) {
  // Example:
  // return fetch("https://formspree.io/f/your-id", { method: "POST", body: data, headers: { Accept: "application/json" } });
  return new Promise(resolve => setTimeout(resolve, 900));
}
function initForms() {
  $$("form[data-validate]").forEach(form => {
    const validate = field => {
      const input = $("input, textarea, select", field);
      if (!input) return true;
      let ok = input.checkValidity();
      if (input.type === "tel" && input.value) ok = /^[\d\s()+-]{10,}$/.test(input.value);
      field.classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", !ok);
      return ok;
    };
    $$(".field", form).forEach(f => {
      const input = $("input, textarea, select", f);
      input?.addEventListener("blur", () => validate(f));
      input?.addEventListener("input", () => { if (f.classList.contains("has-error")) validate(f); });
    });
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const fields = $$(".field", form);
      const allOk = fields.map(validate).every(Boolean);
      if (!allOk) { $(".has-error input, .has-error textarea, .has-error select", form)?.focus(); return; }
      const btn = $('button[type="submit"]', form);
      const label = btn.innerHTML;
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        await submitForm(new FormData(form));
        form.hidden = true;
        form.nextElementSibling?.classList.add("is-shown");
      } catch {
        btn.textContent = "Try again";
      } finally {
        btn.disabled = false;
        if (!form.hidden) btn.innerHTML = label;
      }
    });
  });
}

/* Button ripple */
function initRipple() {
  document.addEventListener("pointerdown", e => {
    const btn = e.target.closest(".btn");
    if (!btn || prefersReducedMotion) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    btn.appendChild(span);
    span.addEventListener("animationend", () => span.remove());
  });
}

/* Subtle parallax on hero visual */
function initParallax() {
  const el = $(".hero-visual");
  if (!el || prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const hero = el.closest(".hero");
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate3d(${x * -14}px, ${y * -14}px, 0)`;
  });
  hero.addEventListener("pointerleave", () => { el.style.transform = ""; });
  el.style.transition = "transform .4s ease-out";
}

/* Videos
   - [data-bg-video]: muted autoplay loop background; paused for reduced-motion users,
     paused when off-screen to save battery; .video-toggle pauses/plays.
   - [data-video-showcase]: click the play overlay to play inline with sound + controls. */
function initVideos() {
  const play = svg('<path d="M7 4v16l13-8z" fill="currentColor"/>');
  const pause = svg('<path d="M8 5v14M16 5v14"/>');
  $$("video[data-bg-video]").forEach(v => {
    v.muted = true;
    if (prefersReducedMotion) { v.removeAttribute("autoplay"); v.pause(); }
    const btn = v.parentElement.querySelector(".video-toggle");
    const sync = () => { if (btn) { btn.innerHTML = v.paused ? play : pause; btn.setAttribute("aria-label", v.paused ? "Play background video" : "Pause background video"); } };
    btn?.addEventListener("click", () => { v.paused ? v.play() : v.pause(); v.dataset.userPaused = v.paused; sync(); });
    v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        if (v.dataset.userPaused === "true" || prefersReducedMotion) return;
        e.isIntersecting ? v.play().catch(() => {}) : v.pause();
      }, { threshold: 0.1 }).observe(v);
    }
  });
  $$("[data-video-showcase]").forEach(box => {
    const v = $("video", box);
    const overlay = $(".video-play", box);
    if (box.hasAttribute("data-autoplay")) {
      v.muted = true; v.loop = true; v.controls = false;
      box.classList.add("is-auto");
      /* No play button: if the browser blocks autoplay, retry on the first touch/scroll/click */
      const start = () => { if (!prefersReducedMotion) v.play().catch(() => {}); };
      ["pointerdown", "touchstart", "scroll", "keydown"].forEach(ev => addEventListener(ev, () => { if (v.paused && box.dataset.visible !== "0") start(); }, { once: true, passive: true }));
      start();
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(([e]) => { box.dataset.visible = e.isIntersecting ? "1" : "0"; e.isIntersecting ? start() : v.pause(); }, { threshold: 0.15 }).observe(box);
      }
      return;
    }
    overlay?.addEventListener("click", () => {
      v.muted = false; v.controls = true;
      v.play().then(() => box.classList.add("is-playing")).catch(() => { v.muted = true; v.play(); box.classList.add("is-playing"); });
    });
    v.addEventListener("ended", () => { box.classList.remove("is-playing"); v.controls = false; });
  });
}

/* ---------- 5. Boot ---------- */
/* Theme switcher (dark default, saved in localStorage) */
function initTheme() {
  const root = document.documentElement;
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  const sync = () => {
    const light = root.getAttribute("data-theme") === "light";
    btn.setAttribute("aria-pressed", String(light));
    btn.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    btn.querySelector(".tt-label").textContent = light ? "Light mode" : "Dark mode";
  };
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
  sync();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initTheme();
  renderContact();
  renderContactInfo();
  renderTestimonials();
  renderIcons();
  initLogoFallback();
  initVideos();

  initScrollUI();
  initNav();
  initReveal();
  initCounters();
  initAccordion();
  initTabs();
  initSlider();
  initSlider($("[data-posts-carousel]"), { slide: ".post-card", perView: () => 1, mobileOnly: "(max-width: 760px)" });
  initCalculator();
  initForms();
  initRipple();
  initParallax();
});
