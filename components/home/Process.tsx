"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
} from "@/animations/usePageAnimations";

const STAGES = [
  {
    num: "01",
    name: "ADVISE",
    desc: "Define the right direction.",
    outcome: "CLARITY",
    img: "/images/z1.png",
    fallbackImg: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-lightbulb",
    theme: "cyan",
  },
  {
    num: "02",
    name: "TRANSFORM",
    desc: "Modernize and integrate.",
    outcome: "MODERN PLATFORMS",
    img: "/images/z2.png",
    fallbackImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-gear",
    theme: "red",
  },
  {
    num: "03",
    name: "ENGINEER",
    desc: "Build What Differentiates.",
    outcome: "TAILORED SOLUTIONS",
    img: "/images/z3.png",
    fallbackImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-code",
    theme: "cyan",
  },
  {
    num: "04",
    name: "OPERATE",
    desc: "Keep technology performing.",
    outcome: "OPTIMAL PERFORMANCE",
    img: "/images/z4.png",
    fallbackImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-layer-group",
    theme: "red",
  },
  {
    num: "05",
    name: "SCALE",
    desc: "Extend capability for what’s next.",
    outcome: "LONG-TERM VALUE",
    img: "/images/z5.png",
    fallbackImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    icon: "fa-solid fa-chart-line",
    theme: "cyan",
  },
];

type ProcessProps = {
  badgeText?: string;
  className?: string;
};

export default function Process({
  badgeText = "HOW BVM WORKS",
  className = "",
}: ProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // Scoped animations
  useAnimReveal(sectionRef);
  useAnimTextReveal(sectionRef);
  useImageReveals(sectionRef);

  // Radial light cursor tracking for 3D card spotlight
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className={`process-master-section position-relative ${className}`} ref={sectionRef}>
      {/* Background Atmosphere: Cyan & Red Radial Depth + Mountain Terrain Horizon */}
      <div className="process-bg-glow glow-left-cyan" />
      <div className="process-bg-glow glow-right-red" />
      <div className="process-terrain-fog" aria-hidden="true" />

      <div className="container position-relative z-10">
        {/* Symmetrical Full-Width Header Row */}
        <div className="row align-items-end justify-content-between mb-5 g-4">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
              <span className="hero-badge-pulse-dot" />
              <span>{badgeText}</span>
            </div>

            <h2 className="process-title text-white mb-3">
              <span className="process-line-mask">
                <span className="process-line-inner anim-text-reveal">From Strategy to</span>
              </span>
              <span className="process-line-mask">
                <span className="process-line-inner anim-text-reveal headline-cyan">Sustained Outcomes</span>
              </span>
            </h2>

            <p className="process-header-subtext text-bright-muted anim-reveal mb-0">
              BVM combines advisory, enterprise technology and digital engineering to help organizations move from strategy to implementation, optimization and long-term value.
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

        {/* 5-Stage Sequential Pipeline Grid */}
        <div className="process-pipeline-stage-wrap position-relative">
          {/* Top Continuous Laser Interconnect */}
          <div className="process-laser-rail d-none d-xl-block" aria-hidden="true" />

          {/* Cards Row */}
          <div className="row g-3 g-xl-4 align-items-stretch">
            {STAGES.map((stage) => (
              <div className="col-12 col-md-6 col-xl custom-col-5" key={stage.num}>
                <div
                  className={`process-futuristic-card card-theme-${stage.theme} anim-reveal`}
                  onMouseMove={handleMouseMove}
                >
                  {/* Top Specular Edge Highlight */}
                  <div className="card-top-beam" />

                  {/* Header: Stage Number & Glowing Radial Node Orb */}
                  <div className="card-head-row d-flex align-items-center justify-content-between mb-3">
                    <div className="stage-index-tag">
                      <span className="index-number">{stage.num}</span>
                      <span className="index-divider" />
                    </div>

                    <div className="stage-node-orb">
                      <div className="orb-halo" />
                      <i className={stage.icon} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="card-copy-block mb-3">
                    <h3 className="stage-heading text-white mb-1">{stage.name}</h3>
                    <p className="stage-lead-desc text-bright-muted mb-0">{stage.desc}</p>
                  </div>

                  {/* Action Micro-Indicator */}
                  <div className="card-action-row mb-3">
                    <span className="stage-action-arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>

                  {/* Cinematic Masked Photo Frame */}
                  <div className="stage-photo-viewport rounded-3 position-relative overflow-hidden">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={stage.img}
                        alt={`${stage.name} - ${stage.outcome}`}
                        className="img-fluid image-reveal-img stage-photo-asset"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = stage.fallbackImg;
                        }}
                      />
                    </div>
                    <div className="photo-dark-vignette" />
                  </div>
                </div>

                {/* Milestone Node on Bottom Waveguide */}
                <div className={`stage-milestone-station text-center mt-3 station-theme-${stage.theme}`}>
                  <span className="milestone-pulse-point" />
                  <span className="milestone-title">{stage.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Continuous Glowing Laser Waveguide (SVG Curved Beam) */}
          <div className="process-bottom-wave-rail d-none d-xl-block" aria-hidden="true">
            <svg
              className="bottom-laser-svg"
              width="100%"
              height="40"
              viewBox="0 0 1140 40"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 20 20 Q 140 32, 240 20 T 460 20 T 680 20 T 900 20 T 1120 20"
                stroke="url(#bvmLaserGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="bvmLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#e40d17" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#e40d17" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.85" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}