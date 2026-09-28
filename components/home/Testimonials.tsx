"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TESTIMONIALS = [
  {
    quote:
      '"The whole engagement from start to finish with Bvm was excellent. By ensuring that they had a very clear brief at the start the design process was smooth. We went through iterations to get all details right in one go. Highly recommended to anyone!"',
    name: "Patrick Schofield",
    role: "Google Review ★★★★★",
    avatar: "/images/user.png",
  },
  {
    quote:
      '"Our company was searching for a solid web developer, but it was difficult to find one that met our needs. I came across Bvm and their team worked diligently for 6 months to build a state-of-the-art platform. Very responsive and excellent in delivery."',
    name: "Fahad Ahmed",
    role: "Google Review ★★★★★",
    avatar: "/images/user.png",
  },
  {
    quote:
      '"I can\'t say enough good things about Bvm. They have developed 2 websites for me and are top notch. I am extremely demanding about what I want and how I want it to look, and they did everything I asked and more! I will hire them again and highly recommend them."',
    name: "Thomas “Chef Tomm” Johnson",
    role: "Google Review ★★★★★",
    avatar: "/images/user.png",
  },
  {
    quote:
      '"The team at Bvm made a great website for my studio. They were always willing to listen to my requests and requirements, delivering a smooth user experience and clean design. Communication was great throughout and support was always on point."',
    name: "Mahima Grover",
    role: "Google Review ★★★★★",
    avatar: "/images/user.png",
  },
  {
    quote:
      '"Bvm is phenomenal to work with to say the least. They communicated progress consistently, understood all our technical requirements from day one, and delivered clean, high-performance code on time. A genuinely dedicated development partner."',
    name: "Francesco S.",
    role: "Google Review ★★★★★",
    avatar: "/images/user.png",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section position-relative">
      <div className="testi-bottom-glow" />

      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-2 px-3">
          <div className="col-12 col-lg-8">
            <div className="testimonials-badge d-inline-flex align-items-center gap-2 mb-3 testi-anim-badge">
              <img src="/images/h.png" alt="Icon" />
              <span>TESTIMONIALS</span>
            </div>

            <h2 className="testimonials-title text-white">
              <span className="testi-line-mask">
                <span className="testi-line-inner anim-text-reveal">
                  What our Clients Say
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div
          className="testimonials-slider-wrapper testi-anim-slider anim-reveal"
          data-cursor="DRAG"
        >
          <Swiper
            className="testimonials-swiper"
            modules={[Autoplay]}
            loop
            centeredSlides
            slidesPerView={1.2}
            spaceBetween={28}
            speed={750}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1200: { slidesPerView: 2.8, centeredSlides: true },
            }}
            grabCursor
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={`${t.name}-${i}`} className="testimonial-slide">
                <div className="testimonial-bubble mb-4">
                  <div className="quote-badge mb-4">
                    <img src="/images/quotes.png" alt="Quotes" />
                  </div>
                  <p className="testimonial-quote">{t.quote}</p>
                </div>
                <div className="testimonial-client d-flex align-items-center gap-3">
                  <div className="client-avatar">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="client-meta">
                    <h5 className="client-name text-white mb-1">{t.name}</h5>
                    <p className="client-role mb-0">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}