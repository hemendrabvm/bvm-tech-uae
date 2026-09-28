"use client";

import { useRef } from "react";
import ServicePageHeader, {
  type ServicePageHeaderProps,
} from "./ServicePageHeader";
import ServiceCapabilities, {
  type CapabilityCard,
} from "./ServiceCapabilities";
import ServiceWhy, { type AdvantageStrip } from "./ServiceWhy";
import ServiceTechnology from "./ServiceTechnology";
import ServiceProcess, { type ProcessStage } from "./ServiceProcess";
import ServiceFAQ, { type FaqItem } from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import type { FeaturedProject } from "./ServiceFeaturedProjects";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCounters,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export type ServicePageData = {
  header: ServicePageHeaderProps;
  capabilities: {
    badge: string;
    titleLines: string[];
    cards: CapabilityCard[];
  };
  why: {
    badge: string;
    titleLines: string[];
    description: string;
    calloutValue: string;
    calloutLabel: string;
    strips: AdvantageStrip[];
  };
  projects?: {
    badge: string;
    titleLines: string[];
    projects: FeaturedProject[];
  };
  techTitleLines: string[];
  process: {
    badge: string;
    titleLines: string[];
    stages: ProcessStage[];
  };
  faq: {
    badge: string;
    items: FaqItem[];
  };
};

export default function ServicePage({ data }: { data: ServicePageData }) {
  const pageRef = useRef<HTMLDivElement>(null);
  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCounters(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      <ServicePageHeader {...data.header} />
      <ServiceCapabilities {...data.capabilities} />
      <ServiceWhy {...data.why} />
      <ServiceTechnology titleLines={data.techTitleLines} />
      <ServiceProcess {...data.process} />
      <ServiceFAQ {...data.faq} />
      <ServiceCTA />
    </div>
  );
}