/**
 * EL TOUR DEL CHOCHENGG - APPLICATION JAVASCRIPT
 * Comprehensive interactive engine for city video showcase, package customizer,
 * multi-currency converter, speed dating events calendar, itinerary builder, and reservation modal.
 */

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

const CITIES_DATA = {
  barranquilla: {
    name: "Barranquilla",
    tagline: "The Golden Gate & World-Famous Carnaval Party City",
    shortDesc: "Vibrant Caribbean rhythm, high-energy salsa clubs, stunning coastal nightlife, and Colombia's most passionate women.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=80",
    bgGradient: "from-amber-600/30 to-red-900/40",
    videoDetails: {
      title: "El Tour del Chochengg: Barranquilla Carnaval & Nightlife",
      duration: "03:45",
      musicTrack: "Caribbean Salsa & Cumbia Fusion - Live Edition",
      resolution: "4K UHD 60FPS",
      vibe: "High Energy & Passionate",
      attendees: "120+ Vetted Singles Per Gala"
    },
    highlights: [
      { title: "Carnaval Gala Parties", desc: "Private VIP masquerade and singles galas with over 120 verified Barranquillera beauties." },
      { title: "La Troja & Díscolo VIP Nightlife", desc: "Reserved VIP tables at Barranquilla's most prestigious salsa institutions and elite nightclubs." },
      { title: "Gran Malecón del Río Romance", desc: "Sunset champagne strolls along the Magdalena River promenade followed by waterside luxury dining." },
      { title: "Prado & Alto Prado Mixers", desc: "Exclusive mansion garden cocktail parties in Barranquilla's historic architectural district." }
    ],
    upcomingDates: ["Nov 14 - Nov 21, 2026", "Dec 05 - Dec 12, 2026", "Feb 10 - Feb 17, 2027 (Carnaval Special)"]
  },
  cartagena: {
    name: "Cartagena de Indias",
    tagline: "Colonial Fairytale Romance & Private Yachting",
    shortDesc: "Walk hand-in-hand within 16th-century fortress walls, sail to private Rosario Island beach clubs, and enjoy candlelit Caribbean dinners.",
    heroImage: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1600&q=80",
    bgGradient: "from-blue-600/30 to-amber-800/40",
    videoDetails: {
      title: "El Tour del Chochengg: Cartagena Sunset Yacht Parties",
      duration: "04:12",
      musicTrack: "Tropical Deep House & Latin Acoustic",
      resolution: "4K HDR 60FPS",
      vibe: "Intimate, Luxury & Romantic",
      attendees: "140+ Vetted Singles Per Gala"
    },
    highlights: [
      { title: "Private Catamaran Yacht Parties", desc: "Exclusive sunset sails to the Rosario Islands with catered gourmet seafood, champagne, and invited guests." },
      { title: "Walled City Rooftop Mixers", desc: "Panoramic oceanfront cocktail evenings at Café del Mar and luxury historic fortress rooftops." },
      { title: "Horse-Drawn Carriage Dates", desc: "Enchanting twilight rides through cobblestone plazas and Spanish colonial balconies filled with bougainvillea." },
      { title: "Bocagrande VIP Beach Clubs", desc: "Private cabanas, bottle service, and beachfront social gatherings with gorgeous Caribbean singles." }
    ],
    upcomingDates: ["Nov 20 - Nov 27, 2026", "Dec 12 - Dec 19, 2026", "Jan 15 - Jan 22, 2027"]
  },
  medellin: {
    name: "Medellín",
    tagline: "The City of Eternal Spring & Cosmopolitan Charm",
    shortDesc: "World-renowned for having Colombia's most charming 'Paisas', stunning mountain backdrops, and Latin America's trendiest nightlife in El Poblado.",
    heroImage: "https://images.unsplash.com/photo-1599388372675-7284b3979805?auto=format&fit=crop&w=1600&q=80",
    bgGradient: "from-emerald-600/30 to-purple-900/40",
    videoDetails: {
      title: "El Tour del Chochengg: Medellín Provenza Rooftops & Paisas",
      duration: "03:55",
      musicTrack: "Modern Latin Reggaeton & Chillout Melodies",
      resolution: "4K UHD 60FPS",
      vibe: "Glamorous, Vibrant & Modern",
      attendees: "160+ Vetted Singles Per Gala"
    },
    highlights: [
      { title: "Provenza & El Poblado Rooftop Galas", desc: "Private penthouse mixers overlooking illuminated valleys with Medellín's most stunning professional women." },
      { title: "Guatapé Private Yacht Day Trip", desc: "Luxury private boat tour around Guatapé's emerald lakes with water sports, dining, and scenic dates." },
      { title: "Laureles & Parque Lleras VIP Access", desc: "Chauffeured evening tours to top-tier cocktail lounges, jazz clubs, and elite dining venues." },
      { title: "Helicopter Mountain Tours", desc: "Breathtaking scenic flights over the Aburrá Valley for unforgettable first dates." }
    ],
    upcomingDates: ["Nov 07 - Nov 14, 2026", "Dec 01 - Dec 08, 2026", "Jan 08 - Jan 15, 2027"]
  },
  bogota: {
    name: "Bogotá",
    tagline: "Capital Elegance, High Fashion & Sophisticated Society",
    shortDesc: "The cultural and culinary capital of Colombia, home to educated, multilingual, elegant women and world-class Michelin-caliber dining.",
    heroImage: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1600&q=80",
    bgGradient: "from-indigo-600/30 to-amber-900/40",
    videoDetails: {
      title: "El Tour del Chochengg: Bogotá High-Society Galas & Zona T",
      duration: "03:30",
      musicTrack: "Cosmopolitan Lounge & Latin Jazz",
      resolution: "4K Cinema 60FPS",
      vibe: "Sophisticated, Chic & Cultural",
      attendees: "130+ Vetted Singles Per Gala"
    },
    highlights: [
      { title: "Monserrate Mountain Fine Dining", desc: "Romantic 5-course dinners perched 3,152 meters above city lights with Colombian wine and panoramic views." },
      { title: "Zona Rosa & Zona T Elite Lounges", desc: "Private VIP booths at Bogotá's premier high-society nightclubs and champagne lounges." },
      { title: "Andrés Carne de Res VIP Experience", desc: "The legendary, theatrical multi-level Colombian party with dedicated VIP host, dancers, and dinner." },
      { title: "Usaquén Historic Gastronomy Dates", desc: "Charming cobblestone bistro tours and artisanal cocktail tastings with vetted matches." }
    ],
    upcomingDates: ["Nov 25 - Dec 02, 2026", "Jan 20 - Jan 27, 2027", "Feb 22 - Mar 01, 2027"]
  },
  santamarta: {
    name: "Santa Marta",
    tagline: "Tropical Caribbean Paradise & Beachfront Romance",
    shortDesc: "Where the snow-capped Sierra Nevada mountains meet crystalline Caribbean waters. Intimate beach mixers, marina yachting, and relaxed tropical romance.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=80",
    bgGradient: "from-cyan-600/30 to-emerald-900/40",
    videoDetails: {
      title: "El Tour del Chochengg: Santa Marta Marina & Tayrona Parties",
      duration: "03:40",
      musicTrack: "Caribbean Sunset Chill & Tropical Acoustic",
      resolution: "4K UHD 60FPS",
      vibe: "Exotic, Relaxed & Sun-Drenched",
      attendees: "110+ Vetted Singles Per Gala"
    },
    highlights: [
      { title: "Santa Marta Marina Sunset Cruise", desc: "Private sailboat charter with sparkling wine and coastal views of Morro Island and Taganga bay." },
      { title: "Tayrona National Park Eco-Dates", desc: "Guided luxury excursions to secluded white-sand coves with beachfront hammock lunches." },
      { title: "Rodadero Beachfront Mixers", desc: "Open-air tiki bar socials with live music and warm Caribbean breezes." },
      { title: "Minca Mountain Coffee Estate Dates", desc: "Cool mountain retreat tours with stunning jungle views, natural pools, and organic coffee tastings." }
    ],
    upcomingDates: ["Nov 10 - Nov 17, 2026", "Dec 15 - Dec 22, 2026", "Jan 25 - Feb 01, 2027"]
  }
};

