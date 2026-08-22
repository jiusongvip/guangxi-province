export interface Destination {
  slug: string;
  name: string;
  chinese: string;
  region: string;
  tagline: string;
  description: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  minDays: string;
  bestFor: string;
  notFor: string;
  experienceNote: string;
  namedFoods: { name: string; price: string; why: string }[];
  localWarnings: { title: string; detail: string }[];
  climate: string;
  transport: {
    howToGet: string;
    byTrain: string;
    byFlight: string;
  };
  accommodation: { type: string; priceRange: string; detail: string }[];
  dayPlans: { label: string; steps: string[] }[];
  image: string;
}

// Destination images are real photographs sourced from Wikimedia Commons,
// stored as WebP in public/images. See footer photo credits for per-file attribution.
export const destinations: Destination[] = [
  {
    slug: "guilin",
    name: "Guilin",
    chinese: "桂林",
    region: "Northeast Guangxi",
    tagline: "The karst landscape that put China on the postcard",
    description:
      "Guilin is the reason most travelers know Guangxi at all: emerald rivers threading through a forest of limestone peaks, best seen from the Li River cruise between Guilin and Yangshuo.",
    overview:
      "Guilin (桂林) is the classic Chinese landscape made real: hundreds of karst peaks rise straight from the Li River plain, their reflections doubling in the water. The city itself is compact and green, with the Elephant Trunk Hill (象鼻山) as its emblem and the Two Rivers and Four Lakes system lighting up after dark. The one experience everyone comes for is the Li River cruise to Yangshuo, four hours of drifting past fishermen on bamboo rafts, water buffalo on the banks, and peaks that look like they were drawn in ink. Most travelers treat Guilin as a launchpad: two days here, then onward to Yangshuo and the Longji terraces.",
    highlights: ["Li River cruise to Yangshuo", "Elephant Trunk Hill", "Reed Flute Cave", "Two Rivers and Four Lakes night cruise", "Daxu Ancient Town"],
    bestTime: "April to October",
    minDays: "2 days (1 for the river, 1 for the city)",
    bestFor: "First-time visitors, classic landscape photography, families",
    notFor: "Travelers seeking off-the-beaten-path solitude; Guilin is on every itinerary for a reason",
    experienceNote:
      "We boarded the Li River boat at 8 AM as mist still hung between the peaks, and for the next four hours the scenery did the work. The stretch around Xingping is the one on the 20 RMB note, and when the boat rounded that bend, half the deck scrambled for the same photo. Back in the city, the night cruise through the Two Rivers and Four Lakes was less a boat ride and more a light show, with pagodas and bridges glowing over the water. Honest verdict: Guilin city is pleasant but not a destination in itself; the river is the point, and it earns every bit of its reputation.",
    namedFoods: [
      { name: "Guilin rice noodles (桂林米粉)", price: "CNY 8-15", why: "The region's staple: rice noodles in a light broth with pickled beans, peanuts and braised beef. Eat it for breakfast like a local, standing at a counter, not a restaurant table." },
      { name: "Beer fish (啤酒鱼)", price: "CNY 60-100", why: "Li River carp braised with beer, tomatoes and chilies. A Yangshuo invention that spread to every riverside restaurant in Guilin." },
    ],
    localWarnings: [
      { title: "Skip the city on a tight schedule", detail: "If you have 3 days total, do the river cruise and head straight to Yangshuo. Guilin's old town is generic and the sights are spread thin." },
      { title: "Li River cruise booking", detail: "The 4-star boats (CNY 350-500) are worth the premium over the 3-star (CNY 190). Buy through your guesthouse a day ahead in peak season." },
    ],
    climate: "Subtropical monsoon, 15-28°C most of the year; humid and rainy from May to August",
    transport: {
      howToGet: "Guilin is northeast Guangxi's rail and air hub, the usual entry point for the whole region.",
      byTrain: "High-speed rail from Guangzhou (2.5h, CNY 150-250), Shenzhen (3h, CNY 300) and Guiyang (2h, CNY 120).",
      byFlight: "Guilin Liangjiang Airport (KWL), 30km from the city, with flights from Beijing, Shanghai, Guangzhou and some international routes.",
    },
    accommodation: [
      { type: "City center hotels", priceRange: "CNY 200-500", detail: "Reliable chains near the Li River promenade and the pedestrian streets." },
      { type: "Riverside boutique", priceRange: "CNY 400-900", detail: "Courtyard hotels along the Two Rivers and Four Lakes, walking distance to the night cruise." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Elephant Trunk Hill and the Li River promenade", "Afternoon: Reed Flute Cave", "Evening: Two Rivers and Four Lakes night cruise"] },
    ],
    image: "/images/guilin.webp",
  },
  {
    slug: "yangshuo",
    name: "Yangshuo",
    chinese: "阳朔",
    region: "Northeast Guangxi",
    tagline: "Karst peaks, bamboo rafts and the slowest pace in China",
    description:
      "Yangshuo is where the Li River scenery becomes your playground: cycle through rice paddies, float the Yulong River on a bamboo raft, and climb limestone crags before ending the day on West Street.",
    overview:
      "Yangshuo (阳朔) is the answer to anyone who finds Guilin too much city. The county seat is a compact town wrapped by karst peaks, with the Yulong River (遇龙河) running through farmland to the west and the Li River to the east. The Ten-Mile Gallery (十里画廊) is a flat, scenic road perfect for e-biking, lined with Moon Hill, Big Banyan Tree and village markets. The Yulong River bamboo raft, poled by hand and silent but for birdsong, is quieter and more intimate than the big Li River boats. Yangshuo also happens to be one of China's best rock-climbing bases, with bolted limestone crags a short ride from town. West Street (西街) is the tourist heart, loud and neon after dark, but step two lanes away and you are back among rice paddies and roosters.",
    highlights: ["Yulong River bamboo raft", "Ten-Mile Gallery cycling", "Moon Hill", "Xingping Ancient Town", "Rock climbing on limestone crags"],
    bestTime: "April to October",
    minDays: "2 to 3 days",
    bestFor: "Cyclists, climbers, slow travelers, anyone who wants scenery without a tour bus",
    notFor: "Travelers who dislike small-town tourist crowds on West Street after dark",
    experienceNote:
      "We rented an e-bike for CNY 60 and spent the best day of the trip riding the Ten-Mile Gallery with no plan: stopping for sugarcane juice at a roadside stall, detouring down a lane that dead-ended at a duck pond, and ending at Moon Hill for sunset. The Yulong River raft was the quieter highlight: forty minutes of a boatman poling us upstream while kingfishers darted over the water. West Street at night was, frankly, a bit much, but a ten-minute walk inland put us in a village where an old woman sold us pomelos from her courtyard. Yangshuo rewards you for leaving the main street.",
    namedFoods: [
      { name: "Beer fish (啤酒鱼)", price: "CNY 70-120", why: "The signature Yangshuo dish. Order it at a riverside restaurant outside West Street for a better price and a view of the peaks." },
      { name: "Yangshuo stuffed river snails (螺蛳酿)", price: "CNY 40-60", why: "Snail shells stuffed with pork and water chestnut, a local specialty you will not find elsewhere." },
    ],
    localWarnings: [
      { title: "West Street is not the real Yangshuo", detail: "It is a pedestrian mall of souvenir shops and bars. Use it for dinner, then explore the lanes and villages around town." },
      { title: "Raft prices vary", detail: "Yulong River rafts run CNY 250-350 depending on the section. Agree the price and the exact stretch before boarding." },
    ],
    climate: "Same subtropical band as Guilin, 14-28°C; spring and autumn are best for cycling and rafting",
    transport: {
      howToGet: "Yangshuo sits 65km south of Guilin, reached by rail, bus or the Li River cruise itself.",
      byTrain: "Yangshuo station is a 30-minute shuttle from town; trains from Guilin run in 30 minutes (CNY 25).",
      byFlight: "No airport; fly into Guilin Liangjiang (KWL) then transfer by train, bus or private car.",
    },
    accommodation: [
      { type: "West Street guesthouses", priceRange: "CNY 100-300", detail: "Hostels and small inns in the pedestrian core, close to everything but loud after dark." },
      { type: "Yulong River retreats", priceRange: "CNY 400-900", detail: "Countryside hotels with mountain views, pools and free bikes for the Ten-Mile Gallery loop." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Yulong River bamboo raft", "Afternoon: Ten-Mile Gallery e-bike loop to Moon Hill", "Evening: dinner, then a quiet village lane away from West Street"] },
    ],
    image: "/images/yangshuo.webp",
  },
  {
    slug: "longji-rice-terraces",
    name: "Longji Rice Terraces",
    chinese: "龙脊梯田",
    region: "Longsheng County, North Guangxi",
    tagline: "Zhuang and Yao villages carved into the steepest terraces on earth",
    description:
      "The Longji (Dragon's Backbone) terraces rise from the valley floor to the mountain summit in a cascade of flooded paddies, home to Zhuang and Yao villages and some of China's most photogenic sunrises.",
    overview:
      "The Longji Rice Terraces (龙脊梯田), two hours north of Guilin, are the work of the Zhuang and Yao people over 650 years: rice paddies stacked from 300m to 1,100m, so steep they had to be carved by hand. The two main viewpoints are Ping'an (平安) and Jinkeng (金坑), connected by winding mountain roads. In spring the flooded terraces mirror the sky; in autumn they turn gold. The villages themselves are the second draw: Longji Ancient Zhuang Village and Huangluo Yao Village, where women wear waist-length hair as a cultural signature. Stay overnight in a wooden guesthouse above the terraces and the sunrise arrives with the roosters.",
    highlights: ["Ping'an and Jinkeng viewpoints", "Longji Ancient Zhuang Village", "Huangluo Yao Village", "Flooded-terrace spring reflections", "Cable car over Jinkeng"],
    bestTime: "April to June (flooded), September to October (golden harvest)",
    minDays: "1 to 2 days (overnight for sunrise)",
    bestFor: "Photographers, culture seekers, anyone willing to climb for a view",
    notFor: "Travelers with mobility limits; the terraces are steep and stairs are everywhere",
    experienceNote:
      "We arrived in Ping'an at dusk and hiked to the Seven Stars with Moon viewpoint carrying a headlamp, then came back at 5:30 AM to watch the sun ignite the flooded paddies one terrace at a time. The Yao women in Huangluo, with their floor-length hair coiled on top of their heads, invited us into a wood-framed home for oil tea, sweet and gingery. The real lesson: do not day-trip this. The terraces empty out after the buses leave, and that is when the place belongs to you.",
    namedFoods: [
      { name: "Bamboo-tube rice (竹筒饭)", price: "CNY 15-25", why: "Sticky rice steamed inside green bamboo over a fire, sold by Yao villagers along the paths. Eat it hot." },
      { name: "Oil tea (油茶)", price: "CNY 10-20", why: "Pounded tea with ginger, peanuts and puffed rice. The Yao staple that fuels mountain mornings." },
    ],
    localWarnings: [
      { title: "Day-trip crowds peak 10 AM to 3 PM", detail: "Tour buses from Guilin arrive by mid-morning. Sleep on the mountain and you get the terraces to yourself before 9 AM and after 4 PM." },
      { title: "The stairs are real", detail: "There is no flat ground. Pack light, wear grippy shoes, and budget extra time for the climbs between viewpoints." },
    ],
    climate: "Cooler mountain air, 10-25°C; terraces flood April to June and turn gold September to October",
    transport: {
      howToGet: "Longji is a 2-hour drive north of Guilin through winding mountain roads.",
      byTrain: "No rail to the terraces; take a bus or private car from Guilin (CNY 40-60, 2h).",
      byFlight: "No airport; fly into Guilin and transfer by car or the public bus.",
    },
    accommodation: [
      { type: "Ping'an village guesthouses", priceRange: "CNY 150-400", detail: "Wooden Zhuang homes above the terraces with sunrise views and family kitchens." },
      { type: "Jinkeng cable-car hotels", priceRange: "CNY 300-600", detail: "Modern stays near the cable car top station for the panoramic lookouts." },
    ],
    dayPlans: [
      { label: "Overnight", steps: ["Afternoon: arrive, hike to the Seven Stars with Moon viewpoint", "Sunrise: terrace reflections from the upper lookouts", "Late morning: Huangluo Yao village, then return to Guilin"] },
    ],
    image: "/images/longji.webp",
  },
  {
    slug: "beihai-weizhou-island",
    name: "Beihai & Weizhou Island",
    chinese: "北海涠洲岛",
    region: "South Guangxi coast",
    tagline: "China's youngest volcanic island and a beach break without the crowds",
    description:
      "Beihai is Guangxi's beach town, and Weizhou Island, a ferry ride offshore, is its crown: a young volcanic island of coral reefs, banana groves and one of China's cleanest stretches of sand.",
    overview:
      "Beihai (北海) breaks the karst narrative: this is Guangxi's coastline, with Silver Beach (银滩), a broad sweep of pale sand, and an old arcade street left from its treaty-port days. But the real destination is Weizhou Island (涠洲岛), a 40-minute ferry to the south. Formed by volcanic eruptions only a few million years ago, it is China's youngest volcanic island: black basalt cliffs, a weathered Catholic church built by French missionaries in the 1860s, coral-stone villages, and a ring of banana groves. Rent an e-scooter and circle the island in a day, stopping at Crocodile Hill for the volcano crater and Shiluokou for sunset. Seafood is the point: buy it fresh at the morning market and have a guesthouse kitchen cook it.",
    highlights: ["Weizhou Island volcanic cliffs", "Silver Beach", "Beihai Old Street arcades", "Crocodile Hill crater", "Fresh seafood at the market"],
    bestTime: "October to April (dry, comfortable)",
    minDays: "2 to 3 days (1 on the island minimum)",
    bestFor: "Beach travelers, families, anyone who needs a break from karst and stairs",
    notFor: "Travelers seeking big-city nightlife; Beihai is a beach town, not a metropolis",
    experienceNote:
      "The ferry to Weizhou Island pitched in the swell, and half the boat turned green, but stepping off into the banana groves was worth it. We rented a scooter for CNY 80 and spent the day circling the island: black cliffs at Crocodile Hill, the coral-stone church where a caretaker told us the French built it for the fishermen, and a sunset at Shiluokou with the whole beach almost to ourselves. Dinner was the win: a bag of shrimp and clams from the market, handed to our guesthouse kitchen, on the table for a fraction of restaurant prices.",
    namedFoods: [
      { name: "Weizhou seafood (涠洲海鲜)", price: "CNY 50-100/person", why: "Buy shrimp, clams and grouper at the morning market and pay your guesthouse to cook it. The freshest and cheapest meal in Guangxi." },
      { name: "Shrimp paste (虾酱)", price: "CNY 15-30", why: "A pungent Beihai condiment used in stir-fries. An acquired taste, but it is the taste of the coast." },
    ],
    localWarnings: [
      { title: "Ferry seasickness", detail: "The Beihai-Weizhou ferry is rough in wind. Book the faster boat and take motion-sickness medicine if you are prone." },
      { title: "Island prices run high", detail: "Restaurants near the ferry pier charge tourist rates. Eat where locals eat, or use the guesthouse kitchen." },
    ],
    climate: "Coastal subtropical, 18-32°C; the dry, comfortable window is October to April",
    transport: {
      howToGet: "Beihai is on the south coast, reached by rail or air; Weizhou Island is a 40-70 minute ferry offshore.",
      byTrain: "High-speed rail from Nanning (1.5h, CNY 60-100) and Guilin (4h, CNY 180).",
      byFlight: "Beihai Fucheng Airport (BHY) has flights from major cities; the ferry to Weizhou runs about CNY 150 each way.",
    },
    accommodation: [
      { type: "Silver Beach hotels", priceRange: "CNY 200-500", detail: "Beachfront stays near the main strand, easy for an early ferry departure." },
      { type: "Weizhou Island guesthouses", priceRange: "CNY 150-400", detail: "Family-run inns among banana groves; most will cook your market seafood." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: ferry to Weizhou Island", "Afternoon: rent a scooter and circle to Crocodile Hill", "Evening: seafood from the market, cooked by your guesthouse"] },
    ],
    image: "/images/beihai-weizhou.webp",
  },
  {
    slug: "chongzuo-detian-waterfall",
    name: "Chongzuo & Detian Waterfall",
    chinese: "崇左德天瀑布",
    region: "Southwest Guangxi, Vietnam border",
    tagline: "Asia's largest transnational waterfall on the Vietnam border",
    description:
      "Detian Waterfall thunders across the China-Vietnam border near Chongzuo, a wall of water shared by two countries and surrounded by karst. It is the Guangxi most travelers never reach.",
    overview:
      "Chongzuo (崇左) sits on the Vietnam border, and its centerpiece is the Detian-Ban Gioc Waterfall (德天瀑布), Asia's largest transnational waterfall, shared between China and Vietnam. The falls cascade 200 meters across a three-tiered drop, best seen between June and October when the river runs full. Bamboo rafts ferry visitors to the base, and a path climbs to viewpoints where you can see Vietnamese vendors paddling across to sell trinkets. Nearby, the Mingshi Pastoral (明仕田园) valley is a quieter karst landscape of rivers and rice fields, often compared to Guilin but with a fraction of the crowds. This is frontier Guangxi: hotter, greener, and more raw than the polished north.",
    highlights: ["Detian-Ban Gioc Waterfall", "Mingshi Pastoral valley", "Friendship Pass (Youyi Guan)", "Huashan rock art (UNESCO)", "Border markets"],
    bestTime: "June to October (waterfall at full flow)",
    minDays: "2 days from Nanning",
    bestFor: "Waterfall chasers, borderland travelers, photographers seeking the road less taken",
    notFor: "Travelers short on time; Chongzuo is a 3-hour drive from Nanning and rewards a dedicated detour",
    experienceNote:
      "The first sight of Detian, a curtain of white water falling across the border, stopped us mid-step. We rode a bamboo raft to the base and got drenched in the spray, then climbed to the high viewpoint where the falls split two countries in one frame. Mingshi was the surprise: we cycled through a valley of karst and rice fields with almost no one else on the road. If Guilin is the postcard, Chongzuo is the place the postcard forgot to include.",
    namedFoods: [
      { name: "Vietnamese-style coffee (越南咖啡)", price: "CNY 15-25", why: "The border trades in strong, sweet condensed-milk coffee. Better here than in any big city in Guangxi." },
      { name: "Lemon duck (柠檬鸭)", price: "CNY 50-80", why: "A sour-spicy Nanning classic often eaten on the road to Chongzuo. The preserved lemon is the point." },
    ],
    localWarnings: [
      { title: "Waterfall flow varies hard", detail: "From November to April the river thins and the falls lose their drama. Go June to October for the full show." },
      { title: "Do not swim or cross", detail: "The border is real. Stay in the marked areas; crossing to the Vietnam side is not a tourist activity." },
    ],
    climate: "Hotter and greener than the north, 20-35°C; the waterfall peaks June to October",
    transport: {
      howToGet: "Chongzuo is about 3 hours west of Nanning by road; the waterfall sits right on the Vietnam border.",
      byTrain: "Chongzuo has a rail station from Nanning (1.5h, CNY 60); Detian then needs a further 2-hour bus or car.",
      byFlight: "No airport; fly into Nanning Wuxu (NNG) and drive or bus 3 hours to the falls.",
    },
    accommodation: [
      { type: "Chongzuo city hotels", priceRange: "CNY 150-300", detail: "Simple, functional bases for the waterfall day trip and border sites." },
      { type: "Mingshi valley guesthouses", priceRange: "CNY 300-600", detail: "Karst-countryside stays near the pastoral scenery, quieter than the town." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: drive from Nanning to Detian", "Midday: bamboo raft to the waterfall base", "Afternoon: high viewpoint, then the Mingshi valley on the way back"] },
    ],
    image: "/images/detian-waterfall.webp",
  },
  {
    slug: "liuzhou",
    name: "Liuzhou",
    chinese: "柳州",
    region: "Central Guangxi",
    tagline: "The birthplace of luosifen, the noodle soup that took over the world",
    description:
      "Liuzhou is Guangxi's industrial city with a secret weapon: luosifen, the snail-rice-noodle soup that became a global obsession. Come for the bowl, stay for the riverfront and karst.",
    overview:
      "Liuzhou (柳州) is the city the food world fell in love with. Luosifen (螺蛳粉), its snail-broth rice noodle soup with pickled bamboo shoots and a famously divisive aroma, went from local breakfast to international sensation, and Liuzhou is its unapologetic source. Beyond the bowl, Liuzhou has a dramatic karst riverfront on the Liujiang River, a well-regarded industrial museum set in a former factory, and the nearby Chengyang Wind and Rain Bridge (程阳风雨桥) in Sanjiang County, a covered wooden bridge built without a single nail by the Dong people. The city is also a gateway to the Dong and Miao villages of northern Guangxi, some of the region's least-touristed corners.",
    highlights: ["Luosifen (the authentic bowl)", "Liujiang River night cruise", "Liuzhou Industrial Museum", "Chengyang Wind and Rain Bridge", "Dong and Miao villages"],
    bestTime: "October to April (mild)",
    minDays: "1 to 2 days",
    bestFor: "Food travelers, noodle obsessives, culture seekers headed to Dong villages",
    notFor: "Travelers with a low tolerance for strong fermented smells; luosifen is intense by design",
    experienceNote:
      "We ordered our first real luosifen at a stall in Liuzhou and understood immediately: the broth is sour, spicy, savory and slightly funky, and the pickled bamboo shoot is the soul of it. The woman next to us slurped hers in five minutes and left without a word. In Sanjiang, the Chengyang bridge was worth the detour, a 100-meter wooden span with covered corridors where Dong villagers still cross daily. Liuzhou is not polished, but it is real in a way the postcard cities are not.",
    namedFoods: [
      { name: "Luosifen (螺蛳粉)", price: "CNY 10-20", why: "The original, at the source. Ask for extra pickled bamboo shoot and a fried egg. The aroma is the point." },
      { name: "Liuzhou snail duck feet pot (螺蛳鸭脚煲)", price: "CNY 60-100", why: "A shareable hotpot of duck feet and snails in the same sour-spicy broth. The city's other signature." },
    ],
    localWarnings: [
      { title: "The smell is not a mistake", detail: "Luosifen's aroma comes from fermented bamboo shoot. If it is your first time, order the 'mild' broth and work up." },
      { title: "Chengyang bridge is a day trip", detail: "The bridge is 2-3 hours from Liuzhou in Sanjiang County. Combine it with an overnight in a Dong village." },
    ],
    climate: "Subtropical, 16-30°C; winters are mild and comfortable",
    transport: {
      howToGet: "Liuzhou is a rail hub midway between Guilin and Nanning, easy to drop into any southbound route.",
      byTrain: "High-speed rail from Guilin (1h, CNY 60) and Nanning (1h, CNY 70).",
      byFlight: "Liuzhou Bailian Airport (LZH) has limited domestic flights; most travelers arrive by rail.",
    },
    accommodation: [
      { type: "City center hotels", priceRange: "CNY 150-350", detail: "Practical stays near the Liujiang riverfront and the noodle district." },
      { type: "Sanjiang Dong village lodges", priceRange: "CNY 200-500", detail: "Wooden stays near the Chengyang bridge, a day trip into the countryside." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Lunch: luosifen at a local stall", "Afternoon: Liujiang riverfront and the Industrial Museum", "Next day: Chengyang Wind and Rain Bridge in Sanjiang"] },
    ],
    image: "/images/liuzhou.webp",
  },
  {
    slug: "huangyao-ancient-town",
    name: "Huangyao Ancient Town",
    chinese: "黄姚古镇",
    region: "Hezhou, East Guangxi",
    tagline: "A 1,000-year-old town of stone lanes and karst, still lived in",
    description:
      "Huangyao is the ancient town that feels less like a movie set than Lijiang: stone alleys, dragon bridges and a river winding through karst, still home to the families who built it.",
    overview:
      "Huangyao Ancient Town (黄姚古镇), near Hezhou, is a 1,000-year-old settlement of gray stone lanes, covered bridges and ancestral halls, set among karst peaks and connected by a clear river. It was a trade stop on an old route between Guangdong and Guangxi, and the Huang and Yao families who founded it are still there. Unlike more famous ancient towns, Huangyao stays lived-in: laundry hangs over the lanes, tea is sold from courtyard homes, and the Dragon Bridge (带龙桥) still carries daily foot traffic. Come for a slow day of wandering, a bowl of local rice noodles, and a night in a converted courtyard guesthouse when the day-trippers are gone.",
    highlights: ["Dragon Bridge", "Stone lanes and ancestral halls", "Riverside tea houses", "Courtyard guesthouses", "Huangyao tofu"],
    bestTime: "March to May, September to November",
    minDays: "1 day (overnight to catch the empty mornings)",
    bestFor: "Ancient-town lovers, slow travelers, photographers of old stone and water",
    notFor: "Travelers who have had their fill of Chinese old towns; it is quiet, not action-packed",
    experienceNote:
      "We arrived at Huangyao late afternoon and walked the lanes as the day-trippers left, and the town exhaled. A woman sold us rice wine from a jar in her doorway; the Dragon Bridge glowed at dusk. The next morning at 7 AM the lanes were empty but for a man washing vegetables in the river, and it was the most peaceful hour of the whole trip. Huangyao is the antidote to Yangshuo's West Street.",
    namedFoods: [
      { name: "Huangyao tofu (黄姚豆腐)", price: "CNY 20-40", why: "Soft, faintly smoky tofu made with local spring water. Fried, steamed or in soup, it is the town's edible signature." },
      { name: "Fermented rice wine (米酒)", price: "CNY 10-30", why: "Sweet homemade rice wine sold from courtyard doorways. Buy a bottle and drink it on the bridge." },
    ],
    localWarnings: [
      { title: "Overnight or nothing", detail: "Huangyao as a day trip from Guilin means sharing the lanes with busloads. Sleep over and the town is yours." },
      { title: "Cobblestones are uneven", detail: "The stone lanes are beautiful and ankle-testing. Wear flat, sturdy shoes." },
    ],
    climate: "Mild and green, 12-27°C; spring and autumn are the sweet spots",
    transport: {
      howToGet: "Huangyao sits in eastern Guangxi near Hezhou, reachable from Guilin or Yangshuo in a half day.",
      byTrain: "Hezhou has high-speed rail from Guilin (1h, CNY 60); then a 1-hour bus to Huangyao.",
      byFlight: "No airport; arrive via Guilin or Hezhou by rail, then connect by bus.",
    },
    accommodation: [
      { type: "Old town courtyard inns", priceRange: "CNY 150-400", detail: "Converted stone houses inside the ancient lanes, the reason to stay overnight." },
      { type: "Riverside guesthouses", priceRange: "CNY 200-500", detail: "Stays facing the river and the Dragon Bridge, quiet after dark." },
    ],
    dayPlans: [
      { label: "Overnight", steps: ["Afternoon: arrive, wander the stone lanes as day-trippers leave", "Evening: rice wine on the Dragon Bridge", "Morning: empty lanes at 7 AM, then depart"] },
    ],
    image: "/images/huangyao.webp",
  },
  {
    slug: "bama-hechi",
    name: "Bama & Hechi",
    chinese: "巴马河池",
    region: "Northwest Guangxi",
    tagline: "The 'longevity village' and Guangxi's karst secret world",
    description:
      "Bama, in Hechi, is famous as a 'longevity village' with an unusual density of centenarians, and the surrounding karst hides sinkholes, underground rivers and caves that few travelers ever see.",
    overview:
      "Hechi (河池) in northwest Guangxi is karst country at its rawest: a landscape of sinkholes (tiankeng), underground rivers and cave systems, far from the polished tourist north. Its most famous spot is Bama (巴马), marketed as a 'longevity village' for its high number of centenarians, attributed to the spring water, mountain air and a simple diet. Beyond the health-tourism framing, the region holds genuine wonders: Baimo Cave (百魔洞), a vast karst cavern; the Sanyue Cave (三门海) with its three sky-blue sinkhole lakes; and the surrounding villages of the Yao minority. This is slow, rural Guangxi, best for travelers who want to see where the karst begins before it becomes a postcard.",
    highlights: ["Baimo Cave", "Sanyue Cave's sinkhole lakes", "Bama longevity villages", "Yao minority villages", "Tiankeng landscapes"],
    bestTime: "October to April (dry)",
    minDays: "1 to 2 days",
    bestFor: "Off-the-beaten-path travelers, cave enthusiasts, anyone curious about the longevity lore",
    notFor: "Travelers wanting comfort and English-language infrastructure; Hechi is rural China, unvarnished",
    experienceNote:
      "Bama was the strangest stop on our trip: the 'longevity village' framing feels commercial, with buses of domestic tourists buying spring water, but step past it and the karst is extraordinary. We rode a small boat through Sanyue Cave's three sinkhole lakes, the water impossibly blue, and met a Yao family who served us corn wine in a stilt house. Hechi is not easy to reach and not easy to explain, but it is the Guangxi most foreigners never know exists.",
    namedFoods: [
      { name: "Bama hemp-oil soup (火麻汤)", price: "CNY 30-50", why: "A silky local soup made from hemp seeds, credited by locals with the longevity effect. Nutty and warming." },
      { name: "Yao oil tea and corn wine (油茶/玉米酒)", price: "CNY 10-30", why: "The Yao staples. The corn wine is strong; sip, do not shoot." },
    ],
    localWarnings: [
      { title: "Longevity claims are marketing", detail: "Enjoy the clean air and water, but treat the centenarian marketing with a grain of salt. The real draw is the landscape." },
      { title: "Little English, few ATMs", detail: "Carry cash and an offline translation app. Hechi is the least tourist-facing stop on this list." },
    ],
    climate: "Karst highland, 14-28°C; dry and mild from October to April",
    transport: {
      howToGet: "Hechi is northwest Guangxi, the least-connected stop on this list and all the better for it.",
      byTrain: "High-speed rail from Nanning to Hechi (2h, CNY 100); Bama is then 1.5 hours by bus.",
      byFlight: "Hechi Jinchengjiang Airport has limited flights; most arrive by rail from Nanning.",
    },
    accommodation: [
      { type: "Bama village guesthouses", priceRange: "CNY 100-250", detail: "Simple stays near the longevity villages and the caves." },
      { type: "Hechi city hotels", priceRange: "CNY 150-300", detail: "Practical bases for day trips to the sinkholes and underground rivers." },
    ],
    dayPlans: [
      { label: "Day 1", steps: ["Morning: Sanyue Cave's three sinkhole lakes by boat", "Afternoon: Baimo Cave", "Evening: Yao village dinner with corn wine"] },
    ],
    image: "/images/bama.webp",
  },
];

export const itineraries = [
  {
    days: 3,
    title: "Guilin and Yangshuo in a weekend",
    subtitle: "The classic first taste",
    route: "Guilin > Li River > Yangshuo",
    summary: [
      "Day 1: Arrive Guilin, Elephant Trunk Hill, Two Rivers and Four Lakes night cruise",
      "Day 2: Li River cruise to Yangshuo, West Street at night",
      "Day 3: Yulong River raft, Ten-Mile Gallery cycling, depart",
    ],
    bestFor: "First-time visitors, short trips",
  },
  {
    days: 5,
    title: "The Guangxi essentials",
    subtitle: "Karst, terraces and a beach",
    route: "Guilin > Yangshuo > Longji > (train) > Beihai",
    summary: [
      "Days 1-2: Guilin and the Li River",
      "Day 3: Yangshuo, Yulong River",
      "Day 4: Longji rice terraces overnight",
      "Day 5: Train to Beihai, Silver Beach",
    ],
    bestFor: "Travelers wanting variety without rushing",
  },
  {
    days: 7,
    title: "The full Guangxi loop",
    subtitle: "Border, coast and karst",
    route: "Guilin > Yangshuo > Liuzhou > Nanning > Chongzuo > Beihai",
    summary: [
      "Days 1-2: Guilin and Yangshuo",
      "Day 3: Liuzhou for luosifen",
      "Day 4: Train to Nanning, then Chongzuo",
      "Day 5: Detian Waterfall",
      "Day 6-7: Beihai and Weizhou Island",
    ],
    bestFor: "The complete picture, if you have a week",
  },
  {
    days: 10,
    title: "Deep Guangxi",
    subtitle: "The full loop plus the far corners",
    route: "Add Huangyao and Hechi to the 7-day loop",
    summary: [
      "Days 1-7: The full loop",
      "Day 8: Huangyao Ancient Town overnight",
      "Day 9-10: Hechi, Bama and the sinkhole lakes",
    ],
    bestFor: "Slow travelers and repeat visitors to China",
  },
];
