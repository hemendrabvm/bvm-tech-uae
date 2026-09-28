import type { Metadata } from "next";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects & Case Studies | BVM Tech Limited UAE",
  description:
    "A curated showcase of bespoke ERPs, AI automation platforms, mobile apps, and custom web portals delivered for Dubai, Abu Dhabi, and Middle East market leaders.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
