"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ==========================================================================
   WHAT WE DO DATA (ALL 7 PRACTICES & CHILD ITEMS CONNECTED TO THEIR PAGES)
   ========================================================================== */

export const WHAT_WE_DO_DATA = [
  /* 1. Advisory & Transformation -> /advisory-transformation */
  {
    id: "advisory",
    name: "Advisory & Transformation",
    icon: "fa-solid fa-compass-drafting",
    eyebrow: "ADVISORY & TRANSFORMATION",
    headline: "Shape the right strategy for transformation.",
    description:
      "Align business priorities, technology architecture and transformation decisions around measurable outcomes.",
    bottomCta: {
      label: "Explore Advisory & Transformation",
      href: "/advisory-transformation",
    },
    items: [
      {
        title: "Digital & Technology Strategy",
        desc: "Define technology vision, priorities and roadmaps aligned to business goals.",
        icon: "fa-solid fa-laptop-code",
        href: "/advisory-transformation",
      },
      {
        title: "Enterprise Architecture",
        desc: "Design scalable, secure and future-ready technology environments across applications, data, integration and infrastructure.",
        icon: "fa-solid fa-sitemap",
        href: "/advisory-transformation",
      },
      {
        title: "Business Process Transformation",
        desc: "Simplify and redesign processes to improve efficiency and business performance.",
        icon: "fa-solid fa-gear",
        href: "/advisory-transformation",
      },
      {
        title: "Platform Advisory & Selection",
        desc: "Evaluate enterprise platforms against business, technical, operational and commercial requirements.",
        icon: "fa-solid fa-bullseye",
        href: "/advisory-transformation",
      },
      {
        title: "AI & Data Strategy",
        desc: "Define practical AI and data strategies that create measurable business value.",
        icon: "fa-solid fa-chart-simple",
        href: "/advisory-transformation",
      },
      {
        title: "Transformation & Program Advisory",
        desc: "Plan, govern and execute complex technology transformation initiatives.",
        icon: "fa-solid fa-users-gear",
        href: "/advisory-transformation",
      },
    ],
  },

  /* 2. Enterprise Applications -> /enterprise-applications */
  {
    id: "enterprise-apps",
    name: "Enterprise Applications",
    icon: "fa-solid fa-layer-group",
    eyebrow: "ENTERPRISE APPLICATIONS",
    headline: "Modernize the systems that run the business.",
    description:
      "Implement, integrate and optimize enterprise platforms around your processes, people and operating model.",
    bottomCta: {
      label: "Explore Enterprise Applications",
      href: "/enterprise-applications",
    },
    items: [
      {
        title: "ERP & Core Business Systems",
        desc: "Modernize finance, operations and core business processes through connected ERP platforms.",
        icon: "fa-solid fa-boxes-stacked",
        href: "/enterprise-applications",
      },
      {
        title: "CRM & Customer Experience",
        desc: "Connect sales, service and customer engagement across the enterprise.",
        icon: "fa-solid fa-handshake",
        href: "/enterprise-applications",
      },
      {
        title: "ITSM & Enterprise Workflow",
        desc: "Improve service delivery through structured workflows, automation and visibility.",
        icon: "fa-solid fa-diagram-project",
        href: "/enterprise-applications",
      },
      {
        title: "HCM & Workforce Technology",
        desc: "Digitize workforce processes across employee administration, service and lifecycle management.",
        icon: "fa-solid fa-id-card",
        href: "/enterprise-applications",
      },
      {
        title: "EAM, FSM & Asset Operations",
        desc: "Connect assets, maintenance, field teams, service requests and operational workflows.",
        icon: "fa-solid fa-wrench",
        href: "/enterprise-applications",
      },
      {
        title: "Digital Experience Platforms",
        desc: "Build connected digital experiences across portals, content and customer touchpoints.",
        icon: "fa-solid fa-desktop",
        href: "/enterprise-applications",
      },
    ],
  },

  /* 3. AI, Data & Intelligent Automation -> /ai-automation-development */
  {
    id: "ai-data",
    name: "AI, Data & Intelligent Automation",
    icon: "fa-solid fa-brain",
    eyebrow: "AI, DATA & INTELLIGENT AUTOMATION",
    headline: "Turn data and AI into business value.",
    description:
      "Build trusted data foundations, embed intelligence into operations and automate work where it creates measurable impact.",
    bottomCta: {
      label: "Explore AI, Data & Automation",
      href: "/ai-automation-development",
    },
    items: [
      {
        title: "Enterprise AI",
        desc: "Apply AI to business processes, decisions and enterprise knowledge.",
        icon: "fa-solid fa-microchip",
        href: "/ai-automation-development",
      },
      {
        title: "Generative & Agentic AI",
        desc: "Build intelligent assistants, agents and AI-enabled enterprise experiences.",
        icon: "fa-solid fa-robot",
        href: "/ai-automation-development",
      },
      {
        title: "Data Platforms & Engineering",
        desc: "Create scalable data foundations that connect and prepare enterprise information.",
        icon: "fa-solid fa-database",
        href: "/ai-automation-development",
      },
      {
        title: "Business Intelligence & Analytics",
        desc: "Turn data into actionable insight through reporting, analytics and visualization.",
        icon: "fa-solid fa-chart-line",
        href: "/ai-automation-development",
      },
      {
        title: "Intelligent Automation & RPA",
        desc: "Automate repetitive processes and orchestrate workflows across systems.",
        icon: "fa-solid fa-bolt",
        href: "/ai-automation-development",
      },
      {
        title: "Data Governance & Document Intelligence",
        desc: "Improve data quality, governance and intelligent processing of enterprise content.",
        icon: "fa-solid fa-shield-halved",
        href: "/ai-automation-development",
      },
    ],
  },

  /* 4. Digital & Product Engineering -> /digital-product-engineering */
  {
    id: "product-eng",
    name: "Digital & Product Engineering",
    icon: "fa-solid fa-code",
    eyebrow: "DIGITAL & PRODUCT ENGINEERING",
    headline: "Engineer what creates differentiation.",
    description:
      "Build, modernize and scale digital products and applications where standard platforms alone are not enough.",
    bottomCta: {
      label: "Explore Digital & Product Engineering",
      href: "/digital-product-engineering",
    },
    items: [
      {
        title: "Product Strategy & Engineering",
        desc: "Turn business ideas into scalable digital products and technology platforms.",
        icon: "fa-solid fa-lightbulb",
        href: "/digital-product-engineering",
      },
      {
        title: "Enterprise Application Development",
        desc: "Build secure, scalable applications around enterprise requirements.",
        icon: "fa-solid fa-laptop-code",
        href: "/digital-product-engineering",
      },
      {
        title: "Web, Mobile & Experience Engineering",
        desc: "Create connected digital experiences across web, mobile and user journeys.",
        icon: "fa-solid fa-mobile-screen",
        href: "/digital-product-engineering",
      },
      {
        title: "SaaS Engineering",
        desc: "Design and develop scalable SaaS products and multi-tenant platforms.",
        icon: "fa-solid fa-cloud",
        href: "/digital-product-engineering",
      },
      {
        title: "Application Modernization",
        desc: "Modernize legacy applications for improved performance, agility and scalability.",
        icon: "fa-solid fa-recycle",
        href: "/digital-product-engineering",
      },
      {
        title: "API, Microservices & Quality Engineering",
        desc: "Build modular architectures and strengthen software quality across the delivery lifecycle.",
        icon: "fa-solid fa-network-wired",
        href: "/digital-product-engineering",
      },
    ],
  },

  /* 5. Cloud, Cybersecurity & Integration -> /cloud-cybersecurity-integration */
  {
    id: "cloud-cyber",
    name: "Cloud, Cybersecurity & Integration",
    icon: "fa-solid fa-shield-halved",
    eyebrow: "CLOUD, CYBERSECURITY & INTEGRATION",
    headline: "Modernize, secure and connect the enterprise.",
    description:
      "Build resilient technology foundations, strengthen security and connect applications, platforms and data across the enterprise.",
    bottomCta: {
      label: "Explore Cloud, Security & Integration",
      href: "/cloud-cybersecurity-integration",
    },
    items: [
      {
        title: "Cloud Strategy & Modernization",
        desc: "Define and execute the right cloud migration and modernization path.",
        icon: "fa-solid fa-cloud-arrow-up",
        href: "/cloud-cybersecurity-integration",
      },
      {
        title: "Cloud-Native Engineering",
        desc: "Build scalable cloud-native applications, services and technology environments.",
        icon: "fa-solid fa-server",
        href: "/cloud-cybersecurity-integration",
      },
      {
        title: "Cybersecurity & Resilience",
        desc: "Strengthen application, cloud and infrastructure security while improving continuity.",
        icon: "fa-solid fa-shield-virus",
        href: "/cloud-cybersecurity-integration",
      },
      {
        title: "Identity & Access Management",
        desc: "Secure access to systems, applications and enterprise resources.",
        icon: "fa-solid fa-id-badge",
        href: "/cloud-cybersecurity-integration",
      },
      {
        title: "Enterprise Integration",
        desc: "Connect applications, platforms and processes across the technology landscape.",
        icon: "fa-solid fa-arrows-split-up-and-left",
        href: "/cloud-cybersecurity-integration",
      },
      {
        title: "API, Data & Middleware Integration",
        desc: "Enable interoperability through APIs, data integration, middleware and iPaaS.",
        icon: "fa-solid fa-plug",
        href: "/cloud-cybersecurity-integration",
      },
    ],
  },

  /* 6. Managed Services -> /managed-services */
  {
    id: "managed-services",
    name: "Managed Services",
    icon: "fa-solid fa-gear",
    eyebrow: "MANAGED SERVICES",
    headline: "Keep critical technology performing.",
    description:
      "Operate, support and continuously improve enterprise platforms, applications and infrastructure.",
    bottomCta: {
      label: "Explore Managed Services",
      href: "/managed-services",
    },
    items: [
      {
        title: "Application Managed Services",
        desc: "Maintain and optimize business-critical applications across their lifecycle.",
        icon: "fa-solid fa-laptop-file",
        href: "/managed-services",
      },
      {
        title: "Enterprise Platform Support",
        desc: "Support enterprise platforms, configurations, integrations and ongoing enhancement.",
        icon: "fa-solid fa-cubes-stacked",
        href: "/managed-services",
      },
      {
        title: "Cloud & Infrastructure Operations",
        desc: "Operate cloud and infrastructure environments for availability and performance.",
        icon: "fa-solid fa-cloud",
        href: "/managed-services",
      },
      {
        title: "Platform Administration",
        desc: "Manage day-to-day administration, configurations and platform governance.",
        icon: "fa-solid fa-user-gear",
        href: "/managed-services",
      },
      {
        title: "L1 / L2 / L3 Support",
        desc: "Provide structured technical support across functional and technical requirements.",
        icon: "fa-solid fa-headset",
        href: "/managed-services",
      },
      {
        title: "Continuous Improvement & Optimization",
        desc: "Improve platform performance, adoption and business value over time.",
        icon: "fa-solid fa-chart-line",
        href: "/managed-services",
      },
    ],
  },

  /* 7. Technology Talent & Global Delivery -> /technology-talent-delivery */
  {
    id: "talent-delivery",
    name: "Technology Talent & Global Delivery",
    icon: "fa-solid fa-people-group",
    eyebrow: "TECHNOLOGY TALENT & GLOBAL DELIVERY",
    headline: "The right technology capability. When and where you need it.",
    description:
      "Extend technology capacity through specialist resources, dedicated teams and flexible global delivery models.",
    bottomCta: {
      label: "Explore Technology Talent & Global Delivery",
      href: "/technology-talent-delivery",
    },
    items: [
      {
        title: "Remote Technology Specialists",
        desc: "Access specialized technology expertise through flexible remote delivery.",
        icon: "fa-solid fa-user-tie",
        href: "/technology-talent-delivery",
      },
      {
        title: "On-site & Hybrid Specialists",
        desc: "Deploy technology specialists closer to the business where required.",
        icon: "fa-solid fa-building-user",
        href: "/technology-talent-delivery",
      },
      {
        title: "Dedicated Technology Teams",
        desc: "Build cross-functional teams aligned to your technology roadmap and priorities.",
        icon: "fa-solid fa-users-gear",
        href: "/technology-talent-delivery",
      },
      {
        title: "Project Delivery Squads",
        desc: "Assemble focused teams to deliver defined technology outcomes.",
        icon: "fa-solid fa-cubes",
        href: "/technology-talent-delivery",
      },
      {
        title: "Global Delivery Centres",
        desc: "Scale delivery through offshore, nearshore and global capability models.",
        icon: "fa-solid fa-earth-americas",
        href: "/technology-talent-delivery",
      },
      {
        title: "Build-Operate-Transfer",
        desc: "Establish technology capability with a structured path toward client ownership.",
        icon: "fa-solid fa-handshake",
        href: "/technology-talent-delivery",
      },
    ],
  },
];

