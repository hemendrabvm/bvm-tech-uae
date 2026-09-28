"use client";

export default function Trusted() {
  return (
    <section className="trusted-section position-relative z-3">
      <div className="container position-relative z-10">
        <p className="trusted-label mb-4 text-center text-lg-start trusted-anim-label anim-reveal">
          Trust &amp; Credibility — Enterprise Clients &amp; Global Technology Ecosystems
        </p>

        {/* Desktop Enterprise Credibility Row */}
        <div className="d-none d-lg-flex justify-content-between align-items-center gap-3 trusted-desktop-row">
          <div className="trusted-logo-card trusted-anim-card anim-reveal">
            <img
              src="/images/l1.png"
              alt="Enterprise Technology Ecosystem Partner"
              className="trusted-logo-img"
            />
          </div>
          <div className="trusted-logo-card trusted-anim-card anim-reveal">
            <img
              src="/images/l2.png"
              alt="Enterprise Technology Ecosystem Partner"
              className="trusted-logo-img"
            />
          </div>
          <div className="trusted-logo-card trusted-anim-card anim-reveal">
            <img
              src="/images/l3.svg"
              alt="Enterprise Technology Ecosystem Partner"
              className="trusted-logo-img"
            />
          </div>
          <div className="trusted-logo-card trusted-anim-card anim-reveal">
            <img
              src="/images/l4.png"
              alt="Enterprise Technology Ecosystem Partner"
              className="trusted-logo-img"
            />
          </div>
          <div className="trusted-logo-card trusted-anim-card anim-reveal">
            <img
              src="/images/l5.png"
              alt="Enterprise Technology Ecosystem Partner"
              className="trusted-logo-img"
            />
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="d-lg-none trusted-mobile-marquee">
          <div className="marquee-track">
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l1.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l2.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l3.svg"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l4.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l5.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            {/* Repeated for seamless loop */}
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l1.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
            <div className="trusted-logo-wrapper">
              <img
                src="/images/l2.png"
                alt="Enterprise Technology Ecosystem Partner"
                className="trusted-logo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}