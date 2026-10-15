export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "deluxe" | "attic" | "cottage" | "riverside";
  pricePerNight: number;
  originalPrice: number;
  capacity: string;
  bedType: string;
  view: string;
  size: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  longDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge?: string;
  faqs: { q: string; a: string }[];
}

export interface Amenity {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  highlight?: string;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  location: string;
  stayDate: string;
  rating: number;
  roomType: string;
  comment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "views" | "rooms" | "outdoors" | "dining" | "vibe";
  image: string;
  caption: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export const REVIEW_METRICS = {
  googleRating: 4.5,
  googleReviews: 450, // Flagged for owner confirmation (Hero previously said 560+)
  tripAdvisorRating: 4.8,
  tripAdvisorReviews: 118,
  tripAdvisorBadge: "Travellers' Choice",
  hospitalityYears: "30+",
  establishedYear: 2015,
};

export const OWNER_INPUT_PLACEHOLDERS = {
  hpRegistrationNumber: "HP-HOMESTAY-REG-PENDING", // Needs owner input
  hostFullName: "Dev & Family", // Needs owner input: legal full name of host
  confirmedGoogleReviews: 450, // Needs owner input: confirm whether 450 or 560+
  socialProfiles: {
    instagram: "https://www.instagram.com/devhomestay.shimla/", // Placeholder: pending owner verification
    facebook: "https://www.facebook.com/devhomestayshimla/", // Placeholder: pending owner verification
  },
};

export const HOMESTAY_INFO = {
  name: "Dev Homestay, Shimla",
  canonicalUrl: "https://www.devhomestay.in",
  tagline: "A Home in the Hills. A Taste of Himachal. A Story to Take Home.",
  subheading: "Established in 2015 | 30+ Years of Hospitality Experience | Authentic Homestyle Hospitality",
  description: "Welcome to Dev Homestay, a family-run homestay in Shimla where the beauty of the Himalayas meets the warmth of a traditional Indian home. Located in the tranquil Dudhli–Bharari area (~4 km from Mall Road), surrounded by deodar forests, fresh mountain air, and 100% pure vegetarian home-cooked food.",
  phone: "+91 84470 56787",
  whatsapp: "+918447056787",
  whatsappDisplay: "+91 84470 56787",
  email: "devhomestay2@gmail.com",
  address: "Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh - 171003",
  locationCoords: "31.1215° N, 77.1820° E",
  latitude: 31.1215,
  longitude: 77.1820,
  tripAdvisorRating: REVIEW_METRICS.tripAdvisorRating,
  tripAdvisorReviews: REVIEW_METRICS.tripAdvisorReviews,
  googleRating: REVIEW_METRICS.googleRating,
  googleReviews: REVIEW_METRICS.googleReviews,
  rating: REVIEW_METRICS.tripAdvisorRating,
  reviewCount: REVIEW_METRICS.googleReviews,
  establishedYear: REVIEW_METRICS.establishedYear,
  hospitalityYears: REVIEW_METRICS.hospitalityYears,
  hostName: "Dev & Family",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  distanceToMallRoad: "4 km (approx. 12 mins)",
  foodType: "100% Pure Vegetarian & Homemade",
};

export const ROOMS: Room[] = [
  {
    id: "cedar-view-deluxe",
    slug: "cedar-view-deluxe-room",
    name: "Cedar View Deluxe Room",
    tagline: "Unobstructed Himalayan valley views with deodar forest balcony",
    category: "deluxe",
    pricePerNight: 2499,
    originalPrice: 3299,
    capacity: "2 Guests",
    bedType: "1 King Bed with 8-inch Mattress",
    view: "Panoramic Pine Valley & Himalayan Ridges",
    size: "200 sq.ft",
    badge: "Most Popular",
    primaryKeyword: "valley view room in Shimla",
    secondaryKeywords: ["Shimla homestay with balcony", "couple friendly homestay Shimla", "affordable valley view stay Shimla"],
    metaTitle: "Valley View Room in Shimla with Private Balcony | Dev Homestay",
    metaDescription: "Book a peaceful 200 sq ft valley view room in Shimla with king bed, thermal bedding, electric heater, and deodar forest balcony. Direct booking from Rs 2,499/night.",
    h1: "Cedar View Deluxe Room – Valley View Room in Shimla",
    image: "/images/rooms/hotel-panoramic-veranda-view.jpg",
    gallery: [
      "/images/rooms/hotel-panoramic-veranda-view.jpg",
      "/images/rooms/bedroom-wide-balcony-pine-trees.jpg",
      "/images/rooms/bedroom-white-duvet-balcony-view.jpg",
      "/images/rooms/bedroom-balcony-view-chairs.jpg",
      "/images/rooms/balcony-sitout-mountain-view.jpg",
      "/images/views/misty-valley-clouds-view.jpg",
      "/images/views/panoramic-snow-mountain-view.jpg"
    ],
    features: [
      "Valley View Balcony with Sitout Chairs",
      "Comfortable 8-Inch King Bed Mattress",
      "Electric Room Heater & Thermal Bedding",
      "Ensuite Bath with 24/7 Geyser Hot Water",
      "High-Speed Fiber Wi-Fi for Seamless Work",
      "Electric Kettle for Morning Tea & Coffee",
      "Daily Housekeeping & Pure Vegetarian Dining"
    ],
    description: "Perched on the upper floor, our 200 sq.ft Cedar View Deluxe Room boasts comfortable bedding with an 8-inch mattress, expansive glass windows, and an attached balcony framing uninterrupted vistas of mist-clad Himalayan pine forests.",
    longDescription: "The Cedar View Deluxe Room is our flagship accommodation designed for couples, solo nature lovers, and travelers who prioritize peaceful valley panoramas. Positioned facing the serene pine ridges of Dudhli-Bharari, this 200 sq ft room opens out onto a private balcony where morning mist gives way to golden Himalayan sunrises. The room is equipped with a plush king bed fitted with an 8-inch orthopaedic mattress and heavy winter thermal bedding. In winter, an electric room heater keeps the living space warm, while the attached tiled bathroom provides round-the-clock steaming geyser hot water. Step onto the balcony to enjoy fresh Himalayan deodar aromas, sip hot home-brewed ginger tea, and listen to mountain birds, all just 4 km away from Mall Road.",
    faqs: [
      {
        q: "What is the nightly rate and maximum occupancy for the Cedar View Deluxe Room?",
        a: "The Cedar View Deluxe Room starts from Rs 2,499 per night for direct bookings (including 10% direct booking discount with zero booking fees). It accommodates up to 2 adult guests comfortably with 1 king bed."
      },
      {
        q: "Does this room have heating and hot water during winter?",
        a: "Yes. Every room is furnished with an electric room heater and warm thermal bedding. The ensuite bathroom features a 24/7 geyser for steaming hot water throughout the year."
      },
      {
        q: "Is there a private balcony with valley views?",
        a: "Yes. The Cedar View Deluxe Room has a dedicated sitout balcony overlooking lush green deodar canopies and rolling pine hills across the Dudhli valley."
      },
      {
        q: "Is Wi-Fi strong enough for remote work in this room?",
        a: "Yes. We offer complimentary high-speed fiber broadband Wi-Fi coverage across all rooms, balconies, and common seating areas."
      }
    ]
  },
  {
    id: "valley-view-room",
    slug: "valley-view-room",
    name: "Valley View Room",
    tagline: "Panoramic Himalayan valley views with balcony & fresh mountain breeze",
    category: "cottage",
    pricePerNight: 2799,
    originalPrice: 3599,
    capacity: "2 - 3 Guests",
    bedType: "1 Queen Bed + 1 Sofa-cum-Bed",
    view: "Expansive Pine Valley & Mountain Ridges",
    size: "220 sq.ft",
    badge: "Valley View",
    primaryKeyword: "Shimla homestay with balcony",
    secondaryKeywords: ["balcony room Shimla valley view", "quiet stay Shimla balcony", "scenic homestay Shimla"],
    metaTitle: "Shimla Homestay with Balcony & Mountain Views | Dev Homestay",
    metaDescription: "Spacious 220 sq ft balcony room in Shimla overlooking pine valleys. Features 1 queen bed, 1 sofa-cum-bed, 24/7 hot water, and pure veg home food from Rs 2,799.",
    h1: "Valley View Room – Shimla Homestay with Balcony",
    image: "/images/rooms/bedroom-suite-tv-dressing.jpg",
    gallery: [
      "/images/rooms/bedroom-suite-tv-dressing.jpg",
      "/images/rooms/bedroom-dressing-archway-wardrobe.jpg",
      "/images/rooms/hotel-panoramic-veranda-view.jpg",
      "/images/rooms/bedroom-double-bed-ensuite-door.jpg",
      "/images/rooms/room-balcony-forest-door.jpg",
      "/images/views/golden-sunburst-valley-hills.jpg",
      "/images/views/homestay-snow-covered-winter.jpg",
      "/images/views/snowy-pine-forest-trail.jpg"
    ],
    features: [
      "Panoramic Valley View Balcony with Open Skies",
      "1 Queen Bed plus 1 Sofa-cum-Bed for flexible stays",
      "220 sq.ft Airy Living with Dressing Area",
      "Attached Clean Bathroom with 24/7 Hot Water",
      "High-Speed Fiber Wi-Fi & Electric Kettle",
      "Electric Room Heater & Layered Mountain Quilts",
      "Dedicated Full-Length Wardrobe & Mirror"
    ],
    description: "A cozy 220 sq.ft mountain room with 1 queen bed and 1 sofa-cum-bed, opening up to sweeping views of the lush Dudhli-Bharari pine valley and morning mist. Features an attached sitout balcony to soak in fresh mountain air, quiet cedar acoustics, and stunning sunsets.",
    longDescription: "The Valley View Room offers 220 sq ft of warm mountain living designed for couples, small families with a child, or friends traveling together. Configured with one comfortable queen bed alongside an additional convertible sofa-cum-bed, this room comfortably welcomes 2 to 3 guests. The standout highlight is its unobstructed private balcony that frames deep pine valleys and distant snow ridges. Natural wood finishes, floral Himachali tapestries, and a private dressing alcove create an inviting sanctuary. Guests enjoy pure vegetarian meals prepared fresh in the host family kitchen and delivered warm to the room or veranda.",
    faqs: [
      {
        q: "Can the Valley View Room accommodate 3 guests?",
        a: "Yes. The room includes 1 queen bed plus 1 sturdy sofa-cum-bed, providing comfortable sleeping arrangements for up to 3 guests."
      },
      {
        q: "What makes this room popular for balcony lovers?",
        a: "The room has direct glass-door access to an attached mountain balcony facing west, making it an incredible vantage point for evening sunsets over the pine forest."
      },
      {
        q: "What amenities are included in the room price?",
        a: "All bookings include fiber Wi-Fi, 24/7 hot geyser water, electric heater, electric tea kettle, fresh towels and linens, and secure on-site parking."
      }
    ]
  },
  {
    id: "cozy-family-suite",
    slug: "family-suite",
    name: "Cozy Family Suite",
    tagline: "Spacious 2-room family sanctuary with private kitchen, gas stove, and mountain views",
    category: "attic",
    pricePerNight: 4199,
    originalPrice: 5299,
    capacity: "4 - 6 Guests",
    bedType: "2 Separate Rooms with 2 Queen Beds",
    view: "Deodar Canopies & Mountain Ridges",
    size: "420 sq.ft",
    badge: "Family Favorite",
    primaryKeyword: "family homestay in Shimla with kitchen",
    secondaryKeywords: ["homestay with kitchen Shimla", "family stay Shimla 6 guests", "2 room suite Shimla homestay"],
    metaTitle: "Family Homestay in Shimla with Kitchen (4–6 Guests) | Dev Homestay",
    metaDescription: "Spacious 420 sq ft 2-room suite in Shimla with private kitchen, gas stove, utensils, 2 queen beds & balcony. Sleeps 4–6 guests. Book direct from Rs 4,199.",
    h1: "Cozy Family Suite – Family Homestay in Shimla with Kitchen",
    image: "/images/rooms/bedroom-wooden-floor-balcony-view.jpg",
    gallery: [
      "/images/rooms/bedroom-wooden-floor-balcony-view.jpg",
      "/images/rooms/bedroom-wood-floor-purple-quilt.jpg",
      "/images/rooms/bedroom-sunlit-window-plaid-bed.jpg",
      "/images/rooms/bedroom-sunlit-forest-window.jpg",
      "/images/views/morning-sunbeams-pine-mist.jpg",
      "/images/views/homestay-snow-covered-winter.jpg",
      "/images/views/balcony-snowman-bear.jpg"
    ],
    features: [
      "2 Independent Interconnected Bedrooms",
      "Private Kitchen with Gas Stove, Utensils & Sink",
      "Comfortably Accommodates 4 to 6 Guests",
      "Attached Balcony Facing Pristine Cedar Woods",
      "Rich Hardwood Timber Flooring & Ambient Lighting",
      "Electric Heating Blankets & Room Heaters",
      "High-Speed Fiber Wi-Fi & 24/7 Hot Water Geyser"
    ],
    description: "A spacious 2-room family suite ideal for 4 to 6 guests, featuring 2 queen beds and a private kitchen equipped with gas stove for home cooking. Large sunlit windows and attached balcony overlook pristine Shimla deodar woods.",
    longDescription: "Spanning 420 sq ft, the Cozy Family Suite is designed specifically for families with children, elderly parents, or extended travel groups wanting complete privacy and self-sufficiency. The suite consists of two separate, interconnected bedrooms equipped with two queen beds and extra bedding available for up to 6 guests. A private in-suite kitchen features an operational gas stove, cookware, and essential dining utensils, allowing parents to prepare baby food, light snacks, or herbal tea at any hour. Natural pine timber flooring and panoramic windows looking into Himalayan cedar woods make this suite feel like an authentic hill cottage.",
    faqs: [
      {
        q: "What is included in the private kitchen?",
        a: "The private kitchen includes an operational LPG gas stove, basic cooking pans, tea utensils, plates, glasses, and a washing sink. It is ideal for preparing children's meals, tea, coffee, or quick home-style vegetarian snacks."
      },
      {
        q: "How many guests can stay in the Cozy Family Suite?",
        a: "The suite has 2 separate bedrooms with 2 queen beds and easily accommodates 4 to 6 guests, making it ideal for family holidays."
      },
      {
        q: "Can we still order home-cooked food from the host kitchen?",
        a: "Absolutely! Guests can order 100% pure vegetarian, freshly cooked Himachali meals, breakfast paranthas, and thalis from our family kitchen alongside having their own private kitchenette."
      }
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "pure-veg-food",
    title: "Pure Vegetarian & Homemade Food",
    shortDesc: "Taste Himachal at the family table. Fresh, wholesome vegetarian meals prepared with care in a warm home kitchen.",
    icon: "UtensilsCrossed",
    highlight: "100% Pure Veg & Homestyle"
  },
  {
    id: "hospitality-experience",
    title: "30+ Years 5-Star Hospitality",
    shortDesc: "Host brings decades of professional hospitality experience from India's leading 5-star hotels combined with family warmth.",
    icon: "Award",
    highlight: "Est. 2015 • 30+ Yrs Exp"
  },
  {
    id: "tour-desk",
    title: "Dedicated Tour & Travel Services",
    shortDesc: "Full travel desk under one roof: Shimla sightseeing, Kufri, Spiti, Kinnaur, Manali, cabs, and customized India tours.",
    icon: "Compass",
    highlight: "Complete Travel Support"
  },
  {
    id: "wifi",
    title: "Complimentary High-Speed Wi-Fi",
    shortDesc: "Reliable fiber internet throughout the homestay to stay seamlessly connected with family or remote work.",
    icon: "Wifi",
    highlight: "Complimentary Wi-Fi"
  },
  {
    id: "hot-water",
    title: "24/7 Geyser Hot Water Facilities",
    shortDesc: "Round-the-clock geysers in all ensuite bathrooms for steaming hot showers after mountain walks.",
    icon: "ShowerHead",
    highlight: "24/7 Hot Water"
  },
  {
    id: "parking",
    title: "Free On-Site Secure Parking",
    shortDesc: "Direct drive-in access with safe, complimentary parking space inside the homestay premises for cars & bikes.",
    icon: "Car",
    highlight: "Free Parking"
  },
  {
    id: "nature-trails",
    title: "Deodar Jungle & Village Walks",
    shortDesc: "Explore peaceful forest trails surrounded by Himalayan deodars, local village paths, and mountain viewpoints.",
    icon: "Trees",
    highlight: "Forest & Village Trails"
  },
  {
    id: "family-friendly",
    title: "Family-Friendly & Personal Care",
    shortDesc: "A safe, welcoming environment where you arrive as a guest and leave as family. Laundry and taxi assistance available.",
    icon: "HeartHandshake",
    highlight: "Family Environment"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "deodar-walks",
    icon: "Trees",
    title: "Deodar & Jungle Walks",
    desc: "Explore peaceful forest trails surrounded by Himalayan deodar trees and experience the quieter side of Shimla."
  },
  {
    id: "nature-hikes",
    icon: "Footprints",
    title: "Short Hikes & Nature Walks",
    desc: "Discover nearby trails and viewpoints suitable for guests who want to spend time outdoors without committing to a long trek."
  },
  {
    id: "village-walks",
    icon: "Home",
    title: "Village Walks",
    desc: "Walk through local neighbourhoods and villages, meet local people and experience everyday Himalayan life."
  },
  {
    id: "himachali-cuisine",
    icon: "UtensilsCrossed",
    title: "Local Cuisine Experiences",
    desc: "Enjoy traditional Himachali food and discover flavours that are rarely found in regular tourist restaurants."
  },
  {
    id: "local-sightseeing",
    icon: "Compass",
    title: "Local Sightseeing Assistance",
    desc: "We can assist with planning Shimla sightseeing, Kufri and other nearby destinations along with transportation arrangements."
  },
  {
    id: "himachal-tours",
    icon: "Map",
    title: "Customized Himachal Tours",
    desc: "Planning a longer Himalayan holiday? We can help create customised itineraries covering destinations across Himachal Pradesh."
  },
  {
    id: "mountain-trips",
    icon: "Mountain",
    title: "Adventure & Mountain Trips",
    desc: "Explore destinations such as Spiti Valley, Kinnaur, Manali and other Himalayan regions through customised travel arrangements."
  },
  {
    id: "india-tours",
    icon: "Globe",
    title: "Tours Across India",
    desc: "Our travel services extend beyond Himachal, helping travellers plan holidays and customised tours across different parts of India."
  }
];

export const TOUR_SERVICES = [
  "Himachal Pradesh tour packages",
  "Shimla & Kufri sightseeing",
  "Spiti Valley tours",
  "Kinnaur tours",
  "Manali & surrounding destinations",
  "Taxi & transportation arrangements",
  "Customized family holidays",
  "Couple & honeymoon trips",
  "Group tours",
  "Adventure & nature trips",
  "Multi-destination Himalayan itineraries",
  "Tours across India"
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-hotel-view-panoramic",
    title: "Panoramic Snow Ridge & Pine Valley",
    category: "views",
    image: "/images/views/panoramic-snow-mountain-view.jpg",
    caption: "Sweeping winter panorama of snow-dusted pine mountains and quiet village settlements seen directly from the homestay.",
    badge: "View from Hotel"
  },
  {
    id: "g-hotel-view-clouds",
    title: "Sea of Clouds Over Himalayan Pines",
    category: "views",
    image: "/images/views/misty-valley-clouds-view.jpg",
    caption: "Majestic blanket of morning clouds hovering over the deep pine valleys and distant snow peaks, captured right from our balcony.",
    badge: "Balcony View"
  },
  {
    id: "g-hotel-view-snow-homestay",
    title: "Dev Homestay in Winter Snow",
    category: "views",
    image: "/images/views/homestay-snow-covered-winter.jpg",
    caption: "Our traditional cedar wood cottage wrapped under a heavy layer of fresh powdery snow in peak winter.",
    badge: "Hotel Property"
  },
  {
    id: "g-hotel-view-snow-trail",
    title: "Snow-Blanketed Pine Forest Trail",
    category: "outdoors",
    image: "/images/views/snowy-pine-forest-trail.jpg",
    caption: "Enchanting walking trail through pristine deodar and pine woods right outside Dev Homestay during active snowfall.",
    badge: "Surrounding Forest"
  },
  {
    id: "g-hotel-view-snowman",
    title: "Balcony Snowman Bear",
    category: "views",
    image: "/images/views/balcony-snowman-bear.jpg",
    caption: "A playful handcrafted snow bear sitting on the guest balcony after an overnight snowfall.",
    badge: "Winter Moments"
  },
  {
    id: "g-room-veranda-panoramic",
    title: "Sun-Drenched Balcony Veranda",
    category: "views",
    image: "/images/rooms/hotel-panoramic-veranda-view.jpg",
    caption: "Long guest balcony terrace lined with flowering plants, outdoor seating, and panoramic pine valley views.",
    badge: "Balcony Veranda"
  },
  {
    id: "g-room-balcony-sitout",
    title: "Valley Sitout & Flower Planters",
    category: "views",
    image: "/images/rooms/balcony-sitout-mountain-view.jpg",
    caption: "Relax with your morning coffee on the open terrace overlooking picturesque hill slopes and cedar forests.",
    badge: "Veranda View"
  },
  {
    id: "g-room-forest-door",
    title: "Room Doorway to Pine Forest",
    category: "rooms",
    image: "/images/rooms/room-balcony-forest-door.jpg",
    caption: "Spacious guest room with immediate access to the sunny balcony facing lush towering pine trees.",
    badge: "Balcony Room"
  },
  {
    id: "g-room-sunlit-window",
    title: "Sunlit Mountain-Facing Suite",
    category: "rooms",
    image: "/images/rooms/bedroom-sunlit-forest-window.jpg",
    caption: "Naturally lit room with wooden coffee table, comfortable chairs, and large window framing serene forest views.",
    badge: "Deluxe Suite"
  },
  {
    id: "g-room-double-bed",
    title: "Cozy Double Bed & In-Room Amenities",
    category: "rooms",
    image: "/images/rooms/bedroom-cozy-double-bed.jpg",
    caption: "Plush double bed with warm mountain blankets, dedicated dressing space, TV, and thoughtful room amenities.",
    badge: "Room Interior"
  },
  {
    id: "g-golden-sunburst",
    title: "Golden Sunrays Over Valley & Hills",
    category: "views",
    image: "/images/views/golden-sunburst-valley-hills.jpg",
    caption: "Spectacular golden sunbeams illuminating emerald mountain terraces and distant Himalayan village homes.",
    badge: "Sunburst View"
  },
  {
    id: "g-morning-sunbeams",
    title: "Morning Sunbeams Through Pine Mist",
    category: "views",
    image: "/images/views/morning-sunbeams-pine-mist.jpg",
    caption: "Ethereal rays of morning light slicing through cedar mist right in our surrounding pine forest canopy.",
    badge: "Morning Light"
  },
  {
    id: "g-misty-ridge-clouds",
    title: "Misty Pine Ridge & Mountain Clouds",
    category: "outdoors",
    image: "/images/views/misty-pine-ridge-clouds.jpg",
    caption: "Tranquil deodar forests bathed in slow-moving mountain cloud banks across the valley.",
    badge: "Valley Mist"
  },
  {
    id: "g-dramatic-cloud-peak",
    title: "Alpine Clouds Over Deodar Peak",
    category: "views",
    image: "/images/views/dramatic-cloud-canopy-peak.jpg",
    caption: "Dramatic misty cloudscapes engulfing high-altitude pine forests and mountain ridges.",
    badge: "Cloudscape"
  },
  {
    id: "g-bedroom-dressing-suite",
    title: "Deluxe Suite & Dressing Alcove",
    category: "rooms",
    image: "/images/rooms/bedroom-suite-tv-dressing.jpg",
    caption: "Spacious master bedroom view featuring hardwood wardrobe alcove, TV, and comfortable mountain bedding.",
    badge: "Deluxe Suite"
  },
  {
    id: "g-night-mountain-lights",
    title: "Twinkling Night Lights & Deep Valleys",
    category: "views",
    image: "/images/views/night-twilight-mountain-lights.jpg",
    caption: "Night falls over the Himalayan ranges as mountain villages shimmer like a carpet of stars across the pine valley.",
    badge: "Night View"
  },
  {
    id: "g-balcony-maggi-view",
    title: "Hot Mountain Maggi on Balcony",
    category: "dining",
    image: "/images/views/balcony-mountain-maggi-view.jpg",
    caption: "The quintessential Himalayan experience: piping hot pahadi noodles savored with deodar forest and mountain vistas.",
    badge: "Balcony Feasts"
  },
  {
    id: "g-golden-pine-sunset",
    title: "Golden Sunset Through Pine Woods",
    category: "vibe",
    image: "/images/views/golden-pine-forest-sunset.jpg",
    caption: "Warm golden twilight setting behind mountain ridges while walking along peaceful pine trails around Dev Homestay.",
    badge: "Sunset Moments"
  },
  {
    id: "g-veranda-360-panoramic",
    title: "Veranda Walkway & Pine Valley Panorama",
    category: "views",
    image: "/images/rooms/hotel-veranda-360-panoramic.jpg",
    caption: "Wide panoramic sweep of the open-air veranda walkway, cane wicker sitting chairs, and pine forest valley below.",
    badge: "Veranda Panorama"
  },
  {
    id: "g-snowfall-rooftops",
    title: "Winter Snowfall Over Pine Slopes",
    category: "views",
    image: "/images/views/snowfall-over-forest-rooftops.jpg",
    caption: "Pure winter bliss as fresh heavy snow blankets the village rooftops and pine forest slopes visible from the hotel.",
    badge: "Winter Snowfall"
  },
  {
    id: "g-pet-friendly-dog",
    title: "Friendly Furry Companion on Balcony",
    category: "vibe",
    image: "/images/views/pet-friendly-dog-balcony-hall.jpg",
    caption: "Our gentle mountain buddy greeting guests along the hallway leading out to the pine-scented balcony.",
    badge: "Pet Friendly"
  },
  {
    id: "g-cherry-blossom-temple",
    title: "Cherry Blossoms & Ancient Temple",
    category: "outdoors",
    image: "/images/views/cherry-blossom-himalayan-temple.jpg",
    caption: "Pink spring cherry blossoms in full bloom framing the traditional multi-tiered Himalayan wooden pagoda temple.",
    badge: "Local Heritage"
  },
  {
    id: "g-bedroom-balcony-chairs",
    title: "Cozy Bedroom with Balcony View",
    category: "rooms",
    image: "/images/rooms/bedroom-balcony-view-chairs.jpg",
    caption: "Warm mountain blankets, wooden seating lounge, and balcony door opening directly to peaceful deodar treetops.",
    badge: "Room Interior"
  },
  {
    id: "g-misty-clouds-tower",
    title: "Misty Mountain Clouds & Ridges",
    category: "views",
    image: "/images/views/misty-clouds-hilltop-tower.jpg",
    caption: "Ethereal sea of mist and low-hanging clouds enveloping the high Himalayan ridges above Dev Homestay.",
    badge: "Alpine Mist"
  },
  {
    id: "g-room-wide-balcony-pines",
    title: "Pine Forest Balcony Master Suite",
    category: "rooms",
    image: "/images/rooms/bedroom-wide-balcony-pine-trees.jpg",
    caption: "Spacious master bedroom with sunlit picture windows and wide open doorway to the pine valley balcony.",
    badge: "Balcony Suite"
  },
  {
    id: "g-room-white-duvet-balcony",
    title: "Sunlit Morning Balcony Room",
    category: "rooms",
    image: "/images/rooms/bedroom-white-duvet-balcony-view.jpg",
    caption: "Crisp white thermal bedding, wooden coffee table, and direct morning sunlight pouring through the forest balcony.",
    badge: "Guest Room"
  },
  {
    id: "g-room-dressing-archway",
    title: "Dressing Alcove & Handcrafted Wardrobe",
    category: "rooms",
    image: "/images/rooms/bedroom-dressing-archway-wardrobe.jpg",
    caption: "Dedicated dressing area with floor-to-ceiling mirror, wardrobe, and cozy floral mountain bed.",
    badge: "Room Interior"
  },
  {
    id: "g-room-double-ensuite",
    title: "Ensuite Room with Seating Lounge",
    category: "rooms",
    image: "/images/rooms/bedroom-double-bed-ensuite-door.jpg",
    caption: "Comfortable double bed with patterned carpet runner, coffee table, and private attached bathroom.",
    badge: "Ensuite Room"
  },
  {
    id: "g-room-coffee-seating",
    title: "In-Room Coffee & Reading Lounge",
    category: "rooms",
    image: "/images/rooms/room-coffee-table-seating-hall.jpg",
    caption: "Relaxing wooden table and cushioned chairs for enjoying morning tea, working, or reading.",
    badge: "Room Lounge"
  },
  {
    id: "g-room-wood-floor-balcony",
    title: "Pine Wood Suite with Forest Balcony",
    category: "rooms",
    image: "/images/rooms/bedroom-wooden-floor-balcony-view.jpg",
    caption: "Hardwood timber flooring, polished low seating table, and open balcony overlooking dense Himalayan deodar woods.",
    badge: "Wood Floor Suite"
  },
  {
    id: "g-room-purple-quilt",
    title: "Cozy Double Bed & Wood Flooring",
    category: "rooms",
    image: "/images/rooms/bedroom-wood-floor-purple-quilt.jpg",
    caption: "Warm mountain quilt, ambient wall lighting, bedside amenities, and rich natural wood grain floor.",
    badge: "Room Interior"
  },
  {
    id: "g-room-sunlit-plaid",
    title: "Sun-Kissed Pine View Bedroom",
    category: "rooms",
    image: "/images/rooms/bedroom-sunlit-window-plaid-bed.jpg",
    caption: "Bright naturally sunlit suite with traditional woven carpet, large windows, and peaceful forest atmosphere.",
    badge: "Guest Room"
  },
  {
    id: "g3",
    title: "Traditional Home-Cooked Feast",
    category: "dining",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    caption: "Steaming hot authentic local thali served hot from our family kitchen."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aditya & Shreya Sharma",
    initials: "AS",
    location: "Mumbai",
    stayDate: "Stayed March 2026",
    rating: 5,
    roomType: "Cedar View Deluxe Room",
    comment: "Dev Homestay was the best travel decision for our Shimla trip! Located in peaceful Dudhli-Bharari away from the Mall Road chaos. The host's 30+ years of 5-star hotel experience truly shows in every detail. Pure vegetarian home-cooked food was divine!"
  },
  {
    id: "r2",
    author: "Karan Malhotra",
    initials: "KM",
    location: "Bengaluru",
    stayDate: "Stayed February 2026",
    rating: 5,
    roomType: "Cozy Family Suite",
    comment: "A tranquil mountain sanctuary nestled among deodar forests. We stayed in the Cozy Family Suite with our family. The dedicated travel desk arranged our full Kufri and local sightseeing seamlessly. Truly felt like a home away from home. Come as a guest, leave as family!"
  },
  {
    id: "r3",
    author: "Ananya Iyer & Family",
    initials: "AI",
    location: "Delhi NCR",
    stayDate: "Stayed January 2026",
    rating: 5,
    roomType: "Valley View Room",
    comment: "Finding authentic 100% pure vegetarian, homely food in Shimla can be difficult, but Dev Homestay's kitchen was exceptional! The valley views from the balcony, fresh pine air, and warm conversations with the hosts made our holiday unforgettable. Highly recommended!"
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "The Mall Road & The Ridge",
    distance: "4.0 km (12 mins)",
    desc: "Iconic pedestrian promenade, Christ Church, Gaiety Theatre, local cafes, and panoramic mountain views."
  },
  {
    name: "Jakhoo Temple & Ropeway",
    distance: "6.2 km (20 mins)",
    desc: "Highest peak in Shimla featuring the colossal 108-ft Lord Hanuman statue and scenic aerial cable car."
  },
  {
    name: "Kufri & Mahasu Peak",
    distance: "15 km (35 mins)",
    desc: "Famous Himalayan hill retreat known for snow activities, nature parks, and panoramic Himalayan range vistas."
  },
  {
    name: "Chadwick Falls & Pine Glen",
    distance: "7.5 km (22 mins)",
    desc: "Serene cascading waterfall nestled amidst dense deodar and pine woodlands."
  },
  {
    name: "Viceregal Lodge (IIAS)",
    distance: "6.8 km (20 mins)",
    desc: "Historic British colonial architectural marvel with manicured heritage gardens and Himalayan viewpoints."
  }
];

export const HOW_TO_REACH = [
  {
    mode: "By Air",
    details: "Shimla Airport (Jubbarhatti) is 24 km away (~50 mins). Chandigarh International Airport is 125 km away (~3.5 hrs). We arrange pre-booked taxi pickups."
  },
  {
    mode: "By Train (Kalka-Shimla Toy Train)",
    details: "Shimla Railway Station is ~5 km away. Ride the UNESCO heritage toy train through picturesque mountain tunnels and pine ridges."
  },
  {
    mode: "By Road / Volvo Bus",
    details: "Luxury Volvo and deluxe buses connect Delhi (ISBT Kashmiri Gate) and Chandigarh directly to Shimla ISBT (6 km from homestay). Direct taxi pickup available."
  },
  {
    mode: "Self Drive",
    details: "Smooth, paved mountain drive up Bharari Bhont Road till Dev Homestay gates with free, secure on-site drive-in parking."
  }
];
