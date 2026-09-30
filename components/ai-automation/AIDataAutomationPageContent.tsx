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
import { useTechAnimation } from "@/animations/useTechAnimation";

/* ==========================================================================
   EXACT CONTENT FROM PDF (ZERO ALTERATIONS)
   ========================================================================== */

const CAPABILITIES = [
  {
    icon: "fa-solid fa-microchip",
    title: "Enterprise AI",
    desc: "Apply AI to enterprise processes, decisions, knowledge and customer or employee experiences.",
  },
  {
    icon: "fa-solid fa-robot",
    title: "Generative & Agentic AI",
    desc: "Build assistants, copilots and autonomous workflows around controlled enterprise use cases.",
  },
  {
    icon: "fa-solid fa-database",
    title: "Data Platforms & Engineering",
    desc: "Connect, transform and organize data for analytics, applications and AI.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Business Intelligence & Analytics",
    desc: "Create dashboards, reporting and analytics that improve visibility and decision-making.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Intelligent Automation & RPA",
    desc: "Automate repetitive work and orchestrate processes across systems.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Data Governance & Document Intelligence",
    desc: "Improve data quality, governance and intelligent processing of business documents.",
  },
];

const USE_CASES = [
  {
    icon: "fa-solid fa-brain",
    title: "Decision Intelligence",
    desc: "Turn enterprise data into actionable insight.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Knowledge & AI Assistants",
    desc: "Make enterprise information easier to access and use.",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Process Automation",
    desc: "Automate repetitive and rules-based work.",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "Intelligent Operations",
    desc: "Embed analytics and AI into day-to-day processes.",
  },
];

/* Dual Rotating Orbit Ecosystem Platforms from Section 4 */
const OUTER_ORBIT = [
  {
    angle: "0deg",
    name: "Microsoft Fabric",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    angle: "90deg",
    name: "Power BI",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    angle: "180deg",
    name: "Databricks",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Databricks-logo.svg",
  },
  {
    angle: "270deg",
    name: "Snowflake",
    src: "/images/tech-logo/tech-logo12.svg",
  },
];

const INNER_ORBIT = [
  {
    angle: "45deg",
    name: "Azure AI",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    angle: "135deg",
    name: "AWS",
    src: "/images/tech-logo/tech-logo2.svg",
  },
  {
    angle: "225deg",
    name: "UiPath",
    src: "/images/tech-logo/tech-logo13.svg",
  },
  {
    angle: "315deg",
    name: "Microsoft Power Platform",
    src: "https://msicons.com/icons/power-platform/03335-icon-service-Power-Platform.svg",
  },
];

const JOURNEY_STEPS = [
  {
    num: "1",
    name: "Discover",
    desc: "Identify business priorities and feasible use cases.",
    className: "p-card-1",
  },
  {
    num: "2",
    name: "Prepare",
    desc: "Build data, governance and integration foundations.",
    className: "p-card-2",
  },
  {
    num: "3",
    name: "Prototype",
    desc: "Validate value through focused pilots.",
    className: "p-card-3",
  },
  {
    num: "4",
    name: "Deploy",
    desc: "Integrate AI, analytics and automation into enterprise workflows.",
    className: "p-card-4",
  },
  {
    num: "5",
    name: "Scale",
    desc: "Expand successful use cases with controls, monitoring and continuous improvement.",
    className: "p-card-5",
  },
];

