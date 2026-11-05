"use client";

import { useActionState } from "react";
import { sendEnquiry, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { ok: false, message: "" };

const inputClass =
  "mt-2 w-full rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-leaf/30";

export default function ContactForm({
  defaultTopic,
  defaultMessage,
}: {
  defaultTopic: string;
  defaultMessage: string;
}) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-leaf/15 p-10 text-center">
        <p className="font-display text-3xl text-forest">Message received 🌱</p>
        <p className="mt-3 text-ink/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5 rounded-3xl bg-white/50 p-8 ring-1 ring-forest/10 md:p-10" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-forest">
          Name
          <input name="name" className={inputClass} autoComplete="name" required />
          {state.errors?.name && <span className="mt-1 block text-sm text-soil">{state.errors.name}</span>}
        </label>
        <label className="block text-sm font-semibold text-forest">
          Email
          <input name="email" type="email" className={inputClass} autoComplete="email" required />
          {state.errors?.email && <span className="mt-1 block text-sm text-soil">{state.errors.email}</span>}
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-forest">
          Phone <span className="font-normal text-ink/50">(optional)</span>
          <input name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </label>
        <label className="block text-sm font-semibold text-forest">
          I&apos;m reaching out about
          <select name="topic" defaultValue={defaultTopic} className={inputClass}>
            <option value="order">Ordering products</option>
            <option value="bulk">Bulk / wholesale</option>
            <option value="farmer">Partnering as a farmer</option>
            <option value="other">Something else</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold text-forest">
        Message
        <textarea name="message" rows={5} defaultValue={defaultMessage} className={inputClass} required />
        {state.errors?.message && <span className="mt-1 block text-sm text-soil">{state.errors.message}</span>}
      </label>

      {state.message && !state.ok && (
        <p aria-live="polite" className="text-sm font-medium text-soil">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-forest px-8 py-3.5 font-semibold text-cream transition hover:bg-moss disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
