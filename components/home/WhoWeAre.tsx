"use client";

import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="who-we-are-section position-relative">
      <img
        src="/images/3.png"
        className="who-bg-glow who-bg-glow-left"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <img
        src="/images/4.png"
        className="who-bg-glow who-bg-glow-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row align-items-center mb-5 g-4">
          <div className="col-12 col-lg-3">
            <div className="who-badge d-inline-flex align-items-center gap-2 who-anim-elem anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>WHO WE ARE</span>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <h2 className="who-title text-white mb-0 who-anim-elem anim-reveal">
             Software Solutions for UAE to prepare you for the future. 
            </h2>
          </div>

          <div className="col-12 col-lg-2 d-flex justify-content-start justify-content-lg-end align-items-center">
            <Link
              href="/about"
              className="btn btn-more-about rounded-pill fw-semibold magnetic-btn who-anim-elem anim-reveal"
            >
              <span className="btn-text">More About Us</span>
              <span className="arrow-icon-wrapper">
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
              <span className="btn-sheen" />
            </Link>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-6 col-md-6 col-lg-3">
            <div className="who-portrait-box h-100">
              <div className="image-reveal-wrapper">
                <div className="image-reveal-mask" />
                <img
                  src="/images/fdh.jpg"
                  alt="UAE Business Team Skyline"
                  className="img-fluid image-reveal-img who-portrait-img"
                />
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <div className="who-portrait-box h-100">
              <div className="image-reveal-wrapper">
                <div className="image-reveal-mask" />
                <img
                  src="/images/yue.png"
                  alt="Executive Portrait"
                  className="img-fluid image-reveal-img who-portrait-img"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
            <p className="who-description mb-4 mb-lg-0 who-anim-elem anim-reveal">
            BVM Tech is a software development service company in the UAE, to help businesses automate processes, streamline operations, drive sustainable growth, and improve efficiency by delivering custom web development solutions. We build technology for your business needs to help UAE businesses to stay competitive in a rapidly changing digital development market. 


            </p>

            <div className="who-metrics-box who-anim-elem anim-reveal">
              <div className="row g-0">
                <div className="col-6 metric-column border-end border-secondary border-opacity-25">
                  <div className="metric-value text-white">
                    <span className="counter-value" data-target="17">
                      0
                    </span>
                    +
                  </div>
                  <div className="metric-label">Years of Digital Evolution</div>
                </div>
                <div className="col-6 metric-column">
                  <div className="metric-value text-white">
                    <span className="counter-value" data-target="500">
                      0
                    </span>
                    +
                  </div>
                  <div className="metric-label">Projects delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
