import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import { Link } from "@/lib/navigation";
import { PageGrid, ContentLeft } from "@/components/page-grid";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education, positions, skills } from "@/lib/data/experience";
import { formatYears } from "@/lib/utils";

export function ExperienceModule() {
  const t = useTranslations("Experience");
  const locale = useLocale() as Locale;

  const skillGroups = [
    { key: "management", items: skills.management[locale] },
    { key: "sectors", items: skills.sectors[locale] },
    { key: "tools", items: skills.tools[locale] },
    { key: "languages", items: skills.languages[locale] },
  ] as const;

  return (
    <PageGrid
      aside={
        <ContentLeft title={t("title")}>
          <p>{t("intro")}</p>
        </ContentLeft>
      }
    >
      <div className="flex flex-col gap-gutter-2 p-gutter-half pt-content-top">
        {/* Positions */}
        <section>
          <SectionHeading>{t("sections.positions")}</SectionHeading>
          <ol className="m-0 flex list-none flex-col p-0">
            {positions.map((position) => (
              <li
                key={position.id}
                className="grid grid-cols-6 gap-x-gutter border-b py-gutter-half first:pt-0 last:border-b-0 site:grid-cols-8"
              >
                <div className="col-span-6 caps text-ironbark-50 site:col-span-2">
                  {position.yearEnd === null
                    ? `${position.yearStart} — ${t("labels.present")}`
                    : formatYears(position.yearStart, position.yearEnd)}
                  {position.location && (
                    <span className="block">{position.location[locale]}</span>
                  )}
                </div>
                <div className="col-span-6 mt-2 site:col-span-6 site:mt-0">
                  <h3 className="caps">
                    {position.title[locale]}
                    <br />
                    {position.companyUrl ? (
                      <a
                        href={position.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-link normal-case"
                      >
                        {position.company}
                      </a>
                    ) : (
                      <span className="normal-case">{position.company}</span>
                    )}
                  </h3>
                  <p className="mt-gutter-quarter max-w-[580px] text-prose text-ink">
                    {position.summary[locale]}
                  </p>
                  {position.projects && position.projects.length > 0 && (
                    <div className="mt-gutter-quarter caps">
                      <p className="text-ironbark-50">{t("labels.projects")}</p>
                      <ul className="m-0 list-none p-0">
                        {position.projects.map((p, i) => (
                          <li key={i}>{p[locale]}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {position.projectSlug && (
                    <Link
                      href={`/projects/${position.projectSlug}`}
                      className="site-link mt-gutter-quarter inline-block caps underline underline-offset-4"
                    >
                      {t("labels.viewProject")}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section>
          <SectionHeading>{t("sections.education")}</SectionHeading>
          <ul className="m-0 list-none p-0">
            {education.map((item, i) => (
              <li key={i} className="grid grid-cols-6 gap-x-gutter caps site:grid-cols-8">
                <span className="col-span-6 text-ironbark-50 site:col-span-2">{item.year}</span>
                <span className="col-span-6 site:col-span-6">
                  {item.title[locale]}
                  <br />
                  {item.issuer[locale]}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <SectionHeading>{t("sections.certifications")}</SectionHeading>
          <ul className="m-0 flex list-none flex-col gap-gutter-quarter p-0">
            {certifications.map((item, i) => (
              <li key={i} className="grid grid-cols-6 gap-x-gutter caps site:grid-cols-8">
                <span className="col-span-6 text-ironbark-50 site:col-span-2">{item.year}</span>
                <span className="col-span-6 site:col-span-6">
                  {item.title[locale]}
                  <br />
                  <span className="text-ironbark-50">
                    {item.issuer[locale]}
                    {item.detail && ` · ${item.detail[locale]}`}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading>{t("sections.skills")}</SectionHeading>
          <dl className="grid grid-cols-2 gap-x-gutter gap-y-gutter-half caps site:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.key}>
                <dt className="text-ironbark-50">{t(`labels.${group.key}`)}</dt>
                <dd className="m-0">
                  {group.items.map((s) => (
                    <span key={s} className="block">{s}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-gutter caps text-ironbark-50">{t("labels.references")}</p>
        </section>
      </div>
    </PageGrid>
  );
}
