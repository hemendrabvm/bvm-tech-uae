"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogRelated({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section className="author-related-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 software-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>CONTINUE READING</span>
            </div>
            <h2 className="choose-title text-white anim-reveal">
              Related Tech Insights
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-12 col-md-6 col-lg-4" key={post.slug}>
              <div className="article-card spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between anim-reveal">
                <div>
                  <div className="article-card-media position-relative overflow-hidden rounded-4 mb-3">
                    <div className="image-reveal-wrapper">
                      <div className="image-reveal-mask" />
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="img-fluid image-reveal-img article-card-img"
                      />
                    </div>
                  </div>
                  <span className="sector-code d-block mb-2">
                    {post.categoryLabel}
                  </span>
                  <h3 className="article-title text-white fs-5 mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-white text-decoration-none"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="article-excerpt text-bright-muted small mb-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-top border-secondary border-opacity-20 d-flex align-items-center justify-content-between">
                  <div className="text-bright-muted extra-small">
                    <div className="text-white fw-bold">{post.author}</div>
                    <div className="text-cyan extra-small">{post.authorRole}</div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn btn-case-study rounded-pill fw-semibold magnetic-btn py-2 px-3"
                  >
                    <span className="btn-text">Read Article</span>
                    <span className="arrow-icon-wrapper ms-2">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}