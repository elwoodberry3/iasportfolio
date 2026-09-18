import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How I Automate Shit handles data and privacy.",
};

export default function PrivacyPage() {
  return (
    <LegalStub
      title="Privacy Policy"
      summary="How data submitted through this site is collected, used, and protected."
    />
  );
}
