"use client";

import { useRef } from "react";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useProcessStack,
  useCtaGlow,
} from "@/animations/usePageAnimations";
import { usePageHeaderAnimation } from "@/animations/usePageHeaderAnimation";

/* ==========================================================================
   EXACT CONTENT FROM PDF (ZERO ALTERATIONS)
   ========================================================================== */

const CAPABILITIES = [
  {
    icon: "fa-solid fa-laptop-file",
    title: "Application Managed Services",
    desc: "Maintain and optimize business-critical applications across their lifecycle.",
  },
  {
    icon: "fa-solid fa-cubes-stacked",
    title: "Enterprise Platform Support",
    desc: "Support configurations, workflows, integrations and platform enhancements.",
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud & Infrastructure Operations",
    desc: "Operate cloud and infrastructure environments for availability, performance and resilience.",
  },
  {
    icon: "fa-solid fa-user-gear",
    title: "Platform Administration",
    desc: "Manage users, configurations, governance and platform operations.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "L1 / L2 / L3 Support",
    desc: "Provide structured functional and technical support across multiple support levels.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Continuous Improvement & Optimization",
    desc: "Improve performance, user adoption and value over time.",
  },
];

const MORE_THAN_SUPPORT_CARDS = [
  {
    icon: "fa-solid fa-circle-check",
    title: "Availability",
    desc: "Keep critical applications and platforms running.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "Performance",
    desc: "Identify recurring issues and improve technical performance.",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Optimization",
    desc: "Improve configurations, workflows and integrations.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    title: "Evolution",
    desc: "Support enhancement, adoption and continuous improvement.",
    accent: "text-red",
  },
];

const SUPPORT_MODEL_STAGES = [
  {
    num: "1",
    name: "L1",
    desc: "User support and request handling",
    className: "p-card-1",
  },
  {
    num: "2",
    name: "L2",
    desc: "Functional and application support",
    className: "p-card-2",
  },
  {
    num: "3",
    name: "L3",
    desc: "Technical, engineering and integration support",
    className: "p-card-3",
  },
  {
    num: "4",
    name: "Continuous Improvement",
    desc: "Enhancement and optimization backlog",
    className: "p-card-4",
  },
];

const ENGAGEMENT_OPTIONS = [
  { title: "Application Support", icon: "fa-solid fa-laptop-code" },
  { title: "Platform Support", icon: "fa-solid fa-layer-group" },
  { title: "Cloud Operations", icon: "fa-solid fa-cloud" },
  { title: "Managed Service Team", icon: "fa-solid fa-users" },
  { title: "Dedicated Support Pod", icon: "fa-solid fa-people-group" },
];

