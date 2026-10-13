import { createFileRoute } from '@tanstack/react-router';
import { PageIntro } from '@/components/site/PageIntro';
import { ProjectGrid } from '@/components/site/ProjectGrid';
import { HomeProjectGrid } from '@/components/site/HomeProjectGrid';
import { pageHead } from '@/lib/company';
export const Route = createFileRoute('/projects/')({ head: () => pageHead('Our Projects', 'Explore Faisal Town F-18, Multi Gardens B-17, Faisal Hills, Park View and the Margalla projects in Islamabad.'), component: Projects });
function Projects() { return <><PageIntro eyebrow="Developments & residential portfolio" title="Our featured projects." text="Explore six communities across the Islamabad region, alongside individual homes under construction in Top City and Faisal Town." /><section className="site-container section-bottom"><ProjectGrid filters /></section><HomeProjectGrid /></>; }
