"use client";

import { useEffect, useState } from "react";

const PILLS = [
  { href: "#fintech", label: "Finance & Fintech" },
  { href: "#events", label: "Event and Exhibitions" },
  { href: "#hospitality", label: "Hospitality & Tourism" },
  { href: "#construction", label: "Construction & Engineering" },
  { href: "#healthcare", label: "Healthcare" },
  { href: "#real-estate", label: "Real Estate" },
  { href: "#logistics", label: "Logistics & Supply Chain" },
  { href: "#retail", label: "Retail & E-commerce" },
  { href: "#education", label: "Education & EdTech" },
  { href: "#manufacturing", label: "Manufacturing & Production" },
];

export default function IndustryNav() {
  const [active, setActive] = useState("#fintech");

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash) setActive(window.location.hash);
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section className="industry-nav-section position-relative">
      <div className="container position-relative z-10">
        <div className="industry-nav-wrapper p-2 rounded-pill">
          <div className="industry-nav-pills d-flex align-items-center justify-content-start justify-content-md-center flex-wrap gap-2">
            {PILLS.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className={`nav-pill-btn${active === pill.href ? " active" : ""}`}
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