"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";

export default function NextCaseStudy({ project }: { project: Project }) {
  const indexClass = project.accent === "red" ? "text-red" : "text-cyan";

  return (
    <section className="next-case-navigator-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12">
            <span className="badge-sub-title text-cyan mb-2 d-block anim-reveal">
              CONTINUE EXPLORING PORTFOLIO
            </span>
            <h3 className="text-white anim-reveal">Next Featured Case Study</h3>
          </div>
        </div>

        <div
          className={`project-showcase-row spotlight-card ind-anim-card p-4 p-lg-5 anim-reveal`}
        >
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6">
              <div className="project-showcase-media position-relative overflow-hidden rounded-4">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="img-fluid image-reveal-img project-showcase-img"
                  />
                </div>
                <div className="floating-glass-stat-badge">
                  <span className={`badge-num ${indexClass}`}>
                    {project.floatingBadge.num}
                  </span>
                  <span className="badge-txt text-white">
                    {project.floatingBadge.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="project-showcase-content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="project-tags-group d-flex flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`project-index-code ${indexClass}`}>
                    {project.indexCode}
                  </span>
                </div>

                <h2 className="project-showcase-title text-white mb-3">
                  {project.name}
                </h2>
                <p className="project-showcase-desc text-bright-muted mb-4">
                  {project.description}
                </p>

                <Link
                  href={`/case-study/${project.slug}`}
                  className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn"
                >
                  <span className="btn-text">View Full Case Study</span>
                  <span className="arrow-icon-wrapper ms-2">
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                  <span className="btn-sheen" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
