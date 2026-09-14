import { cn } from "@/lib/utils";

export type MetaItem = { label: string; value: React.ReactNode };

type MetaListProps = {
  items: MetaItem[];
  className?: string;
  columns?: 1 | 2 | 3;
};

/**
 * Small uppercase label / value pairs, as used under every project.
 */
export function MetaList({ items, className, columns = 2 }: MetaListProps) {
  return (
    <dl
      className={cn(
        "grid gap-x-gutter gap-y-3 caps",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 site:grid-cols-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <div key={i}>
          <dt className="text-ironbark-50">{item.label}</dt>
          <dd className="m-0">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
