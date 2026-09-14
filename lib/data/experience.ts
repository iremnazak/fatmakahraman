import type { Credential, Localized, Position } from "@/types/content";

const l = (en: string, tr: string): Localized => ({ en, tr });

export const positions: Position[] = [
  {
    id: "envesu",
    title: l("Design Coordinator", "Tasarım Koordinatörü"),
    company: "Envesu Project Management Co.",
    location: l("Istanbul", "İstanbul"),
    yearStart: 2024,
    yearEnd: null,
    summary: l(
      "Design management, construction management, value engineering and contract management for OYAK's new Tamek & Sagra food factories — all design phases from preliminary design to construction and tender documents, with construction supervision, contract and procurement management. From 2026, design and construction-phase consultancy for 22 family health centres (ASM) and full project design for a further 12 units for Halk GYO on behalf of the Ministry of Health.",
      "OYAK'ın yeni Tamek ve Sagra gıda fabrikaları için tasarım yönetimi, yapım yönetimi, değer mühendisliği ve sözleşme yönetimi — ön projeden uygulama projesi ve ihale dokümanlarına kadar tüm tasarım aşamaları, yapım denetimi, sözleşme ve satın alma yönetimi. 2026'dan itibaren Sağlık Bakanlığı adına Halk GYO için 22 Aile Sağlığı Merkezi'nin tasarım ve yapım aşaması danışmanlığı ile 12 ünitenin tam proje tasarımı.",
    ),
    projects: [
      l("OYAK — Tamek & Sagra Group Food Co. New Factories, 2024–", "OYAK — Tamek ve Sagra Grubu Yeni Fabrikaları, 2024–"),
      l("ASM — Family Health Centres, Halk GYO / Ministry of Health, 2026–", "ASM — Aile Sağlığı Merkezleri, Halk GYO / Sağlık Bakanlığı, 2026–"),
    ],
  },
  {
    id: "optimal",
    title: l("Project Manager — Project Consultancy for Special Projects", "Proje Müdürü — Özel Projeler Danışmanlığı"),
    company: "Optimal Project Management Co.",
    location: l("Istanbul", "İstanbul"),
    yearStart: 2022,
    yearEnd: 2024,
    summary: l(
      "Contract management, design management and site management of a private house on the Bosphorus, designed by architect Ahmet Alataş with interiors by Pierre Yovanovitch.",
      "Mimar Ahmet Alataş'ın tasarladığı, iç mekânları Pierre Yovanovitch imzalı Boğaz'daki özel konutun sözleşme, tasarım ve şantiye yönetimi.",
    ),
    projects: [l("Private House at the Bosphorus, 2022–2024", "Boğaz'da Özel Konut, 2022–2024")],
  },
  {
    id: "kalyon-hq",
    title: l("Director of Design", "Tasarım Direktörü"),
    company: "Kalyon Construction Group — Headquarters",
    location: l("Istanbul", "İstanbul"),
    yearStart: 2020,
    yearEnd: 2022,
    summary: l(
      "Project management and design direction of all construction and investment projects of the group; management of the design & coordination team and the BIM team; contract and cost management.",
      "Grubun tüm yapım ve yatırım projelerinin proje yönetimi ve tasarım yönlendirmesi; tasarım-koordinasyon ekibi ile BIM ekibinin yönetimi; sözleşme ve maliyet yönetimi.",
    ),
    projects: [
      l("Trabzon City Hospital (contractor)", "Trabzon Şehir Hastanesi (yüklenici)"),
      l("Istanbul Finance Center — Ziraat Bank Headquarters (contractor)", "İstanbul Finans Merkezi — Ziraat Bankası Genel Müdürlük Binası (yüklenici)"),
      l("Istanbul University Faculty of Medicine & New Hospital (contractor)", "İstanbul Üniversitesi Tıp Fakültesi ve Yeni Hastane (yüklenici)"),
      l("Designer Outlet & Retail Park (client)", "Designer Outlet ve Retail Park (işveren)"),
      l("IGA Private Hangar (client)", "İGA Özel Hangar (işveren)"),
      l("Karapınar Solar Power Plant SCADA Building (client)", "Karapınar Güneş Enerjisi Santrali SCADA Binası (işveren)"),
    ],
    projectSlug: "istanbul-finance-center-ziraat-bank-hq",
  },
  {
    id: "kalyon-iga",
    title: l("Design Coordination Manager", "Tasarım Koordinasyon Müdürü"),
    company: "Kalyon Construction Group",
    location: l("Istanbul Airport", "İstanbul Havalimanı"),
    yearStart: 2018,
    yearEnd: 2019,
    summary: l(
      "Management and coordination of the whole project process for Turkish Airlines' critical facilities at the new Istanbul Airport with a team of 8–10: subcontractor management and interface coordination, control and submission of shop drawings, planning, estimating and purchasing, and the consultant-to-client approval cycle.",
      "Yeni İstanbul Havalimanı'nda THY kritik tesisleri için 8–10 kişilik ekiple tüm proje sürecinin yönetimi ve koordinasyonu: alt yüklenici yönetimi ve arayüz koordinasyonu, imalat çizimlerinin kontrolü ve sunumu, planlama, metraj ve satın alma ile danışmandan işverene onay döngüsü.",
    ),
    projects: [l("Istanbul Airport — Turkish Airlines Critical Facilities", "İstanbul Havalimanı — THY Kritik Tesisler")],
    projectSlug: "iga-turkish-airlines-critical-facilities",
  },
  {
    id: "emaar",
    title: l("Senior Design Manager", "Kıdemli Tasarım Müdürü"),
    company: "Emaar Properties PJSC — Emaar Turkey",
    companyUrl: "https://www.emaar.com",
    location: l("Istanbul", "İstanbul"),
    yearStart: 2014,
    yearEnd: 2018,
    summary: l(
      "Leader of the Package 2 contract at Emaar Square — five residential buildings and the office building. Management and coordination of the full project process according to the main contract, main design decisions on the client's side, cost and contract management.",
      "Emaar Square'de 2. Paket sözleşmesinin lideri — beş konut binası ve ofis binası. Ana sözleşmeye göre tüm proje sürecinin yönetimi ve koordinasyonu, işveren tarafında ana tasarım kararları, maliyet ve sözleşme yönetimi.",
    ),
    projects: [l("Emaar Square — Residential, Retail, Office, Hotel", "Emaar Square — Konut, Perakende, Ofis, Otel")],
    projectSlug: "emaar-square",
  },
  {
    id: "polimeks",
    title: l("Project Coordinator", "Proje Koordinatörü"),
    company: "Polimeks Construction Company",
    companyUrl: "https://www.polimeksinsaat.com",
    location: l("Ashgabat, Turkmenistan", "Aşkabat, Türkmenistan"),
    yearStart: 2013,
    yearEnd: 2014,
    summary: l(
      "Management and coordination of all design stages of the new Ashgabat International Airport according to the client's requirements, managing the main designer and construction designers. Leadership of the Architectural Coordination Group of 8 project managers and 26 project chiefs and specialists.",
      "Yeni Aşkabat Uluslararası Havalimanı'nın tüm tasarım aşamalarının işveren gereksinimlerine göre yönetimi ve koordinasyonu; ana tasarımcı ve uygulama tasarımcılarının yönetimi. 8 proje müdürü ile 26 proje şefi ve uzmandan oluşan Mimari Koordinasyon Grubu'nun liderliği.",
    ),
    projects: [l("The New Ashgabat International Airport", "Yeni Aşkabat Uluslararası Havalimanı")],
    projectSlug: "ashgabat-international-airport",
  },
  {
    id: "bechtel-enka",
    title: l("Design Manager, Interior / Senior Architect", "Tasarım Müdürü, İç Mimari / Kıdemli Mimar"),
    company: "Bechtel ENKA Bahwan JV",
    companyUrl: "https://www.enka.com",
    location: l("Muscat, Oman", "Maskat, Umman"),
    yearStart: 2011,
    yearEnd: 2013,
    summary: l(
      "Management of the 13-person interior architecture group for the Muscat International Airport main contract (MC3): design development and issue-for-construction drawings according to the tender documents, and multi-disciplinary coordination across architectural, structural and MEP teams.",
      "Maskat Uluslararası Havalimanı ana sözleşmesi (MC3) için 13 kişilik iç mimari grubunun yönetimi: ihale dokümanlarına göre kesin proje ve uygulama çizimleri ile mimari, statik ve mekanik-elektrik ekipleri arasında çok disiplinli koordinasyon.",
    ),
    projects: [l("Development of Muscat International Airport — Passenger Terminal", "Maskat Uluslararası Havalimanı Geliştirme — Yolcu Terminali")],
    projectSlug: "muscat-international-airport",
  },
  {
    id: "corpus",
    title: l("Senior Architect", "Kıdemli Mimar"),
    company: "Corpus Construction",
    location: l("Benghazi, Libya", "Bingazi, Libya"),
    yearStart: 2010,
    yearEnd: 2011,
    summary: l(
      "Management and coordination of all design stages of the Garyounis University new buildings and renovation project — 329,000 m² of new building, 200,000 m² of renovation and 2,000,000 m² of infrastructure, designed by Leo A Daly with Arcadis as consultant for ODAC; a Design & Build contract of approximately 1.2 billion USD.",
      "Garyounis Üniversitesi yeni binalar ve yenileme projesinin tüm tasarım aşamalarının yönetimi ve koordinasyonu — 329.000 m² yeni bina, 200.000 m² yenileme ve 2.000.000 m² altyapı; Leo A Daly tasarımı, Arcadis danışmanlığı, ODAC işverenliği; yaklaşık 1,2 milyar USD'lik tasarla-yap sözleşmesi.",
    ),
    projects: [l("Garyounis University New Buildings & Renovation, Benghazi", "Garyounis Üniversitesi Yeni Binalar ve Yenileme, Bingazi")],
  },
  {
    id: "tam",
    title: l("Project Coordinator / Lead Architect", "Proje Koordinatörü / Baş Mimar"),
    company: "Turgut Alton Architecture Consultancy Co. (TAM)",
    companyUrl: "https://www.turgutalton.com",
    location: l("Istanbul", "İstanbul"),
    yearStart: 1998,
    yearEnd: 2010,
    summary: l(
      "Twelve years of design and coordination on large-scale hospitality, residential, cultural and industrial projects — from concept and façade design to detail drawings, construction documents, bills of quantities and professional supervision — culminating in the construction project and site coordination of the Qatar National Convention Centre.",
      "Büyük ölçekli otel, konut, kültür ve endüstri projelerinde on iki yıllık tasarım ve koordinasyon — konsept ve cephe tasarımından detay çizimleri, uygulama projeleri, metraj ve mesleki kontrollüğe kadar — Katar Ulusal Kongre Merkezi'nin uygulama projesi ve şantiye koordinasyonuyla taçlandı.",
    ),
    projects: [
      l("Qatar National Convention Centre, Doha — 120,000 m²", "Katar Ulusal Kongre Merkezi, Doha — 120.000 m²"),
      l("Kuşadası Tourism Complex & Residences, Aydın — 270,000 m²", "Kuşadası Turizm Kompleksi ve Konutları, Aydın — 270.000 m²"),
      l("Park Hotel Residences & Apart Hotel, Beyoğlu — 89,000 m²", "Park Hotel Rezidans ve Apart Otel, Beyoğlu — 89.000 m²"),
      l("Mercedes-Benz Türk Central Complex for Marketing & Spare Parts, Hoşdere — 41,575 m²", "Mercedes-Benz Türk Pazarlama ve Yedek Parça Merkezi, Hoşdere — 41.575 m²"),
      l("Atik Pasha Four Seasons Hotel, Beşiktaş — 32,000 m²", "Atik Paşa Four Seasons Hotel, Beşiktaş — 32.000 m²"),
      l("Göcek Marina Resort Tourism Complex, Muğla — 28,000 m²", "Göcek Marina Resort Turizm Kompleksi, Muğla — 28.000 m²"),
      l("Kybele Holiday Village Phase II, Belek — 25,000 m²", "Kybele Tatil Köyü II. Etap, Belek — 25.000 m²"),
      l("Perge Jewels Complex, Aksu — 12,000 m²", "Perge Jewels Kompleksi, Aksu — 12.000 m²"),
    ],
    projectSlug: "qatar-national-convention-centre",
  },
  {
    id: "mimyapi",
    title: l("Senior Architect", "Kıdemli Mimar"),
    company: "Mim Yapı Mimarlık Ltd. Şti.",
    location: l("Istanbul", "İstanbul"),
    yearStart: 1995,
    yearEnd: 1998,
    summary: l(
      "A variety of residential, commercial and retail projects.",
      "Konut, ticari ve perakende alanlarında çeşitli projeler.",
    ),
  },
  {
    id: "gorbon",
    title: l("Architect", "Mimar"),
    company: "Prof. Dr. Fatih Gorbon Architectural Office",
    location: l("Istanbul", "İstanbul"),
    yearStart: 1993,
    yearEnd: 1995,
    summary: l(
      "Residential, commercial and retail projects, yacht design and production, and architectural competitions with Prof. Dr. Fatih Gorbon — including the winning entries for the Marmaris Culture Centre and the Bursa Transportation Building.",
      "Prof. Dr. Fatih Gorbon ile konut, ticari ve perakende projeleri, yat tasarımı ve üretimi ile mimari yarışmalar — Marmaris Kültür Merkezi ve Bursa Ulaşım Binası birincilik ödülleri dâhil.",
    ),
  },
];

