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
        {/* Updated Label */}
        <p className="trusted-label mb-4 text-center text-lg-start trusted-anim-label anim-reveal">
          TRUSTED BY ORGANIZATIONS ACROSS INDUSTRIES
        </p>

        {/* Continuous Smooth Scrolling Marquee (Desktop & Mobile) */}
        <div className="trusted-marquee-container">
          <div className="trusted-marquee-track">
            {/* Set 1 */}
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                className="trusted-logo-card trusted-anim-card"
                key={`logo-1-${index}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="trusted-logo-img"
                />
              </div>
            ))}

            {/* Set 2 (Duplicates for seamless 100% infinite loop) */}
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                className="trusted-logo-card trusted-anim-card"
                key={`logo-2-${index}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="trusted-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}