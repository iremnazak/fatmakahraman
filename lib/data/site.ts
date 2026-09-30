export const site = {
  name: "Fatma Kahraman",
  role: {
    en: "Architect / Project Management Professional",
    tr: "Mimar / Proje Yönetimi Profesyoneli",
  },
  contact: {
    email: "fatma@fkahraman.com",
    phone: "+90 532 642 20 87",
    phoneHref: "tel:+905326422087",
    address: ["Crea Centers - Merkez, Çavuşbaşı Cd. 105/1-2, 34782 Çekmeköy/İstanbul."],
    city: "Istanbul",
  },
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/in/fatma-kahraman-a27a9816/",
  },
  credentials: {
    registration: "PMI PMP · License 08/195",
    education: "B.Arch, Mimar Sinan University, 1993",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fatmakahraman.com",
} as const;
