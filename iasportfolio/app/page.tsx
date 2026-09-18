import Link from "next/link";
import { site } from "@/lib/site.config";
import { builds, getSectors, getStats } from "@/data/builds";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { BuildCard } from "@/components/BuildCard";
import { HeroTerminal } from "@/components/HeroTerminal";

export default function HomePage() {
  const stats = getStats();
  const sectors = getSectors();
  const featured = builds.filter((b) => b.status === "preview").slice(0, 3);
  const featuredList = featured.length ? featured : builds.slice(0, 3);

  return (
    <>
      {/* ---- Hero: the thesis ---- */}
      <section className="border-b border-border-gray bg-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <div>
            <Eyebrow>Automation engineering</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Automation you can{" "}
              <span className="text-secondary">watch run.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-gray">
              {site.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demos/"
                className="rounded-btn bg-primary px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                See the builds
              </Link>
              <Link
                href={site.bookingPath}
                className="rounded-btn border border-primary px-6 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-ash"
              >
                Book a call
              </Link>
            </div>
          </div>

          <div className="lg:pl-4">
            <HeroTerminal />
          </div>
        </Container>
      </section>

      {/* ---- Real counts (no inflation) ---- */}
      <section className="border-b border-border-gray bg-ash">
        <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          <Stat value={stats.total} label="Builds in the portfolio" />
          <Stat value={stats.sectors} label="Industry sectors" />
          <Stat value={stats.preview} label="Demos wired up" />
          <Stat
            value={100}
            label="Target portfolio size"
            hint="Where this is headed"
          />
        </Container>
      </section>

      {/* ---- Featured builds ---- */}
      <section className="bg-white">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Featured</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold text-primary">
                Recent builds
              </h2>
            </div>
            <Link
              href="/demos/"
              className="font-mono text-sm text-secondary transition-colors hover:text-accent"
            >
              All demos →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredList.map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Sectors covered ---- */}
      <section className="border-t border-border-gray bg-ash">
        <Container className="py-16 lg:py-20">
          <Eyebrow>Where it runs</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-primary">
            Built for operations-heavy industries
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li
                key={sector.slug}
                className="rounded-card border border-border-gray bg-white p-4"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-primary">
                    {sector.name}
                  </span>
                  <span className="font-mono text-xs text-muted-gray">
                    {sector.builds.length}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Closing CTA ---- */}
      <section className="relative overflow-hidden bg-primary text-white">
        {/* Signature border — decorative image pinned bottom-right that
            overflows the section; the parent's overflow-hidden clips it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svgs/signature.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 h-64 w-64 select-none"
        />
        <Container className="relative py-16 text-center lg:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Have a workflow that eats your team&apos;s hours?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-secondary-200">
            Tell me what it is. I&apos;ll show you what it looks like built.
          </p>
          <Link
            href={site.bookingPath}
            className="mt-8 inline-block rounded-btn bg-accent px-7 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-accent-600"
          >
            Book a call
          </Link>
        </Container>
      </section>
    </>
  );
}

function Stat({
  value,
  label,
  hint,
}: {
  value: number;
  label: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="font-display text-4xl font-bold text-primary">
        {value}
      </div>
      <div className="mt-1 text-sm text-body-gray">{label}</div>
      {hint && (
        <div className="mt-0.5 font-mono text-xs text-muted-gray">{hint}</div>
      )}
    </div>
  );
}
