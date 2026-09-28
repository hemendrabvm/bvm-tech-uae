"use client";

import { useRef, useState } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGallery from "./ProjectsGallery";
import PortfolioImpact from "./PortfolioImpact";
import ProjectsFaq from "./ProjectsFaq";
import CTA from "@/components/home/CTA";
import { projects, type ProjectFilter } from "@/data/projects";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";

/**
 * Page-level animations cover header + sections below the gallery only.
 * Gallery animations are owned by ProjectsGallery (re-init on filter change).
 * Gallery sits outside belowRef so filter remounts never leave impact/FAQ/CTA
 * stuck at opacity 0 from a page-wide fromTo that ran only once.
 */
export default function ProjectsPageContent() {
  const headerRef = useRef<HTMLDivElement>(null);
  const belowRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<ProjectFilter>("all");

  // Header: once
  useAnimReveal(headerRef);
  useAnimTextReveal(headerRef);
  useImageReveals(headerRef);

  // Impact / FAQ / CTA: once (stable DOM; not affected by filter)
  useAnimReveal(belowRef);
  useAnimTextReveal(belowRef);
  useCounters(belowRef);
  useCtaGlow(belowRef);

  return (
    <>
      <div ref={headerRef}>
        <ServicePageHeader
          category="PORTFOLIO / FEATURED WORK"
          titleLine1="Software That Moved the Numbers"
          titleLine2="for UAE Enterprises."
          summary="A curated showcase of bespoke ERPs, AI automation platforms, mobile apps, and custom web portals delivered for Dubai, Abu Dhabi, and Middle East market leaders."
          trustTags={[
            {
              icon: "fa-solid fa-layer-group text-cyan",
              text: "500+ GCC Projects",
            },
            {
              icon: "fa-solid fa-coins text-red",
              text: "AED 10B+ Handled",
            },
            {
              icon: "fa-solid fa-chart-line text-cyan",
              text: "35%+ Avg ROI Increase",
            },
          ]}
          floatingPills={[
            {
              position: "pill-top",
              icon: "fa-solid fa-bolt text-cyan",
              text: "50% Faster Velocity",
            },
            {
              position: "pill-bottom-left",
              icon: "fa-solid fa-server text-red",
              text: "99.99% Core Uptime",
            },
            {
              position: "pill-bottom-right",
              icon: "fa-solid fa-arrow-trend-up text-cyan",
              text: "4.8M+ Transactions",
            },
          ]}
          showcaseImg="/images/p1.png"
          showcaseAlt="Featured Portfolio Work"
          pillImg="/images/p1.png"
        />
      </div>

      <ProjectsFilter active={filter} onChange={setFilter} />

      {/* Own animation scope — re-inits when filter changes */}
      <ProjectsGallery projects={projects} filter={filter} />

      <div ref={belowRef}>
        <PortfolioImpact />
        <ProjectsFaq />
        <CTA />
      </div>
    </>
  );
}
