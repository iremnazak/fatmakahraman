import type { Localized, Project, ProjectImage, ProjectTypology } from "@/types/content";

const l = (en: string, tr: string): Localized => ({ en, tr });

const designer = l("Designer", "Tasarımcı");
const constructionDesigner = l("Construction Designer", "Uygulama Projesi");
const contractor = l("Contractor", "Yüklenici");
const client = l("Client", "İşveren");
const consultant = l("Consultant", "Danışman");
const designManagement = l("Design Management", "Tasarım Yönetimi");
const projectManagement = l("Project Management", "Proje Yönetimi");
const architect = l("Architecture", "Mimari Ofis");
const contractValue = l("Contract Value", "Sözleşme Bedeli");

function img(
  slug: string,
  file: string,
  width: number,
  height: number,
  alt: Localized,
): ProjectImage {
  return { src: `/images/projects/${slug}/${file}`, width, height, alt };
}

export const typologyLabels: Record<ProjectTypology, Localized> = {
  airport: l("Airport", "Havalimanı"),
  office: l("Office", "Ofis"),
  mixed_use: l("Mixed-Use", "Karma Kullanım"),
  cultural: l("Cultural", "Kültür"),
  hospitality: l("Hospitality", "Otel"),
  residential: l("Residential", "Konut"),
  yacht: l("Yacht Design", "Yat Tasarımı"),
  industrial: l("Industrial", "Endüstriyel"),
  healthcare: l("Healthcare", "Sağlık"),
};

