import { usePrefersReducedMotion, useScrollProgress } from "@/hooks/use-motion";
import { Reveal } from "./Reveal";

const CLIENTS = ["Novara Bank", "Kestrel Group", "Aldermoor", "SVEN Capital", "Wren & Halt", "Metrogrid"];

export function Proof() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const reduced = usePrefersReducedMotion();
  const amount = reduced ? 412 : Math.round(412 * Math.min(1, Math.max(0, progress * 1.55)));

  return (
    <section ref={ref} data-scroll-scene className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 md:py-36" id="proof">
      <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow">05 — Record</span>
          </Reveal>
          <Reveal delay={80}>
            <p className="proof-figure display mt-8 text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tabular-nums">
              €{amount}<span className="text-signal">m</span>
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[36ch] text-[0.95rem] leading-relaxed text-muted-foreground">
              Residential value transacted across eleven cities since 2011, with a 0.9% fall-through
              rate between reservation and completion.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="max-w-[34ch] text-[0.82rem] uppercase tracking-[0.16em] text-muted-foreground">
              Lending and legal partners
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            {CLIENTS.map((c, i) => (
              <Reveal
                key={c}
                as="li"
                delay={i * 70}
                className="scroll-item display border-b border-border pb-3 text-sm tracking-tight text-muted-foreground"
                style={{ ["--item-index" as string]: i }}
              >
                {c}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
