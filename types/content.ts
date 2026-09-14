import type { Locale } from "@/i18n";

/** A string available in every supported locale. */
export type Localized = Record<Locale, string>;

/** A list of strings available in every supported locale. */
export type LocalizedList = Record<Locale, string[]>;

export type ProjectTypology =
  | "airport"
  | "office"
  | "mixed_use"
  | "cultural"
  | "hospitality"
  | "residential"
  | "yacht"
  | "industrial"
  | "healthcare";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
};

export type ProjectCredit = {
  label: Localized;
  value: string;
};

export type Project = {
  slug: string;
  title: Localized;
  tagline: Localized;
  intro: Localized;
  narrative: LocalizedList;
  typology: ProjectTypology;
  location: Localized;
  yearStart: number;
  yearEnd?: number | null;
  role: Localized;
  company: string;
  credits: ProjectCredit[];
  facts?: { label: Localized; value: Localized }[];
  thumbnail: ProjectImage;
  images: ProjectImage[];
};

export type Position = {
  id: string;
  title: Localized;
  company: string;
  companyUrl?: string;
  location?: Localized;
  yearStart: number;
  yearEnd?: number | null;
  summary: Localized;
  projects?: Localized[];
  projectSlug?: string;
};

export type Credential = {
  title: Localized;
  issuer: Localized;
  year: number;
  detail?: Localized;
};

export type Phase = {
  id: string;
  number?: string;
  title: Localized;
  group: Localized;
  items: LocalizedList;
};