const SPEED_DATING_EVENTS = [
  {
    id: "sd-med-01",
    cityKey: "medellin",
    cityName: "Medellín",
    title: "Provenza Penthouse Speed Dating Gala",
    date: "Nov 08, 2026 • 7:30 PM",
    venue: "Skyline Glass Lounge, El Poblado",
    ageGroup: "21 - 35 & 30 - 45 (Dual Floors)",
    registeredSingles: "50 Vetted Paisa Women",
    format: "7-Minute Mini-Dates + Real-Time Digital Matchmaker",
    status: "Filling Fast (4 Spots Left)",
    badge: "🔥 HOT EVENT",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30"
  },
  {
    id: "sd-bar-01",
    cityKey: "barranquilla",
    cityName: "Barranquilla",
    title: "Carnaval Rhythm Speed Dating & Salsa Mixer",
    date: "Nov 15, 2026 • 8:00 PM",
    venue: "Grand Mansion Gardens, Alto Prado",
    ageGroup: "20 - 38 Years",
    registeredSingles: "45 Vetted Barranquillera Singles",
    format: "8-Minute Translated Dates + Live Salsa Lesson",
    status: "Registration Open",
    badge: "🎉 CARNAVAL EDITION",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
  },
  {
    id: "sd-ctg-01",
    cityKey: "cartagena",
    cityName: "Cartagena",
    title: "Walled City Sunset Speed Dating & Yacht Soiree",
    date: "Nov 21, 2026 • 6:00 PM",
    venue: "Fortress Oceanfront Terrace & VIP Catamaran",
    ageGroup: "22 - 40 Years",
    registeredSingles: "60 Vetted Caribbean Singles",
    format: "7-Minute Dates + Island Cocktail Reception",
    status: "Almost Full (2 Spots Left)",
    badge: "💎 VIP EXCLUSIVE",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "sd-bog-01",
    cityKey: "bogota",
    cityName: "Bogotá",
    title: "Zona T Executive High-Society Speed Dating",
    date: "Nov 26, 2026 • 7:00 PM",
    venue: "Glass Atrium Lounge, Zona Rosa",
    ageGroup: "23 - 42 Years",
    registeredSingles: "45 Multilingual Professional Women",
    format: "7-Minute Dates + Wine & Tapas Pairing",
    status: "Registration Open",
    badge: "🍷 HIGH SOCIETY",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "sd-sm-01",
    cityKey: "santamarta",
    cityName: "Santa Marta",
    title: "Marina Breeze Beachfront Speed Dating Social",
    date: "Dec 16, 2026 • 6:30 PM",
    venue: "Santa Marta Yacht Club Pier & Cabanas",
    ageGroup: "21 - 38 Years",
    registeredSingles: "40 Tropical Coastal Singles",
    format: "8-Minute Dates + Sunset Sparkling Wine",
    status: "Early Bird Open",
    badge: "🌴 TROPICAL RETREAT",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  }
];

