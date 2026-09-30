import type { Metadata } from "next";
import EnterpriseApplicationsPageContent from "@/components/enterprise-applications/EnterpriseApplicationsPageContent";

export const metadata: Metadata = {
  title: "Enterprise Applications | Modernize Core Business Systems",
  description:
    "BVM helps organizations evaluate, implement, customize, integrate, modernize and support enterprise platforms around business requirements.",
};

export default function EnterpriseApplicationsPage() {
  return <EnterpriseApplicationsPageContent />;
}