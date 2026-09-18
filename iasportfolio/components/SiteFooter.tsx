import Link from "next/link";
import { nav, site } from "@/lib/site.config";
import { Container } from "./Container";
import { LogoDarkMode } from "./LogoDarkMode";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const t = site.footerTagline;

  return (
    <footer className="bg-primary text-secondary-200">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_auto] lg:gap-8">
        {/* Left: logo, tagline, address, phone */}
        <div className="max-w-md">
          <LogoDarkMode />
          <p className="mt-4 text-base leading-relaxed">
            {t.lead}
            <br />
            {t.thenPre}
            <span className="font-semibold text-accent">{t.emphasis}</span>
            {t.thenPost}
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <a
            href={`tel:${site.address.phone.replace(/[^\d+]/g, "")}`}
            className="mt-3 inline-block font-mono text-sm font-semibold text-white transition-colors hover:text-accent"
          >
            {site.address.phone}
          </a>
        </div>

        {/* Right: nav column, then social icons beneath it */}
        <div className="flex flex-col items-start gap-8 lg:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 lg:items-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-sm uppercase tracking-wide text-secondary-200 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialIcons />
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="bg-primary-975">
        <Container className="flex flex-col gap-2 py-4 text-xs text-secondary-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {site.name}…™ is operated by IAS, LLC. © {year} IAS, LLC. All Rights
            Reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {site.legal.map((item, i) => (
              <li key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
                {i < site.legal.length - 1 && (
                  <span aria-hidden="true" className="text-primary-400">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
