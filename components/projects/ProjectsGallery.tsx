"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project, ProjectFilter } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import {
  useAnimReveal,
  useImageReveals,
} from "@/animations/usePageAnimations";

gsap.registerPlugin(ScrollTrigger);

/**
 * Gallery owns its own GSAP scope.
 * When `filter` changes, React replaces cards, then useGSAP (deps=[filter])
 * reverts the previous gallery context and re-inits reveals on the new DOM.
 * A local ScrollTrigger.refresh() after layout updates positions for
 * sections below the gallery — not a global route-change refresh.
 */
export default function ProjectsGallery({
  projects,
  filter,
}: {
  projects: Project[];
  filter: ProjectFilter;
}) {
  const galleryRef = useRef<HTMLElement>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [projects, filter]
  );

  // Stable dependency key for animation re-init
  const animKey = useMemo(
    () => visible.map((p) => p.slug).join("|") || "empty",
    [visible]
  );

  useAnimReveal(galleryRef, [animKey]);
  useImageReveals(galleryRef, [animKey]);

  // After filtered layout commits, refresh ST measurements for the rest of the page.
  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [animKey]);

  return (
    <section
      ref={galleryRef}
      className="projects-gallery-section position-relative"
    >
      <div className="container position-relative z-10">
        <div className="d-flex flex-column gap-5">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {visible.length === 0 && (
            <p className="text-bright-muted text-center py-5">
              No projects in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