const PACKAGES_DATA = {
  vip_diamond: {
    id: "vip_diamond",
    name: "VIP Diamond Package",
    badge: "ULTRA LUXURY • ALL-INCLUSIVE",
    gradientClass: "vip-diamond-gradient-text",
    borderClass: "border-purple-500/50 shadow-purple-500/20",
    cardBg: "from-slate-900 via-purple-950/40 to-slate-900",
    basePriceUSD: 6999,
    duration: "10 Days / 9 Nights",
    bestFor: "The pinnacle of El Tour del Chochengg: 5-star penthouses, private yacht party with 20+ singles, all Speed Dating Galas, and 24/7 personal concierge.",
    features: [
      { title: "Accommodations", desc: "5-Star Luxury Penthouse Suite or 5-Star Resort with ocean/city views", icon: "hotel" },
      { title: "Private Yacht / Catamaran Party", desc: "Private chartered luxury yacht party with 20+ invited Colombian singles, champagne & DJ", icon: "ship" },
      { title: "Speed Dating Fast-Pass", desc: "VIP Front-Row Table at all 3 Speed Dating Galas with priority match matching", icon: "zap" },
      { title: "Dedicated 24/7 Concierge & Matchmaker", desc: "Personal bilingual executive concierge & senior matchmaker on call throughout", icon: "user-check" },
      { title: "1-on-1 Date Introductions", desc: "Unlimited curated private 1-on-1 introductions with dedicated certified translators", icon: "heart-handshake" },
      { title: "Transportation", desc: "Private Luxury SUV Chauffeur with 24/7 on-demand city transport & VIP airport escort", icon: "car" },
      { title: "Dining & Experiences", desc: "All 5-course fine dining reservations, wine pairings, and premium club table service included", icon: "utensils" },
      { title: "Media & Style Package", desc: "Professional photography session and wardrobe/grooming consultation", icon: "camera" }
    ]
  },
  diamond: {
    id: "diamond",
    name: "Diamond Package",
    badge: "PREMIUM LUXURY • MOST POPULAR",
    gradientClass: "diamond-gradient-text",
    borderClass: "border-cyan-400/50 shadow-cyan-500/20",
    cardBg: "from-slate-900 via-cyan-950/30 to-slate-900",
    basePriceUSD: 4499,
    duration: "8 Days / 7 Nights",
    bestFor: "5-star boutique hotel stays, 2 Speed Dating Galas, 8 personalized daily dates, island catamaran boat tour, and personal matchmaker.",
    features: [
      { title: "Accommodations", desc: "5-Star Boutique Hotel or Luxury Suite in premier district", icon: "hotel" },
      { title: "Speed Dating Galas", desc: "VIP Access to 2 Major Speed Dating Social Mixers (50+ vetted women each)", icon: "zap" },
      { title: "Island Catamaran Tour", desc: "Shared luxury catamaran day cruise to tropical islands/beaches with invited singles", icon: "ship" },
      { title: "Personal Matchmaker & Translators", desc: "Assigned personal matchmaker + 8 hours daily certified bilingual translation support", icon: "user-check" },
      { title: "1-on-1 Date Introductions", desc: "8 Curated 1-on-1 private romantic dinner & day dates", icon: "heart-handshake" },
      { title: "Transportation", desc: "Private VIP airport transfers and daily private tour transport", icon: "car" },
      { title: "Dining & Experiences", desc: "Welcome Gala Dinner, Daily Gourmet Breakfasts, and Farewell Cocktail Reception", icon: "utensils" },
      { title: "City Sightseeing", desc: "Private guided historical & nightlife discovery tour", icon: "map" }
    ]
  },
  gold: {
    id: "gold",
    name: "Gold Package",
    badge: "DELUXE EXPERIENCE • BEST VALUE",
    gradientClass: "gold-gradient-text",
    borderClass: "border-amber-400/50 shadow-amber-500/20",
    cardBg: "from-slate-900 via-amber-950/30 to-slate-900",
    basePriceUSD: 2999,
    duration: "7 Days / 6 Nights",
    bestFor: "Gentlemen seeking a high-quality tour with 2 Speed Dating Galas, guided group events, and 4 private 1-on-1 dates.",
    features: [
      { title: "Accommodations", desc: "4-Star Premier Hotel in prime safe tourist zone", icon: "hotel" },
      { title: "Speed Dating Galas", desc: "Full entry to 2 Grand Speed Dating & Social Mixers (40+ vetted women each)", icon: "zap" },
      { title: "1-on-1 Date Introductions", desc: "4 Curated 1-on-1 private date introductions with on-site translation support", icon: "heart-handshake" },
      { title: "Bilingual Host Team", desc: "Full-time group bilingual tour hosts and hospitality staff", icon: "user-check" },
      { title: "Transportation", desc: "Airport pickup & drop-off + scheduled event group transfers", icon: "car" },
      { title: "Dining & Events", desc: "Welcome Cocktail Gala, daily breakfast buffet, and orientation dinner", icon: "utensils" },
      { title: "City Tours", desc: "Guided cultural city walking tour and salsa rhythm introduction", icon: "map" }
    ]
  },
  silver: {
    id: "silver",
    name: "Silver Package",
    badge: "ESSENTIAL INTRO • COMPACT",
    gradientClass: "silver-gradient-text",
    borderClass: "border-slate-400/30 shadow-slate-500/10",
    cardBg: "from-slate-900 via-slate-800/40 to-slate-900",
    basePriceUSD: 1899,
    duration: "5 Days / 4 Nights",
    bestFor: "First-time visitors wanting an authentic, vetted introduction to Colombian speed dating and party events.",
    features: [
      { title: "Accommodations", desc: "4-Star Modern Hotel accommodation with daily breakfast", icon: "hotel" },
      { title: "Speed Dating Gala", desc: "Full VIP entrance to 1 Grand Speed Dating Gala (40+ vetted women)", icon: "zap" },
      { title: "1-on-1 Date Introductions", desc: "2 Curated 1-on-1 private date introductions with translation coordination", icon: "heart-handshake" },
      { title: "Bilingual Support", desc: "On-site event bilingual coordinators and staff assistance", icon: "user-check" },
      { title: "Transportation", desc: "Scheduled airport arrival and departure shuttles", icon: "car" },
      { title: "Welcome Reception", desc: "Opening orientation & complimentary welcome cocktail", icon: "utensils" },
      { title: "City Orientation", desc: "Safety briefing & guided neighborhood introduction", icon: "map" }
    ]
  }
};

