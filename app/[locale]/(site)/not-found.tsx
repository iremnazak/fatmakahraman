import { useTranslations } from "next-intl";

import { Link } from "@/lib/navigation";
import { PageGrid, ContentLeft } from "@/components/page-grid";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <PageGrid
      aside={
        <ContentLeft title={t("title")}>
          <p>{t("body")}</p>
        </ContentLeft>
      }
    >
      <div className="p-gutter-half pt-content-top caps">
        <Link href="/" className="site-link underline underline-offset-4">
          {t("cta")}
        </Link>
      </div>
    </PageGrid>
  );
}
