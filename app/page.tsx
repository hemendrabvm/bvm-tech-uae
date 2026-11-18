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
import LatestRead from "@/components/home/LatestRead";
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useStickyStack,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useStickyStack(pageRef);
  useCounters(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      <Hero />
      <Trusted />
      <WhatWeTransform />
      <Process />
      <Industries />
      <Technology />
      <FeaturedProjects />
      <GlobalCapability />
      <LatestRead />
      <CTA />
    </div>
  );
}