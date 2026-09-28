"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const wm = footerRef.current?.querySelector(".footer-huge-bvm");
      if (wm) {
        gsap.fromTo(
          wm,
          { y: 60, scale: 0.85, letterSpacing: "-10px", opacity: 0.15 },
          {
            y: -16,
            scale: 1.04,
            letterSpacing: "6px",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1.1,
            },
          }
        );
      }
    },
    { scope: footerRef, dependencies: [] }
  );

  return (
    <footer className="footer-section position-relative" ref={footerRef}>
      <div className="container position-relative z-10">
        <div className="row g-4 mb-5 footer-grid-container">
          <div className="col-12 col-md-6 col-lg-4 footer-anim-col anim-reveal">
            <div className="footer-about-block">
              <img
                src="/images/logo.svg"
                alt="BVM Tech Limited Logo"
                className="footer-logo mb-3"
              />
              <p className="footer-desc mb-4 text-bright-muted">
                BVM is a premier enterprise software development company delivering bespoke ERP, CRM, custom web, mobile apps, and AI-powered automation solutions tailored for businesses across Dubai, Abu Dhabi, and GCC.
              </p>
              <div className="footer-profile-action mb-4">
                <a
                  href="/profile/profile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-login-red rounded-pill px-4 py-2 fw-semibold magnetic-btn d-inline-flex align-items-center gap-2"
                >
                  <i className="fa-solid fa-file-pdf" />
                  <span className="btn-text">View Company Profile</span>
                  <span className="arrow-icon-wrapper ms-1">
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }} />
                  </span>
                  <span className="btn-sheen" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-anim-col anim-reveal">
            <h5 className="footer-col-title text-white mb-3">Services</h5>
            <ul className="list-unstyled footer-links-list">
              <li>
                <Link href="/custom-software-development">Custom Software</Link>
              </li>
              <li>
                <Link href="/erp-development">ERP Development</Link>
              </li>
              <li>
                <Link href="/crm-development">CRM Development</Link>
              </li>
              <li>
                <Link href="/mobile-apps">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/web-development">Website Development</Link>
              </li>
              <li>
                <Link href="/ai-automation-development">AI Automations</Link>
              </li>
              <li>
                <Link href="/saas-development">SaaS Development</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-anim-col anim-reveal">
            <h5 className="footer-col-title text-white mb-3">Company</h5>
            <ul className="list-unstyled footer-links-list">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column with proper dedicated routes */}
          <div className="col-6 col-md-3 col-lg-2 footer-anim-col anim-reveal">
            <h5 className="footer-col-title text-white mb-3">Legal</h5>
            <ul className="list-unstyled footer-links-list">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-anim-col anim-reveal">
            <h5 className="footer-col-title text-white mb-3">Headquarters</h5>
            <ul className="list-unstyled footer-links-list office-info-list">
              <li>DIFC Innovation One, Dubai, UAE</li>
              <li>
                <a href="mailto:info@bvmtech.ae" className="text-decoration-none text-bright-muted">
                  info@bvmtech.ae
                </a>
              </li>
              <li>
                <a href="tel:+971556506799" className="text-decoration-none text-bright-muted">
                  +971 55 650 6799
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center pt-4 border-top border-secondary border-opacity-20 text-center footer-anim-col anim-reveal">
          <div className="col-12">
            <p className="footer-copyright text-bright-muted mb-0">
              © 2026 BVM Tech Limited. All rights reserved.
            </p>
          </div>
        </div>

        <div className="footer-watermark-row text-center mt-4">
          <div className="footer-huge-bvm">BVM</div>
        </div>
      </div>
    </footer>
  );
}