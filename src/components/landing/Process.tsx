import { useScrollProgress, useIsMobile, usePrefersReducedMotion } from "@/hooks/use-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    idx: "01",
    title: "Brief",
    body: "A 40-minute call to set budget, jurisdiction, timing and whether the purchase is to live in, hold or let.",
  },
  {
    idx: "02",
    title: "Shortlist",
    body: "Three to five residences with full pricing, service charges, floor plates and honest notes on what each one gets wrong.",
  },
  {
    idx: "03",
    title: "Viewing",
    body: "In person or a filmed walkthrough with the site surveyor answering on camera. No agent theatre, no staged furniture.",
  },
  {
    idx: "04",
    title: "Structure",
    body: "We model each buying option against your cash flow — outright, lender-backed, staged or shared — and put the numbers side by side.",
  },
  {
    idx: "05",
    title: "Keys",
    body: "Reservation, exchange, snagging and handover run on one shared timetable you can see at any moment.",
  },
];

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const simple = isMobile || reduced;

  const eased = Math.min(1, Math.max(0, (progress - 0.12) / 0.74));
  const active = Math.min(STEPS.length - 1, Math.floor(eased * STEPS.length * 0.999));
  const shift = eased * (STEPS.length - 1) * 100;

  if (simple) {
    return (
      <section data-scroll-scene className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10" id="process">
        <Reveal>
          <span className="eyebrow">04 — How it runs</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-6 text-[clamp(2rem,8vw,3rem)]">Brief to keys, in five moves.</h2>
        </Reveal>
        <ol className="mt-12 space-y-px bg-border">
          {STEPS.map((s, i) => (
            <Reveal key={s.idx} as="li" delay={i * 90} className="bg-background py-8">
              <div className="text-signal text-sm tabular-nums">{s.idx}</div>
              <h3 className="display mt-3 text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-[40ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section data-scroll-scene id="process" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-10">
          <div className="process-chrome flex items-baseline justify-between">
            <span className="eyebrow">04 — How it runs</span>
            <span className="display text-sm tabular-nums text-muted-foreground">
              {STEPS[active]?.idx} / 0{STEPS.length}
            </span>
          </div>
          <div className="mt-6 h-px w-full bg-border">
            <div
              className="h-px bg-signal origin-left"
              style={{
                transform: `scaleX(${(active + 1) / STEPS.length})`,
                transition: "transform 600ms var(--ease-brand)",
              }}
            />
          </div>
        </div>

        <div className="mt-14 overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translate3d(-${shift}vw, 0, 0)`,
              transition: "transform 120ms linear",
            }}
          >
            {STEPS.map((s, i) => (
              <article
                key={s.idx}
                className="process-step flex w-screen shrink-0 items-start gap-12 px-10 xl:px-24"
                style={{
                  opacity: i === active ? 1 : 0.32,
                  transition: "opacity 500ms var(--ease-brand)",
                }}
              >
                <div className="display text-signal text-[clamp(4rem,10vw,9rem)] tabular-nums leading-none">
                  {s.idx}
                </div>
                <div className="max-w-[38ch] pt-4">
                  <h3 className="display text-[clamp(2.5rem,5vw,4.25rem)]">{s.title}</h3>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
