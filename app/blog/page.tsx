import type { Metadata } from "next";
import BlogPageContent from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog & Tech Insights | BVM Tech Limited UAE",
  description:
    "Architectural deep-dives, UAE VAT compliance guides, AI automation strategies, and enterprise mobile insights written by BVM's senior Dubai engineering team.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
