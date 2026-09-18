import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { builds, buildId, getBuild } from "@/data/builds";
import { site } from "@/lib/site.config";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { StatusChip } from "@/components/StatusChip";
import { TodoChip } from "@/components/TodoChip";
import { ArchitectureBlock } from "@/components/ArchitectureBlock";
import { PayloadViewer } from "@/components/PayloadViewer";

/** Pre-render one static page per build (static export). */
export function generateStaticParams() {
  return builds.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const build = getBuild(params.slug);
  if (!build) return { title: "Build not found" };
  return {
    title: `${build.name} · Build ${buildId(build.buildNumber)}`,
    description: build.tagline,
  };
}

export default function BuildPage({ params }: { params: { slug: string } }) {
  const build = getBuild(params.slug);
  if (!build) notFound();

  const isLive = build.status === "live";
  const demoReady = build.status === "live" || build.status === "preview";

  return (
    <article>
      {/* ---- Hero ---- */}
      <header className="border-b border-primary-800 bg-primary text-white">
        <Container className="py-14 lg:py-20">
          <Link
            href="/demos/"
            className="font-mono text-xs text-secondary-200 transition-colors hover:text-accent"
          >
            ← All demos
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-bold text-accent">
              {buildId(build.buildNumber)}
            </span>
            <StatusChip status={build.status} />
            <span className="font-mono text-xs text-secondary-400">
              {build.sector}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            {build.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-secondary-200">
            {build.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {demoReady && build.links.demo ? (
              <a
                href={build.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-btn bg-accent px-6 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-accent-600"
              >
                {isLive ? "Open live demo ↗" : "Open demo ↗"}
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-dashed border-primary-400 px-6 py-3 font-mono text-sm text-secondary-400">
                <TodoChip>Demo not yet deployed</TodoChip>
              </span>
            )}
            {build.links.github && (
              <a
                href={build.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-btn border border-primary-400 px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                View code ↗
              </a>
            )}
          </div>
        </Container>
      </header>

      {/* ---- What it does ---- */}
      <section className="bg-white">
        <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_16rem] lg:py-20">
          <div>
            <Eyebrow>What it does</Eyebrow>
            <div className="mt-5 flex flex-col gap-4">
              {build.whatItDoes.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-body-gray">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:pt-8">
            <div className="rounded-card border border-border-gray bg-ash p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-secondary">
                Stack
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {build.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-white px-2.5 py-1 font-mono text-xs text-body-gray ring-1 ring-border-gray"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {/* ---- Architecture ---- */}
      <section className="border-t border-border-gray bg-ash">
        <Container className="py-14 lg:py-20">
          <Eyebrow>Architecture</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold text-primary">
            How it&apos;s wired
          </h2>
          <div className="mt-8">
            <ArchitectureBlock arch={build.architecture} />
          </div>
        </Container>
      </section>

      {/* ---- Sample payload ---- */}
      <section className="bg-white">
        <Container className="py-14 lg:py-20">
          <Eyebrow>Sample payload</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold text-primary">
            What goes in, what comes out
          </h2>
          <div className="mt-8">
            <PayloadViewer payload={build.payload} />
          </div>
        </Container>
      </section>

      {/* ---- CTA ---- */}
      <section className="border-t border-border-gray bg-primary text-white">
        <Container className="flex flex-col items-start gap-5 py-14 sm:flex-row sm:items-center sm:justify-between lg:py-16">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Want this for your team?
            </h2>
            <p className="mt-2 text-secondary-200">
              Tell me the workflow. I&apos;ll show you what it looks like built.
            </p>
          </div>
          <Link
            href={build.links.booking || site.bookingPath}
            className="shrink-0 rounded-btn bg-accent px-6 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-accent-600"
          >
            Book a call
          </Link>
        </Container>
      </section>
    </article>
  );
}
