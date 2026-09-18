/**
 * IAS
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site.config";
import { Container } from "./Container";
import { LogoLightMode } from "./LogoLightMode";
import { IasBorder } from "./IasBorder";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border-gray bg-white text-ink">
      {/* Flex row: logo left, nav right. */}
      <Container className="flex h-16 items-center justify-between">
        {/* Left: logo. */}
        <Link href="/" aria-label={`${site.name} home`}>
          <LogoLightMode />
        </Link>

        {/* Right: desktop nav. */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`font-mono text-sm transition-colors hover:text-accent ${
                    isActive(item.href) ? "text-accent" : "text-body-gray"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={site.bookingPath}
                className="rounded-btn bg-accent px-4 py-2 font-mono text-sm font-semibold text-primary transition-colors hover:bg-accent-600"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right (mobile only): menu toggle. */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded text-primary"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        
      </Container>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="md:hidden border-t border-border-gray bg-white"
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded px-3 py-2 font-mono text-sm ${
                      isActive(item.href) ? "text-accent" : "text-body-gray"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={site.bookingPath}
                  onClick={() => setOpen(false)}
                  className="block rounded-btn bg-accent px-4 py-2 text-center font-mono text-sm font-semibold text-primary"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      )}

      <IasBorder />
    </header>
  );
}