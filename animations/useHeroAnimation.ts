"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { RefObject } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useHeroAnimation(heroRef: RefObject<HTMLElement | null>) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const heroSection = heroRef.current;
      if (!heroSection) return;

      const lines = heroSection.querySelectorAll(".hero-line-inner");
      const badge = heroSection.querySelectorAll(".hero-anim-badge");
      const subtext = heroSection.querySelectorAll(".hero-anim-subtext");
      const btns = heroSection.querySelectorAll(".hero-anim-btn");
      const pill = heroSection.querySelectorAll(".skyline-pill");
      const banner = heroSection.querySelector(".hero-banner-img");

      if (lines.length) {
        gsap.set(lines, {
          y: "125%",
          rotateX: -28,
          opacity: 0,
          filter: "blur(14px)",
        });
      }

      const isInitialLoading = document.body.classList.contains("loading");
      const startDelay = isInitialLoading ? 0.75 : 0.08;

      const tl = gsap.timeline({
        delay: startDelay,
        defaults: { ease: "power4.out" },
      });

      if (badge.length) {
        tl.fromTo(
          badge,
          { rotateX: -90, opacity: 0 },
          { rotateX: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          0
        );
      }

      if (lines.length) {
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
          "-=0.6"
        );
      }

      if (pill.length) {
        tl.fromTo(
          pill,
          { scale: 0.35, rotate: -8 },
          { scale: 1, rotate: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
          "-=0.9"
        );
      }

      if (subtext.length) {
        tl.fromTo(
          subtext,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.8"
        );
      }

      if (btns.length) {
        tl.fromTo(
          btns,
          { y: 28, opacity: 0, scale: 0.88 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.7"
        );
      }

      if (banner) {
        tl.fromTo(
          banner,
          { x: 48, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.3 },
          "-=1.1"
        ).add(() => {
          gsap.to(banner, {
            y: -16,
            duration: 3.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    },
    { scope: heroRef, dependencies: [pathname] }
  );
}