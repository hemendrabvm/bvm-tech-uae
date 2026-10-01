"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

export default function LatestRead() {
  // Pull the top 3 latest articles
  const latestArticles = blogPosts.slice(0, 3);

  return (
    <section className="latest-read-section position-relative">
      {/* Background Ambient Glow */}
      <div className="latest-read-ambient-glow" />

      <div className="container position-relative z-10">
        {/* Section Header: Headline on Left, View All on Right */}
        <div className="row align-items-end justify-content-between mb-5 g-4">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>LATEST READ</span>
            </div>

          <h2 className="choose-title text-white mb-3">
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal">
      Perspectives on Enterprise
    </span>
  </span>
  <span className="header-line-mask">
    <span className="header-line-inner anim-text-reveal headline-cyan">
      Technology &amp; Scale.
    </span>
  </span>
</h2>

            <p className="process-header-subtext text-bright-muted anim-reveal mb-0">
              Architectural deep dives, enterprise AI strategies, cloud modernization roadmaps, and practical insights from our senior engineering team.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-start text-lg-end">
            <Link
              href="/blog"
              className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn anim-reveal"
            >
              <span className="btn-text">View All Articles</span>
              <span className="arrow-icon-wrapper ms-1">
                <svg
                  className="diagonal-arrow-svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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

        {/* 100% Reuse of the site's existing BlogCard component */}
        <div className="row g-4">
          {latestArticles.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}