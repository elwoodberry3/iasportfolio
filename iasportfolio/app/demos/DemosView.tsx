"use client";

import { useMemo, useState } from "react";
import type { Sector } from "@/lib/types";
import { BuildCard } from "@/components/BuildCard";

/**
 * DemosView — client-side sector filter. Built to stay usable as the portfolio
 * grows toward 100 builds: filter chips narrow to one sector, and each sector
 * renders as its own labeled group so the page never becomes an undifferentiated
 * grid.
 */
export function DemosView({ sectors }: { sectors: Sector[] }) {
  const [active, setActive] = useState<string>("all");

  const total = useMemo(
    () => sectors.reduce((n, s) => n + s.builds.length, 0),
    [sectors],
  );

  const visible =
    active === "all" ? sectors : sectors.filter((s) => s.slug === active);

  return (
    <>
      {/* Filter chips */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter builds by sector"
      >
        <FilterChip
          label={`All (${total})`}
          selected={active === "all"}
          onClick={() => setActive("all")}
        />
        {sectors.map((s) => (
          <FilterChip
            key={s.slug}
            label={`${s.name} (${s.builds.length})`}
            selected={active === s.slug}
            onClick={() => setActive(s.slug)}
          />
        ))}
      </div>

      {/* Sector groups */}
      <div className="mt-12 flex flex-col gap-14">
        {visible.map((sector) => (
          <section key={sector.slug} aria-labelledby={`sector-${sector.slug}`}>
            <div className="flex items-baseline justify-between border-b border-border-gray pb-3">
              <h2
                id={`sector-${sector.slug}`}
                className="text-xl font-semibold text-primary"
              >
                {sector.name}
              </h2>
              <span className="font-mono text-xs text-muted-gray">
                {sector.builds.length} build
                {sector.builds.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sector.builds.map((build) => (
                <BuildCard key={build.slug} build={build} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function FilterChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
        selected
          ? "border-primary bg-primary text-white"
          : "border-border-gray bg-white text-body-gray hover:border-secondary-200"
      }`}
    >
      {label}
    </button>
  );
}
