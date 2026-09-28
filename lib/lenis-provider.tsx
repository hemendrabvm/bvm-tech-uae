"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Executes BEFORE child components' useGSAP/useLayoutEffect hooks run.
 * Guarantees scroll is at (0,0) before any ScrollTrigger evaluates trigger positions,
 * while preventing any visible jump on the previous page.
 */
function RouteScrollReset({
  lenisRef,
}: {
  lenisRef: React.RefObject<Lenis | null>;
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Reset browser viewport and Lenis instance to top (0,0) immediately upon route mount
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }

    // 2. Clear old page scroll positions from GSAP
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.update();
  }, [pathname, lenisRef]);

  return null;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // 1. Initialize Lenis Smooth Scroll instance ONCE
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduce-motion");
      return;
    }

    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // 2. Recalculate ScrollTrigger start/end points after page assets/fonts settle
  useEffect(() => {
    const timer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);
    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return (
    <>
      <RouteScrollReset lenisRef={lenisRef} />
      {children}
    </>
  );
}