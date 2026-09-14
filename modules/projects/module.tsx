import { useTranslations } from "next-intl";

import { PageGrid, ContentLeft } from "@/components/page-grid";
import { projects } from "@/lib/data/projects";

import { ProjectCard } from "./project-card";

export function ProjectsModule() {
  const t = useTranslations("Projects");

  return (
    <PageGrid
      aside={
        <ContentLeft title={t("title")}>
          <p>{t("intro")}</p>
        </ContentLeft>
      }
    >
      <div className="flex flex-col p-gutter-half pt-content-top [&>*:last-child>div]:pb-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </div>
    </PageGrid>
  );
}
