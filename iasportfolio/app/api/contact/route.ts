/**
 * POST /api/contact — server-side intake proxy for the Portfolio contact form.
 *
 * WHY THIS EXISTS: the contact form is a client component. The n8n shared secret
 * (N8N_WEBHOOK_SECRET) must never ship in the browser bundle, so the browser posts
 * here (same-origin) and THIS server route forwards to n8n with the secret in the
 * `x-ias-secret` header. This mirrors how Bootcamp / BrandForge / AgentForge work.
 *
 * REQUIRES: next.config.mjs must NOT use `output: "export"` (static export forbids
 * route handlers). See the patched next.config.mjs in this bundle.
 *
 * ENV (server-side, NOT NEXT_PUBLIC — shared across the ecosystem):
 *   N8N_WEBHOOK_URL     = https://iautomateshit.app.n8n.cloud/webhook/ias-lead
 *   N8N_WEBHOOK_SECRET  = <shared secret the workflow verifies>
 *
 * The browser always gets a 200 (mirrors the workflow's own contract); invalid
 * or honeypot submissions are dropped server-side without forwarding.
 */

import { NextResponse } from "next/server";

// Node runtime so process.env secrets are available at request time.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // Malformed JSON — confirm to the client, forward nothing.
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Honeypot re-check (defense in depth; the form also checks client-side).
  const honeypot = String((body.meta as Record<string, unknown>)?.honeypot ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  if (honeypot || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) {
    // Demo-mode seam: no webhook configured → log, still confirm to the user.
    console.warn("[contact] N8N_WEBHOOK_URL unset — lead not forwarded:", email);
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_WEBHOOK_SECRET
          ? { "x-ias-secret": process.env.N8N_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`n8n responded ${res.status}`);
  } catch (err) {
    console.error("[contact] forward to n8n failed:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
