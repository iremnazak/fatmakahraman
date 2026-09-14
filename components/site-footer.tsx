import { useTranslations } from "next-intl";

import { Link } from "@/lib/navigation";
import { site } from "@/lib/data/site";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t bg-creme caps">
      {/* Wide screens: the vertical divider continues through the footer —
          credentials on the left, statement on the right. */}
      <div className="hidden w-full flex-wrap wide:flex">
        <div className="grid w-1/2 grid-cols-5 gap-x-gutter border-r px-gutter-half pb-[13px] pt-gutter-half">
          <Link href="/" className="col-span-1 normal-case">
            {site.name}
          </Link>
          <p className="col-span-2">
            {t("registration")}
            <br />
            {t("license")}
          </p>
          <p className="col-span-2">
            {t("education")}
            <br />
            {t("degree")}
          </p>
          <p className="col-span-4 col-start-2 pt-[21px]">{t("rights", { year })}</p>
        </div>
        <div className="w-1/2 px-gutter-half pb-[13px] pt-gutter-half">
          <p className="max-w-[580px]">{t("statement")}</p>
        </div>
      </div>

      {/* Mobile & tablet: single full-width grid. */}
      <div className="grid grid-cols-6 gap-x-gutter gap-y-gutter p-gutter-half site:grid-cols-10 wide:hidden">
        <div className="col-span-3 flex flex-col justify-between gap-gutter-half site:col-span-2">
          <p>
            {t("name")}
            <br />
            {t("role")}
          </p>
          <p>{t("rights", { year })}</p>
        </div>
        <div className="col-span-3 site:col-span-2">
          <p>
            {t("registration")}
            <br />
            {t("license")}
          </p>
        </div>
        <div className="col-span-3 site:col-span-2">
          <p>
            {t("education")}
            <br />
            {t("degree")}
          </p>
        </div>
        <p className="col-span-6 site:col-span-4 site:col-start-7">{t("statement")}</p>
      </div>
    </footer>
  );
}
