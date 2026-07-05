import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import ColorDrapeComparison from "@/components/ColorDrapeComparison";
import CrossSeasonComparison from "@/components/CrossSeasonComparison";
import ColorSwatch from "@/components/ColorSwatch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allSeasons, seasonFamilies, type SeasonData } from "@/data/seasons";
import { allSeasonDrapes } from "@/data/allDrapes";
import { colorAnalysisData } from "@/data/colorAnalysis";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

const familyStyles: Record<string, { chip: string; active: string }> = {
  Spring: {
    chip: "border-lime-300 text-lime-900 hover:bg-lime-50",
    active: "bg-lime-600 hover:bg-lime-700 text-white",
  },
  Summer: {
    chip: "border-sky-300 text-sky-900 hover:bg-sky-50",
    active: "bg-sky-600 hover:bg-sky-700 text-white",
  },
  Autumn: {
    chip: "border-orange-300 text-orange-900 hover:bg-orange-50",
    active: "bg-orange-700 hover:bg-orange-800 text-white",
  },
  Winter: {
    chip: "border-indigo-300 text-indigo-900 hover:bg-indigo-50",
    active: "bg-indigo-700 hover:bg-indigo-800 text-white",
  },
};

function SwatchGrid({ swatches }: { swatches: { name: string; hex: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {swatches.map((color, idx) => (
        <ColorSwatch key={idx} name={color.name} hex={color.hex} />
      ))}
    </div>
  );
}

function SeasonDetail({ season, photoUrl }: { season: SeasonData; photoUrl: string }) {
  return (
    <div className="space-y-8">
      <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3 flex-wrap">
            <CardTitle className="text-2xl text-amber-900">{season.season}</CardTitle>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 border-amber-300">
              {season.alternativeName}
            </Badge>
            <Badge variant="outline" className="border-amber-300 text-amber-700">
              {season.family} Family
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-amber-800 leading-relaxed">{season.description}</p>
          <div className="flex flex-wrap gap-2">
            {season.characteristics.map((char, idx) => (
              <Badge key={idx} variant="secondary" className="bg-amber-100 text-amber-900 border-amber-300">
                {char}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="clothing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/40 backdrop-blur-sm border border-amber-200/30">
          <TabsTrigger value="clothing">Clothing</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="jewelry">Jewelry</TabsTrigger>
          <TabsTrigger value="avoid">Avoid</TabsTrigger>
        </TabsList>

        <TabsContent value="clothing" className="space-y-6">
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Primary Palette</CardTitle>
              <CardDescription>The most flattering colors for {season.season}</CardDescription>
            </CardHeader>
            <CardContent>
              <SwatchGrid swatches={season.clothing.primary} />
            </CardContent>
          </Card>
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Neutral Palette</CardTitle>
              <CardDescription>Versatile neutrals that work with everything</CardDescription>
            </CardHeader>
            <CardContent>
              <SwatchGrid swatches={season.clothing.neutrals} />
            </CardContent>
          </Card>
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Accent Colors</CardTitle>
              <CardDescription>Bold colors for special touches</CardDescription>
            </CardHeader>
            <CardContent>
              <SwatchGrid swatches={season.clothing.accents} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns">
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Pattern Recommendations</CardTitle>
              <CardDescription>Guidelines for choosing patterns that complement {season.season} coloring</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {season.patterns.map((pattern, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="text-amber-800">{pattern}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jewelry" className="space-y-6">
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Metal Tones</CardTitle>
              <CardDescription>Best metals for {season.season} coloring</CardDescription>
            </CardHeader>
            <CardContent>
              <SwatchGrid swatches={season.jewelry.metals} />
            </CardContent>
          </Card>
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900">Recommended Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {season.jewelry.materials.map((material, idx) => (
                  <Badge key={idx} variant="outline" className="bg-amber-50 text-amber-900 border-amber-300">
                    {material}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="avoid">
          <Card className="border-red-200/50 bg-red-50/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-red-900">Colors to Avoid</CardTitle>
              <CardDescription>These colors may not flatter {season.season} coloring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {season.avoid.map((cat, idx) => (
                <div key={idx} className="border-l-4 border-red-300 pl-4 py-2">
                  <h4 className="font-semibold text-red-900">{cat.category}</h4>
                  <p className="text-sm text-red-700 mb-2">{cat.colors.join(", ")}</p>
                  <p className="text-sm text-red-600 italic">{cat.reason}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Draping tool for this season */}
      <section>
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Drape {season.season} Colors on Your Photo
        </h2>
        <ColorDrapeComparison photoUrl={photoUrl} drapes={allSeasonDrapes[season.key]} season={season.key} />
      </section>
    </div>
  );
}

export default function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState<string>("deepAutumn");
  const { isAuthenticated } = useAuth();

  // Use the signed-in user's most recent analysis photo if available; otherwise the featured photo
  const { data: myAnalyses } = trpc.analysis.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const myPhoto = myAnalyses?.find((a) => a.photoUrl)?.photoUrl;
  const photoUrl = myPhoto || colorAnalysisData.personalPhoto;

  const season = allSeasons[selectedSeason];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <SiteHeader />
      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">Explore All 12 Seasons</h1>
          <p className="text-amber-800 max-w-3xl">
            The 12-season color system divides coloring into four families—Spring, Summer, Autumn,
            and Winter—each with three sub-seasons. Select any season below to view its complete
            palette, styling guidance, and drape its colors against the analysis photo.
            {isAuthenticated && myPhoto
              ? " You're seeing your own uploaded photo in the draping tools."
              : " Sign in and upload your photo under My Analysis to drape colors on yourself."}
          </p>
        </div>

        {/* Season Picker grouped by family */}
        <div className="space-y-3 mb-10">
          {Object.entries(seasonFamilies).map(([family, keys]) => (
            <div key={family} className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wide text-amber-700 w-16">
                {family}
              </span>
              {keys.map((key) => (
                <Button
                  key={key}
                  size="sm"
                  variant={selectedSeason === key ? "default" : "outline"}
                  onClick={() => setSelectedSeason(key)}
                  className={
                    selectedSeason === key ? familyStyles[family].active : familyStyles[family].chip
                  }
                >
                  {allSeasons[key]?.season}
                </Button>
              ))}
            </div>
          ))}
        </div>

        {season && <SeasonDetail season={season} photoUrl={photoUrl} />}

        <Separator className="bg-amber-200/30 my-12" />

        {/* Cross-season comparison across all 12 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Compare Any Two Seasons</h2>
          <CrossSeasonComparison
            photoUrl={photoUrl}
            allDrapes={allSeasonDrapes}
            defaultSeasonA={selectedSeason}
            defaultSeasonB={selectedSeason === "softAutumn" ? "trueSummer" : "softAutumn"}
          />
        </section>

        <footer className="text-center py-8 text-amber-700/60 text-sm">
          <p>Personal Color Analysis • Discover Your Perfect Palette</p>
        </footer>
      </main>
    </div>
  );
}
