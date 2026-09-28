import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type ContactPayload,
  validateContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

/**
 * Contact form → email via Resend.
 *
 * Env (server-only):
 *   RESEND_API_KEY     — Resend API key
 *   CONTACT_TO_EMAIL   — recipient (default: info@bvmtech.ae)
 *   CONTACT_FROM_EMAIL — verified sender, e.g. "BVM <onboarding@resend.dev>"
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmail(payload: ContactPayload) {
  const services = payload.services.join(", ") || "—";
  const nda = payload.nda ? "Yes — send mutual NDA" : "No";
  const company = payload.company || "—";

  const text = [
    "New Contact / Proposal Request — BVM Tech Limited",
    "",
    "CONTACT DETAILS",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Company: ${company}`,
    "",
    "PROJECT DETAILS",
    `Services: ${services}`,
    `Budget: ${payload.budget}`,
    `NDA: ${nda}`,
    "",
    "MESSAGE",
    payload.message,
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0c0f13;font-family:Arial,Helvetica,sans-serif;color:#e8eaed;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0f13;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#151a21;border:1px solid #2a3140;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:24px 28px;background:#0f141b;border-bottom:1px solid #2a3140;">
            <div style="font-size:12px;letter-spacing:0.12em;color:#22d3ee;text-transform:uppercase;margin-bottom:8px;">BVM Tech Limited</div>
            <div style="font-size:22px;font-weight:700;color:#ffffff;">New Proposal Request</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;">
            <div style="font-size:11px;letter-spacing:0.1em;color:#22d3ee;text-transform:uppercase;margin-bottom:12px;">Contact Details</div>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;color:#c5c9d1;">
              <tr><td style="padding:4px 0;width:110px;color:#8b93a7;">Name</td><td style="color:#fff;">${escapeHtml(payload.name)}</td></tr>
              <tr><td style="padding:4px 0;color:#8b93a7;">Email</td><td style="color:#fff;">${escapeHtml(payload.email)}</td></tr>
              <tr><td style="padding:4px 0;color:#8b93a7;">Phone</td><td style="color:#fff;">${escapeHtml(payload.phone)}</td></tr>
              <tr><td style="padding:4px 0;color:#8b93a7;">Company</td><td style="color:#fff;">${escapeHtml(company)}</td></tr>
            </table>
            <div style="height:1px;background:#2a3140;margin:24px 0;"></div>
            <div style="font-size:11px;letter-spacing:0.1em;color:#22d3ee;text-transform:uppercase;margin-bottom:12px;">Project Details</div>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;color:#c5c9d1;">
              <tr><td style="padding:4px 0;width:110px;color:#8b93a7;">Services</td><td style="color:#fff;">${escapeHtml(services)}</td></tr>
              <tr><td style="padding:4px 0;color:#8b93a7;">Budget</td><td style="color:#fff;">${escapeHtml(payload.budget)}</td></tr>
              <tr><td style="padding:4px 0;color:#8b93a7;">NDA</td><td style="color:#fff;">${escapeHtml(nda)}</td></tr>
            </table>
            <div style="height:1px;background:#2a3140;margin:24px 0;"></div>
            <div style="font-size:11px;letter-spacing:0.1em;color:#22d3ee;text-transform:uppercase;margin-bottom:12px;">Message</div>
            <div style="font-size:14px;line-height:1.7;color:#e8eaed;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;background:#0f141b;border-top:1px solid #2a3140;font-size:12px;color:#8b93a7;">
            Submitted via www.bvmtech.ae contact form
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

  return { text, html };
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const payload: ContactPayload = {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim().toLowerCase(),
    phone: String(body.phone || "").trim(),
    company: String(body.company || "").trim(),
    message: String(body.message || "").trim(),
    services: Array.isArray(body.services) ? body.services.map(String) : [],
    budget: String(body.budget || "").trim(),
    nda: Boolean(body.nda),
  };

  if (
    payload.name.length > 120 ||
    payload.email.length > 200 ||
    payload.phone.length > 40 ||
    payload.company.length > 160 ||
    payload.message.length > 5000 ||
    payload.services.length > 10
  ) {
    return NextResponse.json(
      { ok: false, message: "Submission exceeds allowed size." },
      { status: 400 }
    );
  }

  const errors = validateContactPayload(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields.",
        errors,
      },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || "info@bvmtech.ae";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "BVM Tech Limited <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service is not configured. Please email info@bvmtech.ae or try again later.",
      },
      { status: 503 }
    );
  }

  const { text, html } = buildEmail(payload);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: `New proposal request from ${payload.name}`,
      text,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error", result.error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We could not send your request right now. Please email info@bvmtech.ae or try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Thank you! Your request has been received. We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not send your request right now. Please email info@bvmtech.ae or try again.",
      },
      { status: 502 }
    );
  }
}
