import { useScrollProgress, usePrefersReducedMotion } from "@/hooks/use-motion";
import { Reveal } from "./Reveal";

const CLAIMS = [
  {
    value: 15,
    suffix: "",
    unit: "addresses on the books",
    claim: "Every residence surveyed, priced and title-checked by us before it is ever listed.",
  },
  {
    value: 21,
    suffix: " days",
    unit: "median to exchange",
    claim: "Legal packs are prepared in advance, so the timetable starts the day you reserve.",
  },
  {
    value: 4,
    suffix: "",
    unit: "ways to buy",
    claim: "Outright, mortgage-assisted, staged against construction, or a defined ownership share.",
  },
];

function format(target: number, p: number) {
  const v = target * p;
  return target % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
}

export function ValueProps() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const p = reduced ? 1 : Math.min(1, Math.max(0, (progress - 0.05) / 0.55));

  return (
    <section data-scroll-scene className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 md:py-36" id="value">
      <Reveal className="scroll-heading" >
        <span className="eyebrow">01 — Position</span>
      </Reveal>
      <Reveal delay={80} className="scroll-heading">
        <h2 className="display mt-6 max-w-[17ch] text-[clamp(2rem,5.5vw,4.5rem)]">
          Buying property should read like a balance sheet, not a brochure.
        </h2>
      </Reveal>

      <div ref={ref} className="mt-16 grid gap-px bg-border md:grid-cols-3">
        {CLAIMS.map((c, i) => (
          <Reveal
            key={c.unit}
            delay={i * 120}
            className="scroll-item bg-background px-0 py-10 md:px-8 md:py-12"
            style={{ ["--item-index" as string]: i }}
          >
            <div className="display flex items-baseline gap-1 text-[clamp(3rem,7vw,5.25rem)] tabular-nums">
              <span>{format(c.value, p)}</span>
              <span className="text-signal text-[0.4em]">{c.suffix}</span>
            </div>
            <div className="mt-3 text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
              {c.unit}
            </div>
            <p className="mt-6 max-w-[34ch] text-[0.95rem] leading-relaxed text-muted-foreground">
              {c.claim}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
