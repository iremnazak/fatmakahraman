import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import { PageGrid, ContentLeft } from "@/components/page-grid";
import { TintedImage } from "@/components/tinted-image";
import { SectionHeading } from "@/components/section-heading";
import { phases } from "@/lib/data/approach";

import { ApproachDiagram } from "./diagram";
import { LifecycleTimeline } from "./lifecycle-timeline";

export function ApproachModule() {
  const t = useTranslations("Approach");
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
        {/* Life cycle */}
        <section>
          <SectionHeading>{t("lifecycle")}</SectionHeading>
          <LifecycleTimeline />
          <ol className="m-0 mt-gutter-2 flex list-none flex-col p-0">
            {phases.map((phase, index) => (
              <li
                key={phase.id}
                className="grid grid-cols-6 gap-x-gutter border-b py-gutter-half first:pt-0 last:border-b-0 site:grid-cols-8"
              >
                <div className="col-span-6 caps text-ironbark-50 site:col-span-2">
                  <span className="block">
                    {phase.number ? `${t("phaseLabel")} ${phase.number}` : `0${index + 1}`}
                  </span>
                  <span className="block">{phase.group[locale]}</span>
                </div>
                <div className="col-span-6 mt-2 site:col-span-6 site:mt-0">
                  <h3 className="caps">{phase.title[locale]}</h3>
                  <ul className="mt-gutter-quarter max-w-[580px] text-prose text-ink">
                    {phase.items[locale].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <TintedImage
          src="/images/site/approach.jpg"
          alt={t("imageAlt")}
          width={1672}
          height={986}
          plain
          sizes="(max-width: 812px) 100vw, 50vw"
        />

        {/* Organisation diagram */}
        <section>
          <SectionHeading>{t("organisation")}</SectionHeading>
          <ApproachDiagram />
        </section>
      </div>
    </PageGrid>
  );
}
