import { setRequestLocale } from "next-intl/server";

import { HomeModule } from "@/modules/home/module";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeModule />;
}
