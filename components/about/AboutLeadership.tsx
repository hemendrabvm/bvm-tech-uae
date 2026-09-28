"use client";

const LEADERS = [
  {
    img: "/images/tm1.png",
    alt: "Tejraj Singh",
    tag: "FOUNDER & MD",
    name: "Tejraj Singh",
    role: "Founder & Managing Director",
    bio: "15+ years steering enterprise software architectures, digital transformation, and regional technology ventures across UAE & global markets.",
  },
  {
    img: "/images/tm2.png",
    alt: "Mark Roberts",
    tag: "CTO & ARCHITECT",
    name: "Mark Roberts",
    role: "Chief Technology Officer",
    bio: "Specialist in high-frequency ERP infrastructure, cloud microservices, database optimization, and enterprise AI model deployment.",
  },
  {
    img: "/images/tm3.png",
    alt: "Sarah Al-Maktoum",
    tag: "VP OF PRODUCT",
    name: "Sarah Al-Maktoum",
    role: "VP of Product & UI/UX",
    bio: "Pioneering user-centric digital transformation, product strategy, and design systems for top corporate teams in Dubai.",
  },
];

export default function AboutLeadership() {
  return (
    <section className="about-leadership-section position-relative">
      <div className="container position-relative z-10">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="choose-badge d-inline-flex align-items-center gap-2 mb-3 about-anim-badge anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>

            <h2 className="choose-title text-white">
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  Guided by Experienced
                </span>
              </span>
              <span className="about-line-mask">
                <span className="about-line-inner anim-text-reveal">
                  Technology Visionaries
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row g-4 team-grid-container">
          {LEADERS.map((leader) => (
            <div className="col-12 col-md-6 col-lg-4" key={leader.name}>
              <div className="team-card team-anim-card anim-reveal" data-cursor="VIEW">
                <div className="team-img-wrapper mb-4">
                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src={leader.img}
                      alt={leader.alt}
                      className="img-fluid image-reveal-img team-portrait"
                    />
                  </div>
                  <div className="team-badge-tag">
                    <span className="tag-dot" />
                    <span>{leader.tag}</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/bvm-tech-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-badge magnetic-btn"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
                <div className="team-meta text-start">
                  <h4 className="team-name text-white mb-1">{leader.name}</h4>
                  <p className="team-role text-sky-blue mb-2">{leader.role}</p>
                  <p className="team-bio mb-0">{leader.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
