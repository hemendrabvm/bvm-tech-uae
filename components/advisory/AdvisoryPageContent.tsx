"use client";

import { useRef } from "react";
import Link from "next/link";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useProcessStack,
  useAppServices,
  useCtaGlow,
} from "@/animations/usePageAnimations";
import { usePageHeaderAnimation } from "@/animations/usePageHeaderAnimation";

/* ==========================================================================
   EXACT CONTENT FROM PDF (ZERO PARAPHRASING)
   ========================================================================== */

const CAPABILITIES = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Digital & Technology Strategy",
    desc: "Define technology priorities, investment roadmaps and transformation initiatives aligned with business goals.",
  },
  {
    icon: "fa-solid fa-sitemap",
    title: "Enterprise Architecture",
    desc: "Design scalable, secure and future-ready technology environments across applications, data, integration and infrastructure.",
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Business Process Transformation",
    desc: "Review, simplify and redesign processes before introducing new technology.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Platform Advisory & Selection",
    desc: "Evaluate enterprise platforms against business, technical, operational and commercial requirements.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI & Data Strategy",
    desc: "Identify practical AI and data opportunities and define the foundations required to deliver them responsibly.",
  },
  {
    icon: "fa-solid fa-users-gear",
    title: "Transformation & Program Advisory",
    desc: "Structure, govern and guide complex technology programs from planning through execution.",
  },
];

const DIRECTION_ITEMS = [
  {
    icon: "fa-solid fa-briefcase",
    heading: "Business-first thinking",
    sub: "Start with outcomes, operating models and constraints before selecting technology.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    heading: "Platform-neutral advisory",
    sub: "Evaluate the right combination of packaged platforms, custom engineering and integration.",
  },
  {
    icon: "fa-solid fa-cubes",
    heading: "Architecture-led decisions",
    sub: "Understand how applications, data, cloud, security and integrations fit together.",
  },
  {
    icon: "fa-solid fa-rocket",
    heading: "Execution-aware strategy",
    sub: "Recommendations are designed with implementation and long-term operations in mind.",
  },
];

const CONNECTIONS = [
  {
    icon: "fa-solid fa-layer-group",
    title: "Enterprise Applications",
    href: "/erp-development",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-brain",
    title: "AI & Data",
    href: "/ai-automation-development",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Cloud & Cybersecurity",
    href: "/security",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-code",
    title: "Digital Engineering",
    href: "/custom-software-development",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "Integration",
    href: "/contact",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Global Delivery",
    href: "/about#who-we-are",
    accent: "text-red",
  },
];

const WORK_STEPS = [
  {
    num: "1",
    name: "Discover",
    desc: "Understand the challenge, stakeholders, environment and desired outcomes.",
    className: "p-card-1",
  },
  {
    num: "2",
    name: "Assess",
    desc: "Review processes, platforms, architecture and current capability.",
    className: "p-card-2",
  },
  {
    num: "3",
    name: "Define",
    desc: "Shape the future-state strategy, architecture and roadmap.",
    className: "p-card-3",
  },
  {
    num: "4",
    name: "Prioritize",
    desc: "Sequence initiatives around value, complexity, risk and readiness.",
    className: "p-card-4",
  },
  {
    num: "5",
    name: "Enable",
    desc: "Support implementation, governance and continuous transformation.",
    className: "p-card-5",
  },
];

export default function AdvisoryPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const directionRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // GSAP animation hooks matching theme standard
  usePageHeaderAnimation(heroRef);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useAppServices(directionRef);
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
                <span>ADVISORY &amp; TRANSFORMATION</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">Shape the Right Strategy for</span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">Transformation.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM helps organizations align business priorities, technology architecture and transformation decisions around measurable outcomes.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap gap-3">
                <Link
  href="/contact"
  className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
