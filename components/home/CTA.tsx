"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section text-center position-relative">
      <div className="cta-ambient-glow" />

      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="cta-badge d-inline-flex align-items-center gap-2 mb-4 cta-anim-badge anim-reveal">
              <span className="badge-dot" />
              <span>TRANSFORMATION ADVISORY &amp; EXECUTION</span>
            </div>

            <h2 className="cta-title text-white mb-4">
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  What Are You Trying
                </span>
              </span>
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  to Transform?
                </span>
              </span>
            </h2>

            <p className="cta-subtext mb-5 cta-anim-subtext anim-reveal">
              Connect with BVM Tech&apos;s senior advisors to discuss your enterprise systems modernization, AI strategy, ecosystem integration, and technology delivery roadmap.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 cta-anim-btns anim-reveal">
              {/* Primary CTA: Talk to an Advisor */}
              <Link
                href="/contact"
                className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Talk to an Advisor</span>
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

              {/* Secondary CTA: Contact BVM */}
              <Link
                href="/contact"
                className="btn btn-sky-blue d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Contact BVM</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}