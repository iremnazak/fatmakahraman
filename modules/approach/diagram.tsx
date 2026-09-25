import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n";
import { diagram, disciplines } from "@/lib/data/approach";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

/** Solid triangle head, drawn at a fixed size so it stays crisp at any scale. */
function ArrowHead({ direction, className }: { direction: Direction; className?: string }) {
  const points =
    direction === "down"
      ? "0,0 10,0 5,7"
      : direction === "up"
        ? "0,7 10,7 5,0"
        : direction === "right"
          ? "0,0 0,10 7,5"
          : "7,0 7,10 0,5";
  const horizontal = direction === "left" || direction === "right";

  return (
    <svg
      viewBox={horizontal ? "0 0 7 10" : "0 0 10 7"}
      width={horizontal ? 7 : 10}
      height={horizontal ? 10 : 7}
      aria-hidden="true"
      className={cn("block shrink-0 fill-ironbark", className)}
    >
      <polygon points={points} />
    </svg>
  );
}

/**
 * One flow in or out of the hub. On wide screens the shaft stretches to fill
 * its grid cell; below that it collapses to a short glyph beside the label.
 */
function Flow({ direction, label }: { direction: Direction; label: string }) {
  const vertical = direction === "up" || direction === "down";

  return (
    <div className="h-full w-full caps">
      {/* Stacked — every flow runs into the hub above */}
      <div className="flex items-center gap-2 wide:hidden">
        <span>{label}</span>
        <span className="block h-px flex-1 bg-ironbark" />
        <ArrowHead direction="right" />
      </div>

      {/* Wide — the shaft runs the length of the cell */}
      <div
        className={cn(
          "hidden h-full w-full wide:flex",
          vertical ? "flex-col items-center" : "items-center",
        )}
      >
        {vertical ? (
          <>
            {direction === "up" && <ArrowHead direction="up" />}
            <span
              className={cn(
                "w-px flex-1 bg-ironbark",
                direction === "down" ? "order-2" : "order-1",
              )}
            />
            <span
              className={cn(
                "block max-w-[14ch] py-gutter-quarter text-center text-ironbark-50",
                direction === "down" ? "order-1" : "order-3",
              )}
            >
              {label}
            </span>
            {direction === "down" && <ArrowHead direction="down" className="order-3" />}
          </>
        ) : (
          <div className="flex w-full flex-col">
            <span
              className={cn(
                "block pb-gutter-quarter text-ironbark-50",
                direction === "left" && "text-right",
              )}
            >
              {label}
            </span>
            <span className="flex items-center">
              {direction === "left" && <ArrowHead direction="left" />}
              <span className="h-px flex-1 bg-ironbark" />
              {direction === "right" && <ArrowHead direction="right" />}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/** Geometry of the hub, in the SVG's own 400 × 400 space. */
const HUB = {
  c: 200,
  rOuter: 198,
  rInner: 72,
  /** Distance of each orbit label from the centre, on both axes. */
  offset: 98,
  orbitFont: 10.5,
  orbitLine: 12.5,
} as const;

function Hub({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Approach");

  const { c, rOuter, rInner, offset, orbitFont, orbitLine } = HUB;
  const quadrants: [number, number][] = [
    [c - offset, c - offset],
    [c + offset, c - offset],
    [c - offset, c + offset],
    [c + offset, c + offset],
  ];

  const title = diagram.hub.title[locale];
  const subtitle = diagram.hub.subtitle[locale];
  const titleLine = 17;
  const subtitleLine = 11;
  const blockHeight = title.length * titleLine + 6 + subtitle.length * subtitleLine;
  const titleTop = c - blockHeight / 2 + titleLine * 0.78;

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label={t("diagramAlt")}
      className={cn("block h-auto w-full uppercase", className)}
    >
      <circle cx={c} cy={c} r={rOuter} className="fill-ironbark" />
      <circle cx={c} cy={c} r={rInner} className="fill-creme" />

      {diagram.orbit.map((segment, index) => {
        const [x, y] = quadrants[index];
        const lines = segment.lines[locale];
        const top = y - ((lines.length - 1) * orbitLine) / 2;
        return (
          <text
            key={segment.id}
            x={x}
            textAnchor="middle"
            fontSize={orbitFont}
            className="fill-creme"
          >
            {lines.map((line, i) => (
              <tspan key={line} x={x} y={top + i * orbitLine} opacity={i === 0 ? 1 : 0.82}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}

      <text x={c} textAnchor="middle" className="fill-ironbark">
        {title.map((line, i) => (
          <tspan key={line} x={c} y={titleTop + i * titleLine} fontSize={15}>
            {line}
          </tspan>
        ))}
        {subtitle.map((line, i) => (
          <tspan
            key={line}
            x={c}
            y={titleTop + title.length * titleLine + 3 + i * subtitleLine}
            fontSize={9}
            opacity={0.6}
          >
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  );
}

function Panel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex h-full flex-col border p-gutter-half caps">
      <h3 className="border-b pb-1.5 text-ironbark-50">{title}</h3>
      <ul className="m-0 mt-gutter-quarter flex list-none flex-col gap-1 p-0">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="text-ironbark-50">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The project-organisation diagram — project management at the centre, the
 * flows that cross it, and the four bodies of work around it. A three-by-three
 * composition on wide screens; a single stacked column below that.
 */
export function ApproachDiagram() {
  const t = useTranslations("Approach");
  const locale = useLocale() as Locale;

  const [documents, phase3, phase12, consultancy] = diagram.panels;
  const [procurement, constructionGroup, businessDevelopment, cost] = diagram.flows;

  return (
    <figure className="m-0 grid grid-cols-1 gap-gutter site:grid-cols-2 wide:grid-cols-[1fr_minmax(300px,420px)_1fr] wide:grid-rows-[auto_auto_auto_auto]">
      {/* Hub */}
      <div className="site:col-span-2 wide:col-span-1 wide:col-start-2 wide:row-start-2 wide:self-center">
        <Hub className="mx-auto max-w-[360px] wide:max-w-none" />
      </div>

      {/* Flows */}
      <div className="grid grid-cols-1 gap-x-gutter gap-y-2 site:col-span-2 site:grid-cols-2 wide:contents">
        <div className="wide:col-start-2 wide:row-start-1 wide:self-stretch">
          <Flow direction="down" label={procurement.label[locale]} />
        </div>
        <div className="wide:col-start-1 wide:row-start-2 wide:self-center">
          <Flow direction="right" label={cost.label[locale]} />
        </div>
        <div className="wide:col-start-3 wide:row-start-2 wide:self-center">
          <Flow direction="left" label={constructionGroup.label[locale]} />
        </div>
        <div className="wide:col-start-2 wide:row-start-3 wide:self-stretch">
          <Flow direction="up" label={businessDevelopment.label[locale]} />
        </div>
      </div>

      {/* Bodies of work */}
      <div className="wide:col-start-1 wide:row-start-1">
        <Panel title={documents.title[locale]} items={documents.items[locale]} />
      </div>
      <div className="wide:col-start-3 wide:row-start-1">
        <Panel title={phase3.title[locale]} items={phase3.items[locale]} />
      </div>
      <div className="wide:col-start-1 wide:row-start-3">
        <Panel title={phase12.title[locale]} items={phase12.items[locale]} />
      </div>
      <div className="wide:col-start-3 wide:row-start-3">
        <Panel title={consultancy.title[locale]} items={consultancy.items[locale]} />
      </div>

      {/* Disciplines */}
      <figcaption className="border-t pt-gutter-quarter caps site:col-span-2 wide:col-span-3 wide:row-start-4">
        <span className="text-ironbark-50">{t("consultants")} — </span>
        {disciplines.items[locale].join(" · ")}
        <span className="mt-1 block text-ironbark-50">{t("specialists")}</span>
      </figcaption>
    </figure>
  );
}
