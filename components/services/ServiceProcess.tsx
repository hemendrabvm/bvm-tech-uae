"use client";

import { useRef } from "react";
import { useProcessStack } from "@/animations/usePageAnimations";

export type ProcessStage = {
  name: string;
  desc: string;
  num: string;
  className: string;
};

type Props = {
  badge: string;
  titleLines: string[];
  stages: ProcessStage[];
  glowImg?: string;
};

export default function ServiceProcess({
  badge,
  titleLines,
  stages,
  glowImg = "/images/6.png",
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useProcessStack(sectionRef);

  return (
    <section
      className="process-section position-relative"
      ref={sectionRef}
    >
      <img
        src={glowImg}
        className="devlp-glow devlp-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5">
          <div className="col-12 col-lg-5">
            <div className="process-sticky-left">
              <div className="process-badge d-inline-flex align-items-center gap-2 mb-3 process-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>{badge}</span>
              </div>

              <h2 className="process-title text-white">
                {titleLines.map((line) => (
                  <span className="process-line-mask" key={line}>
                    <span className="process-line-inner anim-text-reveal">
                      {line}
                    </span>
                  </span>
                ))}
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="process-cards-stack">
              {stages.map((stage) => (
                <div
                  key={stage.num}
                  className={`process-stack-card ${stage.className} process-anim-card`}
                >
                  <div className="process-card-content">
                    <h3 className="process-card-name">{stage.name}</h3>
                    <p className="process-card-desc">{stage.desc}</p>
                  </div>
                  <div className="process-card-number">{stage.num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
