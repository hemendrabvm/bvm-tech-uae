"use client";

import { useRef } from "react";
import Link from "next/link";
import { useServicesAnimation } from "@/animations/useServicesAnimation";
import { useServiceCards } from "@/animations/usePageAnimations";
import { useAdvisorModal } from "@/components/AdvisorModal/AdvisorModalContext";

const TRANSFORMATION_CARDS = [
  {
    idx: "01",
    title: "Modernize Core Systems",
    desc: "Modernize legacy applications and enterprise platforms for greater agility and scale.",
    capabilities: [
      "ERP Modernization",
      "Application Modernization",
      "Cloud Migration",
    ],
    ctaText: "Explore Modernization",
    ctaHref: "/erp-development",
    bg: "/images/s1.png",
    active: true,
  },
  {
    idx: "02",
    title: "Unlock AI & Data",
    desc: "Turn data into intelligence, automation and better business decisions.",
    capabilities: [
      "Enterprise AI",
      "Data Engineering",
      "Analytics",
      "Intelligent Automation",
    ],
    ctaText: "Explore AI & Data",
    ctaHref: "/ai-automation-development",
    bg: "/images/s3.png",
    active: false,
  },
  {
    idx: "03",
    title: "Connect the Enterprise",
    desc: "Integrate applications, workflows and data into one connected environment.",
    capabilities: [
      "APIs",
      "Application Integration",
      "Data Integration",
      "Middleware",
    ],
    ctaText: "Explore Integration",
    ctaHref: "/contact",
    bg: "/images/s2.png",
    active: false,
  },
  {
    idx: "04",
    title: "Digitize Operations",
    desc: "Replace manual processes with connected digital workflows and automation.",
    capabilities: [
      "Workflow Automation",
      "Enterprise Applications",
      "RPA",
      "Digital Operations",
    ],
    ctaText: "Explore Digital Operations",
    ctaHref: "/custom-software-development",
    bg: "/images/s4.png",
    active: false,
  },
  {
    idx: "05",
    title: "Strengthen Technology Resilience",
    desc: "Improve cloud, security, infrastructure and continuity across critical systems.",
    capabilities: [
      "Cloud",
      "Cybersecurity",
      "DevSecOps",
      "Business Continuity",
    ],
    ctaText: "Explore Resilience",
    ctaHref: "/security",
    bg: "/images/s5.png",
    active: false,
  },
  {
    idx: "06",
    title: "Scale Technology Delivery",
    desc: "Extend capability with specialists, dedicated teams and global delivery.",
    capabilities: [
      "Technology Specialists",
      "Dedicated Teams",
      "Managed Delivery",
      "ODC",
    ],
    ctaText: "Explore Global Delivery",
    ctaHref: "/contact",
    bg: "/images/s1.png",
    active: false,
  },
];

export default function WhatWeTransform() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openAdvisorModal } = useAdvisorModal();

  useServicesAnimation(sectionRef);
  useServiceCards(sectionRef);

  return (
    <section id="what-we-do" className="services-section position-relative" ref={sectionRef}>
      {/* Background Ambient Glow */}
      <img
        src="/images/services-bg.png"
        className="services-bg-glow"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        {/* Section Header */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-12 col-lg-8">
            <div className="services-badge d-inline-flex align-items-center gap-2 services-anim-badge mb-3">
              <img src="/images/h.png" alt="Icon" />
              <span>BUSINESS PRIORITIES</span>
            </div>

            <h2 className="services-title text-white mb-3">
              <span className="services-line-mask">
                <span className="services-line-inner">
                  What Do You Want
                </span>
              </span>
              <span className="services-line-mask">
                <span className="services-line-inner">
                  to Transform?
                </span>
              </span>
            </h2>

            <p className="services-subtext services-anim-subtext mb-0">
              From targeted improvements to enterprise-wide transformation, BVM helps organizations modernize systems, unlock AI, connect operations and scale technology around real business priorities.
            </p>
          </div>

          {/* Top CTA: Triggers on-page advisor modal */}
          <div className="col-12 col-lg-4 d-flex justify-content-start justify-content-lg-end align-items-center">
            <button
              type="button"
              onClick={openAdvisorModal}
              className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn services-anim-btn"
            >
              <span className="btn-text">Talk to an Advisor</span>
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
            </button>
          </div>
        </div>

        {/* 6-Card Expanding Curtain Accordion */}
        <div className="services-accordion-wrapper services-curtain-reveal">
          {TRANSFORMATION_CARDS.map((card) => (
            <div
              key={card.idx}
              className={`service-card${card.active ? " active" : ""}`}
              data-cursor="EXPLORE"
            >
              {/* Background Cover */}
              <div
                className="service-card-bg"
                style={{ backgroundImage: `url('${card.bg}')` }}
              />
              <div className="service-card-overlay" />

              {/* Index Tag */}
              <div className="card-index-tag">{card.idx}</div>

              {/* Collapsed State: Vertical Title Only */}
              <div className="collapsed-title-wrapper">
                <span className="vertical-title">{card.title}</span>
              </div>

              {/* Expanded State: Full Heading + Description + Tags + CTA */}
              <div className="expanded-content-wrapper">
                <div className="card-text-mask">
                  <h3 className="expanded-title">{card.title}</h3>
                </div>
                <div className="card-text-mask">
                  <p className="expanded-desc">{card.desc}</p>
                </div>

                {/* Capabilities Chips */}
                <div className="accordion-capabilities-tags">
                  {card.capabilities.map((cap) => (
                    <span className="accordion-cap-tag" key={cap}>
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Card CTA Link */}
                <div>
                  <Link href={card.ctaHref} className="accordion-card-cta">
                    <span>{card.ctaText}</span>
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