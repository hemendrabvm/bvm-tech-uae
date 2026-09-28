"use client";

export default function PortfolioImpact() {
  return (
    <section className="portfolio-impact-section position-relative">
      <div className="container position-relative z-10">
        <div className="spotlight-card ind-anim-card p-4 p-md-5 anim-reveal">
          <div className="row align-items-center mb-4">
            <div className="col-12 text-center text-md-start">
              <span className="badge-sub-title text-cyan mb-2 d-block">
                AGGREGATE PORTFOLIO PERFORMANCE
              </span>
              <h3 className="text-white mb-0">
                Building Scalable, Intelligent &amp; Reliable Digital Solutions
              </h3>
            </div>
          </div>

          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="impact-metric-box p-3 rounded-4">
                <span className="impact-val text-cyan d-block fw-bold display-5 mb-1">
                  <span className="proj-counter" data-target="99.99">
                    0
                  </span>
                  %
                </span>
                <span className="impact-lbl text-bright-muted extra-small">
                  Core System Uptime SLA
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="impact-metric-box p-3 rounded-4">
                <span className="impact-val text-white d-block fw-bold display-5 mb-1">
                  <span className="proj-counter" data-target="500">
                    0
                  </span>
                  +
                </span>
                <span className="impact-lbl text-bright-muted extra-small">
                  Projects Delivered
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="impact-metric-box p-3 rounded-4">
                <span className="impact-val text-red d-block fw-bold display-5 mb-1">
                  <span className="proj-counter" data-target="100">
                    0
                  </span>
                  %
                </span>
                <span className="impact-lbl text-bright-muted extra-small">
                  Milestone-Based Delivery
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="impact-metric-box p-3 rounded-4">
                <span className="impact-val text-cyan d-block fw-bold display-5 mb-1">
                  17+
                </span>
                <span className="impact-lbl text-bright-muted extra-small">
                  Years Technology Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}