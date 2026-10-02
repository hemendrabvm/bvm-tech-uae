"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useHeroAnimation } from "@/animations/useHeroAnimation";

/* Swap the images for your own: local (/images/slide-1.jpg) or hosted URLs */
const SLIDES = [
  {
    title: "Advisory & Transformation",
    sub: "Shape the right strategy for transformation.",
    href: "/advisory-transformation",
    // Modern glass architecture – strategy & transformation
    img: "/images/zww1.png",
  },
  {
    title: "Enterprise Applications",
    sub: "Modernize the systems that run the business.",
    href: "/enterprise-applications",
    // Clean enterprise tech / systems feel
    img: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI, Data & Automation",
    sub: "Turn data into intelligence. Turn intelligence into action.",
    href: "/ai-automation-development",
    // Strong AI / data / neural visual
    img: "images/zw3.png",
  },
  {
    title: "Digital & Product Engineering",
    sub: "Engineer what creates differentiation.",
    href: "/digital-product-engineering",
    // Real coding / product engineering workspace
    img: "images/zw4.png",
  },
  {
    title: "Technology Talent & Global Delivery",
    sub: "The right technology capability. When and where you need it.",
    href: "/technology-talent-delivery",
    // Diverse professional tech team collaboration
    img: "images/zw5.png",
  },
];
const SLIDE_MS = 5000;
const pad = (n: number) => String(n).padStart(2, "0");

function HeroCard() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % SLIDES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, paused]);

  const s = SLIDES[i];

  return (
    <div className="hc-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <article className="hc-card">
        {SLIDES.map((sl, idx) => (
          <img
            key={sl.title}
            src={sl.img}
            alt={idx === i ? sl.title : ""}
            className={`hc-img ${idx === i ? "is-on" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        ))}
        <span className="hc-shade" aria-hidden="true" />

        <span className="hc-corner hc-tl" aria-hidden="true" />
        <span className="hc-corner hc-tr" aria-hidden="true" />
        <span className="hc-corner hc-bl" aria-hidden="true" />
        <span className="hc-corner hc-br" aria-hidden="true" />

        <div className="hc-top">
          <span className="hc-brand">
            BVM <i>/</i> Technology
          </span>
          <span className="hc-pill">
            <b aria-hidden="true" /> Built for what&rsquo;s next
          </span>
        </div>

        <span className="hc-vertical" aria-hidden="true">Business transformation</span>

        <div className="hc-bottom">
          <div className="hc-count" aria-hidden="true">
            <span>{pad(i + 1)}</span>
            <em />
            <span>{pad(SLIDES.length)}</span>
          </div>
          <div className="hc-copy" key={i} aria-live="polite">
            <h2 className="hc-title">{s.title}</h2>
            <p className="hc-sub">{s.sub}</p>
          </div>
          <Link href="#what-we-do" className="hc-go" aria-label={`Explore ${s.title}`}>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </article>

      <div className="hc-rail" role="tablist" aria-label="Slides">
        <span>{pad(1)}</span>
        <div className="hc-rail-track">
          {SLIDES.map((sl, idx) => (
            <button
              key={sl.title}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={sl.title}
              className={`hc-rail-seg ${idx === i ? "is-on" : ""}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
        <span>{pad(SLIDES.length)}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  useHeroAnimation(heroRef);

  return (
    <section
      className="hero-section d-flex align-items-center position-relative glow-left glow-right"
      ref={heroRef}
    >
      {/* Background Ambient Glows */}
      <img
        src="/images/1.png"
        className="hero-bg-glow hero-bg-glow-left"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <img
        src="/images/2.png"
        className="hero-bg-glow hero-bg-glow-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row min-vh-80 align-items-start">
          {/* LEFT: unchanged content */}
          <div className="col-12 col-lg-7 text-start position-relative hero-text-container">
            <div className="hero-shimmer-badge hero-anim-badge d-inline-flex align-items-center gap-2 mb-lg-4">
              <img src="/images/h.png" alt="Icon" />
              <span className="badge-text">
                <span className="hero-pillars-bar">
                  <span className="hero-pillar-item">Advisory</span>
                  <span className="hero-pillar-sep">&bull;</span>
                  <span className="hero-pillar-item">Enterprise Platforms</span>
                  <span className="hero-pillar-sep">&bull;</span>
                  <span className="hero-pillar-item">AI &amp; Data</span>
                  <span className="hero-pillar-sep">&bull;</span>
                  <span className="hero-pillar-item">Digital Engineering</span>
                  <span className="hero-pillar-sep">&bull;</span>
                  <span className="hero-pillar-item">Global Delivery</span>
                </span>
              </span>
              <span className="shimmer-line" aria-hidden="true" />
            </div>

            <h1 className="hero-headline text-white mb-4">
              <span className="hero-line-mask">
                <span className="hero-line-inner">From Strategy</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner">to Scale.</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner headline-cyan">Built for Business.</span>
              </span>
            </h1>

            <p className="hero-subtext mb-5 hero-anim-subtext">
              BVM brings together enterprise platforms, AI, digital engineering and global delivery to modernize technology, accelerate transformation and create measurable business outcomes.
            </p>

            <div className="hero-actions d-flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn btn-consult-red hero-anim-btn d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Talk to an Advisor</span>
                <span className="arrow-icon-wrapper">
                  <svg className="diagonal-arrow-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="btn-sheen" />
              </Link>

              <Link
                href="#what-we-do"
                className="btn btn-sky-blue hero-anim-btn d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Explore Our Capabilities</span>
                <span className="arrow-icon-wrapper">
                  <svg className="diagonal-arrow-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="btn-sheen" />
              </Link>
            </div>

            <div className="hero-footprint-dock hero-anim-subtext">
              <div className="hero-footprint-row">
                <span className="hero-footprint-node">
                  <i className="fa-solid fa-location-dot text-cyan" />
                  <span>UAE</span>
                </span>
                <span className="hero-footprint-sep">|</span>
                <span className="hero-footprint-node">
                  <i className="fa-solid fa-landmark text-red" />
                  <span>United Kingdom</span>
                </span>
                <span className="hero-footprint-sep">|</span>
                <span className="hero-footprint-node">
                  <i className="fa-solid fa-globe text-cyan" />
                  <span>Global Engineering &amp; Delivery</span>
                </span>
              </div>
              <p className="hero-footprint-tagline">Local engagement. Global engineering.</p>
            </div>
          </div>

          {/* RIGHT: image card */}
          <div className="col-12 col-lg-5 mt-5 mt-lg-0 hero-anim-subtext">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}