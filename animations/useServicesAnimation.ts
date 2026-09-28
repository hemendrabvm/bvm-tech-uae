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

export function useServicesAnimation(sectionRef: RefObject<HTMLElement | null>) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const servicesSection = sectionRef.current;
      if (!servicesSection) return;

      const curtain = servicesSection.querySelector(".services-curtain-reveal");
      const svcLines = servicesSection.querySelectorAll('[class*="-line-inner"]');
      if (svcLines.length) {
        gsap.set(svcLines, {
          y: "125%",
          rotateX: -28,
          opacity: 0,
          filter: "blur(14px)",
        });
      }

      const stl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 78%",
          once: true,
        },
      });

      stl.fromTo(
        servicesSection.querySelectorAll(".services-anim-badge, .section-badge"),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 }
      );

      if (svcLines.length) {
        stl.to(
          svcLines,
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.25,
            stagger: 0.12,
            ease: "expo.out",
          },
          "-=0.45"
        );
      }

      stl.fromTo(
        servicesSection.querySelectorAll(".services-anim-subtext, .services-anim-btn"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        "-=0.65"
      );

      if (curtain) {
        stl.fromTo(
          curtain,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.3,
            ease: "power4.inOut",
          },
          "-=0.85"
        );
      }
    },
    { scope: sectionRef, dependencies: [pathname] }
  );
}