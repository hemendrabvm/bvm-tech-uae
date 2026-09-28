"use client";

import type { BlogPost } from "@/data/blogPosts";

export default function BlogArticleHero({ post }: { post: BlogPost }) {
  if (!post.takeaways || post.takeaways.length === 0) return null;

  return (
    <section className="article-hero-cover-section position-relative pt-4 pb-2">
      <img
        src="/images/2.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="takeaways-matrix-card spotlight-card ind-anim-card p-4 p-md-5 rounded-4 mb-4 anim-reveal">
          <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-20">
            <div className="sla-icon-badge text-cyan">
              <i className="fa-solid fa-list-check" />
            </div>
            <div>
              <span className="badge-sub-title text-cyan mb-1 d-block">
                EXECUTIVE SUMMARY
              </span>
              <h3 className="text-white mb-0 fs-4">
                Key Takeaways for Technology &amp; Business Leaders
              </h3>
            </div>
          </div>

          <div className="row g-4">
            {post.takeaways.map((t) => (
              <div className="col-12 col-md-6" key={t.title}>
                <div
                  className="d-flex align-items-start gap-3 p-3 rounded-3 h-100"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <i
                    className={`fa-solid fa-circle-check ${t.iconClass} fs-5 mt-1`}
                  />
                  <div>
                    <h5 className="text-white mb-1 fs-6 fw-bold">
                      {t.title}
                    </h5>
                    <p className="text-bright-muted small mb-0">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}