import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import type { Project } from "@/types/content";
import { Link } from "@/lib/navigation";
import { TintedImage } from "@/components/tinted-image";
import { typologyLabels } from "@/lib/data/projects";
import { formatYears } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority }: ProjectCardProps) {
  const t = useTranslations("Projects.labels");
  const locale = useLocale() as Locale;
  const href = `/projects/${project.slug}`;

  return (
    <article className="w-full">
      <Link href={href} className="block">
        <TintedImage
          src={project.thumbnail.src}
          alt={project.thumbnail.alt[locale]}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          priority={priority}
          className="aspect-[1.5]"
          imageClassName="aspect-[1.5]"
          sizes="(max-width: 812px) 100vw, 50vw"
        />
      </Link>
      <div className="grid w-full grid-cols-6 gap-x-gutter pb-10 pt-gutter-quarter caps text-ironbark site:grid-cols-5">
        <div className="col-span-6 mb-3 site:col-span-2 site:mb-0">
          <Link href={href} className="site-link">
            <h3>{project.title[locale]}</h3>
          </Link>
        </div>
        <div className="col-span-2 site:col-span-1">
          <p>
            {t("typology")}
            <br />
            {typologyLabels[project.typology][locale]}
          </p>
        </div>
        <div className="col-span-2 site:col-span-1">
          <p>
            {t("location")}
            <br />
            {project.location[locale]}
          </p>
        </div>
        <div className="col-span-2 site:col-span-1">
          <p>
            {t("date")}
            <br />
            {formatYears(project.yearStart, project.yearEnd)}
          </p>
        </div>
      </div>
    </article>
  );
}
