import { createFileRoute, Link } from '@tanstack/react-router';
import { PageIntro } from '@/components/site/PageIntro';
import { Brand } from '@/components/site/Brand';
import { Reveal } from '@/components/landing/Reveal';
import { company, pageHead } from '@/lib/company';
import ceoPhoto from '@/assets/malik-waqar-ahmed.jpg';

export const Route = createFileRoute('/about')({
  head: () =>
    pageHead(
      'Our Company',
      'Meet Diversal Estate & Marketing Pvt. Ltd., led by CEO Malik Waqar Ahmed, with offices in Islamabad.',
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our company / Islamabad"
        title="Diversal. Live Better."
        text="A property conversation built around your plans, your priorities and your next address."
      />
      <section data-scroll-scene className="site-container section-bottom">
        <div className="company-band">
          <Brand />
          <p>Islamabad, Pakistan</p>
        </div>
        <div className="detail-columns">
          <Reveal>
            <p className="eyebrow">Estate &amp; Marketing · Pvt. Ltd.</p>
            <h2>
              Local presence.<br />
              Personal attention.
            </h2>
            <p>
              {company.legalName} handles property enquiries across the six featured
              projects. Meet our team at our Blue Area head office or our Multi Gardens
              B-17 site office.
            </p>
            <Link to="/contact" className="text-link">Visit our offices ↗</Link>
          </Reveal>

          <Reveal delay={100} className="ceo-block">
            <p className="eyebrow">Leadership</p>
            <div className="ceo-card-inline">
              <img
                src={ceoPhoto}
                alt={`${company.ceo} — Chief Executive Officer & Visionary Leader`}
                className="ceo-avatar"
              />
              <div>
                <h3 className="ceo-name">{company.ceo}</h3>
                <p className="ceo-tag">Chief Executive Officer &amp; Visionary Leader</p>
              </div>
            </div>
            <p className="ceo-bio">
              A visionary leader and respected strategist in Islamabad’s property landscape.
              Malik Waqar Ahmed brings unmatched market foresight, unwavering ethics, and
              personalized advisory to clients and investors seeking premium residential and
              commercial real estate across the capital region.
            </p>
            <a href={`mailto:${company.email}`} className="contact-link">{company.email}</a>
            <a href="tel:+923325178767" className="contact-link">{company.phones[0]}</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
