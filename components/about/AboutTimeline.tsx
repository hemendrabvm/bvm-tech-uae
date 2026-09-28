"use client";

import { RefObject } from "react";

const MILESTONES = [
  {
    year: "2009",
    title: "Foundation in Software Development",
    desc: "Started with custom software and web development, delivering technology solutions for businesses across logistics, trading, and other industries.",
    side: "left" as const,
  },
  {
    year: "2016",
    title: "ERP & CRM Expansion",
    desc: "Expanded into enterprise software development with custom ERP, CRM, and business management solutions designed to streamline operations and improve business efficiency.",
    side: "right" as const,
  },
  {
    year: "2019",
    title: "Cloud & Mobile Innovation",
    desc: "Expanded into cloud solutions and mobile app development, building scalable platforms and digital products using modern technologies for growing businesses.",
    side: "left" as const,
  },
  {
    year: "2024",
    title: "AI & Automation Era",
    desc: "Advancing into AI Automation, SaaS, HRMS, Tally Prime, E-Invoicing, and intelligent ERP solutions to help businesses automate processes, improve productivity, and accelerate digital transformation.",
    side: "right" as const,
  },
];

export default function AboutTimeline({
  trackRef,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="about-timeline-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 about-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>OUR MILESTONES</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  17+ Years of Driving Digital
                </span>
              </span>
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  & Enterprise Evolution
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="about-timeline-track position-relative" ref={trackRef}>
          <div className="timeline-line-glow" id="timeline-laser-line" />

          {MILESTONES.map((m, i) => {
            const isLast = i === MILESTONES.length - 1;
            if (m.side === "left") {
              return (
                <div
                  key={m.year}
                  className={`timeline-item row g-4 align-items-center ${isLast ? "" : "mb-5"} about-anim-timeline`}
                >
                  <div className="col-12 col-md-5 text-start text-md-end">
                    <div className="timeline-card-glass">
                      <span className="timeline-year text-sky-blue">{m.year}</span>
                      <h4 className="timeline-heading text-white mb-2">
                        {m.title}
                      </h4>
                      <p className="timeline-desc mb-0">{m.desc}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 text-center d-none d-md-block">
                    <div className="timeline-node">
                      <span className="node-pulse" />
                    </div>
                  </div>
                  <div className="col-12 col-md-5 d-none d-md-block" />
                </div>
              );
            }
            return (
              <div
                key={m.year}
                className={`timeline-item row g-4 align-items-center ${isLast ? "" : "mb-5"} about-anim-timeline`}
              >
                <div className="col-12 col-md-5 d-none d-md-block" />
                <div className="col-12 col-md-2 text-center d-none d-md-block">
                  <div className="timeline-node">
                    <span className="node-pulse" />
                  </div>
                </div>
                <div className="col-12 col-md-5 text-start">
                  <div className="timeline-card-glass">
                    <span className="timeline-year text-sky-blue">{m.year}</span>
                    <h4 className="timeline-heading text-white mb-2">
                      {m.title}
                    </h4>
                    <p className="timeline-desc mb-0">{m.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
