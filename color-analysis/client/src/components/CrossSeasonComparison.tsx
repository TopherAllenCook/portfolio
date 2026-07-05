import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, ArrowLeftRight } from "lucide-react";
import { allSeasons, seasonFamilies } from "@/data/seasons";

interface DrapeColor {
  name: string;
  hex: string;
  category: "depth" | "undertone" | "chroma";
  depth?: "light" | "medium" | "deep";
  undertone?: "warm" | "cool";
  chroma?: "clear" | "soft";
}

interface CrossSeasonComparisonProps {
  photoUrl: string;
  allDrapes: Record<string, DrapeColor[]>;
  defaultSeasonA?: string;
  defaultSeasonB?: string;
}

const familyAccents: Record<string, { border: string; ring: string; badge: string }> = {
  Spring: {
    border: "border-lime-400",
    ring: "ring-lime-300",
    badge: "bg-lime-100 text-lime-900",
  },
  Summer: {
    border: "border-sky-400",
    ring: "ring-sky-300",
    badge: "bg-sky-100 text-sky-900",
  },
  Autumn: {
    border: "border-orange-400",
    ring: "ring-orange-300",
    badge: "bg-orange-100 text-orange-900",
  },
  Winter: {
    border: "border-indigo-400",
    ring: "ring-indigo-300",
    badge: "bg-indigo-100 text-indigo-900",
  },
};

type Step = "depth" | "undertone" | "chroma";

interface SeasonPanelProps {
  photoUrl: string;
  side: "left" | "right";
  season: string;
  onSeasonChange: (season: string) => void;
  drapes: DrapeColor[];
  step: Step;
}

function SeasonPanel({ photoUrl, side, season, onSeasonChange, drapes, step }: SeasonPanelProps) {
  const [drapeIndex, setDrapeIndex] = useState(0);

  const stepDrapes = (drapes ?? []).filter((d) => d.category === step);
  const currentDrape = stepDrapes[drapeIndex] || stepDrapes[0];

  // Reset index when season or step changes
  useEffect(() => {
    setDrapeIndex(0);
  }, [season, step]);

  const seasonData = allSeasons[season];
  if (!currentDrape || !seasonData) return null;

  const accent = familyAccents[seasonData.family];

  return (
    <div className="flex-1 min-w-0 space-y-3">
      {/* Season Selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide whitespace-nowrap">
          {side === "left" ? "Season A" : "Season B"}:
        </span>
        <Select value={season} onValueChange={onSeasonChange}>
          <SelectTrigger className="w-[200px] bg-white border-amber-300 text-amber-900">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(seasonFamilies).map(([family, keys]) => (
              <SelectGroup key={family}>
                <SelectLabel>{family}</SelectLabel>
                {keys.map((key) => (
                  <SelectItem key={key} value={key}>
                    {allSeasons[key]?.season ?? key}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
        <Badge className={`${accent.badge} text-xs font-semibold`}>{seasonData.family}</Badge>
      </div>

      {/* Drape Display */}
      <div
        className={`relative rounded-xl overflow-hidden shadow-xl border-4 ${accent.border} aspect-video flex items-stretch`}
        style={{ backgroundColor: currentDrape.hex }}
      >
        <div className="w-1/3 flex flex-col items-center justify-center bg-black/10 p-4">
          <div
            className="w-14 h-14 rounded-lg shadow-lg border-4 border-white mb-2"
            style={{ backgroundColor: currentDrape.hex }}
          />
          <p className="text-xs font-bold text-white text-center drop-shadow-lg leading-tight">
            {currentDrape.name}
          </p>
          <p className="text-xs font-mono text-white/80 mt-1 drop-shadow-lg">{currentDrape.hex}</p>
          <Badge className={`${accent.badge} text-xs font-semibold mt-2`}>{seasonData.season}</Badge>
        </div>
        <div className="w-2/3 overflow-hidden">
          <img
            src={photoUrl}
            alt={`Photo draped with ${seasonData.season} color`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3 bg-white/60 p-2 rounded-lg border border-amber-200/50">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDrapeIndex((prev) => (prev - 1 + stepDrapes.length) % stepDrapes.length)}
          className="border-amber-300 text-amber-900 hover:bg-amber-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="text-xs font-bold text-amber-900 min-w-[60px] text-center">
          {drapeIndex + 1} / {stepDrapes.length}
        </span>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDrapeIndex((prev) => (prev + 1) % stepDrapes.length)}
          className="border-amber-300 text-amber-900 hover:bg-amber-100"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Swatch Grid */}
      <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
        {stepDrapes.map((drape, idx) => (
          <button
            key={idx}
            onClick={() => setDrapeIndex(idx)}
            className={`h-10 rounded-lg border-2 transition-all duration-200 hover:shadow-lg active:scale-95 ${
              idx === drapeIndex
                ? `${accent.border} shadow-lg ring-2 ${accent.ring}`
                : "border-transparent hover:border-amber-400"
            }`}
            style={{ backgroundColor: drape.hex }}
            title={drape.name}
          />
        ))}
      </div>
    </div>
  );
}