export const INDUSTRIES_DATA = [
  { title: "Government & Public Services", icon: "fa-building-columns", href: "/industries" },
  { title: "Banking, Financial Services & Insurance", icon: "fa-coins", href: "/industries#fintech" },
  { title: "Real Estate, Facilities & Smart Infrastructure", icon: "fa-city", href: "/industries#real-estate" },
  { title: "Energy & Utilities", icon: "fa-bolt-lightning", href: "/industries" },
  { title: "Construction & Engineering", icon: "fa-helmet-safety", href: "/industries#construction" },
  { title: "Manufacturing & Industrial", icon: "fa-industry", href: "/industries#manufacturing" },
  { title: "Logistics & Mobility", icon: "fa-truck-fast", href: "/industries#logistics" },
  { title: "Retail & Consumer", icon: "fa-cart-shopping", href: "/industries#retail" },
  { title: "Travel, Hospitality & Leisure", icon: "fa-plane-departure", href: "/industries#hospitality" },
  { title: "Healthcare & Life Sciences", icon: "fa-hospital", href: "/industries#healthcare" },
  { title: "Technology & SaaS", icon: "fa-microchip", href: "/industries" },
];

/* Display Data: Not linked */
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

          {/* Right Mobile Actions: Directly redirects to /contact */}
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <Link
              href="/contact"
              className="btn btn-login-red rounded-pill fw-bold d-inline-flex align-items-center gap-2 mobile-direct-contact btn-advisor-mobile-header"
              onClick={closeAll}
            >
              <span>Talk to an Advisor</span>
              <span className="contact-angles-icon">
                <i className="fa-solid fa-angles-right" />
              </span>
            </Link>

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

            {/* Desktop Persistent CTA Button: Redirects to /contact */}
            <div className="d-flex align-items-center">
              <Link
                href="/contact"
                className="btn btn-login-red rounded-pill fw-semibold magnetic-btn d-inline-flex align-items-center gap-2 btn-advisor-desktop"
                onClick={closeAll}
              >
                <span className="btn-text">Talk to an Advisor</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
                <span className="btn-sheen" />
              </Link>
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
            {/* Left Rail: 7 Core Practices */}
            <div className="col-4 mega-rail-col">
              <div className="mega-rail-header">
                <span className="mega-category-badge d-block mb-1">&mdash; WHAT WE DO</span>
                <p className="mega-rail-subtext mb-0">
                  From strategy to scale, BVM helps organizations modernize technology, transform operations and build the capabilities needed for what comes next.
                </p>
              </div>

              <div className="mega-rail-list">
                {WHAT_WE_DO_DATA.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`mega-rail-item ${activePillarId === p.id ? "active" : ""}`}
                    onMouseEnter={() => setActivePillarId(p.id)}
                    onClick={() => setActivePillarId(p.id)}
                  >
                    <div className="d-flex align-items-center gap-2 text-start">
                      <span className="mega-rail-icon">
                        <i className={p.icon} />
                      </span>
                      <span className="mega-rail-name">{p.name}</span>
                    </div>
                    <i className="fa-solid fa-chevron-right rail-arrow" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="col-8 mega-content-area position-relative">
              <div className="mega-skyline-backdrop" aria-hidden="true" />

              <div className="position-relative z-2">
                <div className="mega-content-header mb-4">
                  <span className="mega-category-badge">{activePillar.eyebrow}</span>
                  <h3 className="mega-content-headline text-white mt-1 mb-2">
                    {activePillar.headline}
                  </h3>
                  <p className="mega-content-desc mb-0">
                    {activePillar.description}
                  </p>
                </div>

                {/* 2-Column Capability Grid: ALL CHILD ITEMS LINK DIRECTLY TO THAT PILLAR'S PAGE */}
                <div className="mega-grid-2col mb-4">
                  {activePillar.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="mega-sub-card"
                      onClick={closeAll}
                    >
                      <div className="mega-sub-icon-box">
                        <i className={item.icon} />
                      </div>
                      <div className="mega-sub-info flex-grow-1">
                        <div className="mega-sub-title">{item.title}</div>
                        <div className="mega-sub-desc">{item.desc}</div>
                      </div>
                      <i className="fa-solid fa-chevron-right mega-sub-arrow" />
                    </Link>
                  ))}
                </div>

                {/* Bottom CTA Link directly to that pillar's page */}
                <div className="mega-bottom-cta-wrap pt-2">
                  <Link
                    href={activePillar.bottomCta.href}
                    className="mega-bottom-cta d-inline-flex align-items-center gap-2"
                    onClick={closeAll}
                  >
                    <span>{activePillar.bottomCta.label}</span>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
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
              <Link
                href="/contact"
                className="btn btn-link text-cyan fw-bold small text-decoration-none p-0"
                onClick={closeAll}
              >
                Consult an Industry Specialist &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================================
            DESKTOP MEGA MENU 3: PLATFORMS & ECOSYSTEMS
            (ONLY ONE LINK IN ENTIRE MENU: TALK TO AN ADVISOR -> /contact)
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

              {/* The ONLY link in this entire menu */}
              <Link
                href="/contact"
                className="btn btn-sm btn-consult-red rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                onClick={closeAll}
              >
                <span>Talk to an Advisor</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
              </Link>
            </div>

            {/* Display-Only Category Boxes: ZERO links */}
            <div className="row g-4">
              {PLATFORMS_DATA.map((group) => (
                <div className="col-12 col-md-6 col-lg-4" key={group.category}>
                  <div className="platform-category-box spotlight-card h-100">
                    <div className="text-white fw-bold small mb-2">
                      {group.category}
                    </div>
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

            {/* Static Callout Card: ZERO extra links */}
            <div className="mega-callout-card mt-4">
              <p className="text-bright-muted small mb-0 text-center">
                We design solutions around business requirements rather than forcing challenges into a single platform.
              </p>
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
                  <Link href="/about" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Leadership</div></div>
                  </Link>
                  <Link href="/about#who-we-are" className="mega-sub-card" onClick={closeAll}>
                    <span className="mega-sub-dot" />
                    <div><div className="mega-sub-title">Global Presence</div></div>
                  </Link>
                  {/* Alliance & Partners commented out */}
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

              {/* UAE and United Kingdom in GLOBAL ENGAGEMENT */}
              <div className="col-12 col-md-5">
                <div className="mega-feature-box d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge-sub-title text-cyan mb-1 d-block">GLOBAL ENGAGEMENT</span>
                    <h5 className="text-white fw-bold mb-2">UAE &amp; United Kingdom</h5>
                    <p className="text-bright-muted small mb-0">
                      Regional headquarters in UAE (DIFC Innovation One, Dubai) and international presence in the United Kingdom, backed by global engineering and delivery capabilities.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-consult-red rounded-pill px-3 py-2 fw-semibold mt-3 d-inline-flex align-items-center gap-2"
                    onClick={closeAll}
                  >
                    <span>Talk to an Advisor</span>
                    <span className="contact-angles-icon">
                      <i className="fa-solid fa-angles-right" />
                    </span>
                  </Link>
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
                        <span className="d-flex align-items-center gap-2">
                          <i className={`${pillar.icon} text-cyan`} />
                          <span>{pillar.name}</span>
                        </span>
                        <i className="fa-solid fa-chevron-down mobile-chevron-icon" />
                      </button>

                      {mobileExpanded[`pillar-${pillar.id}`] && (
                        <div className="mobile-sub-menu-list">
                          {/* Main pillar link */}
                          <Link
                            href={pillar.bottomCta.href}
                            className="mobile-sub-link fw-bold text-cyan mb-2 pb-1 border-bottom border-secondary border-opacity-25"
                            onClick={closeAll}
                          >
                            &rarr; {pillar.bottomCta.label}
                          </Link>

                          {/* Child items linking to the same pillar page */}
                          {pillar.items.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="mobile-sub-link"
                              onClick={closeAll}
                            >
                              <div className="text-white fw-semibold mb-1">&bull; {sub.title}</div>
                              <div className="text-bright-muted extra-small">{sub.desc}</div>
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
                  <Link
                    href="/industries"
                    className="mobile-sub-link fw-bold text-cyan mb-2 pb-1 border-bottom border-secondary border-opacity-25"
                    onClick={closeAll}
                  >
                    &rarr; View All Industries
                  </Link>
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

            {/* 3. Platforms & Ecosystems: DISPLAY ONLY (NO LINKS) */}
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
                  <Link href="/about" className="mobile-sub-link" onClick={closeAll}>&bull; Leadership</Link>
                  <Link href="/about#who-we-are" className="mobile-sub-link" onClick={closeAll}>&bull; Global Presence</Link>
                  {/* Alliance & Partners commented out */}
                  <Link href="/contact" className="mobile-sub-link" onClick={closeAll}>&bull; Careers</Link>
                  <Link href="/contact" className="mobile-sub-link" onClick={closeAll}>&bull; Contact Us</Link>
                </div>
              )}
            </div>

            {/* Mobile Drawer Bottom Button: Directly redirects to /contact */}
            <div className="mobile-drawer-cta">
              <Link
                href="/contact"
                className="btn btn-consult-red rounded-pill w-100 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2"
                onClick={closeAll}
              >
                <span>Talk to an Advisor</span>
                <span className="contact-angles-icon">
                  <i className="fa-solid fa-angles-right" />
                </span>
                <span className="btn-sheen" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}