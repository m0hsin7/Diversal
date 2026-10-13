import { Link } from '@tanstack/react-router';
import { Reveal } from '@/components/landing/Reveal';
import { homes } from '@/lib/homes';

export function HomeProjectGrid() {
  return <section className="home-projects site-container construction-portfolio">
      <div className="section-heading"><Reveal><p className="eyebrow">Residential construction / Pakistan</p><h2>Under construction.</h2><p className="intro-description">Residential construction in Top City and Faisal Town, Islamabad, Pakistan. Pre-booking enquiries are open — speak with our team about available projects and booking terms.</p></Reveal></div>
    <div className="project-grid">{homes.map((home, i) => <Reveal as="article" key={home.slug} delay={i % 3 * 70} className="project-entry">
      <Link to="/projects/$slug" params={{ slug: home.slug }} className="project-image-link" aria-label={`Explore ${home.name}`}><img src={home.image} alt={`${home.name} in ${home.area} — supplied exterior reference`} loading="lazy" /><span className="project-index">{home.status}</span><span className="project-arrow" aria-hidden="true">↗</span></Link>
      <div className="project-caption"><p className="eyebrow">{home.location}</p><h3><Link to="/projects/$slug" params={{ slug: home.slug }}>{home.name}</Link></h3><p className="project-summary">{home.design} Under construction · Pre-booking enquiries open.</p></div>
    </Reveal>)}</div>
  </section>;
}