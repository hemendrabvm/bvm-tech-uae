"use client";

import { useMemo, useRef, useState } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BlogNav from "./BlogNav";
import BlogGrid from "./BlogGrid";
import CTA from "@/components/home/CTA";
import {
  filterListingPosts,
  type BlogFilterId,
} from "@/data/blogPosts";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function BlogPageContent() {
  const headerRef = useRef<HTMLDivElement>(null);
  const belowRef = useRef<HTMLDivElement>(null);
  const [filterId, setFilterId] = useState<BlogFilterId>("all");

  const filteredPosts = useMemo(
    () => filterListingPosts(filterId),
    [filterId]
  );

  // Header animation
  useAnimReveal(headerRef);
  useAnimTextReveal(headerRef);
  useImageReveals(headerRef);

  // Footer CTA animation
  useAnimReveal(belowRef);
  useAnimTextReveal(belowRef);
  useCtaGlow(belowRef);

  return (
    <>
      {/* 1. Header */}
      <div ref={headerRef}>
        <ServicePageHeader
          category="RESOURCES / TECH INSIGHTS & ARTICLES"
          titleLine1="Software Insights for"
          titleLine2="UAE Businesses."
          summary="Practical guides on cloud migration, AI-powered websites, React.js, Node.js, MERN stack, automation, and digital transformation for businesses across Dubai, Abu Dhabi, and the GCC."
          trustTags={[
            {
              icon: "fa-solid fa-file-lines text-cyan",
              text: "Tech Articles",
            },
            {
              icon: "fa-solid fa-robot text-red",
              text: "AI & Automation",
            },
            {
              icon: "fa-solid fa-cloud text-cyan",
              text: "Cloud & Web Dev",
            },
          ]}
          floatingPills={[
            {
              position: "pill-top",
              icon: "fa-solid fa-globe text-cyan",
              text: "UAE Tech Insights",
            },
            {
              position: "pill-bottom-left",
              icon: "fa-solid fa-check-double text-red",
              text: "Practical Guides",
            },
            {
              position: "pill-bottom-right",
              icon: "fa-solid fa-newspaper text-cyan",
              text: "Latest Articles",
            },
          ]}
          showcaseImg="/images/header-blog.jpg"
          showcaseAlt="Enterprise software insights"
          pillImg="/images/header-blog.jpg"
        />
      </div>

      {/* 2. Filter Navigation Pills */}
      <BlogNav active={filterId} onChange={setFilterId} />

      {/* 3. Unified All-in-One Articles Grid */}
      <BlogGrid posts={filteredPosts} />

      {/* 4. Bottom CTA */}
      <div ref={belowRef}>
        <CTA />
      </div>
    </>
  );
}