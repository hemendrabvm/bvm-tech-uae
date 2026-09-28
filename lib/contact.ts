/** Contact form types, validation, and client submit helper */

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  services: string[];
  budget: string;
  nda: boolean;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactPayload | "form", string>
>;

export type ContactApiResponse = {
  ok: boolean;
  message: string;
  errors?: ContactFieldErrors;
};

export const SERVICE_OPTIONS = [
  { value: "Custom Software", label: "Custom Software" },
  { value: "ERP Development", label: "ERP System" },
  { value: "CRM System", label: "CRM System" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "AI & Automation", label: "AI Automation" },
  { value: "SaaS Platform", label: "SaaS Platform" },
  { value: "Web Development", label: "Web Development" }, // Updated
  { value: "Digital Marketing", label: "Digital Marketing" }, // Added
] as const;

// Budget tiers starting from AED 5,000
export const BUDGET_OPTIONS = [
  { value: "AED 5k-15k", label: "AED 5k – 15k" },
  { value: "AED 15k-35k", label: "AED 15k – 35k" },
  { value: "AED 35k-75k", label: "AED 35k – 75k" },
  { value: "AED 75k+", label: "AED 75k+" },
] as const;

export const COUNTRY_ISD_CODES = [
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+1", country: "US / Canada", flag: "🇺🇸" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
] as const;

export function validateContactPayload(
  data: Partial<ContactPayload>
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const message = (data.message || "").trim();
  const services = data.services || [];

  if (!name) errors.name = "Full name is required.";
  else if (name.length < 2) errors.name = "Please enter your full name.";

  if (!email) errors.email = "Business email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!phone) errors.phone = "Phone / WhatsApp is required.";
  else if (phone.replace(/\D/g, "").length < 6) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!message) errors.message = "Project details are required.";
  else if (message.length < 10) {
    errors.message = "Please share a bit more detail (at least 10 characters).";
  }

  if (!services.length) {
    errors.services = "Select at least one service.";
  }

  if (!data.budget) {
    errors.budget = "Select an estimated budget.";
  }

  return errors;
}

export async function submitContactForm(
  payload: ContactPayload
): Promise<ContactApiResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: ContactApiResponse;
  try {
    data = (await res.json()) as ContactApiResponse;
  } catch {
    return {
      ok: false,
      message: "Unexpected server response. Please try again.",
    };
  }

  if (!res.ok && !data.message) {
    return {
      ok: false,
      message: "Submission failed. Please try again.",
      errors: data.errors,
    };
  }
  return data;
}