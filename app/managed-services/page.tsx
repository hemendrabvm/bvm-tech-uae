import type { Metadata } from "next";
import ManagedServicesPageContent from "@/components/managed-services/ManagedServicesPageContent";

export const metadata: Metadata = {
  title: "Managed Services | Keep Critical Technology Performing",
  description:
    "BVM supports, operates and continuously improves enterprise applications, platforms, cloud environments and digital services.",
};

export default function ManagedServicesPage() {
  return <ManagedServicesPageContent />;
}