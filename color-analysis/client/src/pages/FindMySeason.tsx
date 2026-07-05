import { useMemo, useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { allSeasons } from "@/data/seasons";
import { colorAnalysisData } from "@/data/colorAnalysis";
import {
  inferSeason,
  getRunnerUps,
  explainInference,
  type WizardVerdicts,
  type DepthVerdict,
  type UndertoneVerdict,
  type ChromaVerdict,
  type SeasonKey,
} from "@shared/seasonInference";
import { Sparkles, RotateCcw, ArrowRight, Save, Loader2, Camera } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

/**
 * Guided "Find My Season" wizard.
 * Each step shows the user's photo flanked by two drape colors (A/B).
 * The user picks which side flatters them more; three verdicts
 * (depth, undertone, chroma) map to one of the 12 seasons.
 */

type StepId = "intro" | "depth1" | "depth2" | "undertone" | "chroma" | "result";

interface AbChoice {
  label: string;
  hex: string;
  name: string;
}

// Depth round 1: light vs deep. Round 2 refines: winner vs medium.
const DEPTH_LIGHT: AbChoice = { label: "A", hex: "#E8C9A0", name: "Light Camel" };
const DEPTH_DEEP: AbChoice = { label: "B", hex: "#4A2C17", name: "Deep Espresso" };
const DEPTH_MEDIUM: AbChoice = { label: "B", hex: "#A9764B", name: "Medium Caramel" };

const UNDERTONE_WARM: AbChoice = { label: "A", hex: "#D2691E", name: "Warm Terracotta" };
const UNDERTONE_COOL: AbChoice = { label: "B", hex: "#7B8FBF", name: "Cool Slate Blue" };

const CHROMA_BRIGHT: AbChoice = { label: "A", hex: "#E8442E", name: "Clear Tomato Red" };
const CHROMA_MUTED: AbChoice = { label: "B", hex: "#B0785C", name: "Muted Clay" };

const STEP_ORDER: StepId[] = ["intro", "depth1", "depth2", "undertone", "chroma", "result"];

export default function FindMySeason() {
  const { isAuthenticated } = useAuth();
  const [step, setStep] = useState<StepId>("intro");
  const [depthRound1, setDepthRound1] = useState<"light" | "deep" | null>(null);
  const [depth, setDepth] = useState<DepthVerdict | null>(null);
  const [undertone, setUndertone] = useState<UndertoneVerdict | null>(null);
  const [chroma, setChroma] = useState<ChromaVerdict | null>(null);

  // Use the signed-in user's most recent analysis photo if available.
  const { data: analyses } = trpc.analysis.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const latestWithPhoto = analyses?.find((a) => a.photoUrl);
  const photoUrl = latestWithPhoto?.photoUrl ?? colorAnalysisData.personalPhoto;
  const usingOwnPhoto = Boolean(latestWithPhoto?.photoUrl);

  const utils = trpc.useUtils();
  const updateMutation = trpc.analysis.update.useMutation({
    onSuccess: () => {
      utils.analysis.list.invalidate();
      toast.success("Result saved to My Analysis");
    },
    onError: (e) => toast.error(e.message),
  });
  const createMutation = trpc.analysis.create.useMutation({
    onError: (e) => toast.error(e.message),
  });
  const saving = createMutation.isPending || updateMutation.isPending;

  const verdicts: WizardVerdicts | null = useMemo(() => {
    if (!depth || !undertone || !chroma) return null;
    return { depth, undertone, chroma };
  }, [depth, undertone, chroma]);

  const suggested: SeasonKey | null = verdicts ? inferSeason(verdicts) : null;
  const runnerUps: SeasonKey[] = verdicts ? getRunnerUps(verdicts) : [];
  const suggestedSeason = suggested ? allSeasons[suggested] : null;

  const stepIndex = STEP_ORDER.indexOf(step);
  const progress = (stepIndex / (STEP_ORDER.length - 1)) * 100;

  const restart = () => {
    setStep("intro");
    setDepthRound1(null);
    setDepth(null);
    setUndertone(null);
    setChroma(null);
  };

  const handleSave = () => {
    if (!suggested || !verdicts) return;
    createMutation.mutate(
      { title: `Find My Season — ${suggestedSeason?.season ?? suggested}` },
      {
        onSuccess: ({ id }) => {
          updateMutation.mutate({
            id,
            seasonKey: suggested,
            depthVerdict: verdicts.depth,
            undertoneVerdict: verdicts.undertone,
            chromaVerdict: verdicts.chroma === "bright" ? "clear" : "soft",
            notes: explainInference(verdicts),
            ...(usingOwnPhoto && photoUrl ? { photoUrl } : {}),
          });
        },
      },
    );
  };

  /** Renders the photo flanked by two drape choices. */
  const DrapeAB = ({
    title,
    description,
    left,
    right,
    onPick,
  }: {
    title: string;
    description: string;
    left: AbChoice;
    right: AbChoice;
    onPick: (side: "A" | "B") => void;
  }) => (
    <Card className="border-amber-200/50 bg-white/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-amber-900">{title}</CardTitle>
        <CardDescription className="text-amber-700">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { choice: left, side: "A" as const },
            { choice: right, side: "B" as const },
          ].map(({ choice, side }) => (
            <button
              key={side}
              onClick={() => onPick(side)}
              className="group rounded-xl overflow-hidden border-2 border-transparent hover:border-amber-600 focus-visible:border-amber-600 transition-colors text-left"
            >
              <div className="relative flex" style={{ backgroundColor: choice.hex }}>
                <div className="w-1/3 min-h-[220px] md:min-h-[300px]" />
                <div className="w-2/3">
                  <img
                    src={photoUrl}
                    alt="Analysis photo"
                    className="w-full h-[220px] md:h-[300px] object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-3 bg-white flex items-center justify-between">
                <div>
                  <p className="font-semibold text-amber-900 text-sm">
                    Option {side}: {choice.name}
                  </p>
                  <p className="text-xs text-amber-600">{choice.hex}</p>
                </div>
                <span className="text-xs font-medium text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Choose <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-amber-700/80 mt-4">
          Tip: Look at your skin, not the color. Which side makes your skin look clearer,
          your eyes brighter, and shadows softer?
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <SiteHeader />
      <main className="container py-10 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-amber-600" /> Find My Season
          </h1>
          <p className="text-amber-700 mt-1">
            A guided draping session: compare colors side-by-side and we'll suggest your
            seasonal color type from your choices.
          </p>
          <Progress value={progress} className="mt-4 h-2 bg-amber-100" />
        </div>

        {step === "intro" && (
          <Card className="border-amber-200/50 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">How it works</CardTitle>
              <CardDescription className="text-amber-700">
                Four quick comparisons, one result
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-800">
                We'll show your photo between two drape colors at a time. Pick whichever
                side makes your complexion look healthier. Your choices across{" "}
                <strong>depth</strong> (light vs. deep), <strong>undertone</strong> (warm
                vs. cool), and <strong>chroma</strong> (clear vs. muted) map to one of the
                12 seasonal color types.
              </p>
              <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <Camera className="w-4 h-4 shrink-0" />
                {usingOwnPhoto ? (
                  <span>Using your uploaded photo from My Analysis.</span>
                ) : (
                  <span>
                    Using the featured analysis photo.{" "}
                    {isAuthenticated ? (
                      <>
                        Upload your own under{" "}
                        <Link href="/my-analysis" className="underline font-medium">
                          My Analysis
                        </Link>{" "}
                        for a personal result.
                      </>
                    ) : (
                      <>Sign in and upload your own photo for a personal result.</>
                    )}
                  </span>
                )}
              </div>
              <Button
                onClick={() => setStep("depth1")}
                className="bg-amber-700 hover:bg-amber-800 text-white"
              >
                Start Draping <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === "depth1" && (
          <DrapeAB
            title="Step 1 of 4 — Depth (Round 1)"
            description="Light vs. deep: which side harmonizes with your features?"
            left={{ ...DEPTH_LIGHT, label: "A" }}
            right={{ ...DEPTH_DEEP, label: "B" }}
            onPick={(side) => {
              setDepthRound1(side === "A" ? "light" : "deep");
              setStep("depth2");
            }}
          />
        )}

        {step === "depth2" && depthRound1 && (
          <DrapeAB
            title="Step 2 of 4 — Depth (Round 2)"
            description={`${depthRound1 === "light" ? "Light" : "Deep"} won round 1 — now test it against a medium depth.`}
            left={depthRound1 === "light" ? DEPTH_LIGHT : DEPTH_DEEP}
            right={DEPTH_MEDIUM}
            onPick={(side) => {
              setDepth(side === "A" ? depthRound1 : "medium");
              setStep("undertone");
            }}
          />
        )}

        {step === "undertone" && (
          <DrapeAB
            title="Step 3 of 4 — Undertone"
            description="Warm vs. cool: which side makes your skin glow rather than look gray or ruddy?"
            left={UNDERTONE_WARM}
            right={UNDERTONE_COOL}
            onPick={(side) => {
              setUndertone(side === "A" ? "warm" : "cool");
              setStep("chroma");
            }}
          />
        )}

        {step === "chroma" && (
          <DrapeAB
            title="Step 4 of 4 — Chroma"
            description="Clear vs. muted: does saturation energize your face, or overwhelm it?"
            left={CHROMA_BRIGHT}
            right={CHROMA_MUTED}
            onPick={(side) => {
              setChroma(side === "A" ? "bright" : "muted");
              setStep("result");
            }}
          />
        )}

        {step === "result" && suggested && suggestedSeason && verdicts && (
          <div className="space-y-6">
            <Card className="border-amber-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardDescription className="text-amber-600 uppercase tracking-wide text-xs font-semibold">
                  Your Suggested Season
                </CardDescription>
                <CardTitle className="text-3xl text-amber-900">
                  {suggestedSeason.season}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-800">{explainInference(verdicts)}</p>
                <p className="text-amber-800">{suggestedSeason.description}</p>
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-2">
                    Your palette preview
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSeason.clothing.primary.slice(0, 8).map((c) => (
                      <div key={c.hex} className="text-center">
                        <div
                          className="w-12 h-12 rounded-lg shadow border-2 border-white"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-2">
                    Close alternatives worth comparing
                  </p>
                  <div className="flex gap-2">
                    {runnerUps.map((key) => (
                      <Badge
                        key={key}
                        variant="outline"
                        className="border-amber-300 text-amber-800"
                      >
                        {allSeasons[key]?.season ?? key}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-amber-700 mt-2">
                    Use the Cross-Season Comparison on the{" "}
                    <Link href="/seasons" className="underline">
                      All 12 Seasons
                    </Link>{" "}
                    page to verify against these alternatives.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {isAuthenticated ? (
                    <Button
                      onClick={handleSave}
                      disabled={saving}
                      className="bg-amber-700 hover:bg-amber-800 text-white"
                    >
                      {saving ? (
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4 mr-1" />
                      )}
                      Save to My Analysis
                    </Button>
                  ) : (
                    <p className="text-sm text-amber-700 self-center">
                      Sign in to save this result to your profile.
                    </p>
                  )}
                  <Link href="/seasons">
                    <Button variant="outline" className="border-amber-300 text-amber-800">
                      Explore {suggestedSeason.season} in Depth
                    </Button>
                  </Link>
                  {isAuthenticated && (
                    <Link href="/my-analysis">
                      <Button variant="outline" className="border-amber-300 text-amber-800">
                        View My Analysis
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    onClick={restart}
                    className="border-amber-300 text-amber-800"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" /> Start Over
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
