"use client";

import type { ProjectFilter } from "@/data/projects";
import { projectFilters } from "@/data/projects";

export default function ProjectsFilter({
  active,
  onChange,
}: {
  active: ProjectFilter;
  onChange: (id: ProjectFilter) => void;
}) {
  return (
    <section className="projects-nav-section position-relative">
      <div className="container position-relative z-10">
        <div className="projects-nav-wrapper p-2 rounded-pill">
          <div className="projects-filter-pills d-flex align-items-center justify-content-start justify-content-md-center flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`project-filter-btn${active === f.id ? " active" : ""}`}
                data-filter={f.id}
                onClick={() => onChange(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}