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
    icon: "fa-solid fa-boxes-stacked",
    title: "ERP & Core Business Systems",
    desc: "Connect finance, procurement, inventory, operations and core business processes through modern ERP environments.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "CRM & Customer Experience",
    desc: "Improve sales, service and customer engagement through connected CRM and experience platforms.",
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "ITSM & Enterprise Workflow",
    desc: "Structure service delivery, requests, incidents, approvals and enterprise workflows.",
  },
  {
    icon: "fa-solid fa-id-card",
    title: "HCM & Workforce Technology",
    desc: "Digitize workforce processes across employee administration, service and lifecycle management.",
  },
  {
    icon: "fa-solid fa-wrench",
    title: "EAM, FSM & Asset Operations",
    desc: "Connect assets, maintenance, field teams, service requests and operational workflows.",
  },
  {
    icon: "fa-solid fa-desktop",
    title: "Digital Experience Platforms",
    desc: "Build enterprise portals, customer experiences and content-driven digital environments.",
  },
];

const ECOSYSTEM_GROUPS = [
  {
    category: "ERP",
    platforms: ["SAP", "Oracle", "Microsoft Dynamics 365", "Odoo", "ERPNext"],
  },
  {
    category: "CRM & CX",
    platforms: ["Salesforce", "Microsoft Dynamics 365", "Creatio", "Zoho"],
  },
  {
    category: "ITSM & Workflow",
    platforms: ["ServiceNow", "Atlassian", "ManageEngine", "Freshservice"],
  },
  {
    category: "Digital Experience",
    platforms: ["Liferay", "Adobe Experience Manager", "Sitecore"],
  },
  {
    category: "Asset & Field Operations",
    platforms: ["FacilityBot"],
  },
];

const WHAT_BVM_DOES = [
  {
    num: "1",
    name: "Assess & Select",
    desc: "Evaluate the right platform against business and technical requirements.",
    className: "p-card-1",
  },
  {
    num: "2",
    name: "Implement & Configure",
    desc: "Design workflows, roles, modules and operating processes.",
    className: "p-card-2",
  },
  {
    num: "3",
    name: "Customize",
    desc: "Extend standard capability where business differentiation requires it.",
    className: "p-card-3",
  },
  {
    num: "4",
    name: "Integrate",
    desc: "Connect applications, data and workflows across the enterprise.",
    className: "p-card-4",
  },
  {
    num: "5",
    name: "Modernize",
    desc: "Upgrade or replace legacy applications and fragmented systems.",
    className: "p-card-5",
  },
  {
    num: "6",
    name: "Manage",
    desc: "Support, optimize and continuously improve enterprise platforms.",
    className: "p-card-6",
  },
];

const PRIORITIES = [
  { title: "ERP Modernization", icon: "fa-solid fa-arrows-rotate", href: "/erp-development" },
  { title: "CRM Transformation", icon: "fa-solid fa-users", href: "/crm-development" },
  { title: "Enterprise Workflow", icon: "fa-solid fa-diagram-project", href: "/contact" },
  { title: "Asset & Field Operations", icon: "fa-solid fa-wrench", href: "/contact" },
  { title: "UAE E-Invoicing Integration", icon: "fa-solid fa-file-invoice-dollar", href: "/faq#faq-einvoicing" },
  { title: "Platform Consolidation", icon: "fa-solid fa-layer-group", href: "/contact" },
];

