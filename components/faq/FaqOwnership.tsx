"use client";

const CARDS = [
  {
    icon: "fa-solid fa-code",
    iconClass: "text-cyan",
    sub: "IP TRANSFER",
    subClass: "text-cyan",
    title: "100% Source Ownership",
    desc: "We provide complete ownership of your source code, database, and deployment files after project completion, APIs, ensuring transparency and zero vendor lock-in.",
    tags: ["Complete Source Code", "0 Vendor Lock-In", "Full Documentation"],
  },
  {
    icon: "fa-solid fa-headset",
    iconClass: "text-red",
    sub: "MAINTENANCE SLA",
    subClass: "text-red",
    title: "Post-Launch Support",
    desc: "BVM support team provides quick issue resolution, server monitoring, performance management, and ongoing maintenance to keep your software running smoothly.",
    tags: ["Fast Response", "24/7 Monitoring", "Performance Support"],
  },
  {
    icon: "fa-solid fa-shield-virus",
    iconClass: "text-cyan",
    sub: "SECURITY & UPDATES",
    subClass: "text-cyan",
    title: "Security & System Maintenance",
    desc: "Keep eyes on your security by regular updates, dependency management, SSL renewal, database backups, and vulnerability checks help protect your software and business data.",
    tags: ["Security Updates", "SSL Renewal", "Database Backups"],
  },
  {
    icon: "fa-solid fa-rocket",
    iconClass: "text-red",
    sub: "FEATURE SCALING",
    subClass: "text-red",
    title: "Scale Your Software as You Grow",
    desc: "Add new features, API integrations, AI automation, ERP modules, HRMS capabilities, or SaaS functionality as your business requirements evolve.",
    tags: ["Flexible Development", "API Integration", "Scalable Solutions"],
  },
];

export default function FaqOwnership() {
  return (
    <section
      className="faq-category-section position-relative"
      id="faq-ownership"
    >
      <img
        src="/images/2.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row align-items-center mb-5 g-4">
          <div className="col-12 col-lg-6">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>CATEGORY 05</span>
            </div>
            <h2 className="section-title text-white mb-0">
              Code Ownership & After Launch Support
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              Complete source code ownership, post-launch support, security
              updates, and feature scaling as your business grows.
            </p>
          </div>
        </div>

        <div className="row g-4" id="faq-support">
          {CARDS.map((card) => (
            <div className="col-12 col-md-6" key={card.title}>
              <div className="ownership-card spotlight-card ind-anim-card p-4 p-md-5 h-100 anim-reveal">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className={`card-icon-badge ${card.iconClass}`}>
                    <i className={card.icon} />
                  </div>
                  <div>
                    <span
                      className={`badge-sub-title ${card.subClass} d-block`}
                    >
                      {card.sub}
                    </span>
                    <h4 className="text-white mb-0">{card.title}</h4>
                  </div>
                </div>
                <p className="text-bright-muted mb-4">{card.desc}</p>
                <div className="sector-specs-list d-flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span className="spec-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
