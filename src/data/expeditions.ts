export type Mood = 'wildlife' | 'monastery' | 'water' | 'craft' | 'highland'

export type Expedition = {
  id: string
  title: string
  states: string[]
  mood: Mood
  days: string
  bestWindow: string
  intensity: 'soft' | 'moderate' | 'hard'
  hook: string
  highlights: string[]
  sourceLinks: { label: string; href: string }[]
}

export const expeditions: Expedition[] = [
  {
    id: 'kaziranga-floodplain',
    title: 'Floodplain & Footprints (Kaziranga)',
    states: ['Assam'],
    mood: 'wildlife',
    days: '3–5',
    bestWindow: 'Nov–Apr',
    intensity: 'soft',
    hook:
      "A grass-ocean shaped by the Brahmaputra — where conservation stories are written in mud, reeds, and migration.",
    highlights: [
      "Wet alluvial tall grassland interspersed with pools and woodland patches",
      "Stronghold of the Indian one-horned rhinoceros",
      'Important wetlands for migratory birds'
    ],
    sourceLinks: [
      {
        label: 'UNESCO — Kaziranga National Park (Outstanding Universal Value)',
        href: 'https://whc.unesco.org/en/list/337/'
      }
    ]
  },
  {
    id: 'living-bridges',
    title: 'Root Architecture (Living Root Bridges)',
    states: ['Meghalaya'],
    mood: 'craft',
    days: '2–4',
    bestWindow: 'Oct–Apr',
    intensity: 'moderate',
    hook:
      'A bridge that grows stronger with time — community-built, intergenerational, and engineered with living roots.',
    highlights: [
      'Nature-based engineering through human–plant interaction',
      'Practice embedded across 75+ villages (Khasi community)',
      'Sustainability icon: progressive strength and longevity in extreme conditions'
    ],
    sourceLinks: [
      {
        label: 'UNESCO Tentative List — Jingkieng jri (Living Root Bridge Cultural Landscapes)',
        href: 'https://whc.unesco.org/en/tentativelists/6606/'
      }
    ]
  },
  {
    id: 'floating-world',
    title: 'Floating World (Loktak & Keibul Lamjao)',
    states: ['Manipur'],
    mood: 'water',
    days: '2–3',
    bestWindow: 'Oct–Mar',
    intensity: 'soft',
    hook:
      'A lake of floating biomass islands — “phumdi” — and the rare ecology they hold together.',
    highlights: [
      'Loktak Lake ecosystem with floating mats (“phumdi”)',
      'Keibul Lamjao National Park sits on a continuous mass of phumdi',
      'Noted as the only floating national park in the world (tentative listing text)'
    ],
    sourceLinks: [
      {
        label: 'UNESCO Tentative List — Keibul Lamjao Conservation Area',
        href: 'https://whc.unesco.org/en/tentativelists/6086/'
      }
    ]
  },
  {
    id: 'tawang-paradise',
    title: 'High Monastery, Thin Air (Tawang)',
    states: ['Arunachal Pradesh'],
    mood: 'monastery',
    days: '4–7',
    bestWindow: 'Mar–Jun, Sep–Nov',
    intensity: 'moderate',
    hook:
      'Mahayana Buddhism in the eastern Himalayas — a monastery at 10,000+ feet overlooking the valley.',
    highlights: [
      'Largest monastery in India (Mahayana Buddhism)',
      'Founded in the 17th century; known as Gaden Namgyal Lhatse',
      'Library with Kangyur and Tengyur scriptures'
    ],
    sourceLinks: [
      {
        label: 'Incredible India — Tawang Monastery',
        href: 'https://www.incredibleindia.gov.in/en/arunachal-pradesh/tawang/tawang-monastery'
      }
    ]
  },
  {
    id: 'nathula-silk-route',
    title: 'Silk Route Air (Nathu La Pass)',
    states: ['Sikkim'],
    mood: 'highland',
    days: '2–4',
    bestWindow: 'Apr–Jun, Oct–Dec',
    intensity: 'hard',
    hook:
      'A high-altitude corridor once linked to the Silk Route — prayer flags, thin air, and cultural crossroads.',
    highlights: [
      'Altitude around 4,310 metres',
      'Part of the ancient Silk Route context',
      'Views of the Himalayas and the Indo–Chinese border zone'
    ],
    sourceLinks: [
      {
        label: 'Incredible India — Nathu La Pass',
        href: 'https://www.incredibleindia.gov.in/en/sikkim/gangtok/nathu-la-pass'
      }
    ]
  },
  {
    id: 'majuli-island',
    title: 'River Island Mythologies (Majuli)',
    states: ['Assam'],
    mood: 'craft',
    days: '2–3',
    bestWindow: 'Nov',
    intensity: 'soft',
    hook:
      'An island where food, theatre, and devotion share the same evening air — especially during Raas Mahotsav.',
    highlights: [
      "Cuisine notes: potato dia maas and bamboo-roasted chicken khorika (portal description)",
      'Raas Mahotsav in November; Bhaonas and Raas Leela performances (portal description)',
      'Cool, comfortable weather in November (portal description)'
    ],
    sourceLinks: [
      {
        label: 'Incredible India — Majuli',
        href: 'https://www.incredibleindia.gov.in/en/assam/majuli'
      }
    ]
  },
  {
    id: 'neermahal-water-palace',
    title: 'A Palace That Floats (Neermahal)',
    states: ['Tripura'],
    mood: 'water',
    days: '1–2',
    bestWindow: 'Nov–Feb',
    intensity: 'soft',
    hook:
      'India’s largest water palace — architecture reflected in Rudrasagar Lake, best seen from a boat.',
    highlights: [
      'Built in 1930 by Maharaja Bir Bikram Kishore Manikya Debbarma',
      '24 rooms; two sections (Andar Mahal and open-air theatre)',
      'Lake setting + winter migratory birds mentioned for cruises'
    ],
    sourceLinks: [
      {
        label: 'Incredible India — Neermahal',
        href: 'https://www.incredibleindia.gov.in/en/tripura/agartala/neermahal'
      }
    ]
  },
  {
    id: 'vantawng',
    title: 'Bamboo Hills & Falling Water (Vantawng Khawthla)',
    states: ['Mizoram'],
    mood: 'water',
    days: '2–3',
    bestWindow: 'Oct–Mar',
    intensity: 'moderate',
    hook:
      "Mizoram’s highest waterfall — named after a legendary swimmer — surrounded by dense bamboo forests.",
    highlights: [
      'In Serchhip district, ~137 km from Aizawl (portal description)',
      'Plunge from about 230 metres (portal description)',
      'Picnicking, nature walks, bird watching; no swimming near base (portal description)'
    ],
    sourceLinks: [
      {
        label: 'Incredible India — Vantawng Khawthla',
        href: 'https://www.incredibleindia.gov.in/en/mizoram/aizawl/vantawng-khawthla'
      }
    ]
  }
]

export const moodLabels: Record<Mood, string> = {
  wildlife: 'Wildlife',
  monastery: 'Monastery',
  water: 'Water',
  craft: 'Craft',
  highland: 'Highland'
}
