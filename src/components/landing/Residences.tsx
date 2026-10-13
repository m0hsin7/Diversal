import { useState } from "react";
import { Reveal } from "./Reveal";
import prop01 from "@/assets/prop-01.jpg";
import prop02 from "@/assets/prop-02.jpg";
import prop03 from "@/assets/prop-03.jpg";

const FILTERS = ["All", "Tower", "Waterfront", "Penthouse"] as const;

const PROPERTIES = [
  {
    img: prop01,
    kind: "Tower",
    name: "Ashlar House",
    place: "Canary Reach, London",
    price: "from £1.24m",
    specs: ["2–4 bed", "94–212 m²", "Floors 12–29", "Ready Q3 2027"],
    note: "Limestone-clad tower with private residents' floor and river-facing winter gardens.",
    left: 9,
  },
  {
    img: prop02,
    kind: "Waterfront",
    name: "Skerry Lodge",
    place: "Archipelago North, Stockholm",
    price: "from €2.60m",
    specs: ["3 bed", "240 m²", "Freehold", "Move-in ready"],
    note: "Single-storey concrete pavilion on granite, with a shoreline deck and boathouse title.",
    left: 2,
  },
  {
    img: prop03,
    kind: "Penthouse",
    name: "The Upper Set",
    place: "Meridian Quarter, Rotterdam",
    price: "from €3.15m",
    specs: ["4 bed", "310 m²", "Dual aspect", "Ready Q1 2027"],
    note: "Six penthouses only. Full-height glazing on two elevations and a private lift lobby.",
    left: 4,
  },
];

export function Residences() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = PROPERTIES.filter((p) => filter === "All" || p.kind === filter);

  return (
    <section data-scroll-scene id="residences" className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="scroll-heading">
          <Reveal>
            <span className="eyebrow">02 — Portfolio</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-[14ch] text-[clamp(2rem,5.5vw,4.5rem)]">
              Fifteen addresses. No repeats.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <ul className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  onClick={() => setFilter(f)}
                  className="border px-4 py-2 text-[0.78rem] tracking-wide transition-colors duration-300"
                  style={{
                    transitionTimingFunction: "var(--ease-brand)",
                    borderColor: filter === f ? "var(--signal)" : "var(--border)",
                    color: filter === f ? "var(--signal)" : "var(--muted-foreground)",
                  }}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-3">
        {list.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            delay={i * 110}
            className="scroll-property group"
            style={{ ["--item-index" as string]: i }}
          >
            <div className="relative overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={`${p.name} — ${p.place}`}
                loading="lazy"
                width={1200}
                height={1504}
                className="h-[clamp(260px,42vw,420px)] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.045]"
                style={{ transitionTimingFunction: "var(--ease-brand)" }}
              />
              <span className="absolute left-0 top-0 bg-background/90 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                {p.left} remaining
              </span>
            </div>

            <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <h3 className="display text-2xl">{p.name}</h3>
              <span className="display text-sm tabular-nums text-signal">{p.price}</span>
            </div>
            <p className="mt-3 text-[0.82rem] uppercase tracking-[0.16em] text-muted-foreground">
              {p.place}
            </p>
            <p className="mt-4 max-w-[38ch] text-[0.93rem] leading-relaxed text-muted-foreground">
              {p.note}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.78rem] tracking-wide">
              {p.specs.map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group/link mt-6 inline-flex items-center gap-3 text-[0.8rem] tracking-wide text-ink"
            >
              Request the pack
              <span
                className="inline-block h-px w-8 bg-signal transition-[width] duration-300 group-hover/link:w-14"
                style={{ transitionTimingFunction: "var(--ease-brand)" }}
              />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
