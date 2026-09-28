"use client";

import { useRef } from "react";
import { useProcessStack } from "@/animations/usePageAnimations";

const OUTCOME_STAGES = [
  {
    name: "ADVISE",
    desc: "Understand the business challenge, environment, operating model and desired outcomes.",
    num: "1",
    className: "p-card-1",
  },
  {
    name: "TRANSFORM",
    desc: "Implement, modernize and integrate enterprise platforms.",
    num: "2",
    className: "p-card-2",
  },
  {
    name: "ENGINEER",
    desc: "Build digital products and custom technology where packaged solutions are not enough.",
    num: "3",
    className: "p-card-3",
  },
  {
    name: "OPERATE",
    desc: "Support, optimize and continuously improve platforms and applications.",
    num: "4",
    className: "p-card-4",
  },
  {
    name: "SCALE",
    desc: "Extend technology capability with specialist resources and global delivery teams.",
    num: "5",
    className: "p-card-5",
  },
];

type ProcessProps = {
  badgeText?: string;
  className?: string;
  titleLine1?: string;
  titleLine2?: string;
};

export default function Process({
  badgeText = "DELIVERY METHODOLOGY",
  className = "",
  titleLine1 = "From Strategy to",
  titleLine2 = "Sustained Outcomes",
}: ProcessProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  useProcessStack(sectionRef);

  return (
    <section className={`process-section position-relative ${className}`} ref={sectionRef}>
      {/* Background Glow */}
      <img
        src="/images/6.png"
        className="devlp-glow devlp-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row g-5">
          {/* Pinned Left Column */}
          <div className="col-12 col-lg-5">
            <div className="process-sticky-left">
              <div className="process-badge d-inline-flex align-items-center gap-2 mb-3 process-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>{badgeText}</span>
              </div>

              <h2 className="process-title text-white">
                <span className="process-line-mask">
                  <span className="process-line-inner anim-text-reveal">
                    {titleLine1}
                  </span>
                </span>
                <span className="process-line-mask">
                  <span className="process-line-inner anim-text-reveal">
                    {titleLine2}
                  </span>
                </span>
              </h2>

              <p className="text-bright-muted mt-4">
                We combine business consulting with digital engineering to take your technology roadmap from initial advisory all the way to enterprise scale.
              </p>
            </div>
          </div>

          {/* Stacking Cards on Right */}
          <div className="col-12 col-lg-7">
            <div className="process-cards-stack">
              {OUTCOME_STAGES.map((stage) => (
                <div
                  key={stage.num}
                  className={`process-stack-card ${stage.className} process-anim-card`}
                >
                  <div className="process-card-content">
                    <h3 className="process-card-name text-white">{stage.name}</h3>
                    <p className="process-card-desc text-bright-muted">{stage.desc}</p>
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