export default function EnterpriseApplicationsPageContent() {
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
                <span>ENTERPRISE APPLICATIONS</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              {/* HERO TITLE */}
<h1 className="page-header-title text-white mb-4">
  <span className="header-line-mask">
    <span className="header-line-inner">
      Modernize the Systems
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner headline-cyan">
      That Run the Business.
    </span>
  </span>
</h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM helps organizations evaluate, implement, customize, integrate, modernize and support enterprise platforms around business requirements.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
                >
                  <span className="btn-text">Discuss Your Enterprise Platform</span>
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

            {/* Right Showcase Image Card */}
            <div className="col-12 col-lg-5">
              <div className="header-visual-showcase spotlight-card p-3 rounded-4 position-relative">
                <div className="showcase-img-box position-relative overflow-hidden rounded-4">
                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src="/images/service-erp.jpg"
                      alt="Enterprise Applications"
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
          SECTION 2 — ENTERPRISE APPLICATION CAPABILITIES (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>ENTERPRISE APPLICATION CAPABILITIES</span>
              </div>

            {/* ENTERPRISE APPLICATION CAPABILITIES */}
<h2 className="choose-title text-white mb-0">
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal">
      Connected Platforms.
    </span>
  </span>
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal headline-cyan">
      Better Operations.
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
          SECTION 3 — PLATFORM ECOSYSTEM (Page 2 in PDF)
          ==================================================================== */}
      <section className="solutions-across-section position-relative">
        <img
          src="/images/4.png"
          className="section-bg-glow section-glow-right"
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
                <span>PLATFORM ECOSYSTEM</span>
              </div>

              <h2 className="app-why-title text-white mb-0">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Enterprise Platforms
    </span>
  </span>

  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Built to Work Together.
    </span>
  </span>
</h2>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="row g-4 mb-4">
            {ECOSYSTEM_GROUPS.map((group) => (
              <div className="col-12 col-md-6 col-lg-4" key={group.category}>
                <div className="platform-category-box spotlight-card p-4 h-100 anim-reveal">
                  <div className="text-white fw-bold fs-6 mb-3">{group.category}</div>
                  <div className="platform-chip-group">
                    {group.platforms.map((p) => (
                      <span className="platform-chip" key={p}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Label Strip */}
          <div className="mega-callout-card anim-reveal text-center py-3 px-4">
            <p className="text-bright-muted small mb-0">
              <strong className="text-white">Important label:</strong> Selected technology ecosystems. Formal partnerships are identified separately.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — WHAT BVM HELPS YOU DO (Pages 2 & 3 in PDF)
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
                  <span>WHAT BVM HELPS YOU DO</span>
                </div>

                <h2 className="process-title text-white mb-4">
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal">
                      From Platform Decision
                    </span>
                  </span>
                  <span className="process-line-mask">
                    <span className="process-line-inner anim-text-reveal headline-cyan">
                      to Long-Term Value.
                    </span>
                  </span>
                </h2>

                {/* Bottom Journey Pill Strip */}
                <div className="spotlight-card p-3 rounded-4 anim-reveal">
                  <div className="extra-small text-cyan fw-bold mb-2">BOTTOM JOURNEY:</div>
                  <div className="text-white small fw-semibold">
                    Assess &rarr; Implement &rarr; Integrate &rarr; Modernize &rarr; Manage
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="process-cards-stack">
                {WHAT_BVM_DOES.map((item) => (
                  <div key={item.num} className={`process-stack-card ${item.className} process-anim-card`}>
                    <div className="process-card-content">
                      <h3 className="process-card-name text-white mb-2">{item.name}</h3>
                      <p className="process-card-desc text-bright-muted mb-0">{item.desc}</p>
                    </div>
                    <div className="process-card-number">{item.num}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — RELEVANT TRANSFORMATION PRIORITIES (Page 3 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>RELEVANT TRANSFORMATION PRIORITIES</span>
              </div>

              {/* RELEVANT TRANSFORMATION PRIORITIES */}
<h2 className="choose-title text-white mb-0">
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal">
      Relevant Transformation
    </span>
  </span>
  <span className="about-line-mask">
    <span className="about-line-inner anim-text-reveal headline-cyan">
      Priorities
    </span>
  </span>
</h2>
            </div>
          </div>

          {/* 6 Compact Cards */}
          <div className="row g-3">
            {PRIORITIES.map((card) => (
              <div className="col-12 col-md-6 col-lg-4" key={card.title}>
                <Link href={card.href} className="text-decoration-none">
                  <div className="spotlight-card p-3 p-md-4 rounded-4 d-flex align-items-center justify-content-between h-100 anim-reveal">
                    <div className="d-flex align-items-center gap-3">
                      <div className="app-icon-badge flutter-icon text-cyan" style={{ width: 42, height: 42, fontSize: 16 }}>
                        <i className={card.icon} />
                      </div>
                      <h4 className="text-white fs-6 fw-bold mb-0">{card.title}</h4>
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
      Modernizing an enterprise
    </span>
  </span>
  <span className="cta-line-mask">
    <span className="cta-line-inner anim-text-reveal headline-cyan">
      platform?
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