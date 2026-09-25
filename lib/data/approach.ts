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

/**
 * The project-organisation diagram: a hub (project management) surrounded by
 * what it coordinates, the flows that cross it, and the four bodies of work
 * it draws on. Orbit and hub labels are hand-broken because they are set on
 * the ring itself.
 */
export const diagram = {
  hub: {
    title: { en: ["Project", "Management"], tr: ["Proje", "Yönetimi"] },
    subtitle: {
      en: ["Design management", "& engineering team"],
      tr: ["Tasarım yönetimi ve", "mühendislik ekibi"],
    },
  },
  orbit: [
    {
      id: "edms",
      lines: { en: ["EDMS"], tr: ["EDMS"] },
    },
    {
      id: "construction-projects",
      lines: {
        en: ["For construction", "projects", "(all disciplines)"],
        tr: ["Uygulama", "projeleri", "(tüm disiplinler)"],
      },
    },
    {
      id: "design-development",
      lines: {
        en: ["Project", "development,", "concept &", "schematic design"],
        tr: ["Proje geliştirme,", "konsept ve", "şematik tasarım"],
      },
    },
    {
      id: "consultants",
      lines: {
        en: ["Consultants", "fire, lighting,", "façade, acoustic,", "traffic"],
        tr: ["Danışmanlar", "yangın, aydınlatma,", "cephe, akustik,", "trafik"],
      },
    },
  ],
  flows: [
    {
      id: "procurement",
      direction: "down",
      label: l("Procurement", "Satın Alma"),
    },
    {
      id: "construction-group",
      direction: "left",
      label: l("Construction Group", "Yapım Grubu"),
    },
    {
      id: "business-development",
      direction: "up",
      label: l("Business Development", "İş Geliştirme"),
    },
    {
      id: "cost-planning-contract",
      direction: "right",
      label: l("Cost, Planning & Contract Management", "Maliyet, Planlama ve Sözleşme Yönetimi"),
    },
  ],
  panels: [
    {
      id: "document-management",
      title: l("Document Management", "Doküman Yönetimi"),
      items: {
        en: [
          "EDMS — electronic document management system",
          "DCC / DNS manual",
          "Contract management",
          "Planning",
        ],
        tr: [
          "EDMS — elektronik doküman yönetim sistemi",
          "DCC / DNS el kitabı",
          "Sözleşme yönetimi",
          "Planlama",
        ],
      },
    },
    {
      id: "design-phase-3",
      title: l("Design Phase 3", "Tasarım Aşaması 3"),
      items: {
        en: [
          "BIM modelling",
          "Issue-for-construction project for all disciplines & tender documents",
          "Consultants coordination & reports",
          "Bill of quantities",
        ],
        tr: [
          "BIM modelleme",
          "Tüm disiplinler için uygulama projesi ve ihale dokümanları",
          "Danışman koordinasyonu ve raporlar",
          "Metraj ve keşif",
        ],
      },
    },
    {
      id: "design-phase-1-2",
      title: l("Design Phase 1 – 2", "Tasarım Aşaması 1 – 2"),
      items: {
        en: [
          "Business development",
          "Feasibility",
          "Local permission and regulations",
          "Design briefs, space programmes & bubble diagrams",
          "RFP & contract management",
          "Planning & cost estimation",
          "Master plan & pre-concept",
          "Concept & schematic design",
          "Detailed design (permit project)",
          "Pre-BOQ",
        ],
        tr: [
          "İş geliştirme",
          "Fizibilite",
          "Yerel izinler ve yönetmelikler",
          "Tasarım briefleri, mekân programları ve baloncuk diyagramları",
          "RFP ve sözleşme yönetimi",
          "Planlama ve maliyet tahmini",
          "Master plan ve ön konsept",
          "Konsept ve şematik tasarım",
          "Detaylı tasarım (ruhsat projesi)",
          "Ön metraj",
        ],
      },
    },
    {
      id: "design-consultancy",
      title: l("Design Consultancy", "Tasarım Danışmanlığı"),
      items: {
        en: [
          "Peer review",
          "Analysis",
          "Regulations",
          "Design criteria & reports",
          "Specifications",
          "Bill of quantities",
        ],
        tr: [
          "Akran değerlendirmesi",
          "Analiz",
          "Yönetmelikler",
          "Tasarım kriterleri ve raporlar",
          "Şartnameler",
          "Metraj ve keşif",
        ],
      },
    },
  ],
} as const;
