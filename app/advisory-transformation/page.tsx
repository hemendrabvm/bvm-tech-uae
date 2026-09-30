import type { Metadata } from "next";
import AdvisoryPageContent from "@/components/advisory/AdvisoryPageContent";

export const metadata: Metadata = {
  title: "Advisory & Transformation | Strategic Technology Consulting",
  description:
    "BVM helps organizations align business priorities, technology architecture and transformation decisions around measurable outcomes across the UAE and global markets.",
};

export default function AdvisoryTransformationPage() {
  return <AdvisoryPageContent />;
}