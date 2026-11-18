"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
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
    href: "/industries#fintech",
  },
  {
    idx: "03",
    title: "Real Estate, Facilities & Smart Infrastructure",
    desc: "Assets, facilities, field operations, IoT and connected buildings.",
    img: "/images/i4.png",
    href: "/industries#real-estate",
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
    img: "/images/tyuity.jpg",
    href: "/industries#construction",
  },
  {
    idx: "06",
    title: "Manufacturing & Industrial",
    desc: "ERP, EAM, automation and operational intelligence.",
    img: "/images/i5.png",
    href: "/industries#manufacturing",
  },
  {
    idx: "07",
    title: "Logistics & Mobility",
    desc: "Fleet, supply chain, asset tracking and operational visibility.",
    img: "/images/ind-logistics.jpg",
    href: "/industries#logistics",
  },
  {
    idx: "08",
    title: "Retail & Consumer",
    desc: "Commerce, customer experience, ERP, CRM and data-driven operations.",
    img: "/images/i6.png",
    href: "/industries#retail",
  },
];

// Duplicate set for seamless wide-screen infinite loop & Prev/Next stepping
const LOOP_SLIDES = [...STRATEGY_INDUSTRIES, ...STRATEGY_INDUSTRIES];

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
    <Link href={href} className="text-decoration-none d-block h-100">
      <div className="industry-card">
        <div className="image-reveal-wrapper">
          <div className="image-reveal-mask" />
          <div
            className="industry-card-bg image-reveal-img"
            style={{ backgroundImage: `url('${img}')` }}
          />
        </div>

        <div className="industry-card-overlay" />
        <div className="card-index-tag">
          <span className="card-index-dot" aria-hidden="true" />
          <span>{idx}</span>
        </div>

        <div className="industry-card-content">
          <div className="industry-card-text">
            <span className="industry-card-accent" aria-hidden="true" />
            <h3 className="industry-card-title">{title}</h3>
            <p className="industry-card-desc">{desc}</p>
          </div>
          <span className="industry-card-arrow" aria-hidden="true">
            <svg
              className="diagonal-arrow-svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
  const swiperRef = useRef<SwiperType | null>(null);
  const fixTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      if (fixTimerRef.current) clearTimeout(fixTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const stepCarousel = useCallback(
    (dir: "prev" | "next") => {
      const s = swiperRef.current;
      if (!s || !s.wrapperEl) return;

      if (fixTimerRef.current) clearTimeout(fixTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

      // Pause continuous marquee and freeze at the live visual pixel offset
      s.autoplay?.stop();
      const liveTranslate = s.getTranslate();
      s.setTransition(0);
      s.setTranslate(liveTranslate);

      // Ensure loop buffer exists on the target side before stepping
      if (typeof s.loopFix === "function") {
        s.loopFix({ direction: dir });
      }

      const baseTranslate = s.translate;
      const firstSlide = s.slides?.[0] as HTMLElement | undefined;
      const step = (firstSlide ? firstSlide.offsetWidth : 340) + 24;
      const targetTranslate = dir === "next" ? baseTranslate - step : baseTranslate + step;

      s.wrapperEl.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";
      s.setTransition(480);
      s.setTranslate(targetTranslate);

      fixTimerRef.current = setTimeout(() => {
        if (!s.destroyed && s.wrapperEl) {
          s.wrapperEl.style.transitionTimingFunction = "";
          if (typeof s.loopFix === "function") {
            s.loopFix({ direction: dir });
          }
          s.updateActiveIndex();
          s.updateSlidesClasses();
        }
      }, 490);

      if (!reduceMotion) {
        resumeTimerRef.current = setTimeout(() => {
          if (!s.destroyed && !isHoveredRef.current) {
            s.autoplay?.start();
          }
        }, 2000);
      }
    },
    [reduceMotion]
  );

  return (
    <section className="industries-section position-relative">
      <div className="bvm-arch-grid" aria-hidden="true" />
      <div className="industries-bottom-glow" aria-hidden="true" />

      <div className="container position-relative z-10 text-center">
        <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 industries-anim-badge anim-reveal">
          <img src="/images/h.png" alt="Icon" />
          <span>INDUSTRIES</span>
        </div>

        <h2 className="industries-title text-white mb-3">
          <span className="industries-line-mask">
            <span className="industries-line-inner anim-text-reveal">Technology Grounded in</span>
          </span>
          <span className="industries-line-mask">
            <span className="industries-line-inner anim-text-reveal headline-cyan">
              Industry Context.
            </span>
          </span>
        </h2>

        <p className="industries-subtext anim-reveal">
          BVM combines industry understanding with enterprise technology to address real operational
          and transformation priorities.
        </p>
      </div>

      <div
        className="industries-carousel-container container-fluid px-0 position-relative z-10 industries-anim-swiper"
        data-cursor="DRAG"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          swiperRef.current?.autoplay?.stop();
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          if (!reduceMotion) swiperRef.current?.autoplay?.start();
        }}
      >
        <Swiper
          className="industries-swiper overflow-visible"
          modules={[Autoplay, FreeMode]}
          loop
          slidesPerView="auto"
          spaceBetween={24}
          speed={reduceMotion ? 300 : 6000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={
            reduceMotion
              ? false
              : {
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
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
            swiper.autoplay?.stop();
          }}
          onTouchEnd={(swiper) => {
            if (!reduceMotion) swiper.autoplay?.start();
          }}
        >
          {LOOP_SLIDES.map((item, i) => (
            <SwiperSlide key={`${item.idx}-${i}`} className="industry-slide">
              <IndustryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container position-relative z-10 industries-actions-row anim-reveal">
        <div className="industries-controls-dock">
          <button
            type="button"
            className="industries-nav-btn"
            aria-label="Previous industry"
            onClick={() => stepCarousel("prev")}
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="industries-nav-btn"
            aria-label="Next industry"
            onClick={() => stepCarousel("next")}
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>

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