"use client";

import FaqAccordion, { type FaqAccordionItem } from "./FaqAccordion";

const ITEMS: FaqAccordionItem[] = [
  {
    id: "eiCollapseOne",
    headingId: "eiHeadingOne",
    question: "Can you develop UAE e-invoicing solutions?",
    answer:
      "Yes. BVM helps your businesses to develop or integrate e-invoicing workflows with ERP, accounting and billing systems according to applicable UAE requirements and the final technical specifications of the relevant authorities.",
  },
  {
    id: "eiCollapseTwo",
    headingId: "eiHeadingTwo",
    question: "Do your solutions support UAE VAT?",
    answer:
      "BVM ERP, invoicing solutions and accounting can be configured to support UAE VAT calculations, reporting and business workflows according to the client's requirements.",
  },
  {
    id: "eiCollapseThree",
    headingId: "eiHeadingThree",
    question: "Can you integrate e-invoicing with ERP or accounting software?",
    answer:
      "Yes. We can connect e-invoicing workflows with ERP, accounting, billing and business management systems, subject to the capabilities and requirements of the systems involved.",
  },
  {
    id: "eiCollapseFour",
    headingId: "eiHeadingFour",
    question: "Do your software solutions support multiple currencies?",
    answer:
      "Yes. Multi-currency functionality can be incorporated into ERP, CRM, accounting, e-commerce and other business software based on the project's requirements.",
  },
];

export default function FaqEinvoicing() {
  return (
    <section
      className="faq-category-section position-relative"
      id="faq-einvoicing"
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
              <span>CATEGORY 04</span>
            </div>
            <h2 className="section-title text-white mb-0">
              UAE E-Invoicing, VAT & Business Compliance
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              UAE VAT calculations, e-invoicing workflows, multi-currency support
              and compliance-ready accounting integrations.
            </p>
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-center flex-lg-row-reverse">
          <div className="col-12 col-lg-5">
            <div className="faq-visual-card spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  UAE COMPLIANCE
                </span>
                <h3 className="text-white mb-2">VAT & E-Invoicing Ready</h3>
                <p className="text-bright-muted small mb-0">
                  Built for UAE tax requirements with multi-currency support and
                  e-invoicing integration.
                </p>
              </div>

              <div className="faq-visual-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/faq-einvoicing.jpg"
                    alt="UAE VAT and e-invoicing compliance"
                    className="img-fluid image-reveal-img faq-showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-red">UAE VAT</span>
                  <span className="badge-label text-white">E-Invoicing Ready</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <FaqAccordion accordionId="einvoicingFaqAccordion" items={ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