export const education: Credential[] = [
  {
    title: l("Bachelor of Architecture", "Mimarlık Lisans"),
    issuer: l("Mimar Sinan University, Faculty of Architecture", "Mimar Sinan Üniversitesi, Mimarlık Fakültesi"),
    year: 1993,
  },
];

export const certifications: Credential[] = [
  {
    title: l("Agile & Scrum Project Management", "Agile ve Scrum Proje Yönetimi"),
    issuer: l("Agile Construction Co.", "Agile Construction Co."),
    year: 2018,
  },
  {
    title: l("Certificate of Leadership & Performance Assessment", "Liderlik ve Performans Değerlendirme Sertifikası"),
    issuer: l("ENKA", "ENKA"),
    year: 2012,
  },
  {
    title: l("Certificate of Subcontractor Management", "Alt Yüklenici Yönetimi Sertifikası"),
    issuer: l("ENKA — Alexander Bevan & Don Harvey", "ENKA — Alexander Bevan & Don Harvey"),
    year: 2012,
  },
  {
    title: l("PMP — Project Management Professional", "PMP — Proje Yönetimi Profesyoneli"),
    issuer: l("Project Management Institute", "Project Management Institute"),
    year: 2008,
    detail: l("License 08/195", "Lisans 08/195"),
  },
  {
    title: l("Autodesk Revit Building 9", "Autodesk Revit Building 9"),
    issuer: l("Autodesk", "Autodesk"),
    year: 2007,
  },
  {
    title: l("3D VIZ 2.0", "3D VIZ 2.0"),
    issuer: l("Chamber of Architects and Engineers", "Mimarlar ve Mühendisler Odası"),
    year: 2002,
  },
  {
    title: l("School of English", "İngilizce Dil Eğitimi"),
    issuer: l("Cecil County ESOL — Maryland, USA", "Cecil County ESOL — Maryland, ABD"),
    year: 2002,
  },
  {
    title: l("AutoCAD R12", "AutoCAD R12"),
    issuer: l("Chamber of Architects and Engineers", "Mimarlar ve Mühendisler Odası"),
    year: 1994,
  },
];

