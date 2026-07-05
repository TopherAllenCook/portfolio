// Drape colors for all 12 seasons — used in the Professional Color Draping tools
// Each season has depth drapes (3), undertone drapes (5), and chroma drapes (4)

export interface DrapeColor {
  name: string;
  hex: string;
  category: "depth" | "undertone" | "chroma";
  depth?: "light" | "medium" | "deep";
  undertone?: "warm" | "cool";
  chroma?: "clear" | "soft";
}

type DrapeSet = DrapeColor[];

const d = (name: string, hex: string, depth: "light" | "medium" | "deep"): DrapeColor => ({
  name,
  hex,
  category: "depth",
  depth,
});
const u = (name: string, hex: string, undertone: "warm" | "cool"): DrapeColor => ({
  name,
  hex,
  category: "undertone",
  undertone,
});
const c = (name: string, hex: string, chroma: "clear" | "soft"): DrapeColor => ({
  name,
  hex,
  category: "chroma",
  chroma,
});

export const allSeasonDrapes: Record<string, DrapeSet> = {
  // ===== SPRING =====
  lightSpring: [
    d("Light Peach", "#FFDAB9", "light"),
    d("Medium Apricot", "#EDA167", "medium"),
    d("Warm Honey", "#C68E3F", "deep"),
    u("Warm Coral", "#FF8A65", "warm"),
    u("Golden Buttercream", "#FFE9A0", "warm"),
    u("Fresh Green", "#A8D672", "warm"),
    u("Cool Rose Test", "#E8A0BF", "cool"),
    u("Cool Blue Test", "#9FB8DE", "cool"),
    c("Clear Aqua", "#40E0D0", "clear"),
    c("Clear Coral", "#FF6F61", "clear"),
    c("Soft Sand", "#DDC9A3", "soft"),
    c("Soft Melon", "#EDB598", "soft"),
  ],
  trueSpring: [
    d("Light Golden", "#F2D091", "light"),
    d("Medium Camel", "#C99A4B", "medium"),
    d("Deep Bronze", "#8F6A2A", "deep"),
    u("True Coral", "#FF7F50", "warm"),
    u("Golden Yellow", "#FFC30B", "warm"),
    u("Warm Green", "#7BB661", "warm"),
    u("Cool Fuchsia Test", "#D75A9E", "cool"),
    u("Cool Periwinkle Test", "#8896D7", "cool"),
    c("Clear Turquoise", "#30D5C8", "clear"),
    c("Clear Tomato", "#EF4026", "clear"),
    c("Muted Khaki Test", "#B7A97C", "soft"),
    c("Dusty Peach Test", "#D9AE94", "soft"),
  ],
  brightSpring: [
    d("Light Ivory", "#FFF8E7", "light"),
    d("Medium Warm Grey", "#9C937F", "medium"),
    d("Clear Charcoal", "#4A4A4A", "deep"),
    u("Bright Coral", "#FF6F61", "warm"),
    u("Tangerine", "#FF8C42", "warm"),
    u("Warm Lime", "#BFD833", "warm"),
    u("Cool Magenta Test", "#D0448E", "cool"),
    u("Icy Blue Test", "#A5D8E6", "cool"),
    c("Vivid Pink", "#FF4F9A", "clear"),
    c("Electric Aqua", "#00E5D0", "clear"),
    c("Dusty Sage Test", "#A8B594", "soft"),
    c("Soft Taupe Test", "#B3A395", "soft"),
  ],

  // ===== SUMMER =====
  lightSummer: [
    d("Powder Light", "#E3EBF2", "light"),
    d("Medium Dove", "#AEB8C4", "medium"),
    d("Slate Test", "#5F6E7E", "deep"),
    u("Soft Rose", "#F4C2C2", "cool"),
    u("Powder Blue", "#B0E0E6", "cool"),
    u("Lavender", "#C8A2C8", "cool"),
    u("Warm Peach Test", "#F5B895", "warm"),
    u("Golden Tan Test", "#D2A76A", "warm"),
    c("Clear Sky Test", "#6FC3E8", "clear"),
    c("Clear Pink Test", "#F27FA5", "clear"),
    c("Soft Mist", "#C9D4DC", "soft"),
    c("Dusty Rose", "#DCA1A1", "soft"),
  ],
  trueSummer: [
    d("Light Grey Blue", "#B9C6D5", "light"),
    d("Medium Slate", "#7C8EA3", "medium"),
    d("Deep Navy Test", "#31456E", "deep"),
    u("Cool Rose", "#E48FA8", "cool"),
    u("Cool Blue", "#5B7FBD", "cool"),
    u("Soft Fuchsia", "#C74B8C", "cool"),
    u("Warm Coral Test", "#F08A6C", "warm"),
    u("Golden Yellow Test", "#E8C25A", "warm"),
    c("Clear Raspberry Test", "#D23A6E", "clear"),
    c("Clear Cobalt Test", "#3A66C4", "clear"),
    c("Soft Teal", "#4C9E9E", "soft"),
    c("Dusty Periwinkle", "#8896D7", "soft"),
  ],
  softSummer: [
    d("Light Greige", "#D6D1C8", "light"),
    d("Medium Mushroom", "#A99E90", "medium"),
    d("Deep Slate Test", "#5D6970", "deep"),
    u("Dusty Rose", "#C08081", "cool"),
    u("Grey Blue", "#7393A7", "cool"),
    u("Mauve", "#B784A7", "cool"),
    u("Warm Terracotta Test", "#C87F5D", "warm"),
    u("Golden Sand Test", "#D4B072", "warm"),
    c("Bright Pink Test", "#EE5C9A", "clear"),
    c("Vivid Teal Test", "#00A8A8", "clear"),
    c("Soft Plum", "#8E6C88", "soft"),
    c("Sage Green", "#9CAF88", "soft"),
  ],

  // ===== AUTUMN =====
  softAutumn: [
    d("Light Oatmeal", "#E0D5C0", "light"),
    d("Medium Warm Taupe", "#AF9C8A", "medium"),
    d("Deep Soft Brown", "#6E5B48", "deep"),
    u("Soft Terracotta", "#C87F5D", "warm"),
    u("Muted Gold", "#C9A66B", "warm"),
    u("Sage Green", "#9CAF88", "warm"),
    u("Cool Mauve Test", "#B48EAD", "cool"),
    u("Dusty Blue Test", "#8CA6BD", "cool"),
    c("Bright Coral Test", "#F86C5E", "clear"),
    c("Vivid Green Test", "#3CB371", "clear"),
    c("Soft Salmon", "#DC9788", "soft"),
    c("Warm Sand", "#D4B896", "soft"),
  ],
  trueAutumn: [
    d("Light Cream", "#F5EBD8", "light"),
    d("Medium Camel", "#C19A6B", "medium"),
    d("Deep Coffee", "#6F4E37", "deep"),
    u("Pumpkin", "#C46210", "warm"),
    u("Mustard", "#D4A017", "warm"),
    u("Olive Green", "#708238", "warm"),
    u("Cool Pink Test", "#D98BA6", "cool"),
    u("Cool Slate Test", "#7A8CA3", "cool"),
    c("Clear Tomato", "#C4452C", "clear"),
    c("Warm Teal", "#367588", "clear"),
    c("Soft Moss", "#8A9A5B", "soft"),
    c("Muted Rust", "#A85C48", "soft"),
  ],
  deepAutumn: [
    d("Light Depth", "#D4A574", "light"),
    d("Medium Depth", "#8B6F47", "medium"),
    d("Deep Depth", "#3D3D3D", "deep"),
    u("Burnt Orange", "#CC5500", "warm"),
    u("Deep Gold", "#D4AF37", "warm"),
    u("Forest Green", "#228B22", "warm"),
    u("Cool Burgundy Test", "#7E3B5B", "cool"),
    u("Cool Navy Test", "#2C3E6B", "cool"),
    c("Clear Rust", "#B7410E", "clear"),
    c("Deep Teal", "#367588", "clear"),
    c("Soft Olive", "#6B5D3A", "soft"),
    c("Muted Cognac", "#9A463D", "soft"),
  ],

  // ===== WINTER =====
  deepWinter: [
    d("Icy Light Test", "#DCE4EC", "light"),
    d("Medium Charcoal", "#5B6770", "medium"),
    d("True Black", "#000000", "deep"),
    u("Black Cherry", "#5B2333", "cool"),
    u("Emerald", "#046307", "cool"),
    u("Royal Purple", "#4B0082", "cool"),
    u("Warm Rust Test", "#B7410E", "warm"),
    u("Golden Camel Test", "#C19A6B", "warm"),
    c("True Red", "#C41E3A", "clear"),
    c("Sapphire", "#0F52BA", "clear"),
    c("Dusty Plum Test", "#7E6889", "soft"),
    c("Soft Grey Test", "#9BA3AB", "soft"),
  ],
  trueWinter: [
    d("Icy White", "#F4F8FB", "light"),
    d("Medium Cool Grey", "#848789", "medium"),
    d("Black", "#000000", "deep"),
    u("True Red", "#DC143C", "cool"),
    u("Royal Blue", "#4169E1", "cool"),
    u("Magenta", "#CA1F7B", "cool"),
    u("Warm Orange Test", "#E8742C", "warm"),
    u("Golden Yellow Test", "#E8B33A", "warm"),
    c("Vivid Fuchsia", "#E5097F", "clear"),
    c("Cobalt", "#0047AB", "clear"),
    c("Dusty Mauve Test", "#A98BA0", "soft"),
    c("Muted Slate Test", "#7C8894", "soft"),
  ],
  brightWinter: [
    d("Icy Silver", "#E8ECEF", "light"),
    d("Bright Charcoal", "#414A4C", "medium"),
    d("Black", "#000000", "deep"),
    u("Bright Fuchsia", "#FF1DCE", "cool"),
    u("Cobalt Blue", "#0047AB", "cool"),
    u("True Emerald", "#009B77", "cool"),
    u("Warm Coral Test", "#FF6F51", "warm"),
    u("Golden Amber Test", "#E8A33A", "warm"),
    c("Shocking Pink", "#FC0FC0", "clear"),
    c("Electric Blue", "#007FFF", "clear"),
    c("Dusty Rose Test", "#C49A9A", "soft"),
    c("Soft Sage Test", "#A8B594", "soft"),
  ],
};
