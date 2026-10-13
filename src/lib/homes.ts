import modern from '@/assets/homes/modern-residence-enhanced.jpg.asset.json';
import residence334 from '@/assets/homes/residence-334-enhanced.jpg.asset.json';
import vista from '@/assets/homes/the-vista-enhanced.jpg.asset.json';
import residence999 from '@/assets/homes/residence-999-enhanced.jpg.asset.json';
import topCity from '@/assets/homes/residence-top-city-enhanced.jpg.asset.json';
import faisalTown from '@/assets/homes/residence-faisal-town-enhanced.jpg.asset.json';

export const homes = [
  { slug: 'modern-residence', name: 'Modern Residence', area: 'Top City, Islamabad', image: modern.url, design: 'A contemporary exterior with layered volumes, patterned screens and a sheltered entrance.' },
  { slug: 'residence-334', name: 'Residence 334', area: 'Top City, Islamabad', image: residence334.url, design: 'Clean horizontal lines, contrasting façade panels and a wide gated frontage define the supplied exterior.' },
  { slug: 'the-vista', name: 'The Vista', area: 'Top City, Islamabad', image: vista.url, design: 'A bold framed façade pairs broad glazing with a recessed balcony and an illuminated entrance.' },
  { slug: 'residence-999', name: 'Residence 999', area: 'Top City, Islamabad', image: residence999.url, design: 'Stone-textured accents, open balcony framing and a paved approach give this home a distinctive street presence.' },
  { slug: 'residence-top-city', name: 'Residence — Top City', area: 'Top City, Islamabad', image: topCity.url, design: 'A contrasting upper-storey frame and patterned feature wall sit above a shaded ground-floor entrance.' },
  { slug: 'residence-faisal-town', name: 'Residence — Faisal Town', area: 'Faisal Town, Islamabad', image: faisalTown.url, design: 'A light multi-level exterior is balanced by a vertical stone-clad feature and balcony railings.' },
].map(home => ({
  ...home,
  status: 'Under construction' as const,
  preBookingAvailable: true,
  location: `${home.area}, Pakistan`,
  detailTitle: `Construction in ${home.area.split(',')[0]}`,
  summary: `${home.name} introduces residential construction in ${home.area}, Pakistan. ${home.design} Under construction, with pre-booking enquiries available.`,
  description: `${home.name} is part of our residential construction portfolio in ${home.area}, Pakistan. ${home.design} ${home.slug === 'modern-residence' ? 'Discuss the entrance layout, façade finishes and interior specification for your preferred construction project.' : home.slug === 'residence-334' ? 'Ask our team about frontage planning, exterior materials and the room arrangement of the available project.' : home.slug === 'the-vista' ? 'Explore glazing choices, balcony detailing and the planned living spaces with the construction team.' : home.slug === 'residence-999' ? 'Discuss stone finishes, boundary treatment and the approach to the home when reviewing the project specification.' : home.slug === 'residence-top-city' ? 'Compare upper-floor detailing, the shaded entrance and the proposed finish schedule for construction in Top City.' : 'Speak with us about multi-level planning, balcony finishes and exterior material choices for construction in Faisal Town.'} These projects are under construction and can be pre-booked. Contact Diversal to confirm the specific project, latest progress, available options, payment terms and expected completion before booking. The supplied exterior image illustrates the portfolio design rather than current site progress.`,
}));