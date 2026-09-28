"use client";

export default function ContactOffices() {
  return (
    <section className="offices-section position-relative">
      <div className="container position-relative z-10">
        <div className="row align-items-center mb-5 g-4 text-center text-lg-start">
          <div className="col-12 col-lg-6">
            <div className="who-badge d-inline-flex align-items-center gap-2 contact-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>OUR OFFICE</span>
            </div>
            <h2 className="office-title text-white mb-0">
              <span className="title-line-mask">
                <span className="title-line-inner anim-text-reveal">
                  Meet Us In Person in Dubai
                </span>
              </span>
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext contact-anim-subtext text-bright-muted mb-0 anim-reveal">
              Visit our headquarter at DIFC Innovation One, Dubai for face-to-face project discovery workshops and executive strategy sessions.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="office-card spotlight-card contact-anim-elem p-4 p-md-5 anim-reveal">
              <div className="office-card-header d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                <div>
                  <span className="office-badge-flag mb-2">UAE HEADQUARTER</span>
                  <h3 className="office-location-title text-white mb-0">
                    Dubai Office (DIFC)
                  </h3>
                </div>
                <div className="office-time-pill">GST (UTC+4)</div>
              </div>

              <p className="office-address text-bright-muted mb-4">
                <i className="fa-solid fa-location-dot text-red me-2" />
                DIFC Innovation One, Dubai, UAE
              </p>

              {/* Google Map with Direct Red Marker on Innovation One, DIFC */}
              <div className="dark-map-container rounded-3 overflow-hidden mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=Innovation+One,+DIFC,+Dubai,+United+Arab+Emirates&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DIFC Innovation One Dubai Office Location Map"
                />
              </div>

              <div className="office-specs-row row g-3">
                <div className="col-12 col-md-4">
                  <div className="spec-box h-100">
                    <div className="spec-label">Direct Contact</div>
                    <div className="spec-value text-white">
                      <a href="tel:+971556506799" className="text-white text-decoration-none">
                        +971 55 650 6799
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="spec-box h-100">
                    <div className="spec-label">Official Email</div>
                    <div className="spec-value text-white">
                      <a href="mailto:info@bvmtech.ae" className="text-white text-decoration-none">
                        info@bvmtech.ae
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="spec-box h-100">
                    <div className="spec-label">Support Hours</div>
                    <div className="spec-value text-white">
                      24/7 UAE Coverage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}