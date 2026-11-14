export const companyInfo = {
  name: "Keshav Tours and Travels",
  tagline: "Your Himalayan Journey, Crafted With Love",
  shortDesc: "North India's premier mountain tour specialists. Providing handcrafted, safe, and affordable holiday packages across Himachal Pradesh, Kashmir, and Leh Ladakh.",
  phone: "+91 7838963590",
  whatsapp: "+91 7838963590",
  whatsappUrl: "https://wa.me/917838963590?text=Hello%20Keshav%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20a%20mountain%20travel%20package.",
  email: "bookings@keshavtours.com",
  supportEmail: "info@keshavtours.com",
  offices: [
    {
      city: "Shimla (Himachal Head Office)",
      address: "Suite 402, Near Tourism Lift, The Mall Road, Shimla, HP 171001",
      phone: "+91 7838963590"
    },
    {
      city: "Srinagar (Kashmir Hub)",
      address: "Opposite Ghat No. 7, Boulevard Road, Dal Lake, Srinagar, J&K 190001",
      phone: "+91 7838963590"
    },
    {
      city: "New Delhi (Liaison Office)",
      address: "Block B, Radial Road 3, Connaught Place, New Delhi 110001",
      phone: "+91 7838963590"
    }
  ],
  stats: [
    { label: "Happy Travelers", value: "18,500+", icon: "Users" },
    { label: "Years Experience", value: "12+", icon: "Award" },
    { label: "Curated Packages", value: "85+", icon: "Compass" },
    { label: "Positive Reviews", value: "99.2%", icon: "Star" }
  ],
  trustBadges: [
    { title: "Safe & Secure Travel", desc: "Inspected vehicles & mountain verified drivers" },
    { title: "24/7 Local Support", desc: "Dedicated ground coordinator throughout your trip" },
    { title: "Expertly Curated Itineraries", desc: "No rushed trips, optimum altitude acclimatization" },
    { title: "Best Price Guarantee", desc: "All packages under ₹10,000 with zero hidden costs" },
    { title: "Thousands of Happy Travelers", desc: "Rated 4.9/5 by families, couples, and adventurers" }
  ]
};

export const fallbackMountainImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80";

export const handleImageError = (e) => {
  if (e && e.currentTarget && e.currentTarget.src !== fallbackMountainImage) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackMountainImage;
  }
};

