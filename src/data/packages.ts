export type PackageDay = {
  day: number
  title: string
  details: string[]
}

export type TravelPackage = {
  id: string
  title: string
  subtitle: string
  durationLabel: string
  pickupLabel: string
  itineraryBrief: PackageDay[]
  itineraryDetailed: PackageDay[]
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  importantInfo: string[]
  contact: {
    name: string
    phone: string
  }
  sources: { label: string; href: string }[]
}

const contact = {
  name: 'pathiktrips',
  phone: '+91-7240164702'
}

export const packages: TravelPackage[] = [
  {
    id: 'meghalaya-6d',
    title: 'Meghalaya Backpacking Trip',
    subtitle: 'Pickup: Ex-Guwahati • Shillong • Cherrapunjee • Dawki',
    durationLabel: '6 Days',
    pickupLabel: 'Pickup: Ex-Guwahati',
    itineraryBrief: [
      { day: 1, title: 'Arrival in Guwahati | Umiam Lake | Shillong', details: [] },
      { day: 2, title: 'Laitlum Grand Canyon | En route to Cherrapunjee | Wei Sawdong Waterfall', details: [] },
      { day: 3, title: 'Single Root Bridge | Double Decker Bridge Trek (Nongriat)', details: [] },
      {
        day: 4,
        title: 'Mawsmai Caves | Nohkalikai Waterfall | Mawlynnong Village | Camp in Shnongpdeng (Dawki)',
        details: []
      },
      { day: 5, title: 'Water sports | Krang Suri Waterfall | Shillong’s essence', details: [] },
      { day: 6, title: 'Shillong to Guwahati | Departure', details: [] }
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: 'Guwahati | Umiam Lake | Shillong',
        details: [
          'Meet at Guwahati Airport; depart for Shillong at 12 PM.',
          'Please plan arrivals before 11:30 AM (Guwahati → Shillong is ~4 hours).',
          'Pass by Umiam Lake en route.',
          'Check-in; evening at Police Bazar, Shillong.',
          'Overnight at Shillong.'
        ]
      },
      {
        day: 2,
        title: 'Shillong → Cherrapunji via Laitlum Canyon',
        details: [
          'Breakfast, then transfer to Cherrapunji.',
          'Visit Laitlum Canyon and Mawkdok Dympep viewpoint en route.',
          'Sightseeing may include Nohkalikai Falls, Garden of Caves, Arwah Caves, Seven Sisters Falls (time permitting).',
          'Overnight at Cherrapunji.'
        ]
      },
      {
        day: 3,
        title: 'Cherrapunji → Nongriat trek (Double Decker Living Root Bridge)',
        details: [
          'Breakfast at 7 AM; proceed to Tyrna village.',
          'Trek to the Double Decker Root Bridge (Nongriat) with a local guide.',
          'Climb back up (often cited as ~3500 steps) to end the hike at the same village by evening.',
          'Overnight at Cherrapunji.'
        ]
      },
      {
        day: 4,
        title: 'Cherrapunji → Mawlynnong → Dawki / Shnongpdeng (camp)',
        details: [
          'Breakfast; drive to Mawlynnong (~110 km / ~2.5 hrs).',
          'Trek to the Single Decker Living Root Bridge in Riwai village.',
          'Visit Balancing Rock; head to Dawki for boating on Umngot River.',
          'Overnight camping at Dawki/Shnongpdeng.'
        ]
      },
      {
        day: 5,
        title: 'Shnongpdeng → Shillong (falls + local essence)',
        details: [
          'Breakfast; boating at Dawki Lake / Umngot (as per conditions).',
          'Depart for Shillong.',
          'Stops may include Krang Suri Falls, Phe Phe Falls (Jowai), and Laitlum Canyon.',
          'Overnight at Shillong.'
        ]
      },
      {
        day: 6,
        title: 'Shillong → Guwahati | Departure',
        details: [
          'After breakfast, drive back to Guwahati for departure.',
          'Book flights/trains with buffer for traffic and road conditions.'
        ]
      }
    ],
    highlights: [
      'Shillong, Cherrapunjee, Dawki and the living root bridges of Nongriat',
      'Mawlynnong village + Riwai single-decker root bridge',
      'Wei Sawdong + Nohkalikai (time/route dependent)',
      'Camping vibe at Shnongpdeng (Dawki) + water activities'
    ],
    inclusions: [
      'Transportation: tempo traveler / SUV / sedan (as per group size) for the itinerary',
      'Medical kit for emergency handling',
      'Meals: breakfast on Day 2–Day 6; dinner during Dawki camp stay',
      'Accommodation: 5 nights (Shillong/Cherrapunji/Shnongpdeng as per plan) on double/triple sharing'
    ],
    exclusions: [
      '5% GST (if applicable)',
      'Insurance/rescue/evacuation/hospitalisation and entry tickets',
      'Drinks, tips, personal expenses; extra food not in inclusions',
      'Lunch and meals not mentioned in inclusions',
      'Airfare/rail fare',
      'Parking and monument entry fees during sightseeing',
      'Extra costs due to delays, landslides, roadblocks, flight cancellations or natural calamities'
    ],
    importantInfo: [
      'Valid Govt. ID required for verification before boarding.',
      'Itinerary may change due to weather/road conditions; alternate plans may be used.',
      'Any extra cost due to disruptions (transport/accommodation) will be additional.',
      'Respect co-passengers; misbehaviour can lead to removal from the trip.'
    ],
    contact,
    sources: [
      {
        label: 'UNESCO Tentative List — Living Root Bridge Cultural Landscapes (Meghalaya)',
        href: 'https://whc.unesco.org/en/tentativelists/6606/'
      }
    ]
  },
  {
    id: 'meghalaya-kaziranga-6n7d',
    title: 'Meghalaya Backpacking Trip + Kaziranga',
    subtitle: '6N/7D • Pickup: Ex-Guwahati • Meghalaya + Assam wildlife finale',
    durationLabel: '6N/7D',
    pickupLabel: 'Pickup: Ex-Guwahati',
    itineraryBrief: [
      { day: 1, title: 'Arrival in Guwahati | Umiam Lake | Shillong', details: [] },
      { day: 2, title: 'Laitlum Grand Canyon | En route to Cherrapunjee | Wei Sawdong Waterfall', details: [] },
      { day: 3, title: 'Single Root Bridge | Double Decker Bridge Trek', details: [] },
      {
        day: 4,
        title: 'Mawsmai Caves | Nohkalikai Waterfall | Mawlynnong Village | Camp in Shnongpdeng (Dawki)',
        details: []
      },
      { day: 5, title: 'Water sports | Krang Suri Waterfall | Shillong’s essence', details: [] },
      { day: 6, title: 'Shillong to Kaziranga National Park', details: [] },
      { day: 7, title: 'Kaziranga safari and return to Guwahati', details: [] }
    ],
    itineraryDetailed: [
      {
        day: 1,
        title: 'Guwahati | Umiam Lake | Shillong',
        details: [
          'Meet at Guwahati Airport; depart for Shillong at 12 PM.',
          'Please plan arrivals before 11:30 AM (Guwahati → Shillong is ~4 hours).',
          'Pass by Umiam Lake en route.',
          'Check-in; evening at Police Bazar, Shillong.',
          'Overnight at Shillong.'
        ]
      },
      {
        day: 2,
        title: 'Shillong → Cherrapunji via Laitlum Canyon',
        details: [
          'Breakfast, then transfer to Cherrapunji.',
          'Visit Laitlum Canyon and Mawkdok Dympep viewpoint en route.',
          'Sightseeing may include Nohkalikai Falls, Garden of Caves, Arwah Caves, Seven Sisters Falls (time permitting).',
          'Overnight at Cherrapunji.'
        ]
      },
      {
        day: 3,
        title: 'Cherrapunji → Nongriat trek (Double Decker Living Root Bridge)',
        details: [
          'Breakfast at 7 AM; proceed to Tyrna village.',
          'Trek to the Double Decker Root Bridge (Nongriat) with a local guide.',
          'Climb back up (often cited as ~3500 steps) to end the hike at the same village by evening.',
          'Overnight at Cherrapunji.'
        ]
      },
      {
        day: 4,
        title: 'Cherrapunji → Mawlynnong → Dawki / Shnongpdeng (camp)',
        details: [
          'Breakfast; drive to Mawlynnong (~110 km / ~2.5 hrs).',
          'Trek to the Single Decker Living Root Bridge in Riwai village.',
          'Visit Balancing Rock; head to Dawki for boating on Umngot River.',
          'Overnight camping at Dawki/Shnongpdeng.'
        ]
      },
      {
        day: 5,
        title: 'Shnongpdeng → Shillong',
        details: [
          'Breakfast; boating at Dawki Lake / Umngot (as per conditions).',
          'Depart for Shillong.',
          'Stops may include Krang Suri Falls, Phe Phe Falls (Jowai), and Laitlum Canyon.',
          'Overnight stay at Shillong.'
        ]
      },
      {
        day: 6,
        title: 'Shillong → Kaziranga National Park',
        details: [
          'Breakfast; depart Shillong for Kaziranga.',
          'Arrive, check into resort; relax amid greenery and possible wildlife views.',
          'Overnight at Kaziranga.'
        ]
      },
      {
        day: 7,
        title: 'Kaziranga safari → Guwahati departure',
        details: [
          'Early morning jeep safari in Kaziranga.',
          'Drive back to Guwahati for onward journey.',
          'Note: book flights/trains departing after 5 PM for a comfortable departure (as per your reference).'
        ]
      }
    ],
    highlights: [
      'Meghalaya circuit: Shillong • Cherrapunjee • Dawki • Nongriat living root bridges',
      'Mawlynnong village + Riwai single-decker root bridge',
      'Finish with Kaziranga safari (one-horned rhino habitat)'
    ],
    inclusions: [
      'Transportation: tempo traveler / SUV / sedan (as per group size) for the itinerary',
      'Jeep safari at Kaziranga National Park',
      'Medical kit for emergency handling',
      'Meals: breakfast on Day 2–Day 7 and dinner at Dawki camp stay',
      'Accommodation: 6 nights (Shillong/Cherrapunji/Shnongpdeng/Kaziranga) on double/triple sharing'
    ],
    exclusions: [
      '5% GST (if applicable)',
      'Insurance/rescue/evacuation/hospitalisation and entry tickets',
      'Drinks, tips, personal expenses; extra food not in inclusions',
      'Lunch and meals not mentioned in inclusions',
      'Airfare/rail fare',
      'Parking and monument entry fees during sightseeing',
      'Extra costs due to delays, landslides, roadblocks, flight cancellations or natural calamities'
    ],
    importantInfo: [
      'Valid Govt. ID required for verification before boarding.',
      'Itinerary may change due to weather/road conditions; alternate plans may be used.',
      'Any extra cost due to disruptions (transport/accommodation) will be additional.',
      'Full payment due while boarding; pending payments may lead to cancellation (as per your reference).',
      'Respect co-passengers; misbehaviour can lead to removal from the trip.'
    ],
    contact,
    sources: [
      {
        label: 'UNESCO — Kaziranga National Park',
        href: 'https://whc.unesco.org/en/list/337/'
      },
      {
        label: 'UNESCO Tentative List — Living Root Bridge Cultural Landscapes (Meghalaya)',
        href: 'https://whc.unesco.org/en/tentativelists/6606/'
      }
    ]
  }
]
