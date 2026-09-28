"use client";

import FaqAccordion, { type FaqAccordionItem } from "./FaqAccordion";

const ITEMS: FaqAccordionItem[] = [
  {
    id: "aiCollapseOne",
    headingId: "aiHeadingOne",
    question: "Does BVM provide AI development services?",
    answer:
      "Yes. We provide AI-powered business development solutions including AI assistants, recommendation systems, intelligent search, document processing, predictive analytics and AI-enabled business applications.",
  },
  {
    id: "aiCollapseTwo",
    headingId: "aiHeadingTwo",
    question: "Can you automate repetitive business processes?",
    answer:
      "Yes. Our AI and business automation solutions can automate repetitive workflows such as data entry, approvals, customer support, document processing, notifications, reporting and system-to-system data transfer.",
  },
  {
    id: "aiCollapseThree",
    headingId: "aiHeadingThree",
    question: "Can AI be integrated into existing software?",
    answer:
      "Yes. AI can be integrated into existing ERP, CRM, HRMS, websites, mobile apps and SaaS platforms depending on your business requirements.",
  },
  {
    id: "aiCollapseFour",
    headingId: "aiHeadingFour",
    question: "Can you build an AI chatbot for my business?",
    answer:
      "Yes. We can develop AI chatbots for websites, customer portals and internal business systems to help automate customer support, lead qualification, FAQs, and information retrieval.",
  },
];

export default function FaqAI() {
  return (
    <section className="faq-category-section position-relative" id="faq-ai">
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
              <span>CATEGORY 03</span>
            </div>
            <h2 className="section-title text-white mb-0">
              AI Automation & Intelligent Solutions
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="office-subtext ind-anim-subtext text-bright-muted mb-0 anim-reveal">
              AI-powered assistants, process automation, chatbots and intelligent
              solutions integrated with your existing business systems.
            </p>
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="faq-visual-card spotlight-card ind-anim-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden anim-reveal">
              <div className="visual-header mb-4">
                <span className="badge-sub-title text-cyan mb-2 d-block">
                  AI AUTOMATION & INTELLIGENT SOLUTIONS
                </span>
                <h3 className="text-white mb-2">Intelligent Workflows</h3>
                <p className="text-bright-muted small mb-0">
                  Automate repetitive tasks, improve efficiency and enhance
                  customer experiences with AI-powered solutions.
                </p>
              </div>

              <div className="faq-visual-container position-relative rounded-4 overflow-hidden mt-3">
                <div className="image-reveal-wrapper">
                  <div className="image-reveal-mask" />
                  <img
                    src="/images/faq-ai.jpg"
                    alt="AI automation and intelligent solutions"
                    className="img-fluid image-reveal-img faq-showcase-img"
                  />
                </div>
                <div className="floating-glass-badge">
                  <span className="badge-number text-cyan">AI READY</span>
                  <span className="badge-label text-white">Chatbots & Automation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <FaqAccordion accordionId="aiFaqAccordion" items={ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
