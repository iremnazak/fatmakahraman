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
   * There are only these two, and they switch where the page itself does:
   * below the `site` breakpoint the page is one column and the header is a
   * bar; at or above it the page splits and the header moves into the
   * sticky left column.
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
      <header className={cn("relative z-20 w-full border-b bg-creme caps", className)}>
        {/* Sized to its contents rather than to a fixed grid, so it survives
            the narrow left column at the bottom of its range. */}
        <div className="flex w-full items-start justify-between gap-gutter-half px-gutter-half pt-gutter-half">
          <nav
            aria-label="Primary"
            className="-mt-0.5 grid grid-cols-1 gap-x-gutter-half wide:grid-cols-[max-content_max-content]"
          >
            {navLinks.map(({ key, href }) => renderLink(key, href))}
          </nav>

          {/* Contact and language, set against the mark */}
          <div className="-mt-0.5 ml-auto text-right">
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

          <Link href="/" aria-label={t("home")} className="block shrink-0">
            <LogoMark className="block h-auto w-[clamp(40px,5vw,100px)]" />
          </Link>
        </div>

        <Link
          href="/"
          className="block px-gutter-half pb-gutter-half pt-gutter-quarter text-wordmark normal-case text-ironbark"
        >
          {site.name}
        </Link>
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
