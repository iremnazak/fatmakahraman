import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({ children, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Tag className={cn("mb-gutter-half border-b pb-1.5 caps text-ironbark-50", className)}>
      {children}
    </Tag>
  );
}
