export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  duration: string;
  startingPrice: string;
  coverImage: string;
  coverAlt: string;
  gallery: string[];
  destinations: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    desc: string;
  }[];
  inclusions: string[];
  faqs: { q: string; a: string }[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: "shimla-kufri-sightseeing",
    slug: "shimla-kufri-sightseeing",
    name: "Shimla & Kufri Full-Day Sightseeing Taxi Tour",
    primaryKeyword: "Shimla Kufri sightseeing taxi",
    secondaryKeywords: ["Shimla local sightseeing cab", "Kufri day tour from Shimla", "Shimla taxi service"],
    metaTitle: "Shimla & Kufri Sightseeing Taxi Tour | Dev Homestay Cab Desk",
    metaDescription: "Private full-day Shimla and Kufri sightseeing taxi service. Visit The Ridge, Mall Road, Jakhoo Temple, and Kufri. Hassle-free pickup from Dev Homestay.",
    h1: "Shimla & Kufri Sightseeing Taxi Tour – Local Sightseeing Cab",
    tagline: "Explore Shimla's colonial heritage and Kufri's alpine peaks in comfort with local experienced drivers.",
    duration: "Full Day (8–9 Hours)",
    startingPrice: "On Request (Direct transparent rates)",
    coverImage: "/images/views/panoramic-snow-mountain-view.jpg",
    coverAlt: "Shimla and Kufri snow-covered mountain ridges and pine view",
    gallery: [
      "/images/views/panoramic-snow-mountain-view.jpg",
      "/images/views/homestay-snow-covered-winter.jpg",
      "/images/views/cherry-blossom-himalayan-temple.jpg",
      "/images/views/misty-valley-clouds-view.jpg"
    ],
    destinations: ["Mall Road & The Ridge (4 km)", "Jakhoo Temple & Ropeway (6.2 km)", "Kufri & Mahasu Peak (15 km)", "Viceregal Lodge (6.8 km)", "Chadwick Falls (7.5 km)"],
    overview: "Dev Homestay provides an in-house travel desk that coordinates private, reliable sightseeing taxis for guests wanting to explore Shimla and Kufri without the stress of parking, steep mountain walking, or negotiating with outside cab stands. Operating directly from our homestay gates in Dudhli-Bharari, our drivers are courteous, licensed local mountain specialists familiar with every scenic overlook and traffic timing. Whether you are traveling as a couple, family with young kids, or small group, we tailor the day's pace to your preferences.",
    highlights: [
      "Doorstep pickup and return right at Dev Homestay in Dudhli–Bharari",
      "Kufri alpine viewpoints, nature walks, and Mahasu Peak panorama (15 km)",
      "Jakhoo Temple visit featuring the iconic 108-foot Lord Hanuman statue",
      "Walk along The Mall Road, The Ridge, Gaiety Theatre, and Christ Church (4 km)",
      "Historic British colonial architecture at Viceregal Lodge (6.8 km)",
      "Transparent mountain cab fares with zero hidden commissions"
    ],
    itinerary: [
      {
        day: "Morning (09:00 AM – 01:00 PM)",
        title: "Kufri Alpine Excursion & Himalayan Views",
        desc: "Depart Dev Homestay after a wholesome vegetarian breakfast. Drive 15 km (approx. 35 mins) through cedar-clad ridges up to Kufri (elevation 2,720 m). Enjoy wide vistas of Himalayan snow peaks, visit Mahasu Peak, and explore surrounding apple valleys."
      },
      {
        day: "Afternoon (01:30 PM – 04:30 PM)",
        title: "Jakhoo Hill & British Colonial Heritage",
        desc: "Head back towards central Shimla to visit Jakhoo Temple (6.2 km from homestay) via ropeway or car. Proceed to the historic Viceregal Lodge (6.8 km), former British Viceroy residence with manicured English lawns."
      },
      {
        day: "Evening (04:30 PM – 07:30 PM)",
        title: "Mall Road Promenade & The Ridge",
        desc: "Dropped off near the pedestrian lift to spend a relaxed evening walking along The Mall Road, Christ Church, and Lakkar Bazaar. Return to Dev Homestay for a warm home-cooked vegetarian dinner."
      }
    ],
    inclusions: [
      "Dedicated clean vehicle (Sedan or SUV depending on group size)",
      "Experienced mountain driver with local route familiarity",
      "Fuel, toll taxes, and driver allowances included",
      "Direct pickup and drop at Dev Homestay premises"
    ],
    faqs: [
      {
        q: "How far is Kufri from Dev Homestay?",
        a: "Kufri is approximately 15 km away, taking about 35 minutes by car along the scenic Dhalli-Kufri bypass route."
      },
      {
        q: "Can the sightseeing itinerary be customized?",
        a: "Yes. Because each tour is private, you can add or replace stops such as Chadwick Falls (7.5 km) or spend more time at Mall Road."
      },
      {
        q: "How do I book this sightseeing taxi?",
        a: "Guests can book directly through our front desk or via WhatsApp (+91 84470 56787) when reserving their room or upon arrival."
      }
    ]
  },
  {
    id: "spiti-valley-from-shimla",
    slug: "spiti-valley-from-shimla",
    name: "Spiti Valley Tour from Shimla",
    primaryKeyword: "Spiti Valley tour from Shimla",
    secondaryKeywords: ["Spiti tour package from Shimla", "Shimla to Spiti Valley road trip", "Kinnaur Spiti circuit package"],
    metaTitle: "Spiti Valley Tour from Shimla (Complete Circuit) | Dev Homestay Tours",
    metaDescription: "Plan your Spiti Valley tour from Shimla with our dedicated travel desk. Experienced Himalayan drivers, high-clearance 4x4 vehicles, and customized road trips.",
    h1: "Spiti Valley Tour from Shimla – Himalayan Road Expedition",
    tagline: "Experience the high-altitude cold desert, ancient monasteries, and rugged gorges of Spiti starting from your Shimla base.",
    duration: "7 to 9 Days (Customizable)",
    startingPrice: "On Request (Custom family or group packages)",
    coverImage: "/images/views/panoramic-snow-mountain-view.jpg",
    coverAlt: "Rugged high altitude Himalayan snow mountains of Spiti Valley",
    gallery: [
      "/images/views/panoramic-snow-mountain-view.jpg",
      "/images/views/dramatic-cloud-canopy-peak.jpg",
      "/images/views/morning-sunbeams-pine-mist.jpg",
      "/images/views/homestay-snow-covered-winter.jpg"
    ],
    destinations: ["Shimla (Dev Homestay Base)", "Sarahan", "Sangla & Chitkul", "Kalpa (Kinnaur)", "Nako & Tabo", "Kaza & Key Monastery", "Chandratal Lake"],
    overview: "Starting a Spiti Valley expedition from Shimla via the Kinnaur route (NH-05) is universally recognized by mountain experts as the safest way to acclimatize gradually to high altitudes. Dev Homestay serves as the premier launchpad for Spiti travelers. Rest comfortably in our peaceful Dudhli valley homestay before departing with our handpicked Himalayan 4x4 drivers. We arrange customized multi-day road itineraries, trusted driver-guides, and logistics across Kinnaur and Spiti.",
    highlights: [
      "Acclimatize comfortably in Shimla before ascending to altitudes above 3,500 meters",
      "Drive along the legendary Hindustan-Tibet Highway through dramatic Kinnaur gorges",
      "Visit Chitkul, the last inhabited village on the Indo-Tibetan border",
      "Explore 1000-year-old Tabo Monastery (UNESCO World Heritage Site)",
      "Marvel at Key Gompa, Kibber, Komic (highest village), and Hikkim (highest post office)",
      "Reliable high-clearance vehicles with mountain-tested drivers"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dev Homestay, Shimla to Sarahan (165 km)",
        desc: "Depart early from Dev Homestay. Drive past Kufri, Narkanda, and Rampur alongside the Sutlej river to reach Sarahan. Visit the historic Bhimakali Temple."
      },
      {
        day: "Day 2",
        title: "Sarahan to Sangla & Chitkul (110 km)",
        desc: "Enter Kinnaur Valley. Ascend along the Baspa River into scenic Chitkul village, known for its wooden houses and snow views."
      },
      {
        day: "Day 3",
        title: "Chitkul to Kalpa (70 km)",
        desc: "Drive to Kalpa, situated opposite the sacred Kinner Kailash peak. Enjoy apple orchards and sunset alpenglow."
      },
      {
        day: "Day 4",
        title: "Kalpa to Nako & Tabo (150 km)",
        desc: "Cross into Spiti Valley cold desert terrain. Visit Nako lake and the historic 10th-century Tabo Monastery."
      },
      {
        day: "Day 5-6",
        title: "Tabo to Kaza, Key Monastery & High Villages",
        desc: "Explore Kaza, Key Monastery perched on a hill cone, Kibber, Chicham Bridge, and Hikkim."
      },
      {
        day: "Day 7+",
        title: "Return via Manali (summer) or Shimla (winter circuit)",
        desc: "Complete the full circuit via Kunzum Pass & Chandratal Lake to Manali or return comfortably via Kinnaur to Shimla."
      }
    ],
    inclusions: [
      "Dedicated commercial-permit vehicle (Innova / Scorpio / Tempo Traveler)",
      "Driver with 10+ years experience on high-altitude Spiti terrain",
      "Pre-trip consultation & route acclimatization advice from Dev Homestay hosts",
      "Luggage storage facility at Dev Homestay for extra baggage"
    ],
    faqs: [
      {
        q: "Why is starting the Spiti Valley tour from Shimla recommended?",
        a: "The Shimla-Kinnaur route allows your body to gain altitude gradually over 3 to 4 days, drastically reducing the risk of Acute Mountain Sickness (AMS) compared to ascending steeply from Manali."
      },
      {
        q: "What is the best season for a Spiti tour from Shimla?",
        a: "May to October offers the best road conditions and open high passes. For winter snowfall and frozen waterfalls, December to February is popular for specialized winter Spiti drives."
      },
      {
        q: "Can I leave excess luggage at Dev Homestay during the road trip?",
        a: "Yes. We provide safe, free luggage storage at Dev Homestay so you can travel light on the mountain roads."
      }
    ]
  },
  {
    id: "kinnaur-tour-packages",
    slug: "kinnaur",
    name: "Kinnaur Valley Tour Packages from Shimla",
    primaryKeyword: "Kinnaur tour packages from Shimla",
    secondaryKeywords: ["Shimla to Kinnaur taxi package", "Sangla Chitkul Kalpa tour", "Kinnaur road trip"],
    metaTitle: "Kinnaur Tour Packages from Shimla (Sangla, Chitkul, Kalpa) | Dev Homestay",
    metaDescription: "Explore Kinnaur Valley from Shimla. Tailored family & couple tour packages covering Sangla, Chitkul, Kalpa, and Kinner Kailash views with experienced drivers.",
    h1: "Kinnaur Tour Packages from Shimla – Sangla, Chitkul & Kalpa",
    tagline: "Discover emerald apple orchards, sacred deodar forests, and the majestic Kinner Kailash range on a scenic Himalayan journey.",
    duration: "4 to 6 Days",
    startingPrice: "On Request (Direct booking rates)",
    coverImage: "/images/views/golden-pine-forest-sunset.jpg",
    coverAlt: "Golden sunset over Kinnaur Himalayan pine and deodar forests",
    gallery: [
      "/images/views/golden-pine-forest-sunset.jpg",
      "/images/views/golden-sunburst-valley-hills.jpg",
      "/images/views/morning-sunbeams-pine-mist.jpg",
      "/images/views/cherry-blossom-himalayan-temple.jpg"
    ],
    destinations: ["Shimla Base (Dev Homestay)", "Narkanda & Hatu Peak", "Sarahan & Bhimakali Temple", "Sangla Valley", "Chitkul (Last Village)", "Kalpa & Roghi Village"],
    overview: "Kinnaur is one of the most culturally fascinating regions in Himachal Pradesh, where Hindu and Buddhist traditions intertwine amidst towering granite peaks and apple orchards. Departing from Dev Homestay in Shimla, our Kinnaur tour packages provide a smooth, well-paced travel experience through Sangla Valley, Chitkul on the Baspa River, and Kalpa facing the sacred Kinner Kailash peak. Handcrafted for families, couples, and nature photographers looking for pristine mountain beauty without extreme cold-desert conditions.",
    highlights: [
      "Scenic mountain drive along the Hindustan-Tibet Highway starting from Dev Homestay",
      "Stay in picturesque Sangla Valley framed by cedar forests and snow peaks",
      "Walk the wooden village lanes of Chitkul on the banks of crystal-clear Baspa River",
      "Sunrise over the 6,050-meter Kinner Kailash peak from Kalpa",
      "Heritage multi-tiered architecture of Sarahan's Bhimakali Temple",
      "Curated by hosts with 30+ years of 5-star hospitality and travel leadership"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Shimla (Dev Homestay) to Sarahan (165 km)",
        desc: "Begin your journey along the scenic upper Shimla belt past Narkanda and Rampur Bushahr to Sarahan. Evening visit to Bhimakali Temple complex."
      },
      {
        day: "Day 2",
        title: "Sarahan to Sangla Valley (95 km)",
        desc: "Drive alongside the Sutlej and Baspa rivers into Sangla. Explore Kamru Fort, local woodcarving workshops, and apple orchards."
      },
      {
        day: "Day 3",
        title: "Excursion to Chitkul (Last Indian Village)",
        desc: "Spend the day in Chitkul (22 km from Sangla). Picnic beside the turquoise Baspa river and soak in alpine meadows."
      },
      {
        day: "Day 4",
        title: "Sangla to Kalpa (40 km)",
        desc: "Short scenic drive up to Kalpa. Enjoy uninterrupted vistas of the sacred Kinner Kailash Shivling peak and explore suicide point at Roghi."
      },
      {
        day: "Day 5",
        title: "Kalpa back to Dev Homestay, Shimla",
        desc: "Leisurely return drive back to Dev Homestay in Dudhli-Bharari for a relaxing hot shower, Wi-Fi, and home-cooked dinner."
      }
    ],
    inclusions: [
      "Comfortable mountain-grade vehicle with experienced driver",
      "All interstate tolls, parking fees, and driver allowances",
      "Pre-trip briefing and personalized itinerary recommendations",
      "Luggage holding and homestay base assistance in Shimla"
    ],
    faqs: [
      {
        q: "Is Kinnaur suitable for family holidays with kids or elders?",
        a: "Yes. Unlike Spiti, Kinnaur has abundant greenery, lower elevations in the valleys, comfortable oxygen levels, and charming wooden villages that are very family-friendly."
      },
      {
        q: "What is the best time to visit Kinnaur from Shimla?",
        a: "April to June brings lush blossoms and pleasant mountain air. September to October is apple harvest season with crisp blue skies and golden foliage."
      },
      {
        q: "Can Dev Homestay arrange hotel or homestay bookings in Kinnaur?",
        a: "Yes. Our travel desk assists guests with full itinerary planning, cab services, and verified family stays throughout Kinnaur."
      }
    ]
  }
];
