"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";

/* The window on the right is a stylised business workspace. Its sidebar IS the
   service list, and scrolling walks through each service. Text is illustrative. */
const LAYERS = [
  {
    href: "/erp-development", tone: "cyan", icon: "fa-chart-column", title: "Enterprise Platforms", sub: "ERP | CRM | ITSM | EAM",
    desc: "ERP, CRM, ITSM and EAM platforms implemented as the operational core of your business.",
    tiles: [["Finance", "Connected"], ["Supply chain", "Connected"], ["People", "Connected"]],
    rows: [["General ledger", "Synced"], ["Procurement", "Active"], ["Asset management", "Active"]],
    bars: [38, 52, 46, 64, 58, 72, 66, 80, 74, 88, 82, 94],
  },
  {
    href: "/security", tone: "red", icon: "fa-cloud", title: "Cloud & Integration", sub: "Connect systems and data",
    desc: "Applications, systems and data connected so every platform works as one.",
    tiles: [["Applications", "Linked"], ["Systems", "Linked"], ["Data", "Linked"]],
    rows: [["ERP to CRM", "Connected"], ["CRM to service desk", "Connected"], ["Data warehouse", "Syncing"]],
    bars: [60, 62, 58, 66, 64, 70, 68, 72, 70, 76, 74, 78],
  },
  {
    href: "/custom-software-development", tone: "cyan", icon: "fa-code", title: "Digital Engineering", sub: "Custom solutions, agile and platforms",
    desc: "Custom software and product platforms, built around the way your teams actually work.",
    tiles: [["Web apps", "In delivery"], ["Mobile", "In delivery"], ["Platforms", "In delivery"]],
    rows: [["Customer portal", "Released"], ["Workflow app", "In sprint"], ["Partner platform", "In design"]],
    bars: [30, 44, 40, 58, 52, 66, 60, 74, 70, 82, 78, 90],
  },
  {
    href: "/ai-automation-development", tone: "red", icon: "fa-microchip", title: "AI & Data", sub: "Turn data into intelligence",
    desc: "Analytics, automation and AI that turn the data you already have into decisions.",
    tiles: [["Analytics", "Running"], ["Automation", "Running"], ["AI assistants", "Live"]],
    rows: [["Demand forecast", "Running"], ["Invoice automation", "Running"], ["Support assistant", "Live"]],
    bars: [24, 30, 38, 36, 52, 60, 58, 74, 82, 80, 92, 98],
  },
  {
    href: "/faq#faq-ownership", tone: "cyan", icon: "fa-gear", title: "Managed Delivery", sub: "Run, optimize and scale",
    desc: "A global delivery team that runs, optimizes and scales what we build with you.",
    tiles: [["Monitoring", "24/7"], ["Optimization", "Ongoing"], ["Support", "Global"]],
    rows: [["Platform health", "Healthy"], ["Release pipeline", "Healthy"], ["Service desk", "Open"]],
    bars: [70, 72, 71, 74, 73, 76, 75, 78, 77, 80, 79, 82],
  },
];

/* Alternating brand colours per slide: --logo-cyan, --brand-red (ink = lighter shade for text) */
const TONES: Record<string, { a: string; ink: string }> = {
  cyan: { a: "var(--logo-cyan, #0096ea)", ink: "#38bdf8" },
  red: { a: "var(--brand-red, #e40d17)", ink: "#ff5a63" },
};

/* data streams behind the workspace: x = position (%), t = speed (s), dl = delay (s) */
const STREAMS = [
  { x: 6, t: 5.5, dl: 0 }, { x: 17, t: 7, dl: 2.2 }, { x: 28, t: 6, dl: 4 },
  { x: 39, t: 8, dl: 1 }, { x: 50, t: 5.8, dl: 3.1 }, { x: 61, t: 7.4, dl: 0.6 },
  { x: 72, t: 6.4, dl: 2.6, red: true }, { x: 83, t: 8.2, dl: 4.4 }, { x: 94, t: 6.6, dl: 1.6 },
];

const STORY_START = 0.14;
const STEP = (1 - STORY_START) / LAYERS.length;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const range = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