export default function CrossSeasonComparison({
  photoUrl,
  allDrapes,
  defaultSeasonA = "deepAutumn",
  defaultSeasonB = "softAutumn",
}: CrossSeasonComparisonProps) {
  const [step, setStep] = useState<Step>("depth");
  const [seasonA, setSeasonA] = useState<string>(defaultSeasonA);
  const [seasonB, setSeasonB] = useState<string>(defaultSeasonB);

  const handleSwapSeasons = () => {
    setSeasonA(seasonB);
    setSeasonB(seasonA);
  };

  const labelA = allSeasons[seasonA]?.season ?? seasonA;
  const labelB = allSeasons[seasonB]?.season ?? seasonB;

  return (
    <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border-b border-amber-200">
        <CardTitle className="text-2xl text-amber-900 flex items-center gap-3">
          <ArrowLeftRight className="w-6 h-6" />
          Cross-Season Drape Comparison
        </CardTitle>
        <CardDescription className="text-amber-700">
          Drape colors from any two of the 12 seasons at the same time. Compare{" "}
          <span className="font-semibold">{labelA}</span> against{" "}
          <span className="font-semibold">{labelB}</span> to see which one truly flatters your
          complexion.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Step Selector + Swap */}
        <div className="flex gap-2 flex-wrap items-center">
          {(["depth", "undertone", "chroma"] as const).map((s) => (
            <Button
              key={s}
              size="sm"
              variant={step === s ? "default" : "outline"}
              onClick={() => setStep(s)}
              className={
                step === s
                  ? "bg-amber-700 hover:bg-amber-800 text-white"
                  : "border-amber-300 text-amber-900 hover:bg-amber-50"
              }
            >
              {s === "depth" && "Step 1: Depth"}
              {s === "undertone" && "Step 2: Undertone"}
              {s === "chroma" && "Step 3: Chroma"}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline"
            onClick={handleSwapSeasons}
            className="border-amber-300 text-amber-900 hover:bg-amber-50 ml-auto"
          >
            <ArrowLeftRight className="w-4 h-4 mr-1" />
            Swap Sides
          </Button>
        </div>

        {/* Side-by-Side Panels */}
        <div className="flex gap-6 flex-col lg:flex-row">
          <SeasonPanel
            photoUrl={photoUrl}
            side="left"
            season={seasonA}
            onSeasonChange={setSeasonA}
            drapes={allDrapes[seasonA]}
            step={step}
          />
          <div className="hidden lg:flex items-center">
            <div className="w-px bg-amber-200 self-stretch" />
          </div>
          <SeasonPanel
            photoUrl={photoUrl}
            side="right"
            season={seasonB}
            onSeasonChange={setSeasonB}
            drapes={allDrapes[seasonB]}
            step={step}
          />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50/60 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>How to use:</strong> Pick a season for each side, then cycle through comparable
            colors (e.g., both sides on "Undertone") and observe which season's version makes your
            skin look healthier and your eyes brighter. The season whose colors consistently flatter
            you across depth, undertone, and chroma is likely your true seasonal type.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
