import { useTranslations } from "next-intl";

import { PageGrid, ContentLeft } from "@/components/page-grid";
import { TintedImage } from "@/components/tinted-image";
import { site } from "@/lib/data/site";

export function ContactModule() {
  const t = useTranslations("Contact");

  return (
    <PageGrid
      aside={
        <ContentLeft title={t("title")}>
          <p>{t("intro")}</p>
        </ContentLeft>
      }
    >
      <div className="flex flex-col gap-gutter p-gutter-half pt-content-top">
        <TintedImage
          src="/images/site/contact.jpg"
          alt={t("imageAlt")}
          width={977}
          height={581}
          priority
          sizes="(max-width: 812px) 100vw, 50vw"
        />

        <div className="grid grid-cols-6 gap-x-gutter gap-y-gutter caps site:grid-cols-6">
          <div className="col-span-3 site:col-span-2">
            <p className="text-ironbark-50">{t("sections.studio")}</p>
            <p className="mt-gutter-quarter">
              {site.name}
              <br />
              <a href={`mailto:${site.contact.email}`} className="site-link normal-case">
                {site.contact.email}
              </a>
              <br />
              <a href={site.contact.phoneHref} className="site-link">
                {site.contact.phone}
              </a>
            </p>
            <p className="mt-gutter-half">
              {site.contact.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>

          <div className="col-span-3 site:col-span-2">
            <p className="text-ironbark-50">{t("sections.direct")}</p>
            <p className="mt-gutter-quarter">
              <a href={`mailto:${site.contact.email}`} className="site-link block">
                {t("labels.email")}
              </a>
              <a href={site.contact.phoneHref} className="site-link block">
                {t("labels.phone")}
              </a>
            </p>
          </div>

          <div className="col-span-3 site:col-span-2">
            <p className="text-ironbark-50">{t("sections.follow")}</p>
            <p className="mt-gutter-quarter">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                lang="en"
                className="site-link block"
              >
                {t("labels.linkedin")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageGrid>
  );
}
