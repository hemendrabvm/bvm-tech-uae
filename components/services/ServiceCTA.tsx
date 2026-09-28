"use client";

import Link from "next/link";

/** Same CTA markup as Home — matches static service pages */
export default function ServiceCTA() {
  return (
    <section className="cta-section text-center position-relative">
      <div className="cta-ambient-glow" />

      <div className="container position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="cta-badge d-inline-flex align-items-center gap-2 mb-4 cta-anim-badge anim-reveal">
              <span className="badge-dot" />
              <span>READY TO IMPROVE YOUR BUSINESS?</span>
            </div>

            <h2 className="cta-title text-white mb-4">
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  Let&apos;s Build the Right
                </span>
              </span>
              <span className="cta-line-mask">
                <span className="cta-line-inner anim-text-reveal">
                  Solution Together
                </span>
              </span>
            </h2>

            <p className="cta-subtext mb-5 cta-anim-subtext anim-reveal">
              Explain in short us about your business needs, within 24 hours our team will contact you with a clear proposal.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 cta-anim-btns anim-reveal">
              <Link
                href="/faq"
                className="btn btn-sky-blue d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
              >
                <span className="btn-text">Still have a question</span>
                <span className="arrow-icon-wrapper">
                  <svg
                    className="diagonal-arrow-svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                className="btn btn-consult-red d-inline-flex align-items-center justify-content-center px-4 py-3 rounded-pill fw-semibold magnetic-btn"
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
