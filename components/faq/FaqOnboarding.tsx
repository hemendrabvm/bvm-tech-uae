"use client";

const STEPS = [
  {
    badge: "STEP 01 — DAY 1",
    badgeClass: "text-cyan",
    title: "Discovery & Mutual NDA",
    desc: "It began with understanding your business, technical requirements, and project goals. As per need of your business whether it is custom software development, ERP, HRMS, AI Automation, or SaaS solutions, we define the right approach from the start.",
  },
  {
    badge: "STEP 02 — DAY 3",
    badgeClass: "text-red",
    title: "Technical Plan & Fixed-Price Proposal",
    desc: "Receive a clear technical architecture, development roadmap, sprint deliverables, and transparent fixed-price proposal. We align the solution with your business needs, budget, and growth plans.",
  },
  {
    badge: "STEP 03 — DAY 7",
    badgeClass: "text-cyan",
    title: "Agile Kickoff & Staging",
    desc: "Our dedicated development team starts the first sprint. Working software is deployed to a secure staging environment for review, testing, and feedback.",
  },
];

export default function FaqOnboarding() {
  return (
    <section
      className="onboarding-process-section position-relative"
      id="faq-onboarding"
    >
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 ind-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>ONBOARDING ROADMAP</span>
            </div>

            <h2 className="section-title text-white">
              Your Journey From Discovery to launch
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {STEPS.map((step) => (
            <div className="col-12 col-md-4" key={step.title}>
              <div className="onboarding-card spotlight-card ind-anim-card p-4 p-md-5 h-100 anim-reveal">
                <div className={`step-num-badge mb-3 ${step.badgeClass}`}>
                  {step.badge}
                </div>
                <h4 className="step-title text-white mb-3">{step.title}</h4>
                <p className="step-desc text-bright-muted mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
