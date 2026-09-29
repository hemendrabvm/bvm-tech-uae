"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const STRATEGY_INDUSTRIES = [
  {
    idx: "01",
    title: "Government & Public Services",
    desc: "Connected services, secure platforms, data and digital operations.",
    img: "/images/sdfg.png",
    href: "/industries",
  },
  {
    idx: "02",
    title: "Banking & Financial Services",
    desc: "Modernization, customer experience, automation, data and security.",
    img: "/images/der.jpeg",
    href: "/industries",
  },
  {
    idx: "03",
    title: "Real Estate, Facilities & Smart Infrastructure",
    desc: "Assets, facilities, field operations, IoT and connected buildings.",
    img: "/images/i4.png",
    href: "/industries",
  },
  {
    idx: "04",
    title: "Energy & Utilities",
    desc: "Asset operations, field technology, enterprise platforms and analytics.",
    img: "/images/fdgtd.jpeg",
    href: "/industries",
  },
  {
    idx: "05",
    title: "Construction & Engineering",
    desc: "Projects, HSE, QA/QC, procurement and digital delivery.",
    img: "/images/tyuity.jpeg",
    href: "/industries",
  },
  {
    idx: "06",
    title: "Manufacturing & Industrial",
    desc: "ERP, EAM, automation and operational intelligence.",
    img: "/images/i5.png",
    href: "/industries",
  },
  {
    idx: "07",
    title: "Logistics & Mobility",
    desc: "Fleet, supply chain, asset tracking and operational visibility.",
    img: "/images/ind-logistics.jpg",
    href: "/industries",
  },
  {
    idx: "08",
    title: "Retail & Consumer",
    desc: "Commerce, customer experience, ERP, CRM and data-driven operations.",
    img: "/images/i6.png",
    href: "/industries",
  },
];

function IndustryCard({
  idx,
  title,
  desc,
  img,
  href,
}: {
  idx: string;
  title: string;
  desc: string;
  img: string;
  href: string;
}) {
  return (
    <Link href={href} className="text-decoration-none">
      <div className="industry-card">
        {/* Background Image with Reveal Mask */}
        <div className="image-reveal-wrapper">
          <div className="image-reveal-mask" />
          <div
            className="industry-card-bg image-reveal-img"
            style={{ backgroundImage: `url('${img}')` }}
          />
        </div>

        {/* Gradient Scrim for Legibility */}
        <div className="industry-card-overlay" />
        <div className="card-index-tag">{idx}</div>

        {/* Card Content Block */}
        <div className="industry-card-content">
          <div className="industry-card-text">
            <h3 className="industry-card-title">{title}</h3>
            <p className="industry-card-desc">{desc}</p>
          </div>
          <span className="industry-card-arrow">
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
        </div>
      </div>
    </Link>
  );
}

export default function Industries() {
  return (
    <section className="industries-section position-relative">
      <div className="industries-bottom-glow" />

      <div className="container position-relative z-10 text-center">
        {/* Section Badge */}
        <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 industries-anim-badge">
          <img src="/images/h.png" alt="Icon" />
          <span>INDUSTRIES</span>
        </div>

        {/* Headline strictly on one line on desktop */}
        <h2 className="industries-title text-white mb-3">
          <span className="industries-line-mask">
            <span className="industries-line-inner anim-text-reveal">
              Technology Grounded in Industry Context.
            </span>
          </span>
        </h2>

        {/* Section Description */}
        <p className="industries-subtext anim-reveal">
          BVM combines industry understanding with enterprise technology to address real operational and transformation priorities.
        </p>
      </div>

      {/* Swiper Carousel with 8 Target Industry Cards */}
      <div
        className="industries-carousel-container container-fluid px-0 position-relative z-10 industries-anim-swiper"
        data-cursor="DRAG"
      >
        <Swiper
          className="industries-swiper overflow-visible"
          modules={[Autoplay, FreeMode]}
          loop
          slidesPerView="auto"
          spaceBetween={24}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumBounce: false,
          }}
          allowTouchMove
          simulateTouch
          grabCursor
          onTouchStart={(swiper) => {
            if (swiper.autoplay) swiper.autoplay.stop();
          }}
          onTouchEnd={(swiper) => {
            if (swiper.autoplay) swiper.autoplay.start();
          }}
        >
          {STRATEGY_INDUSTRIES.map((item) => (
            <SwiperSlide key={`${item.idx}-${item.title}`} className="industry-slide">
              <IndustryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom CTA: Explore All Industries */}
      <div className="text-center mt-5 position-relative z-10">
        <Link
          href="/industries"
          className="btn btn-explore-services rounded-pill fw-semibold magnetic-btn"
        >
          <span className="btn-text">Explore All Industries</span>
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
    </section>
  );
}