export default function ManagedServicesPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // Scoped animations
  usePageHeaderAnimation(heroRef);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useProcessStack(processRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      {/* ====================================================================
          HERO (Page 1 in PDF)
          ==================================================================== */}
      <section className="page-header-section position-relative" ref={heroRef}>
        <img
          src="/images/1.png"
          className="header-bg-glow header-glow-left"
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <img
          src="/images/2.png"
          className="header-bg-glow header-glow-right"
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        <div className="container position-relative z-10">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-7">
              {/* Eyebrow */}
              <div className="page-category-tag page-header-badge d-inline-flex align-items-center gap-2 mb-4">
                <span className="category-dot" />
                <span>MANAGED SERVICES</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">Keep Critical Technology</span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">Performing.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM supports, operates and continuously improves enterprise applications, platforms, cloud environments and digital services.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Discuss Managed Services</span>
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
                </button>
              </div>
            </div>

            {/* Right Showcase Box with Online Image */}
            <div className="col-12 col-lg-5">
              <div className="header-visual-showcase spotlight-card p-3 rounded-4 position-relative">
                <div className="showcase-img-box position-relative overflow-hidden rounded-4">
                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                      alt="Managed Services Operations"
                      className="img-fluid image-reveal-img header-showcase-img"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/service-custom.jpg";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-header-divider mt-5">
            <span />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2 — MANAGED SERVICE CAPABILITIES (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>MANAGED SERVICE CAPABILITIES</span>
              </div>

              <h2 className="choose-title text-white mb-0">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Managed Service
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Capabilities
    </span>
  </span>
</h2>
            </div>
          </div>

          {/* 6 Capabilities Cards */}
          <div className="row g-4">
            {CAPABILITIES.map((cap) => (
              <div className="col-12 col-md-6 col-lg-4" key={cap.title}>
                <div className="app-service-card spotlight-card p-4 h-100 d-flex flex-column justify-content-start anim-reveal">
                  <div className="app-icon-badge flutter-icon text-cyan mb-3">
                    <i className={cap.icon} />
                  </div>
                  <h3 className="app-card-title text-white fs-5 mb-2">{cap.title}</h3>
                  <p className="app-card-desc text-bright-muted small mb-0">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3 — MORE THAN SUPPORT (Pages 1 & 2 in PDF)
          ==================================================================== */}
      <section className="app-why-section position-relative">
        <div className="container position-relative z-10">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <div className="app-why-left">
                <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                  <img src="/images/h.png" alt="Icon" />
                  <span>MORE THAN SUPPORT</span>
                </div>

                <h2 className="app-why-title text-white mb-4">
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal">
                      Operate. Optimize.
                    </span>
                  </span>
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal headline-cyan">
                      Improve.
                    </span>
                  </span>
                </h2>

                <p className="app-why-desc text-bright-muted mb-0">
                  BVM managed services are designed not only to resolve incidents, but to help technology environments become more stable, efficient and valuable over time.
                </p>
              </div>
            </div>

            {/* Use four cards */}
            <div className="col-12 col-lg-7">
              <div className="row g-3">
                {MORE_THAN_SUPPORT_CARDS.map((card, idx) => (
                  <div className="col-12 col-sm-6" key={card.title}>
                    <div className="spotlight-card p-4 rounded-4 h-100 anim-reveal">
                      <div
                        className={`app-icon-badge ${idx % 2 === 0 ? "flutter-icon text-cyan" : "ios-icon text-red"} mb-3`}
                        style={{ width: 44, height: 44, fontSize: 18 }}
                      >
                        <i className={card.icon} />
                      </div>
                      <h4 className="text-white fs-5 fw-bold mb-2">{card.title}</h4>
                      <p className="text-bright-muted small mb-0">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — SUPPORT MODEL (Page 2 in PDF)
          ==================================================================== */}
      <section className="process-section position-relative" ref={processRef}>
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
            <div className="col-12 col-lg-5">
              <div className="process-sticky-left">
                <div className="process-badge d-inline-flex align-items-center gap-2 mb-3 process-anim-badge anim-reveal">
                  <img src="/images/h.png" alt="Icon" />
                  <span>SUPPORT MODEL</span>
                </div>

                <h2 className="process-title text-white mb-0">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      Support Model
                    </span>
                  </span>
                 
                </h2>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {SUPPORT_MODEL_STAGES.map((stage) => (
                  <div key={stage.num} className={`process-stack-card ${stage.className} process-anim-card`}>
                    <div className="process-card-content">
                      <h3 className="process-card-name text-white mb-2">{stage.name}</h3>
                      <p className="process-card-desc text-bright-muted mb-0">{stage.desc}</p>
                    </div>
                    <div className="process-card-number">{stage.num}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — ENGAGEMENT OPTIONS (Page 2 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>ENGAGEMENT OPTIONS</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
                    Engagement Options
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {ENGAGEMENT_OPTIONS.map((opt) => (
              <div className="col-12 col-sm-6 col-lg-4" key={opt.title}>
                <div className="spotlight-card p-4 rounded-4 h-100 d-flex align-items-center gap-3 anim-reveal">
                  <div className="app-icon-badge flutter-icon text-cyan" style={{ width: 44, height: 44, fontSize: 18 }}>
                    <i className={opt.icon} />
                  </div>
                  <h4 className="text-white fs-5 fw-bold mb-0">{opt.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA (Page 3 in PDF)
          ==================================================================== */}
      <section className="cta-section text-center position-relative">
        <div className="cta-ambient-glow" />
        <div className="cta-earth-ambient-glow" />

        <div className="container position-relative z-10">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h2 className="cta-title text-white mb-5">
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal">
                    Looking for a technology partner 
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                 beyond implementation?
                  </span>
                </span>
              </h2>

              <div className="d-flex justify-content-center anim-reveal">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Talk to BVM</span>
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
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/cta-earth.png"
          alt=""
          className="cta-earth-horizon"
        />
        <div className="cta-bottom-gradient-fade" />
      </section>
    </div>
  );
}