import { waHref, waClick } from '@/lib/whatsapp';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/site/PageIntro';
import { company, projects, pageHead } from '@/lib/company';
import { projectPhotos } from '@/lib/project-photos';
import { homes } from '@/lib/homes';
export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = projects.find(p => p.slug === params.slug) ?? homes.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData && 'detailTitle' in loaderData ? `${loaderData.detailTitle} — ${loaderData.name}` : loaderData?.name ?? 'Project';
    const head = pageHead(title, loaderData?.description ?? 'Property enquiries with Diversal Estate & Marketing.');
    const photo = loaderData ? projectPhotos[loaderData.slug] : undefined;
    return { meta: [...head.meta, ...(photo?.url.startsWith('https://') ? [{ property: 'og:image', content: photo.url }, { name: 'twitter:image', content: photo.url }] : [])] };
  },
  component: Project,
});
function Project() {
  const p = Route.useLoaderData();
  const isHome = 'status' in p;
  const title = isHome ? p.detailTitle : p.name;
  const enquiry = isHome ? `Hello, I would like pre-booking details for your under-construction projects in ${p.location}. Project reference: ${p.name}.` : `Hello, I would like property details for ${p.name}.`;
  const photo = isHome ? { url: p.image, alt: `${p.name} — supplied exterior design reference in ${p.area}`, kind: `${p.name} · Exterior design reference · Under construction projects` } : projectPhotos[p.slug];
  return <>
    <PageIntro eyebrow={`Projects / ${isHome ? p.location : p.area}`} title={title} text={p.summary} />
    <section className="site-container section-bottom">
      {photo && <figure className={isHome ? 'detail-photo construction-reference' : 'detail-photo'}><img src={photo.url} alt={photo.alt} /><figcaption>{photo.kind ?? 'Project photograph'}{'source' in photo && <> · <a href={photo.source} target="_blank" rel="noreferrer">Source ↗</a></>}</figcaption></figure>}
      <div className="detail-columns">
        <div>
          <div className="project-overview"><p className="eyebrow">{isHome ? p.status : 'The development'}</p><h2>{isHome ? `Residential construction in ${p.area.split(',')[0]}.` : `A closer look at ${p.name}.`}</h2><p>{p.description}</p></div>
          {'source' in p && <a className="text-link" href={p.source} target="_blank" rel="noopener noreferrer">Development information ↗</a>}
          <h2>Explore with Diversal.</h2>
          <p>{isHome ? 'Pre-booking enquiries are welcome. Discuss the available construction project, specification and latest site progress with our team. Confirm the unit or plot, ownership documents, written payment schedule and completion terms before making a commitment.' : 'Discuss current availability, plot sizes, prices and payment plans with our team. Confirm ownership, approvals and development status for the specific property before making a commitment.'}</p>
        </div>
        <div className="enquiry-panel"><p className="eyebrow">{isHome ? 'Pre-booking enquiries' : 'Enquire about this project'}</p><h3>{title}</h3><Button asChild className="site-cta"><a href={waHref(company.whatsappNumber, enquiry)} onClick={waClick(company.whatsappNumber, enquiry)} target="_blank" rel="noopener noreferrer">{isHome ? 'Enquire about pre-booking ↗' : 'Discuss on WhatsApp ↗'}</a></Button><a className="contact-link" href={`mailto:${company.email}?subject=${encodeURIComponent(title + ' enquiry')}`}>Send an email ↗</a><p>{isHome ? 'Under construction · Pre-booking available. Specific project availability and booking terms must be confirmed with our team.' : 'Availability and purchase terms are subject to confirmation.'}</p></div>
      </div>
      <Link to="/projects" className="text-link">← All projects</Link>
    </section>
  </>;
}