const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, name: "USD" },
  EUR: { symbol: "€", rate: 0.92, name: "EUR" },
  GBP: { symbol: "£", rate: 0.79, name: "GBP" },
  CAD: { symbol: "CA$", rate: 1.36, name: "CAD" }
};

let currentCurrency = "USD";
let activeCityKey = "barranquilla";
let isVideoPlaying = false;
let videoProgress = 15;

// ==========================================
// 2. INITIALIZATION & DOM EVENTS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initLucideIcons();
  initCityTabs();
  initSpeedDatingFilters();
  renderSpeedDatingEvents("all");
  initPackageCards();
  initCurrencySelector();
  initVideoPlayer();
  initTripCalculator();
  initModalHandlers();
  initFaqAccordion();
  initTestimonialSlider();
  renderCityContent("barranquilla");
  renderPackages();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 3. SPEED DATING EVENTS & PLANNING ENGINE
// ==========================================

function initSpeedDatingFilters() {
  const filterButtons = document.querySelectorAll(".sd-filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterButtons.forEach(b => {
        b.classList.remove("bg-amber-500", "text-slate-950", "font-bold");
        b.classList.add("bg-slate-900/80", "text-slate-300");
      });
      btn.classList.remove("bg-slate-900/80", "text-slate-300");
      btn.classList.add("bg-amber-500", "text-slate-950", "font-bold");

      renderSpeedDatingEvents(filter);
    });
  });
}

