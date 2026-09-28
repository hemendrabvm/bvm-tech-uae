"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import ContactMain from "./ContactMain";
import ContactOnboarding from "./ContactOnboarding";
import ContactOffices from "./ContactOffices";
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function ContactPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      <ServicePageHeader
        category="CONTACT / START A PROJECT"
        titleLine1="Let’s Build your Next"
        titleLine2="big Advantage."
        summary="Share your Project details below. BVM sign mutual NDAs upfront and deliver fixed-price proposals for software development, ERP, HRMS, AI Automation, SaaS, Tally Prime and E-Invoice solutions within 24 business hours."
        trustTags={[
          {
            icon: "fa-solid fa-clock text-cyan",
            text: "24h Proposal SLA",
          },
          {
            icon: "fa-solid fa-file-signature text-red",
            text: "Mutual NDA Upfront",
          },
          {
            icon: "fa-solid fa-tags text-cyan",
            text: "Fixed-Price Quotes",
          },
        ]}
        floatingPills={[
          {
            position: "pill-top",
            icon: "fa-solid fa-bolt text-cyan",
            text: "24h Response SLA",
          },
          {
            position: "pill-bottom-left",
            icon: "fa-solid fa-building text-red",
            text: "DIFC Innovation One, Dubai",
          },
          {
            position: "pill-bottom-right",
            icon: "fa-solid fa-lock text-cyan",
            text: "Mutual NDA First",
          },
        ]}
        showcaseImg="/images/tw.jpeg"
        showcaseAlt="Contact BVM Tech Limited"
        pillImg="/images/tw.jpeg"
      />
      <ContactMain />
      <ContactOnboarding />
      <ContactOffices />
      <CTA />
    </div>
  );
}