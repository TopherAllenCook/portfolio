import { useState } from "react";
import { Shirt } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

/**
 * An `<img>` that degrades to a styled placeholder when the source is missing
 * or fails to load. The original app pulled hero and illustration imagery from
 * the Manus storage proxy, which doesn't exist in a standalone deploy — this
 * keeps those slots looking intentional instead of showing broken images.
 */
export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackLabel,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 text-amber-700",
          className,
        )}
      >
        <Shirt className="h-8 w-8 opacity-60" aria-hidden="true" />
        {fallbackLabel && (
          <span className="px-4 text-center text-xs font-medium">{fallbackLabel}</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
