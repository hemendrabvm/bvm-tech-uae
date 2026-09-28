"use client";

import { useRef } from "react";
import { usePageHeaderAnimation } from "@/animations/usePageHeaderAnimation";

type PageHeaderProps = {
  badge?: string;
  titleLines: string[];
  summary?: string;
  trustTags?: string[];
};

/**
 * Reusable Page Header — animation scoped via usePageHeaderAnimation.
 * Content should match each static page's header markup.
 */
export default function PageHeader({
  badge,
  titleLines,
  summary,
  trustTags,
}: PageHeaderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  usePageHeaderAnimation(sectionRef);

  return (
    <section className="page-header-section position-relative" ref={sectionRef}>
      <div className="container position-relative z-10">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            {badge && (
              <div className="page-header-badge page-category-tag d-inline-flex align-items-center gap-2 mb-3">
                <span className="category-dot" />
                <span>{badge}</span>
                <span className="shimmer-line" aria-hidden="true" />
              </div>
            )}
            <h1 className="page-header-title text-white mb-4">
              {titleLines.map((line, i) => (
                <span className="page-header-line-mask" key={i}>
                  <span className="page-header-line-inner">{line}</span>
                </span>
              ))}
            </h1>
            {summary && (
              <p className="page-header-summary page-header-subtext text-bright-muted">
                {summary}
              </p>
            )}
            {trustTags && trustTags.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mt-4">
                {trustTags.map((tag) => (
                  <span className="header-trust-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="page-header-divider mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
