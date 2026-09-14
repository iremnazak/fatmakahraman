import { notFound } from "next/navigation";

/**
 * Catch-all for unknown routes inside a locale, so the localized
 * not-found page renders within the site layout.
 */
export default function CatchAllPage() {
  notFound();
}
