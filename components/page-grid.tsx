import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

type PageGridProps = {
  /** Sticky column: page title and introduction. */
  aside: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Extra classes for the scrolling column. */
  contentClassName?: string;
};

/**
 * Two-column page layout: a sticky left column with the page title and
 * introduction, and a scrolling right column separated by a hairline.
 * On wide screens the site header lives inside the sticky left column
 * and the right column starts at the very top of the page; below that
 * the header is a full-width bar rendered by the site layout.
 * Collapses to a single column below the `site` breakpoint.
 */
export function PageGrid({ aside, children, className, contentClassName }: PageGridProps) {
  return (
    <div className={cn("flex w-full flex-wrap items-start justify-between", className)}>
      <aside className="w-full site:sticky site:top-0 site:w-1/2">
        <SiteHeader variant="column" className="hidden wide:block" />
        {aside}
      </aside>
      <section
        className={cn(
          "relative w-full pb-column-bottom site:w-1/2 site:border-l",
          contentClassName,
        )}
      >
        {children}
      </section>
    </div>
  );
}

type ContentLeftProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function ContentLeft({ title, children, className }: ContentLeftProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start px-gutter-half pt-content-top pb-gutter",
        className,
      )}
    >
      {title && <h1 className="mb-9 text-headline text-ironbark">{title}</h1>}
      <div className="prose-site max-w-[300px] text-intro text-ironbark site:max-w-[450px] wide:max-w-[580px] [&_p]:mb-gutter-half">
        {children}
      </div>
    </div>
  );
}
