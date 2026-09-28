"use client";

import type { Project } from "@/data/projects";

/**
 * Used when a project has listing data only (no full case-study detail in source).
 * Does not invent challenge/solution/modules content.
 */
export default function CaseStudyListingFallback({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="case-challenge-section position-relative">
      <div className="container position-relative z-10">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>PROJECT OVERVIEW</span>
            </div>
            <h2 className="section-title text-white mb-4 anim-reveal">
              {project.name}
            </h2>
            <p className="text-bright-muted mb-4 anim-reveal">
              {project.description}
            </p>
            <div className="project-tags-group d-flex flex-wrap gap-2 mb-4 anim-reveal">
              {project.technologies.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-stats-row row g-0 py-3 border-top border-bottom border-secondary border-opacity-20 anim-reveal">
              {project.stats.map((stat, i) => (
                <div
                  className={`col-6${i > 0 ? " ps-3 border-start border-secondary border-opacity-20" : ""}`}
                  key={stat.label}
                >
                  <div className="stat-number text-white fw-bold fs-3">
                    {stat.value}
                  </div>
                  <div className="stat-label text-bright-muted extra-small">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-showcase-media position-relative overflow-hidden rounded-4 anim-reveal">
              <div className="image-reveal-wrapper">
                <div className="image-reveal-mask" />
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="img-fluid image-reveal-img project-showcase-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
