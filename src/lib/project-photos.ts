import faisalTown from '@/assets/projects/faisal-town-f18.jpg.asset.json';
import multiGardens from '@/assets/projects/multi-gardens-b17.jpg.asset.json';
import faisalHills from '@/assets/projects/faisal-hills.jpg.asset.json';
import parkView from '@/assets/projects/park-view-fountain.jpg.asset.json';
import enclave from '@/assets/projects/margalla-enclave-access.jpg.asset.json';
import orchards from '@/assets/projects/margalla-orchards.png.asset.json';

export const projectPhotos: Record<string, { url: string; alt: string; source: string; kind?: string }> = {
  'faisal-town-f18': { url: faisalTown.url, alt: 'Entrance gate of Faisal Town F-18 Islamabad', source: 'https://manahilestate.com/faisal-town-islamabad/' },
  'multi-gardens-b17': { url: multiGardens.url, alt: 'Roads and homes in Multi Gardens B-17 MPCHS Islamabad', source: 'https://mpchs.com/', },
  'faisal-hills': { url: faisalHills.url, alt: 'Executive Block development update at Faisal Hills', source: 'https://faisalhills.com/' },
  'park-view': { url: parkView.url, alt: 'Dancing fountain at Park View City Downtown Islamabad', source: 'https://www.app.com.pk/photos-section/a-stunning-view-of-pakistans-biggest-dancing-fountain-show-illuminating-at-parkview-city-downtown-islamabad/' },
  'margalla-enclave': { url: enclave.url, alt: 'Margalla Enclave access underpass on Park Road Islamabad', source: 'https://www.app.com.pk/photos-section/a-view-of-the-park-road-underpass-also-known-as-the-margalla-enclave-underpass-after-being-opened-to-traffic-in-the-federal-capital/', kind: 'Park Road · Margalla Enclave access' },
  'margalla-orchid': { url: orchards.url, alt: 'Margalla Orchards DHA Islamabad entrance gate', source: 'https://manahilestate.com/dha-margalla-orchards/' },
};