export const destinationsData = [
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    tagline: "Valley of Gods, Snow Peaks & Solang Adventures",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    priceStarting: 5499,
    altitude: "2,050 m (6,726 ft)",
    bestSeason: "Oct - June (Snow: Dec - Feb)",
    description: "Nestled in the Beas River valley, Manali is India's favorite mountain retreat. From snow activities in Solang Valley and the engineering marvel Atal Tunnel to old wooden cafes in Old Manali, it is perfect for families, couples, and thrill seekers.",
    highlights: ["Solang Valley Paragliding & Skiing", "Atal Tunnel & Sissu Valley", "Hadimba Devi Ancient Temple", "Jogini Waterfall Trek", "Old Manali Cafes"],
    featured: true
  },
  {
    id: "srinagar",
    name: "Srinagar & Dal Lake",
    state: "Kashmir",
    tagline: "Paradise on Earth, Floating Houseboats & Shikara",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    badge: "Iconic Classic",
    priceStarting: 6999,
    altitude: "1,585 m (5,200 ft)",
    bestSeason: "March - Nov (Tulip: April, Snow: Jan)",
    description: "Srinagar captivates travelers with serene Dal Lake, timeless wooden houseboats, vibrant floating flower markets, and centuries-old Mughal Gardens built by Emperor Jahangir.",
    highlights: ["Overnight Luxury Houseboat Stay", "Sunset Shikara Ride on Dal Lake", "Nishat & Shalimar Mughal Gardens", "Floating Vegetable Market", "Handloom Pashmina Shopping"],
    featured: true
  },
  {
    id: "gulmarg",
    name: "Gulmarg",
    state: "Kashmir",
    tagline: "Asia's Premier Ski Hub & Highest Cable Car Gondola",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    badge: "Snow Wonderland",
    priceStarting: 7499,
    altitude: "2,650 m (8,690 ft)",
    bestSeason: "Dec - March for Skiing, May - Sep for Green Meadows",
    description: "Known as the Meadow of Flowers, Gulmarg turns into a winter snow paradise. Home to the world's highest operating cable car (Gulmarg Gondola), taking you up to 13,780 feet overlooking Apharwat Peak.",
    highlights: ["Gulmarg Gondola Phase 1 & 2 Rides", "Apharwat Snow Peak", "Skiing, Snowboarding & Sledging", "Historic St. Mary's Church", "Highest Golf Course"],
    featured: true
  },
  {
    id: "shimla",
    name: "Shimla & Kufri",
    state: "Himachal Pradesh",
    tagline: "Queen of Hills, Heritage Mall Road & Pine Forests",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Hilltown",
    priceStarting: 4999,
    altitude: "2,276 m (7,467 ft)",
    bestSeason: "Throughout the year (Snow: Dec - Feb)",
    description: "The summer capital of British India, Shimla exudes colonial charm with its neo-Gothic Christ Church, pedestrian-only Mall Road, Toy Train rail journey, and winter snow fun at Kufri.",
    highlights: ["The Ridge & Christ Church", "Kufri Snow Viewpoint & Yak Rides", "Jakhoo Hanuman Temple Peak", "Mall Road Lakkar Bazaar", "Viceregal Lodge"],
    featured: true
  },
  {
    id: "pahalgam",
    name: "Pahalgam",
    state: "Kashmir",
    tagline: "Valley of Shepherds, Betaab & Aru Valleys",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
    badge: "Cinematic Valleys",
    priceStarting: 6499,
    altitude: "2,130 m (6,990 ft)",
    bestSeason: "March - October (Lush green and golden)",
    description: "Set along the gushing Lidder River and dense pine slopes, Pahalgam is the crown jewel of Kashmir's valleys. Famous for Bollywood shoots in Betaab Valley and scenic horse riding to Baisaran.",
    highlights: ["Betaab Valley & Bollywood Shooting Points", "Aru Valley Eco-Village", "Chandanwari Snow Point", "Lidder River Trout Angling & Rafting", "Baisaran (Mini Switzerland)"],
    featured: true
  },
  {
    id: "dharamshala",
    name: "Dharamshala & McLeodganj",
    state: "Himachal Pradesh",
    tagline: "Little Lhasa, Tibetan Culture & Dhauladhar Views",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    badge: "Spiritual & Scenic",
    priceStarting: 5499,
    altitude: "1,457 m - 2,082 m",
    bestSeason: "Sep - June",
    description: "Home of His Holiness The Dalai Lama, McLeodganj merges Tibetan Buddhist tranquility with cozy cafes and high-altitude treks against the towering snowy Dhauladhar range.",
    highlights: ["Tsuglagkhang Dalai Lama Temple", "HPCA International Cricket Stadium", "Bhagsunag Waterfall & Shiva Cafe", "Triund Day Trek", "Tibetan Handicraft Market"],
    featured: true
  },
  {
    id: "spiti",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    tagline: "The Middle Land, Ancient Monasteries & High Lakes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    badge: "Adventure & Offbeat",
    priceStarting: 8999,
    altitude: "3,800 m (12,500 ft)",
    bestSeason: "June - October",
    description: "A cold desert mountain valley with 1000-year-old monasteries, world's highest post office at Hikkim, and the turquoise waters of Chandratal Lake reflecting star-studded night skies.",
    highlights: ["Key Monastery 1000 yrs Old", "Chandratal Moon Lake Camping", "World's Highest Post Office (Hikkim)", "Kaza Local Culture & Fossils", "Kunzum Pass (4,590 m)"],
    featured: true
  },
  {
    id: "sonamarg",
    name: "Sonamarg",
    state: "Kashmir",
    tagline: "Meadow of Gold & Thajiwas Glacier Wonderland",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    badge: "Glacier Paradise",
    priceStarting: 5999,
    altitude: "2,740 m (8,990 ft)",
    bestSeason: "April - October",
    description: "The gateway to Ladakh, Sonamarg is flanked by snow-capped peaks and the sparkling Sindh River. Horse rides to the Thajiwas Glacier where snow remains even in summer make it unforgettable.",
    highlights: ["Thajiwas Glacier Pony Ride", "Sindh River Rapids", "Gateway to Zoji La Pass", "Baltal Valley Views", "Lush Alpine Meadows"],
    featured: true
  }
];

