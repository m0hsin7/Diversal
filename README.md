# Diversal (Malik Waqar)

You are a senior brand + motion designer building a premium, award-site-tier landing page (Awwwards/FWA quality, not template quality). Build the following:

Visual identity

Color system: cool and light only — off-white/porcelain base (#F7F9FB range), one deep navy/graphite for text and depth (#0E1A2B range), one signature cool accent (electric blue or cyan, used sparingly, never as a background fill). No warm tones, no gradients used decoratively — gradients only where they serve depth (subtle glass/blur), never as a background wash.

Typography: one modern grotesk/sans for display (e.g. a Neue Montreal / General Sans class typeface) at oversized, confident scale, paired with a tighter body face. Generous negative space. Headlines should feel engineered, not decorative.

No stock photography, no generic "team smiling at laptop" imagery, no icon-pack icons. Every visual element is either real footage, custom motion graphic, or typographic.

Hero

Full-bleed looping video background of buildings — architectural, wide-angle, slow pans or timelapse of glass/steel structures (think city skyline at dusk/dawn, cool light). Video sits behind a subtle dark-to-transparent gradient scrim so headline text stays legible without killing the footage.

Headline + one-line subhead + single primary CTA, vertically centered or lower-third, entering with a restrained fade/slide on load — not a bounce, not a typewriter effect.

A scroll-cue (thin animated line or arrow) bottom-center.

Scroll behavior (every section)

Scroll-triggered reveals: sections and their child elements animate in based on viewport intersection — staggered fade+translateY (8–24px, not more), 400–600ms, ease-out. No section appears fully static.

At least one section uses scroll-linked (not just scroll-triggered) motion — e.g. a pinned panel where content changes as you scroll through it, or a horizontal-scroll strip within a vertical page, or a stat/counter that ties its value to scroll progress.

Section transitions should feel continuous — background color shifts smoothly between sections rather than hard-cutting, and use consistent easing across the whole page (specify one cubic-bezier and reuse it everywhere — don't let different libraries fight each other).

Sections to build

Hero (video, as above)

Value proposition — 3 short claims, typographic, large numerals or short stat reveals animated on scroll

Product/process walkthrough — scroll-pinned or step-indexed, showing how it works without a single stock image

Proof — logos or a single strong metric, understated, not a busy carousel

CTA/footer — dark section, cool accent glow, single clear action

Technical/craft bar

Buttery scroll performance — use transform/opacity only for animated properties, not layout-triggering properties.

Respect prefers-reduced-motion (fall back to simple fades).

Mobile: video hero degrades to a poster frame or shorter loop; scroll effects simplify to basic fade-ins, not the full scroll-linked choreography.

Nothing should feel like a template — no default shadow-lg cards, no default rounded-2xl everything. Deliberate, specific choices only.  


must be both mobile and desktop responsive modern

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0f593dd2-c9c9-42ec-8bb2-63da5220fc48).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
