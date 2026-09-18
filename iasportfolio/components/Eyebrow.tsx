/**
 * Eyebrow — a small mono label above a section heading. Uppercase, tracked out,
 * with a short accent rule. Used as a consistent section signpost.
 */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-eyebrow uppercase text-secondary">
      <span aria-hidden="true" className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}
