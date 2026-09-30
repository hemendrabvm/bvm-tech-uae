import type { Metadata } from "next";
import TalentDeliveryPageContent from "@/components/talent-delivery/TalentDeliveryPageContent";

export const metadata: Metadata = {
  title: "Technology Talent & Global Delivery | BVM Tech Limited",
  description:
    "BVM helps organizations extend technology capacity through specialist resources, dedicated teams and flexible global delivery models.",
};

export default function TechnologyTalentDeliveryPage() {
  return <TalentDeliveryPageContent />;
}