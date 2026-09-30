"use client";

import Link from "next/link";
import { type MouseEvent } from "react";

const STRATEGIC_HUBS = [
  {
    title: "UAE",
    subtitle: "Regional Strategy & Client Engagement",
    badge: "DIFC REGIONAL HQ",
    image: "/images/zj1.png",
    cardTheme: "hub-cyan",
    pinIcon: "fa-location-dot",
    href: "/contact",
  },
  {
    title: "United Kingdom",
    subtitle: "International Business Presence",
    badge: "INTERNATIONAL PRESENCE",
    image: "/images/zj2.png",
    cardTheme: "hub-red",
    pinIcon: "fa-landmark",
    href: "/contact",
  },
  {
    title: "Global Engineering & Delivery",
    subtitle: "Technology Capability at Scale",
    badge: "CENTRES OF EXCELLENCE",
    image: "/images/zj3.png",
    cardTheme: "hub-cyan",
    pinIcon: "fa-network-wired",
    href: "/contact",
  },
];

export default function GlobalCapability() {
  // Cursor coordinate tracking for the theme's radial spotlight hover effect
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="global-presence-section position-relative" aria-labelledby="gr-title">
      {/* Background Ambient Glows */}
      <div className="presence-glow-left" />
      <div className="presence-glow-right" />

      <div className="container position-relative z-10">
        {/* Header Block matching the site's kinetic animation */}
        <div className="presence-head">
          <div className="who-badge d-inline-flex align-items-center gap-2 who-anim-elem anim-reveal">
            <img src="/images/h.png" alt="Icon" />
            <span>GLOBAL PRESENCE &amp; DELIVERY</span>
          </div>

          <h2 id="gr-title" className="who-title text-white mb-3">
            <span className="services-line-mask">
              <span className="services-line-inner anim-text-reveal">
                Local engagement.
              </span>
            </span>
            <span className="services-line-mask">
              <span className="services-line-inner anim-text-reveal text-cyan-highlight headline-cyan">
                Global engineering.
              </span>
            </span>
          </h2>

          <p className="presence-lead anim-reveal">
            Regional engagement in the UAE, international presence in the United Kingdom, and global engineering capability designed to scale with your business.
          </p>
        </div>

        {/* 3 Symmetrical Strategic Hub Cards with Image Reveal Masks */}
        <div className="row g-4 align-items-stretch mb-2">
          {STRATEGIC_HUBS.map((hub) => (
            <div className="col-12 col-lg-4" key={hub.title}>
              <Link
                href={hub.href}
                className={`presence-hub-card ${hub.cardTheme} anim-reveal`}
                onMouseMove={handleMouseMove}
              >
                {/* Photo Header with Site's Signature Image Reveal System */}
                <div className="presence-hub-visual">
                  <div className="presence-hub-status-tag">
                    <span className="live-pulse-dot" />
                    <span>{hub.badge}</span>
                  </div>

                  <div className="presence-hub-pin-icon">
                    <i className={`fa-solid ${hub.pinIcon}`} />
                  </div>

                  <div className="image-reveal-wrapper">
                    <div className="image-reveal-mask" />
                    <img
                      src={hub.image}
                      alt={hub.title}
                      className="img-fluid image-reveal-img presence-hub-img"
                    />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="presence-hub-body">
                  <div>
                    <h3 className="presence-hub-title">{hub.title}</h3>
                    <p className="presence-hub-sub">{hub.subtitle}</p>
                  </div>

                  <div className="presence-hub-action-row">
                    <span className="presence-hub-action-text">Explore Engagement</span>
                    <span className="presence-hub-action-btn">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Short Bottom Dock Line: Project Delivery | Managed Services | Dedicated Teams | Specialist Resources */}
        <div className="presence-dock-wrapper anim-reveal">
          <div className="presence-dock-capsule">
            <span className="presence-dock-item">
              <i className="fa-solid fa-file-lines" />
              <span>Project Delivery</span>
            </span>

            <span className="presence-dock-sep">|</span>

            <span className="presence-dock-item">
              <i className="fa-solid fa-gear" />
              <span>Managed Services</span>
            </span>

            <span className="presence-dock-sep">|</span>

            <span className="presence-dock-item">
              <i className="fa-solid fa-users" />
              <span>Dedicated Teams</span>
            </span>

            <span className="presence-dock-sep">|</span>

            <span className="presence-dock-item">
              <i className="fa-solid fa-server" />
              <span>Specialist Resources</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}