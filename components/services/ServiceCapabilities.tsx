"use client";

export type CapabilityCard = {
  icon: string;
  iconBadgeClass: string;
  techBadge: string;
  title: string;
  desc: string;
  tags: string[];
};

type Props = {
  badge: string;
  titleLines: string[];
  cards: CapabilityCard[];
};

export default function ServiceCapabilities({ badge, titleLines, cards }: Props) {
  return (
    <section className="app-services-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 software-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>{badge}</span>
            </div>

            <h2 className="choose-title text-white">
              {titleLines.map((line) => (
                <span className="header-line-mask" key={line}>
                  <span className="header-line-inner anim-text-reveal">{line}</span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 app-services-grid">
          {cards.map((card) => (
            <div className="col" key={card.title}>
              <div
                className="app-service-card spotlight-card software-anim-card anim-reveal"
                data-cursor="EXPLORE"
              >
                <div className="card-glass-sheen" />
                <div className="app-card-header d-flex align-items-center justify-content-between mb-4">
                  <div className={`app-icon-badge ${card.iconBadgeClass}`}>
                    <i className={card.icon} />
                  </div>
                  <span className="app-tech-badge">{card.techBadge}</span>
                </div>
                <h3 className="app-card-title text-white mb-3">{card.title}</h3>
                <p className="app-card-desc text-bright-muted mb-4">{card.desc}</p>
                <div className="app-feature-list d-flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span className="feature-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
