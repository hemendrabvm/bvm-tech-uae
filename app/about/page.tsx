import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About BVM | Architecting Digital Vision into Business Reality",
  description:
    "BVM Tech Limited is a Dubai, UAE-based software development company that helps businesses across the UAE and GCC build smarter solutions. Expertise in custom software, ERP, HRMS, CRM, SaaS, AI Automation, and cloud.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
