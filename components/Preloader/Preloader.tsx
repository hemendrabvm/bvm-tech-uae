"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Preloader runs ONLY on the very first client load of the site.
 * It does NOT re-run on client-side route changes.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const elRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (typeof window === "undefined") return;

    // Reduced motion: skip preloader
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("loading");
      setVisible(false);
      return;
    }

    document.body.classList.add("loading");

    const obj = { v: 0 };
    const bar = barRef.current;
    const pct = pctRef.current;
    const el = elRef.current;

    gsap.to(obj, {
      v: 100,
      duration: 0.85,
      ease: "power2.inOut",
      onUpdate: () => {
        const n = Math.round(obj.v);
        if (bar) bar.style.width = n + "%";
        if (pct) pct.textContent = n + "%";
      },
      onComplete: () => {
        if (el) el.classList.add("loaded");
        document.body.classList.remove("loading");
        setTimeout(() => {
          setVisible(false);
        }, 360);
      },
    });
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" ref={elRef}>
      <div className="preloader-content text-center">
        <div className="preloader-logo-wrapper mb-4">
          <img
            src="/images/logo.svg"
            alt="BVM Logo"
            className="preloader-logo"
          />
        </div>
        <div className="preloader-bar-wrapper">
          <div className="preloader-bar" ref={barRef} />
        </div>
        <div className="preloader-percentage" id="preloader-percentage" ref={pctRef}>
          0%
        </div>
      </div>
    </div>
  );
}
