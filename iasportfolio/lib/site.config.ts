/**
 * Site-level config. Everything that is true across the whole site —
 * brand strings, nav, contact personas — lives here so copy changes
 * never require touching component code.
 *
 * Unresolved destinations render as non-navigable rows with a TODO chip
 * (Article IX) rather than dead links.
 */

export const site = {
  name: "I Automate Shit",
  shortName: "IAS",
  // Demonstrate, never claim (Article VI).
  tagline: "Automation you can watch run.",
  intro:
    "Working automation builds for regulated and operations-heavy industries. Every one is a real demo you can open, not a slide.",
  domain: "elwoodberry.com",
  operator: "Elwood (Steve) Berry",
  bookingPath: "/contact/",
  // TODO: confirm intended YouTube handle — @iautomatesht appeared truncated.
  youtubeHandle: null as string | null,

  // Footer tagline — "Automate" renders in accent between the two runs.
  footerTagline: {
    lead: "I Find Where Your Team Loses Time…",
    thenPre: "Then I ",
    emphasis: "Automate",
    thenPost: " That Shit…",
  },

  address: {
    line1: "251 N Rose St,",
    line2: "Kalamazoo, MI 49007",
    phone: "+1 (888) 712-1694",
  },

  // TODO: create real content for these three legal routes; stub pages exist.
  legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Web Accessibility Statement", href: "/accessibility/" },
  ] as { label: string; href: string }[],
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Demos", href: "/demos/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Contact personas — the /contact form routes by who is reaching out,
 * so each lands in the right pipeline (employment / consulting / brand).
 */
export interface Persona {
  id: string;
  label: string;
  blurb: string;
}

export const personas: Persona[] = [
  {
    id: "executive",
    label: "Executive / Hiring Manager",
    blurb: "You have a role or an operations problem and want to see it built.",
  },
  {
    id: "recruiter",
    label: "Recruiter",
    blurb: "You are sourcing for an applied AI, automation, or full-stack role.",
  },
  {
    id: "consulting",
    label: "Business / Consulting",
    blurb: "You want a specific workflow automated for your team.",
  },
];

/**
 * Social links, in the order shown in the footer wireframe.
 * Only the GitHub org is confirmed; the rest use a placeholder URL and are
 * carried as TODOs until real handles are supplied (Article IX).
 */
export interface SocialLink {
  label: string;
  href: string;
  icon:
    | "github"
    | "tiktok"
    | "youtube"
    | "linkedin"
    | "x"
    | "facebook"
    | "instagram";
}

const PLACEHOLDER_URL = "http://ias-placeholder-url.com";

export const socials: SocialLink[] = [
  { label: "GitHub", icon: "github", href: "https://github.com/elwoodberry3" },
  { label: "TikTok", icon: "tiktok", href: PLACEHOLDER_URL }, // TODO: confirm URL
  { label: "YouTube", icon: "youtube", href: PLACEHOLDER_URL }, // TODO: handle unconfirmed
  { label: "LinkedIn", icon: "linkedin", href: PLACEHOLDER_URL }, // TODO: confirm URL
  { label: "X", icon: "x", href: PLACEHOLDER_URL }, // TODO: confirm URL
  { label: "Facebook", icon: "facebook", href: PLACEHOLDER_URL }, // TODO: confirm URL
  { label: "Instagram", icon: "instagram", href: PLACEHOLDER_URL }, // TODO: confirm URL
];
