import type { Localized, Phase } from "@/types/content";

const l = (en: string, tr: string): Localized => ({ en, tr });

const development = l("Development Phase", "Geliştirme Aşaması");
const design = l("Design Process", "Tasarım Süreci");
const construction = l("Construction Phase", "Yapım Aşaması");
const operation = l("Operation Phase", "İşletme Aşaması");

/** The project life cycle as it is run across every discipline. */
export const phases: Phase[] = [
  {
    id: "development",
    title: l("Project Development & Feasibility", "Proje Geliştirme ve Fizibilite"),
    group: development,
    items: {
      en: [
        "Business development",
        "Feasibility",
        "Local permissions and regulations",
        "Design briefs, space programmes and bubble diagrams",
        "RFP and contract management",
        "Planning and cost estimation",
      ],
      tr: [
        "İş geliştirme",
        "Fizibilite",
        "Yerel izinler ve yönetmelikler",
        "Tasarım briefleri, mekân programları ve baloncuk diyagramları",
        "RFP ve sözleşme yönetimi",
        "Planlama ve maliyet tahmini",
      ],
    },
  },
  {
    id: "design-1",
    number: "1",
    title: l("Master Plan, Pre-Concept & Concept Design", "Master Plan, Ön Konsept ve Konsept Tasarım"),
    group: design,
    items: {
      en: [
        "Master plan and pre-concept",
        "Concept and schematic design",
        "Design criteria and reports",
        "Peer review and analysis",
      ],
      tr: [
        "Master plan ve ön konsept",
        "Konsept ve şematik tasarım",
        "Tasarım kriterleri ve raporlar",
        "Akran değerlendirmesi ve analiz",
      ],
    },
  },
  {
    id: "design-2",
    number: "2",
    title: l("Design Development", "Kesin Proje"),
    group: design,
    items: {
      en: [
        "Engineering reports and calculations",
        "Detailed design — permit project",
        "Specifications",
        "Pre-BOQ",
      ],
      tr: [
        "Mühendislik raporları ve hesaplar",
        "Detaylı tasarım — ruhsat projesi",
        "Şartnameler",
        "Ön metraj",
      ],
    },
  },
  {
    id: "design-3",
    number: "3",
    title: l("Construction Project, BIM Modelling & Tender Documents", "Uygulama Projesi, BIM Modelleme ve İhale Dokümanları"),
    group: design,
    items: {
      en: [
        "BIM modelling",
        "Issue-for-construction project for all disciplines",
        "Tender documents",
        "Consultants coordination and reports — fire, lighting, façade, acoustic, traffic",
        "Bill of quantities",
      ],
      tr: [
        "BIM modelleme",
        "Tüm disiplinler için uygulama projesi",
        "İhale dokümanları",
        "Danışman koordinasyonu ve raporları — yangın, aydınlatma, cephe, akustik, trafik",
        "Metraj ve keşif",
      ],
    },
  },
  {
    id: "construction",
    title: l("Shop Drawing & As-Built", "İmalat Çizimleri ve As-Built"),
    group: construction,
    items: {
      en: [
        "Shop drawings",
        "RFI",
        "Coordination — BIM, consultants, site",
        "Procurement",
        "Subcontractor management",
        "As-built",
        "Test and commissioning",
      ],
      tr: [
        "İmalat çizimleri",
        "RFI",
        "Koordinasyon — BIM, danışmanlar, şantiye",
        "Satın alma",
        "Alt yüklenici yönetimi",
        "As-built",
        "Test ve devreye alma",
      ],
    },
  },
  {
    id: "operation",
    title: l("Operation", "İşletme"),
    group: operation,
    items: {
      en: [
        "OS&E",
        "Test and commissioning control",
        "Sales, rental and operational management",
      ],
      tr: [
        "OS&E",
        "Test ve devreye alma kontrolü",
        "Satış, kiralama ve işletme yönetimi",
      ],
    },
  },
];

export const disciplines = {
  title: l("Design Consultants", "Tasarım Danışmanları"),
  items: {
    en: ["Architectural", "Structural", "Mechanical", "Electrical", "Interior", "Landscape"],
    tr: ["Mimari", "Statik", "Mekanik", "Elektrik", "İç Mimari", "Peyzaj"],
  },
};

export const documentManagement = {
  title: l("Document Management", "Doküman Yönetimi"),
  items: {
    en: [
      "EDMS — electronic document management system",
      "DCC / DNS manual",
      "Contract management",
      "Planning",
      "Document sharing platforms — BIM 360 Docs, Aconex, ProjectWise",
    ],
    tr: [
      "EDMS — elektronik doküman yönetim sistemi",
      "DCC / DNS el kitabı",
      "Sözleşme yönetimi",
      "Planlama",
      "Doküman paylaşım platformları — BIM 360 Docs, Aconex, ProjectWise",
    ],
  },
};

export const teams = {
  en: [
    { name: "Business Development", phases: "Development" },
    { name: "Cost, Planning & Contract Management", phases: "Development → Operation" },
    { name: "Design Management & Engineering Team", phases: "Design 1 → Construction" },
    { name: "Site Office — Design & Engineering Team", phases: "Construction" },
    { name: "Procurement", phases: "Design 3 → Construction" },
  ],
  tr: [
    { name: "İş Geliştirme", phases: "Geliştirme" },
    { name: "Maliyet, Planlama ve Sözleşme Yönetimi", phases: "Geliştirme → İşletme" },
    { name: "Tasarım Yönetimi ve Mühendislik Ekibi", phases: "Tasarım 1 → Yapım" },
    { name: "Şantiye Ofisi — Tasarım ve Mühendislik Ekibi", phases: "Yapım" },
    { name: "Satın Alma", phases: "Tasarım 3 → Yapım" },
  ],
};
