import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a year range for display, e.g. "2014–2018" or "2024–".
 */
export function formatYears(start: number, end?: number | null): string {
  if (end === undefined) return String(start);
  if (end === null) return `${start}–`;
  if (end === start) return String(start);
  return `${start}–${end}`;
}
