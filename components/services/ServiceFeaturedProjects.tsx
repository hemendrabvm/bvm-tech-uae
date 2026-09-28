"use client";

import Link from "next/link";

export type ProjectStat =
  | { type: "counter"; target: string; suffix: string; label: string }
  | { type: "static"; value: string; label: string };

export type FeaturedProject = {
  className: string;
  img: string;
  alt: string;
  tags: string[];
  title: string;
  desc: string;
  stats: ProjectStat[];
};

type Props = {
  badge: string;
  titleLines: string[];
  projects: FeaturedProject[];
};

export default function ServiceFeaturedProjects({
  badge,
  titleLines,
  projects,
}: Props) {
  return (
    <section className="featured-projects-section mb-5">
      <img src="/images/torch.png" alt="" className="torch-bg" />

      <div className="container position-relative z-3">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="projects-badge d-inline-flex align-items-center gap-2 mb-4 projects-anim-badge">
              <img src="/images/h2.png" alt="Icon" />
              <span>{badge}</span>
            </div>

            <h2 className="projects-title text-white">
              {titleLines.map((line) => (
                <span className="projects-line-mask" key={line}>
                  <span className="projects-line-inner anim-text-reveal">
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        <div className="projects-sticky-stack">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-stack-card ${project.className}`}
              data-cursor="VIEW"
            >
              <div className="row align-items-center g-5">
                <div className="col-12 col-lg-6">
                  <div className="project-media-wrapper">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="img-fluid image-reveal-img project-mockup-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="project-content-block">
                    <div className="project-tags-group d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="project-card-title text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="project-card-desc mb-4">{project.desc}</p>
                    <div className="project-stats-row row g-0 mb-4 py-3 border-top border-bottom border-secondary border-opacity-20">
                      {project.stats.map((stat, i) => (
                        <div
                          key={stat.label}
                          className={
                            i === 0
                              ? "col-6"
                              : "col-6 ps-3 border-start border-secondary border-opacity-20"
                          }
                        >
                          <div className="stat-number text-white">
                            {stat.type === "counter" ? (
                              <>
                                <span
                                  className="proj-counter"
                                  data-target={stat.target}
                                >
                                  0
                                </span>
                                {stat.suffix}
                              </>
                            ) : (
                              stat.value
                            )}
                          </div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/case-study/mediconnect"
                      className="btn btn-case-study rounded-pill fw-semibold magnetic-btn"
                    >
                      <span className="btn-text">View Case Study</span>
                      <span className="arrow-icon-wrapper">
                        <svg
                          className="diagonal-arrow-svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 10.5L10.5 1.5M10.5 1.5H3.5M10.5 1.5V8.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="btn-sheen" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
