"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import IndustryNav from "@/components/industries/IndustryNav";
import IndustrySpotlight from "@/components/industries/IndustrySpotlight";
import SolutionsAcross from "@/components/industries/SolutionsAcross";
import SecurityScalability from "@/components/industries/SecurityScalability";
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function IndustriesPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      {/* Top Page Header */}
      <ServicePageHeader
        category="INDUSTRIES / SECTOR EXPERTISE"
        titleLine1="Software Solutions Built for"
        titleLine2="UAE &amp; Global Industries"
        summary="Industry-focused software development solutions designed for business requirements, regulatory frameworks, and operational workflows across Dubai, Abu Dhabi, the UAE, and global markets."
        trustTags={[
          {
            icon: "fa-solid fa-building-columns text-cyan",
            text: "Central Bank Fintech",
          },
          {
            icon: "fa-solid fa-hospital text-red",
            text: "DHA / DOH Health",
          },
          {
            icon: "fa-solid fa-file-invoice-dollar text-cyan",
            text: "FTA VAT E-Invoicing",
          },
        ]}
        floatingPills={[
          {
            position: "pill-top",
            icon: "fa-solid fa-industry text-cyan",
            text: "10 Core Sectors",
          },
          {
            position: "pill-bottom-left",
            icon: "fa-solid fa-calculator text-red",
            text: "FTA VAT Certified",
          },
          {
            position: "pill-bottom-right",
            icon: "fa-solid fa-shield-halved text-cyan",
            text: "100% Data Sovereignty",
          },
        ]}
        showcaseImg="/images/header-industries.jpg"
        showcaseAlt="UAE Industry & Real Estate"
        pillImg="/images/i2.png"
      />

      {/* Filter Navigation Pills */}
      <IndustryNav />

      {/* All 10 Industry Spotlights */}
      <IndustrySpotlight />

      {/* Solutions We Build Across Industries */}
      <SolutionsAcross />

      {/* Enterprise Security & Scalability */}
      <SecurityScalability />

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}