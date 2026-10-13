import { useState } from "react";
import { Reveal } from "./Reveal";

const QA = [
  {
    category: "Purchasing",
    q: "Can overseas buyers purchase directly?",
    a: "Yes. All three jurisdictions we operate in allow foreign ownership. We handle tax registration, notary appointments and remote signing, and we quote the full landed cost including duty before you reserve.",
  },
  {
    category: "Reservation",
    q: "What does the reservation actually secure?",
    a: "A named residence is withdrawn from sale for 28 days at the agreed price. The fee is fully credited at exchange and refundable if our survey pack discloses something material we had not already disclosed.",
  },
  {
    category: "Costs",
    q: "How are service charges set?",
    a: "Published five years forward, capped at inflation plus one point, and audited annually by an independent surveyor. There is no ground rent on any freehold residence.",
  },
  {
    category: "Management",
    q: "Do you handle letting after completion?",
    a: "Optional. Our management desk covers tenant sourcing, compliance and quarterly reporting at a flat 8% of collected rent, cancellable on 60 days' notice.",
  },
  {
    category: "Finance",
    q: "Can I combine two payment routes?",
    a: "Frequently. Staged plans pair well with a mortgage drawn at handover, and co-ownership can convert to outright at any staircasing step without re-entering the legal process.",
  },
  {
    category: "Timeline",
    q: "How long does the full purchase process take?",
    a: "From reservation to exchange is typically 21 days. Handover depends on build stage — for off-plan properties we provide a construction schedule on the day you reserve, with monthly progress reports.",
  },
  {
    category: "Visits",
    q: "Can I arrange a site visit before reserving?",
    a: "Always. We accompany every viewing and can arrange filmed walkthroughs for buyers who are not yet in Pakistan. Our Block B site office at Multi Gardens is open six days a week.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      data-scroll-scene
      id="faq"
      className="relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle top rule */}
      <div
        className="rule-line"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 md:py-40">
        {/* Header row */}
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div className="scroll-heading">
            <Reveal>
              <span className="eyebrow">06 — Detail</span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="faq-heading"
                className="display mt-6 max-w-[12ch] text-[clamp(2rem,4.5vw,3.5rem)]"
              >
                The questions that decide it.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p
                className="mt-8 max-w-[36ch] text-[0.9rem] leading-relaxed text-muted-foreground"
              >
                Everything you should ask before reserving — answered plainly,
                without the brochure language.
              </p>
            </Reveal>

            {/* Decorative accent bar */}
            <Reveal delay={240}>
              <div
                className="mt-12 hidden md:block"
                aria-hidden="true"
              >
                <div
                  style={{
                    width: "2px",
                    height: "64px",
                    background:
                      "linear-gradient(to bottom, var(--signal), transparent)",
                    borderRadius: "1px",
                  }}
                />
              </div>
            </Reveal>
          </div>

          {/* Accordion list */}
          <ul className="border-t border-border" role="list">
            {QA.map((item, i) => {
              const isOpen = open === i;
              const itemId = `faq-item-${i}`;
              const panelId = `faq-panel-${i}`;
              return (
                <Reveal
                  as="li"
                  key={item.q}
                  delay={i * 60}
                  className="scroll-item border-b border-border"
                  style={{ ["--item-index" as string]: i }}
                >
                  <button
                    id={itemId}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <div className="flex flex-col gap-1">
                      {/* Category badge */}
                      <span
                        className="eyebrow text-[0.6rem]"
                        style={{ color: "var(--signal)", letterSpacing: "0.15em" }}
                      >
                        {item.category}
                      </span>
                      <span className="display text-[1.05rem] leading-snug sm:text-xl">
                        {item.q}
                      </span>
                    </div>

                    {/* Plus/minus icon */}
                    <span
                      className="relative mt-1 block h-4 w-4 shrink-0 rounded-[2px]"
                      aria-hidden="true"
                      style={{
                        border: "1px solid color-mix(in oklab, var(--signal) 50%, transparent)",
                        transition: "border-color 300ms var(--ease-brand), background 300ms var(--ease-brand)",
                        background: isOpen ? "var(--signal)" : "transparent",
                      }}
                    >
                      <span
                        className="absolute"
                        style={{
                          left: "3px",
                          right: "3px",
                          top: "50%",
                          height: "1px",
                          background: isOpen ? "var(--ink)" : "var(--signal)",
                          transform: "translateY(-50%)",
                          transition: "background 300ms var(--ease-brand)",
                        }}
                      />
                      <span
                        className="absolute"
                        style={{
                          top: "3px",
                          bottom: "3px",
                          left: "50%",
                          width: "1px",
                          background: isOpen ? "var(--ink)" : "var(--signal)",
                          transform: `translateX(-50%) scaleY(${isOpen ? 0 : 1})`,
                          transition: "transform 450ms var(--ease-brand), background 300ms var(--ease-brand)",
                        }}
                      />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={itemId}
                    className="grid transition-[grid-template-rows] duration-500"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transitionTimingFunction: "var(--ease-brand)",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="max-w-[58ch] pb-8 pt-1 text-[0.95rem] leading-relaxed text-muted-foreground"
                        style={{ paddingLeft: "0" }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={120}>
          <div
            className="mt-20 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[0.9rem] text-muted-foreground max-w-[44ch]">
              Have a question not covered here? Our team is available in person
              or by phone six days a week.
            </p>
            <a
              href="tel:+923325178767"
              className="text-link shrink-0"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8rem",
                color: "var(--ink)",
                textDecoration: "none",
                paddingBottom: "6px",
                borderBottom: "1px solid var(--signal)",
              }}
            >
              Call us directly ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
