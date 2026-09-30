"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";
import { usePageHeaderAnimation } from "@/animations/usePageHeaderAnimation";
import { useTechAnimation } from "@/animations/useTechAnimation";

/* ==========================================================================
   EXACT CONTENT FROM PDF (ZERO ALTERATIONS)
   ========================================================================== */

const DELIVERY_MODELS = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Remote Technology Specialists",
    desc: "Access specialized technology capability through global delivery.",
  },
  {
    icon: "fa-solid fa-building-user",
    title: "On-site & Hybrid Specialists",
    desc: "Deploy specialists closer to the business where the requirement demands it.",
  },
  {
    icon: "fa-solid fa-users-gear",
    title: "Dedicated Technology Teams",
    desc: "Build cross-functional teams aligned to your roadmap and working model.",
  },
  {
    icon: "fa-solid fa-cubes",
    title: "Project Delivery Squads",
    desc: "Assemble focused teams responsible for defined technology outcomes.",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Global Delivery Centres",
    desc: "Scale capability through structured offshore and global delivery models.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Build-Operate-Transfer",
    desc: "Establish a dedicated capability with a defined transition toward client ownership.",
  },
];

/* Dual-Orbit 12 Specialist Skills from Section 3 */
const OUTER_ORBIT = [
  {
    angle: "0deg",
    name: "SAP",
    src: "/images/tech-logo/tech-logo10.png",
  },
  {
    angle: "60deg",
    name: "Salesforce",
    src: "/images/tech-logo/tech-logo9.png",
  },
  {
    angle: "120deg",
    name: "Oracle",
    src: "/images/tech-logo/tech-logo6.svg",
  },
  {
    angle: "180deg",
    name: "ServiceNow",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
  },
  {
    angle: "240deg",
    name: "Microsoft",
    src: "/images/tech-logo/tech-logo5.png",
  },
  {
    angle: "300deg",
    name: "Odoo",
    src: "/images/tech-logo/tech-logo8.svg",
  },
];

const INNER_ORBIT = [
  {
    angle: "30deg",
    name: "AI & Data",
    src: "/images/tech/t17.png",
  },
  {
    angle: "90deg",
    name: "Cloud",
    src: "/images/tech-logo/tech-logo2.svg",
  },
  {
    angle: "150deg",
    name: "Cybersecurity",
    src: "/images/tech/t8.png",
  },
  {
    angle: "210deg",
    name: "Engineering",
    src: "/images/tech/t6.png",
  },
  {
    angle: "270deg",
    name: "QA",
    src: "/images/tech/t4.png",
  },
  {
    angle: "330deg",
    name: "BA / PM",
    src: "/images/tech-logo/tech-logo3.svg",
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: "fa-solid fa-user-check",
    title: "Specialist Resource",
    desc: "One or more defined technology specialists.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Dedicated Team",
    desc: "A longer-term cross-functional team.",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-cubes-stacked",
    title: "Project Squad",
    desc: "A focused team aligned to a defined outcome.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-building",
    title: "ODC / Global Delivery Centre",
    desc: "A scalable delivery capability aligned to the client's technology roadmap.",
    accent: "text-red",
  },
  {
    icon: "fa-solid fa-gear",
    title: "Managed Service",
    desc: "BVM owns defined operational or delivery outcomes.",
    accent: "text-cyan",
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Build-Operate-Transfer",
    desc: "Build the team, establish operations, then transition capability to the client.",
    accent: "text-red",
  },
];

/* Section 5: Exact Content from PDF inside GlobalCapability Hub Structure */
const STRATEGIC_HUBS = [
  {
    title: "UAE",
    subtitle: "Regional client engagement and solution consulting",
    badge: "DIFC REGIONAL HQ",
    image: "/images/zj1.png",
    cardTheme: "hub-cyan",
    pinIcon: "fa-location-dot",
    href: "/contact",
  },
  {
    title: "United Kingdom",
    subtitle: "International business presence",
    badge: "INTERNATIONAL PRESENCE",
    image: "/images/zj2.png",
    cardTheme: "hub-red",
    pinIcon: "fa-landmark",
    href: "/contact",
  },
  {
    title: "Global Engineering & Delivery",
    subtitle: "Technology specialists and engineering capability at scale",
    badge: "CENTRES OF EXCELLENCE",
    image: "/images/zj3.png",
    cardTheme: "hub-cyan",
    pinIcon: "fa-network-wired",
    href: "/contact",
  },
];