function renderSpeedDatingEvents(cityFilter = "all") {
  const container = document.getElementById("speed-dating-events-grid");
  if (!container) return;

  const filtered = (cityFilter === "all") 
    ? SPEED_DATING_EVENTS 
    : SPEED_DATING_EVENTS.filter(e => e.cityKey === cityFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10 text-slate-400">
        <p>No upcoming public events in this city for this week. Contact concierge for private VIP speed dating dates.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(evt => `
    <div class="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-all">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${evt.badgeColor}">
            ${evt.badge}
          </span>
          <span class="text-xs font-semibold text-slate-400 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i>
            ${evt.cityName}
          </span>
        </div>

        <h3 class="text-xl font-bold text-white mb-2 font-heading">${evt.title}</h3>

        <div class="space-y-2 mb-5 text-xs text-slate-300">
          <div class="flex items-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4 text-amber-400 shrink-0"></i>
            <span class="font-semibold text-amber-300">${evt.date}</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="building" class="w-4 h-4 text-slate-400 shrink-0"></i>
            <span>${evt.venue}</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="users" class="w-4 h-4 text-emerald-400 shrink-0"></i>
            <span class="text-emerald-300 font-semibold">${evt.registeredSingles}</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4 text-slate-400 shrink-0"></i>
            <span>${evt.format}</span>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span class="text-[11px] font-bold text-red-400">${evt.status}</span>
        <button onclick="openBookingModal('diamond')" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all">
          <span>Register Event</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join("");

  initLucideIcons();
}

// ==========================================
// 4. CITY SELECTION & VIDEO SHOWCASE
// ==========================================

function initCityTabs() {
  const cityButtons = document.querySelectorAll(".city-tab-btn");
  cityButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cityKey = btn.getAttribute("data-city");
      if (cityKey && CITIES_DATA[cityKey]) {
        activeCityKey = cityKey;
        
        cityButtons.forEach(b => {
          b.classList.remove("bg-amber-500", "text-slate-950", "border-amber-400", "font-bold", "shadow-lg");
          b.classList.add("bg-slate-900/80", "text-slate-300", "border-slate-800");
        });
        
        btn.classList.remove("bg-slate-900/80", "text-slate-300", "border-slate-800");
        btn.classList.add("bg-amber-500", "text-slate-950", "border-amber-400", "font-bold", "shadow-lg");
        
        renderCityContent(cityKey);
        resetAndPlayVideo(cityKey);
      }
    });
  });
}

function renderCityContent(cityKey) {
  const city = CITIES_DATA[cityKey];
  if (!city) return;

  const titleElem = document.getElementById("showcase-city-title");
  const taglineElem = document.getElementById("showcase-city-tagline");
  const descElem = document.getElementById("showcase-city-desc");
  const trackElem = document.getElementById("showcase-music-track");
  const vibeElem = document.getElementById("showcase-vibe-tag");
  const attendeesElem = document.getElementById("showcase-attendees-tag");
  const highlightsContainer = document.getElementById("city-highlights-grid");
  const datesContainer = document.getElementById("city-upcoming-dates");
  const videoCityBadge = document.getElementById("video-current-city-badge");

  if (titleElem) titleElem.textContent = city.name;
  if (taglineElem) taglineElem.textContent = city.tagline;
  if (descElem) descElem.textContent = city.shortDesc;
  if (trackElem) trackElem.textContent = city.videoDetails.musicTrack;
  if (vibeElem) vibeElem.textContent = city.videoDetails.vibe;
  if (attendeesElem) attendeesElem.textContent = city.videoDetails.attendees;
  if (videoCityBadge) videoCityBadge.textContent = city.name.toUpperCase();

  if (highlightsContainer) {
    highlightsContainer.innerHTML = city.highlights.map(h => `
      <div class="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-all">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="text-white font-bold text-base mb-1">${h.title}</h4>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">${h.desc}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  if (datesContainer) {
    datesContainer.innerHTML = city.upcomingDates.map(d => `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs text-amber-300">
        <i data-lucide="calendar" class="w-3.5 h-3.5 text-amber-400"></i>
        ${d}
      </span>
    `).join("");
  }

  drawVideoScene(cityKey);
  initLucideIcons();
}

// ==========================================
// 5. INTERACTIVE VIDEO REEL ENGINE
// ==========================================

function initVideoPlayer() {
  const playPauseBtn = document.getElementById("video-play-btn");

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", toggleVideoPlayback);
  }

  const canvas = document.getElementById("video-canvas-simulator");
  if (canvas) {
    drawVideoScene(activeCityKey);
  }

  setInterval(() => {
    if (isVideoPlaying) {
      videoProgress = (videoProgress + 1.2);
      if (videoProgress >= 100) videoProgress = 0;
      
      const bar = document.getElementById("video-progress-fill");
      const timeElem = document.getElementById("video-current-time");
      if (bar) bar.style.width = `${videoProgress}%`;
      if (timeElem) {
        const totalSec = 220;
        const curSec = Math.floor((videoProgress / 100) * totalSec);
        const mins = Math.floor(curSec / 60);
        const secs = String(curSec % 60).padStart(2, '0');
        timeElem.textContent = `0${mins}:${secs}`;
      }
      drawVideoScene(activeCityKey);
    }
  }, 100);
}

function toggleVideoPlayback() {
  isVideoPlaying = !isVideoPlaying;
  const playIcon = document.getElementById("video-play-icon");
  const statusElem = document.getElementById("video-status-text");
  const waveBars = document.querySelectorAll(".audio-wave-bar");

  if (isVideoPlaying) {
    if (playIcon) playIcon.setAttribute("data-lucide", "pause");
    if (statusElem) statusElem.textContent = "NOW STREAMING CHOCHENGG 4K REEL";
    waveBars.forEach(bar => bar.style.animationPlayState = "running");
  } else {
    if (playIcon) playIcon.setAttribute("data-lucide", "play");
    if (statusElem) statusElem.textContent = "PAUSED • CLICK TO PLAY";
    waveBars.forEach(bar => bar.style.animationPlayState = "paused");
  }
  initLucideIcons();
}

