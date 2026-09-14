import { cn } from "@/lib/utils";

type LogoMarkProps = React.SVGProps<SVGSVGElement>;

/**
 * Geometric "K" mark built on a 16-unit grid — a slender stem and two 45° arms.
 */
export function LogoMark({ className, ...props }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("fill-ironbark", className)}
      {...props}
    >
      <path d="M0 0h3v16H0z" />
      <path d="M3 8l8-8h4L7.5 7.5 16 16h-4L5.5 9.5 3 12z" />
    </svg>
  );
}
