import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DrapeColor {
  name: string;
  hex: string;
  category: "depth" | "undertone" | "chroma";
  depth?: "light" | "medium" | "deep";
  undertone?: "warm" | "cool";
  chroma?: "clear" | "soft";
}

interface ColorDrapeComparisonProps {
  photoUrl: string;
  drapes: DrapeColor[];
  season: string;
}

const seasonLabels: Record<string, string> = {
  lightSpring: "Light Spring",
  trueSpring: "True Spring",
  brightSpring: "Bright Spring",
  lightSummer: "Light Summer",
  trueSummer: "True Summer",
  softSummer: "Soft Summer",
  softAutumn: "Soft Autumn",
  trueAutumn: "True Autumn",
  deepAutumn: "Deep Autumn",
  deepWinter: "Deep Winter",
  trueWinter: "True Winter",
  brightWinter: "Bright Winter",
};

export default function ColorDrapeComparison({ photoUrl, drapes, season }: ColorDrapeComparisonProps) {
  const [currentStep, setCurrentStep] = useState<"depth" | "undertone" | "chroma">("depth");
  const [currentDrapeIndex, setCurrentDrapeIndex] = useState(0);
  const [compareMode, setCompareMode] = useState(false);
  const [compareIndex, setCompareIndex] = useState(1);

  // Reset drape selection when the season changes so stale indices never persist
  useEffect(() => {
    setCurrentStep("depth");
    setCurrentDrapeIndex(0);
    setCompareMode(false);
    setCompareIndex(1);
  }, [season]);

  // Filter drapes by current step
  const currentDrapes = drapes.filter((d) => d.category === currentStep);
  const currentDrape = currentDrapes[currentDrapeIndex] || currentDrapes[0];
  const compareDrape = compareMode ? (currentDrapes[compareIndex] || currentDrapes[0]) : null;

  const handleNextDrape = () => {
    setCurrentDrapeIndex((prev) => (prev + 1) % currentDrapes.length);
  };

  const handlePrevDrape = () => {
    setCurrentDrapeIndex((prev) => (prev - 1 + currentDrapes.length) % currentDrapes.length);
  };

  const handleStepChange = (step: "depth" | "undertone" | "chroma") => {
    setCurrentStep(step);
    setCurrentDrapeIndex(0);
    setCompareMode(false);
  };

  const handleDrapeClick = (index: number) => {
    if (compareMode) {
      setCompareIndex(index);
    } else {
      setCurrentDrapeIndex(index);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
          <CardTitle className="text-2xl text-amber-900">Professional Color Draping Analysis</CardTitle>
          <CardDescription className="text-amber-700">
            Currently draping with <span className="font-semibold">{seasonLabels[season]}</span> colors. Click colors to test them, or enable comparison mode to see two colors side-by-side. Switch seasons above to compare palettes.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Analysis Steps */}
          <div className="flex gap-2 flex-wrap">
            {(["depth", "undertone", "chroma"] as const).map((step) => (
              <Button
                key={step}
                size="sm"
                variant={currentStep === step ? "default" : "outline"}
                onClick={() => handleStepChange(step)}
                className={
                  currentStep === step
                    ? "bg-amber-700 hover:bg-amber-800 text-white"
                    : "border-amber-300 text-amber-900 hover:bg-amber-50"
                }
              >
                {step === "depth" && "Step 1: Depth"}
                {step === "undertone" && "Step 2: Undertone"}
                {step === "chroma" && "Step 3: Chroma"}
              </Button>
            ))}
            <Button
              size="sm"
              variant={compareMode ? "default" : "outline"}
              onClick={() => setCompareMode(!compareMode)}
              className={
                compareMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white ml-auto"
                  : "border-amber-300 text-amber-900 hover:bg-amber-50 ml-auto"
              }
            >
              {compareMode ? "✓ Compare Mode ON" : "Compare Mode"}
            </Button>
          </div>

          {/* Main Draping Display */}
          <div className="space-y-4">
            <h4 className="font-semibold text-amber-900 text-sm uppercase tracking-wide">
              {currentStep.charAt(0).toUpperCase() + currentStep.slice(1)} Analysis
            </h4>

            {/* Photo with Color Drape(s) */}
            <div className="flex gap-4 flex-col lg:flex-row">
              {/* Main Drape */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-amber-700 mb-2 uppercase tracking-wide">
                  {compareMode ? "Color 1" : "Current Drape"}
                </div>
                <div
                  className="relative rounded-xl overflow-hidden shadow-xl border-4 border-amber-300 aspect-video flex items-stretch"
                  style={{
                    backgroundColor: currentDrape.hex,
                  }}
                >
                  {/* Left side: Color block with info */}
                  <div className="w-1/3 flex flex-col items-center justify-center bg-black/10 p-4">
                    <div
                      className="w-16 h-16 rounded-lg shadow-lg border-4 border-white mb-3"
                      style={{ backgroundColor: currentDrape.hex }}
                    />
                    <p className="text-xs font-bold text-white text-center drop-shadow-lg leading-tight">
                      {currentDrape.name}
                    </p>
                    <p className="text-xs font-mono text-white/80 mt-1 drop-shadow-lg">
                      {currentDrape.hex}
                    </p>
                  </div>

                  {/* Right side: Photo */}
                  <div className="w-2/3 overflow-hidden">
                    <img
                      src={photoUrl}
                      alt="Your photo with color drape"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Color Info Card */}
                <div className="bg-white/60 p-3 rounded-lg border border-amber-200/50 mt-3 flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-lg shadow-lg border-4 border-white flex-shrink-0"
                    style={{ backgroundColor: currentDrape.hex }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-amber-900 text-sm">{currentDrape.name}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentDrape.depth && (
                        <Badge className="bg-amber-100 text-amber-900 text-xs font-semibold">
                          {currentDrape.depth.charAt(0).toUpperCase() + currentDrape.depth.slice(1)}
                        </Badge>
                      )}
                      {currentDrape.undertone && (
                        <Badge className="bg-amber-100 text-amber-900 text-xs font-semibold">
                          {currentDrape.undertone.charAt(0).toUpperCase() + currentDrape.undertone.slice(1)}
                        </Badge>
                      )}
                      {currentDrape.chroma && (
                        <Badge className="bg-amber-100 text-amber-900 text-xs font-semibold">
                          {currentDrape.chroma.charAt(0).toUpperCase() + currentDrape.chroma.slice(1)}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Compare Drape (if enabled) */}
              {compareMode && compareDrape && (
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">
                    Color 2 (Compare)
                  </div>
                  <div
                    className="relative rounded-xl overflow-hidden shadow-xl border-4 border-blue-300 aspect-video flex items-stretch"
                    style={{
                      backgroundColor: compareDrape.hex,
                    }}
                  >
                    {/* Left side: Color block with info */}
                    <div className="w-1/3 flex flex-col items-center justify-center bg-black/10 p-4">
                      <div
                        className="w-16 h-16 rounded-lg shadow-lg border-4 border-white mb-3"
                        style={{ backgroundColor: compareDrape.hex }}
                      />
                      <p className="text-xs font-bold text-white text-center drop-shadow-lg leading-tight">
                        {compareDrape.name}
                      </p>
                      <p className="text-xs font-mono text-white/80 mt-1 drop-shadow-lg">
                        {compareDrape.hex}
                      </p>
                    </div>

                    {/* Right side: Photo */}
                    <div className="w-2/3 overflow-hidden">
                      <img
                        src={photoUrl}
                        alt="Your photo with compare drape"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Color Info Card */}
                  <div className="bg-white/60 p-3 rounded-lg border border-blue-200/50 mt-3 flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-lg shadow-lg border-4 border-white flex-shrink-0"
                      style={{ backgroundColor: compareDrape.hex }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-blue-900 text-sm">{compareDrape.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {compareDrape.depth && (
                          <Badge className="bg-blue-100 text-blue-900 text-xs font-semibold">
                            {compareDrape.depth.charAt(0).toUpperCase() + compareDrape.depth.slice(1)}
                          </Badge>
                        )}
                        {compareDrape.undertone && (
                          <Badge className="bg-blue-100 text-blue-900 text-xs font-semibold">
                            {compareDrape.undertone.charAt(0).toUpperCase() + compareDrape.undertone.slice(1)}
                          </Badge>
                        )}
                        {compareDrape.chroma && (
                          <Badge className="bg-blue-100 text-blue-900 text-xs font-semibold">
                            {compareDrape.chroma.charAt(0).toUpperCase() + compareDrape.chroma.slice(1)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-amber-50/70 to-orange-50/70 p-4 rounded-lg border border-amber-200/50">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrevDrape}
                className="border-amber-300 text-amber-900 hover:bg-amber-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-sm font-bold text-amber-900 min-w-[100px] text-center">
                {currentDrapeIndex + 1} / {currentDrapes.length}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNextDrape}
                className="border-amber-300 text-amber-900 hover:bg-amber-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Color Swatch Grid */}
            <div>
              <p className="text-xs font-semibold text-amber-700 mb-3 uppercase tracking-wide">
                {compareMode ? "Select Color 2:" : "Select Color:"}
              </p>
              <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {currentDrapes.map((drape, idx) => {
                  const isSelected = compareMode ? idx === compareIndex : idx === currentDrapeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleDrapeClick(idx)}
                      className={`h-12 rounded-lg border-3 transition-all duration-200 hover:shadow-lg active:scale-95 ${
                        isSelected
                          ? compareMode
                            ? "border-blue-700 shadow-lg ring-2 ring-blue-300"
                            : "border-amber-700 shadow-lg ring-2 ring-amber-300"
                          : "border-transparent hover:border-amber-400"
                      }`}
                      style={{ backgroundColor: drape.hex }}
                      title={drape.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50/60 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>How to use:</strong> Click through colors to see how each one appears next to your face. Notice which colors make your skin glow, your eyes brighter, and your overall appearance more vibrant. Use <strong>Compare Mode</strong> to see two colors side-by-side and notice the subtle differences in how they affect your complexion.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
