import { useTranslations } from "next-intl";

import { PageGrid, ContentLeft } from "@/components/page-grid";
import { TintedImage } from "@/components/tinted-image";

export function HomeModule() {
  const t = useTranslations("Home");

  return (
    <PageGrid
      aside={
        <ContentLeft className="site:pt-gutter">
          <p>{t("statement")}</p>
          <p>{t("statementSecondary")}</p>
          <p>{t("signature")}</p>
        </ContentLeft>
      }
      contentClassName="pb-0 site:pb-0"
    >
      <div className="p-gutter-half site:h-[calc(100dvh-var(--header-height))] site:pb-gutter-half">
        <TintedImage
          src="/images/site/home-hero.jpg"
          alt={t("heroAlt")}
          width={1000}
          height={665}
          priority
          className="h-full"
          imageClassName="h-full w-full object-cover"
        />
      </div>
    </PageGrid>
  );
}
