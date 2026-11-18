"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

type BlogCardProps = {
  post: BlogPost;
  compact?: boolean;
  colClass?: string;
};

export default function BlogCard({
  post,
  compact = false,
  colClass = "col",
}: BlogCardProps) {
  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;

    card.classList.add("is-tilting");
    card.style.setProperty("--mx", `${x.toFixed(1)}px`);
    card.style.setProperty("--my", `${y.toFixed(1)}px`);
    card.style.setProperty("--rx", `${(nx * 14).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(-ny * 12).toFixed(2)}deg`);
    card.style.setProperty("--px", nx.toFixed(3));
    card.style.setProperty("--py", ny.toFixed(3));
  };

  const handleLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    card.classList.remove("is-tilting");
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--px", "0");
    card.style.setProperty("--py", "0");
  };

  return (
    <div className={colClass} data-filter={post.filterId}>
      <div className="bvm-blog-unit anim-reveal">
        <Link
          href={`/blog/${post.slug}`}
          className="bvm-blog-3d"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="bvm-blog-plate" aria-hidden="true" />

          <div className="bvm-blog-surface" aria-hidden="true">
            <div className="bvm-blog-beam" />
            <div className="bvm-blog-spotlight" />
          </div>

          <div className="bvm-blog-content">
            <div>
              <div className="bvm-blog-head">
                <span className="bvm-blog-cat-pill">{post.categoryLabel}</span>
                <span className="bvm-blog-orb" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1.5 10.5L10.5 1.5M10.5 1.5H3.5M10.5 1.5V8.5"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="bvm-blog-body">
                <span className="bvm-blog-accent" aria-hidden="true" />
                <h3 className="bvm-blog-title">{post.title}</h3>
                <p className="bvm-blog-excerpt">{post.excerpt}</p>
              </div>
            </div>

            <div>
              <div className="bvm-blog-viewport">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="img-fluid image-reveal-img bvm-blog-img"
                  />
                </div>
                <div className="bvm-blog-img-shade" />
                <div className="bvm-blog-scan" />
              </div>

              <div className="bvm-blog-foot">
                {compact ? (
                  <div className="bvm-blog-meta-left">
                    <span>{post.date}</span>
                    <span className="sep" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                ) : (
                  <div>
                    <div className="bvm-blog-author">{post.author}</div>
                    <div className="bvm-blog-role">{post.authorRole}</div>
                  </div>
                )}

                <span className="bvm-blog-read-cta">Read &rarr;</span>
              </div>
            </div>
          </div>
        </Link>

        <div className="bvm-blog-pedestal" aria-hidden="true" />
      </div>
    </div>
  );
}