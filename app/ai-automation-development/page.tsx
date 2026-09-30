import type { Metadata } from "next";
import AIDataAutomationPageContent from "@/components/ai-automation/AIDataAutomationPageContent";

export const metadata: Metadata = {
  title: "AI, Data & Intelligent Automation | Enterprise AI Solutions",
  description:
    "BVM helps organizations build trusted data foundations, apply enterprise AI and automate work where technology can create measurable business value.",
};

export default function Page() {
  return <AIDataAutomationPageContent />;
}