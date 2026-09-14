import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ApproachModule } from "@/modules/approach/module";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("pages.approach") };
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ApproachModule />;
}
