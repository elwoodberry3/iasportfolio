import type { Architecture } from "@/lib/types";
import { TodoChip } from "./TodoChip";

/**
 * ArchitectureBlock — renders the layer stack as a labeled table-like list.
 * Any layer marked unresolved shows a TODO chip in place of a fabricated
 * technology (Article IX). A missing diagram surfaces its alt-text TODO
 * rather than silently omitting the accessibility description.
 */
export function ArchitectureBlock({ arch }: { arch: Architecture }) {
  return (
    <div>
      <ol className="flex flex-col gap-3">
        {arch.layers.map((layer, i) => (
          <li
            key={`${layer.layer}-${i}`}
            className="grid gap-2 rounded-card border border-border-gray bg-white p-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-primary">{layer.layer}</span>
            </div>
            <div>
              {layer.unresolved ? (
                <TodoChip>{layer.technology}</TodoChip>
              ) : (
                <span className="font-mono text-sm text-secondary-700">
                  {layer.technology}
                </span>
              )}
              <p className="mt-1 text-sm text-body-gray">
                {layer.responsibility}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-card border border-border-gray bg-ash p-4">
        <div className="font-mono text-xs uppercase tracking-wider text-secondary">
          End-to-end flow
        </div>
        <p className="mt-2 text-sm leading-relaxed text-body-gray">
          {arch.flow.startsWith("TODO") ? (
            <TodoChip>{arch.flow.replace(/^TODO:\s*/, "")}</TodoChip>
          ) : (
            arch.flow
          )}
        </p>
      </div>
    </div>
  );
}
