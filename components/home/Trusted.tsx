"use client";

const PARTNER_LOGOS = [
  { src: "/images/l1.png", alt: "Espace Real Estate" },
  { src: "/images/l2.png", alt: "Kelbak" },
  { src: "/images/l3.svg", alt: "Tail Travel" },
  { src: "/images/l4.png", alt: "Just Pack" },
  { src: "/images/l5.png", alt: "Kings Furniture" },
  { src: "/images/l6.png", alt: "Realty Guru" },
];

export default function Trusted() {
  return (
    <section className="trusted-section position-relative z-3">
      <div className="container position-relative z-10">
        <div className="trusted-header-bar anim-reveal">
          <p className="trusted-label trusted-anim-label">
            TRUSTED BY ORGANIZATIONS ACROSS INDUSTRIES
          </p>
          <span className="trusted-region-pill">
            <span className="dot" aria-hidden="true" />
            <span>UAE &bull; UNITED KINGDOM &bull; GLOBAL</span>
          </span>
        </div>

        <div className="trusted-marquee-container anim-reveal">
          <div className="trusted-marquee-track">
            {PARTNER_LOGOS.map((logo, index) => (
              <div className="trusted-logo-card trusted-anim-card" key={`logo-1-${index}`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="trusted-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            {PARTNER_LOGOS.map((logo, index) => (
              <div
                className="trusted-logo-card trusted-anim-card trusted-logo-dup"
                key={`logo-2-${index}`}
                aria-hidden="true"
              >
                <img
                  src={logo.src}
                  alt=""
                  className="trusted-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}