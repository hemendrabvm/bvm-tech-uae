"use client";

import { blogNavPills, type BlogFilterId } from "@/data/blogPosts";

type BlogNavProps = {
  active: BlogFilterId;
  onChange: (id: BlogFilterId) => void;
};

export default function BlogNav({ active, onChange }: BlogNavProps) {
  return (
    <section className="faq-nav-section position-relative">
      <div className="container position-relative z-10">
        <div className="faq-nav-wrapper p-2 rounded-pill">
          <div
            className="faq-filter-pills d-flex align-items-center justify-content-start justify-content-md-center flex-wrap gap-2"
            role="tablist"
            aria-label="Filter articles by topic"
          >
            {blogNavPills.map((pill) => {
              const isActive = active === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`faq-pill-btn${isActive ? " active" : ""}`}
                  onClick={() => onChange(pill.id)}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
