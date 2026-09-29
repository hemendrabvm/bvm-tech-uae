"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ==========================================================================
   ORIGINAL HIERARCHY FROM STRATEGY DOCUMENT
   ========================================================================== */

export const WHAT_WE_DO_DATA = [
  {
    id: "advisory",
    name: "Advisory & Transformation",
    tagline: "Strategic Consulting & Operating Model Design",
    items: [
      { title: "Digital & Technology Strategy", href: "/contact" },
      { title: "Enterprise Architecture", href: "/contact" },
      { title: "Business Process Transformation", href: "/contact" },
      { title: "Platform Advisory & Selection", href: "/contact" },
      { title: "AI & Data Strategy", href: "/contact" },
      { title: "Transformation & Program Advisory", href: "/contact" },
    ],
  },
  {
    id: "enterprise-apps",
    name: "Enterprise Applications",
    tagline: "Core Business Systems & Digital Experience",
    items: [
      { title: "ERP & Core Business Systems", href: "/erp-development" },
      { title: "CRM & Customer Experience", href: "/crm-development" },
      { title: "ITSM & Enterprise Workflow", href: "/contact" },
      { title: "HCM & Workforce Technology", href: "/erp-development" },
      { title: "EAM, FSM & Asset Operations", href: "/contact" },
      { title: "Digital Experience Platforms", href: "/web-development" },
    ],
  },
  {
    id: "ai-data",
    name: "AI, Data & Intelligent Automation",
    tagline: "From Core Data Engineering to Agentic AI",
    items: [
      { title: "Enterprise AI", href: "/ai-automation-development" },
      { title: "Generative & Agentic AI", href: "/ai-automation-development" },
      { title: "Data Platforms & Engineering", href: "/ai-automation-development" },
      { title: "Business Intelligence & Analytics", href: "/ai-automation-development" },
      { title: "Intelligent Automation & RPA", href: "/ai-automation-development" },
      { title: "Data Governance", href: "/ai-automation-development" },
      { title: "Document Intelligence", href: "/ai-automation-development" },
    ],
  },
  {
    id: "product-eng",
    name: "Digital & Product Engineering",
    tagline: "Modern Software, SaaS Platforms & Microservices",
    items: [
      { title: "Product Strategy & Engineering", href: "/custom-software-development" },
      { title: "Enterprise Application Development", href: "/custom-software-development" },
      { title: "Web & Mobile Engineering", href: "/mobile-apps" },
      { title: "SaaS Engineering", href: "/saas-development" },
      { title: "Application Modernization", href: "/custom-software-development" },
      { title: "API & Microservices Engineering", href: "/custom-software-development" },
      { title: "Quality Engineering", href: "/custom-software-development" },
      { title: "UX & Experience Engineering", href: "/web-development" },
    ],
  },
  {
    id: "cloud-cyber",
    name: "Cloud, Infrastructure & Cybersecurity",
    tagline: "Resilient Cloud Foundations & Zero-Trust Security",
    items: [
      { title: "Cloud Strategy & Migration", href: "/contact" },
      { title: "Cloud-Native Engineering", href: "/contact" },
      { title: "Infrastructure Modernization", href: "/contact" },
      { title: "DevOps & DevSecOps", href: "/contact" },
      { title: "Cybersecurity Advisory", href: "/security" },
      { title: "Application & Cloud Security", href: "/security" },
      { title: "Identity & Access Management", href: "/security" },
      { title: "Resilience & Disaster Recovery", href: "/contact" },
    ],
  },
  {
    id: "integration",
    name: "Enterprise Integration & Interoperability",
    tagline: "API Management, Middleware & Legacy Unification",
    items: [
      { title: "Integration Strategy", href: "/contact" },
      { title: "API Management", href: "/contact" },
      { title: "Application Integration", href: "/contact" },
      { title: "Data Integration", href: "/contact" },
      { title: "Middleware & iPaaS", href: "/contact" },
      { title: "Legacy Integration", href: "/contact" },
    ],
  },
  {
    id: "managed-services",
    name: "Managed Services",
    tagline: "Enterprise Platform Support & L1/L2/L3 SLAs",
    items: [
      { title: "Applications Managed Services", href: "/faq#faq-ownership" },
      { title: "Enterprise Platform Support", href: "/faq#faq-ownership" },
      { title: "Cloud & Infrastructure Operations", href: "/faq#faq-ownership" },
      { title: "Platform Administrations", href: "/faq#faq-ownership" },
      { title: "L1/L2/L3 Support", href: "/faq#faq-ownership" },
      { title: "Continuous Improvement & Optimization", href: "/faq#faq-ownership" },
    ],
  },
  {
    id: "talent-delivery",
    name: "Technology Talent & Delivery",
    tagline: "Dedicated Squads, ODCs & Build-Operate-Transfer",
    items: [
      { title: "Remote Technology Specialists", href: "/contact" },
      { title: "On-site & Hybrid Specialists", href: "/contact" },
      { title: "Dedicated Technology Teams", href: "/contact" },
      { title: "Project Delivery Squads", href: "/contact" },
      { title: "Offshore Development Centre", href: "/contact" },
      { title: "Global Capabilities Centers", href: "/contact" },
      { title: "AI & Digital Centres of Excellence", href: "/contact" },
      { title: "Build-Operate-Transfer", href: "/contact" },
    ],
  },
  {
    id: "transformation-solutions",
    name: "Transformation Solutions",
    tagline: "Focused Programs Delivering Measurable Business Value",
    items: [
      { title: "Enterprise AI Adoption", href: "/ai-automation-development" },
      { title: "ERP Modernization", href: "/erp-development" },
      { title: "CRM Transformation", href: "/crm-development" },
      { title: "Application Modernization", href: "/custom-software-development" },
      { title: "Enterprise Integration", href: "/contact" },
      { title: "Intelligent Asset & Field Operations", href: "/contact" },
      { title: "UAE E-Invoicing Integration", href: "/faq#faq-einvoicing" },
      { title: "Data & Analytics Modernization", href: "/contact" },
    ],
  },
];

