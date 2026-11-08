"use server";

import { email as businessEmail, phones } from "@/data/contact";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "Please write a little more (10+ characters).";

  if (Object.keys(errors).length) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  const topicLabel =
    {
      order: "Ordering products",
      bulk: "Bulk / wholesale",
      farmer: "Partnering as a farmer",
      other: "Something else",
    }[topic] ?? "Enquiry";

  const sent = await deliver({ name, email, phone, topicLabel, message });
  if (!sent) {
    return {
      ok: false,
      message: `Sorry, we couldn't send your message right now. Please email us at ${businessEmail} or call ${phones[0]}.`,
    };
  }

  return {
    ok: true,
    message: `Thank you, ${name}! We've received your message and will get back to you soon.`,
  };
}

/**
 * Emails the enquiry to the business inbox via Resend (https://resend.com).
 * Needs RESEND_API_KEY. Optional: CONTACT_TO_EMAIL (defaults to the business
 * email) and CONTACT_FROM_EMAIL (defaults to Resend's test sender, which can
 * only deliver to the email address the Resend account was created with).
 */
async function deliver(e: {
  name: string;
  email: string;
  phone: string;
  topicLabel: string;
  message: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("RESEND_API_KEY is not set — enquiry not emailed:", e);
      return true;
    }
    console.error("RESEND_API_KEY is not set — cannot deliver enquiry.");
    return false;
  }

  const text = [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Phone: ${e.phone || "—"}`,
    `Topic: ${e.topicLabel}`,
    "",
    e.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Thottakaran Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? businessEmail],
        reply_to: e.email,
        subject: `New enquiry: ${e.topicLabel} — ${e.name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to send enquiry", err);
    return false;
  }
}
