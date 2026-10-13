import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

const SELECTOR = 'main h1, main h2, main h3, main p, main .eyebrow, main figure, main img, main .project-entry, main .contact-link, main .office, main form, main li';

/** Adds scroll-triggered reveals and image parallax to every page. */
export function ScrollReveal() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observed = new Set<HTMLElement>();
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('sr-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -24px 0px', threshold: 0 });
    const register = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(el => {
        // One reveal per content group; nested opacity animations conceal mobile content.
        if (observed.has(el) || el.closest('.diversal-hero, .whatsapp-float, .reveal') || el.parentElement?.closest(SELECTOR)) return;
        observed.add(el);
        el.classList.add('sr');
        const sibs = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
        el.style.setProperty('--sr-delay', `${Math.min(sibs, 3) * 60}ms`);
        if (el.tagName === 'IMG' || el.tagName === 'FIGURE') el.classList.add('sr-media');
        if (reduce) el.classList.add('sr-in');
        else io.observe(el);
      });
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const h = window.innerHeight;
      document.querySelectorAll<HTMLElement>('main .project-image-link img, main .detail-photo img').forEach(img => {
        const parent = img.parentElement;
        if (!parent) return;
        const r = parent.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const p = (r.top + r.height / 2 - h / 2) / h;
        const distance = window.innerWidth < 768 ? 16 : 40;
        img.style.setProperty('--px', `${(p * -distance).toFixed(1)}px`);
      });
    }); };
    if (!reduce) { window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); }
    return () => {
      io.disconnect(); mutations.disconnect();
      window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf);
      observed.forEach(el => { el.classList.remove('sr', 'sr-in', 'sr-media'); });
    };
  }, [pathname]);
  return null;
}
