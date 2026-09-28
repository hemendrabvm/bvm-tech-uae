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

export function useAboutTimeline(trackRef: RefObject<HTMLElement | null>) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const track = trackRef.current;
      if (!track) return;

      const laser =
        track.querySelector("#timeline-laser-line, .timeline-line-glow") ||
        (track.id === "timeline-laser-line" ? track : null);

      if (laser) {
        gsap.set(laser, { scaleY: 0, transformOrigin: "top center" });
        gsap.to(laser, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      track
        .querySelectorAll(".about-anim-timeline, .timeline-item")
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: (i % 2) * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
    },
    { scope: trackRef, dependencies: [pathname] }
  );
}