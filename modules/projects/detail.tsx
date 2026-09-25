import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import type { Project } from "@/types/content";
import { Link } from "@/lib/navigation";
import { PageGrid, ContentLeft } from "@/components/page-grid";
import { TintedImage } from "@/components/tinted-image";
import { MetaList, type MetaItem } from "@/components/meta-list";
import { getAdjacentProjects, typologyLabels } from "@/lib/data/projects";
import { formatYears } from "@/lib/utils";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const t = useTranslations("Projects");
  const locale = useLocale() as Locale;
  const { next } = getAdjacentProjects(project.slug);

  const meta: MetaItem[] = [
    { label: t("labels.typology"), value: typologyLabels[project.typology][locale] },
    { label: t("labels.location"), value: project.location[locale] },
    { label: t("labels.date"), value: formatYears(project.yearStart, project.yearEnd) },
    { label: t("labels.company"), value: project.company },
    ...project.credits.map((c) => ({ label: c.label[locale], value: c.value })),
  ];

  const [hero, ...rest] = project.images;

  return (
    <PageGrid
      aside={
        <ContentLeft title={project.title[locale]}>
          <p className="caps normal-case">{project.tagline[locale]}</p>
          <p>{project.intro[locale]}</p>
        </ContentLeft>
      }
    >
      <div className="flex flex-col gap-gutter p-gutter-half pt-content-top">
        {/* Hero image */}
        <TintedImage
          src={hero.src}
          alt={hero.alt[locale]}
          width={hero.width}
          height={hero.height}
          priority
          sizes="(max-width: 812px) 100vw, 50vw"
        />

        {/* Role & credits */}
        <div className="grid grid-cols-6 gap-x-gutter gap-y-gutter site:grid-cols-5">
          <div className="col-span-6 site:col-span-2">
            <MetaList
              columns={1}
              items={[{ label: t("labels.role"), value: project.role[locale] }]}
            />
          </div>
          <div className="col-span-6 site:col-span-3">
            <MetaList items={meta} columns={2} />
          </div>
        </div>

        {/* Narrative */}
        <div className="prose-site max-w-[580px] text-prose text-ink">
          {project.narrative[locale].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Facts */}
        {project.facts && project.facts.length > 0 && (
          <MetaList
            columns={3}
            items={project.facts.map((f) => ({ label: f.label[locale], value: f.value[locale] }))}
          />
        )}

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-gutter">
          {rest.map((image) => (
            <figure key={image.src} className="m-0">
              <TintedImage
                src={image.src}
                alt={image.alt[locale]}
                width={image.width}
                height={image.height}
                sizes="(max-width: 812px) 100vw, 50vw"
              />
              <figcaption className="mt-gutter-quarter caps text-ironbark-50">
                {image.alt[locale]}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Next project */}
        {next && (
          <div className="border-t pt-gutter-half caps">
            <p className="text-ironbark-50">{t("detail.nextProject")}</p>
            <Link href={`/projects/${next.slug}`} className="site-link group mt-gutter-quarter block">
              <TintedImage
                src={next.thumbnail.src}
                alt={next.thumbnail.alt[locale]}
                width={next.thumbnail.width}
                height={next.thumbnail.height}
                className="aspect-[1.5]"
                imageClassName="aspect-[1.5]"
                sizes="(max-width: 812px) 100vw, 50vw"
              />
              <span className="mt-gutter-quarter block">{next.title[locale]}</span>
            </Link>
            <Link href="/projects" className="site-link mt-gutter-half block underline underline-offset-4">
              {t("detail.allProjects")}
            </Link>
          </div>
        )}
      </div>
    </PageGrid>
  );
}
