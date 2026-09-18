import type { Metadata } from "next";
import { getSectors, getStats } from "@/data/builds";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { DemosView } from "./DemosView";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "Every IAS build, grouped by industry. Each one is a real demo you can open.",
};

export default function DemosPage() {
  const sectors = getSectors();
  const stats = getStats();

  return (
    <section className="bg-white">
      <Container className="py-14 lg:py-20">
        <Eyebrow>The portfolio</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold text-primary sm:text-5xl">
          {stats.total} builds, {stats.sectors} industries.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-body-gray">
          Automation demos for operations-heavy work. Pick a sector, or browse
          the whole set. Status chips are honest — preview means the demo shell
          is wired to mock data, planned means it&apos;s scoped and next up.
        </p>

        <div className="mt-10">
          <DemosView sectors={sectors} />
        </div>
      </Container>
    </section>
  );
}
