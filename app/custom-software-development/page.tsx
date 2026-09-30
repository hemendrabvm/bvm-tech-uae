import type { Metadata } from "next";
import DigitalEngineeringPageContent from "@/components/digital-engineering/DigitalEngineeringPageContent";

export const metadata: Metadata = {
  title: "Digital & Product Engineering | BVM Tech Limited",
  description:
    "BVM designs, builds and modernizes digital products and enterprise applications where packaged platforms alone are not enough.",
};

export default function Page() {
  return <DigitalEngineeringPageContent />;
}