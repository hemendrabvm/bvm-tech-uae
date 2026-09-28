"use client";

export default function AboutMission() {
  return (
    <section className="about-mission-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 about-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>PURPOSE & FUTURE</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  What drives us today.
                </span>
              </span>
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  Where we&apos;re building tomorrow.
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row g-4 mission-grid-container">
          <div className="col-12 col-lg-6">
            <div className="mission-vision-card cyan-theme mission-anim-panel anim-reveal">
              <div className="card-glass-sheen" />
              <div className="card-content-wrap">
                <div className="card-tag-badge cyan-tag mb-4">
                  <span className="tag-dot" />
                  <span>OUR MISSION</span>
                </div>
                <h3 className="panel-headline text-white mb-3">
                  Strength UAE businesses through technology
                </h3>
                <p className="panel-desc mb-0">
                  Providing secure, scalable software, web and mobile app solutions which help you to simplify your regular and complex operations, automate workflows, and help UAE businesses modernize with AI, HRMS, ERP, SaaS, Cloud, and digital transformation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mission-vision-card red-theme vision-anim-panel anim-reveal">
              <div className="card-glass-sheen" />
              <div className="card-content-wrap">
                <div className="card-tag-badge red-tag mb-4">
                  <span className="tag-dot" />
                  <span>OUR VISION</span>
                </div>
                <h3 className="panel-headline text-white mb-3">
                  Building the future of GCC Technology
                </h3>
                <p className="panel-desc mb-0">
                  A trusted technology partner across the Gulf Countries, delivering innovative software development, AI automation, Cloud, and enterprise solutions that help businesses operate smarter, scale faster, and lead in a competitive digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
