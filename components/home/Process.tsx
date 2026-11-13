"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import Link from "next/link";
import {
  useAnimReveal,
  useAnimTextReveal,
} from "@/animations/usePageAnimations";

const WAVE_INTERVAL_MS = 3800;

const STAGES = [
  {
    num: "01",
    name: "ADVISE",
    desc: "Define the right direction.",
    outcome: "CLARITY",
    img: "/images/z1.png",
    fallbackImg:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-lightbulb",
    cx: 100,
    cy: 165,
  },
  {
    num: "02",
    name: "TRANSFORM",
    desc: "Modernize and integrate.",
    outcome: "MODERN PLATFORMS",
    img: "/images/z2.png",
    fallbackImg:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-gear",
    cx: 350,
    cy: 215,
  },
  {
    num: "03",
    name: "ENGINEER",
    desc: "Build What Differentiates.",
    outcome: "TAILORED SOLUTIONS",
    img: "/images/z3.png",
    fallbackImg:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-code",
    cx: 600,
    cy: 165,
  },
  {
    num: "04",
    name: "OPERATE",
    desc: "Keep technology performing.",
    outcome: "OPTIMAL PERFORMANCE",
    img: "/images/z4.png",
    fallbackImg:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-layer-group",
    cx: 850,
    cy: 215,
  },
  {
    num: "05",
    name: "SCALE",
    desc: "Extend capability for what’s next.",
    outcome: "LONG-TERM VALUE",
    img: "/images/z5.png",
    fallbackImg:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-chart-line",
    cx: 1100,
    cy: 165,
  },
];

const COUNT = STAGES.length;
const TOTAL = String(COUNT).padStart(2, "0");

type ProcessProps = {
  badgeText?: string;
  className?: string;
};

