"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTechAnimation } from "@/animations/useTechAnimation";

/* Outer Orbit: 8 Logos (Facilitybot, AWS, Atlassian, Oracle, Odoo, etc.) */
const OUTER_ORBIT = [
  { angle: "0deg", src: "/images/tech-logo/tech-logo1.png", alt: "Facilitybot" },
  { angle: "45deg", src: "/images/tech-logo/tech-logo2.svg", alt: "AWS" },
  { angle: "90deg", src: "/images/tech-logo/tech-logo3.svg", alt: "Atlassian" },
  { angle: "135deg", src: "/images/tech-logo/tech-logo5.webp", alt: "Enterprise Platform" },
  { angle: "180deg", src: "/images/tech-logo/tech-logo6.svg", alt: "Oracle" },
  { angle: "225deg", src: "/images/tech-logo/tech-logo7.webp", alt: "Enterprise Platform" },
  { angle: "270deg", src: "/images/tech-logo/tech-logo8.svg", alt: "Odoo" },
  { angle: "315deg", src: "/images/tech-logo/tech-logo9.webp", alt: "Enterprise Platform" },
];

/* Inner Orbit: 6 Logos (Creatio, Snowflake, UiPath, Zoho, etc.) */
const INNER_ORBIT = [
  { angle: "30deg", src: "/images/tech-logo/tech-logo10.webp", alt: "Enterprise Platform" },
  { angle: "90deg", src: "/images/tech-logo/tech-logo11.svg", alt: "Creatio" },
  { angle: "150deg", src: "/images/tech-logo/tech-logo12.svg", alt: "Snowflake" },
  { angle: "210deg", src: "/images/tech-logo/tech-logo13.svg", alt: "UiPath" },
  { angle: "270deg", src: "/images/tech-logo/tech-logo14.webp", alt: "Enterprise Platform" },
  { angle: "330deg", src: "/images/tech-logo/tech-logo15.svg", alt: "Zoho" },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  useTechAnimation(sectionRef);

  return (
    <section className="technology-section ecosystem-section position-relative" ref={sectionRef}>
      {/* Dual Rotating Orbit Rings */}
      <div className="tech-orbit-container position-absolute tech-anim-orbit">
        <div className="tech-orbit-track track-outer">
          {OUTER_ORBIT.map((item) => (
            <div
              key={item.src}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "540px",
                } as React.CSSProperties
              }
            >
              <div className="tech-bubble glow-tech-bubble">
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-orbit-track track-inner">
          {INNER_ORBIT.map((item) => (
            <div
              key={item.src}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "410px",
                } as React.CSSProperties
              }
            >
              <div className="tech-bubble glow-tech-bubble">
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Center Content (No Collisions) */}
      <div className="tech-content-container text-center">
        <div className="tech-badge d-inline-flex align-items-center gap-2 mb-3 tech-anim-badge">
          <img src="/images/h.png" alt="Icon" />
          <span>ENTERPRISE ECOSYSTEM</span>
        </div>

        <h2 className="tech-title text-white mb-3">
          <span className="tech-line-mask">
            <span className="tech-line-inner">Connected Across the </span>
          </span>
          <span className="tech-line-mask">
            <span className="tech-line-inner">Enterprise Technology Ecosystem.</span>
          </span>
        </h2>

        <p className="tech-ecosystem-subtext">
          We work across established enterprise platforms and custom technology ecosystems to design solutions around the business requirement, rather than forcing every challenge into a single technology.
        </p>

        <div>
       <Link
  href="/services"
  className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn"
>
  <span className="btn-text">Explore Platforms &amp; Ecosystems</span>
  <span className="arrow-icon-wrapper">
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
    </section>
  );
}