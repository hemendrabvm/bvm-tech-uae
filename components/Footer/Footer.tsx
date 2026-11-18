"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section position-relative">
      <div className="bvm-arch-grid" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-grid-layout">
          {/* Column 1: Brand Area */}
          <div className="footer-brand-block">
            <Link href="/" className="d-inline-block mb-3">
              <img
                src="/images/logo.svg"
                alt="BVM Tech Limited Logo"
                className="footer-logo"
                height={38}
              />
            </Link>

            <h4 className="footer-tagline">
              Enterprise Technology. Engineered Around Your Business.
            </h4>

            <p className="footer-desc">
              From strategy to scale, BVM brings together enterprise platforms, AI, digital
              engineering and global delivery to help organizations modernize technology and create
              measurable business outcomes.
            </p>

            <a
              href="/profile/BVM_Tech_Corporate_Deck_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-file-pdf" aria-hidden="true" />
              <span className="btn-text">View Company Profile</span>
              <span className="arrow-icon-wrapper ms-1">
                <svg
                  className="diagonal-arrow-svg"
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
            </a>
          </div>

          {/* Column 2: What We Do */}
          <div className="footer-capabilities-col">
            <h5 className="footer-col-title">What We Do</h5>
            <ul className="footer-links-list">
              <li><Link href="/advisory-transformation">Advisory &amp; Transformation</Link></li>
              <li><Link href="/enterprise-applications">Enterprise Applications</Link></li>
              <li><Link href="/ai-automation-development">AI, Data &amp; Intelligent Automation</Link></li>
              <li><Link href="/digital-product-engineering">Digital &amp; Product Engineering</Link></li>
              <li><Link href="/cloud-cybersecurity-integration">Cloud, Cybersecurity &amp; Integration</Link></li>
              <li><Link href="/managed-services">Managed Services</Link></li>
              <li><Link href="/technology-talent-delivery">Technology Talent &amp; Global Delivery</Link></li>
            </ul>
          </div>

          {/* Column 3: Platforms & Ecosystems */}
          <div>
            <h5 className="footer-col-title">Platforms &amp; Ecosystems</h5>
            <ul className="footer-links-list">
              <li><Link href="/crm-development">CRM &amp; Customer Experience</Link></li>
              <li><Link href="/erp-development">ERP &amp; Core Business Platforms</Link></li>
              <li><Link href="/enterprise-applications">ITSM &amp; Enterprise Workflow</Link></li>
              <li><Link href="/ai-automation-development">Data, Analytics &amp; AI</Link></li>
              <li><Link href="/ai-automation-development">Automation &amp; Low-Code</Link></li>
              <li><Link href="/web-development">Digital Experience</Link></li>
              <li><Link href="/enterprise-applications">Asset &amp; Field Operations</Link></li>
            </ul>
          </div>

          {/* Column 4: Explore BVM (Includes Blog) */}
          <div>
            <h5 className="footer-col-title">Explore BVM</h5>
            <ul className="footer-links-list">
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/projects">Client Success</Link></li>
              <li><Link href="/blog">Blog &amp; Insights</Link></li>
              <li><Link href="/about">About BVM</Link></li>
              <li><Link href="/about#who-we-are">Global Presence</Link></li>
              <li><Link href="/contact">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5: Legal & Trust */}
          <div>
            <h5 className="footer-col-title">Legal &amp; Trust</h5>
            <ul className="footer-links-list">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Use</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/privacy-policy">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 6: Dubai Headquarters Glass Card */}
          <div className="footer-hq-col">
            <div className="footer-hq-card">
              <div className="footer-hq-header">
                <h5 className="footer-hq-title">Dubai Headquarters</h5>
                <span className="footer-hq-live">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span>DIFC</span>
                </span>
              </div>

              <ul className="footer-hq-list">
                <li className="footer-hq-item">
                  <i className="fa-solid fa-building" aria-hidden="true" />
                  <span className="text-white fw-semibold">BVM Tech Limited</span>
                </li>
                <li className="footer-hq-item">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  <span>DIFC Innovation One, Dubai, United Arab Emirates</span>
                </li>
                <li className="footer-hq-item">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <a href="tel:+971556506799">+971 55 650 6799</a>
                </li>
                <li className="footer-hq-item">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <a href="mailto:info@bvmtech.ae">info@bvmtech.ae</a>
                </li>
                <li className="footer-hq-item">
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/company/bvm-tech-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bvm-footer-bottom">
          <p className="bvm-footer-copy">&copy; 2026 BVM Tech Limited DIFC. All rights reserved.</p>

          <div className="bvm-footer-meta">
            <div className="bvm-footer-footprint">
              <span className="dot-cyan" aria-hidden="true" />
              <span>UAE</span>
              <span className="sep">|</span>
              <span>United Kingdom</span>
              <span className="sep">|</span>
              <span>Global Engineering &amp; Delivery</span>
            </div>

            <div className="bvm-footer-socials">
              <a
                href="https://www.linkedin.com/company/bvm-tech-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="BVM Tech Limited on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/971556506799"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp BVM Tech Limited"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}