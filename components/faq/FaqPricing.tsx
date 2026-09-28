"use client";

import FaqAccordion, { type FaqAccordionItem } from "./FaqAccordion";

const ITEMS: FaqAccordionItem[] = [
  {
    id: "prCollapseOne",
    headingId: "prHeadingOne",
    question: "How long does it take to develop custom software?",
    answer:
      "To develop a custom software timeline depends on the project's features, integrations and complexity. Most custom software, ERP and CRM projects are delivered through structured Agile development sprints, allowing you to review progress throughout the project.",
  },
  {
    id: "prCollapseTwo",
    headingId: "prHeadingTwo",
    question: "How much does custom software development cost in the UAE?",
    answer:
      "To develop a custom software the cost depends on your business requirements, technology stack, integrations and project scope. After understanding your requirements, BVM provides a clear project proposal and transparent quotation.",
  },
  {
    id: "prCollapseThree",
    headingId: "prHeadingThree",
    question: "Do you offer fixed-price software development?",
    answer:
      "Yes, We offer, for projects with clearly defined requirements, we can provide fixed-price software development with agreed deliverables, milestones and timelines.",
  },
  {
    id: "prCollapseFour",
    headingId: "prHeadingFour",
    question: "Can I track the progress of my software project?",
    answer:
      "Yes, you can track each step of your software project. Our development team provides regular updates, demonstrations and staging builds so you can review features and provide feedback during development.",
  },
  {
    id: "prCollapseFive",
    headingId: "prHeadingFive",
    question: "Can BVM develop an MVP or SaaS product?",
    answer:
      "Yes, We develop MVPs, SaaS platforms and scalable business applications for startups and established companies. Our solutions can be designed to scale as your users and business requirements grow.",
  },
];

export default function FaqPricing() {
  return (
    <section
      className="faq-category-section position-relative"
      id="faq-pricing"
    >
      <img
        src="/images/2.png"
        className="section-bg-glow section-glow-right"
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
              <span>CATEGORY 01</span>
            </div>
            <h2 className="section-title text-white mb-0">
              Pricing, Timelines & Development Process
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              Transparent answers on project timelines, costs, fixed-price
              delivery, progress tracking and MVP or SaaS development.
            </p>
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="faq-visual-card spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  AGILE DELIVERY MODEL
                </span>
                <h3 className="text-white mb-2">2-Week Sprint Cadence</h3>
                <p className="text-bright-muted small mb-0">
                  Demonstrable working software delivered at the end of every
                  two-week sprint cycle.
                </p>
              </div>

              <div className="faq-visual-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/faq-pricing.jpg"
                    alt="Agile Sprint Planning"
                    className="img-fluid image-reveal-img faq-showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-cyan">FIXED COST</span>
                  <span className="badge-label text-white">Zero Scope Creep</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <FaqAccordion accordionId="pricingFaqAccordion" items={ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
