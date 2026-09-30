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
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Cloud Strategy & Modernization",
    desc: "Assess, migrate and modernize workloads across cloud and hybrid environments.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Cloud-Native Engineering",
    desc: "Build scalable applications and services designed for modern cloud environments.",
  },
  {
    icon: "fa-solid fa-shield-virus",
    title: "Cybersecurity & Resilience",
    desc: "Strengthen technology environments against operational and security risk.",
  },
  {
    icon: "fa-solid fa-id-badge",
    title: "Identity & Access Management",
    desc: "Manage secure access across users, applications and enterprise resources.",
  },
  {
    icon: "fa-solid fa-arrows-split-up-and-left",
    title: "Enterprise Integration",
    desc: "Connect systems, applications and business workflows across the enterprise.",
  },
  {
    icon: "fa-solid fa-plug",
    title: "API, Data & Middleware Integration",
    desc: "Enable interoperability through APIs, data integration, middleware and iPaaS.",
  },
];

const THREE_PRIORITIES = [
  {
    title: "MODERNIZE",
    icon: "fa-solid fa-arrows-rotate",
    accent: "text-cyan",
    items: [
      "Cloud migration",
      "Infrastructure modernization",
      "Cloud-native engineering",
      "DevOps",
    ],
  },
  {
    title: "SECURE",
    icon: "fa-solid fa-shield-halved",
    accent: "text-red",
    items: [
      "Cybersecurity advisory",
      "Application & cloud security",
      "IAM",
      "DevSecOps",
      "Resilience & disaster recovery",
    ],
  },
  {
    title: "CONNECT",
    icon: "fa-solid fa-network-wired",
    accent: "text-cyan",
    items: [
      "API management",
      "Application integration",
      "Data integration",
      "Middleware & iPaaS",
      "Legacy integration",
    ],
  },
];

/* Dual Rotating Orbit Ecosystem Platforms from Section 4 */
const OUTER_ORBIT = [
  {
    angle: "0deg",
    name: "Microsoft Azure",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    angle: "90deg",
    name: "AWS",
    src: "/images/tech-logo/tech-logo2.svg",
  },
  {
    angle: "180deg",
    name: "Oracle Cloud",
    src: "/images/tech-logo/tech-logo6.svg",
  },
  {
    angle: "270deg",
    name: "Google Cloud",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  },
];

const INNER_ORBIT = [
  {
    angle: "45deg",
    name: "MuleSoft",
    src: "https://msicons.com/icons/power-platform/03335-icon-service-Power-Platform.svg",
  },
  {
    angle: "135deg",
    name: "Azure Integration Services",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    angle: "225deg",
    name: "SAP Integration Suite",
    src: "/images/tech-logo/tech-logo10.png",
  },
  {
    angle: "315deg",
    name: "Oracle Integration",
    src: "/images/tech-logo/tech-logo6.svg",
  },
];

const DELIVERY_APPROACH = [
  {
    num: "1",
    name: "Assess",
    desc: "Understand architecture, risks and dependencies.",
    className: "p-card-1",
  },
  {
    num: "2",
    name: "Design",
    desc: "Define target cloud, security and integration architecture.",
    className: "p-card-2",
  },
  {
    num: "3",
    name: "Modernize",
    desc: "Migrate, refactor, secure and connect.",
    className: "p-card-3",
  },
  {
    num: "4",
    name: "Operate",
    desc: "Monitor, support and optimize.",
    className: "p-card-4",
  },
];

export default function CloudCybersecurityPageContent() {
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
                <span>CLOUD, CYBERSECURITY &amp; INTEGRATION</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">Modernize, Secure and </span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">Connect the Enterprise.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM helps organizations build resilient cloud foundations, strengthen security and integrate applications, platforms and data across the technology landscape.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Discuss Your Technology Environment</span>
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
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                      alt="Cloud, Cybersecurity & Integration"
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
          SECTION 2 — CORE CAPABILITIES (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>CORE CAPABILITIES</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
                    Core Capabilities
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
          SECTION 3 — THREE CONNECTED PRIORITIES (Pages 1 & 2 in PDF)
          ==================================================================== */}
      <section className="solutions-across-section position-relative">
        <img
          src="/images/3.png"
          className="section-bg-glow section-glow-left"
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>THREE CONNECTED PRIORITIES</span>
              </div>

            <h2 className="choose-title text-white mb-0">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Three Connected
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Priorities
    </span>
  </span>
</h2>
            </div>
          </div>

          <div className="row g-4">
            {THREE_PRIORITIES.map((p) => (
              <div className="col-12 col-lg-4" key={p.title}>
                <div className="spotlight-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between anim-reveal">
                  <div>
                    <div className={`solution-icon-box ${p.accent} mb-3`} style={{ width: 50, height: 50, fontSize: 20 }}>
                      <i className={p.icon} />
                    </div>
                    <h3 className="text-white fs-4 fw-bold mb-4">{p.title}</h3>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {p.items.map((item) => (
                        <li key={item} className="d-flex align-items-center gap-2 text-bright-muted small">
                          <i className={`fa-solid fa-circle-check ${p.accent}`} style={{ fontSize: 13 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — ECOSYSTEM (DUAL-ORBIT ARCHITECTURE) (Page 2 in PDF)
          ==================================================================== */}
      <section className="technology-section ecosystem-section position-relative h-small" ref={techRef}>
        {/* Dual Rotating Orbit Rings */}
        <div className="tech-orbit-container position-absolute tech-anim-orbit">
          {/* Outer Orbit (Cloud: Microsoft Azure, AWS, Oracle Cloud, Google Cloud) */}
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

          {/* Inner Orbit (Integration: MuleSoft, Azure Integration Services, SAP Integration Suite, Oracle Integration) */}
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
            <span>ECOSYSTEM</span>
          </div>

          <h2 className="tech-title text-white mb-0">
            <span className="tech-line-mask">
              <span className="tech-line-inner">Ecosystem</span>
            </span>
          </h2>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — DELIVERY APPROACH (Pages 2 & 3 in PDF)
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
                  <span>DELIVERY APPROACH</span>
                </div>

                <h2 className="process-title text-white mb-0">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      Delivery
                    </span>
                  </span>
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal headline-cyan">
                      Approach
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {DELIVERY_APPROACH.map((step) => (
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
                    Need to modernize, secure or connect
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                    your technology environment?
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