export const projects: Project[] = [
  {
    slug: "istanbul-finance-center-ziraat-bank-hq",
    title: l(
      "Istanbul Finance Center — Ziraat Bank Headquarters",
      "İstanbul Finans Merkezi — Ziraat Bankası Genel Müdürlük Binası",
    ),
    tagline: l("Parametric towers, coordinated in steel", "Çelikle koordine edilen parametrik kuleler"),
    intro: l(
      "Project design management of the Ziraat Bank headquarters towers at the Istanbul Finance Center, coordinating the design and BIM teams from schematic design to steel construction on behalf of the contractor.",
      "İstanbul Finans Merkezi'ndeki Ziraat Bankası Genel Müdürlük kuleleri için yüklenici adına tasarım ve BIM ekiplerinin şematik tasarımdan çelik imalata kadar yönetildiği proje tasarım yönetimi.",
    ),
    narrative: {
      en: [
        "As Director of Design at Kalyon Construction Group headquarters, Fatma directed the design process for the Ziraat Bank headquarters, the anchor towers of the new Istanbul Finance Center designed by Kohn Pedersen Fox Associates.",
        "The twin towers' elliptical, stepped façades demanded a rigorous parametric workflow. Façade geometry was calculated and checked against the structural model, and the steel construction of the auditorium shell, atrium and podium was coordinated in a federated 3D model across architectural, structural and MEP disciplines.",
        "The work covered contract and cost management alongside the direction of the design coordination and BIM teams, ensuring that every issue-for-construction package was resolved before it reached site.",
      ],
      tr: [
        "Kalyon İnşaat Grubu Genel Müdürlüğü'nde Tasarım Direktörü olarak Fatma, Kohn Pedersen Fox Associates tarafından tasarlanan yeni İstanbul Finans Merkezi'nin ana kuleleri olan Ziraat Bankası Genel Müdürlük binasının tasarım sürecini yönetti.",
        "İkiz kulelerin eliptik ve kademeli cepheleri titiz bir parametrik iş akışı gerektirdi. Cephe geometrisi hesaplanarak strüktür modeliyle doğrulandı; oditoryum kabuğu, atrium ve podyumun çelik imalatı mimari, statik ve mekanik-elektrik disiplinleri arasında ortak bir 3B modelde koordine edildi.",
        "Çalışma; tasarım koordinasyon ve BIM ekiplerinin yönetiminin yanı sıra sözleşme ve maliyet yönetimini de kapsadı ve her uygulama paketinin sahaya ulaşmadan önce çözümlenmesini sağladı.",
      ],
    },
    typology: "office",
    location: l("Istanbul, Türkiye", "İstanbul, Türkiye"),
    yearStart: 2020,
    yearEnd: 2022,
    role: l("Director of Design — Project Design Management", "Tasarım Direktörü — Proje Tasarım Yönetimi"),
    company: "Kalyon Construction Group",
    credits: [
      { label: designer, value: "Kohn Pedersen Fox Associates" },
      { label: contractor, value: "Kalyon Construction" },
      { label: client, value: "Ziraat Bank" },
    ],
    thumbnail: img("istanbul-finance-center-ziraat-bank-hq", "01.jpg", 895, 640, l("Lobby of the Ziraat Bank headquarters with the auditorium shell", "Oditoryum kabuğuyla Ziraat Bankası genel müdürlük lobisi")),
    images: [
      img("istanbul-finance-center-ziraat-bank-hq", "01.jpg", 895, 640, l("Lobby with the sculptural auditorium shell", "Heykelsi oditoryum kabuğuyla lobi")),
      img("istanbul-finance-center-ziraat-bank-hq", "02.jpg", 727, 1025, l("The twin towers at night", "Gece ikiz kuleler")),
      img("istanbul-finance-center-ziraat-bank-hq", "03.jpg", 1197, 680, l("Auditorium section — 3D model", "Oditoryum kesiti — 3B model")),
      img("istanbul-finance-center-ziraat-bank-hq", "04.jpg", 1278, 775, l("Podium first floor — coordinated model", "Podyum 1. kat — koordineli model")),
      img("istanbul-finance-center-ziraat-bank-hq", "05.jpg", 1600, 1035, l("Steel construction coordination", "Çelik imalat koordinasyonu")),
      img("istanbul-finance-center-ziraat-bank-hq", "06.jpg", 569, 385, l("Auditorium shell geometry", "Oditoryum kabuğu geometrisi")),
      img("istanbul-finance-center-ziraat-bank-hq", "07.jpg", 1308, 925, l("Parametric façade calculation", "Parametrik cephe hesabı")),
      img("istanbul-finance-center-ziraat-bank-hq", "08.jpg", 857, 764, l("Tower plan geometry", "Kule plan geometrisi")),
      img("istanbul-finance-center-ziraat-bank-hq", "09.jpg", 890, 1536, l("Tower massing", "Kule kütlesi")),
    ],
  },
  {
    slug: "brise-catamaran",
    title: l("Brise Catamaran", "Brise Katamaran"),
    tagline: l("Designed and built on the Bosphorus", "Boğaz'da tasarlandı ve inşa edildi"),
    intro: l(
      "A power catamaran designed and built by Fatma Kahraman for MR Yachting — from concept sketches through construction drawings to launch on the Bosphorus.",
      "MR Yachting için Fatma Kahraman tarafından tasarlanıp inşa edilen bir motorlu katamaran — konsept eskizlerden uygulama çizimlerine ve Boğaz'da denize indirilişine kadar.",
    ),
    narrative: {
      en: [
        "Yacht design has followed Fatma since her first years in practice, when she designed and produced yachts alongside Prof. Dr. Fatih Gorbon. Brise returns to that beginning: a catamaran conceived, detailed and built under her direction for MR Yachting.",
        "The design pairs a dark, low-slung hull with a light teak deck. A wide aft terrace with built-in lounges flows into a glazed saloon, and the foredeck is arranged as a second sunning and dining space. Every element of the exterior and interior — joinery, seating, handrails, glazing — was drawn for construction and followed through the yard.",
      ],
      tr: [
        "Yat tasarımı, Prof. Dr. Fatih Gorbon ile birlikte yat tasarlayıp ürettiği ilk meslek yıllarından bu yana Fatma'nın yanında. Brise bu başlangıca geri dönüyor: MR Yachting için onun yönetiminde tasarlanan, detaylandırılan ve inşa edilen bir katamaran.",
        "Tasarım, koyu ve alçak bir gövdeyi açık renk tik güverteyle eşleştiriyor. Yerleşik oturma gruplarıyla geniş bir kıç terası camlı salona akarken ön güverte ikinci bir güneşlenme ve yemek alanı olarak düzenlendi. Dış ve iç mekânın her öğesi — doğrama, oturma elemanları, korkuluklar, camlar — uygulama için çizildi ve tersanede takip edildi.",
      ],
    },
    typology: "yacht",
    location: l("Bosphorus, Istanbul", "İstanbul Boğazı"),
    yearStart: 2020,
    role: l("Design & Build — Concept Design, Construction Drawings & Construction", "Tasarım ve Yapım — Konsept Tasarım, Uygulama Çizimleri ve İmalat"),
    company: "MR Yachting",
    credits: [
      { label: l("Design & Build", "Tasarım ve Yapım"), value: "Fatma Kahraman" },
      { label: client, value: "MR Yachting" },
    ],
    thumbnail: img("brise-catamaran", "01.jpg", 936, 526, l("Brise under way", "Seyir hâlinde Brise")),
    images: [
      img("brise-catamaran", "01.jpg", 936, 526, l("Brise under way", "Seyir hâlinde Brise")),
      img("brise-catamaran", "02.jpg", 997, 748, l("Brise at night", "Gece Brise")),
      img("brise-catamaran", "03.jpg", 1024, 768, l("Foredeck lounge", "Ön güverte oturma alanı")),
      img("brise-catamaran", "04.jpg", 1024, 562, l("Aft terrace dining", "Kıç terası yemek alanı")),
      img("brise-catamaran", "05.jpg", 816, 612, l("Aft lounge", "Kıç oturma grubu")),
      img("brise-catamaran", "06.jpg", 1024, 768, l("Foredeck", "Ön güverte")),
      img("brise-catamaran", "07.jpg", 677, 903, l("Side deck", "Yan güverte")),
      img("brise-catamaran", "08.jpg", 691, 519, l("Saloon dining table", "Salon yemek masası")),
    ],
  },
  {
    slug: "iga-turkish-airlines-critical-facilities",
    title: l("Istanbul Airport — Turkish Airlines Critical Facilities", "İstanbul Havalimanı — THY Kritik Tesisler"),
    tagline: l("Hangars, cargo and crew — delivered for opening day", "Hangarlar, kargo ve ekip tesisleri — açılış gününe yetiştirildi"),
    intro: l(
      "Design coordination management of Turkish Airlines' critical facilities at the new Istanbul Airport — maintenance hangars, cargo terminal, catering, crew and administration buildings — for contractor Kalyon Construction.",
      "Yeni İstanbul Havalimanı'nda Türk Hava Yolları'nın kritik tesislerinin — bakım hangarları, kargo terminali, ikram, ekip ve idari binalar — yüklenici Kalyon İnşaat adına tasarım koordinasyon yönetimi.",
    ),
    narrative: {
      en: [
        "Turkish Airlines' operational base at the new Istanbul Airport is a campus of large-span and highly technical buildings: the Turkish Technic maintenance hangars, the Turkish Cargo terminal, catering, flight operations and administration blocks. Ghafari Associates led the design with ARUP as design manager and Yüksel Proje as consultant.",
        "Fatma managed the design coordination process with a team of eight to ten, coordinating all subcontractors and resolving interface issues between packages. The team controlled and submitted subcontractor shop drawings, followed planning, estimating and purchasing activities and ran the consultant-to-client approval cycle so that the facilities were ready for the airport's opening.",
      ],
      tr: [
        "Türk Hava Yolları'nın yeni İstanbul Havalimanı'ndaki operasyon üssü, geniş açıklıklı ve teknik yükü ağır binalardan oluşan bir yerleşke: Turkish Technic bakım hangarları, Turkish Cargo terminali, ikram, uçuş operasyon ve idari bloklar. Tasarımı Ghafari Associates yürüttü; ARUP tasarım yöneticisi, Yüksel Proje danışman olarak görev aldı.",
        "Fatma, sekiz-on kişilik bir ekiple tasarım koordinasyon sürecini yönetti; tüm alt yüklenicileri koordine etti ve paketler arasındaki arayüz sorunlarını çözdü. Ekip, alt yüklenici imalat çizimlerini kontrol edip sundu, planlama, metraj ve satın alma faaliyetlerini izledi ve danışmandan işverene onay döngüsünü yürüterek tesislerin havalimanı açılışına hazır olmasını sağladı.",
      ],
    },
    typology: "airport",
    location: l("Istanbul Airport, Türkiye", "İstanbul Havalimanı, Türkiye"),
    yearStart: 2018,
    yearEnd: 2019,
    role: l("Design Coordination Manager", "Tasarım Koordinasyon Müdürü"),
    company: "Kalyon Construction Group",
    credits: [
      { label: designer, value: "Ghafari Associates" },
      { label: designManagement, value: "ARUP" },
      { label: consultant, value: "Yüksel Proje" },
      { label: contractor, value: "Kalyon Construction" },
      { label: client, value: "Turkish Airlines" },
    ],
    thumbnail: img("iga-turkish-airlines-critical-facilities", "01.jpg", 960, 503, l("Turkish Technic maintenance hangar", "Turkish Technic bakım hangarı")),
    images: [
      img("iga-turkish-airlines-critical-facilities", "01.jpg", 960, 503, l("Turkish Technic maintenance hangar", "Turkish Technic bakım hangarı")),
      img("iga-turkish-airlines-critical-facilities", "02.jpg", 1497, 641, l("Administration building", "İdari bina")),
      img("iga-turkish-airlines-critical-facilities", "03.jpg", 1122, 498, l("Entrance canopy", "Giriş saçağı")),
      img("iga-turkish-airlines-critical-facilities", "04.jpg", 987, 434, l("Lobby interior", "Lobi iç mekânı")),
      img("iga-turkish-airlines-critical-facilities", "05.jpg", 1600, 542, l("Flight operations building", "Uçuş operasyon binası")),
      img("iga-turkish-airlines-critical-facilities", "06.jpg", 1533, 682, l("Turkish Cargo terminal", "Turkish Cargo terminali")),
      img("iga-turkish-airlines-critical-facilities", "07.jpg", 1600, 581, l("Catering building", "İkram binası")),
      img("iga-turkish-airlines-critical-facilities", "08.jpg", 1600, 705, l("Hangar steel frame under construction", "İnşaat hâlinde hangar çelik konstrüksiyonu")),
      img("iga-turkish-airlines-critical-facilities", "09.jpg", 1479, 666, l("Crew lounge", "Ekip dinlenme alanı")),
    ],
  },
  {
    slug: "emaar-square",
    title: l("Emaar Square", "Emaar Square"),
    tagline: l("A city within the city, managed from the client's side", "İşveren tarafından yönetilen, şehir içinde bir şehir"),
    intro: l(
      "Senior design management of Emaar Square, Istanbul — residences, offices, The Address Hotel and a 150,000 m² mall — on behalf of the developer, leading the Package 2 contract of five residential towers and the office building.",
      "Emaar Square İstanbul — konutlar, ofisler, The Address Hotel ve 150.000 m² AVM — için geliştirici adına kıdemli tasarım yönetimi; beş konut kulesi ve ofis binasını kapsayan 2. Paket sözleşmesinin liderliği.",
    ),
    narrative: {
      en: [
        "Emaar Square is developed on a 66,000 m² parcel on the Asian side of Istanbul and comprises approximately 1,000 residential units, 48,000 m² of office space, a five-star The Address Hotel and a shopping mall with over 150,000 m² of gross leasable area, a central outdoor square, an underwater zoo and entertainment centres — around 850,000 m² of construction in total.",
        "Working for Emaar Properties PJSC as Senior Design Manager, Fatma led the Package 2 contract covering five residential buildings and the office tower. She managed and coordinated the full project process according to the main contract, took the main design decisions on the client's side and carried cost and contract management through to completion.",
        "Designers included Foster + Partners, Kohn Pedersen Fox, İki Design Group, DP Architects, KTGY and SWA, with TAV-SERA as contractor and TIME-Turner as project manager — a coordination effort spanning masterplan, façades, interiors and amenities such as the residential pools and lobbies.",
      ],
      tr: [
        "Emaar Square, İstanbul'un Anadolu yakasında 66.000 m²'lik bir parsel üzerinde geliştirildi; yaklaşık 1.000 konut, 48.000 m² ofis alanı, beş yıldızlı The Address Hotel, 150.000 m²'yi aşan kiralanabilir alana sahip bir alışveriş merkezi, merkezî açık meydan, sualtı hayvanat bahçesi ve eğlence merkezlerinden oluşuyor — toplamda yaklaşık 850.000 m² inşaat alanı.",
        "Emaar Properties PJSC'de Kıdemli Tasarım Müdürü olarak çalışan Fatma, beş konut binası ve ofis kulesini kapsayan 2. Paket sözleşmesine liderlik etti. Ana sözleşmeye göre tüm proje sürecini yönetip koordine etti, işveren tarafında ana tasarım kararlarını aldı ve maliyet ile sözleşme yönetimini tamamlanana kadar sürdürdü.",
        "Tasarımcılar arasında Foster + Partners, Kohn Pedersen Fox, İki Design Group, DP Architects, KTGY ve SWA yer aldı; yüklenici TAV-SERA, proje yöneticisi TIME-Turner idi — master plandan cephelere, iç mekânlardan konut havuzları ve lobiler gibi olanaklara uzanan bir koordinasyon çalışması.",
      ],
    },
    typology: "mixed_use",
    location: l("Istanbul, Türkiye", "İstanbul, Türkiye"),
    yearStart: 2014,
    yearEnd: 2018,
    role: l("Senior Design Manager — Leader of Package 2 Contract", "Kıdemli Tasarım Müdürü — 2. Paket Sözleşme Lideri"),
    company: "Emaar Properties PJSC — Emaar Turkey",
    credits: [
      { label: designer, value: "Foster + Partners, Kohn Pedersen Fox, İki Design Group, DP Architects, KTGY, SWA" },
      { label: contractor, value: "TAV-SERA Construction" },
      { label: projectManagement, value: "TIME-Turner" },
      { label: client, value: "Emaar Properties PJSC" },
    ],
    facts: [
      { label: l("Site", "Arsa"), value: l("66,000 m²", "66.000 m²") },
      { label: l("Construction Area", "İnşaat Alanı"), value: l("≈ 850,000 m²", "≈ 850.000 m²") },
      { label: l("Residential", "Konut"), value: l("≈ 1,000 units", "≈ 1.000 ünite") },
      { label: l("Retail GLA", "Kiralanabilir Alan"), value: l("150,000 m²", "150.000 m²") },
    ],
    thumbnail: img("emaar-square", "01.jpg", 1148, 586, l("The central square", "Merkezî meydan")),
    images: [
      img("emaar-square", "01.jpg", 1148, 586, l("The central square", "Merkezî meydan")),
      img("emaar-square", "02.jpg", 1124, 738, l("Residential blocks around the square", "Meydanı çevreleyen konut blokları")),
      img("emaar-square", "03.jpg", 1600, 900, l("The Address Hotel and residential towers", "The Address Hotel ve konut kuleleri")),
      img("emaar-square", "04.jpg", 1600, 900, l("Mall interior — tree columns", "AVM iç mekânı — ağaç kolonlar")),
      img("emaar-square", "05.jpg", 960, 720, l("Tree column under construction", "İnşaat hâlinde ağaç kolon")),
      img("emaar-square", "06.jpg", 1600, 900, l("Retail street", "Alışveriş caddesi")),
      img("emaar-square", "07.jpg", 1600, 900, l("Residential courtyard", "Konut avlusu")),
      img("emaar-square", "08.jpg", 1600, 900, l("Office building entrance", "Ofis binası girişi")),
      img("emaar-square", "09.jpg", 1100, 733, l("Residential indoor pool", "Konut kapalı havuzu")),
      img("emaar-square", "10.jpg", 1064, 547, l("Pool hall with arched windows", "Kemerli pencereli havuz salonu")),
      img("emaar-square", "11.jpg", 1059, 596, l("Residence living room", "Rezidans oturma odası")),
      img("emaar-square", "12.jpg", 977, 581, l("Residential lobby", "Konut lobisi")),
      img("emaar-square", "13.jpg", 1064, 547, l("Residence interior", "Rezidans iç mekânı")),
      img("emaar-square", "14.jpg", 1500, 878, l("Masterplan", "Master plan")),
      img("emaar-square", "15.jpg", 1536, 1136, l("Package 2 — elevation", "2. Paket — görünüş")),
      img("emaar-square", "16.jpg", 1212, 534, l("Coordinated BIM model", "Koordineli BIM modeli")),
    ],
  },
  {
    slug: "ashgabat-international-airport",
    title: l("Ashgabat International Airport", "Aşkabat Uluslararası Havalimanı"),
    tagline: l("A falcon in flight, coordinated across 34 specialists", "34 uzmanla koordine edilen, uçan bir şahin"),
    intro: l(
      "Project coordination of the new Ashgabat International Airport — a 150,000 m² terminal for 14 million passengers — managing the main designer, construction designers and an architectural coordination group of 34 for contractor Polimeks.",
      "Yeni Aşkabat Uluslararası Havalimanı'nın — 14 milyon yolcu için 150.000 m²'lik terminal — proje koordinasyonu; yüklenici Polimeks adına ana tasarımcı, uygulama tasarımcıları ve 34 kişilik mimari koordinasyon grubunun yönetimi.",
    ),
    narrative: {
      en: [
        "The new Ashgabat International Airport was built to replace the existing facilities and respond to Turkmenistan's rapidly growing domestic and international passenger traffic. Inspired by the national symbols of Turkmenistan, the terminal hosts 14 million passengers a year to IATA Class A standards, with an enclosed area of approximately 150,000 m² and 24 bridged gates.",
        "As Project Coordinator for Polimeks Construction, Fatma managed and coordinated all design stages according to the client's requirements, directing the main designer NACO and the construction designers Tekeli-Sisa and Turgut Alton Architects. She led the Architectural Coordination Group of eight project managers and 26 project chiefs and specialists, followed planning, estimating, administrative and purchasing activities with the coordination group, and ran the consultant approval cycle with ILF and the State Civil Aviation Department.",
      ],
      tr: [
        "Yeni Aşkabat Uluslararası Havalimanı, mevcut tesislerin yerini almak ve Türkmenistan'ın hızla büyüyen iç ve dış hat yolcu trafiğine yanıt vermek üzere inşa edildi. Türkmenistan'ın ulusal sembollerinden ilham alan terminal, yaklaşık 150.000 m² kapalı alanı ve 24 köprülü kapısıyla yılda 14 milyon yolcuyu IATA A Sınıfı standartlarında ağırlıyor.",
        "Polimeks İnşaat'ta Proje Koordinatörü olarak Fatma, işveren gereksinimleri doğrultusunda tüm tasarım aşamalarını yönetip koordine etti; ana tasarımcı NACO ile uygulama tasarımcıları Tekeli-Sisa ve Turgut Alton Mimarlık'ı yönlendirdi. Sekiz proje müdürü ile 26 proje şefi ve uzmandan oluşan Mimari Koordinasyon Grubu'na liderlik etti, planlama, metraj, idari ve satın alma faaliyetlerini koordinasyon grubuyla izledi ve ILF ile Devlet Sivil Havacılık Dairesi'yle onay döngüsünü yürüttü.",
      ],
    },
    typology: "airport",
    location: l("Ashgabat, Turkmenistan", "Aşkabat, Türkmenistan"),
    yearStart: 2013,
    yearEnd: 2014,
    role: l("Project Coordinator — Project Management, Project Engineering & Coordination", "Proje Koordinatörü — Proje Yönetimi, Proje Mühendisliği ve Koordinasyon"),
    company: "Polimeks Construction",
    credits: [
      { label: designer, value: "NACO — Netherlands Airport Consultants" },
      { label: constructionDesigner, value: "Tekeli-Sisa Architects, Turgut Alton Architects" },
      { label: consultant, value: "ILF Airport Consulting Partners" },
      { label: contractor, value: "Polimeks Construction (Design & Build)" },
      { label: client, value: "Turkmenhowayollary — State Civil Aviation Department" },
      { label: contractValue, value: "2.35 billion USD" },
    ],
    facts: [
      { label: l("Terminal Area", "Terminal Alanı"), value: l("≈ 150,000 m²", "≈ 150.000 m²") },
      { label: l("Capacity", "Kapasite"), value: l("14 million passengers / year", "Yılda 14 milyon yolcu") },
      { label: l("Gates", "Kapılar"), value: l("24 bridged gates", "24 köprülü kapı") },
    ],
    thumbnail: img("ashgabat-international-airport", "01.jpg", 1600, 788, l("Passenger terminal", "Yolcu terminali")),
    images: [
      img("ashgabat-international-airport", "01.jpg", 1600, 788, l("Passenger terminal", "Yolcu terminali")),
      img("ashgabat-international-airport", "02.jpg", 1252, 751, l("Terminal approach", "Terminal yaklaşımı")),
      img("ashgabat-international-airport", "03.jpg", 1468, 627, l("Cargo terminal", "Kargo terminali")),
      img("ashgabat-international-airport", "04.jpg", 1600, 586, l("Aircraft maintenance hangar", "Uçak bakım hangarı")),
      img("ashgabat-international-airport", "05.jpg", 1328, 662, l("Flight and cabin crew training building", "Uçuş ve kabin ekibi eğitim binası")),
      img("ashgabat-international-airport", "06.jpg", 727, 454, l("Rescue and fire fighting building", "Kurtarma ve yangınla mücadele binası")),
    ],
  },
  {
    slug: "muscat-international-airport",
    title: l("Muscat International Airport — Passenger Terminal", "Maskat Uluslararası Havalimanı — Yolcu Terminali"),
    tagline: l("332,000 m² of terminal, drawn for construction", "Uygulama için çizilen 332.000 m² terminal"),
    intro: l(
      "Design management of the interior architecture group for the new Muscat International Airport passenger terminal — a 332,000 m² building for 12 million passengers — within the Bechtel-ENKA-Bahwan design-and-build joint venture.",
      "Bechtel-ENKA-Bahwan tasarla-yap ortaklığı bünyesinde, yeni Maskat Uluslararası Havalimanı yolcu terminali — 12 milyon yolcu için 332.000 m²'lik bir yapı — iç mimari grubunun tasarım yönetimi.",
    ),
    narrative: {
      en: [
        "Oman awarded the 1.8 billion USD main contract for the new terminal at Muscat International Airport to a joint venture of Bechtel, ENKA and Bahwan Contracting. At 460 metres long and 200 metres wide, the 332,000 m² terminal triples the airport's capacity to 12 million passengers a year and includes a 90-room four-star hotel.",
        "Fatma managed the interior architecture group of thirteen, preparing design development and issue-for-construction drawings against the tender documents of main designer Cowi-Larsen JV. The check-in hall's tree columns, the curved 'decorative portal' ceilings and the departures interiors were each detailed in plan, section and elevation and coordinated with the structural and MEP disciplines.",
        "The project ran on a coordinated BIM model that tied together the procurement, interface management, planning, fire engineering, RFI, RDS, architectural design and detail groups — an early, large-scale application of model-based coordination on a Design & Build airport.",
      ],
      tr: [
        "Umman, Maskat Uluslararası Havalimanı'ndaki yeni terminalin 1,8 milyar USD'lik ana sözleşmesini Bechtel, ENKA ve Bahwan Contracting ortak girişimine verdi. 460 metre uzunluğunda ve 200 metre genişliğindeki 332.000 m²'lik terminal, havalimanının kapasitesini üç katına çıkararak yılda 12 milyon yolcuya taşıyor ve 90 odalı dört yıldızlı bir otel içeriyor.",
        "Fatma, on üç kişilik iç mimari grubunu yöneterek ana tasarımcı Cowi-Larsen JV'nin ihale dokümanlarına göre kesin proje ve uygulama çizimlerini hazırladı. Check-in salonunun ağaç kolonları, kavisli 'dekoratif portal' tavanları ve gidiş katı iç mekânları plan, kesit ve görünüşte detaylandırılarak statik ve mekanik-elektrik disiplinleriyle koordine edildi.",
        "Proje; satın alma, arayüz yönetimi, planlama, yangın mühendisliği, RFI, RDS, mimari tasarım ve detay gruplarını birbirine bağlayan koordineli bir BIM modeli üzerinde yürütüldü — tasarla-yap bir havalimanında model tabanlı koordinasyonun erken ve büyük ölçekli bir uygulaması.",
      ],
    },
    typology: "airport",
    location: l("Muscat, Sultanate of Oman", "Maskat, Umman Sultanlığı"),
    yearStart: 2011,
    yearEnd: 2013,
    role: l("Design Manager, Interior / Senior Architect", "Tasarım Müdürü, İç Mimari / Kıdemli Mimar"),
    company: "Bechtel ENKA Bahwan JV",
    credits: [
      { label: designer, value: "Cowi-Larsen JV" },
      { label: constructionDesigner, value: "ENKA — Bahwan Engineering — Bechtel Engineering" },
      { label: consultant, value: "ADPI" },
      { label: contractor, value: "Bechtel-ENKA-Bahwan JV (Design & Build)" },
      { label: client, value: "OAMC — Oman Airport Management Company" },
      { label: contractValue, value: "1.8 billion USD (Passenger Terminal Building)" },
    ],
    facts: [
      { label: l("Terminal Area", "Terminal Alanı"), value: l("332,000 m²", "332.000 m²") },
      { label: l("Capacity", "Kapasite"), value: l("12 million passengers / year", "Yılda 12 milyon yolcu") },
      { label: l("Footprint", "Oturum"), value: l("460 m × 200 m", "460 m × 200 m") },
    ],
    thumbnail: img("muscat-international-airport", "01.jpg", 700, 394, l("Check-in hall with tree columns", "Ağaç kolonlu check-in salonu")),
    images: [
      img("muscat-international-airport", "01.jpg", 700, 394, l("Check-in hall with tree columns", "Ağaç kolonlu check-in salonu")),
      img("muscat-international-airport", "02.jpg", 869, 470, l("Terminal at night", "Gece terminal")),
      img("muscat-international-airport", "03.jpg", 770, 502, l("Check-in counters", "Check-in bankoları")),
      img("muscat-international-airport", "04.jpg", 699, 489, l("Escalator hall", "Yürüyen merdiven holü")),
      img("muscat-international-airport", "05.jpg", 806, 448, l("Arrivals hall", "Geliş salonu")),
      img("muscat-international-airport", "06.jpg", 1042, 563, l("Departures concourse", "Gidiş katı")),
      img("muscat-international-airport", "07.jpg", 1024, 683, l("Roof structure under construction", "İnşaat hâlinde çatı strüktürü")),
      img("muscat-international-airport", "08.jpg", 979, 516, l("Aerial view of the site", "Şantiyenin havadan görünüşü")),
      img("muscat-international-airport", "09.jpg", 980, 602, l("Tree column erection", "Ağaç kolon montajı")),
      img("muscat-international-airport", "10.jpg", 960, 480, l("BIM model of the terminal", "Terminalin BIM modeli")),
      img("muscat-international-airport", "11.jpg", 1540, 1079, l("Column head details — check-in hall", "Kolon başlığı detayları — check-in salonu")),
      img("muscat-international-airport", "12.jpg", 1571, 1062, l("Decorative portal — section", "Dekoratif portal — kesit")),
      img("muscat-international-airport", "13.jpg", 934, 645, l("Coordinated BIM model diagram", "Koordineli BIM modeli şeması")),
    ],
  },
  {
    slug: "qatar-national-convention-centre",
    title: l("Qatar National Convention Centre", "Katar Ulusal Kongre Merkezi"),
    tagline: l("Isozaki's Sidra tree, resolved for construction", "Isozaki'nin Sidra ağacı, uygulama için çözümlendi"),
    intro: l(
      "Lead architect and project coordinator for the construction documents of Arata Isozaki's Qatar National Convention Centre in Education City, Doha — interdisciplinary coordination and shop drawing review in the contractor's site office.",
      "Arata Isozaki'nin Doha Education City'deki Katar Ulusal Kongre Merkezi'nin uygulama projeleri için proje koordinatörü ve baş mimar — yüklenicinin şantiye ofisinde disiplinler arası koordinasyon ve imalat çizimi kontrolü.",
    ),
    narrative: {
      en: [
        "The Qatar National Convention Centre, designed by Arata Isozaki with Yamasaki and RSA as construction designers, is the 120,000 m² centrepiece of Qatar Foundation's Education City. Its Sidra-tree façade structure spans the entrance, and the building provides a 2,500-seat auditorium, a 500-seat theatre, a multi-purpose hall for up to 4,000 people, an exhibition hall and facilities for major functions. The Design & Build contract with Baytur was valued at approximately 615.9 million USD.",
        "Working from Baytur's Doha site office on behalf of Turgut Alton Architects, Fatma managed the multi-disciplinary coordination of the design and construction teams — architectural, structural, MEP and theatre engineering — producing the issue-for-construction project and reviewing subcontractor shop drawings against it.",
      ],
      tr: [
        "Arata Isozaki'nin tasarladığı, uygulama tasarımını Yamasaki ve RSA'nın üstlendiği Katar Ulusal Kongre Merkezi, Qatar Foundation'ın Education City yerleşkesinin 120.000 m²'lik odak yapısı. Sidra ağacı formundaki cephe strüktürü girişi sararken bina 2.500 kişilik oditoryum, 500 kişilik tiyatro, 4.000 kişiye kadar çok amaçlı salon, sergi holü ve büyük etkinlik olanakları sunuyor. Baytur ile imzalanan tasarla-yap sözleşmesi yaklaşık 615,9 milyon USD değerindeydi.",
        "Baytur'un Doha şantiye ofisinde Turgut Alton Mimarlık adına çalışan Fatma; mimari, statik, mekanik-elektrik ve tiyatro mühendisliği disiplinlerini kapsayan tasarım ve yapım ekiplerinin çok disiplinli koordinasyonunu yöneterek uygulama projesini üretti ve alt yüklenici imalat çizimlerini bu projeye göre kontrol etti.",
      ],
    },
    typology: "cultural",
    location: l("Doha, Qatar", "Doha, Katar"),
    yearStart: 2009,
    yearEnd: 2010,
    role: l("Project Coordinator / Lead Architect — Construction Project, Interdisciplinary Coordination, Shop Drawing Review", "Proje Koordinatörü / Baş Mimar — Uygulama Projesi, Disiplinler Arası Koordinasyon, İmalat Çizimi Kontrolü"),
    company: "Turgut Alton Architects (TAM)",
    credits: [
      { label: designer, value: "Arata Isozaki" },
      { label: constructionDesigner, value: "Yamasaki, RSA" },
      { label: consultant, value: "KEO Consultant" },
      { label: contractor, value: "Baytur Construction (Design & Build)" },
      { label: client, value: "Qatar Petroleum — Qatar Foundation" },
      { label: contractValue, value: "≈ 615.9 million USD" },
    ],
    facts: [
      { label: l("Area", "Alan"), value: l("120,000 m²", "120.000 m²") },
      { label: l("Auditorium", "Oditoryum"), value: l("2,500 seats", "2.500 koltuk") },
      { label: l("Multi-Purpose Hall", "Çok Amaçlı Salon"), value: l("up to 4,000 seats", "4.000 koltuğa kadar") },
    ],
    thumbnail: img("qatar-national-convention-centre", "01.jpg", 1000, 665, l("The Sidra tree entrance structure", "Sidra ağacı giriş strüktürü")),
    images: [
      img("qatar-national-convention-centre", "01.jpg", 1000, 665, l("The Sidra tree entrance structure", "Sidra ağacı giriş strüktürü")),
      img("qatar-national-convention-centre", "02.jpg", 1000, 665, l("Under the entrance canopy", "Giriş saçağının altı")),
      img("qatar-national-convention-centre", "03.jpg", 1000, 665, l("Main auditorium", "Ana oditoryum")),
      img("qatar-national-convention-centre", "04.jpg", 1000, 665, l("Foyer", "Fuaye")),
      img("qatar-national-convention-centre", "05.jpg", 650, 661, l("Perforated façade panels", "Delikli cephe panelleri")),
      img("qatar-national-convention-centre", "06.jpg", 984, 761, l("Exhibition hall", "Sergi holü")),
      img("qatar-national-convention-centre", "07.jpg", 1536, 685, l("Auditorium from the stage", "Sahneden oditoryum")),
      img("qatar-national-convention-centre", "08.jpg", 900, 377, l("Approach elevation", "Yaklaşım görünüşü")),
      img("qatar-national-convention-centre", "09.jpg", 1235, 750, l("Escalator hall", "Yürüyen merdiven holü")),
    ],
  },
  {
    slug: "bodrum-holiday-village",
    title: l("Bodrum Holiday Village", "Bodrum Tatil Köyü"),
    tagline: l("Stone houses stepping down to the sea", "Denize doğru kademelenen taş evler"),
    intro: l(
      "Lead design architect for a holiday village on the Bodrum peninsula — terraced stone houses and pools set into a wooded hillside above the bay.",
      "Bodrum yarımadasında bir tatil köyü için baş tasarım mimarı — koyun üzerindeki ormanlık yamaca yerleşen teraslı taş evler ve havuzlar.",
    ),
    narrative: {
      en: [
        "The village is arranged along the contours of a steep, pine-covered site, with clusters of two-storey stone houses stepping down towards a shared beach and marina. Each cluster is organised around a linked chain of pools, and the section allows every house a terrace and a view of the bay.",
        "Fatma led the architectural design at TAM Architects, from masterplan and typologies through to the construction documents — plans, sections and the long site elevation that ties the terraces together.",
      ],
      tr: [
        "Köy, dik ve çam kaplı bir arazinin eğrileri boyunca düzenlendi; iki katlı taş ev kümeleri ortak plaj ve marinaya doğru kademeleniyor. Her küme birbirine bağlı havuz zinciri etrafında kurgulandı ve kesit, her eve bir teras ve koy manzarası sağlıyor.",
        "Fatma, TAM Mimarlık'ta master plan ve tipolojilerden uygulama projelerine — planlar, kesitler ve terasları birbirine bağlayan uzun vaziyet görünüşü — kadar mimari tasarımı yönetti.",
      ],
    },
    typology: "hospitality",
    location: l("Bodrum, Muğla", "Bodrum, Muğla"),
    yearStart: 2008,
    role: l("Lead Design Architect", "Baş Tasarım Mimarı"),
    company: "TAM Architects",
    credits: [{ label: architect, value: "TAM Architects — Turgut Alton" }],
    thumbnail: img("bodrum-holiday-village", "01.jpg", 904, 646, l("Stone houses with timber pergolas", "Ahşap pergolalı taş evler")),
    images: [
      img("bodrum-holiday-village", "01.jpg", 904, 646, l("Stone houses with timber pergolas", "Ahşap pergolalı taş evler")),
      img("bodrum-holiday-village", "02.jpg", 911, 557, l("Houses around the pool", "Havuz çevresindeki evler")),
      img("bodrum-holiday-village", "03.jpg", 828, 690, l("Site masterplan — watercolour", "Vaziyet planı — suluboya")),
      img("bodrum-holiday-village", "04.jpg", 991, 655, l("Cluster plan", "Küme planı")),
      img("bodrum-holiday-village", "05.jpg", 606, 214, l("Site section", "Arazi kesiti")),
    ],
  },
  {
    slug: "park-hotel-residences",
    title: l("Park Hotel Residences & Apart Hotel", "Park Hotel Rezidans ve Apart Otel"),
    tagline: l("A stepped façade on the Beyoğlu skyline", "Beyoğlu siluetinde kademeli bir cephe"),
    intro: l(
      "Lead architect for the concept, façade design and construction project of an 89,000 m² residence and apart-hotel complex on the historic ridge of Beyoğlu, Istanbul.",
      "İstanbul Beyoğlu'nun tarihî sırtında 89.000 m²'lik rezidans ve apart otel kompleksinin konsept, cephe tasarımı ve uygulama projesi için baş mimar.",
    ),
    narrative: {
      en: [
        "Standing on the site of the former Park Hotel above the Bosphorus, the complex terraces its mass down the slope in a series of set-backs, planted roof gardens and articulated bays that answer the scale of the surrounding nineteenth-century fabric.",
        "At TAM Architects Fatma led the concept design and the façade design, and prepared the design development and construction project for the residence blocks and apart-hotel.",
      ],
      tr: [
        "Boğaz'ın üzerindeki eski Park Otel arsasında yükselen kompleks, kütlesini yamaç boyunca geri çekmeler, bitkilendirilmiş çatı bahçeleri ve çevredeki on dokuzuncu yüzyıl dokusunun ölçeğine yanıt veren hareketli cumbalarla kademelendiriyor.",
        "TAM Mimarlık'ta Fatma konsept tasarım ile cephe tasarımına liderlik etti; rezidans blokları ve apart otel için kesin ve uygulama projelerini hazırladı.",
      ],
    },
    typology: "residential",
    location: l("Beyoğlu, Istanbul", "Beyoğlu, İstanbul"),
    yearStart: 2007,
    role: l("Lead Architect — Concept Design, Façade Design & Construction Project", "Baş Mimar — Konsept Tasarım, Cephe Tasarımı ve Uygulama Projesi"),
    company: "TAM Architects",
    credits: [{ label: architect, value: "TAM Architects — Turgut Alton" }],
    facts: [{ label: l("Area", "Alan"), value: l("89,000 m²", "89.000 m²") }],
    thumbnail: img("park-hotel-residences", "01.jpg", 975, 564, l("Hotel entrance", "Otel girişi")),
    images: [
      img("park-hotel-residences", "01.jpg", 975, 564, l("Hotel entrance", "Otel girişi")),
      img("park-hotel-residences", "02.jpg", 469, 669, l("Terraced roof gardens", "Teraslı çatı bahçeleri")),
      img("park-hotel-residences", "03.jpg", 1006, 514, l("South elevation", "Güney görünüşü")),
      img("park-hotel-residences", "04.jpg", 1314, 661, l("The complex in the Beyoğlu skyline", "Beyoğlu siluetinde kompleks")),
    ],
  },
  {
    slug: "atik-pasha-four-seasons-hotel",
    title: l("Atik Pasha — Four Seasons Hotel Bosphorus", "Atik Paşa — Four Seasons Hotel Bosphorus"),
    tagline: l("A palace on the Bosphorus, renewed", "Boğaz'da yenilenen bir saray"),
    intro: l(
      "Lead design architect for the restoration and extension of the historic Atik Pasha palace into the 170-key Four Seasons Hotel on the Bosphorus.",
      "Tarihî Atik Paşa sarayının 170 anahtarlı Four Seasons Hotel Bosphorus'a dönüştürülmesi için restorasyon ve ek yapı tasarımının baş mimarı.",
    ),
    narrative: {
      en: [
        "The historic palace was renovated keeping the existing external walls, following the original planning scheme on the ground floor and returning the roof to its original slope, with attic rooms set within it. Two new bedroom blocks are handled with a contemporary approach and light materials so as not to compete with the old building.",
        "The hotel provides 170 keys — 137 standard rooms, 16 Four Seasons suites, 12 suites and a presidential suite — with a 500-seat ballroom, a 110-seat junior ballroom, meeting rooms, a 200-seat restaurant and an 850 m² spa. At TAM Architects Fatma led the design and the multi-disciplinary coordination of all construction documents.",
      ],
      tr: [
        "Tarihî saray, mevcut dış duvarlar korunarak, zemin katta özgün plan şemasına sadık kalınarak ve çatı özgün eğimine döndürülüp içine çatı arası odalar yerleştirilerek yenilendi. İki yeni yatak odası bloğu, eski yapıyla rekabet etmemek için hafif malzemelerle çağdaş bir yaklaşımla ele alındı.",
        "Otel 170 anahtar sunuyor — 137 standart oda, 16 Four Seasons süiti, 12 süit ve bir başkanlık süiti — ayrıca 500 kişilik balo salonu, 110 kişilik junior balo salonu, toplantı odaları, 200 kişilik restoran ve 850 m² spa. TAM Mimarlık'ta Fatma tasarıma ve tüm uygulama projelerinin çok disiplinli koordinasyonuna liderlik etti.",
      ],
    },
    typology: "hospitality",
    location: l("Beşiktaş, Istanbul", "Beşiktaş, İstanbul"),
    yearStart: 2001,
    yearEnd: 2004,
    role: l("Lead Design Architect — Multi-disciplinary Coordination, Construction Documents", "Baş Tasarım Mimarı — Çok Disiplinli Koordinasyon, Uygulama Projeleri"),
    company: "TAM Architects",
    credits: [
      { label: architect, value: "TAM Architects — Turgut Alton" },
      { label: l("Operator", "İşletmeci"), value: "Four Seasons Hotels and Resorts" },
    ],
    facts: [
      { label: l("Area", "Alan"), value: l("32,000 m²", "32.000 m²") },
      { label: l("Keys", "Oda"), value: l("170 keys", "170 anahtar") },
      { label: l("Ballroom", "Balo Salonu"), value: l("500 seats", "500 kişi") },
    ],
    thumbnail: img("atik-pasha-four-seasons-hotel", "01.jpg", 889, 635, l("The restored palace façade", "Restore edilen saray cephesi")),
    images: [
      img("atik-pasha-four-seasons-hotel", "01.jpg", 889, 635, l("The restored palace façade", "Restore edilen saray cephesi")),
      img("atik-pasha-four-seasons-hotel", "02.jpg", 791, 452, l("Pool terrace on the Bosphorus", "Boğaz kıyısında havuz terası")),
      img("atik-pasha-four-seasons-hotel", "03.jpg", 984, 648, l("Suite living room", "Süit oturma odası")),
      img("atik-pasha-four-seasons-hotel", "04.jpg", 981, 645, l("Guest room", "Misafir odası")),
      img("atik-pasha-four-seasons-hotel", "05.jpg", 608, 425, l("Bathroom with Bosphorus view", "Boğaz manzaralı banyo")),
      img("atik-pasha-four-seasons-hotel", "06.jpg", 990, 465, l("Pool and cabanas", "Havuz ve kabinler")),
      img("atik-pasha-four-seasons-hotel", "07.jpg", 876, 337, l("Watercolour elevation from the Bosphorus", "Boğaz'dan suluboya görünüş")),
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: projects[index - 1],
    next: projects[index + 1] ?? projects[0],
  };
}
