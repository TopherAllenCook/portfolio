import { useMemo, useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import ColorDrapeComparison from "@/components/ColorDrapeComparison";
import CrossSeasonComparison from "@/components/CrossSeasonComparison";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { allSeasons, seasonFamilies } from "@/data/seasons";
import { allSeasonDrapes } from "@/data/allDrapes";
import { Camera, Loader2, LogIn, Plus, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";

const MAX_PHOTO_MB = 10;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

function verdictButtons<T extends string>(
  options: { value: T; label: string }[],
  current: T | null | undefined,
  onSelect: (value: T) => void,
) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <Button
          key={opt.value}
          size="sm"
          variant={current === opt.value ? "default" : "outline"}
          onClick={() => onSelect(opt.value)}
          className={
            current === opt.value
              ? "bg-amber-700 hover:bg-amber-800 text-white"
              : "border-amber-300 text-amber-900 hover:bg-amber-50"
          }
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}

export default function MyAnalysis() {
  const { user, loading, isAuthenticated } = useAuth();
  const utils = trpc.useUtils();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [notesDraft, setNotesDraft] = useState<string | null>(null);

  const { data: analyses, isLoading: listLoading } = trpc.analysis.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const currentAnalysis = useMemo(() => {
    if (!analyses || analyses.length === 0) return null;
    if (selectedId != null) return analyses.find((a) => a.id === selectedId) ?? analyses[0];
    return analyses[0];
  }, [analyses, selectedId]);

  const createMutation = trpc.analysis.create.useMutation({
    onSuccess: (created) => {
      utils.analysis.list.invalidate();
      if (created?.id) setSelectedId(created.id);
      toast.success("New analysis created");
    },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.analysis.update.useMutation({
    onMutate: async (input) => {
      await utils.analysis.list.cancel();
      const prev = utils.analysis.list.getData();
      utils.analysis.list.setData(undefined, (old) =>
        old?.map((a) => (a.id === input.id ? { ...a, ...input } : a)),
      );
      return { prev };
    },
    onError: (e, _input, ctx) => {
      if (ctx?.prev) utils.analysis.list.setData(undefined, ctx.prev);
      toast.error(e.message);
    },
    onSettled: () => utils.analysis.list.invalidate(),
  });

  const deleteMutation = trpc.analysis.delete.useMutation({
    onSuccess: () => {
      utils.analysis.list.invalidate();
      setSelectedId(null);
      toast.success("Analysis deleted");
    },
    onError: (e) => toast.error(e.message),
  });

  const uploadMutation = trpc.analysis.uploadPhoto.useMutation({
    onSuccess: () => {
      utils.analysis.list.invalidate();
      toast.success("Photo uploaded");
    },
    onError: (e) => toast.error(e.message),
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !currentAnalysis) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      toast.error("Please upload a JPEG, PNG, or WebP image");
      return;
    }
    if (file.size > MAX_PHOTO_MB * 1024 * 1024) {
      toast.error(`Photo must be under ${MAX_PHOTO_MB}MB`);
      return;
    }

    setUploading(true);
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1] ?? "");
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
      await uploadMutation.mutateAsync({
        id: currentAnalysis.id,
        base64,
        mimeType: file.type as "image/jpeg" | "image/png" | "image/webp",
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ----- Unauthenticated view -----
  if (!loading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <SiteHeader />
        <main className="container py-24 flex flex-col items-center text-center">
          <Camera className="w-14 h-14 text-amber-600 mb-4" />
          <h1 className="text-3xl font-bold text-amber-900 mb-3">Your Personal Color Analysis</h1>
          <p className="text-amber-800 max-w-xl mb-6">
            Sign in to upload your own photo, drape all 12 seasonal palettes against your face,
            record your depth, undertone, and chroma verdicts, and save your results to revisit
            anytime.
          </p>
          <Button
            onClick={() => (window.location.href = getLoginUrl())}
            className="bg-amber-700 hover:bg-amber-800 text-white"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Sign In to Get Started
          </Button>
        </main>
      </div>
    );
  }

  const seasonData = currentAnalysis?.seasonKey ? allSeasons[currentAnalysis.seasonKey] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <SiteHeader />
      <main className="container py-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-amber-900 mb-1">My Analysis</h1>
            <p className="text-amber-800">
              Welcome{user?.name ? `, ${user.name}` : ""}! Upload your photo, test drapes, and save
              your verdicts.
            </p>
          </div>
          <Button
            onClick={() => createMutation.mutate({ title: `Analysis ${new Date().toLocaleDateString()}` })}
            disabled={createMutation.isPending}
            className="bg-amber-700 hover:bg-amber-800 text-white"
          >
            {createMutation.isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Plus className="w-4 h-4 mr-2" />
            )}
            New Analysis
          </Button>
        </div>

        {listLoading || loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
          </div>
        ) : !analyses || analyses.length === 0 ? (
          <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
            <CardContent className="py-16 flex flex-col items-center text-center">
              <Camera className="w-12 h-12 text-amber-500 mb-4" />
              <h2 className="text-xl font-semibold text-amber-900 mb-2">No analyses yet</h2>
              <p className="text-amber-700 mb-6 max-w-md">
                Create your first analysis to upload a photo and start discovering your seasonal
                color type.
              </p>
              <Button
                onClick={() =>
                  createMutation.mutate({ title: `Analysis ${new Date().toLocaleDateString()}` })
                }
                disabled={createMutation.isPending}
                className="bg-amber-700 hover:bg-amber-800 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create My First Analysis
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Analysis selector */}
            {analyses.length > 1 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                  My analyses:
                </span>
                {analyses.map((a) => (
                  <Button
                    key={a.id}
                    size="sm"
                    variant={currentAnalysis?.id === a.id ? "default" : "outline"}
                    onClick={() => {
                      setSelectedId(a.id);
                      setNotesDraft(null);
                    }}
                    className={
                      currentAnalysis?.id === a.id
                        ? "bg-amber-700 hover:bg-amber-800 text-white"
                        : "border-amber-300 text-amber-900 hover:bg-amber-50"
                    }
                  >
                    {a.title || `Analysis #${a.id}`}
                  </Button>
                ))}
              </div>
            )}

            {currentAnalysis && (
              <>
                {/* Profile row: photo + settings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Photo card */}
                  <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-amber-900 text-lg">My Photo</CardTitle>
                      <CardDescription>
                        Use an evenly lit photo facing the camera for the most accurate draping.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {currentAnalysis.photoUrl ? (
                        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                          <img
                            src={currentAnalysis.photoUrl}
                            alt="My analysis photo"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ) : (
                        <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/50 flex flex-col items-center justify-center py-16 text-center px-4">
                          <Camera className="w-10 h-10 text-amber-400 mb-3" />
                          <p className="text-sm text-amber-700">
                            No photo yet. Upload one to start draping colors on yourself.
                          </p>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPTED_TYPES.join(",")}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                      >
                        {uploading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Upload className="w-4 h-4 mr-2" />
                        )}
                        {currentAnalysis.photoUrl ? "Replace Photo" : "Upload Photo"}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Settings + verdicts */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-amber-900 text-lg">Analysis Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-amber-900">Title</label>
                            <Input
                              key={currentAnalysis.id}
                              defaultValue={currentAnalysis.title ?? ""}
                              onBlur={(e) => {
                                if (e.target.value !== currentAnalysis.title) {
                                  updateMutation.mutate({
                                    id: currentAnalysis.id,
                                    title: e.target.value,
                                  });
                                }
                              }}
                              className="border-amber-300 bg-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-amber-900">
                              My Seasonal Type
                            </label>
                            <Select
                              value={currentAnalysis.seasonKey ?? undefined}
                              onValueChange={(v) =>
                                updateMutation.mutate({
                                  id: currentAnalysis.id,
                                  seasonKey: v as keyof typeof allSeasons & string as
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
                                    | "brightWinter",
                                })
                              }
                            >
                              <SelectTrigger className="bg-white border-amber-300 text-amber-900">
                                <SelectValue placeholder="Select your season..." />
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
                          </div>
                        </div>

                        <Separator className="bg-amber-200/40" />

                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-amber-900 mb-2">
                              Step 1 Verdict — Depth
                            </p>
                            {verdictButtons(
                              [
                                { value: "light", label: "Light" },
                                { value: "medium", label: "Medium" },
                                { value: "deep", label: "Deep" },
                              ],
                              currentAnalysis.depthVerdict as "light" | "medium" | "deep" | null,
                              (v) =>
                                updateMutation.mutate({ id: currentAnalysis.id, depthVerdict: v }),
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-amber-900 mb-2">
                              Step 2 Verdict — Undertone
                            </p>
                            {verdictButtons(
                              [
                                { value: "warm", label: "Warm" },
                                { value: "cool", label: "Cool" },
                                { value: "neutral", label: "Neutral" },
                              ],
                              currentAnalysis.undertoneVerdict as "warm" | "cool" | "neutral" | null,
                              (v) =>
                                updateMutation.mutate({
                                  id: currentAnalysis.id,
                                  undertoneVerdict: v,
                                }),
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-amber-900 mb-2">
                              Step 3 Verdict — Chroma
                            </p>
                            {verdictButtons(
                              [
                                { value: "clear", label: "Clear / Bright" },
                                { value: "soft", label: "Soft / Muted" },
                              ],
                              currentAnalysis.chromaVerdict as "clear" | "soft" | null,
                              (v) =>
                                updateMutation.mutate({ id: currentAnalysis.id, chromaVerdict: v }),
                            )}
                          </div>
                        </div>

                        <Separator className="bg-amber-200/40" />

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-amber-900">Notes</label>
                          <Textarea
                            value={notesDraft ?? currentAnalysis.notes ?? ""}
                            onChange={(e) => setNotesDraft(e.target.value)}
                            onBlur={() => {
                              if (notesDraft != null && notesDraft !== currentAnalysis.notes) {
                                updateMutation.mutate({
                                  id: currentAnalysis.id,
                                  notes: notesDraft,
                                });
                              }
                            }}
                            placeholder="e.g., Terracotta made my skin glow; charcoal washed me out..."
                            className="border-amber-300 bg-white min-h-[90px]"
                          />
                        </div>

                        <div className="flex justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              if (confirm("Delete this analysis? This cannot be undone.")) {
                                deleteMutation.mutate({ id: currentAnalysis.id });
                              }
                            }}
                            className="border-red-300 text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete Analysis
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {seasonData && (
                      <Card className="border-amber-200/50 bg-white/60 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex items-center gap-3 flex-wrap">
                            <CardTitle className="text-amber-900 text-lg">
                              {seasonData.season}
                            </CardTitle>
                            <Badge
                              variant="secondary"
                              className="bg-amber-100 text-amber-900 border-amber-300"
                            >
                              {seasonData.alternativeName}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-amber-800 text-sm leading-relaxed">
                            {seasonData.description}
                          </p>
                          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                            {seasonData.clothing.primary.map((c, i) => (
                              <div
                                key={i}
                                className="h-10 rounded-lg border-2 border-white shadow"
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>

                {/* Draping tools with the user's own photo */}
                {currentAnalysis.photoUrl ? (
                  <>
                    <Separator className="bg-amber-200/30 my-4" />
                    <section>
                      <h2 className="text-2xl font-bold text-amber-900 mb-4">
                        Drape Colors on My Photo
                        {seasonData ? ` — ${seasonData.season}` : ""}
                      </h2>
                      <ColorDrapeComparison
                        photoUrl={currentAnalysis.photoUrl}
                        drapes={
                          allSeasonDrapes[currentAnalysis.seasonKey ?? "deepAutumn"] ??
                          allSeasonDrapes.deepAutumn
                        }
                        season={currentAnalysis.seasonKey ?? "deepAutumn"}
                      />
                    </section>
                    <section className="mt-8">
                      <h2 className="text-2xl font-bold text-amber-900 mb-4">
                        Compare Two Seasons on My Photo
                      </h2>
                      <CrossSeasonComparison
                        photoUrl={currentAnalysis.photoUrl}
                        allDrapes={allSeasonDrapes}
                        defaultSeasonA={currentAnalysis.seasonKey ?? "deepAutumn"}
                        defaultSeasonB={
                          (currentAnalysis.seasonKey ?? "deepAutumn") === "softAutumn"
                            ? "trueAutumn"
                            : "softAutumn"
                        }
                      />
                    </section>
                  </>
                ) : (
                  <Card className="border-amber-200/50 bg-amber-50/60">
                    <CardContent className="py-8 text-center">
                      <p className="text-amber-800">
                        Upload a photo above to unlock the color draping tools with your own face.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </div>
        )}

        <footer className="text-center py-8 text-amber-700/60 text-sm">
          <p>Personal Color Analysis • Discover Your Perfect Palette</p>
        </footer>
      </main>
    </div>
  );
}
