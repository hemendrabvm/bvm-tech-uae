"use client";

import { useRef } from "react";
import { useAppServices } from "@/animations/usePageAnimations";

export type AdvantageStrip = {
  icon: string;
  iconColor: "text-cyan" | "text-red";
  heading: string;
  tag: string;
  tagColor: "text-cyan" | "text-red";
  sub: string;
};

type Props = {
  badge: string;
  titleLines: string[];
  description: string;
  calloutValue: string;
  calloutLabel: string;
  strips: AdvantageStrip[];
};

export default function ServiceWhy({
  badge,
  titleLines,
  description,
  calloutValue,
  calloutLabel,
  strips,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useAppServices(sectionRef);

  return (
    <section className="app-why-section position-relative" ref={sectionRef}>
      <div className="container position-relative z-10">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <div className="app-why-left">
              <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 software-anim-badge anim-reveal">
                <img src="/images/h.png" alt="Icon" />
                <span>{badge}</span>
              </div>

              <h2 className="app-why-title text-white mb-4">
                {titleLines.map((line) => (
                  <span className="header-line-mask" key={line}>
                    <span className="header-line-inner anim-text-reveal">
                      {line}
                    </span>
                  </span>
                ))}
              </h2>

              <p className="app-why-desc text-bright-muted mb-4">{description}</p>

              <div className="app-stat-callout spotlight-card p-3 rounded-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="callout-icon text-cyan fs-3">
                    <i className="fa-solid fa-circle-check" />
                  </div>
                  <div>
                    <div className="callout-val text-white fw-bold">
                      {calloutValue}
                    </div>
                    <div className="callout-lbl text-bright-muted extra-small">
                      {calloutLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="app-why-strips d-flex flex-column gap-3">
              {strips.map((strip) => (
                <div
                  className="app-advantage-strip spotlight-card p-4 rounded-4"
                  key={strip.heading}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div className={`strip-icon ${strip.iconColor} fs-4 mt-1`}>
                      <i className={strip.icon} />
                    </div>
                    <div className="strip-info flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="strip-heading text-white mb-0 fs-5">
                          {strip.heading}
                        </h4>
                        <span className={`strip-tag ${strip.tagColor}`}>
                          {strip.tag}
                        </span>
                      </div>
                      <p className="strip-sub text-bright-muted small mb-0">
                        {strip.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