function resetAndPlayVideo(cityKey) {
  videoProgress = 0;
  isVideoPlaying = true;
  const bar = document.getElementById("video-progress-fill");
  if (bar) bar.style.width = "0%";
  
  const playIcon = document.getElementById("video-play-icon");
  if (playIcon) playIcon.setAttribute("data-lucide", "pause");
  
  const statusElem = document.getElementById("video-status-text");
  if (statusElem) statusElem.textContent = `STREAMING ${cityKey.toUpperCase()} PARTY REEL`;
  
  initLucideIcons();
  drawVideoScene(cityKey);
}

function drawVideoScene(cityKey) {
  const canvas = document.getElementById("video-canvas-simulator");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;

  const grad = ctx.createLinearGradient(0, 0, w, h);
  if (cityKey === "barranquilla") {
    grad.addColorStop(0, "#2a0845");
    grad.addColorStop(0.5, "#6441a5");
    grad.addColorStop(1, "#fe8c00");
  } else if (cityKey === "cartagena") {
    grad.addColorStop(0, "#09203f");
    grad.addColorStop(0.5, "#537895");
    grad.addColorStop(1, "#d97706");
  } else if (cityKey === "medellin") {
    grad.addColorStop(0, "#093028");
    grad.addColorStop(0.5, "#237a57");
    grad.addColorStop(1, "#7c3aed");
  } else if (cityKey === "bogota") {
    grad.addColorStop(0, "#141e30");
    grad.addColorStop(0.5, "#243b55");
    grad.addColorStop(1, "#b45309");
  } else {
    grad.addColorStop(0, "#004e92");
    grad.addColorStop(0.5, "#000428");
    grad.addColorStop(1, "#0d9488");
  }

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const time = Date.now() * 0.002;
  for (let i = 0; i < 18; i++) {
    const x = (Math.sin(time + i * 1.5) * 0.4 + 0.5) * w;
    const y = (Math.cos(time + i * 2.1) * 0.4 + 0.5) * h;
    const radius = 25 + (Math.sin(time + i) * 15 + 15);

    const radialGrad = ctx.createRadialGradient(x, y, 2, x, y, radius);
    radialGrad.addColorStop(0, `rgba(254, 240, 138, ${0.3 + (i % 3) * 0.1})`);
    radialGrad.addColorStop(0.6, `rgba(234, 179, 8, ${0.15})`);
    radialGrad.addColorStop(1, "rgba(234, 179, 8, 0)");

    ctx.fillStyle = radialGrad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(4, 7, 13, 0.75)";
  ctx.beginPath();
  ctx.moveTo(0, h);
  for (let sx = 0; sx <= w; sx += 40) {
    const sy = h - 60 - Math.abs(Math.sin((sx + (cityKey.length * 50)) * 0.02) * 50);
    ctx.lineTo(sx, sy);
  }
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  for (let j = 0; j < 12; j++) {
    const bx = (Math.sin(j * 99 + time * 0.5) * 0.45 + 0.5) * w;
    const by = ((time * 30 + j * 40) % h);
    ctx.beginPath();
    ctx.arc(bx, h - by, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ==========================================
// 6. PACKAGES RENDERING & CURRENCY
// ==========================================

function initCurrencySelector() {
  const buttons = document.querySelectorAll(".currency-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cur = btn.getAttribute("data-currency");
      if (cur && CURRENCIES[cur]) {
        currentCurrency = cur;
        buttons.forEach(b => {
          b.classList.remove("bg-amber-500", "text-slate-950", "font-bold");
          b.classList.add("bg-slate-800", "text-slate-300");
        });
        btn.classList.remove("bg-slate-800", "text-slate-300");
        btn.classList.add("bg-amber-500", "text-slate-950", "font-bold");

        renderPackages();
        updateTripCalculator();
      }
    });
  });
}

function formatPrice(usdAmount) {
  const currencyInfo = CURRENCIES[currentCurrency];
  const converted = Math.round(usdAmount * currencyInfo.rate);
  return `${currencyInfo.symbol}${converted.toLocaleString()}`;
}

function renderPackages() {
  const container = document.getElementById("packages-cards-grid");
  if (!container) return;

  const pkgKeys = ["vip_diamond", "diamond", "gold", "silver"];

  container.innerHTML = pkgKeys.map(key => {
    const pkg = PACKAGES_DATA[key];
    const isVIP = key === "vip_diamond";
    const isDiamond = key === "diamond";

    return `
      <div class="relative rounded-2xl bg-gradient-to-b ${pkg.cardBg} border ${pkg.borderClass} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${isVIP ? 'glass-card-featured ring-1 ring-amber-400/40' : 'glass-card'}">
        ${isVIP ? `
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full badge-vip text-white text-[11px] font-extrabold uppercase tracking-widest shadow-lg">
            ⭐ Ultimate VIP Experience
          </div>
        ` : ''}

        ${isDiamond ? `
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-widest shadow-lg">
            💎 Most Popular Choice
          </div>
        ` : ''}

        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold tracking-wider uppercase text-amber-400">${pkg.badge}</span>
            <span class="text-xs text-slate-400 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700">${pkg.duration}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-bold mb-2 font-heading ${pkg.gradientClass}">${pkg.name}</h3>
          <p class="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">${pkg.bestFor}</p>

          <div class="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span class="text-xs text-slate-400 uppercase tracking-wider block">Tour Investment</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl sm:text-4xl font-extrabold text-white">${formatPrice(pkg.basePriceUSD)}</span>
              <span class="text-xs text-slate-400">/ all-inclusive tour</span>
            </div>
            <p class="text-[11px] text-amber-400/90 mt-1">Includes Speed Dating Galas + 1-on-1 Dates</p>
          </div>

          <div class="space-y-3 mb-8">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-300">Package Inclusions:</p>
            ${pkg.features.map(f => `
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <div class="w-5 h-5 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i>
                </div>
                <div>
                  <strong class="text-white">${f.title}:</strong> ${f.desc}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
          <button onclick="openBookingModal('${pkg.id}')" class="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${isVIP ? 'btn-gold shadow-lg shadow-amber-500/30' : 'bg-amber-500/90 hover:bg-amber-400 text-slate-950'}">
            Reserve ${pkg.name}
          </button>
          <button onclick="openItineraryModal('${pkg.id}')" class="w-full py-2.5 rounded-xl font-medium text-xs text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-all">
            View Full Day-by-Day Itinerary
          </button>
        </div>
      </div>
    `;
  }).join("");

  initLucideIcons();
}

function initPackageCards() {}

// ==========================================
// 7. CUSTOM TRIP CALCULATOR
// ==========================================

function initTripCalculator() {
  const calcCity = document.getElementById("calc-city");
  const calcPackage = document.getElementById("calc-package");
  const calcDuration = document.getElementById("calc-duration");
  const calcAddons = document.querySelectorAll(".calc-addon");

  if (calcCity) calcCity.addEventListener("change", updateTripCalculator);
  if (calcPackage) calcPackage.addEventListener("change", updateTripCalculator);
  if (calcDuration) calcDuration.addEventListener("change", updateTripCalculator);
  calcAddons.forEach(cb => cb.addEventListener("change", updateTripCalculator));

  updateTripCalculator();
}

function updateTripCalculator() {
  const calcPackage = document.getElementById("calc-package");
  const calcDuration = document.getElementById("calc-duration");
  const calcAddons = document.querySelectorAll(".calc-addon:checked");

  if (!calcPackage) return;

  const selectedPkgKey = calcPackage.value;
  const pkg = PACKAGES_DATA[selectedPkgKey] || PACKAGES_DATA["diamond"];
  let basePrice = pkg.basePriceUSD;

  const durationVal = parseInt(calcDuration ? calcDuration.value : "7", 10);
  let durationFactor = 1.0;
  if (durationVal === 5) durationFactor = 0.85;
  if (durationVal === 10) durationFactor = 1.35;
  if (durationVal === 14) durationFactor = 1.75;

  let totalUSD = basePrice * durationFactor;

  calcAddons.forEach(cb => {
    const addonPrice = parseFloat(cb.getAttribute("data-price") || "0");
    totalUSD += addonPrice;
  });

  const totalElem = document.getElementById("calc-total-price");
  const depositElem = document.getElementById("calc-deposit-price");
  const breakdownElem = document.getElementById("calc-breakdown-text");

  if (totalElem) totalElem.textContent = formatPrice(totalUSD);
  if (depositElem) depositElem.textContent = formatPrice(totalUSD * 0.25);
  if (breakdownElem) {
    breakdownElem.textContent = `Includes ${pkg.name} (${durationVal} Days) + ${calcAddons.length} Premium Add-ons`;
  }
}

// ==========================================
// 8. BOOKING & ITINERARY MODALS
// ==========================================

function initModalHandlers() {
  const bookingModal = document.getElementById("booking-modal");
  const itineraryModal = document.getElementById("itinerary-modal");
  const closeBtns = document.querySelectorAll(".modal-close-btn");

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (bookingModal) bookingModal.classList.add("hidden");
      if (itineraryModal) itineraryModal.classList.add("hidden");
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === bookingModal) bookingModal.classList.add("hidden");
    if (e.target === itineraryModal) itineraryModal.classList.add("hidden");
  });

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const step1 = document.getElementById("booking-form-step");
      const stepSuccess = document.getElementById("booking-success-step");
      
      if (step1 && stepSuccess) {
        step1.classList.add("hidden");
        stepSuccess.classList.remove("hidden");
      }
    });
  }
}

window.openBookingModal = function(packageKey) {
  const modal = document.getElementById("booking-modal");
  const select = document.getElementById("modal-package-select");
  const step1 = document.getElementById("booking-form-step");
  const stepSuccess = document.getElementById("booking-success-step");

  if (select && packageKey) {
    select.value = packageKey;
  }

  if (step1 && stepSuccess) {
    step1.classList.remove("hidden");
    stepSuccess.classList.add("hidden");
  }

  if (modal) {
    modal.classList.remove("hidden");
  }
  initLucideIcons();
};

window.openItineraryModal = function(packageKey) {
  const modal = document.getElementById("itinerary-modal");
  const content = document.getElementById("itinerary-modal-content");
  const title = document.getElementById("itinerary-modal-title");

  const pkg = PACKAGES_DATA[packageKey] || PACKAGES_DATA["diamond"];
  if (title) title.textContent = `El Tour del Chochengg — ${pkg.name} Itinerary`;

  if (content) {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 1 • Arrival & Chochengg VIP Welcome</span>
            <span class="text-xs text-slate-400">Private Chauffeur Escort</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">VIP airport greeting, luxury transport to 5-star suite, welcome champagne, briefing with your personal matchmaker & tour host.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 2 • Speed Dating Gala #1 (50+ Vetted Singles)</span>
            <span class="text-xs text-slate-400">Fast-Match Rotations</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">Morning private cultural tour and coffee tasting. Evening red carpet entry to the Grand Speed Dating Gala with 50+ vetted Colombian women, live acoustic music, gourmet tapas & dedicated translators at every table.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 3 • One-on-One Match Dates from Speed Dating</span>
            <span class="text-xs text-slate-400">Curated Outings</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">Curated lunch and candlelit dinner dates with women you matched with at the Speed Dating Gala. Dedicated bilingual translator assists seamlessly.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 4 • Luxury Yacht / Rooftop Day Excursion</span>
            <span class="text-xs text-slate-400">Private Island / Mountain Retreat</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">Exclusive private catamaran cruise in Cartagena/Santa Marta or Guatapé luxury yacht cruise in Medellín with invited singles, watersports, and cocktails.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 5-7 • Speed Dating Gala #2 & Deep Connection Dates</span>
            <span class="text-xs text-slate-400">Second Round Matches</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">Second curated Speed Dating Gala in a distinct venue. Extended one-on-one romantic outings, fine dining dinners, salsa dancing, and private chauffeur service.</p>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Day 8-10 • Farewell Gala & Ongoing Romance Support</span>
            <span class="text-xs text-slate-400">Ongoing Contact Support</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">Private farewell breakfast, relationship consultation with our matchmaker for future follow-up, and chauffeured VIP airport transfer.</p>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.remove("hidden");
  initLucideIcons();
};

// ==========================================
// 9. FAQ ACCORDION
// ==========================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (questionBtn && answer) {
      questionBtn.addEventListener("click", () => {
        const isOpen = !answer.classList.contains("hidden");

        faqItems.forEach(i => {
          const a = i.querySelector(".faq-answer");
          const ic = i.querySelector(".faq-icon");
          if (a) a.classList.add("hidden");
          if (ic) ic.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          answer.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

// ==========================================
// 10. TESTIMONIAL SLIDER
// ==========================================

const TESTIMONIALS = [
  {
    name: "David K.",
    location: "Miami, Florida",
    tour: "El Tour del Chochengg (Medellín & Cartagena)",
    quote: "The Speed Dating Gala in Medellín was brilliant! Having 7-minute mini dates with translators at the tables made it so easy to find who I truly clicked with. Met my fiancée Isabella in round 4!",
    rating: 5,
    match: "Happily Engaged"
  },
  {
    name: "Marcus B.",
    location: "London, UK",
    tour: "El Tour del Chochengg (Barranquilla & Santa Marta)",
    quote: "Barranquilla's speed dating and salsa party was electric! The digital scorecard system instantly told me who also chose me. El Tour del Chochengg is truly the top romance vacation service in the world.",
    rating: 5,
    match: "In a relationship with Sofia"
  },
  {
    name: "Robert M.",
    location: "Toronto, Canada",
    tour: "El Tour del Chochengg (Bogotá & Medellín)",
    quote: "I was skeptical about international speed dating events. But meeting 45 educated, vetted women in one elegant evening with personal translators changed everything. Found my wife on this tour.",
    rating: 5,
    match: "Married 1 Year"
  }
];

let currentTestimonialIndex = 0;

function initTestimonialSlider() {
  renderTestimonial(0);

  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
      renderTestimonial(currentTestimonialIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
      renderTestimonial(currentTestimonialIndex);
    });
  }
}

function renderTestimonial(index) {
  const container = document.getElementById("testimonial-content-wrapper");
  if (!container) return;

  const t = TESTIMONIALS[index];
  container.innerHTML = `
    <div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
      <div class="flex items-center gap-1 mb-4 text-amber-400">
        ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join("")}
        <span class="ml-2 text-xs font-bold text-slate-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">${t.match}</span>
      </div>
      <p class="text-slate-200 text-sm sm:text-base italic leading-relaxed mb-6 font-serif-italic">"${t.quote}"</p>
      <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <div>
          <h4 class="text-white font-bold text-sm sm:text-base">${t.name}</h4>
          <p class="text-xs text-slate-400">${t.location}</p>
        </div>
        <span class="text-xs text-amber-400 font-semibold bg-slate-900 px-3 py-1 rounded-full border border-slate-800">${t.tour}</span>
      </div>
    </div>
  `;
  initLucideIcons();
}
