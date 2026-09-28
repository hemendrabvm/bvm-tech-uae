"use client";

const PILLARS = [
  {
    icon: "fa-solid fa-server",
    iconClass: "text-cyan",
    title: "UAE Data Residency",
    desc: "Deploy business systems on AWS Middle East or Microsoft Azure UAE infrastructure based on your project requirements.",
  },
  {
    icon: "fa-solid fa-lock",
    iconClass: "text-red",
    title: "Advanced Data Encryption",
    desc: "Protect sensitive business and customer data with AES-256 encryption and secure data transmission practices.",
  },
  {
    icon: "fa-solid fa-clipboard-check",
    iconClass: "text-cyan",
    title: "Compliance-Ready Solutions",
    desc: "Build ERP, TallyPrime, e-invoicing, HRMS, AI and automation platforms, access controls and compliance requirements considered from the start.",
  },
  {
    icon: "fa-solid fa-code-branch",
    iconClass: "text-red",
    title: "Complete IP Ownership",
    desc: "Your custom software, source code and intellectual property remain yours, with full source code ownership transferred upon project delivery.",
  },
];

export default function SecurityScalability() {
  return (
    <section className="security-scalability-section position-relative">
      <img
        src="/images/2.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="spotlight-card ind-anim-card p-4 p-lg-5 anim-reveal">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <div className="security-media-box position-relative overflow-hidden rounded-4">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/sec-security.jpg"
                    alt="Cybersecurity Server Room"
                    className="img-fluid image-reveal-img security-showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-cyan">
                    <i className="fa-solid fa-shield-halved me-1" /> ISO 27001
                  </span>
                  <span className="badge-label text-white">
                    SOC 2 Type II Certified
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="security-content-block">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                 Secure Software Built

                </span>
                <h2 className="text-white mb-3">
ENTERPRISE SECURITY & UAE DATA PROTECTION
                </h2>
                <p className="text-bright-muted mb-4">
                 We develop secure software, ERP, HRMS, SaaS, AI and automation solutions with security and data protection built into each & every stage of development. Our solutions are designed for UAE data residency, cloud security and industry-specific compliance requirements.
                </p>

                <div className="row g-3">
                  {PILLARS.map((p) => (
                    <div className="col-12 col-md-6" key={p.title}>
                      <div className="security-pillar-box p-3 rounded-3 d-flex align-items-start gap-3">
                        <div className={`pillar-icon ${p.iconClass} fs-4 mt-1`}>
                          <i className={p.icon} />
                        </div>
                        <div>
                          <h5 className="text-white mb-1 small fw-bold">
                            {p.title}
                          </h5>
                          <p className="text-bright-muted extra-small mb-0">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
