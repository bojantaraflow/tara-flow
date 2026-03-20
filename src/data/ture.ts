export type Difficulty = "Laka" | "Srednja" | "Zahtjevna";
export type TourCategory =
  | "Aranžmani"
  | "Jednodnevni izleti"
  | "Voda"
  | "Planine"
  | "Jahanje"
  | "Jeep safari";

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface Tour {
  slug: string;
  nameBs: string;
  nameEn: string;
  durationBs: string;
  durationEn: string;
  difficulty: Difficulty;
  price: number;
  category: TourCategory;
  image: string;
  shortDescriptionBs: string;
  shortDescriptionEn: string;
  descriptionBs: string;
  descriptionEn: string;
  longDescriptionBs: string;
  longDescriptionEn: string;
  itineraryBs: ItineraryStep[];
  itineraryEn: ItineraryStep[];
  includedBs: string[];
  includedEn: string[];
  notIncludedBs: string[];
  notIncludedEn: string[];
  whatToBringBs: string[];
  whatToBringEn: string[];
  faqBs: TourFaq[];
  faqEn: TourFaq[];
  similarTours: string[];
  groupSizeBs?: string;
  groupSizeEn?: string;
  isDayTrip?: boolean;
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    slug: "vikend-na-tari",
    nameBs: "Vikend na Tari",
    nameEn: "Weekend on Tara",
    durationBs: "2 dana / 1 noć",
    durationEn: "2 days / 1 night",
    difficulty: "Laka",
    price: 90,
    category: "Aranžmani",
    image: "/images/ture/tara-brzaci-top.webp",
    shortDescriptionBs:
      "Dva dana čiste avanture na rijeci Tari. Rafting, kamp uz vatru i zvjezdano nebo nad kanjonom.",
    shortDescriptionEn:
      "Two days of pure adventure on the Tara River. Rafting, campfire and starry sky above the canyon.",
    descriptionBs: "Provedite vikend uz rijeku Taru. Rafting, kampiranje i opuštanje u srcu prirode.",
    descriptionEn: "Spend a weekend by the Tara River. Rafting, camping and relaxation in the heart of nature.",
    longDescriptionBs:
      "Provedi nezaboravan vikend na obali rijeke Tare, jedne od najčišćih rijeka u Evropi. Uz zvuk rijeke i miris borove šume, ovaj aranžman nudi savršen bijeg od svakodnevice. Rafting kroz kanjon Tare nudi kombinaciju adrenalina i nevjerovatnih prirodnih prizora koji se ne mogu opisati riječima. Smještaj u kampu uz vatru, domaća hrana i odlično društvo čine ovaj vikend potpunim iskustvom.",
    longDescriptionEn:
      "Spend an unforgettable weekend on the banks of the Tara River, one of the cleanest rivers in Europe. With the sound of the river and the scent of pine forest, this arrangement offers the perfect escape from everyday life. Rafting through the Tara Canyon offers a combination of adrenaline and incredible natural scenery that cannot be described in words. Camp accommodation by the fire, home-cooked food and great company make this weekend a complete experience.",
    itineraryBs: [
      { time: "Dan 1", title: "Dolazak i smještaj", description: "Dolazak u kamp na obali Tare, smještaj, večera uz vatru i upoznavanje grupe i vodiča." },
      { time: "Dan 2", title: "Rafting i povratak", description: "Doručak, 25km raftinga kroz kanjon Tare, ručak uz rijeku, povratak kući sa punim srcem." },
    ],
    itineraryEn: [
      { time: "Day 1", title: "Arrival and accommodation", description: "Arrival at the camp on the Tara bank, accommodation, dinner by the fire and meeting the group and guide." },
      { time: "Day 2", title: "Rafting and return", description: "Breakfast, 25km rafting through Tara Canyon, lunch by the river, return home with a full heart." },
    ],
    includedBs: ["Vodič", "Rafting oprema (prsluk, kaciga, veslo)", "Smještaj u kampu", "Večera i doručak", "Transport čamcem"],
    includedEn: ["Guide", "Rafting equipment (vest, helmet, paddle)", "Camp accommodation", "Dinner and breakfast", "Boat transport"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Sportska obuća koja se može pokvasiti", "Rezervna odjeća", "Krema za sunce", "Mali ruksak", "Lična dokumenta"],
    whatToBringEn: ["Sports footwear that can get wet", "Spare clothes", "Sunscreen", "Small backpack", "Personal documents"],
    faqBs: [
      { question: "Trebam li iskustvo?", answer: "Ne, rafting je prilagođen svim uzrastima i nije potrebno prethodno iskustvo." },
      { question: "Šta ako je loše vrijeme?", answer: "Tura se odvija po svakom vremenu osim u slučaju ekstremnih uslova. Uvijek vas obavještavamo unaprijed." },
    ],
    faqEn: [
      { question: "Do I need experience?", answer: "No, rafting is suitable for all ages and no prior experience is required." },
      { question: "What if the weather is bad?", answer: "The tour takes place in any weather except in case of extreme conditions. We always inform you in advance." },
    ],
    similarTours: ["rafting-maglic", "rafting-trnovacko", "rafting-tarom"],
    groupSizeBs: "4-12 osoba",
    groupSizeEn: "4-12 people",
    featured: true,
  },
  {
    slug: "rafting-maglic",
    nameBs: "Rafting + Maglić",
    nameEn: "Rafting + Maglić",
    durationBs: "3 dana / 2 noći",
    durationEn: "3 days / 2 nights",
    difficulty: "Srednja",
    price: 160,
    category: "Aranžmani",
    image: "/images/ture/tara-camac.webp",
    shortDescriptionBs:
      "Spoj raftinga i uspona na najviši vrh BiH. Rijeka i planina u jednom nezaboravnom vikend aranžmanu.",
    shortDescriptionEn:
      "Combination of rafting and ascent to the highest peak of BiH. River and mountain in one unforgettable weekend.",
    descriptionBs: "Kombinacija raftinga na Tari i uspona na najviši vrh BiH — Maglić.",
    descriptionEn: "Combination of rafting on Tara and ascent to the highest peak of BiH — Maglić.",
    longDescriptionBs:
      "Ovo je tura za one koji žele sve — rijeku i planinu u jednom aranžmanu. Prvog dana rafting kroz kanjon Tare, drugog dana uspon na Maglić (2386m), najviši vrh Bosne i Hercegovine. Pogled sa vrha na Trnovačko jezero i okolne planine nagrada je za svaki korak. Iskustvo koje spaja vodu, planinu i nezaboravna prijateljstva.",
    longDescriptionEn:
      "This is a tour for those who want everything — river and mountain in one package. Day one: rafting through Tara Canyon; day two: ascent to Maglić (2386m), the highest peak of Bosnia and Herzegovina. The view from the top of Trnovačko Lake and surrounding mountains is the reward for every step. An experience that combines water, mountain and unforgettable friendships.",
    itineraryBs: [
      { time: "Dan 1", title: "Dolazak i rafting", description: "Dolazak, kratko upoznavanje, pa direktno na vodu — 25km raftinga Tarom." },
      { time: "Dan 2", title: "Uspon na Maglić", description: "Rani doručak i polazak na uspon. Vrh Maglića na 2386m, pogled na Trnovačko jezero. Povratak u kamp, večera." },
      { time: "Dan 3", title: "Slobodno jutro i povratak", description: "Lagano jutro uz rijeku, doručak i povratak kući sa uspomenama za cijeli život." },
    ],
    itineraryEn: [
      { time: "Day 1", title: "Arrival and rafting", description: "Arrival, short briefing, then straight to the water — 25km rafting on Tara." },
      { time: "Day 2", title: "Ascent to Maglić", description: "Early breakfast and departure for the climb. Summit of Maglić at 2386m, view of Trnovačko Lake. Return to camp, dinner." },
      { time: "Day 3", title: "Free morning and return", description: "Relaxed morning by the river, breakfast and return home with memories for a lifetime." },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Planinarska oprema i osiguranje", "Smještaj 2 noći", "Svi obroci", "Transport između lokacija"],
    includedEn: ["Guide", "Rafting equipment", "Hiking equipment and insurance", "Accommodation 2 nights", "All meals", "Transport between locations"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Planinarsku obuću", "Sportsku obuću za rafting", "Toplu jaknu", "Rezervna odjeća", "Krema za sunce i usne", "Mala ruksak"],
    whatToBringEn: ["Hiking boots", "Sports footwear for rafting", "Warm jacket", "Spare clothes", "Sunscreen and lip balm", "Small backpack"],
    faqBs: [
      { question: "Koliko je zahtjevan uspon na Maglić?", answer: "Uspon je srednje težine, traje oko 4-5 sati. Dobra fizička kondicija je preporučena." },
      { question: "Da li je uključena oprema za planinarenje?", answer: "Da, sva potrebna oprema je uključena u cijenu." },
    ],
    faqEn: [
      { question: "How demanding is the ascent to Maglić?", answer: "The ascent is of medium difficulty, takes about 4-5 hours. Good physical condition is recommended." },
      { question: "Is hiking equipment included?", answer: "Yes, all necessary equipment is included in the price." },
    ],
    similarTours: ["vikend-na-tari", "rafting-trnovacko", "tara-full-experience"],
    groupSizeBs: "4-10 osoba",
    groupSizeEn: "4-10 people",
    featured: true,
  },
  {
    slug: "rafting-trnovacko",
    nameBs: "Rafting + Trnovačko jezero",
    nameEn: "Rafting + Trnovačko Lake",
    durationBs: "3 dana / 2 noći",
    durationEn: "3 days / 2 nights",
    difficulty: "Srednja",
    price: 150,
    category: "Aranžmani",
    image: "/images/ture/trnovacko.webp",
    shortDescriptionBs:
      "Rafting Tarom pa pohod do jednog od najljepših jezera u Evropi. Priroda kakva se ne zaboravlja.",
    shortDescriptionEn:
      "Rafting on Tara and hike to one of the most beautiful lakes in Europe. Nature you will never forget.",
    descriptionBs: "Rafting na Tari i pješačenje do čarobnog Trnovačkog jezera.",
    descriptionEn: "Rafting on Tara and hiking to the magical Trnovačko Lake.",
    longDescriptionBs:
      "Kombinacija koja oduzima dah — rafting na Tari i pohod do Trnovačkog jezera, jednog od najljepših jezera u Evropi u obliku srca. Okruženo planinama i borovim šumama, jezero je nagrada za svaki korak puta. Ovaj aranžman savršen je za ljubitelje prirode, fotografe i sve koji žele doživjeti BiH u punom sjaju.",
    longDescriptionEn:
      "A breathtaking combination — rafting on Tara and hike to Trnovačko Lake, one of the most beautiful heart-shaped lakes in Europe. Surrounded by mountains and pine forests, the lake is the reward for every step. This package is perfect for nature lovers, photographers and anyone who wants to experience BiH in full splendor.",
    itineraryBs: [
      { time: "Dan 1", title: "Dolazak i rafting", description: "Dolazak u kamp, oprema i 25km raftinga kroz kanjon Tare. Večera uz vatru." },
      { time: "Dan 2", title: "Pohod na Trnovačko jezero", description: "Rani polazak, uspon do jezera u obliku srca. Kupanje, odmor, fotografisanje. Povratak u kamp." },
      { time: "Dan 3", title: "Jutarnja šetnja i povratak", description: "Doručak uz rijeku, lagana jutarnja šetnja kanjonom i povratak kući." },
    ],
    itineraryEn: [
      { time: "Day 1", title: "Arrival and rafting", description: "Arrival at camp, equipment and 25km rafting through Tara Canyon. Dinner by the fire." },
      { time: "Day 2", title: "Hike to Trnovačko Lake", description: "Early departure, climb to the heart-shaped lake. Swimming, rest, photography. Return to camp." },
      { time: "Day 3", title: "Morning walk and return", description: "Breakfast by the river, light morning walk through the canyon and return home." },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Smještaj 2 noći u kampu", "Svi obroci", "Transport čamcem"],
    includedEn: ["Guide", "Rafting equipment", "Camp accommodation 2 nights", "All meals", "Boat transport"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Planinarsku obuću", "Kupaći kostim", "Rezervna odjeća", "Krema za sunce", "Kamera ili telefon za fotografije"],
    whatToBringEn: ["Hiking boots", "Swimsuit", "Spare clothes", "Sunscreen", "Camera or phone for photos"],
    faqBs: [
      { question: "Može li se kupati u jezeru?", answer: "Da! Trnovačko jezero je čisto i osvježavajuće, kupanje je dozvoljeno." },
      { question: "Koliko je dug pohod do jezera?", answer: "Oko 3-4 sata hoda u jednom smjeru, srednje težine." },
    ],
    faqEn: [
      { question: "Can you swim in the lake?", answer: "Yes! Trnovačko Lake is clean and refreshing, swimming is allowed." },
      { question: "How long is the hike to the lake?", answer: "About 3-4 hours of walking in one direction, medium difficulty." },
    ],
    similarTours: ["vikend-na-tari", "rafting-maglic", "trnovacko-jezero"],
    groupSizeBs: "4-12 osoba",
    groupSizeEn: "4-12 people",
    featured: true,
  },
  {
    slug: "tara-full-experience",
    nameBs: "Tara Full Experience",
    nameEn: "Tara Full Experience",
    durationBs: "4 dana / 3 noći",
    durationEn: "4 days / 3 nights",
    difficulty: "Zahtjevna",
    price: 220,
    category: "Aranžmani",
    image: "/images/ture/tara-rafting-cista-slika.webp",
    shortDescriptionBs:
      "Sve u jednom — rafting, Maglić, Trnovačko jezero i prašuma Perućica. Za prave avanturiste.",
    shortDescriptionEn:
      "All in one — rafting, Maglić, Trnovačko Lake and Perućica primeval forest. For true adventurers.",
    descriptionBs: "Potpuna avantura: rafting, Maglić, Trnovačko jezero i Zelengora. Sve u jednom paketu.",
    descriptionEn: "Complete adventure: rafting, Maglić, Trnovačko Lake and Zelengora. All in one package.",
    longDescriptionBs:
      "Četiri dana potpunog uranjanja u prirodu Bosne i Hercegovine. Rafting Tarom, uspon na Maglić, Trnovačko jezero i prašuma Perućica — sve u jednom aranžmanu. Ovo je naša flagship tura, dizajnirana za one koji žele maksimum od svog avanturističkog iskustva. Manji broj učesnika, personalizovani pristup i nezaboravna iskustva garantovani.",
    longDescriptionEn:
      "Four days of complete immersion in the nature of Bosnia and Herzegovina. Rafting on Tara, ascent to Maglić, Trnovačko Lake and Perućica primeval forest — all in one package. This is our flagship tour, designed for those who want the maximum from their adventure experience. Smaller number of participants, personalized approach and unforgettable experiences guaranteed.",
    itineraryBs: [
      { time: "Dan 1", title: "Dolazak i rafting", description: "Dolazak, upoznavanje ekipe i 25km raftinga kroz kanjon." },
      { time: "Dan 2", title: "Uspon na Maglić", description: "Uspon na najviši vrh BiH (2386m) uz pogled na Trnovačko jezero." },
      { time: "Dan 3", title: "Trnovačko jezero i Perućica", description: "Jutro na Trnovačkom jezeru, popodne obilazak prašume Perućica i vodopada Skakavac." },
      { time: "Dan 4", title: "Slobodno jutro i povratak", description: "Lagani doručak, pakovanje i povratak kući sa iskustvima za cijeli život." },
    ],
    itineraryEn: [
      { time: "Day 1", title: "Arrival and rafting", description: "Arrival, meet the team and 25km rafting through the canyon." },
      { time: "Day 2", title: "Ascent to Maglić", description: "Climb to the highest peak of BiH (2386m) with view of Trnovačko Lake." },
      { time: "Day 3", title: "Trnovačko Lake and Perućica", description: "Morning at Trnovačko Lake, afternoon tour of Perućica primeval forest and Skakavac waterfall." },
      { time: "Day 4", title: "Free morning and return", description: "Light breakfast, packing and return home with experiences for a lifetime." },
    ],
    includedBs: ["Vodič tokom cijelog aranžmana", "Sva oprema (rafting + planinarenje)", "Smještaj 3 noći", "Svi obroci", "Svi transferi između lokacija"],
    includedEn: ["Guide throughout the arrangement", "All equipment (rafting + hiking)", "Accommodation 3 nights", "All meals", "All transfers between locations"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje", "Alkohol"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance", "Alcohol"],
    whatToBringBs: ["Planinarsku obuću", "Sportska obuća za rafting", "Topla jakna", "Kupaći kostim", "Rezervna odjeća za 4 dana", "Krema za sunce"],
    whatToBringEn: ["Hiking boots", "Sports footwear for rafting", "Warm jacket", "Swimsuit", "Spare clothes for 4 days", "Sunscreen"],
    faqBs: [
      { question: "Za koga je ova tura?", answer: "Za fizički aktivne osobe koje žele maksimum avanture. Nije preporučena za početnike bez kondicioniranja." },
      { question: "Koliko osoba može biti u grupi?", answer: "Maksimalno 10 osoba radi kvaliteta iskustva." },
    ],
    faqEn: [
      { question: "Who is this tour for?", answer: "For physically active people who want maximum adventure. Not recommended for beginners without conditioning." },
      { question: "How many people can be in the group?", answer: "Maximum 10 people for quality experience." },
    ],
    similarTours: ["rafting-maglic", "rafting-trnovacko", "vikend-na-tari"],
    groupSizeBs: "4-8 osoba",
    groupSizeEn: "4-8 people",
    featured: true,
  },
  {
    slug: "rafting-tarom",
    nameBs: "Rafting Tarom",
    nameEn: "Rafting on Tara",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Laka",
    price: 60,
    category: "Voda",
    image: "/images/ture/tara-brzaci-top.webp",
    shortDescriptionBs:
      "25km raftinga kroz najdublji kanjon u Evropi. Adrenalin, brzaci i netaknuta priroda.",
    shortDescriptionEn:
      "25km of rafting through Europe's deepest canyon. Adrenaline, rapids and untouched nature.",
    descriptionBs: "Klasičan rafting na emerald zelenoj rijeci Tari. Prirodne brzace i nezaboravni pogledi.",
    descriptionEn: "Classic rafting on the emerald green Tara River. Natural rapids and unforgettable views.",
    longDescriptionBs:
      "Dvadesetpet kilometara raftinga kroz najdublji kanjon u Evropi — kanjon rijeke Tare. Brzaci, tišina između rapids-a, kristalno čista voda i zidovi kanjona koji se uzdižu stotinama metara iznad vas. Ovo je iskustvo koje jednom doživiš, a nikad ne zaboraviš. Prilagođeno svim uzrastima, bez potrebe za prethodnim iskustvom.",
    longDescriptionEn:
      "Twenty-five kilometres of rafting through the deepest canyon in Europe — the Tara River canyon. Rapids, silence between rapids, crystal clear water and canyon walls rising hundreds of metres above you. This is an experience you live once and never forget. Suitable for all ages, no prior experience required.",
    itineraryBs: [
      { time: "Jutro", title: "Priprema i oprema", description: "Dolazak na startnu tačku, oblačenje opreme, kratki instruktaž od vodiča." },
      { time: "Podne", title: "Rafting kroz kanjon", description: "25km raftinga kroz spektakularni kanjon Tare. Brzaci, mirne dionice, priroda." },
      { time: "Popodne", title: "Ručak uz rijeku", description: "Zasluženi ručak na obali Tare. Odmor i kupanje za one koji žele." },
      { time: "Povratak", title: "Kraj avanture", description: "Povratak na polaznu tačku, presvlačenje i rastanak sa novim prijateljima." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Preparation and equipment", description: "Arrival at the starting point, putting on equipment, brief instruction from the guide." },
      { time: "Noon", title: "Rafting through the canyon", description: "25km rafting through the spectacular Tara Canyon. Rapids, calm sections, nature." },
      { time: "Afternoon", title: "Lunch by the river", description: "Well-deserved lunch on the banks of the Tara. Rest and swimming for those who want." },
      { time: "Return", title: "End of adventure", description: "Return to the starting point, change of clothes and farewell to new friends." },
    ],
    includedBs: ["Vodič", "Rafting oprema (prsluk, kaciga, veslo, neopren po potrebi)", "Ručak uz rijeku", "Transport čamcem nazad"],
    includedEn: ["Guide", "Rafting equipment (vest, helmet, paddle, wetsuit if needed)", "Lunch by the river", "Boat transport back"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Kupaći kostim ispod odjeće", "Sportska obuća koja se može pokvasiti", "Rezervna odjeća", "Krema za sunce", "Mala vodootporna torba"],
    whatToBringEn: ["Swimsuit under clothes", "Sports footwear that can get wet", "Spare clothes", "Sunscreen", "Small waterproof bag"],
    faqBs: [
      { question: "Koliko traje rafting?", answer: "Oko 4-5 sati plovidbe, zavisno od vodostaja rijeke." },
      { question: "Je li rafting opasan?", answer: "Sa iskusnim vodičem i opremom, rafting na Tari je siguran za sve uzraste." },
    ],
    faqEn: [
      { question: "How long does the rafting last?", answer: "About 4-5 hours of rafting, depending on the water level." },
      { question: "Is rafting dangerous?", answer: "With an experienced guide and equipment, rafting on Tara is safe for all ages." },
    ],
    similarTours: ["vikend-na-tari", "rafting-drinom", "rafting-maglic"],
    groupSizeBs: "4-8 osoba",
    groupSizeEn: "4-8 people",
    isDayTrip: true,
  },
  {
    slug: "rafting-drinom",
    nameBs: "Rafting Drinom",
    nameEn: "Rafting on Drina",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Laka",
    price: 50,
    category: "Voda",
    image: "/images/ture/tara-rafting.webp",
    shortDescriptionBs:
      "Odlično za početnike. Rafting mirnom Drinom kroz prekrasne pejzaže istočne Bosne.",
    shortDescriptionEn:
      "Great for beginners. Rafting on the calm Drina through beautiful landscapes of eastern Bosnia.",
    descriptionBs: "Rafting na Drini — kombinacija prirode i kulturne baštine kanjona.",
    descriptionEn: "Rafting on the Drina — a mix of nature and cultural heritage of the canyon.",
    longDescriptionBs:
      "Rafting Drinom idealan je za one koji prvi put iskušavaju rafting ili žele opušteniji doživljaj rijeke. Mirnije dionice, prekrasni pejzaži i atmosfera koja se razlikuje od kajonskog raftinga. Drina prolazi kroz prekrasne pejzaže istočne Bosne i nudi savršen uvod u svijet raftinga.",
    longDescriptionEn:
      "Rafting on the Drina is ideal for those who are trying rafting for the first time or want a more relaxed river experience. Calmer sections, beautiful landscapes and an atmosphere different from canyon rafting. The Drina passes through beautiful landscapes of eastern Bosnia and offers the perfect introduction to the world of rafting.",
    itineraryBs: [
      { time: "Jutro", title: "Polazak i oprema", description: "Dolazak na startnu tačku na Drini, oblačenje opreme i kratki instruktaž." },
      { time: "Podne", title: "Rafting Drinom", description: "Opušteno spuštanje Drinom kroz predivne pejzaže. Idealno za početnike i porodice." },
      { time: "Popodne", title: "Ručak i odmor", description: "Ručak uz rijeku, kupanje i odmor na suncu." },
      { time: "Povratak", title: "Kraj ture", description: "Povratak na polaznu tačku i rastanak." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Departure and equipment", description: "Arrival at the starting point on the Drina, putting on equipment and brief instruction." },
      { time: "Noon", title: "Rafting on Drina", description: "Relaxed descent on the Drina through beautiful landscapes. Ideal for beginners and families." },
      { time: "Afternoon", title: "Lunch and rest", description: "Lunch by the river, swimming and rest in the sun." },
      { time: "Return", title: "End of tour", description: "Return to the starting point and farewell." },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Ručak uz rijeku"],
    includedEn: ["Guide", "Rafting equipment", "Lunch by the river"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Kupaći kostim", "Sportska obuća", "Rezervna odjeća", "Krema za sunce"],
    whatToBringEn: ["Swimsuit", "Sports footwear", "Spare clothes", "Sunscreen"],
    faqBs: [
      { question: "Je li Drina pogodna za djecu?", answer: "Da, Drina je mirnija rijeka i idealna je za porodice sa djecom." },
      { question: "Koja je razlika između Tare i Drine?", answer: "Tara ima više brzaka i adrenalina, Drina je mirnija i opuštenija. Obje su prekrasne." },
    ],
    faqEn: [
      { question: "Is the Drina suitable for children?", answer: "Yes, the Drina is a calmer river and ideal for families with children." },
      { question: "What is the difference between Tara and Drina?", answer: "Tara has more rapids and adrenaline, Drina is calmer and more relaxed. Both are beautiful." },
    ],
    similarTours: ["rafting-tarom", "vikend-na-tari", "jeep-safari-sutjeska"],
    groupSizeBs: "4-8 osoba",
    groupSizeEn: "4-8 people",
    isDayTrip: true,
  },
  {
    slug: "jahanje-zelengora",
    nameBs: "Jahanje konja na Zelengori",
    nameEn: "Horse riding on Zelengora",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Laka",
    price: 65,
    category: "Jahanje",
    image: "/images/ture/jahanje-konja.webp",
    shortDescriptionBs:
      "Terensko jahanje kroz planinske livade Zelengore. Jedinstven način da doživeš planinu.",
    shortDescriptionEn:
      "Trail riding through Zelengora's mountain meadows. A unique way to experience the mountain.",
    descriptionBs: "Jahanje kroz Zelengoru — jedinstven način da istražite planinu.",
    descriptionEn: "Horse riding through Zelengora — a unique way to explore the mountain.",
    longDescriptionBs:
      "Jedinstven način da doživeš planinu Zelengoru — na konjskom sedlu. Terensko jahanje kroz planinske livade, uz jezera i vidikovce koji oduzimaju dah. Iskustvo jahanja u netaknutoj prirodi, daleko od gradske buke. Prilagođeno i za početnike u jahanju.",
    longDescriptionEn:
      "A unique way to experience Zelengora mountain — on horseback. Trail riding through mountain meadows, past lakes and breathtaking viewpoints. A riding experience in untouched nature, far from the city bustle. Suitable for riding beginners too.",
    itineraryBs: [
      { time: "Jutro", title: "Upoznavanje s konjima", description: "Dolazak na ranč, upoznavanje s konjima, kratka obuka za početnike i oprema." },
      { time: "Podne", title: "Jahanje Zelengorom", description: "Jahanje kroz planinske livade, uz glacijalna jezera i panoramske vidikovce." },
      { time: "Popodne", title: "Odmor i piknik", description: "Odmor na planini, piknik sa domaćim proizvodima, fotografisanje." },
      { time: "Povratak", title: "Povratak na ranč", description: "Povratak, briga o konjima i rastanak sa novim četveronožnim prijateljem." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Meet the horses", description: "Arrival at the ranch, meeting the horses, short training for beginners and equipment." },
      { time: "Noon", title: "Riding through Zelengora", description: "Riding through mountain meadows, past glacial lakes and panoramic viewpoints." },
      { time: "Afternoon", title: "Rest and picnic", description: "Rest on the mountain, picnic with local products, photography." },
      { time: "Return", title: "Back to the ranch", description: "Return, caring for the horses and farewell to your new four-legged friend." },
    ],
    includedBs: ["Vodič i instruktor jahanja", "Konj i sva jahačka oprema", "Kaciga i prsluk", "Piknik užina"],
    includedEn: ["Guide and riding instructor", "Horse and all riding equipment", "Helmet and vest", "Picnic snack"],
    notIncludedBs: ["Transport do polazne tačke", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to starting point", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Udobne duge pantalone", "Zatvorena obuća (ne sandale)", "Jakna ili vjetrovka", "Krema za sunce"],
    whatToBringEn: ["Comfortable long trousers", "Closed footwear (no sandals)", "Jacket or windbreaker", "Sunscreen"],
    faqBs: [
      { question: "Trebam li iskustvo u jahanju?", answer: "Ne, početnici su dobrodošli. Instruktor će te naučiti osnove prije polaska." },
      { question: "Da li je jahanje sigurno?", answer: "Da, konji su uvježbani za terensko jahanje i iskusni su s turistima." },
    ],
    faqEn: [
      { question: "Do I need riding experience?", answer: "No, beginners are welcome. The instructor will teach you the basics before departure." },
      { question: "Is riding safe?", answer: "Yes, the horses are trained for trail riding and experienced with tourists." },
    ],
    similarTours: ["jeep-safari-sutjeska", "trnovacko-jezero", "perucica-skakavac"],
    groupSizeBs: "2-6 osoba",
    groupSizeEn: "2-6 people",
    isDayTrip: true,
  },
  {
    slug: "trnovacko-jezero",
    nameBs: "Trnovačko jezero",
    nameEn: "Trnovačko Lake",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Srednja",
    price: 75,
    category: "Planine",
    image: "/images/ture/trnovacko.webp",
    shortDescriptionBs:
      "Pohod do srca-oblika jezera okruženog planinama. Jedna od najfotografisanijih lokacija u BiH.",
    shortDescriptionEn:
      "Hike to a heart-shaped lake surrounded by mountains. One of the most photographed locations in BiH.",
    descriptionBs: "Pješačenje do jednog od najfotografiranijih jezera u BiH. Nestvarno lijepo.",
    descriptionEn: "Hike to one of the most photographed lakes in BiH. Unbelievably beautiful.",
    longDescriptionBs:
      "Pohod do Trnovačkog jezera jedan je od najljepših jednodnevnih izleta u BiH. Jezero u obliku srca, okruženo planinama i borovim šumama, pravo je remek-djelo prirode. Uspon je srednje zahtjevan ali nagrada je nevjerovatna — tirkizna voda, tišina i prizori koji oduzimaju dah.",
    longDescriptionEn:
      "The hike to Trnovačko Lake is one of the most beautiful day trips in BiH. The heart-shaped lake, surrounded by mountains and pine forests, is a true masterpiece of nature. The ascent is of medium difficulty but the reward is incredible — turquoise water, silence and breathtaking views.",
    itineraryBs: [
      { time: "Jutro", title: "Polazak i uspon", description: "Polazak rano ujutro, uspon kroz šumu prema jezeru. Vodič vas vodi sigurnom rutom." },
      { time: "Podne", title: "Dolazak na jezero", description: "Dolazak na Trnovačko jezero, odmor, kupanje i ručak uz jezero." },
      { time: "Popodne", title: "Slobodno vrijeme na jezeru", description: "Fotografisanje, odmor, istraživanje okoline jezera." },
      { time: "Povratak", title: "Spust i povratak", description: "Spust istom rutom nazad. Povratak u Foču kasno poslijepodne." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Departure and ascent", description: "Early morning departure, ascent through the forest towards the lake. The guide leads you on a safe route." },
      { time: "Noon", title: "Arrival at the lake", description: "Arrival at Trnovačko Lake, rest, swimming and lunch by the lake." },
      { time: "Afternoon", title: "Free time at the lake", description: "Photography, rest, exploring the lake surroundings." },
      { time: "Return", title: "Descent and return", description: "Descent back the same route. Return to Foča late afternoon." },
    ],
    includedBs: ["Vodič", "Oprema za planinarenje", "Ručak uz jezero"],
    includedEn: ["Guide", "Hiking equipment", "Lunch by the lake"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Planinarsku obuću", "Kupaći kostim", "Rezervna odjeća", "Krema za sunce", "Dovoljno vode"],
    whatToBringEn: ["Hiking boots", "Swimsuit", "Spare clothes", "Sunscreen", "Enough water"],
    faqBs: [
      { question: "Koliko traje uspon?", answer: "Oko 3-4 sata u jednom smjeru, zavisno od tempa grupe." },
      { question: "Može li se kupati?", answer: "Da, kupanje je dozvoljeno i toplo preporučeno — voda je čista i osvježavajuća." },
    ],
    faqEn: [
      { question: "How long does the ascent take?", answer: "About 3-4 hours in one direction, depending on the group's pace." },
      { question: "Can you swim?", answer: "Yes, swimming is allowed and highly recommended — the water is clean and refreshing." },
    ],
    similarTours: ["rafting-trnovacko", "perucica-skakavac", "jahanje-zelengora"],
    groupSizeBs: "4-12 osoba",
    groupSizeEn: "4-12 people",
    isDayTrip: true,
  },
  {
    slug: "perucica-skakavac",
    nameBs: "Prašuma Perućica i vodopad Skakavac",
    nameEn: "Perućica Primeval Forest and Skakavac Waterfall",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Laka",
    price: 90,
    category: "Planine",
    image: "/images/ture/prasuma-sutjeska.webp",
    shortDescriptionBs:
      "Obilazak jedne od posljednjih prašuma u Evropi i impresivnog vodopada Skakavac.",
    shortDescriptionEn:
      "Tour of one of Europe's last primeval forests and the impressive Skakavac waterfall.",
    descriptionBs: "Šetnja prašumom Perućicom i do impresivnog vodopada Skakavac.",
    descriptionEn: "Walk through Perućica primeval forest and to the impressive Skakavac waterfall.",
    longDescriptionBs:
      "Prašuma Perućica jedna je od posljednjih prašuma u Evropi i pravo je prirodno čudo. Stabla stara stotinama godina, netaknuta priroda i vodopad Skakavac koji pada s visine od 75 metara. Obilazak ove prašume dozvoljeno je samo uz ovlaštenog vodiča, što čini ovaj izlet još ekskluzivnijim i posebnijim.",
    longDescriptionEn:
      "Perućica Primeval Forest is one of the last primeval forests in Europe and a true natural wonder. Trees hundreds of years old, untouched nature and Skakavac waterfall falling from a height of 75 metres. Visiting this forest is only allowed with an authorised guide, making this trip even more exclusive and special.",
    itineraryBs: [
      { time: "Jutro", title: "Polazak i ulaz u prašumu", description: "Polazak prema NP Sutjeska, ulaz u prašumu Perućica uz dozvolu i vodiča." },
      { time: "Podne", title: "Obilazak prašume", description: "Šetnja kroz prašumu, upoznavanje s florom i faunom, dolazak do vodopada Skakavac." },
      { time: "Popodne", title: "Vodopad Skakavac", description: "Odmor i fotografisanje kod vodopada. Osvježavajuća prskanja vode i nezaboravni prizori." },
      { time: "Povratak", title: "Izlaz iz prašume i povratak", description: "Povratak istom rutom, izlaz iz parka i povratak u Foču." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Departure and entry into the forest", description: "Departure towards NP Sutjeska, entry into Perućica forest with permit and guide." },
      { time: "Noon", title: "Tour of the forest", description: "Walk through the forest, getting to know the flora and fauna, arrival at Skakavac waterfall." },
      { time: "Afternoon", title: "Skakavac Waterfall", description: "Rest and photography at the waterfall. Refreshing water spray and unforgettable views." },
      { time: "Return", title: "Exit from the forest and return", description: "Return the same route, exit from the park and return to Foča." },
    ],
    includedBs: ["Ovlašteni vodič", "Ulaznica za NP Sutjeska", "Dozvola za ulaz u prašumu Perućica", "Užina"],
    includedEn: ["Authorised guide", "NP Sutjeska entrance ticket", "Permit for entry to Perućica forest", "Snack"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Udobnu obuću za šetnju", "Laganu jaknu", "Rezervna odjeća", "Repelent za insekte", "Kamera"],
    whatToBringEn: ["Comfortable walking shoes", "Light jacket", "Spare clothes", "Insect repellent", "Camera"],
    faqBs: [
      { question: "Zašto je potreban vodič za prašumu?", answer: "Ulaz u prašumu Perućica dozvoljen je isključivo uz ovlaštenog vodiča radi zaštite ovog prirodnog blaga." },
      { question: "Koliko traje obilazak?", answer: "Cijeli izlet traje oko 6-7 sati zajedno s putovanjem." },
    ],
    faqEn: [
      { question: "Why is a guide needed for the forest?", answer: "Entry to Perućica forest is only allowed with an authorised guide to protect this natural treasure." },
      { question: "How long does the tour last?", answer: "The entire trip takes about 6-7 hours including travel." },
    ],
    similarTours: ["trnovacko-jezero", "jahanje-zelengora", "jeep-safari-sutjeska"],
    groupSizeBs: "4-12 osoba",
    groupSizeEn: "4-12 people",
    isDayTrip: true,
  },
  {
    slug: "jeep-safari-sutjeska",
    nameBs: "Jeep safari NP Sutjeska",
    nameEn: "Jeep safari Sutjeska NP",
    durationBs: "1 dan",
    durationEn: "1 day",
    difficulty: "Laka",
    price: 70,
    category: "Jeep safari",
    image: "/images/ture/jeep-safari-sutjeska.webp",
    shortDescriptionBs:
      "Off-road avantura kroz Nacionalni park Sutjeska. Stijene, rijeke i divljina dostupni svima.",
    shortDescriptionEn:
      "Off-road adventure through Sutjeska National Park. Rocks, rivers and wilderness accessible to all.",
    descriptionBs: "Off-road vožnja kroz Nacionalni park Sutjeska. Priroda bez velikog napora.",
    descriptionEn: "Off-road drive through Sutjeska National Park. Nature without much effort.",
    longDescriptionBs:
      "Off-road avantura kroz Nacionalni park Sutjeska u komforu terenskog vozila. Idealno za one koji žele doživjeti divljinu BiH bez zahtjevnog pješačenja. Prolazimo kroz stijene, rijeke i planinske puteve koji su nedostupni običnim vozilima. Savršeno za porodice, starije goste i sve koji žele avanturu na drukčiji način.",
    longDescriptionEn:
      "Off-road adventure through Sutjeska National Park in the comfort of an all-terrain vehicle. Ideal for those who want to experience the wilderness of BiH without demanding hiking. We pass through rocks, rivers and mountain roads inaccessible to ordinary vehicles. Perfect for families, older guests and anyone who wants adventure in a different way.",
    itineraryBs: [
      { time: "Jutro", title: "Polazak i ulaz u park", description: "Polazak iz Foče, ulaz u NP Sutjeska u terenskim vozilima. Upoznavanje s parkom i rutom." },
      { time: "Podne", title: "Safari kroz park", description: "Off-road vožnja kroz Sutjesku, zaustavljanja na vidikovcima, rijekama i šumskim predjelima." },
      { time: "Popodne", title: "Piknik i slobodno vrijeme", description: "Zaustavljanje na posebnoj lokaciji, piknik u prirodi i slobodno istraživanje." },
      { time: "Povratak", title: "Povratak u Foču", description: "Povratak kroz park sa punim fotoalbumom i novim pričama." },
    ],
    itineraryEn: [
      { time: "Morning", title: "Departure and entry into the park", description: "Departure from Foča, entry into NP Sutjeska in all-terrain vehicles. Introduction to the park and route." },
      { time: "Noon", title: "Safari through the park", description: "Off-road drive through Sutjeska, stops at viewpoints, rivers and forest areas." },
      { time: "Afternoon", title: "Picnic and free time", description: "Stop at a special location, picnic in nature and free exploration." },
      { time: "Return", title: "Return to Foča", description: "Return through the park with a full photo album and new stories." },
    ],
    includedBs: ["Iskusni vozač-vodič", "Terensko vozilo", "Ulaznica za NP Sutjeska", "Piknik užina"],
    includedEn: ["Experienced driver-guide", "All-terrain vehicle", "NP Sutjeska entrance ticket", "Picnic snack"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: ["Udobnu odjeću", "Jaknu ili vjetrovku", "Zaštita od sunca", "Kamera", "Dobro raspoloženje"],
    whatToBringEn: ["Comfortable clothes", "Jacket or windbreaker", "Sun protection", "Camera", "Good spirits"],
    faqBs: [
      { question: "Je li safari prikladan za djecu?", answer: "Apsolutno! Jeep safari je odličan za cijelu porodicu, uključujući djecu svih uzrasta." },
      { question: "Koliko osoba stane u vozilo?", answer: "4-6 osoba po vozilu, zavisno od tipa terenskog vozila." },
    ],
    faqEn: [
      { question: "Is the safari suitable for children?", answer: "Absolutely! Jeep safari is great for the whole family, including children of all ages." },
      { question: "How many people fit in the vehicle?", answer: "4-6 people per vehicle, depending on the type of all-terrain vehicle." },
    ],
    similarTours: ["rafting-drinom", "perucica-skakavac", "jahanje-zelengora"],
    groupSizeBs: "4-6 osoba",
    groupSizeEn: "4-6 people",
    isDayTrip: true,
  },
];

export const getTourBySlug = (slug: string): Tour | undefined =>
  tours.find((t) => t.slug === slug);

export const getToursBySlugs = (slugs: string[]): Tour[] =>
  tours.filter((t) => slugs.includes(t.slug));

export const getFeaturedTours = (): Tour[] =>
  tours.filter((t) => t.featured).slice(0, 4);

export const getToursByCategory = (category: string): Tour[] => {
  if (category === "Svi" || !category) return tours;
  if (category === "Jednodnevni izleti")
    return tours.filter((t) => t.isDayTrip);
  return tours.filter((t) => t.category === category);
};
