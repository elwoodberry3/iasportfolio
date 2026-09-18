import type { SamplePayload } from "@/lib/types";
import { TodoChip } from "./TodoChip";

function isEmpty(obj: Record<string, unknown>) {
  return Object.keys(obj).length === 0;
}

function CodeBlock({
  label,
  data,
}: {
  label: string;
  data: Record<string, unknown>;
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-secondary">
        {label}
      </div>
      <pre className="overflow-x-auto rounded-card border border-border-gray bg-ash p-4 font-mono text-xs leading-relaxed text-ink">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

/**
 * PayloadViewer — shows a representative input and output for a build.
 * The caption always states the data is mock (Article IX). If a build's
 * payload hasn't been authored yet, we render a TODO instead of empty braces.
 */
export function PayloadViewer({ payload }: { payload: SamplePayload }) {
  const empty = isEmpty(payload.input) && isEmpty(payload.output);

  if (empty) {
    return (
      <div className="rounded-card border border-dashed border-border-gray bg-white p-6">
        <TodoChip>Sample payload pending build.</TodoChip>
        <p className="mt-3 text-sm text-muted-gray">{payload.caption}</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-4 font-mono text-xs text-muted-gray">
        {payload.caption}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <CodeBlock label="Input" data={payload.input} />
        <CodeBlock label="Output" data={payload.output} />
      </div>
    </div>
  );
}
