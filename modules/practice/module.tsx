import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import { PageGrid, ContentLeft } from "@/components/page-grid";
import { TintedImage } from "@/components/tinted-image";
import { skills } from "@/lib/data/experience";
import { site } from "@/lib/data/site";

const chapters = ["design", "coordination", "management"] as const;

export function PracticeModule() {
  const t = useTranslations("Practice");
  const locale = useLocale() as Locale;

  return (
    <PageGrid
      aside={
        <ContentLeft title={t("title")}>
          <p>{t("intro")}</p>
        </ContentLeft>
      }
    >
      <div className="flex flex-col gap-gutter-2 p-gutter-half pt-content-top">
        {/* Career chapters */}
        <ol className="m-0 flex list-none flex-col gap-gutter p-0">
          {chapters.map((chapter, index) => (
            <li key={chapter} className="grid grid-cols-6 gap-x-gutter site:grid-cols-8">
              <div className="col-span-6 caps text-ironbark-50 site:col-span-2">
                <span className="block">0{index + 1}</span>
                <span className="block">{t(`chapters.${chapter}.label`)}</span>
              </div>
              <p className="col-span-6 mt-2 text-intro site:col-span-6 site:mt-0">
                {t.rich(`chapters.${chapter}.body`, {
                  b: (chunks) => <strong className="font-bold uppercase">{chunks}</strong>,
                })}
              </p>
            </li>
          ))}
        </ol>

        {/* Profile */}
        <article className="grid grid-cols-6 gap-x-gutter gap-y-gutter-half border-t pt-gutter-half site:grid-cols-8">
          <div className="col-span-3 site:col-span-2">
            <TintedImage
              src="/images/site/portrait.jpg"
              alt={t("profile.name")}
              width={370}
              height={349}
              className="aspect-square"
              imageClassName="aspect-square"
            />
          </div>
          <div className="col-span-6 site:col-span-6">
            <h2 className="caps">
              {t("profile.name")}
              <br />
              <span className="normal-case">{t("profile.role")}</span>
            </h2>
            <p className="mt-gutter-half whitespace-pre-line caps">{t("profile.credentials")}</p>
            <blockquote className="mt-gutter border-l pl-gutter-half text-intro">
              “{t("profile.quote")}”
            </blockquote>
            <p className="mt-gutter text-[15px] leading-[1.24]">{t("profile.body")}</p>

            <dl className="mt-gutter grid grid-cols-2 gap-x-gutter gap-y-gutter-half caps">
              <div>
                <dt className="text-ironbark-50">{t("profile.sectors")}</dt>
                <dd className="m-0">
                  {skills.sectors[locale].map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-ironbark-50">{t("profile.skills")}</dt>
                <dd className="m-0">
                  {skills.management[locale].map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-ironbark-50">{t("profile.tools")}</dt>
                <dd className="m-0">
                  {skills.tools[locale].map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-ironbark-50">{t("profile.languages")}</dt>
                <dd className="m-0">
                  {skills.languages[locale].map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <p className="mt-gutter caps">
              <a href={`mailto:${site.contact.email}`} className="site-link block normal-case">{site.contact.email}</a>
              <a href={site.contact.phoneHref} className="site-link block">{site.contact.phone}</a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" lang="en" className="site-link block">
                {t("profile.linkedin")}
              </a>
            </p>
          </div>
        </article>

      </div>
    </PageGrid>
  );
}
