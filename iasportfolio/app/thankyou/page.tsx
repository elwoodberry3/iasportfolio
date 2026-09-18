import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Message sent",
  description: "Your message is in. Here's what happens next.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-start py-24 lg:py-32">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,229,163,0.12)] font-mono text-accent-600">
          ✓
        </span>
        <h1 className="mt-6 text-4xl font-bold text-primary sm:text-5xl">
          Message sent.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-body-gray">
          It&apos;s in. I read everything myself and reply personally, usually
          within a day or two. If it&apos;s time-sensitive, say so in a follow-up.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/demos/"
            className="rounded-btn bg-primary px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Browse the builds
          </Link>
          <Link
            href="/"
            className="rounded-btn border border-primary px-6 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-ash"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
