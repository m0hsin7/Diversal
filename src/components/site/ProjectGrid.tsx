import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/landing/Reveal';
import { projects } from '@/lib/company';
import { projectPhotos } from '@/lib/project-photos';
export function ProjectGrid({ limit, filters = false }: { limit?: number; filters?: boolean }) {
  const [filter, setFilter] = useState('All projects');
  const filtered = projects.filter(p => filter === 'All projects' || p.group === filter);
  const list = limit === undefined ? filtered : filtered.slice(0, limit);
  return <>{filters && <div className="project-filters" aria-label="Filter projects">{['All projects', 'Faisal', 'MPCHS', 'Park View', 'DHA'].map(item => <Button key={item} variant="ghost" className={filter === item ? 'filter-active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>}<div className="project-grid">{list.map((p, i) => {
    const photo = projectPhotos[p.slug];
    return <Reveal key={p.slug} as="article" delay={i * 70} className="project-entry"><Link to="/projects/$slug" params={{ slug: p.slug }} className="project-image-link" aria-label={`Explore ${p.name}`}>{photo ? <img src={photo.url} alt={photo.alt} loading="lazy" /> : <div className="photo-pending"><span>{p.name}</span><small>Photography pending verification</small></div>}<span className="project-index">0{projects.indexOf(p) + 1}</span><span className="project-arrow" aria-hidden="true">↗</span></Link><div className="project-caption"><p className="eyebrow">{p.area}</p><h3><Link to="/projects/$slug" params={{ slug: p.slug }}>{p.name}</Link></h3><p className="project-summary">{p.summary}</p>{photo?.kind && <p className="project-photo-note">{photo.kind}</p>}</div></Reveal>;
  })}</div></>;
}
