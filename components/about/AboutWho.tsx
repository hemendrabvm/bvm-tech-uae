"use client";

export default function AboutWho() {
  return (
    <section id="who-we-are" className="about-who-section position-relative">
      <img
        src="/images/3.png"
        className="who-bg-glow who-bg-glow-left"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        {/* Section Header */}
        <div className="row align-items-end g-4 mb-5">
          <div className="col-12 col-lg-7">
            <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 about-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="about-story-title text-white mb-0">
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  Digital and Software Solutions
                </span>
              </span>
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  for UAE &amp; Global Businesses
                </span>
              </span>
            </h2>
          </div>

          <div className="col-12 col-lg-5">
            <p className="about-story-desc text-bright-muted mb-0 about-anim-text anim-reveal">
             We are a enterprise software development company in Dubai delivering custom HRMS, ERP, SaaS, AI Automation, and cloud solutions for businesses across the UAE and internationally. We help you scale by modernizing operations with secure, high-performance web and mobile platforms.
            </p>
          </div>
        </div>

        {/* Bento Image Frames */}
        <div className="row g-4 align-items-stretch mb-5">
          {/* Frame 1: Headquarter */}
          <div className="col-12 col-lg-7">
            <div className="bento-glass-card spotlight-card ind-anim-card h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden anim-reveal">
              <div
                className="bento-media-frame position-relative rounded-4 overflow-hidden"
                style={{ height: 380 }}
              >
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="./images/dgfrd.png"
                    alt="BVM Dubai Headquarter"
                    className="img-fluid image-reveal-img bento-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(1.02) contrast(1.05)" }}
                  />
                </div>
                <div className="floating-glass-stat-badge badge-top-right">
                  <span className="badge-num text-cyan">DUBAI HQ</span>
                  <span className="badge-txt text-white">
                    DIFC Innovation One, Dubai
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frame 2: Tech Leadership */}
          <div className="col-12 col-lg-5">
            <div className="bento-glass-card spotlight-card ind-anim-card h-100 p-3 p-md-4 rounded-4 position-relative overflow-hidden anim-reveal">
              <div
                className="bento-media-frame position-relative rounded-4 overflow-hidden"
                style={{ height: 380 }}
              >
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="./images/ab22.jpeg"
                    alt="BVM Software Engineering and Architecture Team"
                    className="img-fluid image-reveal-img bento-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(1.02) contrast(1.05)" }}
                  />
                </div>
                <div className="floating-glass-stat-badge badge-bottom-left">
                  <span className="badge-num text-red">17+ YEARS</span>
                  <span className="badge-txt text-white">Software Tech Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars & Metrics Grid */}
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-6">
            <div className="bento-pillars-card spotlight-card ind-anim-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between anim-reveal">
              <div>
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  CORE PRINCIPLES
                </span>
                <h4 className="text-white mb-3">Enterprise Standards Built In</h4>
                <p className="text-bright-muted small mb-4">
                  BVM Tech is a place where you find all solutions for your business, from custom software, Web Development, App Development to AI, automation, ERP, HRMS, SaaS, Tally Prime, and E-Invoice solutions, we provide secure, future-ready technology designed for business growth.

                </p>
              </div>

              <div className="about-pillars-row d-flex flex-wrap gap-2">
                <div className="about-pillar-pill">
                  <span className="pillar-dot" />
                  <span>100% UAE Compliant</span>
                </div>
                <div className="about-pillar-pill">
                  <span className="pillar-dot" />
                  <span>Enterprise Cloud Architecture</span>
                </div>
                <div className="about-pillar-pill">
                  <span className="pillar-dot" />
                  <span>Zero Technical Debt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="bento-metrics-card spotlight-card ind-anim-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between anim-reveal">
              <div>
                <span className="badge-sub-title text-red mb-2 d-block">
                  PROVEN TRACK RECORD
                </span>
                <h4 className="text-white mb-3">Audited Delivery Velocity</h4>
              </div>

              <div className="row g-3 text-center text-md-start">
                <div className="col-4 border-end border-secondary border-opacity-20">
                  <div className="metric-val text-white fw-bold fs-2 mb-1">
                    <span className="counter-value" data-target="17">
                      0
                    </span>
                    <span className="text-cyan">+</span>
                  </div>
                  <div className="metric-lbl text-bright-muted extra-small">
                    Years in Tech Industry
                  </div>
                </div>

                <div className="col-4 border-end border-secondary border-opacity-20 px-3">
                  <div className="metric-val text-white fw-bold fs-2 mb-1">
                    <span className="counter-value" data-target="500">
                      0
                    </span>
                    <span className="text-red">+</span>
                  </div>
                  <div className="metric-lbl text-bright-muted extra-small">
                    Global &amp; GCC Projects
                  </div>
                </div>

                <div className="col-4 ps-3">
                  <div className="metric-val text-white fw-bold fs-2 mb-1">
                    <span className="counter-value" data-target="100">
                      0
                    </span>
                    <span className="text-cyan">%</span>
                  </div>
                  <div className="metric-lbl text-bright-muted extra-small">
                    Dedicated Tech Team
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