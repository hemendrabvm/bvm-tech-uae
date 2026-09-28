import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { servicePages } from "@/data/servicePages";

const data = servicePages["ai-automation-development"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
};

export default function Page() {
  const { metaTitle: _t, metaDesc: _d, ...pageData } = data;
  return <ServicePage data={pageData} />;
}