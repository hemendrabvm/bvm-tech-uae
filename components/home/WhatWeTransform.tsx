"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, MouseEvent, PointerEvent } from "react";
import Link from "next/link";
import { useServicesAnimation } from "@/animations/useServicesAnimation";

const AUTOPLAY_MS = 4500;
const SWIPE_PX = 50;
const DRAG_PX = 6;

const TRANSFORMATION_CARDS = [
  {
    idx: "01",
    icon: "/images/b1.png",
    title: "Modernize Core Systems",
    desc: "Modernize legacy applications and enterprise platforms for greater agility and scale.",
    capabilities: ["ERP Modernization", "Application Modernization", "Cloud Migration"],
    ctaText: "Explore Modernization",
    ctaHref: "/erp-development",
    bg: "/images/bp1.webp",
  },
  {
    idx: "02",
    icon: "/images/b2.png",
    title: "Unlock AI & Data",
    desc: "Turn data into intelligence, automation and better business decisions.",
    capabilities: ["Enterprise AI", "Data Engineering", "Analytics", "Intelligent Automation"],
    ctaText: "Explore AI & Data",
    ctaHref: "/ai-automation-development",
    bg: "/images/bp2.jpeg",
  },
  {
    idx: "03",
    icon: "/images/b3.png",
    title: "Connect the Enterprise",
    desc: "Integrate applications, workflows and data into one connected environment.",
    capabilities: ["APIs", "Application Integration", "Data Integration", "Middleware"],
    ctaText: "Explore Integration",
    ctaHref: "/contact",
    bg: "/images/bp3.jpg",
  },
  {
    idx: "04",
    icon: "/images/b4.png",
    title: "Digitize Operations",
    desc: "Replace manual processes with connected digital workflows and automation.",
    capabilities: ["Workflow Automation", "Enterprise Applications", "RPA", "Digital Operations"],
    ctaText: "Explore Digital Operations",
    ctaHref: "/custom-software-development",
    bg: "/images/bp4.jpeg",
  },
  {
    idx: "05",
    icon: "/images/b5.png",
    title: "Strengthen Technology Resilience",
    desc: "Improve cloud, security, infrastructure and continuity across critical systems.",
    capabilities: ["Cloud", "Cybersecurity", "DevSecOps", "Business Continuity"],
    ctaText: "Explore Resilience",
    ctaHref: "/security",
    bg: "/images/eyre.png",
  },
  {
    idx: "06",
    icon: "/images/b6.png",
    title: "Scale Technology Delivery",
    desc: "Extend capability with specialists, dedicated teams and global delivery.",
    capabilities: ["Technology Specialists", "Dedicated Teams", "Managed Delivery", "ODC"],
    ctaText: "Explore Global Delivery",
    ctaHref: "/contact",
    bg: "/images/bp6.jpeg",
  },
];

const COUNT = TRANSFORMATION_CARDS.length;
const TOTAL = String(COUNT).padStart(2, "0");
const HALF = Math.floor(COUNT / 2);

// Signed, wrapped offset of card i from the active card: -HALF … +(COUNT-HALF-1)
const offset = (i: number, active: number) =>
  ((i - active + HALF + COUNT * 4) % COUNT) - HALF;

