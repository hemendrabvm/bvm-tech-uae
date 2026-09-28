"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { RefObject } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function usePageHeaderAnimation(
  sectionRef: RefObject<HTMLElement | null>
) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const section = sectionRef.current;
      if (!section) return;

      const isInitialLoading = document.body.classList.contains("loading");
      const startDelay = isInitialLoading ? 0.75 : 0.08;

      const tl = gsap.timeline({
        delay: startDelay,
        defaults: { ease: "power4.out" },
      });

      const badge = section.querySelector(".page-header-badge, .page-category-tag");
      if (badge) {
        tl.fromTo(badge, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.1);
      }

      const lines = section.querySelectorAll('[class*="-line-inner"]');
      if (lines.length) {
        gsap.set(lines, {
          y: "125%",
          rotateX: -28,
          opacity: 0,
          filter: "blur(14px)",
        });
        tl.to(
          lines,
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.3,
            stagger: 0.12,
            ease: "expo.out",
          },
          0.2
        );
      }

      const pill = section.querySelector(".header-inline-pill");
      if (pill) {
        tl.fromTo(
          pill,
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9, ease: "elastic.out(1, 0.55)" },
          0.5
        );
      }

      const summary = section.querySelector(".page-header-summary, .page-header-subtext");
      if (summary) {
        tl.fromTo(summary, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.5);
      }

      const tags = section.querySelectorAll(".header-trust-tag");
      if (tags.length) {
        tl.fromTo(
          tags,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 },
          0.65
        );
      }

      const showcase = section.querySelector(".header-visual-showcase");
      if (showcase) {
        tl.fromTo(showcase, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, 0.3);
      }

      const floats = section.querySelectorAll(".floating-header-pill");
      if (floats.length) {
        tl.fromTo(
          floats,
          { y: 16, opacity: 0, scale: 0.88 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "back.out(1.6)",
          },
          0.7
        );
      }

      const div = section.querySelector(".page-header-divider");
      if (div) {
        tl.fromTo(
          div,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1, ease: "power3.inOut" },
          0.85
        );
      }

      /* Continuous floating elements */
      if (showcase) {
        gsap.to(showcase, {
          y: -8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      const pillTop = section.querySelector(".pill-top");
      if (pillTop) {
        gsap.to(pillTop, {
          y: -10,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      const pillBL = section.querySelector(".pill-bottom-left");
      if (pillBL) {
        gsap.to(pillBL, {
          y: 10,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }
      const pillBR = section.querySelector(".pill-bottom-right");
      if (pillBR) {
        gsap.to(pillBR, {
          y: -7,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
    },
    { scope: sectionRef, dependencies: [pathname] }
  );
}