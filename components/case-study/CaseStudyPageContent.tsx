"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import CaseStudyChallenge from "./CaseStudyChallenge";
import CaseStudySolution from "./CaseStudySolution";
import CaseStudyImpact from "./CaseStudyImpact";
import CaseStudyListingFallback from "./CaseStudyListingFallback";
import NextCaseStudy from "./NextCaseStudy";
import CTA from "@/components/home/CTA";
import type { Project } from "@/data/projects";
import { getNextProject } from "@/data/projects";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function CaseStudyPageContent({
  project,
}: {
  project: Project;
}) {
  const pageRef = useRef<HTMLDivElement>(null);
  const next = getNextProject(project.slug);
  const detail = project.caseStudy;

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCounters(pageRef);
  useCtaGlow(pageRef);

  const headerCategory =
    detail?.headerCategory ??
    `CASE STUDY / ${project.indexCode.split(" / ")[1] || "PROJECT"}`;
  const titleLine1 =
    detail?.titleLine1 ?? project.name.split("—")[0]?.trim() ?? project.name;
  const titleLine2 =
    detail?.titleLine2 ??
    project.name.split("—")[1]?.trim() ??
    "Enterprise Delivery.";
  const summary = detail?.summary ?? project.description;
  const trustTags = detail?.trustTags ?? [
    {
      icon: "fa-solid fa-layer-group text-cyan",
      text: project.indexCode,
    },
    {
      icon: "fa-solid fa-code text-red",
      text: project.technologies.slice(0, 2).join(" & "),
    },
  ];
  const floatingPills = detail?.floatingPills ?? [
    {
      position: "pill-top",
      icon: "fa-solid fa-bolt text-cyan",
      text: project.floatingBadge.num,
    },
    {
      position: "pill-bottom-left",
      icon: "fa-solid fa-chart-line text-red",
      text: project.stats[0]?.label ?? "",
    },
    {
      position: "pill-bottom-right",
      icon: "fa-solid fa-check text-cyan",
      text: project.stats[1]?.label ?? "",
    },
  ];

  return (
    <div ref={pageRef}>
      <ServicePageHeader
        category={headerCategory}
        titleLine1={titleLine1}
        titleLine2={titleLine2}
        summary={summary}
        trustTags={trustTags}
        floatingPills={floatingPills}
        showcaseImg={project.image}
        showcaseAlt={project.imageAlt}
        pillImg={project.image}
      />

      {detail ? (
        <>
          <CaseStudyChallenge detail={detail} />
          <CaseStudySolution detail={detail} liveUrl={project.liveUrl} />
          <CaseStudyImpact detail={detail} />
        </>
      ) : (
        <CaseStudyListingFallback project={project} />
      )}

      {next && next.slug !== project.slug && <NextCaseStudy project={next} />}
      <CTA />
    </div>
  );
}