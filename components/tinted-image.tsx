import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type TintedImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  imageClassName?: string;
  /** Disable the grayscale tint (e.g. for drawings). */
  plain?: boolean;
};

/**
 * Image rendered in grayscale that returns to colour on hover — the
 * signature treatment of every photograph on the site.
 */
export function TintedImage({ className, imageClassName, plain, alt, ...props }: TintedImageProps) {
  return (
    <figure className={cn("group relative m-0 block w-full overflow-hidden bg-placeholder", className)}>
      <Image
        alt={alt}
        className={cn(
          "block h-auto w-full object-cover",
          !plain && "tinted group-hover:filter-none",
          imageClassName,
        )}
        {...props}
      />
    </figure>
  );
}
