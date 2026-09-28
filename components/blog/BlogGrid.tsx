"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BlogPost } from "@/data/blogPosts";
import BlogCard from "./BlogCard";
import {
  useAnimReveal,
  useAnimTextReveal,
  useImageReveals,
} from "@/animations/usePageAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const gridRef = useRef<HTMLElement>(null);

  const animKey = useMemo(
    () => posts.map((p) => p.slug).join("|") || "empty",
    [posts]
  );

  useAnimReveal(gridRef, [animKey]);
  useAnimTextReveal(gridRef, [animKey]);
  useImageReveals(gridRef, [animKey]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [animKey]);

  return (
    <section
      ref={gridRef}
      className="articles-grid-section position-relative"
      id="all-articles"
    >
      <img
        src="/images/3.png"
        className="section-bg-glow section-glow-left"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 software-anim-badge anim-reveal">
              <img src="/images/h.png" alt="" />
              <span>LATEST ARTICLES</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="header-line-mask">
                <span className="header-line-inner anim-text-reveal">
                  Latest Articles &amp; Insights
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {posts.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-bright-muted mb-0">
                No articles in this category yet. Try another topic or view all
                articles.
              </p>
            </div>
          ) : (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </section>
  );
}