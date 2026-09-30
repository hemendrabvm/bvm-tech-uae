import type { Metadata } from "next";
import CloudCybersecurityPageContent from "@/components/cloud-cybersecurity/CloudCybersecurityPageContent";

export const metadata: Metadata = {
  title: "Cloud, Cybersecurity & Integration | BVM Tech Limited",
  description:
    "BVM helps organizations build resilient cloud foundations, strengthen security and integrate applications, platforms and data across the technology landscape.",
};

export default function CloudCybersecurityPage() {
  return <CloudCybersecurityPageContent />;
}