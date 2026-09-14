import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t bg-creme caps">
      <div className="grid grid-cols-6 gap-x-gutter gap-y-gutter p-gutter-half site:grid-cols-10 wide:grid-cols-5">
        <div className="col-span-3 flex flex-col justify-between gap-gutter-half site:col-span-2 wide:col-span-1">
          <p>
            {t("name")}
            <br />
            {t("role")}
          </p>
          <p>{t("rights", { year })}</p>
        </div>
        <div className="col-span-3 site:col-span-2 wide:col-span-1">
          <p>
            {t("registration")}
            <br />
            {t("license")}
          </p>
        </div>
        <div className="col-span-3 site:col-span-2 wide:col-span-1">
          <p>
            {t("education")}
            <br />
            {t("degree")}
          </p>
        </div>
        <p className="col-span-6 site:col-span-4 site:col-start-7 wide:col-span-2 wide:col-start-4">
          {t("statement")}
        </p>
      </div>
    </footer>
  );
}
