import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Case Study Not Found | BVM" };
  }
  return {
    title: `${project.shortName} Case Study | BVM Tech Limited UAE`,
    description: project.description,
    openGraph: {
      title: `${project.shortName} Case Study | BVM`,
      description: project.description,
      images: project.image.startsWith("http")
        ? [project.image]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudyPageContent project={project} />;
}