export const skills = {
  management: {
    en: ["Project Management", "Design Process Management", "Design Development", "Project Engineering", "Value Engineering", "BIM Management", "Contract & Cost Management", "Time Management", "Decision Making"],
    tr: ["Proje Yönetimi", "Tasarım Süreci Yönetimi", "Kesin Proje Geliştirme", "Proje Mühendisliği", "Değer Mühendisliği", "BIM Yönetimi", "Sözleşme ve Maliyet Yönetimi", "Zaman Yönetimi", "Karar Verme"],
  },
  sectors: {
    en: ["Airport Projects", "Commercial & Offices", "Cultural", "Hospitality", "Residential", "Healthcare", "Interior Design"],
    tr: ["Havalimanı Projeleri", "Ticari ve Ofis", "Kültür", "Otel", "Konut", "Sağlık", "İç Mimari"],
  },
  tools: {
    en: ["AutoCAD (advanced)", "Microsoft Office (advanced)", "Adobe Photoshop (advanced)", "Autodesk Revit", "3ds VIZ", "ProjectWise", "BIM 360 Docs", "Aconex"],
    tr: ["AutoCAD (ileri)", "Microsoft Office (ileri)", "Adobe Photoshop (ileri)", "Autodesk Revit", "3ds VIZ", "ProjectWise", "BIM 360 Docs", "Aconex"],
  },
  languages: {
    en: ["Turkish (native)", "English"],
    tr: ["Türkçe (ana dil)", "İngilizce"],
  },
};
