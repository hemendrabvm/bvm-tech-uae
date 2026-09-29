"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHeroAnimation } from "@/animations/useHeroAnimation";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();
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
        <div className="row min-vh-80 align-items-center">
          <div className="col-12 col-lg-12 text-start position-relative hero-text-container">
            {/* 1. Compact Eyebrow Badge */}
            <div className="hero-shimmer-badge hero-anim-badge d-inline-flex align-items-center gap-2 mb-4">
              <img src="/images/h.png" alt="Icon" />
              <span className="badge-text">GLOBAL ADVISORY &amp; DIGITAL ENGINEERING</span>
              <span className="shimmer-line" aria-hidden="true" />
            </div>

            {/* 2. Balanced 3-Line Headline */}
            <h1 className="hero-headline text-white mb-4">
              <span className="hero-line-mask">
                <span className="hero-line-inner">From Strategy</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner">
                  <span className="skyline-pill-container">
                    <span className="skyline-pill" />
                  </span>{" "}
                  to Scale.
                </span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner">Built for Business.</span>
              </span>
            </h1>

            {/* 3. Five Core Enterprise Pillars */}
            <div className="hero-pillars-bar hero-anim-subtext">
              <span className="hero-pillar-item">Advisory</span>
              <span className="hero-pillar-sep">&bull;</span>
              <span className="hero-pillar-item">Enterprise Platforms</span>
              <span className="hero-pillar-sep">&bull;</span>
              <span className="hero-pillar-item">AI &amp; Data</span>
              <span className="hero-pillar-sep">&bull;</span>
              <span className="hero-pillar-item">Digital Engineering</span>
              <span className="hero-pillar-sep">&bull;</span>
              <span className="hero-pillar-item">Global Delivery</span>
            </div>

            {/* 4. Supporting Content */}
            <p className="hero-subtext mb-5 hero-anim-subtext">
              BVM brings together enterprise platforms, AI, digital engineering and global delivery to modernize technology, accelerate transformation and create measurable business outcomes.
            </p>

            {/* 5. Action Buttons */}
            <div className="hero-actions d-flex flex-wrap gap-3">
              {/* Primary CTA: Talk to an Advisor (Modal Popup) */}
              <button
                type="button"
                onClick={openAdvisorModal}
                className="btn btn-consult-red hero-anim-btn d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Talk to an Advisor</span>
                <span className="arrow-icon-wrapper">
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
              </button>

              {/* Secondary CTA: Explore Our Capabilities */}
              <Link
                href="#what-we-do"
                className="btn btn-sky-blue hero-anim-btn d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Explore Our Capabilities</span>
                <span className="arrow-icon-wrapper">
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

           {/* 6. Location Footprint Strip (Cleanly Docked Below Buttons) */}
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

              <p className="hero-footprint-tagline">
                Local engagement. Global engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Right Floating Phone Mockup */}
        <div className="hero-banner-absolute">
          <img
            src="/images/zzz.png"
            alt="Enterprise Technology & Strategy"
            className="img-fluid hero-banner-img"
          />
        </div>
      </div>
    </section>
  );
}