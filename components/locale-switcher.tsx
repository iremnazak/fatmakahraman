"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/lib/navigation";
import type { Locale } from "@/i18n";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  onNavigate?: () => void;
};

export function LocaleSwitcher({ className, onNavigate }: LocaleSwitcherProps) {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const target: Locale = locale === "en" ? "tr" : "en";

  return (
    <Link
      href={pathname}
      locale={target}
      className={cn("site-link", className)}
      onClick={onNavigate}
      hrefLang={target}
    >
      {t("language")}
    </Link>
  );
}
