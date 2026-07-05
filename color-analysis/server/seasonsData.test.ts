import { describe, expect, it } from "vitest";
import { allSeasons, seasonFamilies, seasonKeys } from "@/data/seasons";
import { allSeasonDrapes } from "@/data/allDrapes";
import { isValidHex } from "../shared/color";

/**
 * These tests guard the hand-authored palette data. A single mistyped hex or a
 * season missing its accent palette is invisible in review but breaks a swatch
 * in the UI, so we assert the shape and validity of every season up front.
 */

describe("season data integrity", () => {
  it("defines exactly the 12 seasons", () => {
    expect(seasonKeys).toHaveLength(12);
    expect(new Set(seasonKeys).size).toBe(12);
  });

  it("groups all 12 seasons into the four families, three each", () => {
    const families = Object.values(seasonFamilies).flat();
    expect(families).toHaveLength(12);
    expect(new Set(families)).toEqual(new Set(seasonKeys));
    for (const keys of Object.values(seasonFamilies)) {
      expect(keys).toHaveLength(3);
    }
  });

  it.each(seasonKeys)("%s has complete, non-empty palettes", (key) => {
    const s = allSeasons[key];
    expect(s.key).toBe(key);
    expect(s.season.length).toBeGreaterThan(0);
    expect(s.clothing.primary.length).toBeGreaterThan(0);
    expect(s.clothing.neutrals.length).toBeGreaterThan(0);
    expect(s.clothing.accents.length).toBeGreaterThan(0);
    expect(s.jewelry.metals.length).toBeGreaterThan(0);
    expect(s.characteristics.length).toBeGreaterThan(0);
    expect(s.avoid.length).toBeGreaterThan(0);
  });

  it("uses only valid hex colors for every swatch", () => {
    for (const key of seasonKeys) {
      const s = allSeasons[key];
      const swatches = [
        ...s.clothing.primary,
        ...s.clothing.neutrals,
        ...s.clothing.accents,
        ...s.jewelry.metals,
      ];
      for (const sw of swatches) {
        expect(isValidHex(sw.hex), `${key}: ${sw.name} = ${sw.hex}`).toBe(true);
        expect(sw.name.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("provides drape colors for every season", () => {
    for (const key of seasonKeys) {
      const drapes = allSeasonDrapes[key];
      expect(drapes, `missing drapes for ${key}`).toBeDefined();
      expect(drapes.length).toBeGreaterThan(0);
      for (const d of drapes) {
        expect(isValidHex(d.hex), `${key} drape ${d.hex}`).toBe(true);
      }
    }
  });
});
