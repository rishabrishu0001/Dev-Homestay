export interface Room {
  id: string;
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
  badge?: string;
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
  location: string;
  stayDate: string;
  rating: number;
  roomType: string;
  comment: string;
  avatar: string;
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

export const HOMESTAY_INFO = {
  name: "Dev Homestay, Shimla",
  tagline: "A Home in the Hills. A Taste of Himachal. A Story to Take Home.",
  subheading: "Established in 2015 | 30+ Years of Hospitality Experience | Authentic Homestyle Hospitality",
  description: "Welcome to Dev Homestay, a family-run homestay in Shimla where the beauty of the Himalayas meets the warmth of a traditional Indian home. Located in the tranquil Dudhli–Bharari area (~4 km from Mall Road), surrounded by deodar forests, fresh mountain air, and 100% pure vegetarian home-cooked food.",
  phone: "+91 84470 56787",
  whatsapp: "+918447056787",
  whatsappDisplay: "+91 84470 56787",
  email: "devhomestay2@gmail.com",
  address: "Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh - 171003",
  locationCoords: "31.1215° N, 77.1820° E",
  tripAdvisorRating: 4.8,
  tripAdvisorReviews: 118,
  googleRating: 4.5,
  googleReviews: 450,
  rating: 4.8,
  reviewCount: 568,
  establishedYear: 2015,
  hospitalityYears: "30+",
  hostName: "Dev & Family",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  distanceToMallRoad: "Approx. 4 km (12 mins)",
  foodType: "100% Pure Vegetarian & Homemade",
};

export const ROOMS: Room[] = [
  {
    id: "cedar-view-deluxe",
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
      "Valley View Balcony",
      "Comfortable 8-Inch Mattress",
      "Electric Room Heater & Thermal Bedding",
      "Ensuite Bath with 24/7 Geyser Hot Water",
      "High-Speed Fiber Wi-Fi",
      "Herbal Tea & Coffee Maker",
      "Daily Housekeeping & Fresh Linens"
    ],
    description: "Perched on the upper floor, our 200 sq.ft Cedar View Deluxe Room boasts comfortable bedding with an 8-inch mattress, expansive glass windows, and an attached balcony framing uninterrupted vistas of mist-clad Himalayan pine forests."
  },
  {
    id: "cozy-family-suite",
    name: "Cozy Family Suite",
    tagline: "Spacious 2-room family sanctuary with private kitchen, gas stove, and mountain views",
    category: "attic",
    pricePerNight: 4199,
    originalPrice: 5299,
    capacity: "4 - 6 Guests",
    bedType: "2 Rooms with 2 Queen Beds",
    view: "Deodar Canopies & Mountain Ridges",
    size: "420 sq.ft",
    badge: "Family Favorite",
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
      "2 Separate Rooms with 2 Queen Beds",
      "Private Kitchen with Gas Stove & Utensils",
      "Accommodates 4 to 6 Guests",
      "Attached Balcony Facing Pine Woods",
      "Warm Natural Hardwood Flooring",
      "Electric Heating Blanket & Room Heater",
      "High-Speed Wi-Fi & 24/7 Hot Water"
    ],
    description: "A spacious 2-room family suite ideal for 4 to 6 guests, featuring 2 queen beds and a private kitchen equipped with gas stove for home cooking. Large sunlit windows and attached balcony overlook pristine Shimla deodar woods."
  },
  {
    id: "valley-view-room",
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
      "Panoramic Valley View Balcony",
      "1 Queen Bed + 1 Sofa-cum-Bed",
      "220 sq.ft Cozy Mountain Living",
      "Attached Clean Bathroom with 24/7 Hot Water",
      "High-Speed Fiber Wi-Fi",
      "Tea/Coffee Amenities & Electric Kettle",
      "Electric Room Heater & Thermal Bedding",
      "Dedicated Dressing Area & Wardrobe"
    ],
    description: "A cozy 220 sq.ft mountain room with 1 queen bed and 1 sofa-cum-bed, opening up to sweeping views of the lush Dudhli-Bharari pine valley and morning mist. Features an attached sitout balcony to soak in fresh mountain air, quiet cedar acoustics, and stunning sunsets."
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
    id: "g1",
    title: "Morning Sun on Snow Peaks",
    category: "outdoors",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    caption: "Golden hour glow viewed directly from the Dev Homestay upper deck."
  },
  {
    id: "g2",
    title: "Cedar View Deluxe Room",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    caption: "Warm timber walls, plush king bedding, and mountain-facing French doors."
  },
  {
    id: "g3",
    title: "Traditional Home-Cooked Feast",
    category: "dining",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    caption: "Steaming hot authentic local thali served hot from our family kitchen."
  },
  {
    id: "g4",
    title: "Pine Wood Attic Bedroom",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    caption: "Cozy sloping ceiling with a glass skylight for midnight stargazing."
  },
  {
    id: "g5",
    title: "Twilight Bonfire Gatherings",
    category: "vibe",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=80",
    caption: "Guests sharing stories, acoustic guitar melodies, and hot chocolate."
  },
  {
    id: "g6",
    title: "Lush Lawn & Apple Orchard",
    category: "outdoors",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    caption: "Sprawling greenery where guests practice yoga and sip early morning chai."
  },
  {
    id: "g7",
    title: "Freshly Brewed Ginger Herb Tea",
    category: "dining",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    caption: "Fresh mint, ginger, and wild mountain herbs boiled to fragrant perfection."
  },
  {
    id: "g8",
    title: "Valley View Room Terrace",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    caption: "Sunlight streaming through the valley view room terrace and pine canopies."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aditya & Shreya Sharma",
    location: "Mumbai",
    stayDate: "Stayed March 2026",
    rating: 5,
    roomType: "Cedar View Deluxe Room",
    comment: "Dev Homestay was the best travel decision for our Shimla trip! Located in peaceful Dudhli-Bharari away from the Mall Road chaos. The host's 30+ years of 5-star hotel experience truly shows in every detail. Pure vegetarian home-cooked food was divine!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "r2",
    author: "Karan Malhotra",
    location: "Bengaluru",
    stayDate: "Stayed February 2026",
    rating: 5,
    roomType: "Cozy Family Suite",
    comment: "A tranquil mountain sanctuary nestled among deodar forests. We stayed in the Cozy Family Suite with our family. The dedicated travel desk arranged our full Kufri and local sightseeing seamlessly. Truly felt like a home away from home. Come as a guest, leave as family!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "r3",
    author: "Ananya Iyer & Family",
    location: "Delhi NCR",
    stayDate: "Stayed January 2026",
    rating: 5,
    roomType: "Valley View Room",
    comment: "Finding authentic 100% pure vegetarian, homely food in Shimla can be difficult, but Dev Homestay's kitchen was exceptional! The valley views from the balcony, fresh pine air, and warm conversations with the hosts made our holiday unforgettable. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
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
