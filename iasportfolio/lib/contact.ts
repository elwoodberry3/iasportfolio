/**
 * contact.ts — bridges the /contact form to the IAS Unified Intake webhook.
 *
 * The form speaks the repo's persona vocabulary (executive / recruiter /
 * consulting). The ecosystem webhook (`/webhook/ias-lead`) speaks a FLAT schema:
 *   { email, first_name, stage, ias_source, ias_last_asset, ... }
 * This file is the single mapping seam. buildEnvelope now returns that flat body
 * directly (previously it nested everything under `contact`, which the unified
 * workflow does not read — email came through undefined and the lead was dropped).
 *
 * The form POSTs this body to /api/contact (same-origin), and that server route
 * forwards to n8n with the x-ias-secret header. Nothing here touches the secret.
 */

// ── Repo persona id -> schema ias_source ────────────────────────────────────
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
      // "Automate a workflow for my team" — retainer / consulting path.
      return "portfolio_exec";
    case "executive":
    default:
      // In-house hiring manager with a role/ops problem to see built.
      return "portfolio_hiring_manager";
  }
}

// ── Acquisition channel ──────────────────────────────────────────────────────
export type IasChannel =
  | "linkedin" | "youtube" | "instagram" | "facebook"
  | "tiktok" | "threads" | "direct" | "referral";

const CHANNELS: IasChannel[] = [
  "linkedin", "youtube", "instagram", "facebook",
  "tiktok", "threads", "direct", "referral",
];

/** Read channel from UTM first (deterministic), then referrer. Browser-safe. */
export function readChannel(): IasChannel {
  if (typeof window === "undefined") return "direct";
  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") || params.get("ref") || "").toLowerCase().trim();
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

/**
 * The FLAT wire contract the unified `ias-lead` workflow reads.
 * Extra fields (channel, company, last_name, message) are retained by n8n but
 * do not affect routing; the workflow keys on email, stage, ias_source.
 */
export interface UnifiedIntakeBody {
  email: string;
  first_name: string;
  last_name?: string;
  company?: string;
  stage: "contact";                 // Portfolio contact form is always stage=contact
  ias_source: IasSource;            // persona -> portfolio_* (a valid enum value)
  ias_last_asset: string;           // campaign axis (free text)
  channel?: IasChannel;
  message?: string;
  meta?: Record<string, unknown>;
}

/**
 * Build the flat body the webhook expects. Splits a single "name" field into
 * first/last on the first space (the form collects one name field).
 */
export function buildEnvelope(input: {
  persona: RepoPersona;
  name: string;
  email: string;
  org?: string;
  message: string;
}): UnifiedIntakeBody {
  const trimmed = input.name.trim();
  const spaceAt = trimmed.indexOf(" ");
  const firstName = spaceAt === -1 ? trimmed : trimmed.slice(0, spaceAt);
  const lastName = spaceAt === -1 ? "" : trimmed.slice(spaceAt + 1);

  return {
    email: input.email.trim().toLowerCase(),
    first_name: firstName,
    last_name: lastName,
    company: input.org?.trim() || "",
    stage: "contact",
    ias_source: personaToSource(input.persona),
    ias_last_asset: "contact-form",
    channel: readChannel(),
    message: input.message.trim(),
    meta: { alsoNotify: "portfolio-notify", origin: "portfolio-contact" },
  };
}
