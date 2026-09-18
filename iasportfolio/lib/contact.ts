/**
 * contact.ts — bridges the /contact form to the IAS universal upsert webhook.
 *
 * The form speaks the repo's persona vocabulary (executive / recruiter /
 * consulting). The ecosystem webhook speaks the schema's ias_source vocabulary
 * (portfolio_*). This file is the single mapping seam between the two, so the
 * form component never has to know the wire contract and the contract can
 * change without touching UI.
 *
 * Static-export safe: everything here runs in the browser. No server route —
 * output:"export" forbids one — the form POSTs straight to n8n.
 */

// ── Repo persona id -> schema ias_source ────────────────────────────────────
// The repo collapses "executive" and "hiring manager" into one card. The
// ecosystem distinguishes them, so we resolve using a second signal: an org
// with a recruiting-agency shape stays exec; otherwise an "executive" who
// names a role maps to hiring_manager. Without that signal we default to the
// safer, higher-intent portfolio_exec (direct-hire / retainer path).
export type RepoPersona = "executive" | "recruiter" | "consulting";

export type IasSource =
  | "portfolio_exec"
  | "portfolio_recruiter"
  | "portfolio_hiring_manager"
  | "bootcamp_subscriber"
  | "tool_agentforge"
  | "tool_brandforge";

export function personaToSource(persona: RepoPersona): IasSource {
  switch (persona) {
    case "recruiter":
      return "portfolio_recruiter";
    case "consulting":
      // "Automate a workflow for my team" — the Don Seelye case.
      return "portfolio_exec";
    case "executive":
    default:
      // In-house hiring manager with a role/ops problem to see built.
      return "portfolio_hiring_manager";
  }
}

// ── Acquisition channel (ias_source_channel) ────────────────────────────────
export type IasChannel =
  | "linkedin"
  | "youtube"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "threads"
  | "direct"
  | "referral";

const CHANNELS: IasChannel[] = [
  "linkedin",
  "youtube",
  "instagram",
  "facebook",
  "tiktok",
  "threads",
  "direct",
  "referral",
];

/**
 * Read channel from UTM first (deterministic), then referrer (fallback).
 * First-party only — no third-party pixels. Safe to call in the browser.
 */
export function readChannel(): IasChannel {
  if (typeof window === "undefined") return "direct";

  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") || params.get("ref") || "")
    .toLowerCase()
    .trim();
  const fromUtm = CHANNELS.find((c) => c === utm);
  if (fromUtm) return fromUtm;

  const ref = (typeof document !== "undefined" ? document.referrer : "").toLowerCase();
  if (!ref) return "direct";
  if (ref.includes("lnkd.in") || ref.includes("linkedin")) return "linkedin";
  if (ref.includes("youtube") || ref.includes("youtu.be")) return "youtube";
  if (ref.includes("instagram")) return "instagram";
  if (ref.includes("facebook") || ref.includes("fb.")) return "facebook";
  if (ref.includes("tiktok")) return "tiktok";
  if (ref.includes("threads")) return "threads";
  return "referral";
}

// ── The wire contract (mirror of ecosystem contacts.schema.ts) ──────────────
export interface IasContactInput {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  source: IasSource;
  channel?: IasChannel;
  lastAsset?: string;
  message?: string;
}

export interface UpsertEnvelope {
  contact: IasContactInput;
  emailTemplate: "portfolio-ack";
  meta?: Record<string, unknown>;
}

/**
 * Build the envelope the webhook expects. Splits a single "name" field into
 * first/last on the first space (the form collects one name field).
 */
export function buildEnvelope(input: {
  persona: RepoPersona;
  name: string;
  email: string;
  org?: string;
  message: string;
}): UpsertEnvelope {
  const trimmed = input.name.trim();
  const spaceAt = trimmed.indexOf(" ");
  const firstName = spaceAt === -1 ? trimmed : trimmed.slice(0, spaceAt);
  const lastName = spaceAt === -1 ? "" : trimmed.slice(spaceAt + 1);

  return {
    contact: {
      email: input.email.trim().toLowerCase(),
      firstName,
      lastName,
      company: input.org?.trim() || "",
      source: personaToSource(input.persona),
      channel: readChannel(),
      lastAsset: "booking-ack",
      message: input.message.trim(),
    },
    emailTemplate: "portfolio-ack",
    // Tells n8n to also fire the internal portfolio-notify to Elwood.
    meta: { alsoNotify: "portfolio-notify", origin: "portfolio-contact" },
  };
}
