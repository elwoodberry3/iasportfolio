/**
 * TodoChip — Article IX. Renders a visible, unmissable marker anywhere a value
 * is genuinely unresolved. We show honest gaps instead of inventing detail.
 * The red treatment is intentional: a TODO should look like a TODO, not blend in.
 */
export function TodoChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-50 px-2.5 py-0.5 font-mono text-xs font-medium text-red-700">
      <span aria-hidden="true">●</span>
      TODO
      {children ? <span className="font-normal">— {children}</span> : null}
    </span>
  );
}
