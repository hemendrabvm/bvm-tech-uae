"use client";

import { useRef } from "react";
import { useTechAnimation } from "@/animations/useTechAnimation";

const OUTER = [
  { angle: "0deg", glow: "glow-html", src: "/images/tech/t1.png", alt: "HTML5" },
  { angle: "32.7deg", glow: "glow-css", src: "/images/tech/t2.png", alt: "CSS3" },
  { angle: "65.4deg", glow: "glow-js", src: "/images/tech/t3.png", alt: "JavaScript" },
  { angle: "98.2deg", glow: "glow-angular", src: "/images/tech/t4.png", alt: "Angular" },
  { angle: "130.9deg", glow: "glow-vue", src: "/images/tech/t5.png", alt: "Vue.js" },
  { angle: "163.6deg", glow: "glow-next", src: "/images/tech/t6.png", alt: "Next.js" },
  { angle: "196.4deg", glow: "glow-go", src: "/images/tech/t7.png", alt: "Go" },
  { angle: "229.1deg", glow: "glow-pwa", src: "/images/tech/t8.png", alt: "PWA" },
  // 1. t16.svg
  { angle: "261.8deg", glow: "glow-shopify", src: "/images/tech/t16.svg", alt: "Shopify" },
  // 2. t17.png
  { angle: "294.5deg", glow: "glow-ai", src: "/images/tech/t17.png", alt: "AI Solutions" },
  // 3. t18.png
  { angle: "327.3deg", glow: "glow-claude", src: "/images/tech/t18.png", alt: "Claude AI" },
];

const INNER = [
  { angle: "18deg", glow: "glow-react", src: "/images/tech/t9.png", alt: "React.js" },
  { angle: "54deg", glow: "glow-android", src: "/images/tech/t10.png", alt: "Android" },
  { angle: "90deg", glow: "glow-ios", src: "/images/tech/t11.png", alt: "iOS" },
  { angle: "126deg", glow: "glow-flutter", src: "/images/tech/t12.png", alt: "Flutter" },
  { angle: "162deg", glow: "glow-php", src: "/images/tech/t13.png", alt: "PHP" },
  { angle: "198deg", glow: "glow-java", src: "/images/tech/t14.png", alt: "Java" },
  { angle: "234deg", glow: "glow-node", src: "/images/tech/t15.png", alt: "Node.js" },
  // 4. t19.png
  { angle: "270deg", glow: "glow-mongo", src: "/images/tech/t19.png", alt: "MongoDB" },
  // 5. t20.webp
  { angle: "306deg", glow: "glow-design", src: "/images/tech/t20.webp", alt: "Design System" },
  // 6. t21.webp
  { angle: "342deg", glow: "glow-ai2", src: "/images/tech/t21.webp", alt: "AI Platform" },
];

type Props = {
  titleLines: string[];
};

export default function ServiceTechnology({ titleLines }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useTechAnimation(sectionRef);

  return (
    <section className="technology-section position-relative" ref={sectionRef}>
      <div className="tech-orbit-container position-absolute tech-anim-orbit">
        <div className="tech-orbit-track track-outer">
          {OUTER.map((item) => (
            <div
              key={item.alt}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "540px",
                } as React.CSSProperties
              }
            >
              <div className={`tech-bubble ${item.glow}`}>
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-orbit-track track-inner">
          {INNER.map((item) => (
            <div
              key={item.alt}
              className="tech-icon-orbit"
              style={
                {
                  ["--angle" as string]: item.angle,
                  ["--radius" as string]: "410px",
                } as React.CSSProperties
              }
            >
              <div className={`tech-bubble ${item.glow}`}>
                <img src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-content-container text-center z-10">
        <div className="tech-badge d-inline-flex align-items-center gap-2 mb-3 tech-anim-badge">
          <img src="/images/h.png" alt="Icon" />
          <span>TECHNOLOGY</span>
        </div>

        <h2 className="tech-title text-white">
          {titleLines.map((line) => (
            <span className="tech-line-mask" key={line}>
              <span className="tech-line-inner">{line}</span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}