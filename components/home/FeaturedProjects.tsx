"use client";

import Link from "next/link";

const TOP_CLIENT_STORIES = [
  // 1. Kings Furniture
  {
    className: "p-card-1",
    img: "/images/m1.png",
    alt: "Kings Furniture In-House Inventory Management System",
    tags: ["PHP", "MySQL", "JavaScript", "Role-Based Access"],
    title: "Kings Furniture — In-House Inventory Management System",
    desc: "A custom inventory management platform developed to centralize store operations, manage invoices and inventory, and provide role-based access through a structured PHP and MySQL architecture.",
    stats: [
      { target: "1", label: "Centralized Platform", suffix: "" },
      { target: "100", label: "Structured Inventory Data", suffix: "%" },
    ],
    slug: "kings-furniture",
  },
  // 2. Royal Care FS
  {
    className: "p-card-2",
    img: "/images/yuye.png",
    alt: "Royal Care FS Furniture Protection Platform",
    tags: ["Node.js", "Next.js", "MySQL", "Claims Engine"],
    title: "Royal Care FS — Furniture Protection & Claims Platform",
    desc: "A responsive digital platform developed to present furniture protection plans, simplify claims and service information, and deliver a seamless customer experience across devices.",
    stats: [
      { target: "3", label: "Protection & Claims Areas", suffix: " Core" },
      { target: "100", label: "Responsive Experience", suffix: "%" },
    ],
    slug: "royal-care-fs",
  },
  // 3. HRMS ERP
  {
    className: "p-card-3",
    img: "/images/m3.png",
    alt: "HRMS ERP Enterprise Operations Platform",
    tags: ["Node.js", "MySQL", "AWS Cloud", "WPS Payroll"],
    title: "HRMS ERP — Enterprise Workforce & Payroll Platform",
    desc: "A smart centralized business platform combining employee management, payroll automation, attendance tracking, employee self-service, reporting, and workflow approvals.",
    stats: [
      { target: "70", label: "Reduction in Manual HR Work", suffix: "%" },
      { target: "4", label: "Faster Payroll Processing", suffix: "x" },
    ],
    slug: "hrms-erp-platform",
  },
  // 4. Realty Guru
  {
    className: "p-card-4",
    img: "/images/m7.png",
    alt: "Realty Guru Property Management Platform",
    tags: ["PHP", "CodeIgniter", "MySQL", "Trust Accounting"],
    title: "Realty Guru — Smart Property Management Platform",
    desc: "All-in-one real estate management platform designed to streamline property operations, maintenance, inspections, contractor management, accounting, reporting, and communication.",
    stats: [
      { target: "100", label: "Centralized Operations", suffix: "%" },
      { target: "5", label: "Core Modules", suffix: "+" },
    ],
    slug: "realty-guru",
  },
  // 5. Just Pack
  {
    className: "p-card-5",
    img: "/images/m4.png",
    alt: "Just Pack Smart Property Rental Platform",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    title: "Just Pack — Smart Property Rental Platform",
    desc: "A modern rental platform developed for the Egypt market that helps users discover, list, and manage rental properties with a smooth digital experience.",
    stats: [
      { target: "50", label: "Faster Rental Inquiries", suffix: "%" },
      { target: "3", label: "Higher Mobile Retention", suffix: "x" },
    ],
    slug: "justpack",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-section">
      <img src="/images/torch.png" alt="" className="torch-bg" />

      <div className="container position-relative z-3">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="projects-badge d-inline-flex align-items-center gap-2 mb-4 projects-anim-badge">
              <img src="/images/h2.png" alt="Icon" />
              <span>CLIENT STORIES</span>
            </div>

            <h2 className="projects-title text-white">
              <span className="projects-line-mask">
                <span className="projects-line-inner anim-text-reveal">
                  Outcomes Speak Louder
                </span>
              </span>
              <span className="projects-line-mask">
                <span className="projects-line-inner anim-text-reveal">
                  Than Capabilities.
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* 5 Top Client Stories Sticky Stack */}
        <div className="projects-sticky-stack">
          {TOP_CLIENT_STORIES.map((project) => (
            <div
              key={project.title}
              className={`project-stack-card ${project.className}`}
              data-cursor="VIEW"
            >
              <div className="row align-items-center g-5">
                {/* Media Mockup */}
                <div className="col-12 col-lg-6">
                  <div className="project-media-wrapper">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="img-fluid image-reveal-img project-mockup-img"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="col-12 col-lg-6">
                  <div className="project-content-block">
                    <div className="project-tags-group d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="project-card-title text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="project-card-desc mb-4">{project.desc}</p>

                    {/* Stats Strip */}
                    <div className="project-stats-row row g-0 mb-4 py-3 border-top border-bottom border-secondary border-opacity-20">
                      {project.stats.map((stat, i) => (
                        <div
                          key={stat.label}
                          className={
                            i === 0
                              ? "col-6"
                              : "col-6 ps-3 border-start border-secondary border-opacity-20"
                          }
                        >
                          <div className="stat-number text-white">
                            <span
                              className="proj-counter"
                              data-target={stat.target}
                            >
                              0
                            </span>
                            {stat.suffix}
                          </div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Original Button with Original Diagonal Arrow SVG */}
                    <Link
                      href={`/case-study/${project.slug}`}
                      className="btn btn-case-study rounded-pill fw-semibold magnetic-btn"
                    >
                      <span className="btn-text">View Case Study</span>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}