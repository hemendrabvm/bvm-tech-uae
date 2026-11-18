"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const earthRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const section = sectionRef.current;
      const earth = earthRef.current;
      if (!section || !earth) return;

      gsap.fromTo(
        earth,
        {
          xPercent: -50,
          y: 90,
          scale: 0.94,
        },
        {
          xPercent: -50,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom bottom",
            scrub: 1.2,
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="cta-section text-center position-relative" ref={sectionRef}>
      <div className="bvm-arch-grid" aria-hidden="true" />
      <div className="bvm-noise-overlay" aria-hidden="true" />
      <div className="cta-ambient-glow" aria-hidden="true" />
      <div className="cta-earth-ambient-glow" aria-hidden="true" />

      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="cta-badge d-inline-flex align-items-center gap-2 mb-4 cta-anim-badge anim-reveal">
              <span className="badge-dot" />
              <span>READY TO MOVE FORWARD?</span>
            </div>

            <h2 className="cta-title text-white mb-4">
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  Let’s turn your next technology
                </span>
              </span>
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal headline-cyan">
                  priority into progress.
                </span>
              </span>
            </h2>

            <p className="cta-subtext mb-5 cta-anim-subtext anim-reveal">
              Whether it starts with a focused initiative or a broader transformation, BVM can help
              define the right path forward.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 cta-anim-btns anim-reveal">
              <Link
                href="/contact"
                className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
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
            </div>
          </div>
        </div>
      </div>

      <img
        ref={earthRef}
        src="/images/cta-earth.png"
        alt="Connected Earth Planetary Horizon"
        className="cta-earth-horizon"
        loading="lazy"
      />

      <div className="cta-bottom-gradient-fade" aria-hidden="true" />
    </section>
  );
}