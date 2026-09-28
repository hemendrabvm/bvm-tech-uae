import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Security at BVM TECH | Enterprise Data & Systems Protection",
  description:
    "Secure technology, responsible development, and trusted partnerships. Learn about BVM Tech's engineering security practices, data protection, and vulnerability reporting.",
};

const SECURITY_APPROACH = [
  "Secure application architecture",
  "Authentication and access controls",
  "Data encryption where appropriate",
  "Secure API development",
  "Input validation and secure coding",
  "Vulnerability and security testing",
  "Secure cloud configuration",
  "Backup and recovery measures",
  "Monitoring and access management",
];

export default function SecurityPage() {
  return (
    <div>
      <PageHeader
        badge="ENTERPRISE SECURITY"
        titleLines={["Security at BVM TECH"]}
        summary="Secure Technology. Responsible Development. Trusted Partnerships. Security considered throughout every stage of the software lifecycle."
        trustTags={["OWASP Standards", "AES-256 Encryption", "Role-Based Access"]}
      />

      <section className="legal-content-section position-relative py-5">
        <div className="container position-relative z-10">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="spotlight-card p-4 p-md-5 rounded-4 mb-4">
                <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-20">
                  <span className="badge-sub-title text-cyan mb-2 d-block">
                    OUR SECURITY PHILOSOPHY
                  </span>
                  <h2 className="text-white fs-3 fw-bold mb-3">
                    Secure Technology. Responsible Development. Trusted Partnerships.
                  </h2>
                  <p className="text-bright-muted mb-0 leading-relaxed">
                    At BVM TECH, security is considered throughout the software development lifecycle, from architecture and development to deployment and ongoing support.
                  </p>
                </div>

                {/* Section 1: Approach Grid */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-4 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shield-virus text-cyan fs-5" />
                    Our Security Approach
                  </h3>
                  <p className="text-bright-muted mb-3">
                    We implement appropriate security practices across our systems, which may include:
                  </p>
                  <div className="row g-3">
                    {SECURITY_APPROACH.map((practice, i) => (
                      <div className="col-12 col-md-6" key={i}>
                        <div
                          className="p-3 rounded-3 d-flex align-items-center gap-3 h-100"
                          style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
                        >
                          <i className="fa-solid fa-circle-check text-cyan" />
                          <span className="text-white small fw-medium">{practice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Data Protection */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-lock text-red fs-5" />
                    Data Protection
                  </h3>
                  <p className="text-bright-muted leading-relaxed mb-0">
                    We take reasonable technical and organisational measures to protect client and business information against unauthorised access, loss, misuse, or disclosure.
                  </p>
                </div>

                {/* Section 3: Security Incidents */}
                <div className="mb-5">
                  <h3 className="text-white fs-4 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-triangle-exclamation text-cyan fs-5" />
                    Security Incidents
                  </h3>
                  <p className="text-bright-muted leading-relaxed mb-0">
                    Where applicable, security incidents are assessed and managed according to our internal procedures and relevant legal and contractual requirements.
                  </p>
                </div>

                {/* Section 4: Responsible Disclosure */}
                <div className="p-4 rounded-3 border border-secondary border-opacity-25" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                  <h4 className="text-white fs-5 fw-bold mb-2">Report a Security Issue</h4>
                  <p className="text-bright-muted mb-3 small">
                    If you identify a potential security vulnerability in a BVM TECH website or service, please report it responsibly to our security response team:
                  </p>
                  <a
                    href="mailto:info@bvmtech.ae"
                    className="btn btn-consult-red rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                  >
                    <i className="fa-solid fa-shield-halved" />
                    <span>Security Email: info@bvmtech.ae</span>
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