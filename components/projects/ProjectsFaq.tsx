"use client";

import { useState } from "react";
import FaqChevron from "@/components/faq/FaqChevron";

// Selected 6 key questions from the main FAQ knowledge base
const PROJECT_PAGE_FAQS = [
  {
    q: "How long does it take to develop custom software?",
    a: "To develop a custom software timeline depends on the project's features, integrations and complexity. Most custom software, ERP and CRM projects are delivered through structured Agile development sprints, allowing you to review progress throughout the project.",
  },
  {
    q: "How much does custom software development cost in the UAE?",
    a: "To develop a custom software the cost depends on your business requirements, technology stack, integrations and project scope. After understanding your requirements, BVM provides a clear project proposal and transparent quotation.",
  },
  {
    q: "Do you offer fixed-price software development?",
    a: "Yes, We offer, for projects with clearly defined requirements, we can provide fixed-price software development with agreed deliverables, milestones and timelines.",
  },
  {
    q: "Can I track the progress of my software project?",
    a: "Yes, you can track each step of your software project. Our development team provides regular updates, demonstrations and staging builds so you can review features and provide feedback during development.",
  },
  {
    q: "Can BVM develop an MVP or SaaS product?",
    a: "Yes, We develop MVPs, SaaS platforms and scalable business applications for startups and established companies. Our solutions can be designed to scale as your users and business requirements grow.",
  },
  {
    q: "Do you provide support and maintenance after delivery of the project?",
    a: "Yes, Absolutely we provide the maintenance and support service after launch or delivery of the project. Our service doesn't end after launch; we provide software maintenance, feature enhancements, cloud support, ongoing development, technical support, security updates, and performance optimization.",
  },
];

export default function ProjectsFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="projects-faq-section position-relative">
      <div className="container position-relative z-10">
        <div className="row align-items-center mb-4 g-4">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-title text-white mb-0">
              Project Delivery, Pricing &amp; Sprints FAQ
            </h2>
          </div>
        </div>

        <div className="accordion custom-faq-accordion" id="projectsFaqAccordion">
          {PROJECT_PAGE_FAQS.map((item, i) => {
            const id = `projFaqCollapse${i}`;
            const headingId = `projFaqHeading${i}`;
            const isOpen = openId === id;
            return (
              <div
                className="accordion-item faq-item spotlight-card ind-anim-card anim-reveal"
                key={item.q}
              >
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button faq-btn${isOpen ? "" : " collapsed"}`}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : id)}
                  >
                    <span>{item.q}</span>
                    <FaqChevron />
                  </button>
                </h2>
                <div
                  id={id}
                  className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                  aria-labelledby={headingId}
                >
                  <div className="accordion-body faq-body-text text-bright-muted">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}