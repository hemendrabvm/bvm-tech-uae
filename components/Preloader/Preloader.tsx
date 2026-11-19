"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SEGMENTS = 28;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  const elRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("loading");
      setVisible(false);
      return;
    }

    document.body.classList.add("loading");

    const progress = { value: 0 };
    const segments = barRef.current?.children;
    let hideTimer: ReturnType<typeof setTimeout>;

    const tween = gsap.to(progress, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",

      onUpdate: () => {
        const value = Math.round(progress.value);
        const totalActive = Math.floor((value / 100) * SEGMENTS);

        if (segments) {
          Array.from(segments).forEach((segment, index) => {
            segment.classList.toggle("active", index < totalActive);
            segment.classList.toggle("current", value < 100 && index === totalActive);
          });
        }

        if (pctRef.current) {
          pctRef.current.textContent = String(value);
        }
      },

      onComplete: () => {
        elRef.current?.classList.add("loaded");
        document.body.classList.remove("loading");

        hideTimer = setTimeout(() => {
          setVisible(false);
        }, 1150);
      },
    });

    return () => {
      tween.kill();
      clearTimeout(hideTimer);
      document.body.classList.remove("loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" ref={elRef} role="status" aria-live="polite" aria-label="Loading BVM Tech">
      <div className="preloader-atmosphere" aria-hidden="true" />

      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <img src="/images/logo.svg" alt="BVM Tech Limited Logo" className="preloader-logo" />
        </div>

        <div className="preloader-loader">
          <div className="preloader-track" ref={barRef} aria-hidden="true">
            {Array.from({ length: SEGMENTS }).map((_, index) => (
              <span key={index} className="preloader-segment" />
            ))}
          </div>

          <div className="preloader-info">
            <div className="preloader-status">
              <span className="preloader-status-dot" aria-hidden="true" />
              <span>LOADING EXPERIENCE</span>
            </div>

            <div className="preloader-count">
              <span ref={pctRef}>0</span>
              <span className="preloader-percent-symbol">%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="preloader-footer" aria-hidden="true">
        <span>ENTERPRISE TECHNOLOGY &amp; ENGINEERING</span>
        <span>BVM TECH LIMITED</span>
      </div>
    </div>
  );
}