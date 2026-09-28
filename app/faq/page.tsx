import type { Metadata } from "next";
import FaqPageContent from "@/components/faq/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ | Client Onboarding, Pricing & Compliance | BVM",
  description:
    "Clear answers on agile sprints, fixed-price quotes, UAE regulatory compliance, NDA protection, source code ownership, and client onboarding with BVM Tech Limited.",
};

export default function FaqPage() {
  return <FaqPageContent />;
}
