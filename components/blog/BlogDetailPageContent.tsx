"use client";

import { useRef } from "react";
import ServicePageHeader from "@/components/services/ServicePageHeader";
import BlogArticleHero from "./BlogArticleHero";
import BlogArticleBody from "./BlogArticleBody";
import BlogRelated from "./BlogRelated";
import CTA from "@/components/home/CTA";
import type { BlogPost } from "@/data/blogPosts";
import { getRelatedPosts } from "@/data/blogPosts";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
  useCtaGlow,
} from "@/animations/usePageAnimations";

export default function BlogDetailPageContent({ post }: { post: BlogPost }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const related = getRelatedPosts(post.slug, 3);

  useAnimReveal(pageRef);
  useAnimTextReveal(pageRef);
  useImageReveals(pageRef);
  useCtaGlow(pageRef);

  const cleanTitle = post.title.replace(/^\d+\.\s*/, "");
  const titleParts = cleanTitle.split(/[:–—-]/);
  const titleLine1 =
    titleParts.length > 1
      ? titleParts[0].trim()
      : cleanTitle.split(" ").slice(0, 5).join(" ");
  const titleLine2 =
    titleParts.length > 1
      ? titleParts.slice(1).join(" ").trim()
      : cleanTitle.split(" ").slice(5).join(" ") || "Enterprise Insights.";

  return (
    <div ref={pageRef}>
      <ServicePageHeader
        category={`ARTICLE / ${post.categoryLabel}`}
        titleLine1={titleLine1}
        titleLine2={titleLine2 || "Enterprise Insights."}
        summary={post.excerpt}
        trustTags={[
          {
            icon: "fa-solid fa-clock text-cyan",
            text: post.readTime,
          },
          {
            icon: "fa-solid fa-calendar text-red",
            text: post.date,
          },
          {
            icon: "fa-solid fa-user text-cyan",
            text: `${post.author} (${post.authorRole})`,
          },
        ]}
        floatingPills={[
          {
            position: "pill-top",
            icon: "fa-solid fa-book-open text-cyan",
            text: post.categoryLabel,
          },
          {
            position: "pill-bottom-left",
            icon: "fa-solid fa-clock text-red",
            text: post.readTime,
          },
          {
            position: "pill-bottom-right",
            icon: "fa-solid fa-calendar text-cyan",
            text: post.date,
          },
        ]}
        showcaseImg={post.image}
        showcaseAlt={post.imageAlt}
        pillImg={post.image}
      />

      <BlogArticleHero post={post} />
      <BlogArticleBody body={post.body} />

      <BlogRelated posts={related} />
      <CTA />
    </div>
  );
}