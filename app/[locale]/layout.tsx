import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Hanken_Grotesk } from "next/font/google";

import { locales } from "@/i18n";
import { site } from "@/lib/data/site";

import "../globals.css";

const grotesk = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("title"),
      template: `${t("title")} — %s`,
    },
    description: t("description"),
    generator: "fatmakahraman",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale,
      images: ["/images/site/home-hero.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={grotesk.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
