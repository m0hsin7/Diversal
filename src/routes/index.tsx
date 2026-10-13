import { createFileRoute, Link } from '@tanstack/react-router';
import { Hero } from '@/components/landing/Hero';
import { Reveal } from '@/components/landing/Reveal';
import { PageFilm } from '@/components/landing/PageFilm';
import { Faq } from '@/components/landing/Faq';
import { ProjectGrid } from '@/components/site/ProjectGrid';
import { HomeProjectGrid } from '@/components/site/HomeProjectGrid';
import { company, services, pageHead } from '@/lib/company';

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'Diversal · Live Better',
      'Diversal Estate & Marketing Pvt. Ltd. Property enquiries across Faisal Town F-18, Multi Gardens B-17, Faisal Hills, Park View and DHA Margalla projects.',
    ),
  component: Home,
});

function Home() {
  return (
    <div className="page-flow">
      <PageFilm />
      <div className="relative z-10">
        <Hero />
        <div className="home-content">

          {/* ── Statement ──────────────────────────────────────── */}
          <section data-scroll-scene className="site-container home-statement">
            <Reveal>
              <p className="eyebrow">Diversal Estate &amp; Marketing · Pvt. Ltd.</p>
              <h2>
                A new address.<br />
                <span>A better perspective.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="statement-side">
              <p>
                Buying, selling or considering your next investment? Explore six
                projects in the Islamabad region with a team you can meet in person.
              </p>
              <Link to="/about" className="text-link">Meet Diversal ↗</Link>
              <div className="home-facts">
                <div><strong>06</strong><span>Featured projects</span></div>
                <div><strong>02</strong><span>Islamabad offices</span></div>
              </div>
            </Reveal>
          </section>

          {/* ── Projects ───────────────────────────────────────── */}
          <section data-scroll-scene className="site-container home-projects">
            <div className="section-heading">
              <Reveal>
                <p className="eyebrow">Selected locations / Pakistan</p>
                <h2>The projects.</h2>
              </Reveal>
              <Link to="/projects" className="text-link">Explore all six ↗</Link>
            </div>
            <ProjectGrid />
          </section>
          <HomeProjectGrid />

          {/* ── Services ───────────────────────────────────────── */}
          <section data-scroll-scene className="home-services">
            <div className="site-container">
              <Reveal>
                <p className="eyebrow">Property, with a personal approach</p>
                <h2>
                  From possibility<br />to a place of your own.
                </h2>
              </Reveal>
              <div className="home-service-list">
                {services.map((s, i) => (
                  <Reveal key={s.number} delay={i * 80}>
                    <Link to="/services">
                      <span>{s.number}</span>
                      <h3>{s.name}</h3>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── Offices ────────────────────────────────────────── */}
          <section data-scroll-scene className="site-container home-offices">
            <Reveal>
              <p className="eyebrow">Rooted in Islamabad</p>
              <h2>Come say hello.</h2>
              <p>Meet our team at Blue Area or Multi Gardens B-17.</p>
              <Link to="/contact" className="text-link">Office details &amp; directions ↗</Link>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">A direct conversation</p>
              <h3>{company.ceo}</h3>
              <p>Chief Executive Officer</p>
              <a href="tel:+923325178767" className="contact-link">{company.phones[0]}</a>
            </Reveal>
          </section>

          {/* ── FAQ ────────────────────────────────────────────── */}
          <Faq />

        </div>
      </div>
    </div>
  );
}
