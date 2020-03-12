const riderData = [
  {
    id: 1,
    active: true,
    title: 'PRODUCTION',
    description:
      'Physical works are subject to decomposition, or, if inert, also nonsynthetic*.',
    items: [
      'no acrylic paints',
      'no plastics',
      'no polyurethane foams, polyester resins, etc',
      'no polyvinyl chloride (PVC)',
      'no vinyl record pressing',
      'no plastic coated photographic paper',
      'No or minimal long-distance oil-dependent travel — reliance on proxies as needed',
      'No CD manufacturing',
      'No new electronics (incl cameras, computers, data storage, etc)',
      'Outsourced fabrication is local and fairly paid',
      'Publications are printed local to distribution ',
      'no non-recycled paper, no petroleum inks',
      'no plastic coating on covers',
      'no plastic wrap on books'
    ]
  },
  {
    id: 2,
    active: true,
    title: 'EXHIBITION',
    description: 'New exhibition materials are compostable.',
    items: [
      'no vinyl — e.g., lettering, signage, banners',
      'no plexiglass',
      'no new electronics (incl projectors, computers, data storage, etc)',
      'no non-reusable temporary walls'
    ]
  },
  {
    id: 3,
    active: true,
    title: 'PACKING, STORAGE, SHIPPING',
    description: 'New packing materials are compostable.',
    items: [
      'no poly sheeting, bubble wrap, polyethylene, styrofoam, foamcore, etc.',
      'no plastic wraps for crates',
      'Cardboard-surface crates, built for re-use'
    ]
  },
  {
    id: 4,
    active: true,
    title: 'TRAVEL',
    description:
      'Anyone non-instrumental is discouraged from traveling by air in order to be present.',
    items: [
      'Anyone who feels they need to be present somewhere travels by train if possible, and if flying, sits in coach, avoids overnight flights, and avoids connecting flights.',
      'Institutions/galleries incentivize not-flying by offering equivalent cash to artists in lieu of covering flight & lodging costs.',
      'No business or first class flights, no private planes, no cruise ships.'
    ]
  },
  {
    id: 5,
    active: true,
    title: 'OPENING',
    description: '',
    items: [
      'No imported water, far-flung wine, etc ',
      'If a meal is offered in the context of the show, no food is served that comes from animals that are either kept in captivity and/or killed for this purpose. ',
      'No single-use cups, dishes, unless made from plant material that can be non-industrially composted, i.e. in garden, unless there is great confidence that your municipality successfully can compost the material (currently unusual)'
    ]
  }
];

module.exports = riderData;
