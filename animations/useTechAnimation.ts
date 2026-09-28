"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useTechAnimation(sectionRef: RefObject<HTMLElement | null>) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const section = sectionRef.current;
      if (!section) return;

      const orbit = section.querySelector(".tech-anim-orbit");
      const lines = section.querySelectorAll('[class*="-line-inner"]');
      if (orbit) gsap.set(orbit, { scale: 0.65, opacity: 0 });
      if (lines.length) {
        gsap.set(lines, {
          y: "125%",
          rotateX: -28,
          opacity: 0,
          filter: "blur(14px)",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        section.querySelectorAll(".tech-anim-badge"),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 }
      ).to(
        lines,
        {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.25,
          stagger: 0.12,
          ease: "expo.out",
        },
        "-=0.5"
      );

      if (orbit) {
        tl.to(
          orbit,
          { scale: 1, opacity: 1, duration: 1.25, ease: "power4.out" },
          "-=0.7"
        );
      }
    },
    { scope: sectionRef, dependencies: [pathname] }
  );
}