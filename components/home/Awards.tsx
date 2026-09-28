"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AWARDS = [
  {
    title: "MSME Honours (2024)",
    desc: "Recognized for outstanding contribution to business excellence and continuous technological adaptation in the local region.",
  },
  {
    title: "MSME Award for Tech Transformer (2023)",
    desc: "Chaturvedi Software House (CSH) awarded as the MSME 2023 Award for Tech Transformer.",
  },
  {
    title: "National Excellence Award (2023)",
    desc: "Honored with the technology innovator title amongst top global tech businesses driving enterprise scaling.",
  },
  {
    title: "MSME Honours (2024)",
    desc: "Recognized for outstanding contribution to business excellence and continuous technological adaptation in the local region.",
  },
  {
    title: "MSME Award for Tech Transformer (2023)",
    desc: "Chaturvedi Software House (CSH) awarded as the MSME 2023 Award for Tech Transformer.",
  },
  {
    title: "National Excellence Award (2023)",
    desc: "Honored with the technology innovator title amongst top global tech businesses driving enterprise scaling.",
  },
];

export default function Awards() {
  return (
    <section className="awards-section position-relative">
      <div className="awards-bottom-glow" />

      <div className="container-fluid position-relative z-10 px-0">
        <div className="row justify-content-center text-center mb-5 px-3">
          <div className="col-12 col-lg-8">
            <div className="awards-badge d-inline-flex align-items-center gap-2 mb-3 awards-anim-badge">
              <img src="/images/h.png" alt="Icon" />
              <span>WHAT WE HAVE ACHIEVED</span>
            </div>

            <h2 className="awards-title text-white">
              <span className="awards-line-mask">
                <span className="awards-line-inner anim-text-reveal">
                  Awards & Recognitions
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div
          className="awards-slider-wrapper awards-anim-slider"
          data-cursor="DRAG"
        >
          <Swiper
            className="awards-swiper"
            modules={[Autoplay]}
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor
          >
            {AWARDS.map((award, i) => (
              <SwiperSlide key={`${award.title}-${i}`}>
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <div
                    className="award-slide-bg image-reveal-img"
                    style={{ backgroundImage: "url('/images/a1.png')" }}
                  />
                </div>
                <div className="award-slide-overlay" />
                <div className="award-text-wrapper text-start">
                  <h4 className="award-slide-title">{award.title}</h4>
                  <p className="award-slide-desc">{award.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
