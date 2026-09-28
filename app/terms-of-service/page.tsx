import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service | BVM Tech Limited",
  description:
    "Terms of Service governing the use of BVM Tech Limited website, software development solutions, and enterprise digital services.",
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        badge="LEGAL / AGREEMENT"
        titleLines={["Terms of Service"]}
        summary="The terms and conditions that govern your use of the BVM TECH website, digital platforms, and software engineering services."
        trustTags={["Service Agreement", "Website Terms", "IP Protection"]}
      />

      <section className="legal-content-section position-relative py-5">
        <div className="container position-relative z-10">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="spotlight-card p-4 p-md-5 rounded-4 mb-4">
                <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-20">
                  <span className="badge-sub-title text-cyan mb-2 d-block">
                    TERMS &amp; CONDITIONS
                  </span>
                  <h2 className="text-white fs-3 fw-bold mb-3">
                    Agreement to Terms
                  </h2>
                  <p className="text-bright-muted mb-0 leading-relaxed">
                    These Terms of Service govern your use of the BVM TECH website and services. By using our website, you agree to these terms.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-laptop-code text-cyan fs-5" />
                    Our Services
                  </h3>
                  <p className="text-bright-muted leading-relaxed mb-3">
                    BVM TECH provides software development, web and mobile app development, SaaS, AI, automation, CRM, ERP, cloud, and technology consulting services.
                  </p>
                  <p className="text-bright-muted leading-relaxed">
                    Specific project scope, pricing, timelines, deliverables, intellectual property, payment, support, and responsibilities will be defined in the applicable proposal, Statement of Work, or service agreement.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-ban text-red fs-5" />
                    Website Usage
                  </h3>
                  <p className="text-bright-muted mb-3">You agree not to:</p>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {[
                      "Misuse or disrupt our website",
                      "Attempt unauthorised access",
                      "Introduce malicious software",
                      "Copy or misuse our content",
                      "Use our services for unlawful activities",
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 text-bright-muted">
                        <i className="fa-solid fa-xmark text-red" style={{ fontSize: "14px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-copyright text-cyan fs-5" />
                    Intellectual Property
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    Unless otherwise agreed in writing, BVM TECH retains rights to its website content, branding, methodologies, and pre-existing technology.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-plug text-red fs-5" />
                    Third-Party Services
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    Third-party platforms, APIs, hosting, and software integrated into our solutions may be subject to their own terms and policies.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-rotate text-cyan fs-5" />
                    Changes &amp; Updates
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    We may update these Terms from time to time. Updated terms will be published on this page.
                  </p>
                </div>

                {/* Contact Box */}
                <div className="p-4 rounded-3 border border-secondary border-opacity-25" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                  <h4 className="text-white fs-5 fw-bold mb-2">Questions Regarding Terms?</h4>
                  <p className="text-bright-muted mb-3 small">
                    For inquiries or contractual clarifications, please get in touch with our team:
                  </p>
                  <a
                    href="mailto:info@bvmtech.ae"
                    className="btn btn-sm btn-outline-light rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                  >
                    <i className="fa-solid fa-envelope text-cyan" />
                    <span>info@bvmtech.ae</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}