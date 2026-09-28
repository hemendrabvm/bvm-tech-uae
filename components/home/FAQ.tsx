"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "collapseOne",
    heading: "headingOne",
    q: "How can I Discuss My Project With Your Team?",
    a: "You can contact our team through our website, email, phone, or WhatsApp to discuss your project requirements. Once we understand your business goals, timeline, features, and budget, our team will guide you through the right solution, development approach, and next steps.",
  },
  {
    id: "collapseTwo",
    heading: "headingTwo",
    q: "How Will I Stay Updated on My Project’s Progress?",
    a: "We maintain clear and regular communication throughout the project. You will have a dedicated point of contact to discuss requirements, receive progress updates, review milestones, share feedback, and track the project status. Communication will be managed through email, WhatsApp, calls, or online meetings as per your preference.",
  },
  {
    id: "collapseThree",
    heading: "headingThree",
    q: "How Do Your Pricing, Payments, and Invoicing Work?",
    a: "Project pricing depends on your requirements, technology, features, and scope. After understanding your requirement, we provide a clear proposal covering the project scope, cost, estimated timeline, and payment milestones. Payments can be made through the available agreed payment methods, with invoices provided as applicable. Any additional requirements outside the approved scope will be discussed before development.",
  },
  {
    id: "collapseFour",
    heading: "headingFour",
    q: "What Are Your Project Terms, Timelines, and Processes?",
    a: "Before development begins, we clearly define the project scope, estimated timeline, revision process, responsibilities, payment terms, deliverables, and other applicable terms and conditions. This ensures both parties have a clear understanding of the project and helps keep development transparent and organised.",
  },
  {
    id: "collapseFive",
    heading: "headingFive",
    q: "What Support Do You Provide After My Website or Software Goes Live?",
    a: "Our support does not necessarily end after launch. We can provide post-launch technical support, security updates, bug fixing, maintenance, backups, performance improvements, and further feature development based on your requirements. You can also discuss an ongoing support and maintenance plan with our team.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section position-relative">
      <img
        src="/images/7.png"
        className="fq-glow fq-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <img
        src="/images/faqbg.png"
        className="faq-bg-glow"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <div className="faq-badge d-inline-flex align-items-center gap-2 mb-3 faq-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>WHAT IS IMPORTANT FOR YOU TO KNOW?</span>
              </div>

              <h2 className="faq-title text-white mb-4">
                <span className="faq-line-mask">
                  <span className="faq-line-inner anim-text-reveal">
                    Frequently Asked
                  </span>
                </span>
                <span className="faq-line-mask">
                  <span className="faq-line-inner anim-text-reveal">
                    Questions
                  </span>
                </span>
              </h2>
            </div>

            <div className="faq-image-wrapper mt-auto">
              <div className="image-reveal-wrapper">
                <div className="image-reveal-mask" />
                <img
                  src="/images/faq.png"
                  alt="Professional working at desk"
                  className="img-fluid image-reveal-img faq-img"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="accordion custom-faq-accordion" id="faqAccordion">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="accordion-item faq-item faq-anim-card anim-reveal"
                  >
                    <h2 className="accordion-header" id={item.heading}>
                      <button
                        className={`accordion-button faq-btn${isOpen ? "" : " collapsed"}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={item.id}
                        onClick={() => toggle(item.id)}
                      >
                        <span>{item.q}</span>

                        <svg
                          className="faq-chevron-svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </h2>

                    <div
                      id={item.id}
                      className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                      aria-labelledby={item.heading}
                    >
                      <div className="accordion-body faq-body-text">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}