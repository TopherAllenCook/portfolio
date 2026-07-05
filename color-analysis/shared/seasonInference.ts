/**
 * Season inference logic for the "Find My Season" wizard.
 *
 * The wizard collects verdicts across three dimensions:
 * - depth: which value range flatters most (light / medium / deep)
 * - undertone: warm vs cool (with neutral leanings)
 * - chroma: clear/bright vs soft/muted
 *
 * These three axes map to the 12-season system:
 *
 * | Undertone | Chroma  | Depth  | Season        |
 * |-----------|---------|--------|---------------|
 * | warm      | bright  | light  | lightSpring   |
 * | warm      | bright  | medium | trueSpring    |
 * | warm      | bright  | deep   | brightSpring  |
 * | warm      | muted   | light  | softAutumn    |
 * | warm      | muted   | medium | trueAutumn    |
 * | warm      | muted   | deep   | deepAutumn    |
 * | cool      | muted   | light  | lightSummer   |
 * | cool      | muted   | medium | trueSummer    |
 * | cool      | muted   | deep   | softSummer    |
 * | cool      | bright  | light  | brightWinter  |
 * | cool      | bright  | medium | trueWinter    |
 * | cool      | bright  | deep   | deepWinter    |
 *
 * The mapping prioritizes the classic definitions: Springs are warm+bright,
 * Autumns warm+muted, Summers cool+muted, Winters cool+bright, with depth
 * selecting the sub-season within each family.
 */

export type DepthVerdict = "light" | "medium" | "deep";
export type UndertoneVerdict = "warm" | "cool";
export type ChromaVerdict = "bright" | "muted";

export interface WizardVerdicts {
  depth: DepthVerdict;
  undertone: UndertoneVerdict;
  chroma: ChromaVerdict;
}

export type SeasonKey =
  | "lightSpring"
  | "trueSpring"
  | "brightSpring"
  | "lightSummer"
  | "trueSummer"
  | "softSummer"
  | "softAutumn"
  | "trueAutumn"
  | "deepAutumn"
  | "deepWinter"
  | "trueWinter"
  | "brightWinter";

const inferenceTable: Record<
  UndertoneVerdict,
  Record<ChromaVerdict, Record<DepthVerdict, SeasonKey>>
> = {
  warm: {
    bright: {
      light: "lightSpring",
      medium: "trueSpring",
      deep: "brightSpring",
    },
    muted: {
      light: "softAutumn",
      medium: "trueAutumn",
      deep: "deepAutumn",
    },
  },
  cool: {
    muted: {
      light: "lightSummer",
      medium: "trueSummer",
      deep: "softSummer",
    },
    bright: {
      light: "brightWinter",
      medium: "trueWinter",
      deep: "deepWinter",
    },
  },
};

/** Infer the most likely season from wizard verdicts. */
export function inferSeason(verdicts: WizardVerdicts): SeasonKey {
  return inferenceTable[verdicts.undertone][verdicts.chroma][verdicts.depth];
}

/**
 * Runner-up seasons: the two adjacent sub-seasons within the same family,
 * so users can compare their primary suggestion against close alternatives.
 */
export function getRunnerUps(verdicts: WizardVerdicts): SeasonKey[] {
  const family = inferenceTable[verdicts.undertone][verdicts.chroma];
  const primary = family[verdicts.depth];
  return (Object.values(family) as SeasonKey[]).filter((s) => s !== primary);
}

/** Human-readable explanation of why a season was suggested. */
export function explainInference(verdicts: WizardVerdicts): string {
  const undertoneText =
    verdicts.undertone === "warm"
      ? "warm undertones (golden, peachy colors flattered you)"
      : "cool undertones (blue-based, rosy colors flattered you)";
  const chromaText =
    verdicts.chroma === "bright"
      ? "clear, saturated colors looked better than muted ones"
      : "soft, muted colors looked better than bright ones";
  const depthText =
    verdicts.depth === "light"
      ? "lighter colors harmonized best with your features"
      : verdicts.depth === "deep"
        ? "deeper colors harmonized best with your features"
        : "medium-depth colors harmonized best with your features";
  return `You showed ${undertoneText}, ${chromaText}, and ${depthText}.`;
}
