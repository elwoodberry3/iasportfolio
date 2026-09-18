/* eslint-disable @next/next/no-img-element */

/**
 * LogoDarkMode — the stacked IAS logo for use on dark surfaces (footer).
 * Given a filled alt because it is not wrapped in an aria-labelled link here.
 */
export function LogoDarkMode({ className = "" }: { className?: string }) {
  return (
    <img
      src="/svgs/dark.mode__stacked.svg"
      alt="I Automate Shit"
      className={`h-14 w-auto ${className}`}
    />
  );
}
