/**
 * Small, dependency-free color utilities shared by the client and server.
 *
 * The color-analysis UI paints dozens of palette swatches as bare colored
 * boxes. To keep those swatches accessible and legible we need a little real
 * color math: parse hex, compute WCAG relative luminance / contrast, and from
 * that derive a readable text color and a visible border for pale swatches.
 *
 * All functions are pure and framework-agnostic so they can be unit tested in
 * Node and imported into React components alike.
 */

export interface Rgb {
  r: number;
  g: number;
  b: number;
}

/** A 3- or 6-digit hex color, with or without a leading "#". */
const HEX_RE = /^#?(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** True when `hex` is a valid 3- or 6-digit hex color string. */
export function isValidHex(hex: string): boolean {
  return typeof hex === "string" && HEX_RE.test(hex.trim());
}

/**
 * Parse a hex color into 0–255 RGB channels. Accepts `#rgb`, `#rrggbb`, and the
 * same without the leading `#`. Returns `null` for anything unparseable so
 * callers can decide how to degrade.
 */
export function hexToRgb(hex: string): Rgb | null {
  if (!isValidHex(hex)) return null;
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(h, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

/** Convert an 8-bit sRGB channel to its linear-light value (WCAG definition). */
function channelToLinear(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/**
 * WCAG 2.x relative luminance (0 = black, 1 = white). Unparseable colors are
 * treated as mid-luminance so downstream contrast math still produces a sane,
 * non-throwing result.
 */
export function relativeLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0.5;
  return (
    0.2126 * channelToLinear(rgb.r) +
    0.7152 * channelToLinear(rgb.g) +
    0.0722 * channelToLinear(rgb.b)
  );
}

/** WCAG contrast ratio between two colors, in the range 1 (identical) to 21. */
export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Pick black or white text for maximum contrast against `background`. Prefers
 * black on ties so pale swatches read with a softer label.
 */
export function readableTextColor(background: string): "#000000" | "#ffffff" {
  return contrastRatio(background, "#000000") >=
    contrastRatio(background, "#ffffff")
    ? "#000000"
    : "#ffffff";
}

/**
 * A border color that keeps a swatch's edge visible on a light card. Very pale
 * swatches (cream, ivory) would otherwise vanish against a white background, so
 * they get a subtle dark hairline; darker swatches get a light one.
 */
export function swatchBorderColor(background: string): string {
  return relativeLuminance(background) > 0.75
    ? "rgba(0, 0, 0, 0.18)"
    : "rgba(255, 255, 255, 0.55)";
}
