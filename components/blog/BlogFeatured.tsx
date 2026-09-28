"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <section className="featured-article-section position-relative" id="cloud-architecture">
      <img
        src="/images/4.png"
        className="section-bg-glow section-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 software-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>FEATURED ARTICLE</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="header-line-mask">
                <span className="header-line-inner anim-text-reveal">
                  Top Technical Insight
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="featured-story-card spotlight-card ind-anim-card p-4 p-lg-5 rounded-4 anim-reveal">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6">
              <div className="showcase-media-box position-relative overflow-hidden rounded-4">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="img-fluid image-reveal-img showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-cyan">{post.readTime}</span>
                  <span className="badge-label text-white">
                    {post.categoryLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="showcase-content-block">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="sector-code">{post.categoryLabel}</span>
                  <span className="text-bright-muted small">
                    <i className="fa-solid fa-calendar me-1" /> {post.date}
                  </span>
                </div>

                <h2 className="card-title text-white mb-3 fs-2">{post.title}</h2>

                <p className="card-desc text-bright-muted mb-4">{post.excerpt}</p>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-3 border-top border-secondary border-opacity-20">
                  <div className="d-flex align-items-center gap-3">
                    {post.authorImg && (
                      <img
                        src={post.authorImg}
                        alt={post.author}
                        className="rounded-circle"
                        width={42}
                        height={42}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <div>
                      <div className="text-white fw-bold small mb-0">
                        {post.author}
                      </div>
                      <div className="text-cyan extra-small">
                        {post.authorRole}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn"
                  >
                    <span className="btn-text">Read Full Article</span>
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
      </div>
    </section>
  );
}