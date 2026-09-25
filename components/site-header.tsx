"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

import { Link, usePathname } from "@/lib/navigation";
import { LogoMark } from "@/components/logo-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { navLinks, navLinksRight, type NavKey } from "@/components/nav-links";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const ease = [0.45, 0, 0.15, 1] as const;

type SiteHeaderProps = {
  /**
   * "bar": the compact bar — a menu trigger, the wordmark and the mark.
   * "column": the full navigation, nested inside the sticky left column.
   *
   * There are only these two. The bar carries every width below the `wide`
   * breakpoint, above which the left column is wide enough to hold the
   * navigation itself.
   */
  variant?: "bar" | "column";
  className?: string;
};

export function SiteHeader({ variant = "bar", className }: SiteHeaderProps) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const wordmark = (
    <Link
      href="/"
      className="absolute bottom-gutter-half left-gutter-half z-40 translate-y-[0.2em] text-wordmark normal-case text-ironbark"
    >
      {site.name}
    </Link>
  );

  if (variant === "column") {
    const linkClass = (id: string) =>
      cn(
        "site-link block whitespace-nowrap",
        hovered !== null && hovered !== id && "opacity-20",
      );

    const renderLink = (key: NavKey, href: string) => (
      <Link
        key={key}
        href={href}
        title={t(key)}
        aria-current={isActive(href) ? "page" : undefined}
        className={linkClass(key)}
        onMouseEnter={() => setHovered(key)}
        onMouseLeave={() => setHovered(null)}
      >
        {t(key)}
      </Link>
    );

    return (
      <header className={cn("relative z-20 w-full bg-creme caps", className)}>
        <div className="grid w-full grid-cols-5 items-start gap-x-gutter border-b p-gutter-half">
          <nav
            aria-label="Primary"
            className="col-span-3 -mt-0.5 grid grid-cols-[max-content_max-content] gap-x-gutter"
          >
            {navLinks.map(({ key, href }) => renderLink(key, href))}
          </nav>

          {/* Contact and language, set against the mark */}
          <div className="col-start-4 -mt-0.5 justify-self-end text-right">
            {navLinksRight.map(({ key, href }) => renderLink(key, href))}
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
              title={t("linkedin")}
              className={linkClass("linkedin")}
              onMouseEnter={() => setHovered("linkedin")}
              onMouseLeave={() => setHovered(null)}
            >
              {t("linkedin")}
            </a>
            <LocaleSwitcher className={cn(linkClass("language"), "mt-[1.3em] block")} />
          </div>

          <Link href="/" aria-label={t("home")} className="col-start-5 block h-full w-full">
            <LogoMark className="ml-auto block h-auto w-full max-w-[100px]" />
          </Link>
        </div>

        {wordmark}
      </header>
    );
  }

  return (
    <header className={cn("relative z-20 h-header w-full bg-creme caps", className)}>
      <div className="relative z-40 flex h-full w-full items-start justify-between border-b p-gutter-half">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="-mt-0.5 block cursor-pointer bg-transparent p-0 uppercase text-ironbark"
        >
          {open ? t("close") : t("menu")}
        </button>

        <Link href="/" aria-label={t("home")} className="block">
          <LogoMark className="block h-auto w-[44px]" />
        </Link>
      </div>

      {wordmark}

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            key="site-menu"
            initial={{ y: "-110%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-x-0 top-0 z-30 h-dvh w-full bg-creme pt-header"
          >
            <nav
              aria-label="Menu"
              className="flex flex-col px-gutter-half pb-gutter-half pt-20 text-menu uppercase"
            >
              {[...navLinks, ...navLinksRight].map(({ key, href }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4, ease }}
                  className={cn(index % 2 === 1 && "mb-gutter-half")}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className="site-link block"
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease }}
              >
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  lang="en"
                  className="site-link block"
                >
                  {t("linkedin")}
                </a>
                <LocaleSwitcher className="mt-gutter-half block" onNavigate={() => setOpen(false)} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
