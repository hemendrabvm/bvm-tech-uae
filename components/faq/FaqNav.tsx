"use client";

import { useEffect, useState } from "react";

const PILLS = [
  { href: "#faq-pricing", label: "Pricing & Timelines" },
  { href: "#faq-compliance", label: "ERP, CRM & HRMS" },
  { href: "#faq-ai", label: "AI & Automation" },
  { href: "#faq-einvoicing", label: "UAE E-Invoicing & VAT" },
  { href: "#faq-ownership", label: "Code Ownership & Support" },
  { href: "#faq-onboarding", label: "Client Onboarding" },
] as const;

export default function FaqNav() {
  const [active, setActive] = useState("#faq-pricing");

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash) setActive(window.location.hash);
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section className="faq-nav-section position-relative">
      <div className="container position-relative z-10">
        <div className="faq-nav-wrapper p-2 rounded-pill">
          <div className="faq-filter-pills d-flex align-items-center justify-content-start justify-content-md-center flex-wrap gap-2">
            {PILLS.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className={`faq-pill-btn${active === pill.href ? " active" : ""}`}
                onClick={() => setActive(pill.href)}
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
