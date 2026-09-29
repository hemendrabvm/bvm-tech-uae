"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const earthRef = useRef<HTMLImageElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // ScrollTrigger: Smooth scrub animation where Earth rises up from the bottom
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const section = sectionRef.current;
      const earth = earthRef.current;
      if (!section || !earth) return;

      gsap.fromTo(
        earth,
        {
          y: 90,
          opacity: 0.35,
          scale: 0.94,
        },
        {
          y: 0,
          opacity: 1,
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
      {/* Background Ambient Glows */}
      <div className="cta-ambient-glow" />
      <div className="cta-earth-ambient-glow" />

      {/* Main Content Area */}
      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            {/* Eyebrow Badge */}
            <div className="cta-badge d-inline-flex align-items-center gap-2 mb-4 cta-anim-badge anim-reveal">
              <span className="badge-dot" />
              <span>READY TO MOVE FORWARD?</span>
            </div>

            {/* 2-Line Kinetic Headline */}
            <h2 className="cta-title text-white mb-4">
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  Let’s turn your next technology
                </span>
              </span>
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  priority into progress.
                </span>
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="cta-subtext mb-5 cta-anim-subtext anim-reveal">
              Whether it starts with a focused initiative or a broader transformation, BVM can help define the right path forward.
            </p>

            {/* Action Button: Opens On-Page Advisor Modal */}
            <div className="d-flex flex-wrap justify-content-center gap-3 cta-anim-btns anim-reveal">
              <button
                type="button"
                onClick={openAdvisorModal}
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Rising Earth Horizon (Attached to Scroll) */}
      <img
        ref={earthRef}
        src="/images/cta-earth.png"
        alt="Connected Earth Planetary Horizon"
        className="cta-earth-horizon"
      />

      {/* Subtle Bottom Gradient Fade into Footer */}
      <div className="cta-bottom-gradient-fade" />
    </section>
  );
}