"use client";

const STEPS = [
  {
    num: "STEP 01",
    numClass: "text-cyan",
    title: "Initial Review",
    desc: "Our technical team reviews your requirements and completes the NDA process as much as possible.",
  },
  {
    num: "STEP 02",
    numClass: "text-red",
    title: "Discovery Session",
    desc: "We schedule a focused consultation to understand your business, technical requirements, and goals, from software development and ERP to AI, HRMS, SaaS, Tally Prime, automation, and E-Invoicing solutions.",
  },
  {
    num: "STEP 03",
    numClass: "text-cyan",
    title: "Fixed-Price Proposal",
    desc: "Get a clear proposal with project scope, deliverables, milestones, timeline, and transparent pricing, so you know exactly what to expect.",
  },
];

export default function ContactOnboarding() {
  return (
    <section className="onboarding-process-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="who-badge d-inline-flex align-items-center gap-2 contact-anim-badge mb-3 anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>TRANSPARENT PROCESS</span>
            </div>

            <h2 className="section-title text-white">
              <span className="title-line-mask">
                <span className="title-line-inner anim-text-reveal">
                  What Happens After Your Submission of Request?
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {STEPS.map((s) => (
            <div className="col-12 col-md-4" key={s.title}>
              <div className="onboarding-card spotlight-card contact-anim-elem p-4 anim-reveal h-100">
                <div className={`step-num-badge mb-3 ${s.numClass}`}>
                  {s.num}
                </div>
                <h4 className="step-title text-white mb-2">{s.title}</h4>
                <p className="step-desc text-bright-muted mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}