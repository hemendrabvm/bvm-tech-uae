"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const STRATEGY_INDUSTRIES = [
  { idx: "01", title: "Government & Public", img: "/images/sdfg.png", href: "/industries" },
  { idx: "02", title: "Banking & Finance", img: "/images/der.jpeg", href: "/industries" },
  { idx: "03", title: "Real Estate & Infra", img: "/images/i4.png", href: "/industries" },
  { idx: "04", title: "Energy & Utilities", img: "/images/fdgtd.jpeg", href: "/industries" },
  { idx: "05", title: "Construction & Eng.", img: "/images/tyuity.jpeg", href: "/industries" },
  { idx: "06", title: "Manufacturing", img: "/images/i5.png", href: "/industries" },
  { idx: "07", title: "Logistics & Mobility", img: "/images/ind-logistics.jpg", href: "/industries" },
  { idx: "08", title: "Retail & Consumer", img: "/images/i6.png", href: "/industries" },
  { idx: "09", title: "Hospitality & Leisure", img: "/images/tyuity.jpeg", href: "/industries" },
  { idx: "10", title: "Healthcare & Life Sciences", img: "/images/i2.png", href: "/industries" },
  { idx: "11", title: "Technology & SaaS", img: "/images/i3.png", href: "/industries" },
];

function IndustryCard({
  idx,
  title,
  img,
  href,
}: {
  idx: string;
  title: string;
  img: string;
  href: string;
}) {
  return (
    <Link href={href} className="text-decoration-none">
      <div className="industry-card">
        <div className="image-reveal-wrapper">
          <div className="image-reveal-mask" />
          <div
            className="industry-card-bg image-reveal-img"
            style={{ backgroundImage: `url('${img}')` }}
          />
        </div>
        <div className="industry-card-overlay-hover" />
        <div className="card-index-tag">{idx}</div>
        <div className="industry-card-content">
          <span className="industry-card-title">{title}</span>
          <span className="industry-card-arrow">
            <svg
              width="14"
              height="14"
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
        <div className="industries-badge d-inline-flex align-items-center gap-2 mb-3 industries-anim-badge">
          <img src="/images/h.png" alt="Icon" />
          <span>INDUSTRIES</span>
        </div>

        <h2 className="industries-title text-white">
          <span className="industries-line-mask">
            <span className="industries-line-inner anim-text-reveal">
              Technology Grounded in
            </span>
          </span>
          <span className="industries-line-mask">
            <span className="industries-line-inner anim-text-reveal">
              Industry.
            </span>
          </span>
        </h2>
      </div>

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
    </section>
  );
}