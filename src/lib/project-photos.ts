import faisalTown from '@/assets/projects/faisal-town-f18.jpg';
import multiGardens from '@/assets/projects/multi-gardens-b17.jpg';
import faisalHills from '@/assets/projects/faisal-hills.jpg';
import parkView from '@/assets/projects/park-view-fountain.jpg';
import enclave from '@/assets/projects/margalla-enclave-access.jpg';
import orchards from '@/assets/projects/margalla-orchards.png';

export const projectPhotos: Record<string, { url: string; alt: string; source: string; kind?: string }> = {
  'faisal-town-f18': {
    url: faisalTown,
    alt: 'Entrance gate of Faisal Town F-18 Islamabad',
    source: 'https://faisaltowngroup.com/faisal-town-1/',
  },
  'multi-gardens-b17': {
    url: multiGardens,
    alt: 'Roads and homes in Multi Gardens B-17 MPCHS Islamabad',
    source: 'https://mpchs.com/',
  },
  'faisal-hills': {
    url: faisalHills,
    alt: 'Executive Block development update at Faisal Hills',
    source: 'https://faisalhills.com/',
  },
  'park-view': {
    url: parkView,
    alt: 'Dancing fountain at Park View City Downtown Islamabad',
    source: 'https://www.app.com.pk/photos-section/a-stunning-view-of-pakistans-biggest-dancing-fountain-show-illuminating-at-parkview-city-downtown-islamabad/',
  },
  'margalla-enclave': {
    url: enclave,
    alt: 'Margalla Enclave access underpass on Park Road Islamabad',
    source: 'https://www.app.com.pk/photos-section/a-view-of-the-park-road-underpass-also-known-as-the-margalla-enclave-underpass-after-being-opened-to-traffic-in-the-federal-capital/',
    kind: 'Park Road · Margalla Enclave access',
  },
  'margalla-orchid': {
    url: orchards,
    alt: 'Margalla Orchards DHA Islamabad entrance gate',
    source: 'https://manahilestate.com/dha-margalla-orchards/',
  },
};
