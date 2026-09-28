"use client";

import type { CaseStudyDetail } from "@/data/projects";

export default function CaseStudyImpact({
  detail,
}: {
  detail: CaseStudyDetail;
}) {
  return (
    <section className="case-impact-section position-relative">
      <img
        src="/images/4.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="case-impact-card spotlight-card ind-anim-card p-4 p-md-5 anim-reveal">
          <div className="row align-items-center mb-4">
            <div className="col-12 text-center text-md-start">
              <span className="badge-sub-title text-cyan mb-2 d-block">
                {detail.impactBadge}
              </span>
              <h3 className="text-white mb-0">{detail.impactTitle}</h3>
            </div>
          </div>

          <div className="row g-4 text-center">
            {detail.impactMetrics.map((m) => (
              <div className="col-6 col-md-3" key={m.label}>
                <div className="impact-metric-box p-3 p-md-4 rounded-4">
                  <span
                    className={`impact-val ${m.color} d-block fw-bold display-5 mb-1`}
                  >
                    <span className="proj-counter" data-target={m.target}>
                      0
                    </span>
                    {m.suffix}
                  </span>
                  <span className="impact-lbl text-bright-muted extra-small">
                    {m.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
