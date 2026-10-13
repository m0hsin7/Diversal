import { createFileRoute, Link } from '@tanstack/react-router';
import { PageIntro } from '@/components/site/PageIntro';
import { Reveal } from '@/components/landing/Reveal';
import { services, pageHead } from '@/lib/company';
export const Route = createFileRoute('/services')({ head: () => pageHead('Property Services', 'Buying, selling, investment consultation and site visits in Islamabad with Diversal Estate & Marketing.'), component: Services });
function Services() { return <><PageIntro eyebrow="What we do" title="Property. Personally." text="From the first conversation to the site visit, start with the information that matters to you." /><section className="site-container section-bottom">{services.map(s => <Reveal key={s.number} className="service-row"><span className="service-number">{s.number}</span><h2>{s.name}</h2><div><p>{s.text}</p><Link to="/contact" className="text-link">Speak with our team ↗</Link></div></Reveal>)}</section></>; }
