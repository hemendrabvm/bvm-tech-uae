"use client";

const PODS = [
  {
    label: "EXPERIENCE",
    target: "17",
    suffix: "+",
    suffixClass: "text-sky-blue",
    sub: "Years of Driving Digital & Enterprise Evolution",
    redDot: false,
  },
  {
    label: "DELIVERY",
    target: "500",
    suffix: "+",
    suffixClass: "text-sky-blue",
    sub: "Platforms & Apps Delivered",
    redDot: false,
  },
  {
    label: "ENGINEERS",
    target: "50",
    suffix: "+",
    suffixClass: "text-sky-blue",
    sub: "Dedicated Software Specialists",
    redDot: false,
  },
  {
    label: "RETENTION",
    target: "99",
    suffix: "%",
    suffixClass: "text-brand-red",
    sub: "Client SLA & Growth Rate",
    redDot: true,
  },
];

export default function AboutNumbers() {
  return (
    <section className="about-numbers-section position-relative">
      <div className="container position-relative z-10">
        <div className="numbers-dashboard-hub about-anim-metrics">
          <div className="row g-4 text-center text-md-start align-items-center">
            {PODS.map((pod) => (
              <div className="col-12 col-sm-6 col-lg-3" key={pod.label}>
                <div className="metric-pod">
                  <div className="pod-status mb-2">
                    <span
                      className={`pod-dot${pod.redDot ? " red-dot" : ""}`}
                    />
                    <span>{pod.label}</span>
                  </div>
                  <div className="metric-big-num text-white">
                    <span className="counter-value" data-target={pod.target}>
                      0
                    </span>
                    <span className={pod.suffixClass}>{pod.suffix}</span>
                  </div>
                  <div className="metric-sub-label">{pod.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}