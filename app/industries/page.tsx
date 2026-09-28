import type { Metadata } from "next";
import IndustriesPageContent from "@/components/industries/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries | Enterprise Software for UAE Sectors",
  description:
    "Purpose-built enterprise software for healthcare, fintech, real estate, retail, construction, education, logistics, and manufacturing across the UAE and Middle East.",
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
