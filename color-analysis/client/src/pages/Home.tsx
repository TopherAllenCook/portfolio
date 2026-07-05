import { useAuth } from "@/_core/hooks/useAuth";
import { colorAnalysisData } from "@/data/colorAnalysis";
import { drapeColors } from "@/data/drapes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ColorDrapeComparison from "@/components/ColorDrapeComparison";
import CrossSeasonComparison from "@/components/CrossSeasonComparison";
import ColorSwatch from "@/components/ColorSwatch";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const { physicalCharacteristics, seasonalColors, colorRecommendations, fashionIllustrations } = colorAnalysisData;
  const [selectedSeason, setSelectedSeason] = useState<"deepAutumn" | "trueAutumn" | "softAutumn">("deepAutumn");
  const [swatchCategory, setSwatchCategory] = useState<"primary" | "neutrals" | "accents">("primary");
  const [swatchIndex, setSwatchIndex] = useState(0);

  const currentSeason = seasonalColors[selectedSeason];
  const currentIllustrations = fashionIllustrations[selectedSeason];
  
  // Get current swatch
  const swatches = currentSeason.clothing[swatchCategory === "neutrals" ? "neutrals" : swatchCategory];
  const currentSwatch = swatches[swatchIndex];

  const handleNextSwatch = () => {
    setSwatchIndex((prev) => (prev + 1) % swatches.length);
  };

  const handlePrevSwatch = () => {
    setSwatchIndex((prev) => (prev - 1 + swatches.length) % swatches.length);
  };

  const handleCategoryChange = (category: "primary" | "neutrals" | "accents") => {
    setSwatchCategory(category);
    setSwatchIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header Section */}
      <SiteHeader />

      {/* Main Content */}
      <main className="container py-12">
        {/* Hero Section with Photo and Interactive Swatches */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Photo and Interactive Swatch Viewer */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={colorAnalysisData.personalPhoto} 
                    alt="Personal photo for color analysis"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Interactive Color Swatch Viewer */}
                <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm text-amber-900">Color Verification Tool</CardTitle>
                    <CardDescription className="text-xs">Hold colors next to your face to verify</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Large Color Swatch */}
                    <div className="space-y-2">
                      <div 
                        className="w-full h-40 rounded-xl shadow-lg border-4 border-white transition-all duration-300"
                        style={{ backgroundColor: currentSwatch.hex }}
                      />
                      <div className="text-center">
                        <p className="font-semibold text-amber-900">{currentSwatch.name}</p>
                        <p className="text-xs text-amber-600">{currentSwatch.hex}</p>
                      </div>
                    </div>

                    {/* Category Selector */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={swatchCategory === "primary" ? "default" : "outline"}
                        onClick={() => handleCategoryChange("primary")}
                        className={swatchCategory === "primary" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                      >
                        Primary
                      </Button>
                      <Button
                        size="sm"
                        variant={swatchCategory === "neutrals" ? "default" : "outline"}
                        onClick={() => handleCategoryChange("neutrals")}
                        className={swatchCategory === "neutrals" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                      >
                        Neutrals
                      </Button>
                      <Button
                        size="sm"
                        variant={swatchCategory === "accents" ? "default" : "outline"}
                        onClick={() => handleCategoryChange("accents")}
                        className={swatchCategory === "accents" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                      >
                        Accents
                      </Button>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handlePrevSwatch}
                        className="border-amber-300"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <span className="text-xs text-amber-700 font-medium">
                        {swatchIndex + 1} / {swatches.length}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleNextSwatch}
                        className="border-amber-300"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Mini Swatches for Quick Selection */}
                    <div className="grid grid-cols-4 gap-2">
                      {swatches.map((swatch: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setSwatchIndex(idx)}
                          className={`h-12 rounded-lg border-2 transition-all ${
                            idx === swatchIndex ? "border-amber-700 shadow-lg" : "border-white"
                          }`}
                          style={{ backgroundColor: swatch.hex }}
                          title={swatch.name}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Analysis Summary */}
            <div className="lg:col-span-2 space-y-6">
              {/* Season Toggle */}
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-900">Select Your Seasonal Color Type</CardTitle>
                  <CardDescription className="text-amber-700">
                    Compare both options to find which palette resonates with you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                  <Button
                    onClick={() => setSelectedSeason("deepAutumn")}
                    variant={selectedSeason === "deepAutumn" ? "default" : "outline"}
                    className={selectedSeason === "deepAutumn" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                  >
                    Deep Autumn
                  </Button>
                  <Button
                    onClick={() => setSelectedSeason("trueAutumn")}
                    variant={selectedSeason === "trueAutumn" ? "default" : "outline"}
                    className={selectedSeason === "trueAutumn" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                  >
                    True Autumn
                  </Button>
                  <Button
                    onClick={() => setSelectedSeason("softAutumn")}
                    variant={selectedSeason === "softAutumn" ? "default" : "outline"}
                    className={selectedSeason === "softAutumn" ? "bg-amber-700 hover:bg-amber-800" : "border-amber-300"}
                  >
                    Soft Autumn
                  </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900">{currentSeason.season}</CardTitle>
                  <CardDescription className="text-lg text-amber-700">
                    {currentSeason.alternativeName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800 leading-relaxed">
                    {currentSeason.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentSeason.characteristics.map((char: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="bg-amber-100 text-amber-900 border-amber-300">
                        {char}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Physical Characteristics */}
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">Physical Characteristics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(physicalCharacteristics).map(([key, char]: any) => (
                    <div key={key} className="flex items-start gap-4">
                      <div 
                        className="w-16 h-16 rounded-lg flex-shrink-0 shadow-md border-2 border-white"
                        style={{ backgroundColor: char.swatch }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-amber-900">{char.name}</h4>
                        <p className="text-sm text-amber-700">{char.description}</p>
                        <p className="text-xs text-amber-600 mt-1">{char.swatch}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="bg-amber-200/30 my-12" />

        {/* Advanced Color Drape Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Professional Color Drape Analysis - {currentSeason.season}</h2>
          <p className="text-amber-800 mb-8">
            Use this advanced tool to compare how different colors interact with your face. Cycle through {currentSeason.season} drape colors to verify your depth, undertone, and chroma.
          </p>
          <ColorDrapeComparison 
            photoUrl={colorAnalysisData.personalPhoto}
            drapes={drapeColors[selectedSeason]}
            season={selectedSeason}
          />
        </section>

        <Separator className="bg-amber-200/30 my-12" />

        {/* Cross-Season Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Cross-Season Comparison</h2>
          <p className="text-amber-800 mb-8">
            Not sure which autumn variant is right for you? Drape colors from two different seasons simultaneously and see which one flatters you most.
          </p>
          <CrossSeasonComparison 
            photoUrl={colorAnalysisData.personalPhoto}
            allDrapes={drapeColors}
          />
        </section>

        <Separator className="bg-amber-200/30 my-12" />

        {/* Color Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Color Recommendations for {currentSeason.season}</h2>
          
          <Tabs defaultValue="clothing" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white/40 backdrop-blur-sm border border-amber-200/30">
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="jewelry">Jewelry</TabsTrigger>
              <TabsTrigger value="makeup">Makeup</TabsTrigger>
              <TabsTrigger value="avoid">Avoid</TabsTrigger>
            </TabsList>

            {/* Clothing Colors */}
            <TabsContent value="clothing" className="space-y-6">
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Primary Palette</CardTitle>
                  <CardDescription>Your most flattering color combinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentSeason.clothing.primary.map((color: any, idx: number) => (
                      <ColorSwatch key={idx} name={color.name} hex={color.hex} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Neutral Palette</CardTitle>
                  <CardDescription>Versatile neutrals that work with everything</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentSeason.clothing.neutrals.map((color: any, idx: number) => (
                      <ColorSwatch key={idx} name={color.name} hex={color.hex} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Accent Colors</CardTitle>
                  <CardDescription>Bold colors for special touches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {currentSeason.clothing.accents.map((color: any, idx: number) => (
                      <ColorSwatch key={idx} name={color.name} hex={color.hex} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Patterns */}
            <TabsContent value="patterns">
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Pattern Recommendations for {currentSeason.season}</CardTitle>
                  <CardDescription>Guidelines for choosing patterns that complement your coloring</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentSeason.patterns?.map((pattern: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold mt-1">•</span>
                        <span className="text-amber-800">{pattern}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Jewelry Colors */}
            <TabsContent value="jewelry" className="space-y-6">
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Metal Tones</CardTitle>
                  <CardDescription>Best metals for your coloring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentSeason.jewelry.metals.map((metal: any, idx: number) => (
                      <ColorSwatch key={idx} name={metal.name} hex={metal.hex} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Recommended Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentSeason.jewelry.materials.map((material: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="bg-amber-50 text-amber-900 border-amber-300">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Makeup */}
            <TabsContent value="makeup">
              <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-900">Makeup & Grooming</CardTitle>
                  <CardDescription>Tips for enhancing your natural beauty</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {colorRecommendations.makeup.recommendations.map((rec: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold mt-1">•</span>
                        <span className="text-amber-800">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Colors to Avoid */}
            <TabsContent value="avoid">
              <Card className="border-red-200/50 bg-red-50/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-red-900">Colors to Avoid</CardTitle>
                  <CardDescription>These colors may not flatter your natural coloring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentSeason.avoid.map((cat: any, idx: number) => (
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
        </section>

        <Separator className="bg-amber-200/30 my-12" />

        {/* Fashion Illustrations */}
        <section>
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Fashion Illustrations - {currentSeason.season}</h2>
          <p className="text-amber-800 mb-8">
            Hand-drawn fashion illustrations showcasing outfit combinations tailored to your {currentSeason.season} seasonal color palette and personal style.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Casual Style */}
            <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={currentIllustrations.casual.image} 
                  alt={currentIllustrations.casual.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">{currentIllustrations.casual.title}</CardTitle>
                <CardDescription>{currentIllustrations.casual.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-amber-800">
                  {Object.entries(currentIllustrations.casual.outfit).map(([key, value]: any) => (
                    <div key={key}>
                      <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Style */}
            <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={currentIllustrations.business.image} 
                  alt={currentIllustrations.business.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">{currentIllustrations.business.title}</CardTitle>
                <CardDescription>{currentIllustrations.business.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-amber-800">
                  {Object.entries(currentIllustrations.business.outfit).map(([key, value]: any) => (
                    <div key={key}>
                      <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Evening Style */}
            <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={currentIllustrations.evening.image} 
                  alt={currentIllustrations.evening.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">{currentIllustrations.evening.title}</CardTitle>
                <CardDescription>{currentIllustrations.evening.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-amber-800">
                  {Object.entries(currentIllustrations.evening.outfit).map(([key, value]: any) => (
                    <div key={key}>
                      <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekend Style */}
            <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={currentIllustrations.weekend.image} 
                  alt={currentIllustrations.weekend.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">{currentIllustrations.weekend.title}</CardTitle>
                <CardDescription>{currentIllustrations.weekend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-amber-800">
                  {Object.entries(currentIllustrations.weekend.outfit).map(([key, value]: any) => (
                    <div key={key}>
                      <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-amber-200/30 my-12" />

        {/* Hair Color Recommendations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Hair Color Recommendations</h2>
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-4">
              {colorRecommendations.hair.suggestions.map((suggestion: any, idx: number) => (
                <div key={idx} className="border-l-4 border-amber-300 pl-4 py-2">
                  <h4 className="font-semibold text-amber-900">{suggestion.option}</h4>
                  <p className="text-sm text-amber-700">{suggestion.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <footer className="text-center py-8 text-amber-700/60 text-sm">
          <p>Personal Color Analysis • Discover Your Perfect Palette</p>
        </footer>
      </main>
    </div>
  );
}
