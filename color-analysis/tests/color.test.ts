import { describe, expect, it } from "vitest";
import {
  isValidHex,
  hexToRgb,
  relativeLuminance,
  contrastRatio,
  readableTextColor,
  swatchBorderColor,
} from "../shared/color";

describe("isValidHex", () => {
  it("accepts 3- and 6-digit hex, with or without #", () => {
    for (const h of ["#fff", "fff", "#FFFFFF", "#556B2F", "556b2f"]) {
      expect(isValidHex(h)).toBe(true);
    }
  });

  it("rejects malformed values", () => {
    for (const h of ["", "#", "#ff", "#fffff", "#gggggg", "red", "#1234567"]) {
      expect(isValidHex(h)).toBe(false);
    }
  });
});

describe("hexToRgb", () => {
  it("parses 6-digit hex", () => {
    expect(hexToRgb("#556B2F")).toEqual({ r: 85, g: 107, b: 47 });
  });

  it("expands 3-digit shorthand", () => {
    expect(hexToRgb("#fff")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("#0a0")).toEqual({ r: 0, g: 170, b: 0 });
  });

  it("returns null for invalid input", () => {
    expect(hexToRgb("not-a-color")).toBeNull();
  });
});

describe("relativeLuminance", () => {
  it("is 0 for black and 1 for white", () => {
    expect(relativeLuminance("#000000")).toBeCloseTo(0, 5);
    expect(relativeLuminance("#ffffff")).toBeCloseTo(1, 5);
  });

  it("orders a pale cream above a deep olive", () => {
    expect(relativeLuminance("#FFFDD0")).toBeGreaterThan(
      relativeLuminance("#556B2F"),
    );
  });
});

describe("contrastRatio", () => {
  it("is 21:1 for black on white", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 1);
  });

  it("is symmetric", () => {
    expect(contrastRatio("#556B2F", "#FFFDD0")).toBeCloseTo(
      contrastRatio("#FFFDD0", "#556B2F"),
      6,
    );
  });

  it("is 1:1 for identical colors", () => {
    expect(contrastRatio("#123456", "#123456")).toBeCloseTo(1, 6);
  });
});

describe("readableTextColor", () => {
  it("puts white text on dark backgrounds", () => {
    expect(readableTextColor("#3E2723")).toBe("#ffffff");
    expect(readableTextColor("#000000")).toBe("#ffffff");
  });

  it("puts black text on light backgrounds", () => {
    expect(readableTextColor("#FFFDD0")).toBe("#000000");
    expect(readableTextColor("#ffffff")).toBe("#000000");
  });

  it("always meets the WCAG AA (4.5:1) threshold for the chosen color", () => {
    for (const bg of ["#556B2F", "#CC5500", "#FFDB58", "#F5E6D3", "#367588"]) {
      const fg = readableTextColor(bg);
      expect(contrastRatio(bg, fg)).toBeGreaterThanOrEqual(4.5);
    }
  });
});

describe("swatchBorderColor", () => {
  it("gives pale swatches a dark hairline so they stay visible on white", () => {
    expect(swatchBorderColor("#FFFFF0")).toContain("0, 0, 0");
  });

  it("gives dark swatches a light hairline", () => {
    expect(swatchBorderColor("#3E2723")).toContain("255, 255, 255");
  });
});