const ArrowIcon = () => (
  <span className="arrow-icon-wrapper">
    <svg className="diagonal-arrow-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const { openAdvisorModal } = useAdvisorModal();
  const [active, setActive] = useState(-1); // -1 = intro, 0..4 = service in focus

  useEffect(() => {
    const section = heroRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const mobile = window.matchMedia("(max-width: 991px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setVars = (move: number, intro: number) => {
      pin.style.setProperty("--move", move.toFixed(4));
      pin.style.setProperty("--intro", intro.toFixed(4));
    };

    if (reduce.matches) {
      section.classList.add("is-static");
      setVars(0.5, 1);
      return;
    }

    /* cursor light + depth parallax (desktop only) */
    const onPointer = (e: PointerEvent) => {
      if (mobile.matches) return;
      const r = pin.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      pin.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      pin.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      pin.style.setProperty("--px", ((x - 0.5) * 2).toFixed(3));
      pin.style.setProperty("--py", ((y - 0.5) * 2).toFixed(3));
    };
    pin.addEventListener("pointermove", onPointer);

    let target = 0;
    let current = 0;
    let raf = 0;
    let last = -2;
    let timer = 0;

    const apply = (p: number) => {
      const m = ease(range(p, 0, 0.2));
      setVars(m, 1 - ease(range(p, 0.03, 0.12)));
      /* orbiting camera: the workspace keeps turning slightly as you scroll */
      pin.style.setProperty("--p", p.toFixed(4));
      pin.style.setProperty("--ry", `${(-34 + m * 24 + Math.sin(p * Math.PI * 5) * 7 * m).toFixed(2)}deg`);
      pin.style.setProperty("--rx", `${(14 - m * 8 + Math.cos(p * Math.PI * 3) * 3 * m).toFixed(2)}deg`);
      const idx = p < STORY_START ? -1 : clamp(Math.floor((p - STORY_START) / STEP), 0, LAYERS.length - 1);
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };
    const tick = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      raf = current !== target ? requestAnimationFrame(tick) : 0;
    };
    const onScroll = () => {
      if (mobile.matches) return;
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    /* phones/tablets: no pinning, the workspace cycles through the services */
    const setup = () => {
      window.clearInterval(timer);
      if (mobile.matches) {
        setVars(1, 1);
        last = -2;
        setActive(0);
        timer = window.setInterval(() => setActive((a) => (a + 1) % LAYERS.length), 4200);
      } else {
        last = -2;
        onScroll();
        apply(target);
      }
    };

    setup();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobile.addEventListener("change", setup);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobile.removeEventListener("change", setup);
      pin.removeEventListener("pointermove", onPointer);
      window.clearInterval(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const view = active < 0 ? 0 : active;
  const L = LAYERS[view];

  return (
    <section className="bvz-hero" ref={heroRef}>
      <div className={`bvz-pin${active >= 0 ? " is-story" : ""}`} ref={pinRef} style={{ ["--accent" as string]: TONES[L.tone].a, ["--accent-ink" as string]: TONES[L.tone].ink }}>
        <div className="bvz-bg" aria-hidden="true" />

        <div className="container bvz-container">
          <div className="bvz-grid">
            {/* ---------- LEFT: intro, then one service at a time ---------- */}
            <div className="bvz-copy">
              <div className="bvz-intro">
                <div className="bvz-badge bvz-rise" style={{ ["--d" as string]: "0.05s" }}>
                  <span className="bvz-dot" />
                  <span>Advisory, enterprise platforms, AI &amp; data, engineering</span>
                </div>
                <h1 className="bvz-title">
                  <span className="bvz-mask"><span className="bvz-line" style={{ ["--d" as string]: "0.12s" }}>From Strategy</span></span>
                  <span className="bvz-mask"><span className="bvz-line" style={{ ["--d" as string]: "0.24s" }}>to Scale.</span></span>
                  <span className="bvz-mask"><span className="bvz-line bvz-accent" style={{ ["--d" as string]: "0.36s" }}>Built for Business.</span></span>
                </h1>
                <p className="bvz-lead bvz-rise" style={{ ["--d" as string]: "0.5s" }}>
                  BVM brings together enterprise platforms, AI, digital engineering and global delivery to
                  modernize technology, accelerate transformation and create measurable business outcomes.
                </p>
                <div className="bvz-actions bvz-rise" style={{ ["--d" as string]: "0.62s" }}>
                  <button type="button" onClick={openAdvisorModal} className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn">
                    <span className="btn-text">Talk to an Advisor</span>
                    <ArrowIcon />
                    <span className="btn-sheen" />
                  </button>
                  <Link href="#what-we-do" className="btn btn-sky-blue d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn">
                    <span className="btn-text">Explore Our Capabilities</span>
                    <ArrowIcon />
                    <span className="btn-sheen" />
                  </Link>
                </div>
                <p className="bvz-foot bvz-rise" style={{ ["--d" as string]: "0.74s" }}>
                  <span><i className="fa-solid fa-location-dot bvz-cy" aria-hidden="true" /> UAE</span>
                  <span><i className="fa-solid fa-landmark bvz-rd" aria-hidden="true" /> United Kingdom</span>
                  <span><i className="fa-solid fa-globe bvz-cy" aria-hidden="true" /> Global Engineering &amp; Delivery</span>
                </p>
              </div>

              <div className="bvz-story" aria-live="polite">
                <div className="bvz-steps" aria-hidden="true">
                  {LAYERS.map((l, i) => (
                    <span key={l.title} className={i < view ? "is-done" : i === view ? "is-now" : ""} />
                  ))}
                </div>
                <div className="bvz-caps">
                  {LAYERS.map((l, i) => (
                    <article key={l.title} className={`bvz-cap${view === i ? " is-on" : ""}`} aria-hidden={view !== i}>
                      <p className="bvz-cap-count"><span className="bvz-num">0{i + 1}</span><span>of 0{LAYERS.length}</span></p>
                      <h2 className="bvz-cap-title">{l.title}</h2>
                      <p className="bvz-cap-sub">{l.sub}</p>
                      <p className="bvz-cap-desc">{l.desc}</p>
                      <Link
                        href={l.href}
                        className={`btn ${l.tone === "red" ? "btn-consult-red" : "btn-sky-blue"} d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn`}
                        tabIndex={view === i ? 0 : -1}
                      >
                        <span className="btn-text">Explore {l.title}</span>
                        <ArrowIcon />
                        <span className="btn-sheen" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- RIGHT: 3D workspace ---------- */}
            <div className="bvz-visual">
              <div className="bvz-scene">
                <div className="bvz-rig">
                  <div className="bvz-streams" aria-hidden="true">
                    {STREAMS.map((s) => (
                      <span
                        key={s.x}
                        className={`bvz-stream${s.red ? " is-red" : ""}`}
                        style={{ ["--x" as string]: `${s.x}%`, ["--t" as string]: `${s.t}s`, ["--dl" as string]: `${s.dl}s` }}
                      />
                    ))}
                  </div>
                  <span className="bvz-floor" aria-hidden="true" />
                  <span className="bvz-plate bvz-p1" aria-hidden="true" />
                  <span className="bvz-plate bvz-p2" aria-hidden="true" />
                  <div className="bvz-sat bvz-sat-ai" aria-hidden="true">
                    <span className="bvz-sat-k">AI insight</span>
                    <svg viewBox="0 0 120 44" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="bvzFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.4" />
                          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 38 L15 33 L30 35 L48 24 L66 27 L84 13 L102 16 L120 4 L120 44 L0 44Z" fill="url(#bvzFill)" />
                      <path d="M0 38 L15 33 L30 35 L48 24 L66 27 L84 13 L102 16 L120 4" fill="none" stroke="#38bdf8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <b>Demand forecast</b>
                  </div>
                  <div className="bvz-sat bvz-sat-int" aria-hidden="true">
                    <svg viewBox="0 0 120 52">
                      <path d="M16 38 L60 14 L104 38 M16 38 L104 38" fill="none" stroke="rgba(56,189,248,0.6)" strokeWidth="1.5" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
                      <circle cx="16" cy="38" r="7" fill="#0096ea" />
                      <circle cx="60" cy="14" r="7" fill="#38bdf8" />
                      <circle cx="104" cy="38" r="7" fill="#0096ea" />
                    </svg>
                    <b>Systems connected</b>
                  </div>
                  <div className="bvz-win">
                    <div className="bvz-bar" aria-hidden="true">
                      <i /><i /><i />
                      <span>BVM Workspace</span>
                    </div>
                    <div className="bvz-body">
                      <nav className="bvz-nav" aria-label="Services">
                        {LAYERS.map((l, i) => (
                          <Link key={l.title} href={l.href} className={`bvz-nav-item${view === i ? " is-on" : ""}`}>
                            <span className="bvz-nav-ico"><i className={`fa-solid ${l.icon}`} aria-hidden="true" /></span>
                            <span className="bvz-nav-txt">{l.title}</span>
                          </Link>
                        ))}
                      </nav>

                      <div className="bvz-main" key={view} aria-hidden="true">
                        <div className="bvz-main-head">
                          <h3>{L.title}</h3>
                          <span className="bvz-live"><i />Live</span>
                        </div>
                        <div className="bvz-tiles">
                          {L.tiles.map(([t, s]) => (
                            <div key={t} className="bvz-tile"><b>{t}</b><span>{s}</span></div>
                          ))}
                        </div>
                        <div className="bvz-chart">
                          {L.bars.map((h, n) => (
                            <span key={n} style={{ ["--h" as string]: `${h}%`, ["--n" as string]: n }} />
                          ))}
                        </div>
                        <ul className="bvz-rows">
                          {L.rows.map(([t, s]) => (
                            <li key={t}><span>{t}</span><em><i />{s}</em></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bvz-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </div>
    </section>
  );
}