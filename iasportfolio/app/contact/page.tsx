import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you need built. The form routes to the right place depending on whether you're hiring, recruiting, or looking to automate a workflow.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <Container className="grid gap-12 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold text-primary sm:text-5xl">
            Start the conversation.
          </h1>
          <p className="mt-5 text-lg text-body-gray">
            Pick who you are and I&apos;ll route you the right way. The more
            specific you are about the workflow, the faster I can show you what
            it looks like built.
          </p>

          <div className="mt-10 rounded-card border border-border-gray bg-ash p-5">
            <p className="font-mono text-sm text-primary">
              Prefer a call?
            </p>
            <p className="mt-1.5 text-sm text-body-gray">
              Send a note below and I&apos;ll follow up with times. Async is
              fine too — a clear message often gets you further than a meeting.
            </p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