>
  <span className="btn-text">Talk to an Advisor</span>
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
</Link>

                <a
                  href="#capabilities"
                  className="btn btn-sky-blue rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
                >
                  <span className="btn-text">Explore Our Approach</span>
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
                </a>
              </div>
            </div>

            {/* Right Showcase Image Card */}
            <div className="col-12 col-lg-5">
              <div className="header-visual-showcase spotlight-card p-3 rounded-4 position-relative">
                <div className="showcase-img-box position-relative overflow-hidden rounded-4">
                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src="/images/service-custom.jpg"
                      alt="Advisory & Transformation"
                      className="img-fluid image-reveal-img header-showcase-img"
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
          SECTION 2 — ADVISORY CAPABILITIES (Pages 1 & 2 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative" id="capabilities">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>ADVISORY CAPABILITIES</span>
              </div>

              <h2 className="choose-title text-white mb-3">
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal">
      Strategy Before
    </span>
  </span>
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal headline-cyan">
      Technology.
    </span>
  </span>
</h2>

              <p className="services-subtext anim-reveal mx-auto mb-0">
                Technology decisions create more value when they start with a clear understanding of the business challenge, operating environment and desired outcome.
              </p>
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
          SECTION 3 — FROM DECISION TO DIRECTION (Page 2 in PDF)
          ==================================================================== */}
      <section className="app-why-section position-relative" ref={directionRef}>
        <div className="container position-relative z-10">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <div className="app-why-left">
                <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                  <img src="/images/h.png" alt="Icon" />
                  <span>FROM DECISION TO DIRECTION</span>
                </div>

                <h2 className="app-why-title text-white mb-0">
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal">
                      Make Technology 
                    </span>
                  </span>
                  <span className="header-line-mask">
                    <span className="header-line-inner anim-text-reveal headline-cyan">
                     Decisions with Greater Confidence.
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="app-why-strips d-flex flex-column gap-3">
                {DIRECTION_ITEMS.map((item, idx) => (
                  <div className="app-advantage-strip spotlight-card p-4 rounded-4" key={item.heading}>
                    <div className="d-flex align-items-start gap-3">
                      <div className={`strip-icon ${idx % 2 === 0 ? "text-cyan" : "text-red"} fs-4 mt-1`}>
                        <i className={item.icon} />
                      </div>
                      <div className="strip-info flex-grow-1">
                        <h4 className="strip-heading text-white mb-1 fs-5">{item.heading}</h4>
                        <p className="strip-sub text-bright-muted small mb-0">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — WHERE ADVISORY CONNECTS (Pages 2 & 3 in PDF)
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
          <div className="row align-items-center mb-5 g-4">
            <div className="col-12 col-lg-6">
              <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>WHERE ADVISORY CONNECTS</span>
              </div>
              <h2 className="section-title text-white mb-0">
                Where Advisory Connects
              </h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="office-subtext text-bright-muted mb-0 anim-reveal">
                Advisory should not stop at recommendations. BVM connects strategy with the capabilities needed to execute it.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {CONNECTIONS.map((c) => (
              <div className="col-12 col-md-6 col-lg-4" key={c.title}>
                <Link href={c.href} className="text-decoration-none">
                  <div className="solution-card spotlight-card p-4 h-100 d-flex align-items-center justify-content-between anim-reveal">
                    <div className="d-flex align-items-center gap-3">
                      <div className={`solution-icon-box ${c.accent}`}>
                        <i className={c.icon} />
                      </div>
                      <h4 className="card-title text-white mb-0 fs-5">{c.title}</h4>
                    </div>
                    <span className="arrow-icon-wrapper ms-2">
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — HOW WE WORK (Page 3 in PDF)
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
                  <span>HOW WE WORK</span>
                </div>

                <h2 className="process-title text-white">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      From Understanding
                    </span>
                  </span>
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal headline-cyan">
                      to Action.
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {WORK_STEPS.map((s) => (
                  <div key={s.num} className={`process-stack-card ${s.className} process-anim-card`}>
                    <div className="process-card-content">
                      <h3 className="process-card-name text-white mb-2">{s.name}</h3>
                      <p className="process-card-desc text-bright-muted mb-0">{s.desc}</p>
                    </div>
                    <div className="process-card-number">{s.num}</div>
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
                    Need clarity before making the next
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                    technology decision?
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