"use client";

import { useRef } from "react";
import { usePageHeaderAnimation } from "@/animations/usePageHeaderAnimation";

export type TrustTag = { icon: string; text: string };
export type FloatingPill = { position: string; icon: string; text: string };

export type ServicePageHeaderProps = {
  category: string;
  titleLine1: string;
  titleLine2: string;
  summary: string;
  trustTags: TrustTag[];
  floatingPills: FloatingPill[];
  showcaseImg: string;
  showcaseAlt: string;
  pillImg?: string;
};

export default function ServicePageHeader({
  category,
  titleLine1,
  titleLine2,
  summary,
  trustTags,
  floatingPills,
  showcaseImg,
  showcaseAlt,
  pillImg = "/images/who-2.png",
}: ServicePageHeaderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  usePageHeaderAnimation(sectionRef);

  const pillTop = floatingPills.find((p) => p.position === "pill-top");
  const pillBL = floatingPills.find((p) => p.position === "pill-bottom-left");
  const pillBR = floatingPills.find((p) => p.position === "pill-bottom-right");

  return (
    <section className="page-header-section position-relative" ref={sectionRef}>
      <img
        src="/images/1.png"
        className="header-bg-glow header-glow-left"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <img
        src="/images/2.png"
        className="header-bg-glow header-glow-right"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="page-category-tag page-header-badge d-inline-flex align-items-center gap-2 mb-4">
              <span className="category-dot" />
              <span>{category}</span>
              <span className="shimmer-line" aria-hidden="true" />
            </div>

            <h1 className="page-header-title text-white mb-4">
              <span className="header-line-mask">
                <span className="header-line-inner">{titleLine1}</span>
              </span>
              <span className="header-line-mask">
                <span className="header-line-inner">
                  <span className="header-inline-pill-wrapper">
                    <span
                      className="header-inline-pill"
                      style={{ backgroundImage: `url('${pillImg}')` }}
                    />
                  </span>{" "}
                  {titleLine2}
                </span>
              </span>
            </h1>

            <p className="page-header-summary text-bright-muted mb-4">
              {summary}
            </p>

            <div className="header-quick-trust d-flex flex-wrap gap-2 mb-2">
              {trustTags.map((tag) => (
                <span className="header-trust-tag" key={tag.text}>
                  <i className={`${tag.icon} me-2`} />
                  {tag.text}
                </span>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="header-visual-showcase spotlight-card p-3 rounded-4 position-relative">
              {pillTop && (
                <div className="floating-header-pill pill-top">
                  <i className={`${pillTop.icon} me-2`} />
                  <span>{pillTop.text}</span>
                </div>
              )}

              <div className="showcase-img-box position-relative overflow-hidden rounded-4">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src={showcaseImg}
                    alt={showcaseAlt}
                    className="img-fluid image-reveal-img header-showcase-img"
                  />
                </div>
              </div>

              {pillBL && (
                <div className="floating-header-pill pill-bottom-left">
                  <i className={`${pillBL.icon} me-2`} />
                  <span>{pillBL.text}</span>
                </div>
              )}
              {pillBR && (
                <div className="floating-header-pill pill-bottom-right">
                  <i className={`${pillBR.icon} me-2`} />
                  <span>{pillBR.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-header-divider mt-5">
          <span />
        </div>
      </div>
    </section>
  );
}
