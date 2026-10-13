export const company = {
  name: 'Diversal Estate & Marketing',
  legalName: 'Diversal Estate & Marketing Pvt. Ltd.',
  tagline: 'Live Better',
  ceo: 'Malik Waqar Ahmed',
  email: 'ahmed.waqar46@yahoo.com',
  phones: ['+92 332-517-8767', '+92 335-058-6121'],
  whatsappNumber: '923350586121',
  headOffice: 'No. 5 & 6, Mezzanine Floor, United Plaza, Fazal-e-Haq Road, Blue Area, Islamabad.',
  siteOffice: 'B17, Block B, Main MR-1, Office No. 1378, MPCHS, Islamabad.',
};

export const projects = [
  { slug: 'faisal-town-f18', name: 'Faisal Town F-18', area: 'Islamabad', group: 'Faisal', summary: 'A planned residential community near the M-1, on Islamabad’s airport side.', description: 'Developed by Faisal Town Group, Faisal Town F-18 brings residential neighbourhoods and commercial areas together near the M-1 Fateh Jang Interchange. Its location on the airport side of Islamabad makes regional connectivity a defining part of the development. Explore individual blocks with Diversal to compare the setting, plot location and current stage of development.', source: 'https://faisaltowngroup.com/faisal-town-1/' },
  { slug: 'multi-gardens-b17', name: 'Multi Gardens B-17', area: 'MPCHS · Islamabad', group: 'MPCHS', summary: 'An MPCHS community in Zone II, set against the Margalla Hills.', description: 'Multi Gardens B-17 is a residential development by the Multi-Professional Cooperative Housing Society (MPCHS) in Islamabad’s Zone II. Its Margalla Hills setting and position along the GT Road corridor give the community a distinct identity. Residential blocks and commercial areas form the development; Diversal’s Block B site office offers a local starting point for exploring them in person.', source: 'https://mpchs.com/' },
  { slug: 'faisal-hills', name: 'Faisal Hills', area: 'Taxila · Islamabad region', group: 'Faisal', summary: 'A residential development along GT Road near Taxila and the Margalla Hills.', description: 'Faisal Hills is a Faisal Town Group development along Main GT Road near Taxila. The project combines residential neighbourhoods with commercial areas in a setting shaped by the nearby Margalla Hills. Its blocks offer different locations within the community, so a site visit is the best way to compare the surroundings and progress of the specific property you are considering.', source: 'https://faisaltowngroup.com/' },
  { slug: 'park-view', name: 'Park View City', area: 'Islamabad', group: 'Park View', summary: 'Vision Group’s Zone IV development, with a valley setting and Downtown district.', description: 'Park View City Islamabad is a Vision Group development in Zone IV, in the Malot Road area. Its valley setting gives the project a different character from Islamabad’s grid-based sectors, while its Downtown commercial district and dancing fountain are recognisable landmarks. Explore residential and commercial locations with Diversal, comparing each block with your plans for a home or business.', source: 'https://parkviewcity.com.pk/islamabad/' },
  { slug: 'margalla-enclave', name: 'Margalla Enclave DHA', area: 'Islamabad', group: 'DHA', summary: 'A DHA Islamabad–CDA joint development in Islamabad’s Zone IV.', description: 'Margalla Enclave is a joint development by DHA Islamabad and the Capital Development Authority (CDA) in Islamabad’s Zone IV. The project includes residential and commercial plots in the Jinnah Avenue corridor, formerly known as Kuri Road. For buyers considering this developing community, the specific plot location, access and current development status are important parts of the comparison.', source: 'https://margallaenclave.dhai-r.com.pk/' },
  { slug: 'margalla-orchid', name: 'Margalla Orchards DHA', area: 'Islamabad', group: 'DHA', summary: 'A DHA-managed residential development on Islamabad’s Park Road corridor.', description: 'Margalla Orchards is a DHA Islamabad-managed residential development on Main Park Road, opposite COMSATS University. The project originated through FGEHA and the Supreme Court Bar Association and sits within Islamabad’s eastern residential corridor. Diversal can help you explore the development and discuss the specific property, transfer requirements and current terms before you make a decision.', source: 'https://margallaorchard.com/' },
];

export const services = [
  { number: '01', name: 'Buy a property', text: 'Tell us your preferred project, property type and budget. We’ll discuss suitable options and the next steps for a viewing.' },
  { number: '02', name: 'Sell your property', text: 'Share your project, block, plot size and ownership details so our team can discuss your selling requirements.' },
  { number: '03', name: 'Investment consultation', text: 'Compare your priorities across location, purchase terms and intended holding period, with a conversation focused on your requirements.' },
  { number: '04', name: 'Site visits & guidance', text: 'Arrange a visit and request the specific property details, documents and payment terms you need to make an informed decision.' },
];

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Diversal Estate & Marketing`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
