import type { BuildStatus } from "@/lib/types";

/**
 * StatusChip — the single source of truth for how a build's status renders.
 *
 * Article VI: Kinetic Emerald is reserved for genuinely live builds. Only the
 * "live" case uses the accent (with a pulsing dot). Everything else uses
 * neutral / seafoam tones, so the emerald always means "running right now."
 */

const STATUS_META: Record<
  BuildStatus,
  { label: string; className: string; live?: boolean }
> = {
  live: {
    label: "Live",
    live: true,
    className: "bg-[rgba(0,229,163,0.12)] text-primary border-accent-30",
  },
  preview: {
    label: "Preview",
    className: "bg-secondary-50 text-secondary-700 border-secondary-200",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-primary-50 text-primary border-primary-100",
  },
  planned: {
    label: "Planned",
    className: "bg-ash text-muted-gray border-border-gray",
  },
};

export function StatusChip({
  status,
  className = "",
}: {
  status: BuildStatus;
  className?: string;
}) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${meta.className} ${className}`}
    >
      {meta.live && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-live"
        />
      )}
      {meta.label}
    </span>
  );
}
