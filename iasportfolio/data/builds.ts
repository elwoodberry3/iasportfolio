import type { Build, Sector } from "@/lib/types";
import { build001 } from "./build-001-claims-intake";
import { build002 } from "./build-002-doc-intake";
import { generatedBuilds } from "./generated-builds";

/**
 * The build registry — the one place the whole site reads builds from.
 *
 * To add a build: write data/build-NNN-slug.ts (copy 001 as the template),
 * import it here, and drop it in the array. The Demos page, build pages,
 * sitemap, and static params all update from this single edit.
 */
export const builds: Build[] = [build001, build002, ...generatedBuilds].sort(
  (a, b) => a.buildNumber - b.buildNumber,
);

/** Zero-padded build id, e.g. 1 → "001". */
export function buildId(n: number): string {
  return String(n).padStart(3, "0");
}

/** Look up a build by its url slug. */
export function getBuild(slug: string): Build | undefined {
  return builds.find((b) => b.slug === slug);
}

/**
 * Sector order for the Demos page. Fixed order keeps the page stable as
 * builds are added; a sector only appears once it has at least one build.
 */
const SECTOR_ORDER = [
  "Banking, Finance, FinTech & Insurance",
  "Legal & Compliance Services",
  "Healthcare Operations & Medical Billing",
  "Supply Chain, Logistics & Construction",
  "Mid-Market SaaS & Tech Startups",
  "Automotive Retail & Dealership Operations",
  "Civic & Municipal Infrastructure",
];

function slugifySector(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Builds grouped by sector, in fixed display order. */
export function getSectors(): Sector[] {
  const known = SECTOR_ORDER.filter((name) =>
    builds.some((b) => b.sector === name),
  );
  // Include any sector present in data but missing from SECTOR_ORDER,
  // so a new sector never silently disappears.
  const extras = [...new Set(builds.map((b) => b.sector))].filter(
    (name) => !SECTOR_ORDER.includes(name),
  );

  return [...known, ...extras].map((name) => ({
    name,
    slug: slugifySector(name),
    builds: builds
      .filter((b) => b.sector === name)
      .sort((a, b) => a.buildNumber - b.buildNumber),
  }));
}

/** Simple counts for the home page — real numbers, no inflation (Article IX). */
export function getStats() {
  const total = builds.length;
  const live = builds.filter((b) => b.status === "live").length;
  const preview = builds.filter((b) => b.status === "preview").length;
  const sectors = new Set(builds.map((b) => b.sector)).size;
  return { total, live, preview, sectors };
}