export default function AIDataAutomationPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // Scoped animations
  usePageHeaderAnimation(heroRef);
  useTechAnimation(techRef);
  useProcessStack(processRef);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
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
                <span>AI, DATA &amp; INTELLIGENT AUTOMATION</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">Turn Data into Intelligence. </span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">Turn Intelligence into Action.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM helps organizations build trusted data foundations, apply enterprise AI and automate work where technology can create measurable business value.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red rounded-pill px-4 py-3 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
                >
                  <span className="btn-text">Discuss an AI or Data Initiative</span>
                  <span className="arrow-icon-wrapper">
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
                  </span>
                  <span className="btn-sheen" />
                </button>
              </div>
            </div>

            {/* Right Showcase Box */}
            <div className="col-12 col-lg-5">
              <div className="header-visual-showcase spotlight-card p-3 rounded-4 position-relative">
                <div className="showcase-img-box position-relative overflow-hidden rounded-4">
                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src="https://images.pexels.com/photos/5833310/pexels-photo-5833310.jpeg"
                      alt="AI, Data & Intelligent Automation"
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
          SECTION 2 — CAPABILITIES (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>CAPABILITIES</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
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
          SECTION 3 — FOCUS ON BUSINESS USE CASES (Pages 1 & 2 in PDF)
          ==================================================================== */}
      <section className="app-why-section position-relative">
        <div className="container position-relative z-10">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <div className="app-why-left">
                <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                  <img src="/images/h.png" alt="Icon" />
                  <span>FOCUS ON BUSINESS USE CASES</span>
                </div>

                <h2 className="app-why-title text-white mb-4">
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal">
                      AI Should Solve a
                    </span>
                  </span>
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal headline-cyan">
                      Business Problem.
                    </span>
                  </span>
                </h2>

                <p className="app-why-desc text-bright-muted mb-0">
                  BVM focuses on use cases that improve decisions, reduce manual work, unlock enterprise knowledge and improve operational performance.
                </p>
              </div>
            </div>

            {/* Four cards */}
            <div className="col-12 col-lg-7">
              <div className="row g-3">
                {USE_CASES.map((uc, idx) => (
                  <div className="col-12 col-sm-6" key={uc.title}>
                    <div className="spotlight-card p-4 rounded-4 h-100 anim-reveal">
                      <div
                        className={`app-icon-badge ${idx % 2 === 0 ? "flutter-icon text-cyan" : "ios-icon text-red"} mb-3`}
                        style={{ width: 44, height: 44, fontSize: 18 }}
                      >
                        <i className={uc.icon} />
                      </div>
                      <h4 className="text-white fs-5 fw-bold mb-2">{uc.title}</h4>
                      <p className="text-bright-muted small mb-0">{uc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — TECHNOLOGY ECOSYSTEM (DUAL-ORBIT ARCHITECTURE)
          ==================================================================== */}
      <section className="technology-section h-small ecosystem-section position-relative " ref={techRef}>
        {/* Dual Rotating Orbit Rings */}
        <div className="tech-orbit-container position-absolute tech-anim-orbit">
          {/* Outer Orbit (4 items: Microsoft Fabric, Power BI, Databricks, Snowflake) */}
          <div className="tech-orbit-track track-outer">
            {OUTER_ORBIT.map((item) => (
              <div
                key={`${item.name}-${item.angle}`}
                className="tech-icon-orbit"
                style={
                  {
                    ["--angle" as string]: item.angle,
                    ["--radius" as string]: "540px",
                  } as React.CSSProperties
                }
              >
                <div className="tech-bubble glow-tech-bubble">
                  <img src={item.src} alt={item.name} />
                  <span className="tech-tooltip">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Inner Orbit (4 items: Azure AI, AWS, UiPath, Microsoft Power Platform) */}
          <div className="tech-orbit-track track-inner">
            {INNER_ORBIT.map((item) => (
              <div
                key={`${item.name}-${item.angle}`}
                className="tech-icon-orbit"
                style={
                  {
                    ["--angle" as string]: item.angle,
                    ["--radius" as string]: "410px",
                  } as React.CSSProperties
                }
              >
                <div className="tech-bubble glow-tech-bubble">
                  <img src={item.src} alt={item.name} />
                  <span className="tech-tooltip">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Content Container */}
        <div className="tech-content-container text-center">
          <div className="tech-badge d-inline-flex align-items-center gap-2 mb-3 tech-anim-badge">
            <img src="/images/h.png" alt="Icon" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>

          <h2 className="tech-title text-white mb-0">
            <span className="tech-line-mask">
              <span className="tech-line-inner">Technology Ecosystem</span>
            </span>
          </h2>

        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — AI & DATA JOURNEY (Pages 2 & 3 in PDF)
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
                  <span>AI &amp; DATA JOURNEY</span>
                </div>

                <h2 className="process-title text-white mb-0">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      AI &amp; Data Journey
                    </span>
                  </span>
                
                </h2>
                 <p className="text-bright-muted mt-4 anim-reveal">
                A structured journey that transforms business ideas into scalable AI, data, analytics, and automation solutions-securely and efficiently.
              </p>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {JOURNEY_STEPS.map((step) => (
                  <div key={step.num} className={`process-stack-card ${step.className} process-anim-card`}>
                    <div className="process-card-content">
                      <h3 className="process-card-name text-white mb-2">{step.name}</h3>
                      <p className="process-card-desc text-bright-muted mb-0">{step.desc}</p>
                    </div>
                    <div className="process-card-number">{step.num}</div>
                  </div>
                ))}
              </div>
            </div>
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
                    Have an AI idea but 
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                 need a practical path forward?
                  </span>
                </span>
              </h2>

            <div className="d-flex justify-content-center anim-reveal">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
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