export default function Process({
  badgeText = "HOW BVM WORKS",
  className = "",
}: ProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [inView, setInView] = useState(false);     // true once: triggers 3D entrance on scroll reach
  const [booted, setBooted] = useState(false);     // true after entrance finishes
  const [onScreen, setOnScreen] = useState(false); // live: controls autoplay

  useAnimReveal(sectionRef);
  useAnimTextReveal(sectionRef);

  // Scroll-reach 3D entrance + live visibility tracking
  useEffect(() => {
    const el = matrixRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let entered = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting);
        if (entry.isIntersecting && !entered) {
          entered = true;
          setInView(true);
          timer = setTimeout(() => setBooted(true), 1600);
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Sequential wave across the 5 stages when in view
  useEffect(() => {
    if (!inView || !onScreen || hovered !== null) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % COUNT);
    }, WAVE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [inView, onScreen, hovered]);

  // Instant 3D Tilt + Multi-Layer Z-Parallax + Radial Cursor Spotlight (Desktop Pointer Only)
  const handleCardMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;

    card.classList.add("is-tilting");
    card.style.setProperty("--mx", `${x.toFixed(1)}px`);
    card.style.setProperty("--my", `${y.toFixed(1)}px`);
    card.style.setProperty("--rx", `${(nx * 18).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(-ny * 15).toFixed(2)}deg`);
    card.style.setProperty("--px", nx.toFixed(3));
    card.style.setProperty("--py", ny.toFixed(3));
  };

  const handleCardLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.classList.remove("is-tilting");
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--px", "0");
    card.style.setProperty("--py", "0");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((idx + 1) % COUNT);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((idx - 1 + COUNT) % COUNT);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(idx);
    }
  };

  const currentIdx = hovered !== null ? hovered : active;
  const progressRatio = currentIdx / (COUNT - 1);

  return (
    <section
      className={`process-master-section position-relative ${className}`}
      ref={sectionRef}
      style={
        {
          ["--pw-prog" as string]: inView ? progressRatio.toFixed(4) : "0",
          ["--pw-dur" as string]: `${WAVE_INTERVAL_MS}ms`,
        } as CSSProperties
      }
    >
      {/* Clean Ambient Background Atmosphere */}
      <div className="pw-bg-grid" aria-hidden="true" />
      <div className="process-bg-glow glow-left-cyan" aria-hidden="true" />
      <div className="process-bg-glow glow-right-cyan" aria-hidden="true" />
      {/* <div className="process-terrain-fog" aria-hidden="true" /> */}

      {/* Standard Site Container (Unchanged Size) */}
      <div className="container position-relative z-10">
        {/* ================================================================
            HEADER — UNTOUCHED CLASSES:
            who-badge, process-title, process-header-subtext, btn-explore-services
            ================================================================ */}
        <div className="row align-items-end justify-content-between mb-5 g-4">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
              <img src="/images/h.png" alt="" />
              <span>{badgeText}</span>
            </div>

            <h2 className="process-title text-white mb-3">
              <span className="process-line-mask">
                <span className="process-line-inner anim-text-reveal">
                  From Strategy to
                </span>
              </span>
              <span className="process-line-mask">
                <span className="process-line-inner anim-text-reveal headline-cyan">
                  Sustained Outcomes
                </span>
              </span>
            </h2>

            <p className="process-header-subtext text-bright-muted anim-reveal mb-0">
              BVM combines advisory, enterprise technology and digital
              engineering to help organizations move from strategy to
              implementation, optimization and long-term value.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-start text-lg-end">
            <Link
              href="/contact"
              className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn"
            >
              <span className="btn-text">Talk to an Advisor</span>
              <span className="arrow-icon-wrapper ms-2">
                <svg
                  className="diagonal-arrow-svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12L12 2M12 2H4M12 2V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="btn-sheen" />
            </Link>
          </div>
        </div>

        {/* ================================================================
            5-STAGE STAGGERED WAVE MATRIX WITH SPOTLIGHT FOCUS & 3D DEPTH
            ================================================================ */}
        <div
          className={`pw-matrix-wrap position-relative${inView ? " is-in" : ""}${
            inView && !booted ? " is-booting" : ""
          }`}
          ref={matrixRef}
        >
          {/* S-Curve Cyan Laser Waveguide + Synchronized Junction Nodes (Desktop) */}
          <svg
            className="pw-circuit-svg d-none d-xl-block"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="pwCircuitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#0096ea" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#8fdcff" />
              </linearGradient>
            </defs>

            {/* Soft Outer Glow Path */}
            <path
              d="M 100 165 C 225 165, 225 215, 350 215 C 475 215, 475 165, 600 165 C 725 165, 725 215, 850 215 C 975 215, 975 165, 1100 165"
              stroke="url(#pwCircuitGrad)"
              strokeOpacity="0.1"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Subtle Dashed Guide Wave */}
            <path
              d="M 100 165 C 225 165, 225 215, 350 215 C 475 215, 475 165, 600 165 C 725 165, 725 215, 850 215 C 975 215, 975 165, 1100 165"
              stroke="rgba(90, 185, 235, 0.18)"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />

            {/* Active Progress Laser Wave */}
            <path
              className="pw-circuit-active"
              d="M 100 165 C 225 165, 225 215, 350 215 C 475 215, 475 165, 600 165 C 725 165, 725 215, 850 215 C 975 215, 975 165, 1100 165"
              pathLength="1"
              stroke="url(#pwCircuitGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Travelling Light Pulse */}
            <path
              className="pw-circuit-pulse"
              d="M 100 165 C 225 165, 225 215, 350 215 C 475 215, 475 165, 600 165 C 725 165, 725 215, 850 215 C 975 215, 975 165, 1100 165"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Synchronized Junction Nodes Along the Wave */}
            {STAGES.map((s, i) => {
              const isLit = i <= currentIdx;
              const isNow = i === currentIdx;
              return (
                <g key={s.num}>
                  <circle
                    cx={s.cx}
                    cy={s.cy}
                    r={isNow ? 14 : 8}
                    fill={isLit ? "rgba(56, 189, 248, 0.22)" : "transparent"}
                    style={{ transition: "all 0.5s ease" }}
                  />
                  <circle
                    cx={s.cx}
                    cy={s.cy}
                    r={isNow ? 5 : 3.5}
                    fill={
                      isNow
                        ? "#ffffff"
                        : isLit
                        ? "#38bdf8"
                        : "rgba(255,255,255,0.2)"
                    }
                    style={{ transition: "all 0.5s ease" }}
                  />
                </g>
              );
            })}
          </svg>

          {/* The 5 Staggered Columns */}
          <div className="pw-grid">
            {STAGES.map((stage, i) => {
              const isCurrent = i === currentIdx;
              const isPast = i < currentIdx;
              const isOffsetDown = i % 2 === 1;

              return (
                <div
                  key={stage.num}
                  className={`pw-col${
                    isOffsetDown ? " is-wave-low" : " is-wave-high"
                  }`}
                  style={{ ["--i" as string]: i } as CSSProperties}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Stage ${stage.num}: ${stage.name} — ${stage.desc} Outcome: ${stage.outcome}`}
                    className={`pw-stage-unit${isCurrent ? " is-active" : ""}${
                      isPast ? " is-past" : ""
                    }`}
                    onMouseEnter={() => {
                      setHovered(i);
                      setActive(i);
                    }}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  >
                    {/* True 3D Tilting Card Rig */}
                    <div
                      className="pw-card"
                      onMouseMove={handleCardMove}
                      onMouseLeave={handleCardLeave}
                    >
                      {/* Plane -1: 3D Extruded Backplate (translateZ(-18px)) */}
                      <div className="pw-card-plate" aria-hidden="true" />

                      {/* Plane 0: Clipped Glass Surface + Conic Border + Spotlight */}
                      <div className="pw-card-surface">
                        <div className="pw-card-beam" aria-hidden="true" />
                        <div className="pw-card-spotlight" aria-hidden="true" />

                        {/* Bottom Auto-Progress Line on Active Card */}
                        <div className="pw-card-prog" aria-hidden="true">
                          {isCurrent && inView && (
                            <span
                              className={`pw-card-prog-fill${
                                hovered !== null ? " is-paused" : ""
                              }`}
                              key={currentIdx}
                            />
                          )}
                        </div>
                      </div>

                      {/* Plane +1 & +2: 3D-Lifted Inner Content */}
                      <div className="pw-card-content">
                        {/* 1. Top Header: Step Pill + Glowing Icon Orb */}
                        <div className="pw-card-head">
                          <span className="pw-step-pill">
                            <b>{stage.num}</b>
                            <i>/ {TOTAL}</i>
                          </span>
                          <div className="pw-orb">
                            <span className="pw-orb-ring" />
                            <i className={stage.icon} aria-hidden="true" />
                          </div>
                        </div>

                        {/* 2. Stage Accent Bar + Title & Description */}
                        <div className="pw-body">
                          <span className="pw-accent-bar" aria-hidden="true" />
                          <div className="pw-title-row">
                            <h3 className="pw-heading">{stage.name}</h3>
                            <span className="pw-arrow" aria-hidden="true">
                              <i className="fa-solid fa-arrow-up-right" />
                            </span>
                          </div>
                          <p className="pw-desc">{stage.desc}</p>
                        </div>

                        {/* 3. Bright, Unobstructed Image Viewport */}
                        <div className="pw-viewport">
                          <img
                            src={stage.img}
                            alt={`${stage.name} - ${stage.outcome}`}
                            className="pw-img"
                            draggable={false}
                            decoding="async"
                            onError={(e) => {
                              const img = e.currentTarget;
                              img.onerror = null;
                              img.src = stage.fallbackImg;
                            }}
                          />
                          <div className="pw-img-shade" />
                          <div className="pw-scan-line" />
                          <div className="pw-gloss" />
                        </div>
                      </div>
                    </div>

                    {/* Vertical Laser Connector Stem */}
                    <div className="pw-stem" aria-hidden="true">
                      <span className="pw-stem-pulse" />
                    </div>

                    {/* Bottom Outcome Station Pill */}
                    <div className="pw-outcome-pill">
                      <span className="pw-outcome-dot" />
                      <div className="pw-outcome-meta">
                        <span className="pw-outcome-kicker">OUTCOME</span>
                        <span className="pw-outcome-name">{stage.outcome}</span>
                      </div>
                    </div>

                    {/* Soft Under-Column Floor Glow Halo */}
                    <div className="pw-pedestal" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}