export const INDUSTRIES_DATA = [
  { title: "Government & Public Services", icon: "fa-building-columns", href: "/industries" },
  { title: "Banking, Financial Services & Insurance", icon: "fa-coins", href: "/industries" },
  { title: "Real Estate, Facilities & Smart Infrastructure", icon: "fa-city", href: "/industries" },
  { title: "Energy & Utilities", icon: "fa-bolt-lightning", href: "/industries" },
  { title: "Construction & Engineering", icon: "fa-helmet-safety", href: "/industries" },
  { title: "Manufacturing & Industrial", icon: "fa-industry", href: "/industries" },
  { title: "Logistics & Mobility", icon: "fa-truck-fast", href: "/industries" },
  { title: "Retail & Consumer", icon: "fa-cart-shopping", href: "/industries" },
  { title: "Travel, Hospitality & Leisure", icon: "fa-plane-departure", href: "/industries" },
  { title: "Healthcare & Life Sciences", icon: "fa-hospital", href: "/industries" },
  { title: "Technology & SaaS", icon: "fa-microchip", href: "/industries" },
];

export const PLATFORMS_DATA = [
  {
    category: "CRM & Customer Experience",
    platforms: ["Salesforce", "Microsoft Dynamics 365", "Creatio", "Zoho", "HubSpot"],
  },
  {
    category: "ERP & Core Business Platforms",
    platforms: ["SAP", "Oracle", "Microsoft Dynamics 365", "Odoo", "ERPNext", "SAP Business One"],
  },
  {
    category: "ITSM & Enterprise Workflow",
    platforms: ["ServiceNow", "Atlassian", "ManageEngine", "Freshworks"],
  },
  {
    category: "Data, Analytics & AI",
    platforms: ["Microsoft Fabric", "Power BI", "Databricks", "Snowflake"],
  },
  {
    category: "Automation & Low-Code",
    platforms: ["Microsoft Power Platform", "UiPath", "Creatio", "OutSystems", "Mendix"],
  },
  {
    category: "Digital Experience",
    platforms: ["Liferay", "Adobe Experience Manager", "Sitecore"],
  },
  {
    category: "Asset & Field Operations",
    platforms: ["Facilitybot"],
  },
  {
    category: "Enterprise Integration",
    platforms: ["MuleSoft", "Azure Integration Services", "SAP Integration Suite", "Oracle Integration"],
  },
  {
    category: "Cloud",
    platforms: ["Microsoft Azure", "AWS", "Oracle Cloud", "Google Cloud"],
  },
  {
    category: "Cybersecurity",
    platforms: ["Zero Trust", "IAM", "Cloud Security", "Disaster Recovery"],
  },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  // Hook directly into the global advisor modal
  const { openAdvisorModal } = useAdvisorModal();

  // Desktop active mega menu: 'what-we-do' | 'industries' | 'platforms' | 'client-success' | 'company' | null
  const [activeMega, setActiveMega] = useState<string | null>(null);

  // Active pillar for 'What We Do'
  const [activePillarId, setActivePillarId] = useState<string>("advisory");

  // Mobile drawer sub-accordions
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth < 992) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(menuName);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 992) return;
    timeoutRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 180);
  };

  const toggleMobileCategory = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAll = () => {
    setActiveMega(null);
    setNavOpen(false);
    document.body.classList.remove("nav-open");
  };

  // Direct modal trigger — zero redirects
  const handleAdvisorClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    closeAll();
    openAdvisorModal();
  };

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const headerEl = headerRef.current;
      if (!headerEl) return;

      const isInitialLoading = document.body.classList.contains("loading");
      const startDelay = isInitialLoading ? 0.75 : 0.05;

      gsap.fromTo(
        headerEl,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: startDelay, ease: "power4.out" }
      );
    },
    { scope: headerRef, dependencies: [pathname] }
  );

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname]);

  const activePillar =
    WHAT_WE_DO_DATA.find((p) => p.id === activePillarId) || WHAT_WE_DO_DATA[0];

  return (
    <header className="header-section" ref={headerRef}>
      <div className="container header-nav-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-capsule py-2 px-3 px-lg-4">
          {/* Logo on Left */}
          <Link className="navbar-brand d-flex align-items-center" href="/" onClick={closeAll}>
            <div className="logo-wrapper">
              <img src="/images/logo.svg" alt="BVM Tech Limited Logo" />
            </div>
          </Link>

          {/* Right Mobile Actions */}
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <button
              type="button"
              className="btn btn-login-red rounded-pill fw-bold d-inline-flex align-items-center gap-2 mobile-direct-contact btn-advisor-mobile-header"
              onClick={handleAdvisorClick}
            >
              <span>Talk to an Advisor</span>
              <span className="contact-angles-icon">
                <i className="fa-solid fa-angles-right" />
              </span>
            </button>

            <button
              className={`navbar-toggler custom-toggler ${navOpen ? "active" : ""}`}
              type="button"
              aria-controls="mainNavbarMobile"
              aria-expanded={navOpen}
              aria-label="Toggle navigation"
              onClick={() => {
                setNavOpen(!navOpen);
                document.body.classList.toggle("nav-open", !navOpen);
              }}
            >
              <span className="toggler-icon-bar top-bar" />
              <span className="toggler-icon-bar middle-bar" />
              <span className="toggler-icon-bar bottom-bar" />
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="mainNavbarDesktop">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center gap-lg-1">
              {/* 1. What We Do */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("what-we-do")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${activeMega === "what-we-do" ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "what-we-do" ? null : "what-we-do")}
                >
                  What We Do
                  <svg className="dropdown-chevron-svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>

              {/* 2. Industries */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${activeMega === "industries" ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "industries" ? null : "industries")}
                >
                  Industries
                  <svg className="dropdown-chevron-svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>

              {/* 3. Platforms & Ecosystems */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("platforms")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${activeMega === "platforms" ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "platforms" ? null : "platforms")}
                >
                  Platforms &amp; Ecosystems
                  <svg className="dropdown-chevron-svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>

              {/* 4. Client Success */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("client-success")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${activeMega === "client-success" ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "client-success" ? null : "client-success")}
                >
                  Client Success
                  <svg className="dropdown-chevron-svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>

              {/* 5. Company */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-toggle ${activeMega === "company" ? "active" : ""}`}
                  onClick={() => setActiveMega(activeMega === "company" ? null : "company")}
                >
                  Company
                  <svg className="dropdown-chevron-svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            </ul>

            {/* Desktop Persistent CTA Button (Direct Modal Open) */}
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-login-red rounded-pill fw-semibold magnetic-btn d-inline-flex align-items-center gap-2 btn-advisor-desktop"
                onClick={handleAdvisorClick}
              >
                <span className="btn-text">Talk to an Advisor</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
                <span className="btn-sheen" />
              </button>
            </div>
          </div>
        </nav>

        {/* ==================================================================
            DESKTOP MEGA MENU 1: WHAT WE DO
            ================================================================== */}
        <div
          className={`bvm-mega-menu ${activeMega === "what-we-do" ? "is-active" : ""}`}
          onMouseEnter={() => handleMouseEnter("what-we-do")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="row g-0">
            <div className="col-4 mega-rail-col">
              <div className="mega-rail-header">
                <span className="mega-category-badge d-block mb-1">CORE PRACTICES</span>
                <span className="text-white fw-bold fs-6">What We Do</span>
              </div>
              {WHAT_WE_DO_DATA.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`mega-rail-item ${activePillarId === p.id ? "active" : ""}`}
                  onMouseEnter={() => setActivePillarId(p.id)}
                  onClick={() => setActivePillarId(p.id)}
                >
                  <span>{p.name}</span>
                  <i className="fa-solid fa-chevron-right rail-arrow" />
                </button>
              ))}
            </div>

            <div className="col-8 mega-content-area">
              <div className="mega-content-header d-flex align-items-center justify-content-between">
                <div>
                  <span className="mega-category-badge">{activePillar.name}</span>
                  <h4 className="text-white fs-5 fw-bold mb-0 mt-1">{activePillar.tagline}</h4>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-consult-red rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-2"
                  onClick={handleAdvisorClick}
                >
                  <span>Schedule Advisory</span>
                  <span className="contact-angles-icon">
                    <i className="fa-solid fa-angles-right" />
                  </span>
                </button>
              </div>

              <div className="mega-grid-2col mb-4">
                {activePillar.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="mega-sub-card"
                    onClick={closeAll}
                  >
                    <span className="mega-sub-dot" />
                    <div>
                      <div className="mega-sub-title">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mega-callout-card d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-cyan small fw-bold d-block">BVM ENTERPRISE LIFECYCLE</span>
                  <span className="text-white small">ADVISE &bull; TRANSFORM &bull; ENGINEER &bull; OPERATE &bull; SCALE</span>
                </div>
                <Link href="/about" className="text-bright-muted small text-decoration-none" onClick={closeAll}>
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            DESKTOP MEGA MENU 2: INDUSTRIES
            ================================================================== */}
        <div
          className={`bvm-mega-menu ${activeMega === "industries" ? "is-active" : ""}`}
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 p-lg-5">
            <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-20">
              <div>
                <span className="mega-category-badge">SECTOR-SPECIFIC EXPERTISE</span>
                <h4 className="text-white fs-4 fw-bold mb-0 mt-1">
                  Technology Grounded in Industry Context
                </h4>
              </div>
              <Link
                href="/industries"
                className="btn btn-sm btn-consult-red rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                onClick={closeAll}
              >
                <span>View All Industries</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </Link>
            </div>

            <div className="mega-grid-3col">
              {INDUSTRIES_DATA.map((ind) => (
                <Link
                  key={ind.title}
                  href={ind.href}
                  className="mega-sub-card"
                  onClick={closeAll}
                >
                  <div className="text-cyan fs-5 mt-1">
                    <i className={`fa-solid ${ind.icon}`} />
                  </div>
                  <div>
                    <div className="mega-sub-title">{ind.title}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mega-callout-card mt-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <span className="text-bright-muted small">
                Compliant with UAE &amp; GCC regulatory frameworks: <strong className="text-white">DHA/DOH</strong>, <strong className="text-white">Ejari</strong>, <strong className="text-white">Central Bank</strong> &amp; <strong className="text-white">FTA E-Invoicing</strong>.
              </span>
              <button
                type="button"
                className="btn btn-link text-cyan fw-bold small text-decoration-none p-0"
                onClick={handleAdvisorClick}
              >
                Consult an Industry Specialist &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================
            DESKTOP MEGA MENU 3: PLATFORMS & ECOSYSTEMS
            ================================================================== */}
        <div
          className={`bvm-mega-menu ${activeMega === "platforms" ? "is-active" : ""}`}
          onMouseEnter={() => handleMouseEnter("platforms")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 p-lg-5">
            <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-20">
              <div>
                <span className="mega-category-badge">ENTERPRISE PLATFORMS &amp; CLOUD ECOSYSTEMS</span>
                <h4 className="text-white fs-4 fw-bold mb-0 mt-1">
                  Connected Across Established Platforms
                </h4>
              </div>
              <Link
                href="/services"
                className="btn btn-sm btn-consult-red rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                onClick={closeAll}
              >
                <span>Ecosystem Overview</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </Link>
            </div>

            <div className="row g-4">
              {PLATFORMS_DATA.map((group) => (
                <div className="col-12 col-md-6 col-lg-4" key={group.category}>
                  <div className="platform-category-box">
                    <div className="text-white fw-bold small mb-2">{group.category}</div>
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

            <div className="mega-callout-card mt-4 d-flex align-items-center justify-content-between">
              <span className="text-bright-muted small">
                We design solutions around business requirements rather than forcing challenges into a single platform.
              </span>
              <button
                type="button"
                className="btn btn-link text-cyan fw-bold small text-decoration-none p-0"
                onClick={handleAdvisorClick}
              >
                Discuss Platform Advisory &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================
            DESKTOP MEGA MENU 4: CLIENT SUCCESS
            ================================================================== */}
        <div
          className={`bvm-mega-menu bvm-mega-compact ${activeMega === "client-success" ? "is-active" : ""}`}
          onMouseEnter={() => handleMouseEnter("client-success")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 p-lg-5">
            <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-20">
              <span className="mega-category-badge">PROOF &amp; RESULTS</span>
              <h4 className="text-white fs-4 fw-bold mb-0 mt-1">Client Success &amp; Outcomes</h4>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-7 d-flex flex-column gap-3">
                <Link href="/projects" className="mega-sub-card" onClick={closeAll}>
                  <div className="text-cyan fs-5 mt-1"><i className="fa-solid fa-chart-line" /></div>
                  <div>
                    <div className="mega-sub-title">Case Studies</div>
                    <div className="text-bright-muted small">Technical architectures and quantified operational outcomes.</div>
                  </div>
                </Link>

                <Link href="/projects" className="mega-sub-card" onClick={closeAll}>
                  <div className="text-red fs-5 mt-1"><i className="fa-solid fa-users" /></div>
                  <div>
                    <div className="mega-sub-title">Customer Stories</div>
                    <div className="text-bright-muted small">Direct insights and leadership testimonials from enterprise clients.</div>
                  </div>
                </Link>

                <Link href="/projects" className="mega-sub-card" onClick={closeAll}>
                  <div className="text-cyan fs-5 mt-1"><i className="fa-solid fa-trophy" /></div>
                  <div>
                    <div className="mega-sub-title">Transformation Outcomes</div>
                    <div className="text-bright-muted small">Verified performance metrics, 70% manual work reductions, and scale.</div>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-5">
                <div className="mega-feature-box d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge-sub-title text-cyan mb-1 d-block">FEATURED PROOF</span>
                    <h5 className="text-white fw-bold mb-2">Kings Furniture &amp; Realty Guru</h5>
                    <p className="text-bright-muted small mb-0">Unified ERP and trust accounting systems processing high transaction volumes across GCC.</p>
                  </div>
                  <Link href="/case-study/kings-furniture" className="btn btn-consult-red rounded-pill px-3 py-2 fw-semibold mt-3" onClick={closeAll}>
                    Explore Case Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            DESKTOP MEGA MENU 5: COMPANY
            ================================================================== */}
        <div
          className={`bvm-mega-menu bvm-mega-compact ${activeMega === "company" ? "is-active" : ""}`}
          onMouseEnter={() => handleMouseEnter("company")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4 p-lg-5">
            <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-20">
              <span className="mega-category-badge">CREDIBILITY &amp; GOVERNANCE</span>
              <h4 className="text-white fs-4 fw-bold mb-0 mt-1">About BVM Tech Limited</h4>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-7 d-flex flex-column gap-3">
                <div className="mega-grid-2col">
                  <Link href="/about" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">About BVM</div></div>
                  </Link>
                  <Link href="/about#leadership" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Leadership</div></div>
                  </Link>
                  <Link href="/about#who-we-are" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Global Presence</div></div>
                  </Link>
                  <Link href="/services" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Alliance &amp; Partners</div></div>
                  </Link>
                  <Link href="/contact" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Careers</div></div>
                  </Link>
                  <Link href="/contact" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Contact Us</div></div>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="mega-feature-box d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge-sub-title text-cyan mb-1 d-block">GLOBAL ENGAGEMENT</span>
                    <h5 className="text-white fw-bold mb-2">Dubai (DIFC) &amp; United Kingdom</h5>
                    <p className="text-bright-muted small mb-0">DIFC Innovation One, Dubai headquarters with global capabilities centers across UK and India.</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-consult-red rounded-pill px-3 py-2 fw-semibold mt-3 d-inline-flex align-items-center gap-2"
                    onClick={handleAdvisorClick}
                  >
                    <span>Talk to an Advisor</span>
                    <span className="contact-angles-icon">
                      <i className="fa-solid fa-angles-right" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            MOBILE DRAWER
            ================================================================== */}
        <div className={`collapse navbar-collapse d-lg-none ${navOpen ? "show" : ""}`} id="mainNavbarMobile">
          <div className="mobile-menu-drawer">
            {/* 1. What We Do */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-accordion-trigger ${mobileExpanded["what-we-do"] ? "is-open" : ""}`}
                onClick={() => toggleMobileCategory("what-we-do")}
              >
                <span>What We Do</span>
                <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
              </button>

              {mobileExpanded["what-we-do"] && (
                <div className="pt-2">
                  {WHAT_WE_DO_DATA.map((pillar) => (
                    <div key={pillar.id} className="mb-2">
                      <button
                        type="button"
                        className={`mobile-sub-accordion-trigger ${mobileExpanded[`pillar-${pillar.id}`] ? "is-open" : ""}`}
                        onClick={() => toggleMobileCategory(`pillar-${pillar.id}`)}
                      >
                        <span>{pillar.name}</span>
                        <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
                      </button>

                      {mobileExpanded[`pillar-${pillar.id}`] && (
                        <div className="mobile-sub-menu-list">
                          {pillar.items.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="mobile-sub-link"
                              onClick={closeAll}
                            >
                              &bull; {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Industries */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-accordion-trigger ${mobileExpanded["industries"] ? "is-open" : ""}`}
                onClick={() => toggleMobileCategory("industries")}
              >
                <span>Industries</span>
                <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
              </button>

              {mobileExpanded["industries"] && (
                <div className="mobile-sub-menu-list">
                  {INDUSTRIES_DATA.map((ind) => (
                    <Link
                      key={ind.title}
                      href={ind.href}
                      className="mobile-sub-link"
                      onClick={closeAll}
                    >
                      &bull; {ind.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Platforms & Ecosystems */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-accordion-trigger ${mobileExpanded["platforms"] ? "is-open" : ""}`}
                onClick={() => toggleMobileCategory("platforms")}
              >
                <span>Platforms &amp; Ecosystems</span>
                <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
              </button>

              {mobileExpanded["platforms"] && (
                <div className="pt-2 px-3">
                  {PLATFORMS_DATA.map((grp) => (
                    <div key={grp.category} className="mobile-platform-block">
                      <div className="mobile-platform-title">{grp.category}</div>
                      <div className="mobile-platform-tags">{grp.platforms.join(", ")}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Client Success */}
            <div className="mobile-nav-group">
              <Link href="/projects" className="mobile-accordion-trigger text-decoration-none" onClick={closeAll}>
                <span>Client Success</span>
                <i className="fa-solid fa-angles-right text-cyan mobile-chevron-icon" />
              </Link>
            </div>

            {/* 5. Company */}
            <div className="mobile-nav-group">
              <button
                type="button"
                className={`mobile-accordion-trigger ${mobileExpanded["company"] ? "is-open" : ""}`}
                onClick={() => toggleMobileCategory("company")}
              >
                <span>Company</span>
                <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
              </button>

              {mobileExpanded["company"] && (
                <div className="mobile-sub-menu-list">
                  <Link href="/about" className="mobile-sub-link" onClick={closeAll}>&bull; About BVM</Link>
                  <Link href="/about#leadership" className="mobile-sub-link" onClick={closeAll}>&bull; Leadership</Link>
                  <Link href="/about#who-we-are" className="mobile-sub-link" onClick={closeAll}>&bull; Global Presence</Link>
                  <Link href="/services" className="mobile-sub-link" onClick={closeAll}>&bull; Alliance &amp; Partners</Link>
                  <Link href="/contact" className="mobile-sub-link" onClick={closeAll}>&bull; Careers</Link>
                  <Link href="/contact" className="mobile-sub-link" onClick={closeAll}>&bull; Contact Us</Link>
                </div>
              )}
            </div>

            {/* Mobile Drawer Bottom Persistent CTA (Direct Modal Open) */}
            <div className="mobile-drawer-cta">
              <button
                type="button"
                className="btn btn-consult-red rounded-pill w-100 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2"
                onClick={handleAdvisorClick}
              >
                <span>Talk to an Advisor</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
                <span className="btn-sheen" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}