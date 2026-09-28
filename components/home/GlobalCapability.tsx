"use client";

import Link from "next/link";

export default function GlobalCapability() {
  return (
    <section className="global-reach-section position-relative" aria-labelledby="gr-title">
      {/* Background Ambient Glows */}
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
        {/* Header Block matching the site's design */}
        <div className="reach-head">
          <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 who-anim-elem anim-reveal">
            <img src="/images/h.png" alt="Icon" />
            <span>GLOBAL PRESENCE</span>
          </div>

          <h2 id="gr-title" className="who-title text-white mb-3">
            <span className="services-line-mask">
              <span className="services-line-inner anim-text-reveal">
                Local engagement.
              </span>
            </span>
            <span className="services-line-mask">
              <span className="services-line-inner anim-text-reveal">
                Global Capability.
              </span>
            </span>
          </h2>

          <p className="services-subtext mx-auto anim-reveal">
            On-ground teams in the UAE and UK, backed by engineering and delivery that scales across borders.
          </p>
        </div>

        {/* 3-Column Stage */}
        <div className="reach-stage">
          {/* Left Column: Regional On-Ground Hubs */}
          <div className="reach-col">
            {/* UAE */}
            <article className="reach-card spotlight-card anim-reveal">
              <div className="reach-top">
                <span className="reach-ico text-red">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <div>
                  <h3 className="reach-card-title">UAE</h3>
                  <p className="reach-sub">Close to clients and decisions</p>
                </div>
              </div>
              <ul className="reach-chips">
                <li className="reach-chip-item">Strategy</li>
                <li className="reach-chip-item">Advisory</li>
                <li className="reach-chip-item">Client engagement</li>
                <li className="reach-chip-item">GCC solution consulting</li>
              </ul>
            </article>

            {/* United Kingdom */}
            <article className="reach-card spotlight-card anim-reveal">
              <div className="reach-top">
                <span className="reach-ico text-cyan">
                  <i className="fa-solid fa-globe" />
                </span>
                <div>
                  <h3 className="reach-card-title">United Kingdom</h3>
                  <p className="reach-sub">A European base for growth</p>
                </div>
              </div>
              <ul className="reach-chips">
                <li className="reach-chip-item">International presence</li>
                <li className="reach-chip-item">Business engagement</li>
              </ul>
            </article>
          </div>

          {/* Center Column: Globe PNG Image */}
          <div className="reach-mid anim-reveal">
            <img
              src="/images/globe.png"
              alt="BVM Tech Global Reach Connected Globe"
              className="reach-globe-img"
            />
          </div>

          {/* Right Column: Global Engineering & Delivery Modes */}
          <div className="reach-col">
            {/* Global Engineering & Delivery */}
            <article className="reach-card spotlight-card anim-reveal">
              <div className="reach-top">
                <span className="reach-ico text-cyan">
                  <i className="fa-solid fa-code" />
                </span>
                <div>
                  <h3 className="reach-card-title">Global Engineering &amp; Delivery</h3>
                  <p className="reach-sub">One delivery engine for every region</p>
                </div>
              </div>
              <ul className="reach-chips">
                <li className="reach-chip-item">Engineering</li>
                <li className="reach-chip-item">Enterprise platforms</li>
                <li className="reach-chip-item">AI &amp; Data</li>
                <li className="reach-chip-item">Cloud</li>
                <li className="reach-chip-item">Quality Engineering</li>
                <li className="reach-chip-item">Managed services</li>
              </ul>
            </article>

            {/* Transformation Projects & Models */}
            <article className="reach-card spotlight-card anim-reveal">
              <div className="reach-top">
                <span className="reach-ico text-red">
                  <i className="fa-solid fa-arrows-rotate" />
                </span>
                <div>
                  <h3 className="reach-card-title">Transformation Projects</h3>
                  <p className="reach-sub">Flexible ways to extend your team</p>
                </div>
              </div>
              <ul className="reach-chips">
                <li className="reach-chip-item">Managed Services</li>
                <li className="reach-chip-item">Dedicated Teams</li>
                <li className="reach-chip-item">Specialist Technology Resources</li>
              </ul>
            </article>
          </div>
        </div>

        {/* Action Buttons using BVM Master Theme Buttons */}
        {/* <div className="reach-cta-row anim-reveal">
          <Link
            href="/services"
            className="btn btn-sky-blue rounded-pill fw-semibold magnetic-btn d-inline-flex align-items-center justify-content-center px-4 py-3"
          >
            <span className="btn-text">Explore Services</span>
            <span className="arrow-icon-wrapper">
              <svg
                className="diagonal-arrow-svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 12L12 2M12 2H4M12 2V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="btn-sheen" />
          </Link>

          <Link
            href="/contact"
            className="btn btn-consult-red rounded-pill fw-semibold magnetic-btn d-inline-flex align-items-center justify-content-center px-4 py-3"
          >
            <span className="btn-text">Book Free Consultation</span>
            <span className="arrow-icon-wrapper">
              <svg
                className="diagonal-arrow-svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 12L12 2M12 2H4M12 2V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="btn-sheen" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}