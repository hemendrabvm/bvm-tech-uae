"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SPOTLIGHT_SELECTOR = [
  ".spotlight-card",
  ".bvm-blog-card",
  ".choose-card",
  ".app-service-card",
  ".app-advantage-strip",
  ".process-stack-card",
  ".faq-item",
  ".testimonial-bubble",
  ".industry-card",
  ".presence-hub-card",
  ".mission-vision-card",
  ".metric-pod",
  ".team-card",
  ".project-stack-card",
].join(", ");

export default function GlobalEffects() {
  const barRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  // 1. 60fps Scroll Progress Bar
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  // 2. Delegated Radial Spotlight + Magnetic Button Micro-Interactions
  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reduceMotion.matches) return;

    let activeBtn: HTMLElement | null = null;
    let rafId = 0;
    let lastX = 0;
    let lastY = 0;
    let lastTarget: EventTarget | null = null;

    const flush = () => {
      rafId = 0;
      const el = lastTarget instanceof Element ? lastTarget : null;
      if (!el) return;

      // Update radial spotlight coordinates on nearest card
      const card = el.closest<HTMLElement>(SPOTLIGHT_SELECTOR);
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${(lastX - rect.left).toFixed(1)}px`);
        card.style.setProperty("--mouse-y", `${(lastY - rect.top).toFixed(1)}px`);
      }

      // Subtle magnetic pull on .magnetic-btn
      const btn = el.closest<HTMLElement>(".magnetic-btn");
      if (activeBtn && activeBtn !== btn) {
        activeBtn.style.transform = "";
      }
      if (btn) {
        activeBtn = btn;
        const rect = btn.getBoundingClientRect();
        const dx = ((lastX - (rect.left + rect.width / 2)) / Math.max(1, rect.width)) * 10;
        const dy = ((lastY - (rect.top + rect.height / 2)) / Math.max(1, rect.height)) * 6;
        btn.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
      } else if (activeBtn) {
        activeBtn.style.transform = "";
        activeBtn = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      lastTarget = e.target;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    const onPointerOut = () => {
      if (activeBtn) {
        activeBtn.style.transform = "";
        activeBtn = null;
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerOut);
      if (rafId) cancelAnimationFrame(rafId);
      if (activeBtn) activeBtn.style.transform = "";
    };
  }, [pathname]);

  return (
    <div className="bvm-scroll-progress" aria-hidden="true">
      <span className="bvm-scroll-progress-bar" ref={barRef} />
    </div>
  );
}