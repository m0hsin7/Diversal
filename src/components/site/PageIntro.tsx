import { Reveal } from '@/components/landing/Reveal';
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
 return <section data-scroll-scene className="site-intro site-container"><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro-description">{text}</p></Reveal></section>;
}
