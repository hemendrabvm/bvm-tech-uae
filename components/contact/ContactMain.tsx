"use client";

import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";

export default function ContactMain() {
  return (
    <section className="contact-main-section position-relative">
      <img
        src="/images/6.png"
        className="section-bg-glow section-glow-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-7">
            <div className="contact-form-card spotlight-card contact-anim-elem p-4 p-md-5 anim-reveal">
              <div className="form-card-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  PROPOSAL REQUEST BUILDER
                </span>
                <h3 className="form-card-title text-white mb-1">
                  Tell Us What You&apos;re Building
                </h3>
                <p className="form-card-desc text-bright-muted mb-0">
                  Select your preferences below to help us assign the right
                  solution architect.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
