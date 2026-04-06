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
    durationBs: "3 dana / 2 noći",
    durationEn: "3 days / 2 nights",
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
      "Otkrijte nezaboravan vikend pun adrenalina i netaknute prirode! Tura se sastoji od raftinga rijekom Tarom kroz spektakularni kanjon, uz stručne vodiče i kompletnu opremu, koji garantuju sigurnost i vrhunski doživljaj. Nakon uzbuđenja na vodi, opustite se uz noćenje u prirodnom ambijentu i odličnoj atmosferi. Vikend na Tari je savršena kombinacija avanture i odmora — iskustvo koje puni energijom i stvara uspomene za cijeli život.",
    longDescriptionEn:
      "Spend an unforgettable weekend on the banks of the Tara River, one of the cleanest rivers in Europe. With the sound of the river and the scent of pine forest, this arrangement offers the perfect escape from everyday life. Rafting through the Tara Canyon offers a combination of adrenaline and incredible natural scenery that cannot be described in words. Camp accommodation by the fire, home-cooked food and great company make this weekend a complete experience.",
    itineraryBs: [
      {
        time: "Dan 1",
        title: "Dobrodošli na Taru",
        description:
          "Dolazak u kamp u bilo koje doba — dočekujemo vas bez obzira kada stignete. Smještaj u bungalove ili šatore, slobodno vrijeme za odmor i upoznavanje ekipe. Uveče slijedi bogata večera od domaćih specijaliteta, a nakon toga muzika uživo uz vatru — savršen uvod u avanturu koja slijedi.",
      },
      {
        time: "Dan 2",
        title: "Rafting dan — rijeka je naša!",
        description:
          "Jutro počinje doručkom koji puni energiju. Nakon doručka, zaduživanje opreme — prsluk, kaciga, neopren, veslo — sve je pripremljeno. Teretnim vozilima krećemo prema Brštanovici, odakle počinje rafting spust. Cijeli dan provodimo na rijeci Tari — savladavamo brzake, skačemo u kristalno čistu vodu, posjećujemo vodopade i uživamo u nestvarnoj prirodi kanjona. Nema žurbe, nema rasporeda — samo rijeka i sloboda. Po povratku u kamp čeka nas ručak, slobodno popodne, večera i još jedna večer uz muziku i vatru.",
      },
      {
        time: "Dan 3",
        title: "Doručak i rastanak",
        description:
          "Posljednje jutro na Tari. Doručak uz zvuk rijeke, pakovanje i rastanak — ali uspomene ostaju zauvijek.",
      },
    ],
    itineraryEn: [
      {
        time: "Day 1",
        title: "Welcome to Tara",
        description:
          "Arrive at camp at any time — we welcome you whenever you get here. Settle into bungalows or tents, free time to relax and meet the group. In the evening, a hearty dinner of homemade specialties, followed by live music by the fire — the perfect introduction to the adventure ahead.",
      },
      {
        time: "Day 2",
        title: "Rafting day — the river is ours!",
        description:
          "Morning starts with an energy-packed breakfast. After breakfast, we gear up — vest, helmet, wetsuit, paddle — everything is prepared. We head by truck to Brštanovica where the rafting descent begins. We spend the entire day on the Tara River — conquering rapids, jumping into crystal clear water, visiting waterfalls and enjoying the incredible canyon nature. No rush, no strict schedule — just the river and freedom. Back at camp, lunch awaits, followed by free afternoon, dinner and another evening with music and campfire.",
      },
      {
        time: "Day 3",
        title: "Breakfast and farewell",
        description:
          "Last morning on the Tara. Breakfast by the sound of the river, packing up and farewell — but the memories last forever.",
      },
    ],
    includedBs: ["Vodič", "Rafting oprema (prsluk, kaciga, veslo)", "Smještaj u kampu", "Večera i doručak", "Transport čamcem"],
    includedEn: ["Guide", "Rafting equipment (vest, helmet, paddle)", "Camp accommodation", "Dinner and breakfast", "Boat transport"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Kupaći kostim",
      "Lična dokumenta (pasoš ili lična karta)",
      "Krema za sunce",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Personal documents (passport or ID card)",
      "Sunscreen",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za rafting?",
        answer:
          "Nije potrebno nikakvo prethodno iskustvo. Naši iskusni skiperi vas uvode u sve što trebate znati prije polaska na vodu.",
      },
      {
        question: "Koliko traje rafting?",
        answer: "Rafting spust traje oko 4-5 sati zavisno od vodostaja rijeke i tempa grupe.",
      },
      {
        question: "Da li ima dobne granice za rafting?",
        answer:
          "Minimalna starost za rafting u ljetnom periodu je 6 godina. Za djecu mlađu od 6 godina preporučujemo druge aktivnosti.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for rafting?",
        answer:
          "No prior experience is required. Our experienced skippers introduce you to everything you need to know before heading out on the water.",
      },
      {
        question: "How long does the rafting last?",
        answer:
          "The rafting descent lasts about 4-5 hours depending on the water level and group pace.",
      },
      {
        question: "Is there an age limit for rafting?",
        answer:
          "The minimum age for rafting in summer is 6 years. For children under 6 we recommend other activities.",
      },
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
      {
        time: "Dan 1",
        title: "Dobrodošli na Taru",
        description:
          "Dolazak u kamp u bilo koje doba — dočekujemo vas bez obzira kada stignete. Smještaj, slobodno vrijeme i upoznavanje ekipe. Uveče bogata večera od domaćih specijaliteta i muzika uživo uz vatru.",
      },
      {
        time: "Dan 2",
        title: "Rafting dan — rijeka je naša!",
        description:
          "Doručak koji puni energiju, zaduživanje opreme i odlazak teretnim vozilima prema Brštanovici. Cijeli dan na rijeci Tari — brzaci, skokovi u kristalno čistu vodu, posjeta vodopadima i uživanje u kanjonu bez žurbe i rasporeda. Po povratku ručak, slobodno popodne, večera i muzika uživo uz vatru.",
      },
      {
        time: "Dan 3",
        title: "Uspon na Maglić — krov Bosne i Hercegovine",
        description:
          "Rano jutro, doručak i pakovanje lunch paketa. Krećemo prema Magliću — najvišem vrhu Bosne i Hercegovine (2386m). Uspon traje nekoliko sati kroz prekrasnu planinsku prirodu. Sa vrha se pruža nestvaran pogled na Trnovačko jezero i okolne planine — nagrada za svaki korak. Po povratku sa Maglića, vraćamo se u Foču gdje se tura završava. Uspomene ostaju zauvijek.",
      },
    ],
    itineraryEn: [
      {
        time: "Day 1",
        title: "Welcome to Tara",
        description:
          "Arrive at camp at any time — we welcome you whenever you get here. Settle in, free time and meet the group. Evening dinner of homemade specialties and live music by the campfire.",
      },
      {
        time: "Day 2",
        title: "Rafting day — the river is ours!",
        description:
          "Energy-packed breakfast, gear up and head by truck to Brštanovica. Entire day on the Tara River — rapids, jumps into crystal clear water, waterfall visits and canyon enjoyment with no rush. Back at camp: lunch, free afternoon, dinner and live music by the fire.",
      },
      {
        time: "Day 3",
        title: "Ascent to Maglić — the roof of Bosnia and Herzegovina",
        description:
          "Early morning, breakfast and packed lunch preparation. We head to Maglić — the highest peak of Bosnia and Herzegovina (2386m). The ascent takes several hours through beautiful mountain nature. From the summit, an incredible view of Trnovačko Lake and surrounding mountains awaits — the reward for every step. After descending from Maglić, we return to Foča where the tour ends. Memories last forever.",
      },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Planinarska oprema i osiguranje", "Smještaj 2 noći", "Svi obroci", "Transport između lokacija"],
    includedEn: ["Guide", "Rafting equipment", "Hiking equipment and insurance", "Accommodation 2 nights", "All meals", "Transport between locations"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Kupaći kostim",
      "Gojzerice ili planinarsku obuću",
      "Udobne patike",
      "Voda 1.5L u boci",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Hiking boots or trail shoes",
      "Comfortable sneakers",
      "1.5L water bottle",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za planinarenje?",
        answer:
          "Nije potrebno prethodno iskustvo. Naš vodič prilagođava tempo grupe i brine o svim učesnicima tokom cijele ture.",
      },
      {
        question: "Da li ima dobne granice?",
        answer:
          "Minimalna starost za planinarenje i hiking ture je 8 godina uz pratnju roditelja.",
      },
      {
        question: "Koliko traje tura?",
        answer:
          "Zavisno od ture, planinarenje traje između 6 i 8 sati uključujući transport i pauze.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for hiking?",
        answer:
          "No prior experience is required. Our guide adapts the pace to the group and takes care of all participants throughout the tour.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The minimum age for hiking tours is 8 years with parental supervision.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Depending on the tour, hiking lasts between 6 and 8 hours including transport and breaks.",
      },
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
      "Doživite nezaboravnu trodnevnu avanturu u srcu netaknute prirode! Ova pažljivo osmišljena tura kombinuje adrenalin, odmor i istraživanje najljepših prirodnih predjela regiona. Tokom tri dana i dvije noći, vodimo vas kroz najljepše i najdivlje predjele Balkana, gdje rijeka Tara probija put kroz jedan od najdubljih kanjona Evrope, a Trnovačko jezero otkriva prizor koji oduzima dah. Avantura počinje raftingom na Tari — rijeci poznatoj po svojoj smaragdnoj boji i nadimku 'suza Evrope'. Spust kroz moćne brzake i netaknutu prirodu pruža savršen balans uzbuđenja i sigurnosti. Bez obzira da li ste početnik ili iskusni avanturista, naši licencirani vodiči i vrhunska oprema garantuju maksimalan užitak i bezbrižnost. Nakon adrenalina, slijedi potpuni kontrast — mir i tišina planinskog ambijenta. Obilazak Trnovačkog jezera vodi vas do jednog od najfotogeničnijih mjesta u regionu. Njegov prepoznatljiv oblik srca, kristalno čista voda i impresivni planinski vrhovi stvaraju pejzaž koji ostaje urezan u sjećanju.",
    longDescriptionEn:
      "A breathtaking combination — rafting on Tara and hike to Trnovačko Lake, one of the most beautiful heart-shaped lakes in Europe. Surrounded by mountains and pine forests, the lake is the reward for every step. This package is perfect for nature lovers, photographers and anyone who wants to experience BiH in full splendor.",
    itineraryBs: [
      {
        time: "Dan 1",
        title: "Dobrodošli na Taru",
        description:
          "Dolazak u kamp u bilo koje doba — dočekujemo vas bez obzira kada stignete. Smještaj, slobodno vrijeme i upoznavanje ekipe. Uveče bogata večera od domaćih specijaliteta i muzika uživo uz vatru.",
      },
      {
        time: "Dan 2",
        title: "Rafting dan — rijeka je naša!",
        description:
          "Doručak koji puni energiju, zaduživanje opreme i odlazak teretnim vozilima prema Brštanovici. Cijeli dan na rijeci Tari — brzaci, skokovi u kristalno čistu vodu, posjeta vodopadima i uživanje u kanjonu bez žurbe i rasporeda. Po povratku ručak, slobodno popodne, večera i muzika uživo uz vatru.",
      },
      {
        time: "Dan 3",
        title: "Pohod na Trnovačko jezero — dijamant Bosne",
        description:
          "Rano jutro, doručak i pakovanje lunch paketa. Krećemo prema Trnovačkom jezeru — jednom od najljepših jezera u Evropi poznatom po svom prepoznatljivom obliku srca. Uspon traje nekoliko sati kroz borovu šumu i planinske predjele. Na jezeru nas čeka kristalno čista tirkizna voda, mir i prizori koji oduzimaju dah. Kupanje, odmor i fotografisanje uz nezaboravne pejzaže. Po povratku sa jezera, vraćamo se u Foču gdje se tura završava. Uspomene ostaju zauvijek.",
      },
    ],
    itineraryEn: [
      {
        time: "Day 1",
        title: "Welcome to Tara",
        description:
          "Arrive at camp at any time — we welcome you whenever you get here. Settle in, free time and meet the group. Evening dinner of homemade specialties and live music by the campfire.",
      },
      {
        time: "Day 2",
        title: "Rafting day — the river is ours!",
        description:
          "Energy-packed breakfast, gear up and head by truck to Brštanovica. Entire day on the Tara River — rapids, jumps into crystal clear water, waterfall visits and canyon enjoyment with no rush. Back at camp: lunch, free afternoon, dinner and live music by the fire.",
      },
      {
        time: "Day 3",
        title: "Hike to Trnovačko Lake — the diamond of Bosnia",
        description:
          "Early morning, breakfast and packed lunch preparation. We head to Trnovačko Lake — one of the most beautiful lakes in Europe, known for its distinctive heart shape. The ascent takes several hours through pine forest and mountain terrain. At the lake, crystal clear turquoise water, peace and breathtaking scenery await. Swimming, rest and photography with unforgettable views. After descending from the lake, we return to Foča where the tour ends. Memories last forever.",
      },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Smještaj 2 noći u kampu", "Svi obroci", "Transport čamcem"],
    includedEn: ["Guide", "Rafting equipment", "Camp accommodation 2 nights", "All meals", "Boat transport"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Kupaći kostim",
      "Gojzerice ili planinarsku obuću",
      "Udobne patike",
      "Voda 1.5L u boci",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Hiking boots or trail shoes",
      "Comfortable sneakers",
      "1.5L water bottle",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za planinarenje?",
        answer:
          "Nije potrebno prethodno iskustvo. Naš vodič prilagođava tempo grupe i brine o svim učesnicima tokom cijele ture.",
      },
      {
        question: "Da li ima dobne granice?",
        answer:
          "Minimalna starost za planinarenje i hiking ture je 8 godina uz pratnju roditelja.",
      },
      {
        question: "Koliko traje tura?",
        answer:
          "Zavisno od ture, planinarenje traje između 6 i 8 sati uključujući transport i pauze.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for hiking?",
        answer:
          "No prior experience is required. Our guide adapts the pace to the group and takes care of all participants throughout the tour.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The minimum age for hiking tours is 8 years with parental supervision.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Depending on the tour, hiking lasts between 6 and 8 hours including transport and breaks.",
      },
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
      "Ako tražiš više od običnog odmora — ovo je avantura za tebe. 'Tara Full Experience' je četvorodnevno putovanje kroz najljepše i najdivljije dijelove prirode Balkana. Spoj adrenalina, planinskih vrhova, kristalno čistih rijeka i netaknute prirode čini ovu turu jedinstvenim iskustvom koje se ne zaboravlja. Prvog dana upoznaješ snagu rijeke Tare kroz nezaboravan rafting — brzaci, smijeh i adrenalin koji podižu energiju od samog početka. Nakon toga, avantura se nastavlja ka planinama, gdje te čeka uspon na Maglić — najviši vrh Bosne i Hercegovine (2386m) sa pogledom koji oduzima dah. Poseban doživljaj je obilazak Trnovačkog jezera — skrivenog dragulja prirode, poznatog po svom jedinstvenom obliku i nestvarnim bojama. Na kraju, ulaziš u srce prašume Perućice — jedne od posljednjih prašuma u Evropi, gdje vrijeme kao da je stalo, a priroda ostala potpuno divlja i netaknuta. Sve to u 4 dana i 3 noći, uz iskusne vodiče, sigurnu organizaciju i atmosferu koju pamtiš cijeli život.",
    longDescriptionEn:
      "Four days of complete immersion in the nature of Bosnia and Herzegovina. Rafting on Tara, ascent to Maglić, Trnovačko Lake and Perućica primeval forest — all in one package. This is our flagship tour, designed for those who want the maximum from their adventure experience. Smaller number of participants, personalized approach and unforgettable experiences guaranteed.",
    itineraryBs: [
      {
        time: "Dan 1",
        title: "Dobrodošli na Taru",
        description:
          "Dolazak u kamp u bilo koje doba — dočekujemo vas bez obzira kada stignete. Smještaj, slobodno vrijeme i upoznavanje ekipe. Uveče bogata večera od domaćih specijaliteta i muzika uživo uz vatru.",
      },
      {
        time: "Dan 2",
        title: "Rafting dan — rijeka je naša!",
        description:
          "Doručak koji puni energiju, zaduživanje opreme i odlazak teretnim vozilima prema Brštanovici. Cijeli dan na rijeci Tari — brzaci, skokovi u kristalno čistu vodu, posjeta vodopadima i uživanje u kanjonu bez žurbe i rasporeda. Po povratku ručak, slobodno popodne, večera i muzika uživo uz vatru.",
      },
      {
        time: "Dan 3",
        title: "Trnovačko jezero — dijamant Bosne",
        description:
          "Rano jutro, doručak i pakovanje lunch paketa. Krećemo prema Trnovačkom jezeru — jednom od najljepših jezera u Evropi poznatom po svom prepoznatljivom obliku srca. Uspon traje nekoliko sati kroz borovu šumu i planinske predjele. Kristalno čista tirkizna voda, mir i prizori koji oduzimaju dah. Kupanje, odmor i fotografisanje. Po povratku smještamo se na Tjentištu gdje nas čeka večera i noćenje.",
      },
      {
        time: "Dan 4",
        title: "Prašuma Perućica i vodopad Skakavac",
        description:
          "Posljednje jutro — doručak i pakovanje lunch paketa. Ulazimo u srce prašume Perućice, jedne od posljednjih prašuma u Evropi gdje vrijeme kao da je stalo. Prolazimo kroz stabla stara stotinama godina do impresivnog vodopada Skakavac koji pada sa visine od 75 metara. Nezaboravan kraj nezaboravne avanture. Po povratku tura se završava — četiri dana, bezbroj uspomena.",
      },
    ],
    itineraryEn: [
      {
        time: "Day 1",
        title: "Welcome to Tara",
        description:
          "Arrive at camp at any time — we welcome you whenever you get here. Settle in, free time and meet the group. Evening dinner of homemade specialties and live music by the campfire.",
      },
      {
        time: "Day 2",
        title: "Rafting day — the river is ours!",
        description:
          "Energy-packed breakfast, gear up and head by truck to Brštanovica. Entire day on the Tara River — rapids, jumps into crystal clear water, waterfall visits and canyon enjoyment with no rush. Back at camp: lunch, free afternoon, dinner and live music by the fire.",
      },
      {
        time: "Day 3",
        title: "Trnovačko Lake — the diamond of Bosnia",
        description:
          "Early morning, breakfast and packed lunch preparation. We head to Trnovačko Lake — one of the most beautiful lakes in Europe known for its distinctive heart shape. The ascent takes several hours through pine forest and mountain terrain. Crystal clear turquoise water, peace and breathtaking scenery. Swimming, rest and photography. On return we settle in Tjentište where dinner and overnight stay await.",
      },
      {
        time: "Day 4",
        title: "Perućica Primeval Forest and Skakavac Waterfall",
        description:
          "Last morning — breakfast and packed lunch preparation. We enter the heart of Perućica primeval forest, one of the last primeval forests in Europe where time seems to have stood still. We pass through trees hundreds of years old to the impressive Skakavac waterfall falling from a height of 75 metres. An unforgettable end to an unforgettable adventure. On return the tour ends — four days, countless memories.",
      },
    ],
    includedBs: ["Vodič tokom cijelog aranžmana", "Sva oprema (rafting + planinarenje)", "Smještaj 3 noći", "Svi obroci", "Svi transferi između lokacija"],
    includedEn: ["Guide throughout the arrangement", "All equipment (rafting + hiking)", "Accommodation 3 nights", "All meals", "All transfers between locations"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje", "Alkohol"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance", "Alcohol"],
    whatToBringBs: [
      "Kupaći kostim",
      "Gojzerice ili planinarsku obuću",
      "Udobne patike",
      "Voda 1.5L u boci",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Hiking boots or trail shoes",
      "Comfortable sneakers",
      "1.5L water bottle",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za planinarenje?",
        answer:
          "Nije potrebno prethodno iskustvo. Naš vodič prilagođava tempo grupe i brine o svim učesnicima tokom cijele ture.",
      },
      {
        question: "Da li ima dobne granice?",
        answer:
          "Minimalna starost za planinarenje i hiking ture je 8 godina uz pratnju roditelja.",
      },
      {
        question: "Koliko traje tura?",
        answer:
          "Zavisno od ture, planinarenje traje između 6 i 8 sati uključujući transport i pauze.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for hiking?",
        answer:
          "No prior experience is required. Our guide adapts the pace to the group and takes care of all participants throughout the tour.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The minimum age for hiking tours is 8 years with parental supervision.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Depending on the tour, hiking lasts between 6 and 8 hours including transport and breaks.",
      },
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
      "Ako želiš da osjetiš pravu čar rijeke Tare, a nemaš puno vremena — jednodnevni rafting je pravi izbor. Kristalno čista voda, uzbudljivi brzaci i netaknuta priroda stvaraju savršenu kombinaciju adrenalina i uživanja. Tokom spusta prolazimo kroz najljepše dijelove kanjona, uz pauze za odmor, kupanje i fotografisanje. Bez obzira da li dolaziš prvi put ili već voliš avanturu — ova tura je prilagođena svima. Uz iskusne skipere i vrhunsku opremu, sigurnost i dobra atmosfera su zagarantovani. Jedan dan. Bezbroj uspomena.",
    longDescriptionEn:
      "Twenty-five kilometres of rafting through the deepest canyon in Europe — the Tara River canyon. Rapids, silence between rapids, crystal clear water and canyon walls rising hundreds of metres above you. This is an experience you live once and never forget. Suitable for all ages, no prior experience required.",
    itineraryBs: [
      {
        time: "Jutro",
        title: "Dolazak i oprema",
        description:
          "Dolazak u kamp, kratko upoznavanje i zaduživanje opreme — prsluk, kaciga, neopren i veslo. Sve je pripremljeno, vi samo stignite. Teretnim vozilima krećemo prema Brštanovici gdje počinje rafting spust.",
      },
      {
        time: "Podne",
        title: "Rafting kroz kanjon Tare",
        description:
          "Spuštamo se kroz najdublji kanjon u Evropi — brzaci, kristalno čista voda, skokovi i kupanje uz pauze na najljepšim mjestima kanjona. Iskusni skipper vodi čamac, vi samo uživajte. Nema žurbe — rijeka diktira tempo.",
      },
      {
        time: "Povratak",
        title: "Ručak i rastanak",
        description:
          "Po završetku spusta čeka nas zasluženi ručak. Nakon ručka tura se završava — jedan dan, bezbroj uspomena.",
      },
    ],
    itineraryEn: [
      {
        time: "Morning",
        title: "Arrival and equipment",
        description:
          "Arrival at camp, brief introduction and gear up — vest, helmet, wetsuit and paddle. Everything is prepared, just show up. We head by truck to Brštanovica where the rafting descent begins.",
      },
      {
        time: "Noon",
        title: "Rafting through Tara Canyon",
        description:
          "We descend through the deepest canyon in Europe — rapids, crystal clear water, jumps and swimming with stops at the most beautiful spots in the canyon. Experienced skipper steers the boat, you just enjoy. No rush — the river sets the pace.",
      },
      {
        time: "Return",
        title: "Lunch and farewell",
        description:
          "After the descent, a well-deserved lunch awaits. After lunch the tour ends — one day, countless memories.",
      },
    ],
    includedBs: ["Vodič", "Rafting oprema (prsluk, kaciga, veslo, neopren po potrebi)", "Ručak uz rijeku", "Transport čamcem nazad"],
    includedEn: ["Guide", "Rafting equipment (vest, helmet, paddle, wetsuit if needed)", "Lunch by the river", "Boat transport back"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Kupaći kostim",
      "Lična dokumenta (pasoš ili lična karta)",
      "Krema za sunce",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Personal documents (passport or ID card)",
      "Sunscreen",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za rafting?",
        answer:
          "Nije potrebno nikakvo prethodno iskustvo. Naši iskusni skiperi vas uvode u sve što trebate znati prije polaska na vodu.",
      },
      {
        question: "Koliko traje rafting?",
        answer: "Rafting spust traje oko 4-5 sati zavisno od vodostaja rijeke i tempa grupe.",
      },
      {
        question: "Da li ima dobne granice za rafting?",
        answer:
          "Minimalna starost za rafting u ljetnom periodu je 6 godina. Za djecu mlađu od 6 godina preporučujemo druge aktivnosti.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for rafting?",
        answer:
          "No prior experience is required. Our experienced skippers introduce you to everything you need to know before heading out on the water.",
      },
      {
        question: "How long does the rafting last?",
        answer:
          "The rafting descent lasts about 4-5 hours depending on the water level and group pace.",
      },
      {
        question: "Is there an age limit for rafting?",
        answer:
          "The minimum age for rafting in summer is 6 years. For children under 6 we recommend other activities.",
      },
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
      {
        time: "Jutro",
        title: "Dolazak i oprema",
        description:
          "Dolazak u kamp, kratko upoznavanje i zaduživanje opreme — prsluk, kaciga i veslo. Teretnim vozilima krećemo prema startnoj tački odakle počinje spust Drinom.",
      },
      {
        time: "Podne",
        title: "Rafting kroz ljepote Drine",
        description:
          "Drina nas vodi kroz prekrasne pejzaže istočne Bosne — mirna i pitoma rijeka savršena za uživanje u prirodi bez previše adrenalina. Zaustavljamo se na najljepšim mjestima, kupamo se i opuštamo. Ko želi, može ponijeti štap za pecanje i okušati sreću uz rijeku — Drina je poznata po bogatom ribljem fondu!",
      },
      {
        time: "Povratak",
        title: "Ručak i rastanak",
        description:
          "Po završetku spusta čeka nas zasluženi ručak. Nakon ručka tura se završava — opušteno, prirodno i nezaboravno.",
      },
    ],
    itineraryEn: [
      {
        time: "Morning",
        title: "Arrival and equipment",
        description:
          "Arrival at camp, brief introduction and gear up — vest, helmet and paddle. We head by truck to the starting point where the Drina descent begins.",
      },
      {
        time: "Noon",
        title: "Rafting through the beauty of Drina",
        description:
          "The Drina takes us through beautiful landscapes of eastern Bosnia — a calm and gentle river perfect for enjoying nature without too much adrenaline. We stop at the most beautiful spots, swim and relax. Those who wish can bring a fishing rod and try their luck — the Drina is well known for its rich fish population!",
      },
      {
        time: "Return",
        title: "Lunch and farewell",
        description:
          "After the descent, a well-deserved lunch awaits. After lunch the tour ends — relaxed, natural and unforgettable.",
      },
    ],
    includedBs: ["Vodič", "Rafting oprema", "Ručak uz rijeku"],
    includedEn: ["Guide", "Rafting equipment", "Lunch by the river"],
    notIncludedBs: ["Transport do Foče", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to Foča", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Kupaći kostim",
      "Lična dokumenta (pasoš ili lična karta)",
      "Krema za sunce",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Swimsuit",
      "Personal documents (passport or ID card)",
      "Sunscreen",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za rafting?",
        answer:
          "Nije potrebno nikakvo prethodno iskustvo. Naši iskusni skiperi vas uvode u sve što trebate znati prije polaska na vodu.",
      },
      {
        question: "Koliko traje rafting?",
        answer: "Rafting spust traje oko 4-5 sati zavisno od vodostaja rijeke i tempa grupe.",
      },
      {
        question: "Da li ima dobne granice za rafting?",
        answer:
          "Minimalna starost za rafting u ljetnom periodu je 6 godina. Za djecu mlađu od 6 godina preporučujemo druge aktivnosti.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for rafting?",
        answer:
          "No prior experience is required. Our experienced skippers introduce you to everything you need to know before heading out on the water.",
      },
      {
        question: "How long does the rafting last?",
        answer:
          "The rafting descent lasts about 4-5 hours depending on the water level and group pace.",
      },
      {
        question: "Is there an age limit for rafting?",
        answer:
          "The minimum age for rafting in summer is 6 years. For children under 6 we recommend other activities.",
      },
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
    durationBs: "2 dana / 1 noć",
    durationEn: "2 days / 1 night",
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
      "Zelengora na način na koji se priroda zaista osjeća — na konju, u potpunom miru i slobodi. Jahanje kroz prostrane livade, planinske staze i netaknutu prirodu pruža potpuno drugačiji doživljaj od klasičnih izleta. Bez buke, bez gužve — samo ti, konj i priroda koja oduzima dah. Zelengora, poznata po svojim jezerima i beskrajnim pejzažima, savršena je za ovakvu vrstu avanture. Tokom ture prolaziš kroz skrivene predjele koje nije moguće doživjeti na drugi način, uz pauze za odmor, fotografisanje i uživanje u tišini prirode. Bez obzira da li si početnik ili imaš iskustva u jahanju, ture su prilagođene svima uz stručne vodiče koji će te uvesti u cijelo iskustvo. Ovo nije samo jahanje. Ovo je povratak prirodi.",
    longDescriptionEn:
      "A unique way to experience Zelengora mountain — on horseback. Trail riding through mountain meadows, past lakes and breathtaking viewpoints. A riding experience in untouched nature, far from the city bustle. Suitable for riding beginners too.",
    itineraryBs: [
      {
        time: "Dan 1",
        title: "Dobrodošli na Tjentište",
        description:
          "Dolazak na Tjentište, smještaj i slobodno vrijeme za odmor i upoznavanje okoline. Uveče nas čeka bogata večera od domaćih specijaliteta uz prijatnu atmosferu i dobro društvo.",
      },
      {
        time: "Dan 2",
        title: "Jahanje Zelengorom — sloboda na konjskom sedlu",
        description:
          "Doručak koji puni energiju i pakovanje lunch paketa. Krećemo prema Zelengori — jednoj od najljepših planina u Bosni i Hercegovini. Na konjskom sedlu prolazimo kroz prostrane planinske livade, uz glacijalna jezera i vidikovce koji oduzimaju dah. Zelengora otkriva svoja skrivena lica samo onima koji je istražuju polako — a nema boljeg načina od jahanja. Pauze za odmor, fotografisanje i uživanje u tišini koja se rijetko pronalazi. Lunch paket uz planinski zrak. Po povratku tura se završava — ali osjećaj slobode na konjskom sedlu ostaje zauvijek.",
      },
    ],
    itineraryEn: [
      {
        time: "Day 1",
        title: "Welcome to Tjentište",
        description:
          "Arrival at Tjentište, accommodation and free time to rest and explore the surroundings. In the evening, a hearty dinner of homemade specialties with a pleasant atmosphere and good company.",
      },
      {
        time: "Day 2",
        title: "Horse riding through Zelengora — freedom in the saddle",
        description:
          "Energy-packed breakfast and packed lunch preparation. We head to Zelengora — one of the most beautiful mountains in Bosnia and Herzegovina. On horseback we pass through vast mountain meadows, past glacial lakes and breathtaking viewpoints. Zelengora reveals its hidden faces only to those who explore it slowly — and there is no better way than on horseback. Stops for rest, photography and enjoying a silence rarely found elsewhere. Packed lunch in the mountain air. On return the tour ends — but the feeling of freedom in the saddle stays forever.",
      },
    ],
    includedBs: ["Vodič i instruktor jahanja", "Konj i sva jahačka oprema", "Kaciga i prsluk", "Piknik užina"],
    includedEn: ["Guide and riding instructor", "Horse and all riding equipment", "Helmet and vest", "Picnic snack"],
    notIncludedBs: ["Transport do polazne tačke", "Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Transport to starting point", "Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Udobne duge pantalone",
      "Zatvorena obuća (ne sandale)",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Comfortable long trousers",
      "Closed footwear (no sandals)",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Trebam li iskustvo u jahanju?",
        answer:
          "Ne, početnici su dobrodošli! Instruktor jahanja vas uvodi u osnove prije polaska na stazu.",
      },
      {
        question: "Da li ima dobne granice za jahanje?",
        answer:
          "Jahanje je prilagođeno svim uzrastima. Za najmlađe učesnike preporučujemo da nas kontaktirate unaprijed.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Do I need riding experience?",
        answer:
          "No, beginners are welcome! The riding instructor introduces you to the basics before heading out on the trail.",
      },
      {
        question: "Is there an age limit for horse riding?",
        answer:
          "Horse riding is suitable for all ages. For the youngest participants we recommend contacting us in advance.",
      },
    ],
    similarTours: ["jeep-safari-sutjeska", "trnovacko-jezero", "perucica-skakavac"],
    groupSizeBs: "2-6 osoba",
    groupSizeEn: "2-6 people",
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
      {
        time: "Jutro",
        title: "Polazak i prevoz do Prijevora",
        description:
          "Okupljanje i polazak iz Foče. Prevozimo vas do Prijevora — početne tačke hajkinga prema Trnovačkom jezeru. Vodič vas uvodi u rutu i sve što vas čeka na putu.",
      },
      {
        time: "Podne",
        title: "Uspon i dolazak na jezero",
        description:
          "Hajking kroz prekrasnu planinsku prirodu prema Trnovačkom jezeru. Kad stignete i ugledate jezero u obliku srca okruženo planinama — znat ćete zašto se isplatilo svaki korak. Kristalno čista tirkizna voda, tišina i prizori koji oduzimaju dah. Kupanje, odmor i lunch paket uz jedno od najljepših jezera u Evropi.",
      },
      {
        time: "Povratak",
        title: "Spust i povratak u Foču",
        description:
          "Spuštamo se istom rutom nazad do Prijevora. Prevoz do Foče gdje se tura završava. Jedan dan, jedna avantura, uspomene za cijeli život.",
      },
    ],
    itineraryEn: [
      {
        time: "Morning",
        title: "Departure and transport to Prijevor",
        description:
          "Gathering and departure from Foča. We transport you to Prijevor — the starting point of the hike to Trnovačko Lake. The guide introduces you to the route and everything that awaits on the way.",
      },
      {
        time: "Noon",
        title: "Ascent and arrival at the lake",
        description:
          "Hiking through beautiful mountain nature towards Trnovačko Lake. When you arrive and see the heart-shaped lake surrounded by mountains — you will know why every step was worth it. Crystal clear turquoise water, silence and breathtaking views. Swimming, rest and packed lunch by one of the most beautiful lakes in Europe.",
      },
      {
        time: "Return",
        title: "Descent and return to Foča",
        description:
          "We descend back the same route to Prijevor. Transport back to Foča where the tour ends. One day, one adventure, memories for a lifetime.",
      },
    ],
    includedBs: [
      "Vodič",
      "Oprema za planinarenje",
      "Prevoz Foča — Prijevor — Foča",
      "Ručak uz jezero",
    ],
    includedEn: [
      "Guide",
      "Hiking equipment",
      "Transport Foča — Prijevor — Foča",
      "Lunch by the lake",
    ],
    notIncludedBs: ["Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Gojzerice ili planinarsku obuću",
      "Udobne patike",
      "Voda 1.5L u boci",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Hiking boots or trail shoes",
      "Comfortable sneakers",
      "1.5L water bottle",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za planinarenje?",
        answer:
          "Nije potrebno prethodno iskustvo. Naš vodič prilagođava tempo grupe i brine o svim učesnicima tokom cijele ture.",
      },
      {
        question: "Da li ima dobne granice?",
        answer:
          "Minimalna starost za planinarenje i hiking ture je 8 godina uz pratnju roditelja.",
      },
      {
        question: "Koliko traje tura?",
        answer:
          "Zavisno od ture, planinarenje traje između 6 i 8 sati uključujući transport i pauze.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for hiking?",
        answer:
          "No prior experience is required. Our guide adapts the pace to the group and takes care of all participants throughout the tour.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The minimum age for hiking tours is 8 years with parental supervision.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Depending on the tour, hiking lasts between 6 and 8 hours including transport and breaks.",
      },
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
      "Doživi netaknutu prirodu kroz obilazak prašume Perućice — jedne od posljednjih prašuma u Evropi, gdje vrijeme kao da je stalo. Tura uključuje i pogled na vodopad Skakavac, visok oko 75 metara, koji se ubraja među najimpresivnije vodopade u regionu. Okružen gustom šumom i divljinom, pruža prizor koji se dugo pamti. Idealno za sve koji žele mir, prirodu i autentično iskustvo daleko od gužve.",
    longDescriptionEn:
      "Perućica Primeval Forest is one of the last primeval forests in Europe and a true natural wonder. Trees hundreds of years old, untouched nature and Skakavac waterfall falling from a height of 75 metres. Visiting this forest is only allowed with an authorised guide, making this trip even more exclusive and special.",
    itineraryBs: [
      {
        time: "Jutro",
        title: "Polazak i prevoz do NP Sutjeska",
        description:
          "Okupljanje i polazak iz Foče. Prevozimo vas do ulaza u Nacionalni park Sutjeska gdje počinje naša avantura. Vodič vas upoznaje sa prašumom Perućicom — jednim od posljednjih netaknutih prirodnih rezervata u Evropi.",
      },
      {
        time: "Podne",
        title: "Šetnja kroz prašumu i vodopad Skakavac",
        description:
          "Ulazimo u srce prašume Perućice gdje vrijeme kao da je stalo. Stabla stara stotinama godina, netaknuta priroda i potpuna tišina stvaraju osjećaj koji se teško opisuje riječima. Pješice se krećemo prema vodopadu Skakavac koji pada sa visine od 75 metara — jedan od najimpresivnijih vodopada u regionu. Pauza za lunch paket uz zvuk vode i šumu koja diše oko nas. Ukupna šetnja traje oko 6 sati.",
      },
      {
        time: "Povratak",
        title: "Povratak u Foču",
        description:
          "Po završetku obilaska vraćamo se do ulaza u park i prevozom do Foče gdje se tura završava. Jedan dan u najstarijoj šumi Evrope — iskustvo koje se ne zaboravlja.",
      },
    ],
    itineraryEn: [
      {
        time: "Morning",
        title: "Departure and transport to NP Sutjeska",
        description:
          "Gathering and departure from Foča. We transport you to the entrance of Sutjeska National Park where our adventure begins. The guide introduces you to Perućica primeval forest — one of the last untouched natural reserves in Europe.",
      },
      {
        time: "Noon",
        title: "Walk through the forest and Skakavac Waterfall",
        description:
          "We enter the heart of Perućica primeval forest where time seems to have stood still. Trees hundreds of years old, untouched nature and complete silence create a feeling that is hard to put into words. We walk to Skakavac waterfall which falls from a height of 75 metres — one of the most impressive waterfalls in the region. Packed lunch break by the sound of water and the breathing forest around us. Total walk is about 6 hours.",
      },
      {
        time: "Return",
        title: "Return to Foča",
        description:
          "After the tour we return to the park entrance and transport back to Foča where the tour ends. One day in Europe's oldest forest — an experience that is never forgotten.",
      },
    ],
    includedBs: [
      "Ovlašteni vodič",
      "Ulaznica za NP Sutjeska",
      "Dozvola za ulaz u prašumu Perućica",
      "Prevoz Foča — NP Sutjeska — Foča",
      "Lunch paket",
    ],
    includedEn: [
      "Authorised guide",
      "NP Sutjeska entrance ticket",
      "Permit for entry to Perućica forest",
      "Transport Foča — NP Sutjeska — Foča",
      "Packed lunch",
    ],
    notIncludedBs: ["Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Gojzerice ili planinarsku obuću",
      "Udobne patike",
      "Voda 1.5L u boci",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Hiking boots or trail shoes",
      "Comfortable sneakers",
      "1.5L water bottle",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Da li je potrebno iskustvo za planinarenje?",
        answer:
          "Nije potrebno prethodno iskustvo. Naš vodič prilagođava tempo grupe i brine o svim učesnicima tokom cijele ture.",
      },
      {
        question: "Da li ima dobne granice?",
        answer:
          "Minimalna starost za planinarenje i hiking ture je 8 godina uz pratnju roditelja.",
      },
      {
        question: "Koliko traje tura?",
        answer:
          "Zavisno od ture, planinarenje traje između 6 i 8 sati uključujući transport i pauze.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is experience required for hiking?",
        answer:
          "No prior experience is required. Our guide adapts the pace to the group and takes care of all participants throughout the tour.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "The minimum age for hiking tours is 8 years with parental supervision.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Depending on the tour, hiking lasts between 6 and 8 hours including transport and breaks.",
      },
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
      {
        time: "Jutro",
        title: "Polazak i ulaz u NP Sutjeska",
        description:
          "Okupljanje u Foči i polazak u terenskim vozilima prema Nacionalnom parku Sutjeska. Već na putu priroda počinje da pokazuje svoje lice — kanjon, rijeka i planine koje se uzdižu sa svih strana. Vodič vas upoznaje sa historijom i prirodnim bogatstvima parka dok se probijamo kroz divljinu.",
      },
      {
        time: "Podne",
        title: "Obilazak — Prijevor, vidikovci i prašuma Perućica",
        description:
          "Prvo zaustavljanje na Prijevoru — početnoj tački hajkinga odakle se pruža pogled koji oduzima dah na kanjon Tare i okolne planine. Nastavljamo do vidikovaca iznad prašume Perućice — jedne od posljednjih prašuma u Evropi. Iz terenskog vozila posmatramo nestvarnu zelenu masu drevnih stabala koja prekriva planinske padine. Svako zaustavljanje otkriva novi prizor, novu perspektivu, novu priču.",
      },
      {
        time: "Poslijepodne",
        title: "Tjentište i Zelengora",
        description:
          "Prolazimo kroz Tjentište — srce Nacionalnog parka, dom čuvenog Spomenika revolucije i polazne tačke za mnoge planinske avanture. Nastavljamo prema Zelengori — planini beskrajnih livada, glacijalnih jezera i panorama koje sežu do horizonta. Off-road stazama prolazimo kroz predjele koje je nemoguće doživjeti na drugi način. Pauza za lunch u krilu prirode, daleko od buke i civilizacije.",
      },
      {
        time: "Povratak",
        title: "Povratak u Foču",
        description:
          "Polako se vraćamo u Foču, punih srca i punih memorijskih kartica. Jeep safari kroz Sutjesku nije samo vožnja — to je putovanje kroz jednu od najočuvanijih prirodnih sredina u Evropi. Tura se završava u Foči.",
      },
    ],
    itineraryEn: [
      {
        time: "Morning",
        title: "Departure and entry into NP Sutjeska",
        description:
          "Gathering in Foča and departure in all-terrain vehicles towards Sutjeska National Park. Already on the way, nature begins to show its face — canyon, river and mountains rising on all sides. The guide introduces you to the history and natural treasures of the park as we push through the wilderness.",
      },
      {
        time: "Noon",
        title: "Tour — Prijevor, viewpoints and Perućica forest",
        description:
          "First stop at Prijevor — the hiking starting point where a breathtaking view of the Tara Canyon and surrounding mountains unfolds. We continue to the viewpoints above Perućica primeval forest — one of the last primeval forests in Europe. From the all-terrain vehicle we observe the incredible green mass of ancient trees covering the mountain slopes. Every stop reveals a new view, a new perspective, a new story.",
      },
      {
        time: "Afternoon",
        title: "Tjentište and Zelengora",
        description:
          "We pass through Tjentište — the heart of the National Park, home of the famous Revolution Monument and starting point for many mountain adventures. We continue towards Zelengora — a mountain of endless meadows, glacial lakes and panoramas stretching to the horizon. Off-road trails take us through landscapes impossible to experience any other way. Lunch break in the lap of nature, far from noise and civilization.",
      },
      {
        time: "Return",
        title: "Return to Foča",
        description:
          "We slowly return to Foča, with full hearts and full memory cards. Jeep safari through Sutjeska is not just a drive — it is a journey through one of the most preserved natural environments in Europe. The tour ends in Foča.",
      },
    ],
    includedBs: [
      "Iskusni vozač-vodič",
      "Terensko vozilo",
      "Ulaznica za NP Sutjeska",
      "Lunch paket",
    ],
    includedEn: [
      "Experienced driver-guide",
      "All-terrain vehicle",
      "NP Sutjeska entrance ticket",
      "Packed lunch",
    ],
    notIncludedBs: ["Lični troškovi", "Putno osiguranje"],
    notIncludedEn: ["Personal expenses", "Travel insurance"],
    whatToBringBs: [
      "Udobna odjeća",
      "Krema za sunce",
      "Lična dokumenta (pasoš ili lična karta)",
      "Fotoaparat ili telefon",
      "Topla jakna (preporučena za proljeće i kasno ljeto)",
    ],
    whatToBringEn: [
      "Comfortable clothing",
      "Sunscreen",
      "Personal documents (passport or ID card)",
      "Camera or phone",
      "Warm jacket (recommended for spring and late summer)",
    ],
    faqBs: [
      {
        question: "Koliko osoba je minimalno potrebno?",
        answer:
          "Minimalan broj učesnika je 4 osobe. Ukoliko ste manja grupa, kontaktirajte nas i pokušat ćemo naći rješenje.",
      },
      {
        question: "Kako se rezerviše tura?",
        answer:
          "Rezervacija se vrši putem WhatsApp poruke ili Instagram poruke. Javite nam se i dogovorimo sve detalje!",
      },
      {
        question: "Šta ako je loše vrijeme?",
        answer:
          "U slučaju lošeg vremena dogovaramo se sa gostima o odgodi ili promjeni termina. Vaša sigurnost i udobnost su nam prioritet.",
      },
      {
        question: "Je li jeep safari prikladan za djecu?",
        answer:
          "Apsolutno! Jeep safari je odličan za cijelu porodicu, uključujući djecu svih uzrasta.",
      },
      {
        question: "Koliko osoba stane u vozilo?",
        answer:
          "4-6 osoba po terenskom vozilu. Za veće grupe organizujemo više vozila.",
      },
    ],
    faqEn: [
      {
        question: "What is the minimum number of people required?",
        answer:
          "The minimum number of participants is 4 people. If you are a smaller group, contact us and we will try to find a solution.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "Booking is done via WhatsApp message or Instagram message. Get in touch and we will arrange all the details!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of bad weather we arrange with guests to postpone or change the date. Your safety and comfort are our priority.",
      },
      {
        question: "Is the jeep safari suitable for children?",
        answer:
          "Absolutely! Jeep safari is great for the whole family, including children of all ages.",
      },
      {
        question: "How many people fit in the vehicle?",
        answer:
          "4-6 people per all-terrain vehicle. For larger groups we organise multiple vehicles.",
      },
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
