import type { Build } from "@/lib/types";

/**
 * Build 001 — flagship. Fully populated per the master config schema.
 * All payload data is mock and labeled as such (Article IX).
 */
export const build001: Build = {
  buildNumber: 1,
  slug: "claims-intake",
  name: "Agentic Claims Intake & Triage",
  sector: "Banking, Finance, FinTech & Insurance",
  tagline:
    "Upload a claim, watch the agent extract entities, run a grounded coverage lookup, cross-check for fraud, and escalate to a human when confidence drops.",
  status: "preview",
  whatItDoes: [
    "A claim arrives as a document. Normally an adjuster reads it, keys the details into the claims system, checks coverage by hand, and decides where it goes.",
    "This pipeline runs those steps as one flow: n8n parses the document, an LLM extracts entities against a fixed schema, a grounded lookup checks coverage, and a fraud cross-check scores the claim.",
    "When the confidence score drops below threshold, the claim escalates to a human instead of auto-deciding. Every step writes to an audit trail, so any routing decision traces back to the evidence that produced it.",
  ],
  stack: ["n8n", "OpenAI API", "Next.js", "Vercel"],
  architecture: {
    diagramAlt:
      "Four-layer flow: claim document enters the Next.js page, n8n orchestrates parsing and routing, the AI layer extracts and scores, and results plus audit records land in the data layer.",
    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Claim upload, live status, and rendered payload for the demo.",
      },
      {
        layer: "Orchestration",
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Document parsing, coverage lookup, fraud cross-check, and the human-in-the-loop escalation gate.",
      },
      {
        layer: "Data",
        technology: "Object storage + routing queues",
        responsibility:
          "Claim documents, extraction records, routing queues, and the audit log.",
        unresolved: true, // storage layer pending deep-build (Article IX)
      },
      {
        layer: "AI",
        technology: "OpenAI API (schema-validated calls)",
        responsibility:
          "Entity extraction, grounded coverage lookup, and fraud scoring.",
      },
    ],
    flow: "Claim uploaded on the demo page → n8n webhook receives the file reference → document parsed and entities extracted against a fixed schema → grounded coverage lookup runs → fraud cross-check scores the claim → confidence below threshold escalates to a human, otherwise routes to the correct queue → audit record written, structured result returned.",
  },
  payload: {
    caption: "Mock data — representative of the production schema.",
    input: {
      event: "claim.received",
      submitted_at: "2026-07-05T14:12:00Z",
      source: "claims.elwoodberry.com",
      fields: {
        filename: "auto-claim-4471.pdf",
        pages: 12,
        policy_ref: "MOCK-2026-0091",
      },
    },
    output: {
      status: "triaged",
      confidence: 0.91,
      routed_to: "queue:adjuster-review",
      audit_id: "ias-demo-001-0001",
    },
  },
  links: {
    github: "https://github.com/elwoodberry3/ias-build-001-claims-intake",
    demo: "https://claims.elwoodberry.com",
    booking: "/contact/",
  },
};
