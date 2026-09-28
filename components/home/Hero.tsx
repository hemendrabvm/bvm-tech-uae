"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHeroAnimation } from "@/animations/useHeroAnimation";

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
        <div className="row min-vh-80 align-items-center">
          <div className="col-12 col-lg-12 text-start position-relative hero-text-container">
            {/* Supporting Line / Capability Pillars Badge */}
            <div className="hero-shimmer-badge hero-supporting-badge hero-anim-badge d-inline-flex align-items-center gap-2 mb-4">
              <span className="badge-dot" />
              <span className="badge-text">
                Strategy | Enterprise Platforms | AI &amp; Data | Digital Engineering | Managed Delivery
              </span>
              <span className="shimmer-line" aria-hidden="true" />
            </div>

            {/* Headline with Signature Skyline Animated Pill */}
            <h1 className="hero-headline text-white mb-4">
              <span className="hero-line-mask">
                <span className="hero-line-inner">Technology transformation.</span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner">
                   <span className="skyline-pill-container">
                    <span className="skyline-pill" />
                  </span>
                  Engineered around{" "}
                 
                </span>
              </span>
              <span className="hero-line-mask">
                <span className="hero-line-inner">your business.</span>
              </span>
            </h1>

            {/* Supporting Content */}
            <p className="hero-subtext mb-5 hero-anim-subtext">
              BVM Tech helps organizations modernize enterprise systems, adopt AI, connect technology ecosystems, build digital platforms and scale technology delivery across the GCC and global markets.
            </p>

           {/* Action Buttons */}
            <div className="hero-actions d-flex flex-wrap gap-3">
              {/* Primary CTA: Talk to an Advisor */}
              <Link
                href="/contact"
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
              </Link>

              {/* Secondary CTA: Explore What We Do */}
              <Link
                href="#what-we-do"
                className="btn btn-sky-blue hero-anim-btn d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Explore What We Do</span>
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
          </div>
        </div>

        {/* Right-Hand Floating Hero Visual Asset */}
        <div className="hero-banner-absolute">
          <img
            src="/images/zzz.png"
            alt="Enterprise Technology & Architecture Transformation"
            className="img-fluid hero-banner-img"
          />
        </div>
      </div>
    </section>
  );
}