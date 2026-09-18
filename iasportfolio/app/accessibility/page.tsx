import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = {
  title: "Web Accessibility Statement",
  description: "Our commitment to an accessible web experience.",
};

export default function AccessibilityPage() {
  return (
    <LegalStub
      title="Web Accessibility Statement"
      summary="Our commitment to keeping this site usable for everyone, and how to report barriers."
    />
  );
}
