"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTechAnimation } from "@/animations/useTechAnimation";

/* Outer Orbit: 8 Logos (Radius: 540px) */
const OUTER_ORBIT = [
  {
    angle: "0deg",
    name: "SAP",
    src: "/images/tech-logo/tech-logo10.png",
  },
  {
    angle: "45deg",
    name: "Oracle",
    src: "/images/tech-logo/tech-logo6.svg",
  },
  {
    angle: "90deg",
    name: "Microsoft Dynamics 365",
    src: "/images/tech-logo/tech-logo5.png",
  },
  {
    angle: "135deg",
    name: "Odoo",
    src: "/images/tech-logo/tech-logo8.svg",
  },
  {
    angle: "180deg",
    name: "Salesforce",
    src: "/images/tech-logo/tech-logo9.png",
  },
  {
    angle: "225deg",
    name: "ServiceNow",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
  },
  {
    angle: "270deg",
    name: "Creatio",
    src: "/images/tech-logo/tech-logo11.svg",
  },
  {
    angle: "315deg",
    name: "Zoho",
    src: "/images/tech-logo/tech-logo15.svg",
  },
];

/* Inner Orbit: 7 Logos (Radius: 410px) */
const INNER_ORBIT = [
  {
    angle: "25deg",
    name: "Microsoft Azure",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    angle: "76.4deg",
    name: "AWS",
    src: "/images/tech-logo/tech-logo2.svg",
  },
  {
    angle: "127.8deg",
    name: "Databricks",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Databricks-logo.svg",
  },
  {
    angle: "179.3deg",
    name: "Snowflake",
    src: "/images/tech-logo/tech-logo12.svg",
  },
  {
    angle: "230.7deg",
    name: "Atlassian",
    src: "/images/tech-logo/tech-logo3.svg",
  },
  {
    angle: "282.1deg",
    name: "UiPath",
    src: "/images/tech-logo/tech-logo13.svg",
  },
  {
    angle: "333.5deg",
    name: "FacilityBot",
    src: "/images/tech-logo/tech-logo14.png",
  },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  useTechAnimation(sectionRef);

  return (
    <section className="technology-section ecosystem-section position-relative" ref={sectionRef}>
      {/* Dual Rotating Orbit Rings */}
      <div className="tech-orbit-container position-absolute tech-anim-orbit">
        {/* Outer Orbit (8 items) */}
        <div className="tech-orbit-track track-outer">
          {OUTER_ORBIT.map((item) => (
            <div
              key={`${item.name}-${item.angle}`}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "540px",
                } as React.CSSProperties
              }
            >
              <div className="tech-bubble glow-tech-bubble">
                <img src={item.src} alt={item.name} />
                <span className="tech-tooltip">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inner Orbit (7 items) */}
        <div className="tech-orbit-track track-inner">
          {INNER_ORBIT.map((item) => (
            <div
              key={`${item.name}-${item.angle}`}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "410px",
                } as React.CSSProperties
              }
            >
              <div className="tech-bubble glow-tech-bubble">
                <img src={item.src} alt={item.name} />
                <span className="tech-tooltip">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Content Container */}
      <div className="tech-content-container text-center">
        {/* Badge */}
        <div className="tech-badge d-inline-flex align-items-center gap-2 mb-3 tech-anim-badge">
          <img src="/images/h.png" alt="Icon" />
          <span>ENTERPRISE ECOSYSTEM</span>
        </div>

        {/* Headline */}
        <h2 className="tech-title text-white mb-3">
          <span className="tech-line-mask">
            <span className="tech-line-inner">Connected Across the Enterprise</span>
          </span>
          <span className="tech-line-mask">
            <span className="tech-line-inner">Technology Ecosystem.</span>
          </span>
        </h2>

        {/* Supporting Content */}
        <p className="tech-ecosystem-subtext">
          We work across established enterprise platforms and technology ecosystems to design solutions around business requirements, rather than forcing every challenge into a single technology.
        </p>

        {/* CTA Button using Site's Native Diagonal Arrow SVG */}
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