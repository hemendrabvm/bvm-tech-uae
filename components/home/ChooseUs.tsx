"use client";

const TRANSFORMATION_CARDS = [
  {
    icon: "fa-cubes-stacked",
    title: "Modernize Core Systems",
    desc: "Modernize legacy applications and enterprise platforms.",
  },
  {
    icon: "fa-brain",
    title: "Unlock AI & Data",
    desc: "Turn data into intelligence, automation and AI-enabled decisions.",
  },
  {
    icon: "fa-network-wired",
    title: "Connect the Enterprise",
    desc: "Integrate applications, systems, workflow and data.",
  },
  {
    icon: "fa-diagram-project",
    title: "Digitize Operations",
    desc: "Improve business processes with digital platforms and intelligent workflows.",
  },
  {
    icon: "fa-shield-halved",
    title: "Strengthen Technology Resilience",
    desc: "Improve cloud, infrastructure, security and continuity.",
  },
  {
    icon: "fa-people-group",
    title: "Scale Technology Delivery",
    desc: "Access specialist resources, dedicated teams and flexible delivery capability.",
  },
];

export default function ChooseUs() {
  return (
    <section id="what-we-do" className="choose-us-section position-relative">
      <img
        src="/images/5.png"
        className="choose-glow choose-right"
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 choose-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>STRATEGIC FOCUS</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="choose-line-mask">
                <span className="choose-line-inner anim-text-reveal">
                  What Are You Trying
                </span>
              </span>
              <span className="choose-line-mask">
                <span className="choose-line-inner anim-text-reveal">
                  to Transform?
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {TRANSFORMATION_CARDS.map((card) => (
            <div className="col" key={card.title}>
              <div className="choose-card choose-anim-card anim-reveal h-100">
                <div className="choose-card-content position-relative z-2">
                  <div className="choose-card-icon mb-4">
                    <i className={`fa-solid ${card.icon}`} />
                  </div>
                  <h4 className="choose-card-title text-white mb-2">
                    {card.title}
                  </h4>
                  <p className="choose-card-desc">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}