import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { readableTextColor, swatchBorderColor, isValidHex } from "@shared/color";

export interface ColorSwatchProps {
  name: string;
  hex: string;
  /** Wrapper element classes. */
  className?: string;
  /** Classes for the colored box itself (e.g. its height). */
  swatchClassName?: string;
  /** Hide the name/hex caption and render just the interactive chip. */
  showLabel?: boolean;
  /** Caption text color; defaults to the app's amber palette. */
  labelClassName?: string;
}

/**
 * An accessible, self-labeling color chip.
 *
 * The raw app rendered palette colors as bare `<div>`s: invisible to screen
 * readers, unreadable when a swatch was near-white, and impossible to copy.
 * This component fixes all three using the shared color math — it exposes an
 * accessible name, draws a contrast-aware hairline so pale swatches stay
 * visible, overlays the hex in a legible color on hover/focus, and copies the
 * hex to the clipboard when activated (by mouse or keyboard).
 */
export default function ColorSwatch({
  name,
  hex,
  className,
  swatchClassName,
  showLabel = true,
  labelClassName,
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const valid = isValidHex(hex);
  const textColor = valid ? readableTextColor(hex) : "#000000";
  const borderColor = valid ? swatchBorderColor(hex) : "rgba(0,0,0,0.18)";

  async function copyHex() {
    try {
      await navigator.clipboard?.writeText(hex);
      setCopied(true);
      toast.success(`Copied ${hex}`);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Couldn't copy to clipboard");
    }
  }

  return (
    <div className={cn("text-center", className)}>
      <button
        type="button"
        onClick={copyHex}
        aria-label={`${name}, ${hex}. Activate to copy hex code.`}
        title={`${name} — ${hex}`}
        style={{ backgroundColor: valid ? hex : undefined, borderColor }}
        className={cn(
          "group relative w-full h-24 rounded-lg shadow-md border-2",
          "cursor-pointer transition-transform hover:scale-[1.02]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500",
          !valid && "bg-neutral-200",
          swatchClassName,
        )}
      >
        <span
          aria-hidden="true"
          style={{ color: textColor }}
          className="absolute inset-0 flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wide opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> {hex.toUpperCase()}
            </>
          )}
        </span>
      </button>
      {showLabel && (
        <>
          <p className={cn("font-medium text-amber-900 text-sm mt-2", labelClassName)}>
            {name}
          </p>
          <p className="text-xs text-amber-600">{hex.toUpperCase()}</p>
        </>
      )}
    </div>
  );
}
