"use client";

import type { CaseStudyDetail } from "@/data/projects";

export default function CaseStudySolution({
  detail,
  liveUrl,
}: {
  detail: CaseStudyDetail;
  liveUrl?: string;
}) {
  return (
    <section className="case-solution-section position-relative">
      <div className="container position-relative z-10">
        <div className="row align-items-center mb-5 g-4">
          <div className="col-12 col-lg-6">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>{detail.solutionBadge}</span>
            </div>
            <h2 className="section-title text-white mb-0">
              {detail.solutionTitle}
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              {detail.solutionSubtitle}
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="solution-visual-media-box spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  {detail.solutionVisual.badge}
                </span>
                <h3 className="text-white mb-2">
                  {detail.solutionVisual.title}
                </h3>
                <p className="text-bright-muted small mb-0">
                  {detail.solutionVisual.desc}
                </p>
              </div>

              <div className="visual-img-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src={detail.solutionVisual.img}
                    alt={detail.solutionVisual.imgAlt}
                    className="img-fluid image-reveal-img solution-showcase-img"
                  />
                </div>
                <div className="visual-glass-overlay">
                  <div className="d-flex align-items-center gap-2">
                    <span className="live-pulse-dot" />
                    <span className="text-white fw-bold small">
                      {detail.solutionVisual.overlay}
                    </span>
                  </div>
                </div>
              </div>

              {liveUrl && (
                <div className="mt-4 pt-3 border-top border-secondary border-opacity-20">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-consult-red w-100 rounded-pill py-2 fw-semibold magnetic-btn"
                  >
                    <span className="btn-text">Visit Live Platform</span>
                    <span className="arrow-icon-wrapper ms-2">
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                    <span className="btn-sheen" />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-4 h-100">
              {detail.modules.map((mod) => (
                <div className="col-12 col-md-6" key={mod.title}>
                  <div className="solution-module-card spotlight-card ind-anim-card p-4 h-100 anim-reveal">
                    <div className={`module-icon ${mod.iconClass} mb-3`}>
                      <i className={`${mod.icon} fs-3`} />
                    </div>
                    <h4 className="card-title text-white mb-2 fs-5">
                      {mod.title}
                    </h4>
                    <p className="card-desc text-bright-muted small mb-0">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}