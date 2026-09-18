import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { TodoChip } from "@/components/TodoChip";

/**
 * LegalStub — shared shell for the Privacy / Terms / Accessibility pages.
 * These routes exist so the footer links resolve, but the content is not yet
 * written. A visible TODO (Article IX) states that plainly rather than
 * shipping placeholder legalese that could be mistaken for a real policy.
 */
export function LegalStub({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  return (
    <section className="bg-white">
      <Container className="max-w-3xl py-16 lg:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-4xl font-bold text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-body-gray">{summary}</p>

        <div className="mt-8 rounded-card border border-dashed border-border-gray bg-ash p-6">
          <TodoChip>Content pending — not yet published.</TodoChip>
          <p className="mt-3 text-sm text-muted-gray">
            This page is a live route so navigation resolves, but the policy
            itself is still being drafted. Check back, or reach out via the
            contact page with any questions in the meantime.
          </p>
        </div>
      </Container>
    </section>
  );
}