export default function TalentDeliveryPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  // Scoped animations
  usePageHeaderAnimation(heroRef);
  useTechAnimation(techRef);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCtaGlow(pageRef);

  // Mouse coordinate tracking for radial spotlight hover effect on hub cards
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

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
                <span>TECHNOLOGY TALENT &amp; GLOBAL DELIVERY</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="page-header-title text-white mb-4">
                <span className="header-line-mask">
                  <span className="header-line-inner">The Right Technology Capability. When</span>
                </span>
                <span className="header-line-mask">
                  <span className="header-line-inner headline-cyan">and Where You Need It.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="page-header-summary text-bright-muted mb-4">
                BVM helps organizations extend technology capacity through specialist resources, dedicated teams and flexible global delivery models.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openAdvisorModal}
                  className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Discuss Your Resource Requirement</span>
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
                        d="M2 12L12 2H4M12 2V10"
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
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                      alt="Technology Talent & Global Delivery"
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
          SECTION 2 — DELIVERY MODELS (Page 1 in PDF)
          ==================================================================== */}
      <section className="app-services-section position-relative">
        <div className="container position-relative z-10">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>DELIVERY MODELS</span>
              </div>

              <h2 className="choose-title text-white mb-0">
                <span className="header-line-mask">
                  <span className="header-line-inner anim-text-reveal">
                    Delivery Models
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* 6 Delivery Models Cards */}
          <div className="row g-4">
            {DELIVERY_MODELS.map((model) => (
              <div className="col-12 col-md-6 col-lg-4" key={model.title}>
                <div className="app-service-card spotlight-card p-4 h-100 d-flex flex-column justify-content-start anim-reveal">
                  <div className="app-icon-badge flutter-icon text-cyan mb-3">
                    <i className={model.icon} />
                  </div>
                  <h3 className="app-card-title text-white fs-5 mb-2">{model.title}</h3>
                  <p className="app-card-desc text-bright-muted small mb-0">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3 — SPECIALIST CAPABILITY (DUAL-ORBIT ARCHITECTURE)
          ==================================================================== */}
      <section className="technology-section ecosystem-section position-relative h-small" ref={techRef}>
        {/* Dual Rotating Orbit Rings */}
        <div className="tech-orbit-container position-absolute tech-anim-orbit">
          {/* Outer Orbit (6 items: SAP, Salesforce, Oracle, ServiceNow, Microsoft, Odoo) */}
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

          {/* Inner Orbit (6 items: AI & Data, Cloud, Cybersecurity, Engineering, QA, BA / PM) */}
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
            <span>SPECIALIST CAPABILITY</span>
          </div>

          <h2 className="tech-title text-white mb-0">
            <span className="tech-line-mask">
              <span className="tech-line-inner">Access Skills Across the</span>
            </span>
            <span className="tech-line-mask">
              <span className="tech-line-inner headline-cyan">Technology Landscape.</span>
            </span>
          </h2>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 — ENGAGEMENT MODELS (Page 2 in PDF)
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

          <div className="row g-4">
            {ENGAGEMENT_MODELS.map((model) => (
              <div className="col-12 col-md-6 col-lg-4" key={model.title}>
                <div className="app-service-card spotlight-card p-4 h-100 d-flex flex-column justify-content-start anim-reveal">
                  <div className={`app-icon-badge ${model.accent} mb-3`} style={{ width: 44, height: 44, fontSize: 18 }}>
                    <i className={model.icon} />
                  </div>
                  <h3 className="text-white fs-5 fw-bold mb-2">{model.title}</h3>
                  <p className="app-card-desc text-bright-muted small mb-0">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — LOCAL ENGAGEMENT. GLOBAL DELIVERY. (Page 3 in PDF)
          (Using Exact GlobalCapability Design with PDF content)
          ==================================================================== */}
      <section className="global-presence-section position-relative pt-0" aria-labelledby="gr-title">
        {/* Background Ambient Glows */}
        <div className="presence-glow-left" />
        <div className="presence-glow-right" />

        <div className="container position-relative z-10">
          {/* Header Block matching the site's kinetic animation */}
          <div className="presence-head text-center mb-5">
            <div className="who-badge d-inline-flex align-items-center gap-2 who-anim-elem anim-reveal mb-3">
              <img src="/images/h.png" alt="Icon" />
              <span>SECTION 05</span>
            </div>

            <h2 id="gr-title" className="who-title text-white mb-3">
              <span className="services-line-mask">
                <span className="services-line-inner anim-text-reveal">
                  Local Engagement.
                </span>
              </span>
              <span className="services-line-mask">
                <span className="services-line-inner anim-text-reveal text-cyan-highlight ">
                  Global Delivery.
                </span>
              </span>
            </h2>
          </div>

          {/* 3 Symmetrical Strategic Hub Cards with Image Reveal Masks */}
          <div className="row g-4 align-items-stretch mb-2">
            {STRATEGIC_HUBS.map((hub) => (
              <div className="col-12 col-lg-4" key={hub.title}>
                <Link
                  href={hub.href}
                  className={`presence-hub-card ${hub.cardTheme} anim-reveal`}
                  onMouseMove={handleMouseMove}
                >
                  {/* Photo Header with Site's Signature Image Reveal System */}
                  <div className="presence-hub-visual">
                    <div className="presence-hub-status-tag">
                      <span className="live-pulse-dot" />
                      <span>{hub.badge}</span>
                    </div>

                    <div className="presence-hub-pin-icon">
                      <i className={`fa-solid ${hub.pinIcon}`} />
                    </div>

                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={hub.image}
                        alt={hub.title}
                        className="img-fluid image-reveal-img presence-hub-img"
                      />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="presence-hub-body">
                    <div>
                      <h3 className="presence-hub-title">{hub.title}</h3>
                      <p className="presence-hub-sub">{hub.subtitle}</p>
                    </div>

                    <div className="presence-hub-action-row">
                      <span className="presence-hub-action-text">Explore Engagement</span>
                      <span className="presence-hub-action-btn">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Dock Capsule */}
          <div className="presence-dock-wrapper anim-reveal">
            <div className="presence-dock-capsule">
              <span className="presence-dock-item">
                <i className="fa-solid fa-file-lines" />
                <span>Project Delivery</span>
              </span>

              <span className="presence-dock-sep">|</span>

              <span className="presence-dock-item">
                <i className="fa-solid fa-gear" />
                <span>Managed Services</span>
              </span>

              <span className="presence-dock-sep">|</span>

              <span className="presence-dock-item">
                <i className="fa-solid fa-users" />
                <span>Dedicated Teams</span>
              </span>

              <span className="presence-dock-sep">|</span>

              <span className="presence-dock-item">
                <i className="fa-solid fa-server" />
                <span>Specialist Resources</span>
              </span>
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
                    Need technology capability 
                  </span>
                </span>
                <span className="cta-line-mask">
                  <span className="cta-line-inner anim-text-reveal headline-cyan">
                  without adding permanent overhead?
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
                        d="M2 12L12 2H4M12 2V10"
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