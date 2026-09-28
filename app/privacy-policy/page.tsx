import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | BVM Tech Limited",
  description:
    "Privacy Policy for BVM Tech Limited. Learn how we collect, use, and protect your personal information in accordance with DIFC Data Protection Law No. 5 of 2020.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        badge="LEGAL / COMPLIANCE"
        titleLines={["Privacy Policy"]}
        summary="How we handle and protect your personal information responsibly in accordance with applicable UAE and DIFC data protection requirements."
        trustTags={["DIFC Law No. 5 of 2020", "Data Protection", "Zero Data Selling"]}
      />

      <section className="legal-content-section position-relative py-5">
        <div className="container position-relative z-10">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="spotlight-card p-4 p-md-5 rounded-4 mb-4">
                <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-20">
                  <span className="badge-sub-title text-cyan mb-2 d-block">
                    DIFC DATA PROTECTION
                  </span>
                  <h2 className="text-white fs-3 fw-bold mb-3">
                    Privacy Commitment at BVM TECH
                  </h2>
                  <p className="text-bright-muted mb-0 leading-relaxed">
                    At BVM TECH, we respect your privacy and are committed to protecting your personal information. As a DIFC-registered technology and digital transformation company, we handle personal data responsibly and in accordance with applicable data protection requirements, including the DIFC Data Protection Law No. 5 of 2020, where applicable.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-database text-cyan fs-5" />
                    Information We Collect
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    We may collect your name, email, phone number, company details, project requirements, and technical information when you interact with our website or services.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-gears text-red fs-5" />
                    How We Use Your Information
                  </h3>
                  <p className="text-bright-muted mb-3">Your information may be used to:</p>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {[
                      "Respond to enquiries and requests",
                      "Provide software and technology services",
                      "Manage projects and client relationships",
                      "Improve our website and services",
                      "Provide support and maintenance",
                      "Meet legal and contractual obligations",
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 text-bright-muted">
                        <i className="fa-solid fa-circle-check text-cyan" style={{ fontSize: "14px" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shield-halved text-cyan fs-5" />
                    Data Protection
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    We use appropriate technical and organisational measures to protect personal information from unauthorised access, loss, misuse, or disclosure.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-cloud text-red fs-5" />
                    Third-Party Services
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    We may use trusted technology, hosting, cloud, payment, analytics, and communication providers where necessary to deliver our services.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-user-shield text-cyan fs-5" />
                    Your Rights
                  </h3>
                  <p className="text-bright-muted leading-relaxed">
                    Subject to applicable law, you may have rights to access, correct, delete, restrict, or object to the processing of your personal data.
                  </p>
                </div>

                {/* Contact Box */}
                <div className="p-4 rounded-3 border border-secondary border-opacity-25" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                  <h4 className="text-white fs-5 fw-bold mb-2">Privacy Inquiries</h4>
                  <p className="text-bright-muted mb-3 small">
                    If you have questions about this policy or wish to exercise your data rights, please contact our privacy officer:
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