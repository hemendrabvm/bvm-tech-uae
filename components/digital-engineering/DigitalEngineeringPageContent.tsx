"use client";

import { useRef } from "react";
import Link from "next/link";
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
    icon: "fa-solid fa-lightbulb",
    title: "Product Strategy & Engineering",
    desc: "Turn business concepts into scalable digital products and platforms.",
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Enterprise Application Development",
    desc: "Build secure custom applications around complex enterprise workflows and requirements.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Web, Mobile & Experience Engineering",
    desc: "Create connected user experiences across web and mobile channels.",
  },
  {
    icon: "fa-solid fa-cloud",
    title: "SaaS Engineering",
    desc: "Design and build scalable multi-tenant SaaS products.",
  },
  {
    icon: "fa-solid fa-recycle",
    title: "Application Modernization",
    desc: "Modernize legacy applications, architecture and technology stacks.",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "API, Microservices & Quality Engineering",
    desc: "Build modular services, integrations and quality practices for reliable digital delivery.",
  },
];

const THREE_PATHS = [
  {
    icon: "fa-solid fa-cubes-stacked",
    title: "Configure",
    desc: "Use established enterprise platforms where they fit.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-puzzle-piece",
    title: "Extend",
    desc: "Customize and integrate when standard functionality is not enough.",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-code",
    title: "Engineer",
    desc: "Build differentiated digital capability where the business requires it.",
    accent: "text-cyan",
  },
];

const ENGINEERING_SCOPES = [
  { title: "Enterprise Applications", icon: "fa-solid fa-boxes-stacked", href: "/erp-development" },
  { title: "SaaS Platforms", icon: "fa-solid fa-cloud", href: "/saas-development" },
  { title: "Customer Portals", icon: "fa-solid fa-door-open", href: "/contact" },
  { title: "Mobile Applications", icon: "fa-solid fa-mobile-screen-button", href: "/mobile-apps" },
  { title: "APIs & Integrations", icon: "fa-solid fa-network-wired", href: "/contact" },
  { title: "Application Modernization", icon: "fa-solid fa-arrows-rotate", href: "/custom-software-development" },
];

const LIFECYCLE_STAGES = [
  { num: "1", name: "Discover", className: "p-card-1" },
  { num: "2", name: "Design", className: "p-card-2" },
  { num: "3", name: "Engineer", className: "p-card-3" },
  { num: "4", name: "Test", className: "p-card-4" },
  { num: "5", name: "Launch", className: "p-card-5" },
  { num: "6", name: "Improve", className: "p-card-6" },
];

const ENGAGEMENT_MODELS = [
  { title: "Project Delivery", icon: "fa-solid fa-diagram-project" },
  { title: "Dedicated Product Team", icon: "fa-solid fa-users-gear" },
  { title: "Engineering Squad", icon: "fa-solid fa-people-group" },
  { title: "Managed Development", icon: "fa-solid fa-screwdriver-wrench" },
  { title: "Build-Operate-Transfer", icon: "fa-solid fa-handshake" },
];

export default function DigitalEngineeringPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const lifecycleRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // Scoped animations
  usePageHeaderAnimation(heroRef);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useProcessStack(lifecycleRef);
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
                <span>DIGITAL &amp; PRODUCT ENGINEERING</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">Engineer What Creates</span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">Differentiation.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM designs, builds and modernizes digital products and enterprise applications where packaged platforms alone are not enough.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Discuss Your Digital Product</span>
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
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                      alt="Digital & Product Engineering"
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
          SECTION 2 — ENGINEERING CAPABILITIES (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>ENGINEERING CAPABILITIES</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
                    Engineering Capabilities
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
          SECTION 3 — BUILD VS BUY (Pages 1 & 2 in PDF)
          ==================================================================== */}
      <section className="app-why-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>BUILD VS BUY</span>
              </div>

              <h2 className="choose-title text-white mb-3">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Build Where It
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Creates Advantage.
    </span>
  </span>
</h2>

              <p className="services-subtext anim-reveal mx-auto mb-0">
                Not every problem requires custom development, and not every business requirement fits a packaged platform.
              </p>
            </div>
          </div>

          {/* Show three paths */}
          <div className="row g-4">
            {THREE_PATHS.map((path) => (
              <div className="col-12 col-md-4" key={path.title}>
                <div className="spotlight-card p-4 rounded-4 h-100 anim-reveal">
                  <div className={`app-icon-badge flutter-icon ${path.accent} mb-3`} style={{ width: 48, height: 48, fontSize: 20 }}>
                    <i className={path.icon} />
                  </div>
                  <h3 className="text-white fs-4 fw-bold mb-2">{path.title}</h3>
                  <p className="text-bright-muted small mb-0">{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — ENGINEERING SCOPE (Page 2 in PDF)
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

        <div className="container position-relative z-10 text-center">
          <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
            <img src="/images/h.png" alt="Icon" />
            <span>ENGINEERING SCOPE</span>
          </div>

          <h2 className="choose-title text-white mb-5">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Engineering
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Scope
    </span>
  </span>
</h2>

          <div className="row g-3">
            {ENGINEERING_SCOPES.map((scope) => (
              <div className="col-12 col-md-6 col-lg-4" key={scope.title}>
                <Link href={scope.href} className="text-decoration-none">
                  <div className="spotlight-card p-3 p-md-4 rounded-4 d-flex align-items-center justify-content-between h-100 anim-reveal">
                    <div className="d-flex align-items-center gap-3">
                      <div className="app-icon-badge flutter-icon text-cyan" style={{ width: 42, height: 42, fontSize: 16 }}>
                        <i className={scope.icon} />
                      </div>
                      <h4 className="text-white fs-6 fw-bold mb-0">{scope.title}</h4>
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
          SECTION 5 — DELIVERY LIFECYCLE (Page 2 in PDF)
          ==================================================================== */}
      <section className="process-section position-relative" ref={lifecycleRef}>
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
                  <span>DELIVERY LIFECYCLE</span>
                </div>

                <h2 className="process-title text-white mb-4">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      Delivery Lifecycle
                    </span>
                  </span>
               
                </h2>

                {/* Lifecycle Path Strip */}
                <div className="spotlight-card p-3 rounded-4 mb-4 anim-reveal">
                  <div className="text-white small fw-bold">
                    Discover &rarr; Design &rarr; Engineer &rarr; Test &rarr; Launch &rarr; Improve
                  </div>
                </div>

                {/* Supporting Copy */}
                <p className="text-bright-muted anim-reveal mb-0">
                  Cross-functional delivery across product, engineering, UX, QA and integration.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {LIFECYCLE_STAGES.map((stage) => (
                  <div key={stage.num} className={`process-stack-card ${stage.className} process-anim-card`}>
                    <div className="process-card-content">
                      <h3 className="process-card-name text-white mb-0">{stage.name}</h3>
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
          SECTION 6 — ENGAGEMENT MODELS (Page 2 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>ENGAGEMENT MODELS</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
                    Engagement Models
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {ENGAGEMENT_MODELS.map((model) => (
              <div className="col-12 col-sm-6 col-lg-4" key={model.title}>
                <div className="spotlight-card p-4 rounded-4 h-100 d-flex align-items-center gap-3 anim-reveal">
                  <div className="app-icon-badge flutter-icon text-cyan" style={{ width: 44, height: 44, fontSize: 18 }}>
                    <i className={model.icon} />
                  </div>
                  <h4 className="text-white fs-5 fw-bold mb-0">{model.title}</h4>
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
                    Building something standard platforms
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                    cannot deliver?
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