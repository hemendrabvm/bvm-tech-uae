"use client";

import { useRef } from "react";
import { useProcessStack, useImageReveals } from "@/animations/usePageAnimations";

const OUTCOME_STAGES = [
  {
    name: "ADVISE",
    desc: "Define the right direction.",
    outcome: "Clarity",
    img: "/images/z1.png",
    num: "1",
    className: "p-card-1",
  },
  {
    name: "TRANSFORM",
    desc: "Modernize platforms and processes.",
    outcome: "Modern Platforms",
    img: "/images/z2.png",
    num: "2",
    className: "p-card-2",
  },
  {
    name: "ENGINEER",
    desc: "Build what creates differentiation.",
    outcome: "Tailored Solutions",
    img: "/images/z3.png",
    num: "3",
    className: "p-card-3",
  },
  {
    name: "OPERATE",
    desc: "Keep critical technology performing.",
    outcome: "Optimal Performance",
    img: "/images/z4.png",
    num: "4",
    className: "p-card-4",
  },
  {
    name: "SCALE",
    desc: "Extend capability with global delivery.",
    outcome: "Long-term Value",
    img: "/images/z5.png",
    num: "5",
    className: "p-card-5",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  // Hook into the site's master GSAP animations
  useProcessStack(sectionRef);
  useImageReveals(sectionRef);

  return (
    <section className="process-section position-relative" ref={sectionRef}>
      {/* Background Ambient Glow */}
      <img
        src="/images/6.png"
        className="devlp-glow devlp-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5">
          {/* Pinned Left Column */}
          <div className="col-12 col-lg-5">
            <div className="process-sticky-left">
              <div className="process-badge d-inline-flex align-items-center gap-2 mb-3 process-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>HOW BVM WORKS</span>
              </div>

              <h2 className="process-title text-white">
                <span className="process-line-mask">
                  <span className="process-line-inner anim-text-reveal">
                    From Strategy to
                  </span>
                </span>
                <span className="process-line-mask">
                  <span className="process-line-inner anim-text-reveal">
                    Sustained Outcomes
                  </span>
                </span>
              </h2>

              <p className="text-bright-muted mt-4">
                BVM combines advisory, enterprise technology and digital engineering to help organizations move from strategy and implementation to optimization, scale and long-term value.
              </p>
            </div>
          </div>

          {/* Stacking Cards on Right with Animated Image Reveal Thumbnails */}
          <div className="col-12 col-lg-7">
            <div className="process-cards-stack">
              {OUTCOME_STAGES.map((stage) => (
                <div
                  key={stage.num}
                  className={`process-stack-card ${stage.className} process-anim-card`}
                >
                  {/* Left: Visual Thumbnail with Signature Reveal Mask */}
                  <div className="process-card-thumb">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={stage.img}
                        alt={stage.name}
                        className="img-fluid image-reveal-img process-thumb-img"
                      />
                    </div>
                  </div>

                  {/* Center: Stage Content & Outcome Tag */}
                  <div className="process-card-content">
                    <div className="process-card-header">
                      <h3 className="process-card-name text-white mb-0">{stage.name}</h3>
                      <span className="process-outcome-tag">{stage.outcome}</span>
                    </div>
                    <p className="process-card-desc text-bright-muted">{stage.desc}</p>
                  </div>

                  {/* Right: Watermark Number */}
                  <div className="process-card-number">{stage.num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}