export const packagesData = [
  {
    id: "pkg-kashmir-01",
    title: "Magical Kashmir & Dal Lake Paradise",
    state: "Kashmir",
    category: "Family & Leisure",
    badge: "Best Seller",
    duration: "6 Nights / 7 Days",
    route: "Srinagar (2N) → Gulmarg (1N) → Pahalgam (2N) → Houseboat (1N)",
    price: 8999,
    originalPrice: 12999,
    discount: "31% OFF",
    rating: 4.95,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    inclusions: ["3★/4★ Luxury Hotels & Houseboat", "Daily Breakfast & Dinner", "Private Sanitized Sedan/Innova", "1 Hr Shikara Ride Included", "Toll, Parking & Fuel", "24/7 Tour Manager Support"],
    exclusions: ["Airfare / Train tickets", "Gondola tickets (Can be pre-booked)", "Pony rides / Union cab at Pahalgam", "Personal expenses & tips"],
    featured: true,
    overview: "Experience the eternal romance of Kashmir. From cruising Dal Lake at dusk to stepping into the world's highest cable car at Gulmarg and strolling through pine-scented valleys in Pahalgam.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Shikara Experience",
        desc: "Warm Kashmiri welcome at Srinagar Airport. Transfer to your scenic hotel overlooking Dal Lake. Evening complimentary 1-hour sunset Shikara ride across floating gardens and Char Chinar. Overnight stay in Srinagar."
      },
      {
        day: 2,
        title: "Srinagar Mughal Gardens & Old City Heritage",
        desc: "Explore Shalimar Bagh, Nishat Bagh, and Chashme Shahi built during Emperor Jahangir's reign. Visit Shankaracharya Hill Temple for panoramic views of Srinagar city. Evening free to shop for authentic saffron, dry fruits, and pashminas."
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg - The Meadow of Flowers",
        desc: "Drive through scenic apple orchards and willow groves to Gulmarg (2,650 m). Board the famous Gulmarg Gondola Phase 1 & 2 reaching Apharwat Peak for snow activities. Enjoy sledging, snow biking, or cozy hot kahwa. Overnight in Gulmarg."
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam - Valley of Shepherds",
        desc: "Morning drive along saffron fields of Pampore and Awantipora ruins to picturesque Pahalgam. Check into your river-side resort. Evening stroll along the gentle Lidder River. Overnight in Pahalgam."
      },
      {
        day: 5,
        title: "Pahalgam Valley Exploration (Betaab, Aru & Chandanwari)",
        desc: "Full day excursion to Betaab Valley (named after the movie Betaab), scenic Aru Valley village, and Chandanwari snow point. Return to resort for dinner. Overnight in Pahalgam."
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar & Luxury Houseboat Stay",
        desc: "Drive back to Srinagar and check into a handcrafted heritage wooden Houseboat on Dal Lake or Nigeen Lake. Savor traditional Kashmiri Wazwan or choice vegetarian dinner under the starlit lake. Overnight on Houseboat."
      },
      {
        day: 7,
        title: "Departure from Srinagar Airport",
        desc: "Enjoy traditional Kashmiri Kahwa tea on the houseboat sundeck. Transfer to Srinagar Airport with unforgettable memories of the Paradise on Earth."
      }
    ]
  },
  {
    id: "pkg-himachal-01",
    title: "Himachal Bliss: Shimla & Manali with Solang",
    state: "Himachal Pradesh",
    category: "Honeymoon & Couples",
    badge: "Honeymoon Special",
    duration: "5 Nights / 6 Days",
    route: "Delhi/Chandigarh → Shimla (2N) → Manali (3N) → Delhi",
    price: 6499,
    originalPrice: 9499,
    discount: "32% OFF",
    rating: 4.92,
    reviewsCount: 428,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Deluxe 3★/4★ Valley View Hotels", "Breakfast & Dinner Daily", "Special Candlelight Dinner & Cake", "Private Cab for All Transfers & Sightseeing", "Kullu Shawl Factory & Rafting Stop", "Driver Night Allowances"],
    exclusions: ["Adventure activities tickets", "Rohtang Pass NGT Permit extra", "Lunches & drinks", "Monument entry fees"],
    featured: true,
    overview: "Our signature mountain getaway covering the royal heights of colonial Shimla and the alpine snow thrills of Manali and Solang Valley. Includes romantic touches for couples and complete comfort for families.",
    itinerary: [
      {
        day: 1,
        title: "Delhi / Chandigarh to Shimla Scenic Drive",
        desc: "Morning pickup from Delhi/Chandigarh Airport or Railway Station. Climb scenic winding hills through Himalayan Expressway to Shimla. Check-in at hotel and evening walk on the iconic Mall Road & Ridge. Overnight in Shimla."
      },
      {
        day: 2,
        title: "Shimla & Kufri Winter Snow Excursion",
        desc: "Post breakfast, excursion to Kufri (2,622 m). Enjoy panoramic views of the great Himalayan range, horse riding, and Himalayan Wildlife Zoo. Evening visit Jakhoo Temple and Lakkar Bazaar. Overnight in Shimla."
      },
      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley & Beas River",
        desc: "Picturesque 7-8 hour drive along the rushing Beas River. En-route stop at Pandoh Dam, Hanogi Mata Temple, and Kullu Valley for white water river rafting and shawl weaving factories. Arrive in Manali. Overnight in Manali."
      },
      {
        day: 4,
        title: "Solang Valley Snow Thrills & Atal Tunnel",
        desc: "Head to Solang Valley for adrenaline adventures: paragliding, zorbing, quad biking, and snow scooters. Proceed through the engineering marvel of Atal Tunnel to Sissu Waterfall in Lahaul Valley. Overnight in Manali."
      },
      {
        day: 5,
        title: "Manali Local Sightseeing & Old Manali Vibe",
        desc: "Visit the 450-year-old wooden Hadimba Devi Temple, Vashisht Hot Sulphur Springs, Tibetan Monastery, and charming cafes of Old Manali. Romantic candlelight dinner at the hotel. Overnight in Manali."
      },
      {
        day: 6,
        title: "Manali to Delhi / Chandigarh Drop",
        desc: "After breakfast, check out and drive back to Chandigarh or Delhi for your onward flight or train with joyful mountain memories."
      }
    ]
  },
  {
    id: "pkg-kashmir-02",
    title: "Gulmarg Snow & Ski Winter Wonderland",
    state: "Kashmir",
    category: "Adventure & Snow",
    badge: "Winter Snow Thrill",
    duration: "4 Nights / 5 Days",
    route: "Srinagar (1N) → Gulmarg (2N) → Srinagar Houseboat (1N)",
    price: 7999,
    originalPrice: 11499,
    discount: "30% OFF",
    rating: 4.88,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Heated Deluxe Hotels with Electric Blankets", "Breakfast & Dinner", "Snow-Chains Equipped Mountain Vehicle", "Gondola Ticket Booking Assistance", "Ski Equipment Rental Discount", "Airport Pick & Drop"],
    exclusions: ["Gondola official pass fee", "Professional ski instructor fee", "Personal warm clothing rentals"],
    featured: true,
    overview: "Designed for true winter lovers! Stay in the heart of snow-laden Gulmarg with immediate access to Asia's highest ski slopes, snowmobiling, and cozy evenings sipping piping hot Kashmiri Kehwa.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Transfer to Gulmarg",
        desc: "Meet and greet at Srinagar Airport. Direct drive towards Gulmarg through pine-studded snow landscapes. Check into your cozy heated hotel. Evening snow walk in the meadow. Overnight in Gulmarg."
      },
      {
        day: 2,
        title: "Gulmarg Gondola Ride Phase 1 & 2 (Apharwat Peak)",
        desc: "Early morning boarding of the famous Gulmarg Gondola. Phase 1 takes you to Kongdoori meadow; Phase 2 ascends to Apharwat Peak at 13,780 ft right near the LOC. Enjoy snow skiing, tubing, and breathtaking Himalayan views. Overnight in Gulmarg."
      },
      {
        day: 3,
        title: "Snow Activities & Gulmarg Heritage",
        desc: "Try beginner ski lessons with local experts or take a sledge ride across the white plateau. Visit St. Mary's heritage stone church draped in snow and the Maharani Temple. Overnight in Gulmarg."
      },
      {
        day: 4,
        title: "Gulmarg to Srinagar & Luxury Houseboat Stay",
        desc: "Descend to Srinagar. Afternoon Shikara ride on Dal Lake visiting Nehru Park and floating market. Evening Kashmiri dining on your private cedar wood Houseboat. Overnight on Dal Lake."
      },
      {
        day: 5,
        title: "Airport Transfer & Departure",
        desc: "Morning breakfast with serene lake reflections. Transfer to Srinagar airport."
      }
    ]
  },
  {
    id: "pkg-himachal-02",
    title: "Spiti Valley High Altitude Road Expedition",
    state: "Himachal Pradesh",
    category: "Adventure & Treks",
    badge: "Ultimate Road Trip",
    duration: "7 Nights / 8 Days",
    route: "Shimla → Kalpa → Nako → Kaza (3N) → Chandratal → Manali",
    price: 9999,
    originalPrice: 14999,
    discount: "33% OFF",
    rating: 4.97,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Sturdy 4x4 / Force Urbania Mountain Vehicle", "Expert Kinnaur/Spiti Driver", "Homestays & Deluxe Swiss Tents at Chandratal", "All Breakfasts & Dinners", "Oxygen Cylinders & First Aid Kit", "Inner Line Passes"],
    exclusions: ["Personal monument entries", "Mineral water bottles & snacks", "Any medical rescue insurance"],
    featured: true,
    overview: "Traverse one of the world's most treacherous and awe-inspiring roads. From the apple groves of Kinnaur to the stark moonscape of Spiti, ancient thousand-year monasteries, and camping under millions of stars at Chandratal Lake.",
    itinerary: [
      {
        day: 1,
        title: "Shimla to Kalpa via Kinnaur Valley",
        desc: "Drive past lush green hills into the dramatic gorges of Kinnaur along the Satluj River. Arrive at Kalpa facing the sacred Kinnaur Kailash peak."
      },
      {
        day: 2,
        title: "Kalpa to Nako & Tabo Monastery",
        desc: "Visit Nako Lake and the 1,000-year-old UNESCO heritage Tabo Monastery, known as the Ajanta of the Himalayas."
      },
      {
        day: 3,
        title: "Tabo to Dhankar Monastery & Kaza",
        desc: "Climb to the cliff-hanging Dhankar Monastery with stunning views of the Spiti-Pin confluence. Continue to Kaza, the administrative capital of Spiti."
      },
      {
        day: 4,
        title: "Kaza Local: Key Monastery, Kibber & Chicham Bridge",
        desc: "Visit the postcard-famous Key Monastery perched atop a hillock. Cross the Chicham Bridge, Asia's highest suspension bridge over a 1,000 ft gorge, and visit Kibber."
      },
      {
        day: 5,
        title: "Hikkim, Komic & Langza (Fossil Village)",
        desc: "Post a postcard from Hikkim (world's highest post office), visit Komic (highest motorable village), and see the giant Buddha statue watching over Langza."
      },
      {
        day: 6,
        title: "Kaza to Chandratal Lake via Kunzum Pass",
        desc: "Cross the challenging Kunzum Pass (4,590 m) and trek 2 km to the sacred crescent-shaped Chandratal Lake. Night stargazing and camping in Swiss tents."
      },
      {
        day: 7,
        title: "Chandratal to Manali via Batal & Atal Tunnel",
        desc: "Drive through rocky mountain stream crossings to Gramphu and enter the smooth Atal Tunnel, emerging into lush green Manali. Celebration dinner."
      },
      {
        day: 8,
        title: "Departure from Manali",
        desc: "Check out with proud bragging rights of completing the legendary Spiti circuit."
      }
    ]
  },
  {
    id: "pkg-kashmir-03",
    title: "Complete Kashmir Grand Circuit: Srinagar, Sonamarg, Gulmarg & Pahalgam",
    state: "Kashmir",
    category: "Family & Luxury",
    badge: "All-Inclusive Grand",
    duration: "7 Nights / 8 Days",
    route: "Srinagar (2N) → Sonamarg (1N) → Gulmarg (1N) → Pahalgam (2N) → Houseboat (1N)",
    price: 9899,
    originalPrice: 14499,
    discount: "32% OFF",
    rating: 4.96,
    reviewsCount: 240,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    inclusions: ["4★ Luxury Hotels & Deluxe Heritage Houseboat", "Breakfast & Dinner with Kashmiri delicacies", "Exclusive Toyota Innova Crysta throughout", "Shikara Ride & Welcome Kashmiri Kahwa", "All Tolls, Parking & Inter-state taxes", "Special Welcome Gift Hamper"],
    exclusions: ["Airfare / Train tickets", "Pony rides / local union union cabs", "Personal laundry & gratuities"],
    featured: false,
    overview: "The most comprehensive Kashmir journey available. Covers every iconic destination without rushing, allowing your family to savor glaciers, lakes, valleys, and warm Kashmiri hospitality.",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Srinagar",
        desc: "Airport reception and check-in to hotel. Sunset Shikara ride on Dal lake."
      },
      {
        day: 2,
        title: "Srinagar to Sonamarg Meadow of Gold",
        desc: "Day excursion to Sonamarg. Enjoy horse ride to Thajiwas Glacier and trout streams. Overnight in Sonamarg."
      },
      {
        day: 3,
        title: "Sonamarg to Gulmarg Snow Valley",
        desc: "Drive to Gulmarg. Afternoon check-in and evening walk around the frozen snow meadows. Overnight in Gulmarg."
      },
      {
        day: 4,
        title: "Gulmarg Gondola & Afternoon Drive to Pahalgam",
        desc: "Gondola cable car ride to Apharwat peak. Later scenic drive to Pahalgam along saffron fields. Overnight in Pahalgam."
      },
      {
        day: 5,
        title: "Pahalgam Valley Tour: Betaab, Aru & Baisaran",
        desc: "Full day excursion exploring Betaab Valley, Aru village, and pony trek to Mini Switzerland (Baisaran). Overnight in Pahalgam."
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar City Tour",
        desc: "Return to Srinagar. Visit Hazratbal Shrine, Jamia Masjid, and botanical Mughal Gardens. Overnight in Srinagar hotel."
      },
      {
        day: 7,
        title: "Doodhpathri Valley of Milk & Houseboat Night",
        desc: "Visit the offbeat, untouched pine meadow of Doodhpathri. Evening check-in at luxury Dal Lake Houseboat. Traditional Kashmiri dinner."
      },
      {
        day: 8,
        title: "Departure from Srinagar",
        desc: "Breakfast overlooking the misty lake and airport transfer."
      }
    ]
  },
  {
    id: "pkg-himachal-03",
    title: "Dharamshala, McLeodganj & Dalhousie Mini Switzerland",
    state: "Himachal Pradesh",
    category: "Family & Culture",
    badge: "Serene & Relaxed",
    duration: "5 Nights / 6 Days",
    route: "Pathankot/Chandigarh → Dharamshala (2N) → Dalhousie & Khajjiar (3N)",
    price: 5999,
    originalPrice: 8999,
    discount: "33% OFF",
    rating: 4.89,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
    inclusions: ["3★/4★ Boutique Mountain Resorts", "Breakfast & Dinner Daily", "Private Sedan or Innova Cab", "Khajjiar Lake Excursion & Kalatop Sanctuary", "Dalai Lama Temple & HPCA Stadium Visit", "Dedicated Driver Guide"],
    exclusions: ["Airfare / Train tickets", "Entry tickets & adventure activities", "Lunches & personal snacks"],
    featured: false,
    overview: "Escape into tranquility. Combine the spiritual Buddhist atmosphere of McLeodganj with the emerald cedar forests and Swiss-like meadows of Khajjiar.",
    itinerary: [
      {
        day: 1,
        title: "Arrival and Transfer to Dharamshala / McLeodganj",
        desc: "Pickup and drive up through Kangra Valley. Check into hotel and relax. Evening explore McLeodganj market. Overnight in McLeodganj."
      },
      {
        day: 2,
        title: "Dalai Lama Temple, HPCA Stadium & Bhagsu",
        desc: "Visit Tsuglagkhang Complex (Dalai Lama residence), Namgyal Monastery, Bhagsu Waterfall, and the world-famous HPCA Cricket Stadium. Overnight in McLeodganj."
      },
      {
        day: 3,
        title: "Dharamshala to Dalhousie Scenic Drive",
        desc: "Drive through dense oak and pine hills to the colonial town of Dalhousie. Check-in and evening walk at Subhash Chowk. Overnight in Dalhousie."
      },
      {
        day: 4,
        title: "Excursion to Khajjiar - Mini Switzerland of India",
        desc: "Day trip to Khajjiar's vast saucer-shaped meadow surrounded by dense deodar trees. Visit floating island and Kalatop Wildlife Sanctuary. Overnight in Dalhousie."
      },
      {
        day: 5,
        title: "Dalhousie Local: Panchpula & Chamera Lake",
        desc: "Visit Panchpula water springs, rock garden, and enjoy speedboating at Chamera Lake. Overnight in Dalhousie."
      },
      {
        day: 6,
        title: "Drop at Pathankot / Chandigarh",
        desc: "Morning check-out and drop at Pathankot or Chandigarh railway station / airport."
      }
    ]
  }
];