const ArrowIcon = () => (
  <svg
    className="diagonal-arrow-svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1.5 10.5L10.5 1.5M10.5 1.5H3.5M10.5 1.5V8.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M3 9h12M10.5 4.5L15 9l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhatWeTransform() {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, down: false, moved: false });
  const raf = useRef<number | null>(null);

  // active + previous kept together so wrap-around jumps can skip the fly-across
  const [pos, setPos] = useState({ active: 0, prev: 0 });
  const { active, prev: previous } = pos;

  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);     // true once: drives the entrance
  const [onScreen, setOnScreen] = useState(false); // live: drives autoplay
  const [booted, setBooted] = useState(false);

  useServicesAnimation(sectionRef);

  // Respect reduced motion, and react if the setting changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Entrance once, plus live on-screen tracking so autoplay stops when scrolled away
  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let entered = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting);
        if (entry.isIntersecting && !entered) {
          entered = true;
          setInView(true);
          timer = setTimeout(() => setBooted(true), 2000);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  const go = useCallback((n: number) => {
    setPos((p) => {
      const target = ((n % COUNT) + COUNT) % COUNT;
      return target === p.active ? p : { active: target, prev: p.active };
    });
  }, []);

  const next = useCallback(() => setPos((p) => ({ active: (p.active + 1) % COUNT, prev: p.active })), []);
  const prevCard = useCallback(
    () => setPos((p) => ({ active: (p.active - 1 + COUNT) % COUNT, prev: p.active })),
    []
  );

  // Cursor tilt + glow, throttled to one write per frame
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = showcaseRef.current;
    if (!el || raf.current !== null) return;
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      const r = el.getBoundingClientRect();
      const nx = (clientX - r.left) / r.width;
      const ny = (clientY - r.top) / r.height;
      el.style.setProperty("--rx", `${((nx - 0.5) * 10).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(-(ny - 0.5) * 8).toFixed(2)}deg`);
      el.style.setProperty("--mx", (nx - 0.5).toFixed(3));
      el.style.setProperty("--my", (ny - 0.5).toFixed(3));
      el.style.setProperty("--px", `${(nx * 100).toFixed(1)}%`);
      el.style.setProperty("--py", `${(ny * 100).toFixed(1)}%`);
    });
  };

  const handleLeave = () => {
    const el = showcaseRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = { x: e.clientX, down: true, moved: false };
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.x;
    drag.current.down = false;
    if (Math.abs(dx) > DRAG_PX) drag.current.moved = true;
    if (dx < -SWIPE_PX) next();
    else if (dx > SWIPE_PX) prevCard();
  };

  // A drag must never count as a click (on a card or on a CTA link inside it)
  const swallowDragClick = (e: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return; // don't hijack keys from the CTA link
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevCard();
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(COUNT - 1);
    }
  };

  const current = TRANSFORMATION_CARDS[active];
  const autoplay = !reduceMotion && inView && onScreen;

  return (
    <section id="what-we-do" className="services-section position-relative" ref={sectionRef}>
      <img
        src="/images/services-bg.png"
        className="services-bg-glow"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        {/* Header */}
        <div className="row align-items-center mb-2 g-4">
          <div className="col-12 col-lg-8">
            <div className="services-badge d-inline-flex align-items-center gap-2 services-anim-badge mb-3">
              <img src="/images/h.png" alt="" />
              <span>BUSINESS PRIORITIES</span>
            </div>

            <h2 className="services-title text-white mb-3">
              <span className="services-line-mask">
                <span className="services-line-inner">What Do You Want to</span>
              </span>
              <span className="services-line-mask">
                <span className="services-line-inner headline-cyan">Transform?</span>
              </span>
            </h2>

            <p className="services-subtext services-anim-subtext mb-0">
              From targeted improvements to enterprise-wide transformation, BVM helps organizations modernize systems, unlock AI, connect operations and scale technology around real business priorities.
            </p>
          </div>

          <div className="col-12 col-lg-4 d-flex justify-content-start justify-content-lg-end align-items-center">
            <Link
              href="/contact"
              className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn services-anim-btn"
            >
              <span className="btn-text">Talk to an Advisor</span>
              <span className="arrow-icon-wrapper">
                <ArrowIcon />
              </span>
              <span className="btn-sheen" />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed 3D showcase */}
      <div
        className="wt-showcase-wrap"
        style={{ ["--wt-dur" as string]: `${AUTOPLAY_MS}ms` } as CSSProperties}
      >
        <div
          className={`wt-showcase${inView ? " is-in" : ""}${inView && !booted ? " is-booting" : ""}`}
          ref={showcaseRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Business priorities"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onPointerDown={onDown}
          onPointerUp={onUp}
          onPointerCancel={() => {
            drag.current.down = false;
          }}
          onClickCapture={swallowDragClick}
        >
          <div className="wt-floor" aria-hidden="true" />
          <div className="wt-horizon" aria-hidden="true" />
          <div className="wt-pad" aria-hidden="true" />

          <div className="wt-ghost" key={current.idx} aria-hidden="true">
            {current.idx}
          </div>

          {TRANSFORMATION_CARDS.map((card, i) => {
            const d = offset(i, active);
            const a = Math.abs(d);
            const jump = Math.abs(d - offset(i, previous)) > HALF;
            const isActive = i === active;

            return (
              <div
                key={card.idx}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${COUNT}`}
                aria-hidden={!isActive}
                className={`wt-card${isActive ? " is-active" : ""}${a > 2 ? " is-far" : ""}${jump ? " jump" : ""}`}
                data-a={a}
                style={{ ["--d" as string]: d, ["--a" as string]: a } as CSSProperties}
                onClick={() => {
                  if (!isActive) go(i);
                }}
              >
                <div className="wt-card-inner">
                  <div className="wt-img" style={{ backgroundImage: `url('${card.bg}')` }} />
                  <div className="wt-shade" />
                  <div className="wt-glow" />

                  <div className="wt-body">
                    <div className="wt-top">
                      <span className="wt-icon">
                        <img src={card.icon} alt="" draggable={false} />
                      </span>
                      <span className="wt-tag">
                        <b>{card.idx}</b> / {TOTAL}
                      </span>
                    </div>

                    <div>
                      <h3 className="wt-title">{card.title}</h3>
                      <div className="wt-more">
                        <p className="wt-desc">{card.desc}</p>
                        <ul className="wt-chips">
                          {card.capabilities.map((cap) => (
                            <li className="wt-chip" key={cap}>
                              {cap}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={card.ctaHref}
                          tabIndex={isActive ? 0 : -1}
                          draggable={false}
                          className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
                        >
                          <span className="btn-text">{card.ctaText}</span>
                          <span className="arrow-icon-wrapper">
                            <ArrowIcon />
                          </span>
                          <span className="btn-sheen" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="wt-dim" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="container">
          <div className="wt-controls">
            <div className="wt-dock">
              <button type="button" className="wt-nav prev" onClick={prevCard} aria-label="Previous priority">
                <ChevronIcon />
              </button>

              <div className="wt-segs">
                {TRANSFORMATION_CARDS.map((c, i) => (
                  <button
                    key={c.idx}
                    type="button"
                    className="wt-seg"
                    aria-label={`Show ${c.title}`}
                    aria-current={i === active ? "true" : undefined}
                    onClick={() => go(i)}
                  >
                    {i === active && autoplay && (
                      <span className="wt-seg-fill" onAnimationEnd={next} />
                    )}
                  </button>
                ))}
              </div>

              <button type="button" className="wt-nav" onClick={next} aria-label="Next priority">
                <ChevronIcon />
              </button>
            </div>
          </div>

          <div className="wt-sr" aria-live="polite">
            {`${current.idx} of ${TOTAL}: ${current.title}`}
          </div>
        </div>
      </div>
    </section>
  );
}