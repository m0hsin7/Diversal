export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className="brand-lockup"><svg viewBox="0 0 80 70" fill="none" aria-hidden="true"><path d="M7 24 25 12v51H13L7 24ZM30 4l28 10-4 49H30V4ZM62 29l15 4-5 30H60l2-34Z" stroke="currentColor" strokeWidth="1.6" /></svg><span><strong>Diversal</strong><small>{compact ? 'Estate & Marketing' : 'Estate & Marketing · Pvt. Ltd.'}</small></span></span>;
}