export const servicesData = [
  {
    id: "service-cabs",
    title: "Cab & Volvo Fleet Bookings",
    shortDesc: "Delhi, Chandigarh, Jammu & Srinagar transfers with sanitized luxury Innova Crysta, Ertiga, and Volvo coaches.",
    icon: "Car",
    features: ["Mountain-experienced licensed drivers", "Snow chains equipped vehicles in winter", "Pick up right from airport/station", "Transparent fuel & toll pricing"]
  },
  {
    id: "service-hotels",
    title: "Hotels & Heritage Houseboats",
    shortDesc: "Hand-picked luxury valley view resorts in Himachal and traditional cedar wood carved houseboats on Dal Lake.",
    icon: "Building2",
    features: ["Pre-inspected sanitization standards", "Heated rooms & electric blankets", "Pure Veg & Jain food available", "Exclusive lake and snow views"]
  },
  {
    id: "service-packages",
    title: "Customized Holiday Packages",
    shortDesc: "Tailor-made itineraries for romantic honeymoons, joyous family vacations, senior citizen comfort, and corporate groups.",
    icon: "Briefcase",
    features: ["Personalized day-wise pacing", "Special honeymoon decor & cakes", "No forced shopping or rush", "Zero hidden charges guaranteed"]
  },
  {
    id: "service-permits",
    title: "Permits & Adventure Passes",
    shortDesc: "Hassle-free advance booking of Gulmarg Gondola Phase 1 & 2 tickets, Rohtang Pass NGT permits, and adventure sports.",
    icon: "Ticket",
    features: ["Skip long ticket counter queues", "Confirmed Gondola slot bookings", "Rohtang green permit assistance", "Discounted ski & gear rentals"]
  },
  {
    id: "service-expeditions",
    title: "4x4 & Royal Enfield Expeditions",
    shortDesc: "Guided high-altitude motorcycling and 4x4 Thar safaris across Spiti Valley, Leh Ladakh, and Sach Pass.",
    icon: "Compass",
    features: ["Mechanic & backup vehicle support", "High altitude oxygen equipment", "Pre-arranged Swiss camp stays", "Satellite communication safety"]
  },
  {
    id: "service-support",
    title: "24/7 Dedicated On-Trip Support",
    shortDesc: "A local travel manager is assigned exclusively to your booking from the day you land till you return home safely.",
    icon: "Headphones",
    features: ["Real-time road & weather updates", "Instant itinerary adjustments if needed", "Local language assistance", "Emergency medical support link"]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Rohit & Priya Sharma",
    location: "New Delhi",
    trip: "6N/7D Kashmir Honeymoon Package",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "Keshav Tours made our Kashmir honeymoon completely dreamlike! The Dal Lake houseboat stay was surreal, and our driver Farooq Bhai in Gulmarg was so humble and took care of our safety in the snow. Everything promised in the itinerary was delivered 100%. Highly recommended!"
  },
  {
    id: 2,
    name: "Dr. Rajesh & Neha Kulkarni",
    location: "Pune, Maharashtra",
    trip: "5N/6D Himachal Family Tour (Shimla & Manali)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Traveling with senior parents and two kids, safety and clean vegetarian food were our top priorities. Keshav Tours arranged top-class hotels with pure veg dining, smooth Innova driving, and seamless Atal Tunnel permits. Outstanding service from start to finish."
  },
  {
    id: 3,
    name: "Ananya Banerjee & Friends",
    location: "Kolkata, West Bengal",
    trip: "7N/8D Spiti Valley Road Trip",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    comment: "Spiti is not an easy trip, but Keshav Tours handled it like pros! Our driver was an expert on mountain hairpin bends, camps at Chandratal were warm with heavy quilts, and we had zero altitude problems thanks to their acclimatization schedule. 10/10!"
  },
  {
    id: 4,
    name: "Sunil & Meena Patel",
    location: "Ahmedabad, Gujarat",
    trip: "Kashmir Grand Circuit (Srinagar & Pahalgam)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "Very transparent pricing without any surprise charges. We requested Gujarati/Jain food during our houseboat stay and the chef prepared it specially for us. The Shikara ride at sunset in Dal lake will stay with us forever. Thank you Keshav Tours!"
  }
];

