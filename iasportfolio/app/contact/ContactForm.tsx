"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { personas } from "@/lib/site.config";
import { buildEnvelope, type RepoPersona } from "@/lib/contact";

/**
 * ContactForm — persona-first. The visitor picks who they are, and the form
 * adapts its final question and routes to the right pipeline. On a static host
 * there is no server action, so submit posts to a webhook endpoint when
 * configured and always confirms via /thankyou.
 *
 * TODO: set NEXT_PUBLIC_CONTACT_ENDPOINT to the live intake webhook (n8n/HubSpot).
 * Until then the form validates and confirms without transmitting.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

// https://plutomation.app.n8n.cloud/webhook/ias-contact-upsert
// https://iautomateshit.app.n8n.cloud/webhook/ias-contact-upsert

// Attribution — every lead is traceable to this form.
const SOURCE = "http://i-automate-shit.com/contact";

export function ContactForm() {
  const router = useRouter();
  const [persona, setPersona] = useState<string>(personas[0].id);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real user never fills the hidden company_website field.
    // If it's populated, silently succeed (confirm to the bot, send nothing).
    // n8n also enforces this server-side as defense in depth.
    const honeypot = String(data.get("company_website") ?? "").trim();
    if (honeypot) {
      router.push(`/thankyou/?persona=${persona}`);
      return;
    }

    // Client-side validation with clear, specific messages.
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim())
      next.name = "Enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Check the email format.";
    if (!String(data.get("message") ?? "").trim())
      next.message = "Add a sentence about what you need.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");

    // Build the ecosystem UpsertEnvelope. The persona -> ias_source mapping,
    // channel attribution, and name split all live in lib/contact.ts so this
    // component stays UI-only. n8n handles HubSpot upsert + Resend send.
    const envelope = buildEnvelope({
      persona: persona as RepoPersona,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      org: String(data.get("org") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    // Carry the form-level source + timestamp + honeypot echo as non-mapped
    // metadata so n8n retains provenance and can re-check the honeypot server
    // side (defense in depth). These live in meta, not on the contact record.
    const payload = {
      ...envelope,
      meta: {
        ...envelope.meta,
        formSource: SOURCE,
        submittedAt: new Date().toISOString(),
        honeypot, // always "" for humans; n8n drops the lead if populated
      },
    };

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("bad response");
      }
      router.push(`/thankyou/?persona=${persona}`);
    } catch {
      setStatus("error");
    }
  }

  const activePersona = personas.find((p) => p.id === persona)!;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Persona selector */}
      <fieldset>
        <legend className="font-mono text-eyebrow uppercase tracking-wider text-secondary">
          Who&apos;s reaching out?
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {personas.map((p) => {
            const selected = persona === p.id;
            return (
              <label
                key={p.id}
                className={`cursor-pointer rounded-card border p-4 transition-colors ${
                  selected
                    ? "border-accent-30 bg-[rgba(0,229,163,0.04)]"
                    : "border-border-gray bg-white hover:border-secondary-200"
                }`}
              >
                <input
                  type="radio"
                  name="persona"
                  value={p.id}
                  checked={selected}
                  onChange={() => setPersona(p.id)}
                  className="sr-only"
                />
                <span className="block font-semibold text-primary">
                  {p.label}
                </span>
                <span className="mt-1 block text-sm text-body-gray">
                  {p.blurb}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Honeypot — hidden from humans and assistive tech, visible to bots.
          Kept out of the tab order and off-screen; not display:none so naive
          bots still fill it. Leave empty; if filled, submission is dropped. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website (leave blank)</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* Fields */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label="Name"
          error={errors.name}
          autoComplete="name"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <Field
        name="org"
        label={
          activePersona.id === "recruiter" ? "Company / agency" : "Organization"
        }
        optional
        autoComplete="organization"
      />

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-sm font-medium text-primary"
        >
          {activePersona.id === "consulting"
            ? "What would you automate?"
            : activePersona.id === "recruiter"
              ? "What's the role?"
              : "What do you want to see built?"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-card border border-border-gray bg-white p-3 text-ink outline-none transition-colors focus:border-accent"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-card border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          That didn&apos;t send. Try again, or email direct if it keeps failing.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-btn bg-accent px-7 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-accent-600 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  optional,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-sm font-medium text-primary"
      >
        {label}
        {optional && (
          <span className="ml-1 font-normal text-muted-gray">(optional)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-card border border-border-gray bg-white p-3 text-ink outline-none transition-colors focus:border-accent"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
