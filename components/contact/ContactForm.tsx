"use client";

import { useCallback, useState, type FormEvent } from "react";
import {
  BUDGET_OPTIONS,
  COUNTRY_ISD_CODES,
  SERVICE_OPTIONS,
  submitContactForm,
  validateContactPayload,
  type ContactFieldErrors,
  type ContactPayload,
} from "@/lib/contact";

const initial: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  services: ["Custom Software"],
  budget: "AED 5k-15k",
  nda: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initial);
  const [isdCode, setIsdCode] = useState<string>("+971"); // Default UAE (+971)
  const [rawPhone, setRawPhone] = useState<string>("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const setField = useCallback(
    <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        if (!prev[key] && !prev.form) return prev;
        const next = { ...prev };
        delete next[key];
        delete next.form;
        return next;
      });
    },
    []
  );

  const handlePhoneChange = (val: string) => {
    setRawPhone(val);
    const combined = val.trim() ? `${isdCode} ${val.trim()}` : "";
    setField("phone", combined);
  };

  const handleIsdChange = (newCode: string) => {
    setIsdCode(newCode);
    const combined = rawPhone.trim() ? `${newCode} ${rawPhone.trim()}` : "";
    setField("phone", combined);
  };

  const toggleService = (value: string) => {
    setForm((prev) => {
      const has = prev.services.includes(value);
      const services = has
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value];
      return { ...prev, services };
    });
    setErrors((prev) => {
      if (!prev.services) return prev;
      const next = { ...prev };
      delete next.services;
      return next;
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const finalPhone = rawPhone.trim() ? `${isdCode} ${rawPhone.trim()}` : "";
    const payloadToSend: ContactPayload = {
      ...form,
      phone: finalPhone,
    };

    const clientErrors = validateContactPayload(payloadToSend);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      setStatus("error");
      setFeedback("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setFeedback("");
    setErrors({});

    try {
      const result = await submitContactForm(payloadToSend);
      if (result.ok) {
        setStatus("success");
        setFeedback(result.message);
        setForm(initial);
        setRawPhone("");
        setIsdCode("+971");
        return;
      }
      setStatus("error");
      setFeedback(result.message);
      if (result.errors) setErrors(result.errors);
    } catch {
      setStatus("error");
      setFeedback(
        "Network error. Please check your connection or email info@bvmtech.ae."
      );
    }
  };

  const fieldClass = (key: keyof ContactFieldErrors) =>
    `form-control custom-form-control${errors[key] ? " is-invalid" : ""}`;

  return (
    <form
      id="bvmContactForm"
      className="contact-form-body"
      noValidate
      onSubmit={onSubmit}
    >
      {/* Step 1: Services (with Web Development & Digital Marketing) */}
      <div className="form-step-block mb-4">
        <label className="form-step-label text-white mb-3 d-block">
          1. Which services do you require?
        </label>
        <div className="pill-options-grid d-flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((opt) => (
            <label className="choice-pill" key={opt.value}>
              <input
                type="checkbox"
                name="services[]"
                value={opt.value}
                className="choice-pill-input"
                checked={form.services.includes(opt.value)}
                onChange={() => toggleService(opt.value)}
                disabled={status === "submitting"}
              />
              <span className="choice-pill-label">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <div className="text-danger small mt-2" role="alert">
            {errors.services}
          </div>
        )}
      </div>

      {/* Step 2: Budget starting from AED 5,000 */}
      <div className="form-step-block mb-4">
        <label className="form-step-label text-white mb-3 d-block">
          2. What is your estimated budget? (AED)
        </label>
        <div className="pill-options-grid d-flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <label className="choice-pill" key={opt.value}>
              <input
                type="radio"
                name="budget"
                value={opt.value}
                className="choice-pill-input"
                checked={form.budget === opt.value}
                onChange={() => setField("budget", opt.value)}
                disabled={status === "submitting"}
              />
              <span className="choice-pill-label">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.budget && (
          <div className="text-danger small mt-2" role="alert">
            {errors.budget}
          </div>
        )}
      </div>

      {/* Step 3: Fields */}
      <div className="form-inputs-grid row g-3 mb-4">
        {/* Name */}
        <div className="col-12 col-md-6">
          <div className="form-floating custom-floating-group">
            <input
              type="text"
              className={fieldClass("name")}
              id="contactName"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              disabled={status === "submitting"}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            <label htmlFor="contactName">Your Full Name *</label>
          </div>
          {errors.name && (
            <div id="err-name" className="text-danger small mt-1" role="alert">
              {errors.name}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="col-12 col-md-6">
          <div className="form-floating custom-floating-group">
            <input
              type="email"
              className={fieldClass("email")}
              id="contactEmail"
              name="email"
              placeholder="name@company.com"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              disabled={status === "submitting"}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            <label htmlFor="contactEmail">Business Email *</label>
          </div>
          {errors.email && (
            <div id="err-email" className="text-danger small mt-1" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        {/* Phone with ISD Selector (Default UAE +971) */}
        <div className="col-12 col-md-6">
          <div className="d-flex gap-2">
            {/* Country ISD Code Dropdown */}
            <div style={{ width: "120px", flexShrink: 0 }}>
              <select
                className="form-select custom-form-control h-100"
                value={isdCode}
                onChange={(e) => handleIsdChange(e.target.value)}
                disabled={status === "submitting"}
                style={{
                  background: "#0d121a",
                  color: "#ffffff",
                  borderColor: "rgba(255, 255, 255, 0.14)",
                  fontSize: "0.9rem",
                  padding: "0.85rem 0.6rem",
                  borderRadius: "14px",
                }}
                aria-label="Country Code"
              >
                {COUNTRY_ISD_CODES.map((item) => (
                  <option key={item.code} value={item.code} style={{ background: "#0d121a", color: "#fff" }}>
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number Input */}
            <div className="form-floating custom-floating-group flex-grow-1">
              <input
                type="tel"
                className={fieldClass("phone")}
                id="contactPhone"
                name="phone"
                placeholder="50 123 4567"
                autoComplete="tel"
                required
                value={rawPhone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                disabled={status === "submitting"}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "err-phone" : undefined}
              />
              <label htmlFor="contactPhone">Phone / WhatsApp *</label>
            </div>
          </div>
          {errors.phone && (
            <div id="err-phone" className="text-danger small mt-1" role="alert">
              {errors.phone}
            </div>
          )}
        </div>

        {/* Company Name */}
        <div className="col-12 col-md-6">
          <div className="form-floating custom-floating-group">
            <input
              type="text"
              className={fieldClass("company")}
              id="contactCompany"
              name="company"
              placeholder="Company Name"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => setField("company", e.target.value)}
              disabled={status === "submitting"}
            />
            <label htmlFor="contactCompany">Company Name</label>
          </div>
        </div>

        {/* Project Details */}
        <div className="col-12">
          <div className="form-floating custom-floating-group">
            <textarea
              className={fieldClass("message")}
              id="contactMessage"
              name="message"
              placeholder="Tell us about your project..."
              style={{ height: 140 }}
              required
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
              disabled={status === "submitting"}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            <label htmlFor="contactMessage">
              Project Details &amp; Requirements *
            </label>
          </div>
          {errors.message && (
            <div
              id="err-message"
              className="text-danger small mt-1"
              role="alert"
            >
              {errors.message}
            </div>
          )}
        </div>
      </div>

      {/* Clean Right-Aligned Submit Button */}
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-consult-red rounded-pill px-5 py-3 fw-semibold magnetic-btn submit-proposal-btn"
          id="submitFormBtn"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          <span className="btn-text">
            {status === "submitting"
              ? "Submitting…"
              : "Submit Proposal Request"}
          </span>
          <span className="arrow-icon-wrapper ms-2">
            <svg
              className="diagonal-arrow-svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 12L12 2M12 2H4M12 2V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="btn-sheen" />
        </button>
      </div>

      <div
        id="formFeedback"
        className={`form-feedback-alert mt-3${feedback ? "" : " d-none"}`}
        role={status === "success" ? "status" : "alert"}
        aria-live="polite"
      >
        {feedback && (
          <div
            className={`p-3 rounded-3 small ${
              status === "success"
                ? "border border-success text-success"
                : "border border-danger text-danger"
            }`}
            style={{
              background:
                status === "success"
                  ? "rgba(25, 135, 84, 0.08)"
                  : "rgba(220, 53, 69, 0.08)",
            }}
          >
            {feedback}
          </div>
        )}
      </div>
    </form>
  );
}