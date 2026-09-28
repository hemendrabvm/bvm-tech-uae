"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { type DependencyList, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isConnectedElement(el: Element | null | undefined): el is HTMLElement {
  return !!el && el instanceof HTMLElement && el.isConnected;
}

/** 
 * Generic .anim-reveal — matches sections() in animations.js
 */
export function useAnimReveal(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const els = gsap.utils.toArray<HTMLElement>(".anim-reveal", root);
      els.forEach((el) => {
        if (!isConnectedElement(el)) return;
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Kinetic text line reveals — matches lineReveal() in animations.js
 */
export function useAnimTextReveal(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const els = gsap.utils.toArray<HTMLElement>(".anim-text-reveal", root);
      if (!els.length) return;

      const groups: HTMLElement[][] = [];
      const seen = new Set<HTMLElement>();

      els.forEach((el) => {
        if (seen.has(el)) return;
        const parent =
          (el.closest("h1, h2, h3, h4, .section-title, .choose-title, .who-title, .faq-title, .cta-title, .process-title, .awards-title, .testimonials-title, .page-header-title") ||
          el.parentElement) as HTMLElement;

        const siblings = parent
          ? gsap.utils.toArray<HTMLElement>(".anim-text-reveal", parent)
          : [el];

        const pack: HTMLElement[] = [];
        siblings.forEach((s) => {
          if (seen.has(s)) return;
          seen.add(s);
          pack.push(s);
        });

        if (pack.length) {
          groups.push(pack);
        }
      });

      groups.forEach((pack) => {
        if (!pack.length || !isConnectedElement(pack[0])) return;
        gsap.to(pack, {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.25,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: pack[0],
            start: "top 88%",
            once: true,
          },
        });
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Image reveal system (mask swipe + zoom) — matches images() in animations.js
 */
export function useImageReveals(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const wraps = gsap.utils.toArray<HTMLElement>(".image-reveal-wrapper", root);

      wraps.forEach((wrap) => {
        if (!isConnectedElement(wrap)) return;
        const mask = wrap.querySelector<HTMLElement>(".image-reveal-mask");
        const img = wrap.querySelector<HTMLElement>(".image-reveal-img, img");
        if (!mask) return;

        gsap.set(mask, { scaleY: 1, transformOrigin: "bottom center" });
        if (img) gsap.set(img, { scale: 1.12 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 88%",
            once: true,
          },
        });
        tl.to(mask, { scaleY: 0, duration: 1.05, ease: "power3.inOut" });
        if (img) {
          tl.to(img, { scale: 1, duration: 1.25, ease: "power2.out" }, "-=0.9");
        }
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Numerical counter tweening — matches counters() in animations.js
 */
export function useCounters(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const els = gsap.utils.toArray<HTMLElement>(".counter-value, .proj-counter", root);
      if (!els.length) return;

      if (prefersReducedMotion()) {
        els.forEach((el) => {
          const t = parseFloat(el.getAttribute("data-target") || "");
          if (!isNaN(t)) {
            el.textContent = t % 1 !== 0 ? t.toFixed(2) : String(Math.ceil(t));
          }
        });
        return;
      }

      els.forEach((el) => {
        if (!isConnectedElement(el)) return;
        const target = parseFloat(el.getAttribute("data-target") || "");
        if (isNaN(target)) return;

        const obj = { v: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                if (!el.isConnected) return;
                el.textContent =
                  target % 1 !== 0 ? obj.v.toFixed(2) : String(Math.ceil(obj.v));
              },
            });
          },
        });
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Process sticky cards stack — matches processStack() in animations.js
 */
export function useProcessStack(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const cards = gsap.utils.toArray<HTMLElement>(".process-stack-card", root);
      cards.forEach((card, i) => {
        if (!isConnectedElement(card)) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Advantage strips horizontal entrance — matches appServices() in animations.js
 */
export function useAppServices(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const strips = gsap.utils.toArray<HTMLElement>(".app-advantage-strip", root);
      strips.forEach((strip, i) => {
        if (!isConnectedElement(strip)) return;
        gsap.fromTo(
          strip,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: strip,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * CTA ambient glow scrub — matches sections() in animations.js
 */
export function useCtaGlow(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const glow = root.querySelector<HTMLElement>(".cta-ambient-glow");
      const section = root.querySelector<HTMLElement>(".cta-section") || root;
      if (!glow || !isConnectedElement(section)) return;

      gsap.to(glow, {
        scale: 1.35,
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom center",
          scrub: 1.1,
        },
      });
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}

/** 
 * Service cards hover/click accordion — matches serviceCards() in animations.js
 */
export function useServiceCards(scopeRef: RefObject<HTMLElement | null>, deps: DependencyList = []) {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!isConnectedElement(root)) return;

      const cards = gsap.utils.toArray<HTMLElement>(".service-card", root);
      if (!cards.length) return;

      const cleanups: (() => void)[] = [];

      cards.forEach((card) => {
        const onEnter = () => {
          if (window.innerWidth < 992) return;
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
        };
        const onClick = () => {
          if (window.innerWidth >= 992) return;
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
        };
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("click", onClick);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("click", onClick);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: scopeRef, dependencies: [pathname, ...deps] }
  );
}