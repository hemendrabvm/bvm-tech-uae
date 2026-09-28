"use client";

const MODULES = [
  {
    icon: "fa-solid fa-chart-line",
    iconClass: "text-cyan",
    title: "Business Intelligence & Dashboards",
    desc: "Real-time dashboards that bring business, sales, finance, and operational data together for faster, smarter decisions.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    iconClass: "text-red",
    title: "ERP & Business Automation",
    desc: "Custom ERP and automation solutions that connect departments, simplify workflows, and reduce manual processes.",
  },
  {
    icon: "fa-solid fa-network-wired",
    iconClass: "text-cyan",
    title: "TallyPrime & E-Invoicing",
    desc: "Integrate TallyPrime, VAT, and UAE e-Invoicing workflows to simplify accounting, invoicing, and tax-related processes.",
  },
  {
    icon: "fa-solid fa-user-shield",
    iconClass: "text-red",
    title: "AI-Powered Solutions",
    desc: "Use AI and intelligent automation to improve customer experiences, optimize operations, analyze data, and support business decisions.",
  },
];

export default function SolutionsAcross() {
  return (
    <section className="solutions-across-section position-relative">
      <img
        src="/images/1.png"
        className="section-bg-glow section-glow-left"
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
              <span>CROSS-INDUSTRY ARCHITECTURE</span>
            </div>
            <h2 className="section-title text-white mb-0">
              Smart Software Solutions Built for UAE Businesses.
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              No matter your industry, our modular core components accelerate
              time-to-market while ensuring strict UAE data residency, security,
              and scalability.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-7">
            <div className="row g-4 h-100">
              {MODULES.map((mod) => (
                <div className="col-12 col-md-6" key={mod.title}>
                  <div className="solution-card spotlight-card ind-anim-card p-4 h-100 anim-reveal">
                    <div className={`solution-icon-box ${mod.iconClass} mb-3`}>
                      <i className={`${mod.icon} fs-3`} />
                    </div>
                    <h4 className="card-title text-white mb-2">{mod.title}</h4>
                    <p className="card-desc text-bright-muted small mb-0">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="solutions-visual-showcase spotlight-card ind-anim-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                Built for UAE businesses.
                </span>
                <h3 className="text-white mb-2">
                  One Technology Partner. Multiple Industries.
                </h3>
                <p className="text-bright-muted small mb-0">
                 Custom software solutions for UAE industries, helping businesses automate, connect systems, and scale digitally.

                </p>
              </div>

              <div className="visual-img-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/sec-solutions.jpg"
                    alt="Enterprise Dashboard Interface"
                    className="img-fluid image-reveal-img solution-showcase-img"
                  />
                </div>
                <div className="visual-glass-overlay">
                  <div className="d-flex align-items-center gap-2">
                    <span className="live-pulse-dot" />
                    <span className="text-white fw-bold small">
                      Live Telemetry Engine
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
