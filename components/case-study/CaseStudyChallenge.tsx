"use client";

import type { CaseStudyDetail } from "@/data/projects";

export default function CaseStudyChallenge({
  detail,
}: {
  detail: CaseStudyDetail;
}) {
  return (
    <section className="case-challenge-section position-relative">
      <img
        src="/images/4.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>{detail.challengeBadge}</span>
            </div>
            <h2 className="section-title text-white mb-4 anim-reveal">
              {detail.challengeTitle}
            </h2>
            {detail.challengeIntro.map((p) => (
              <p
                className="text-bright-muted mb-3 anim-reveal"
                key={p.slice(0, 40)}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-4">
              {detail.painPoints.map((pp) => (
                <div className="col-12" key={pp.title}>
                  <div className="pain-point-card spotlight-card ind-anim-card p-4 anim-reveal">
                    <h4 className="text-white mb-2">{pp.title}</h4>
                    <p className="text-bright-muted mb-0">{pp.desc}</p>
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
