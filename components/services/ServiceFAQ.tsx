"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

type Props = {
  badge: string;
  titleLines?: string[];
  items: FaqItem[];
  imageSrc?: string;
};

export default function ServiceFAQ({
  badge,
  titleLines = ["Frequently Asked", "Questions"],
  items,
  imageSrc = "/images/faq.png",
}: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="faq-section position-relative">
      <img
        src="/images/7.png"
        className="fq-glow fq-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <img
        src="/images/faqbg.png"
        className="faq-bg-glow"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <div className="faq-badge d-inline-flex align-items-center gap-2 mb-3 faq-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>{badge}</span>
              </div>

              <h2 className="faq-title text-white mb-4">
                {titleLines.map((line) => (
                  <span className="faq-line-mask" key={line}>
                    <span className="faq-line-inner anim-text-reveal">{line}</span>
                  </span>
                ))}
              </h2>
            </div>

            <div className="faq-image-wrapper mt-auto">
              <div className="image-reveal-wrapper">
                <div className="image-reveal-mask" />
                <img
                  src={imageSrc}
                  alt="Professional working at desk"
                  className="img-fluid image-reveal-img faq-img"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="accordion custom-faq-accordion" id="faqAccordion">
              {items.map((item, i) => {
                const id = `collapse${i + 1}`;
                const heading = `heading${i + 1}`;
                const isOpen = openId === id;
                return (
                  <div
                    key={id}
                    className="accordion-item faq-item faq-anim-card anim-reveal"
                  >
                    <h2 className="accordion-header" id={heading}>
                      <button
                        className={`accordion-button faq-btn${isOpen ? "" : " collapsed"}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={id}
                        onClick={() =>
                          setOpenId((prev) => (prev === id ? null : id))
                        }
                      >
                        <span>{item.q}</span>
                        <svg
                          className="faq-chevron-svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id={id}
                      className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                      aria-labelledby={heading}
                    >
                      <div className="accordion-body faq-body-text">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
