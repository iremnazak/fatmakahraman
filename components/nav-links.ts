export type NavKey = "practice" | "projects" | "experience" | "approach" | "contact";

export const navLinks: { key: NavKey; href: string }[] = [
  { key: "practice", href: "/practice" },
  { key: "projects", href: "/projects" },
  { key: "experience", href: "/experience" },
  { key: "approach", href: "/approach" },
];

export const navLinksRight: { key: NavKey; href: string }[] = [
  { key: "contact", href: "/contact" },
];
