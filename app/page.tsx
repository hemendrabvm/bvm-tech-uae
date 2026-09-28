"use client";

import { useRef } from "react";
import Hero from "@/components/home/Hero"; // Homepage 01: Hero
import Trusted from "@/components/home/Trusted"; // Homepage 02: Trust & Credibility
import WhatWeTransform from "@/components/home/WhatWeTransform"; // Homepage 03: What are you trying to transform?
import Process from "@/components/home/Process"; // Homepage 04: From Strategy to sustained outcomes (ADVISE -> TRANSFORM -> ENGINEER -> OPERATE -> SCALE)
import Industries from "@/components/home/Industries"; // Homepage 05: Technology grounded in Industry Content
import Technology from "@/components/home/Technology"; // Homepage 06: Connected across the enterprise technology ecosystem
import FeaturedProjects from "@/components/home/FeaturedProjects"; // Homepage 07: Outcomes speak louder than capabilities (5 Top Client Stories)
import GlobalCapability from "@/components/home/GlobalCapability"; // Homepage 08: Local engagement. Global Capability.
import CTA from "@/components/home/CTA"; // Final CTA: What are you trying to transform?
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

      {/* Final CTA */}
      <CTA />
    </div>
  );
}