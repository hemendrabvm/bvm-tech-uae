"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="col-12 col-md-6 col-lg-4" data-filter={post.filterId}>
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

          <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
            <span className="sector-code">{post.categoryLabel}</span>
            <span className="text-bright-muted extra-small">
              <i className="fa-solid fa-clock me-1" /> {post.readTime}
            </span>
          </div>

          <div className="text-bright-muted extra-small mb-2">
            <i className="fa-solid fa-calendar me-1" /> {post.date}
          </div>

          <h3 className="article-title text-white fs-5 mb-3">
            <Link href={`/blog/${post.slug}`} className="text-white text-decoration-none">
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
  );
}