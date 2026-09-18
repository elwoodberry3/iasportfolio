import type { Build } from "@/lib/types";

/**
 * Builds 003–019 — grounded in projects__v_2026_07_04.csv.
 * Status is "planned" for builds whose demo shell and deep-build
 * detail are not yet published. Architecture and payload carry a
 * single visible TODO layer rather than fabricated internals (Article IX).
 * As each build ships, replace its entry with a fully-populated config
 * like build-001-claims-intake.ts.
 */
export const generatedBuilds: Build[] = [
  {
    buildNumber: 3,
    slug: "playbook-audit",
    name: "Playbook & Risk Audits",
    sector: "Legal & Compliance Services",
    tagline: "Scans contract clauses against company playbooks, flags deviations automatically, and auto-suggests redlines in plain language.",
    status: "planned",
    whatItDoes: ["Scans contract clauses against company playbooks, flags deviations automatically, and auto-suggests redlines in plain language."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Automated contract review pipeline: ingests clause-level text, runs RAG comparison against company playbooks, flags non-standard deviations, and generates plain-language redline suggestions without human review at intake.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-003-playbook-audit",
      demo: "https://playbook-audit.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 4,
    slug: "compliance-ops",
    name: "Compliance Orchestration",
    sector: "Legal & Compliance Services",
    tagline: "Automates policy mapping, gathers audit evidence on schedule, and processes vendor risk assessment questionnaires end to end.",
    status: "planned",
    whatItDoes: ["Automates policy mapping, gathers audit evidence on schedule, and processes vendor risk assessment questionnaires end to end."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "End-to-end compliance workflow: maps policies to control frameworks on a cron schedule, auto-collects audit evidence from connected systems, and processes vendor risk questionnaires via structured n8n sub-workflows.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-004-compliance-ops",
      demo: "https://compliance-ops.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 5,
    slug: "rev-cycle",
    name: "Revenue Cycle & Reconciliation",
    sector: "Banking, Finance, FinTech & Insurance",
    tagline: "Integrates billing data across CRM, legacy ledger software, and accounting systems to eliminate manual reconciliation entry.",
    status: "planned",
    whatItDoes: ["Integrates billing data across CRM, legacy ledger software, and accounting systems to eliminate manual reconciliation entry."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Multi-system revenue reconciliation pipeline: syncs billing records across CRM, legacy ledger, and accounting platforms via n8n, detects mismatches automatically, and eliminates manual data-entry at every reconciliation cycle.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-005-rev-cycle",
      demo: "https://rev-cycle.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 6,
    slug: "fraud-monitor",
    name: "Fraud & Risk Monitoring",
    sector: "Banking, Finance, FinTech & Insurance",
    tagline: "Cross-checks real-time transaction streams against historical patterns and alerts risk teams instantly when an anomaly surfaces.",
    status: "planned",
    whatItDoes: ["Cross-checks real-time transaction streams against historical patterns and alerts risk teams instantly when an anomaly surfaces."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Real-time fraud detection pipeline: ingests live transaction streams via webhook, cross-references historical pattern vectors, scores anomalies, and fires instant Slack and email alerts to risk teams when threshold is breached.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-006-fraud-monitor",
      demo: "https://fraud-monitor.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 7,
    slug: "ehr-sync",
    name: "EHR & EMR Synchronization",
    sector: "Healthcare Operations & Medical Billing",
    tagline: "Bridges fragmented healthcare databases, mHealth apps, and lab systems to sync records securely between departments.",
    status: "planned",
    whatItDoes: ["Bridges fragmented healthcare databases, mHealth apps, and lab systems to sync records securely between departments."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Bidirectional EHR/EMR sync pipeline: bridges fragmented healthcare databases, mHealth apps, and lab systems through n8n HTTP nodes with schema normalization, HIPAA-aware field masking, and department-level routing logic.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-007-ehr-sync",
      demo: "https://ehr-sync.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 8,
    slug: "patient-journey",
    name: "Patient Journey Automations",
    sector: "Healthcare Operations & Medical Billing",
    tagline: "Automates intake forms, AI-driven scheduling coordination, and conditional post-visit care reminders without front-desk involvement.",
    status: "planned",
    whatItDoes: ["Automates intake forms, AI-driven scheduling coordination, and conditional post-visit care reminders without front-desk involvement."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Full patient journey automation: handles digital intake, AI-assisted scheduling coordination, and conditional post-visit care reminder sequences — zero front-desk touchpoints from initial contact through discharge follow-up.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-008-patient-journey",
      demo: "https://patient-journey.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 9,
    slug: "claims-eligibility",
    name: "AI Claims & Eligibility Processing",
    sector: "Healthcare Operations & Medical Billing",
    tagline: "Extracts patient details from paperwork, verifies insurance active-status before delivery, and routes claims to the correct payer natively.",
    status: "planned",
    whatItDoes: ["Extracts patient details from paperwork, verifies insurance active-status before delivery, and routes claims to the correct payer natively."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "AI-driven medical claims pipeline: extracts patient and procedure data from source documents, runs real-time insurance eligibility verification before service delivery, and routes clean claims to the correct payer without manual entry.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-009-claims-eligibility",
      demo: "https://claims-eligibility.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 10,
    slug: "invoice-intake",
    name: "Invoice & Field Log Intake",
    sector: "Supply Chain, Logistics & Construction",
    tagline: "Parses invoices, delivery bills, and field logs from diverse sub-contractors, validates structural fields, and passes clean data to ERP.",
    status: "planned",
    whatItDoes: ["Parses invoices, delivery bills, and field logs from diverse sub-contractors, validates structural fields, and passes clean data to ERP."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Subcontractor document ingestion pipeline: parses invoices, delivery bills, and field logs from heterogeneous formats, validates required structural fields, flags exceptions, and pushes clean records directly into ERP via API.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-010-invoice-intake",
      demo: "https://invoice-intake.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 11,
    slug: "inventory-ops",
    name: "Inventory Control & Alerts",
    sector: "Supply Chain, Logistics & Construction",
    tagline: "Connects warehouse databases with supply monitors to auto-trigger procurement workflows the moment raw materials hit minimum stock.",
    status: "planned",
    whatItDoes: ["Connects warehouse databases with supply monitors to auto-trigger procurement workflows the moment raw materials hit minimum stock."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Real-time inventory control system: monitors warehouse stock levels via database polling, fires n8n procurement sub-workflows the moment raw materials cross minimum threshold, and logs restocking actions for audit review.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-011-inventory-ops",
      demo: "https://inventory-ops.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 12,
    slug: "freight-pipeline",
    name: "Real-Time Freight Pipelines",
    sector: "Supply Chain, Logistics & Construction",
    tagline: "Moves shipping data from third-party carrier APIs into corporate data warehouses with built-in error handling for seamless tracking.",
    status: "planned",
    whatItDoes: ["Moves shipping data from third-party carrier APIs into corporate data warehouses with built-in error handling for seamless tracking."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Live freight data pipeline: polls third-party carrier APIs on a cron schedule, normalizes shipping event payloads, and pushes clean tracking records into corporate data warehouses with built-in retry logic and error alerting.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-012-freight-pipeline",
      demo: "https://freight-pipeline.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 13,
    slug: "support-agent",
    name: "Self-Correcting Support Agents",
    sector: "Mid-Market SaaS & Tech Startups",
    tagline: "Autonomous pipelines using n8n's advanced AI nodes to deploy self-correcting agents across customer success and internal knowledge management.",
    status: "planned",
    whatItDoes: ["Autonomous pipelines using n8n's advanced AI nodes to deploy self-correcting agents across customer success and internal knowledge management."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Self-correcting support agent pipeline: uses n8n AI nodes to deploy autonomous agents across customer success and internal knowledge workflows, with built-in reflection loops that detect failed responses and re-route automatically.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-013-support-agent",
      demo: "https://support-agent.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 14,
    slug: "lead-enrichment",
    name: "Hyper-Targeted Lead Enrichment",
    sector: "Mid-Market SaaS & Tech Startups",
    tagline: "Deeply customized lead-enrichment trees connecting CRMs, LinkedIn scrapers, and browser agents — built to avoid exploding API costs.",
    status: "planned",
    whatItDoes: ["Deeply customized lead-enrichment trees connecting CRMs, LinkedIn scrapers, and browser agents — built to avoid exploding API costs."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Cost-controlled lead enrichment system: connects CRM records to LinkedIn scraping and browser agents via conditional n8n trees that only call premium APIs when cheaper enrichment sources fail to return sufficient signal.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-014-lead-enrichment",
      demo: "https://lead-enrichment.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 15,
    slug: "telemetry-plays",
    name: "Product Telemetry → Account Plays",
    sector: "Mid-Market SaaS & Tech Startups",
    tagline: "Connects real-time usage analytics directly to Slack to trigger specialized account management plays the moment user behavior shifts.",
    status: "planned",
    whatItDoes: ["Connects real-time usage analytics directly to Slack to trigger specialized account management plays the moment user behavior shifts."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Product-led account play engine: streams real-time usage events into n8n, evaluates behavioral thresholds, and fires specialized Slack account management plays the moment a user's in-app behavior signals expansion or churn risk.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-015-telemetry-plays",
      demo: "https://telemetry-plays.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 16,
    slug: "event-parking",
    name: "Event Parking Marketplace (Project Baseline)",
    sector: "Civic & Municipal Infrastructure",
    tagline: "Dual-sided marketplace that lets residents rent out driveways near the Kalamazoo Event Center — real-time map search, guaranteed reservations, digital payment, and automated overstay handling.",
    status: "planned",
    whatItDoes: ["Dual-sided marketplace that lets residents rent out driveways near the Kalamazoo Event Center — real-time map search, guaranteed reservations, digital payment, and automated overstay handling."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Hyper-local parking marketplace MVP: Next.js app on Vercel with provider dashboards, real-time availability search, transaction clearing, and agentic overstay workflows that escalate SMS warnings, apply surcharges, and reroute inbound guests to open spots.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-016-event-parking",
      demo: "https://event-parking.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 17,
    slug: "drive-followup",
    name: "Instant-Drive Follow-Up",
    sector: "Automotive Retail & Dealership Operations",
    tagline: "Rep enters a prospect's name and vehicle from the passenger seat — the system fires a personalized collateral package, vehicle history links, a tailored text follow-up, and a CRM update instantly.",
    status: "planned",
    whatItDoes: ["Rep enters a prospect's name and vehicle from the passenger seat — the system fires a personalized collateral package, vehicle history links, a tailored text follow-up, and a CRM update instantly."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Post-test-drive lead nurture portal: mobile-first Next.js intake that triggers a personalized digital collateral package, inserts live vehicle history links, sends tailored SMS follow-up, and writes the lead to the dealership CRM in one pass.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-017-drive-followup",
      demo: "https://drive-followup.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 18,
    slug: "dealerdesk",
    name: "DealerDesk Calculator",
    sector: "Automotive Retail & Dealership Operations",
    tagline: "Unifies trade-in appraisal, live valuation data, localized finance simulation, and dealer yield visibility on a single screen — no more tab-toggling at the negotiation table.",
    status: "planned",
    whatItDoes: ["Unifies trade-in appraisal, live valuation data, localized finance simulation, and dealer yield visibility on a single screen — no more tab-toggling at the negotiation table."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "Unified deal-desk dashboard: pulls live trade-in valuation data from third-party APIs, simulates localized finance options, and renders internal dealer yield data side-by-side so reps never leave one screen during negotiation.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-018-dealerdesk",
      demo: "https://dealerdesk.elwoodberry.com",
      booking: "/contact/",
    },
  },
  {
    buildNumber: 19,
    slug: "voltflow",
    name: "VoltFlow Delivery Assistant",
    sector: "Automotive Retail & Dealership Operations",
    tagline: "Automates EV buyer onboarding at delivery — zip-code-aware charging maps, dealership charger callouts, and rebate links filed electronically so reps stop repeating the same EV walkthrough.",
    status: "planned",
    whatItDoes: ["Automates EV buyer onboarding at delivery — zip-code-aware charging maps, dealership charger callouts, and rebate links filed electronically so reps stop repeating the same EV walkthrough."],
    stack: ["n8n", "Next.js", "Vercel"],
    architecture: {
      layers: [
        {
          layer: "Architecture",
          technology: "Pending deep-build",
          responsibility: "EV delivery onboarding app: cross-references buyer zip code against regional EV parameters, auto-generates custom charging maps with dealership charger callouts, and electronically files federal/state rebate links at handoff.",
          unresolved: true,
        },
      ],
      flow: "TODO: document the end-to-end flow when this build ships.",
    },
    payload: {
      caption: "TODO: sample payload pending build. Data shown on live demos is mock and labeled.",
      input: {},
      output: {},
    },
    links: {
      github: "https://github.com/elwoodberry3/ias-build-019-voltflow",
      demo: "https://voltflow.elwoodberry.com",
      booking: "/contact/",
    },
  },
];
