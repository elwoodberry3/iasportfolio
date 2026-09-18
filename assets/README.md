# Repository Structures
The IAS ecosystem

## IAS Portfolio Application Architecture  
A technical portfolio dedicated to enterprise agentic development, organizing production-style builds by capability and showing how Claude Code, agents, automation, APIs, data, and modern frontend systems work together.

```js
iasportfolio/
└── app/                                               # Next.js App Router root — routes, API handlers, layout, global styles
    └── accessibility/                                 # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── page.tsx                                   # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    └── builds/                                        # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        └── [slug]/                                    # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
            ├── page.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ] 
    └── contact/                                       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── ContactForm.tsx                            # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── page.tsx                                   # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    └── demos/                                         # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── DemosView.tsx                              # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── page.tsx                                   # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    └── fonts/                                         # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── dm-sans-latin-400-normal.woff2             # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── dm-sans-latin-500-normal.woff2             # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── dm-sans-latin-600-normal.woff2             # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── dm-sans-latin-700-normal.woff2             # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-grotesk-latin-400-normal.woff2       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-grotesk-latin-500-normal.woff2       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-grotesk-latin-600-normal.woff2       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-grotesk-latin-700-normal.woff2       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-mono-latin-400-normal.woff2          # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
        ├── space-mono-latin-700-normal.woff2          # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    └── privacy/                                       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
            ├── page.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    └── terms/                                         # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
            ├── page.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ] 
    └── thankyou/                                      # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
            ├── page.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    ├── layout.tsx                                     # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    ├── page.tsx                                       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
    ├── globals.css                                    # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCRIPTION ]
└── components/                                        # Reusable client components
    ├── ArchitectureBlock.tsx                          # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── BuildCard.tsx                                  # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── Container.tsx                                  # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── Eyebrow.tsx                                    # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── HeroTerminal.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── IasBorder.tsx                                  # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── LegalStub.tsx                                  # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── LogoDarkMode.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── LogoLightMode.tsx                              # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── PayloadViewer.tsx                              # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── SiteFooter.tsx                                 # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── SiteHeader.tsx                                 # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── SocialIcons.tsx                                # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── StatusChip.tsx                                 # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── TodoChip.tsx                                   # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── YouTubeEmbed.tsx                               # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
└── data/                                              # Static data sources read by routes, pages, and the .ics generator
    ├── build-001-claims-intake.ts                     # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── build-002-doc-intake.ts                        # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── builds.ts                                      # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── generated-builds.ts                            # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
└── lib/                                               # Framework-agnostic config + helpers
    ├── contact.ts                                     # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── site.config.ts                                 # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── types.ts                                       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
└── public/                                            # Static assets served as-is at the site root
    └── svgs/                                          # Vector logo assets (SVG)
        ├── border-0003.svg                            # Stacked IAS wordmark logo — dark-mode variant
        ├── light.mode__stacked.svg                    # Stacked IAS wordmark logo — light-mode variant
        ├── dark.mode__stacked.svg                     # Stacked IAS wordmark logo — dark-mode variant
        ├── signature.svg                              # Signature border — decorative image pinned bottom-right
└── styles/                                            # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
    ├── global.css                                     # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
├── next-env.d.ts                                      # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
├── next.config.mjs                                    # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
├── package-lock.json                                  # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]
├── package.json                                       # [ INSERT 100 CHARACTER PLAIN ENGLISH DESCIPTION ]            
├── postcss.config.mjs                                 # PostCSS pipeline for Tailwind + autoprefixer
├── tailwind.config.ts                                 # Brand design tokens: Deep Slate Teal, Kinetic Emerald (live only), type scale
├── tsconfig.json                                      # TypeScript compiler config + path aliases (@/*)
├── .gitignore                                         # Ignored paths (node_modules, .next, .env*, build artifacts)
└── README.md                                          # Project documentation
```
