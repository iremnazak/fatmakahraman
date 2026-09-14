import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PracticeModule } from "@/modules/practice/module";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("pages.practice") };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PracticeModule />;
}
