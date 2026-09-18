import Link from "next/link";
import type { Build } from "@/lib/types";
import { buildId } from "@/data/builds";
import { StatusChip } from "./StatusChip";

/**
 * BuildCard — the repeating unit across Home and Demos. Leads with the build
 * number set in mono (the build IS a numbered sequence, so the numbering
 * encodes real information), then name, tagline, and stack chips.
 */
export function BuildCard({ build }: { build: Build }) {
  return (
    <Link
      href={`/builds/${build.slug}/`}
      className="group flex h-full flex-col rounded-card border border-border-gray bg-white p-5 transition-all hover:border-accent-30 hover:shadow-[0_2px_20px_rgba(10,46,54,0.06)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-bold text-secondary">
          {buildId(build.buildNumber)}
        </span>
        <StatusChip status={build.status} />
      </div>

      <h3 className="mt-3 text-lg font-semibold text-primary transition-colors group-hover:text-secondary-700">
        {build.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-body-gray">
        {build.tagline}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {build.stack.slice(0, 4).map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-ash px-2 py-0.5 font-mono text-xs text-muted-gray"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
