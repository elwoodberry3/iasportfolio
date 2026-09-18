/* eslint-disable @next/next/no-img-element */

/**
 * LogoLightMode — the stacked IAS logo for use on light surfaces (header).
 * alt="" is intentional: the wrapping <Link> carries aria-label="… home",
 * so a filled alt here would double-announce for screen readers.
 */
export function LogoLightMode({ className = "" }: { className?: string }) {
  return (
    <img
      src="/svgs/light.mode__stacked.svg"
      alt=""
      className={`h-10 w-auto ${className}`}
    />
  );
}
