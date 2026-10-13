import { useState } from "react";
import { Reveal } from "./Reveal";

const OPTIONS = [
  {
    key: "outright",
    label: "Outright purchase",
    headline: "Contracts in 21 days.",
    body: "Cash or cleared-funds acquisition with a fixed legal timetable. Survey, title and service-charge history are issued upfront in one pack.",
    facts: [
      ["Reservation", "£15,000"],
      ["Exchange", "10% on day 21"],
      ["Completion", "Balance on handover"],
      ["Best for", "Speed and price leverage"],
    ],
  },
  {
    key: "mortgage",
    label: "Mortgage assisted",
    headline: "Rates held for 90 days.",
    body: "Three partner lenders underwrite off our valuation pack, so an agreement in principle usually lands within a week of reservation.",
    facts: [
      ["Deposit from", "15%"],
      ["Typical term", "25–30 years"],
      ["Indicative rate", "4.28% fixed"],
      ["Best for", "Owner-occupiers"],
    ],
  },
  {
    key: "staged",
    label: "Staged payment plan",
    headline: "Pay as the building rises.",
    body: "Instalments tied to construction milestones rather than dates, held in an escrow account you can audit at any point.",
    facts: [
      ["On reservation", "5%"],
      ["Structure complete", "20%"],
      ["Façade complete", "25%"],
      ["On handover", "50%"],
    ],
  },
  {
    key: "shared",
    label: "Co-ownership",
    headline: "Own a defined share.",
    body: "Buy 25–75% of a residence with a fixed staircasing schedule and no hidden rent uplift on the retained share.",
    facts: [
      ["Entry share", "from 25%"],
      ["Staircase steps", "5% minimum"],
      ["Retained charge", "2.4% annual"],
      ["Best for", "First acquisitions"],
    ],
  },
];

export function BuyingOptions() {
  const [active, setActive] = useState(0);
  const current = OPTIONS[active]!;

  return (
    <section data-scroll-scene id="options" className="border-y border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 md:py-36">
        <Reveal className="scroll-heading">
          <span className="eyebrow">03 — Buying options</span>
        </Reveal>
        <Reveal delay={80} className="scroll-heading">
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2rem,5.5vw,4.5rem)]">
            Four ways to hold the keys.
          </h2>
        </Reveal>

        <div className="scroll-split mt-14 grid gap-10 md:grid-cols-[minmax(220px,0.6fr)_1.4fr] md:gap-16">
          <Reveal>
            <ul className="flex flex-col border-t border-border">
              {OPTIONS.map((o, i) => (
                <li key={o.key}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-4 border-b border-border py-5 text-left"
                  >
                    <span
                      className="display text-lg transition-colors duration-300"
                      style={{
                        color: i === active ? "inherit" : "var(--muted-foreground)",
                        transitionTimingFunction: "var(--ease-brand)",
                      }}
                    >
                      {o.label}
                    </span>
                    <span
                      className="h-px w-10 origin-right bg-signal transition-transform duration-500"
                      style={{
                        transform: `scaleX(${i === active ? 1 : 0.2})`,
                        transitionTimingFunction: "var(--ease-brand)",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div key={current.key} className="option-panel">
              <p className="display text-[clamp(1.6rem,3.2vw,2.75rem)]">{current.headline}</p>
              <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                {current.body}
              </p>
              <dl className="mt-10 grid gap-px bg-border sm:grid-cols-2">
                {current.facts.map(([k, v]) => (
                  <div key={k} className="bg-background px-0 py-5 sm:px-6">
                    <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="display mt-2 text-xl tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className="group mt-10 inline-flex items-center gap-4 border border-ink/25 px-7 py-4 text-[0.82rem] tracking-wide transition-colors duration-300 hover:border-signal hover:text-signal"
                style={{ transitionTimingFunction: "var(--ease-brand)" }}
              >
                Model this option on a residence
                <span className="inline-block h-px w-8 bg-current transition-[width] duration-300 group-hover:w-14" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .option-panel { animation: panel-in 460ms var(--ease-brand) both; }
        @keyframes panel-in {
          from { opacity: 0; transform: translate3d(0, 12px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .option-panel { animation: none; }
        }
      `}</style>
    </section>
  );
}
