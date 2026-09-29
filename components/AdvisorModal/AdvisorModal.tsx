"use client";

import { useEffect, useState, type FormEvent } from "react";

type AdvisorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape & stop Lenis scroll while modal is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.body.classList.add("modal-open");
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.stop();
    } else {
      document.body.classList.remove("modal-open");
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.start();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
      (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis?.start();
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Temporary submission handler until custom fields are wired
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 800);
  };

  return (
    <div
      className={`advisor-modal-backdrop ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="advisor-modal-dialog">
        <button
          type="button"
          className="advisor-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <span className="advisor-modal-badge d-block mb-1">
          DIFC DUBAI &bull; 24H SLA
        </span>
        <h3 className="advisor-modal-title">Talk to an Advisor</h3>
        <p className="advisor-modal-sub">
          Share your enterprise requirements below. Our senior advisory team will connect with you within 24 business hours under a mutual NDA.
        </p>

        {submitted ? (
          <div className="p-4 rounded-4 text-center border border-success border-opacity-25" style={{ background: "rgba(25, 135, 84, 0.08)" }}>
            <i className="fa-solid fa-circle-check text-success fs-2 mb-2" />
            <h5 className="text-white fw-bold mb-1">Request Received</h5>
            <p className="text-bright-muted small mb-0">Our advisor will reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div className="form-floating custom-floating-group">
              <input
                type="text"
                className="form-control custom-form-control"
                id="advName"
                placeholder="Full Name"
                required
              />
              <label htmlFor="advName">Your Full Name *</label>
            </div>

            <div className="form-floating custom-floating-group">
              <input
                type="email"
                className="form-control custom-form-control"
                id="advEmail"
                placeholder="Business Email"
                required
              />
              <label htmlFor="advEmail">Business Email *</label>
            </div>

            <div className="form-floating custom-floating-group">
              <input
                type="tel"
                className="form-control custom-form-control"
                id="advPhone"
                placeholder="Phone"
                required
              />
              <label htmlFor="advPhone">Phone / WhatsApp *</label>
            </div>

            <div className="form-floating custom-floating-group">
              <input
                type="text"
                className="form-control custom-form-control"
                id="advCompany"
                placeholder="Company"
              />
              <label htmlFor="advCompany">Company Name</label>
            </div>

            <div className="form-floating custom-floating-group">
              <textarea
                className="form-control custom-form-control text-area-control"
                id="advMessage"
                placeholder="Requirement details"
                style={{ height: 110 }}
                required
              />
              <label htmlFor="advMessage">Tell us what you are trying to transform *</label>
            </div>

            <button
              type="submit"
              className="btn btn-consult-red rounded-pill py-3 fw-bold magnetic-btn mt-2 d-inline-flex align-items-center justify-content-center gap-2"
              disabled={submitting}
            >
              <span className="btn-text">
                {submitting ? "Connecting…" : "Request Advisory Session"}
              </span>
              <span className="contact-angles-icon">
                <i className="fa-solid fa-angles-right" />
              </span>
              <span className="btn-sheen" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}