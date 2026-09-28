"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import FaqNav from "@/components/faq/FaqNav";
import FaqPricing from "@/components/faq/FaqPricing";
import FaqCompliance from "@/components/faq/FaqCompliance";
import FaqAI from "@/components/faq/FaqAI";
import FaqEinvoicing from "@/components/faq/FaqEinvoicing";
import FaqOwnership from "@/components/faq/FaqOwnership";
import FaqOnboarding from "@/components/faq/FaqOnboarding";
import CTA from "@/components/home/CTA";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function FaqPageContent() {
  const pageRef = useRef<HTMLDivElement>(null);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCtaGlow(pageRef);

  return (
    <div ref={pageRef}>
      <ServicePageHeader
        category="RESOURCES / CLIENT FAQ & ONBOARDING"
        titleLine1="Software Development:"
        titleLine2="Everything You Need to Know with BVM"
        summary="Get transparent answers about our custom software development, ERP, CRM, AI automation, SaaS, HRMS, mobile apps, cloud solutions and UAE business technology services. We provide businesses across the UAE build secure, scalable and future-ready digital solutions."
        trustTags={[
          {
            icon: "fa-solid fa-file-signature text-cyan",
            text: "100% Fixed-Price Quotes",
          },
          {
            icon: "fa-solid fa-bolt text-red",
            text: "2-Week Agile Sprints",
          },
          {
            icon: "fa-solid fa-code-branch text-cyan",
            text: "100% IP Code Transfer",
          },
        ]}
        floatingPills={[
          {
            position: "pill-top",
            icon: "fa-solid fa-clock text-cyan",
            text: "2-Week Agile Sprints",
          },
          {
            position: "pill-bottom-left",
            icon: "fa-solid fa-shield text-red",
            text: "Zero Scope Creep",
          },
          {
            position: "pill-bottom-right",
            icon: "fa-solid fa-file-contract text-cyan",
            text: "Mutual NDA First",
          },
        ]}
        showcaseImg="/images/header-faq.jpg"
        showcaseAlt="BVM Client FAQ"
        pillImg="/images/header-faq.jpg"
      />
      <FaqNav />
      <FaqPricing />
      <FaqCompliance />
      <FaqAI />
      <FaqEinvoicing />
      <FaqOwnership />
      <FaqOnboarding />
      <CTA />
    </div>
  );
}
