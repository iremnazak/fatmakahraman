import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import { lifecycle } from "@/lib/data/approach";
import { cn } from "@/lib/utils";

/** Tailwind needs the full class name, so the column tracks are spelled out. */
const colStart = [
  "",
  "wide:col-start-1",
  "wide:col-start-2",
  "wide:col-start-3",
  "wide:col-start-4",
  "wide:col-start-5",
  "wide:col-start-6",
  "wide:col-start-7",
  "wide:col-start-8",
];
const colSpan = [
  "",
  "wide:col-span-1",
  "wide:col-span-2",
  "wide:col-span-3",
  "wide:col-span-4",
  "wide:col-span-5",
  "wide:col-span-6",
  "wide:col-span-7",
  "wide:col-span-8",
];
/** The overlap bars keep their eight-column track at every width. */
const barStart = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
  "col-start-8",
];
const barSpan = [
  "",
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
];

/** Points down the stack, and right along the timeline on wide screens. */
function StageArrow() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 top-full z-10 -translate-x-1/2 translate-y-[3px] wide:left-full wide:top-1/2 wide:translate-x-[4px] wide:-translate-y-1/2"
    >
      <svg viewBox="0 0 10 7" width={10} height={7} className="block fill-ironbark wide:-rotate-90">
        <polygon points="0,0 10,0 5,7" />
      </svg>
    </span>
  );
}

/**
 * The project life cycle as a timeline — eight stages grouped into four macro
 * phases, with the overlap of those phases shown beneath. Eight columns on
 * wide screens; a single stacked column below that.
 */
export function LifecycleTimeline() {
  const t = useTranslations("Approach");
  const locale = useLocale() as Locale;

  return (
    <figure className="m-0" aria-label={t("lifecycleAlt")}>
      <div className="grid grid-cols-1 gap-x-gutter-half gap-y-gutter-half wide:grid-cols-8 wide:gap-y-0">
        {lifecycle.groups.map((group) => {
          const stages = lifecycle.stages.slice(group.from - 1, group.to);
          return (
            <div key={group.id} className="contents">
              {/* Macro phase */}
              <h3
                className={cn(
                  "border-t pt-1.5 caps text-ironbark-50 wide:row-start-1 wide:mb-gutter-quarter",
                  colStart[group.from],
                  colSpan[group.to - group.from + 1],
                  group.from > 1 && "wide:border-l wide:pl-gutter-quarter",
                )}
              >
                {group.label[locale]}
              </h3>

              {/* Stages */}
              {stages.map((stage, index) => {
                const position = group.from + index;
                const isLast = position === lifecycle.stages.length;
                return (
                  <div
                    key={stage.id}
                    className={cn(
                      "relative wide:row-start-2",
                      colStart[position],
                      "wide:col-span-1",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-full flex-col gap-1 border p-gutter-quarter caps",
                        stage.tone === "solid"
                          ? "border-ironbark bg-ironbark text-creme"
                          : "text-ironbark",
                      )}
                    >
                      {"phase" in stage && stage.phase && (
                        <span className="opacity-60">
                          {t("phaseLabel")} {stage.phase}
                        </span>
                      )}
                      <span>{stage.label[locale]}</span>
                    </div>
                    {!isLast && <StageArrow />}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* How the macro phases overlap */}
      <div className="mt-gutter grid grid-cols-8 gap-y-gutter-quarter">
        {lifecycle.spans.map((span) => (
          <div
            key={span.id}
            className={cn(
              "border-t pt-1 caps text-ironbark-50",
              barStart[span.from],
              barSpan[span.to - span.from + 1],
            )}
          >
            {span.label[locale]}
          </div>
        ))}
      </div>

      <figcaption className="mt-gutter-half caps text-ironbark-50">{t("designPhases")}</figcaption>
    </figure>
  );
}
