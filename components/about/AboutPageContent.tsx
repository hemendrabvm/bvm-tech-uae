"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import AboutWho from "@/components/about/AboutWho";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutMission from "@/components/about/AboutMission";
import AboutNumbers from "@/components/about/AboutNumbers";
import ChooseUs from "@/components/home/ChooseUs";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";
import { useAboutTimeline } from "@/animations/useAboutTimeline";

export default function AboutPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCounters(pageRef);
  useCtaGlow(pageRef);
  useAboutTimeline(timelineRef);

  return (
    <div ref={pageRef}>
      <ServicePageHeader
        category="COMPANY / ABOUT BVM"
        titleLine1="Turning Digital Vision into"
        titleLine2="Business Reality"
        summary="BVM Tech Limited is a Dubai, UAE-based enterprise software development company that helps businesses across the UAE and GCC build smarter digital solutions. Our expertise spans custom software development, ERP, HRMS, CRM, SaaS, AI Automation, and cloud solutions."
        trustTags={[
          {
            icon: "fa-solid fa-building text-cyan",
            text: "Dubai HQ (DIFC Innovation One)",
          },
          {
            icon: "fa-solid fa-award text-red",
            text: "17+ Years Tech Experience", // Updated to 17+
          },
          {
            icon: "fa-solid fa-users-gear text-cyan",
            text: "50+ Senior Engineers", // 50+ Team
          },
        ]}
        floatingPills={[
          {
            position: "pill-top",
            icon: "fa-solid fa-location-dot text-cyan",
            text: "DIFC Innovation One, Dubai",
          },
          {
            position: "pill-bottom-left",
            icon: "fa-solid fa-trophy text-red",
            text: "17+ Years Experience", // Updated to 17+
          },
          {
            position: "pill-bottom-right",
            icon: "fa-solid fa-shield-halved text-cyan",
            text: "Dedicated Expert Team",
          },
        ]}
        showcaseImg="/images/who-2.png"
        showcaseAlt="BVM Dubai Headquarter & Engineering Team"
        pillImg="/images/who-2.png"
      />
      <AboutWho />
      <AboutTimeline trackRef={timelineRef} />
      <AboutMission />
      <ChooseUs />
      <AboutNumbers />
      <Process badgeText="HOW WE WORK" className="pb-100" />
      <CTA />
    </div>
  );
}