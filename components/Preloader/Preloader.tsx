"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS = 1200;
const MAX_MS = 4500;
const EXIT_MS = 1240;

const STATUS: ReadonlyArray<readonly [number, string]> = [
  [0, "Initializing"],
  [30, "Loading Platforms"],
  [65, "Preparing Experience"],
  [100, "Ready"],
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  const elRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGCircleElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("loading");
      setVisible(false);
      return;
    }

    document.body.classList.add("loading");

    const start = performance.now();
    let last = start;
    let v = 0;
    let loaded = document.readyState === "complete";
    let raf = 0;
    let exitTimer = 0;
    let done = false;
    let lastPct = -1;
    let lastStatus = "";

    const onLoad = () => {
      loaded = true;
    };

    if (!loaded) {
      window.addEventListener("load", onLoad, { once: true });
    }

    const paint = (val: number) => {
      el.style.setProperty("--p", val.toFixed(2));

      maskRef.current?.style.setProperty(
        "stroke-dashoffset",
        String(100 - val)
      );

      const n = Math.round(val);

      if (n === lastPct) return;

      lastPct = n;

      if (pctRef.current) {
        pctRef.current.textContent = String(n).padStart(2, "0");
      }

      const label =
        [...STATUS].reverse().find(([threshold]) => n >= threshold)?.[1] ?? "";

      if (label !== lastStatus && statusRef.current) {
        lastStatus = label;
        statusRef.current.textContent = label;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(Math.max((now - last) / 1000, 0), 0.05);

      last = now;

      const elapsed = now - start;
      const ready =
        (loaded && elapsed >= MIN_MS) || elapsed >= MAX_MS;

      const target = ready
        ? 100
        : Math.min(90, (elapsed / MIN_MS) * 90);

      v += (target - v) * (1 - Math.exp(-dt * 6.5));

      if (ready && v > 99.4) {
        paint(100);

        if (!done) {
          done = true;

          el.classList.add("is-done");
          document.body.classList.remove("loading");

          exitTimer = window.setTimeout(() => {
            setVisible(false);
          }, EXIT_MS);
        }

        return;
      }

      paint(v);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.removeEventListener("load", onLoad);
      document.body.classList.remove("loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      ref={elRef}
      role="status"
      aria-label="Loading BVM Tech"
    >
      <div className="pl-grid" aria-hidden="true" />

      {/* Corner Brackets */}
      <i className="pl-corner tl" aria-hidden="true" />
      <i className="pl-corner tr" aria-hidden="true" />
      <i className="pl-corner bl" aria-hidden="true" />
      <i className="pl-corner br" aria-hidden="true" />

      {/* Central Reticle and Logo */}
      <div className="pl-stage">
        <svg
          viewBox="-120 -120 240 240"
          className="pl-svg"
          aria-hidden="true"
        >
          <defs>
            <mask
              id="plMask"
              maskUnits="userSpaceOnUse"
              x="-120"
              y="-120"
              width="240"
              height="240"
            >
              <circle
                ref={maskRef}
                className="pl-mask-arc"
                r="100"
                pathLength={100}
                transform="rotate(-90)"
              />
            </mask>
          </defs>

          <circle className="pl-orbit" r="114" pathLength={100} />

          <circle className="pl-inner" r="82" />

          <circle className="pl-ticks" r="100" pathLength={240} />

          <circle
            className="pl-ticks pl-lit"
            r="100"
            pathLength={240}
            mask="url(#plMask)"
          />
        </svg>

        {/* Progress Marker */}
        <div className="pl-rider" aria-hidden="true">
          <i />
        </div>

        {/* Logo */}
        <img
          className="pl-logo"
          src="/images/logo.svg"
          alt="BVM Tech Limited"
        />
      </div>

      {/* Top Left Information */}
      <div className="pl-hud pl-tl" aria-hidden="true">
        <strong>BVM TECH LIMITED</strong>
        <span>DIFC &bull; Dubai</span>
      </div>

      {/* Top Right Status */}
      <div className="pl-hud pl-tr" aria-hidden="true">
        <span className="pl-status" ref={statusRef}>
          Initializing
        </span>
      </div>

      {/* Progress Counter */}
      <div className="pl-count" aria-hidden="true">
        <span ref={pctRef}>00</span>
        <sup>%</sup>
      </div>

      {/* Bottom Right Information */}
      <div className="pl-hud pl-br" aria-hidden="true">
        <span>From Strategy to Scale</span>

        <div className="pl-segs">
          <i />
        </div>
      </div>
    </div>
  );
}