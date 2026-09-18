/**
 * IAS build schema — the single source of truth for every demo.
 * Types are enforced at build time (Article VIII): a build that omits a
 * required field fails `next build` rather than shipping a broken card.
 *
 * Field names trace directly to master__build.config.ts.csv.
 */

/**
 * BuildStatus — defined once, imported everywhere.
 * "live" is the ONLY status permitted to use Kinetic Emerald (Article VI):
 * the accent means "genuinely running," nothing else.
 */
export type BuildStatus =
  | "live" // deployed, reachable, working right now
  | "preview" // demo shell up, wired to mock data
  | "in-progress" // actively being built
  | "planned"; // scoped, not yet started

export interface ArchitectureLayer {
  /** e.g. "Presentation", "Orchestration", "Data", "AI" */
  layer: string;
  /** e.g. "Next.js on Vercel", "n8n (cloud-hosted)" */
  technology: string;
  /** what this layer is responsible for */
  responsibility: string;
  /**
   * TODO marker (Article IX): when a layer is genuinely undecided,
   * set unresolved:true and the UI renders a visible TODO chip instead
   * of inventing a technology we haven't chosen.
   */
  unresolved?: boolean;
}

export interface Architecture {
  /** optional diagram image in /public/architecture */
  diagramSrc?: string;
  /** screen-reader description of the diagram */
  diagramAlt?: string;
  layers: ArchitectureLayer[];
  /** one-line prose walkthrough of the end-to-end flow */
  flow: string;
}

export interface SamplePayload {
  /** honest caption — always labels the data as mock */
  caption: string;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
}

export interface BuildLinks {
  github?: string;
  /** the deployed demo URL (subdomain of elwoodberry.com) */
  demo?: string;
  /** persona-routed booking page */
  booking: string;
}

export interface Build {
  /** stable numeric id, e.g. 1 → "001" */
  buildNumber: number;
  /** url slug, e.g. "claims-intake" */
  slug: string;
  name: string;
  sector: string;
  /** one-line hook shown on cards and the build hero */
  tagline: string;
  status: BuildStatus;
  /**
   * What it does — plain-language paragraphs. Written from the user's side
   * of the screen, never fabricated outcomes or invented metrics (Article IX).
   */
  whatItDoes: string[];
  /** technologies, comma-free array for clean chips */
  stack: string[];
  architecture: Architecture;
  payload: SamplePayload;
  links: BuildLinks;
}

/** A sector groups builds on the Demos page. */
export interface Sector {
  name: string;
  slug: string;
  builds: Build[];
}
