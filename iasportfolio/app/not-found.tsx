import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-start py-24 lg:py-32">
        <span className="font-mono text-sm text-secondary">404</span>
        <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">
          Nothing here.
        </h1>
        <p className="mt-4 max-w-md text-lg text-body-gray">
          That page doesn&apos;t exist — or the build hasn&apos;t shipped yet.
        </p>
        <Link
          href="/demos/"
          className="mt-8 rounded-btn bg-primary px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-primary-800"
        >
          See the builds
        </Link>
      </Container>
    </section>
  );
}
