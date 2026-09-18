import type { Metadata } from "next";
import { LegalStub } from "@/components/LegalStub";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the I Automate Shit site.",
};

export default function TermsPage() {
  return (
    <LegalStub
      title="Terms of Service"
      summary="The terms that govern use of this site and its demos."
    />
  );
}
