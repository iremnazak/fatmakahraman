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
   * "bar": full-width header above the page grid (mobile & tablet).
   * "column": header nested inside the sticky left column (wide screens).
   */
  variant?: "bar" | "column";
  className?: string;
};

export function SiteHeader({ variant = "bar", className }: SiteHeaderProps) {
  const t = useTranslations("Nav");
  const isBar = variant === "bar";
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
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

  const linkClass = (id: string) =>
    cn(
      "site-link block",
      hovered !== null && hovered !== id && "wide:opacity-20",
    );

  const renderLink = (key: NavKey, href: string, className?: string) => (
    <Link
      key={key}
      href={href}
      title={t(key)}
      aria-current={isActive(href) ? "page" : undefined}
      className={cn(linkClass(key), className)}
      onMouseEnter={() => setHovered(key)}
      onMouseLeave={() => setHovered(null)}
    >
      {t(key)}
    </Link>
  );

  return (
    <header
      className={cn(
        "relative z-20 w-full bg-creme caps",
        isBar ? "h-header" : "h-auto",
        className,
      )}
    >
      <div className="relative z-40 grid h-full w-full grid-cols-6 items-start gap-x-gutter border-b p-gutter-half site:grid-cols-10 wide:grid-cols-5">
        {/* Primary navigation — two rows, two columns (three on wide screens) */}
        <nav
          aria-label="Primary"
          className="col-span-4 -mt-0.5 hidden grid-cols-[max-content_max-content] gap-x-gutter site:grid wide:col-span-3"
        >
          {navLinks.map(({ key, href }) => renderLink(key, href, "whitespace-nowrap"))}
        </nav>

        {/* Secondary navigation — contact & language, sitting beside the mark */}
        <div className="col-span-1 col-start-9 -mt-0.5 hidden justify-self-end whitespace-nowrap text-right site:block wide:col-start-4">
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
          <LocaleSwitcher
            className={cn(linkClass("language"), "mt-[1.3em] block")}
          />
        </div>

        {/* Mark */}
        <Link
          href="/"
          aria-label={t("home")}
          className="col-start-6 block h-full w-full site:col-start-10 wide:col-start-5"
        >
          <LogoMark className="ml-auto block h-auto w-full max-w-[44px] site:max-w-[60px] wide:max-w-[100px]" />
        </Link>
      </div>

      {/* Wordmark */}
      <Link
        href="/"
        className="absolute bottom-gutter-half left-gutter-half z-40 translate-y-[0.2em] text-wordmark normal-case text-ironbark"
      >
        {site.name}
      </Link>

      {/* Mobile menu trigger */}
      {isBar && (
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="absolute left-gutter-half top-gutter-half z-40 -mt-0.5 block cursor-pointer bg-transparent p-0 uppercase text-ironbark site:hidden"
      >
        {open ? t("close") : t("menu")}
      </button>
      )}

      {/* Mobile menu overlay */}
      {isBar && (
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ y: "-110%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-x-0 top-0 z-30 h-dvh w-full bg-creme/95 pt-header site:hidden"
          >
            <nav
              aria-label="Mobile"
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
      )}
    </header>
  );
}
