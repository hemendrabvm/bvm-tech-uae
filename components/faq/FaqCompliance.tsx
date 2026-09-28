"use client";

import FaqAccordion, { type FaqAccordionItem } from "./FaqAccordion";

const ITEMS: FaqAccordionItem[] = [
  {
    id: "cmCollapseOne",
    headingId: "cmHeadingOne",
    question: "Does BVM provide ERP software development in the UAE?",
    answer:
      "Yes. We provide software development custom ERP software tailored to business processes such as finance, inventory, sales, procurement, operations, HR and reporting.",
  },
  {
    id: "cmCollapseTwo",
    headingId: "cmHeadingTwo",
    question: "Can you develop a custom CRM system?",
    answer:
      "Yes. Our CRM development services can include lead management, customer records, sales pipelines, follow-ups, reports, notifications, integrations and automation.",
  },
  {
    id: "cmCollapseThree",
    headingId: "cmHeadingThree",
    question: "Can you develop HRMS software?",
    answer:
      "Yes. We can build HRMS solutions covering employee management, attendance, recruitment, leave management, payroll, performance management and HR reporting.",
  },
  {
    id: "cmCollapseFour",
    headingId: "cmHeadingFour",
    question: "Can you integrate TallyPrime with custom software?",
    answer:
      "Yes. We can develop custom software integrations between TallyPrime and business applications where technically supported, helping businesses connect accounting data with ERP, CRM, e-commerce and other operational systems.",
  },
  {
    id: "cmCollapseFive",
    headingId: "cmHeadingFive",
    question: "Can you develop accounting and invoicing software for UAE businesses?",
    answer:
      "Yes. We can build accounting, billing and invoicing solutions with features such as VAT calculations, multi-currency support, reporting and e-invoicing workflows, based on your compliance and business requirements.",
  },
];

export default function FaqCompliance() {
  return (
    <section
      className="faq-category-section position-relative"
      id="faq-compliance"
    >
      <img
        src="/images/1.png"
        className="section-bg-glow section-glow-left"
        alt="Background Glow"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row align-items-center mb-4 g-4">
          <div className="col-12 col-lg-6">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>CATEGORY 02</span>
            </div>
            <h2 className="section-title text-white mb-0">
              ERP, CRM, HRMS & Business Software
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              Custom ERP, CRM and HRMS software tailored to UAE business
              processes, TallyPrime, VAT and e-invoicing workflows.
            </p>
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-center flex-lg-row-reverse">
          <div className="col-12 col-lg-5">
            <div className="faq-visual-card spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  BUSINESS SOFTWARE
                </span>
                <h3 className="text-white mb-2">ERP, CRM & HRMS</h3>
                <p className="text-bright-muted small mb-0">
                  Custom enterprise systems built around your UAE workflows,
                  payroll, inventory and reporting needs.
                </p>
              </div>

              <div className="faq-visual-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/faq-compliance.jpg"
                    alt="ERP CRM HRMS business software"
                    className="img-fluid image-reveal-img faq-showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-red">TallyPrime</span>
                  <span className="badge-label text-white">
                    Integration Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <FaqAccordion accordionId="complianceFaqAccordion" items={ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
