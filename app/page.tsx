"use client";

import { useRef } from "react";
import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import WhatWeTransform from "@/components/home/WhatWeTransform";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Technology from "@/components/home/Technology";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GlobalCapability from "@/components/home/GlobalCapability";
import LatestRead from "@/components/home/LatestRead"; // <-- 1. Import LatestRead
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Scoped GSAP ScrollTrigger page hooks
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCounters(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      {/* Homepage 01: Hero */}
      <Hero />

      {/* Homepage 02: Trust & Credibility */}
      <Trusted />

      {/* Homepage 03: What are you trying to transform? */}
      <WhatWeTransform />

      {/* Homepage 04: From Strategy to sustained outcomes */}
      <Process />

      {/* Homepage 05: Technology grounded in Industry Content */}
      <Industries />

      {/* Homepage 06: Connected across the enterprise technology ecosystem */}
      <Technology />

      {/* Homepage 07: Outcomes speak louder than capabilities */}
      <FeaturedProjects />

      {/* Homepage 08: Local engagement. Global Capability. */}
      <GlobalCapability />

      {/* Homepage 09: Latest Read (Blogs & Insights) */}
      <LatestRead />

      {/* Final CTA: READY TO MOVE FORWARD? */}
      <CTA />
    </div>
  );
}