"use client";

import Link from "next/link";
import { industries } from "@/data/industries";

export default function IndustrySpotlight() {
  return (
    <section className="industry-spotlight-section position-relative">
      <img
        src="/images/4.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="d-flex flex-column gap-5">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="industry-showcase-row spotlight-card ind-anim-card p-4 p-lg-5 anim-reveal"
              id={ind.id}
            >
              <div
                className={`row align-items-center g-4 g-lg-5${
                  ind.reverse ? " flex-lg-row-reverse" : ""
                }`}
              >
                <div className="col-12 col-lg-6">
                  <div className="showcase-media-box position-relative overflow-hidden rounded-4">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={ind.img}
                        alt={ind.title}
                        className="img-fluid image-reveal-img showcase-img"
                      />
                    </div>
                    <div className="floating-glass-badge">
                      <span className={`badge-number ${ind.badgeAccent}`}>
                        {ind.badgeNum}
                      </span>
                      <span className="badge-label text-white">
                        {ind.badgeLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="showcase-content-block">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`card-icon-badge ${ind.accent}`}>
                        <i className={ind.icon} />
                      </div>
                      <span className="sector-code">{ind.sector}</span>
                    </div>
                    <h2 className="card-title text-white mb-3">{ind.title}</h2>
                    <p className="card-desc text-bright-muted mb-4">
                      {ind.desc}
                    </p>
                    <div className="sector-specs-list d-flex flex-wrap gap-2 mb-4">
                      {ind.tags.map((tag) => (
                        <span className="spec-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn"
                    >
                      <span className="btn-text">{ind.cta}</span>
                      <span className="arrow-icon-wrapper ms-2">
                        <i className="fa-solid fa-arrow-right" />
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