export const galleryData = [
  {
    id: 1,
    title: "Snow-covered Gulmarg Meadow & Apharwat Peak",
    category: "Kashmir",
    tag: "Snow Wonderland",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Traditional Shikara on Calm Dal Lake Waters",
    category: "Kashmir",
    tag: "Dal Lake Serenity",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Solang Valley Snow Slopes in Manali",
    category: "Himachal",
    tag: "Alpine Thrills",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "The Historic Ridge & Christ Church, Shimla",
    category: "Himachal",
    tag: "Colonial Charm",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Betaab Valley Pine Forests, Pahalgam",
    category: "Kashmir",
    tag: "Bollywood Valleys",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "1000-Year-Old Key Monastery, Spiti Valley",
    category: "Himachal",
    tag: "Mystic Monasteries",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Pristine Glacial Streams at Sonamarg",
    category: "Kashmir",
    tag: "Glacier Meadows",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Dhauladhar Snow Range over McLeodganj",
    category: "Himachal",
    tag: "High Mountain Horizons",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  }
];

export const faqsData = [
  {
    question: "Which is the best time to see snow in Himachal and Kashmir?",
    answer: "For heavy snow and winter sports (skiing, sledging, snowmobiling), the prime period is from December 15th to the end of February in Gulmarg, Sonamarg, Solang Valley, and Rohtang Pass. High altitude spots like Apharwat Peak (Gulmarg) and Sissu (Lahaul) often retain snow well into April."
  },
  {
    question: "Do you arrange vegetarian and Jain food during the tours?",
    answer: "Yes, absolutely! We understand food preferences across Indian families. All our partner hotels and Dal Lake houseboats provide clean, dedicated vegetarian kitchens, and we can specifically request pure Jain meals (no onion, no garlic) upon prior notice."
  },
  {
    question: "How do we book and what is the payment schedule?",
    answer: "You can book directly on this website or by contacting our team via WhatsApp/Phone at +91 7838963590. A simple 25% token advance confirms your hotels, houseboat, and private cab. The balance 50% is payable upon arrival on Day 1, and the remaining 25% halfway through your trip."
  },
  {
    question: "Are Rohtang Pass and Gulmarg Gondola tickets included?",
    answer: "Due to government slot restrictions and high seasonal demand, Gondola and Rohtang permits require traveler identity proofs. We provide complete booking assistance to secure confirmed slots so you don't face last-minute disappointments or exorbitant counter surcharges."
  },
  {
    question: "What vehicle types are provided for the tours?",
    answer: "Depending on your group size, we offer well-maintained private vehicles: Sedan (Dzire/Etios) for couples, Ertiga/Innova Crysta for families of 4-6, and Luxury 12/17-seater Tempo Travellers for larger groups. All vehicles are registered tourist cabs with licensed mountain drivers."
  }
];
