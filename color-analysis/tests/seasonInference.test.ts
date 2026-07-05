import { describe, expect, it } from "vitest";
import {
  inferSeason,
  getRunnerUps,
  explainInference,
  type WizardVerdicts,
  type SeasonKey,
} from "../shared/seasonInference";

describe("inferSeason", () => {
  const cases: Array<[WizardVerdicts, SeasonKey]> = [
    [{ undertone: "warm", chroma: "bright", depth: "light" }, "lightSpring"],
    [{ undertone: "warm", chroma: "bright", depth: "medium" }, "trueSpring"],
    [{ undertone: "warm", chroma: "bright", depth: "deep" }, "brightSpring"],
    [{ undertone: "warm", chroma: "muted", depth: "light" }, "softAutumn"],
    [{ undertone: "warm", chroma: "muted", depth: "medium" }, "trueAutumn"],
    [{ undertone: "warm", chroma: "muted", depth: "deep" }, "deepAutumn"],
    [{ undertone: "cool", chroma: "muted", depth: "light" }, "lightSummer"],
    [{ undertone: "cool", chroma: "muted", depth: "medium" }, "trueSummer"],
    [{ undertone: "cool", chroma: "muted", depth: "deep" }, "softSummer"],
    [{ undertone: "cool", chroma: "bright", depth: "light" }, "brightWinter"],
    [{ undertone: "cool", chroma: "bright", depth: "medium" }, "trueWinter"],
    [{ undertone: "cool", chroma: "bright", depth: "deep" }, "deepWinter"],
  ];

  it.each(cases)("maps %o to %s", (verdicts, expected) => {
    expect(inferSeason(verdicts)).toBe(expected);
  });

  it("covers all 12 seasons across the verdict space", () => {
    const seasons = new Set(cases.map(([v]) => inferSeason(v)));
    expect(seasons.size).toBe(12);
  });
});

describe("getRunnerUps", () => {
  it("returns the two sibling sub-seasons excluding the primary", () => {
    const verdicts: WizardVerdicts = {
      undertone: "warm",
      chroma: "muted",
      depth: "medium",
    };
    const runnerUps = getRunnerUps(verdicts);
    expect(runnerUps).toHaveLength(2);
    expect(runnerUps).toContain("softAutumn");
    expect(runnerUps).toContain("deepAutumn");
    expect(runnerUps).not.toContain("trueAutumn");
  });
});

describe("explainInference", () => {
  it("mentions warm undertone and muted chroma for autumn verdicts", () => {
    const text = explainInference({
      undertone: "warm",
      chroma: "muted",
      depth: "deep",
    });
    expect(text).toContain("warm undertones");
    expect(text).toContain("soft, muted colors");
    expect(text).toContain("deeper colors");
  });

  it("mentions cool undertone and bright chroma for winter verdicts", () => {
    const text = explainInference({
      undertone: "cool",
      chroma: "bright",
      depth: "light",
    });
    expect(text).toContain("cool undertones");
    expect(text).toContain("clear, saturated");
    expect(text).toContain("lighter colors");
  });
});
