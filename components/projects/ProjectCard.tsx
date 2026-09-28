"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const catClasses = project.categories.join(" ");
  const indexClass =
    project.accent === "red" ? "text-red" : "text-cyan";

  return (
    <div
      className={`project-showcase-row spotlight-card ind-anim-card project-card-item ${catClasses} p-4 p-lg-5 anim-reveal`}
      data-category={project.categories[0]}
    >
      <div
        className={`row align-items-center g-4 g-lg-5${
          project.reverse ? " flex-lg-row-reverse" : ""
        }`}
      >
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

            <div className="project-stats-row row g-0 mb-4 py-3 border-top border-bottom border-secondary border-opacity-20">
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

            <div className="d-flex align-items-center gap-3 flex-wrap">
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

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold magnetic-btn"
                >
                  <span className="btn-text">Visit Website</span>
                  <span className="arrow-icon-wrapper ms-2">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}