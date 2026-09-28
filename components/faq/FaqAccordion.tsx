"use client";

import { useState } from "react";
import FaqChevron from "./FaqChevron";

export type FaqAccordionItem = {
  id: string;
  headingId: string;
  question: string;
  answer: string;
};

/**
 * Accordion matching static faq.html:
 * - accordion custom-faq-accordion
 * - accordion-item faq-item spotlight-card
 * - accordion-button faq-btn + span + faq-chevron-svg
 * - accordion-body faq-body-text
 * One item open at a time (Bootstrap data-bs-parent behavior).
 * All start collapsed (matches static).
 */
export default function FaqAccordion({
  accordionId,
  items,
}: {
  accordionId: string;
  items: FaqAccordionItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="accordion custom-faq-accordion" id={accordionId}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            className="accordion-item faq-item spotlight-card ind-anim-card anim-reveal"
            key={item.id}
          >
            <h2 className="accordion-header" id={item.headingId}>
              <button
                className={`accordion-button faq-btn${isOpen ? "" : " collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={item.id}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <FaqChevron />
              </button>
            </h2>
            <div
              id={item.id}
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
              aria-labelledby={item.headingId}
            >
              <div className="accordion-body faq-body-text text-bright-muted">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
