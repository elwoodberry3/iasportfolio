import type { Build } from "@/lib/types";

/**
 * Build 002 — fully populated from master__build.config.ts.csv.
 * All payload data is mock and labeled as such (Article IX).
 */
export const build002: Build = {
  buildNumber: 2,
  slug: "doc-intake",
  name: "Document Ingestion & Analysis",
  sector: "Legal & Compliance Services",
  tagline:
    "Splits immense PDF bundles, extracts key data via AI, and auto-sorts contracts, leases, and evidence packets into the right queue.",
  status: "preview",
  whatItDoes: [
    "Law firms and compliance teams receive discovery bundles, lease packages, and evidence sets as single massive PDFs. Someone splits them, reads them, and files them by hand.",
    "This pipeline does all three: n8n splits the bundle into individual documents, an LLM extracts key entities against a fixed schema, and each document routes to its correct downstream queue automatically.",
    "Every action writes to an audit trail, so the sorting decision is always traceable back to the extracted evidence.",
  ],
  stack: ["n8n", "OpenAI API", "Next.js", "Vercel"],
  architecture: {
    diagramAlt: "TODO: describe the diagram for screen readers.",
    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, document upload UI, status and payload rendering.",
      },
      {
        layer: "Orchestration",
        technology: "n8n (cloud-hosted)",
        responsibility:
          "PDF bundle splitting, schema-validated LLM extraction, classification, queue routing.",
      },
      {
        layer: "Data",
        technology: "Object storage + queue selection",
        responsibility:
          "Document storage, extraction records, routing queues, audit log.",
        unresolved: true, // object storage + queue selection pending deep-build
      },
      {
        layer: "AI",
        technology: "OpenAI API (schema-validated calls)",
        responsibility:
          "Entity extraction and document classification from split PDFs.",
      },
    ],
    flow: "Bundle uploaded via demo page → n8n webhook receives file reference → PDF split into individual documents → LLM extracts entities per fixed schema → each document classified and routed to its queue → audit record written, structured result returned.",
  },
  payload: {
    caption: "Mock data — representative of the production schema.",
    input: {
      event: "doc.bundle.received",
      submitted_at: "2026-07-05T14:12:00Z",
      source: "doc-intake.elwoodberry.com",
      fields: {
        filename: "discovery-bundle-0347.pdf",
        pages: 182,
        matter_ref: "MOCK-2026-0113",
      },
    },
    output: {
      status: "processed",
      confidence: 0.94,
      routed_to: "queue:contracts-review",
      audit_id: "ias-demo-002-0001",
    },
  },
  links: {
    github: "https://github.com/elwoodberry3/ias-build-002-doc-intake",
    demo: "https://doc-intake.elwoodberry.com",
    booking: "/contact/",
  },
};
