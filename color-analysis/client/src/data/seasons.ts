// Complete 12-Season Color Analysis System
// Each season includes characteristics, palettes, jewelry, patterns, and colors to avoid

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface AvoidCategory {
  category: string;
  colors: string[];
  reason: string;
}

export interface SeasonData {
  key: string;
  season: string;
  family: "Spring" | "Summer" | "Autumn" | "Winter";
  alternativeName: string;
  description: string;
  characteristics: string[];
  clothing: {
    primary: ColorSwatch[];
    neutrals: ColorSwatch[];
    accents: ColorSwatch[];
  };
  jewelry: {
    metals: ColorSwatch[];
    materials: string[];
  };
  patterns: string[];
  avoid: AvoidCategory[];
}

export const allSeasons: Record<string, SeasonData> = {
  // ============ SPRING FAMILY ============
  lightSpring: {
    key: "lightSpring",
    season: "Light Spring",
    family: "Spring",
    alternativeName: "Light Warm",
    description:
      "Light Spring is characterized by lightness, warmth, and delicate freshness. Your features are light and warm with low contrast—think golden blonde hair, light warm eyes, and peachy skin. You look best in light, warm, fresh colors like clear pastels with a sunny quality.",
    characteristics: [
      "Light, delicate coloring",
      "Warm golden undertones",
      "Low contrast features",
      "Fresh, sunny quality",
      "Clear rather than muted",
    ],
    clothing: {
      primary: [
        { name: "Peach", hex: "#FFCBA4" },
        { name: "Warm Coral", hex: "#FF8A65" },
        { name: "Light Aqua", hex: "#7FDBDA" },
        { name: "Buttercream", hex: "#FFF3B0" },
        { name: "Fresh Green", hex: "#A8D672" },
        { name: "Warm Pink", hex: "#FFA6C1" },
        { name: "Light Periwinkle", hex: "#A5B8E8" },
        { name: "Apricot", hex: "#FBCEB1" },
      ],
      neutrals: [
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Warm Beige", hex: "#E8D5B7" },
        { name: "Camel", hex: "#C19A6B" },
        { name: "Light Warm Grey", hex: "#C9C0BB" },
        { name: "Soft White", hex: "#FAF6F0" },
        { name: "Light Khaki", hex: "#D8CCA3" },
        { name: "Honey Tan", hex: "#D2A76A" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
      accents: [
        { name: "Clear Turquoise", hex: "#40E0D0" },
        { name: "Watermelon", hex: "#FC6C85" },
        { name: "Golden Yellow", hex: "#FFDF5E" },
        { name: "Light Emerald", hex: "#50C878" },
        { name: "Warm Violet", hex: "#B57EDC" },
        { name: "Poppy Red", hex: "#FF5349" },
        { name: "Sky Blue", hex: "#87CEEB" },
        { name: "Mango", hex: "#FFB347" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Light Yellow Gold", hex: "#F2D57E" },
        { name: "Rose Gold", hex: "#E8B4A0" },
        { name: "Brushed Gold", hex: "#D9C27E" },
        { name: "Warm Pearl", hex: "#F5EEE6" },
      ],
      materials: ["Light gold", "Rose gold", "Pearls", "Coral", "Citrine", "Peridot"],
    },
    patterns: [
      "Small, delicate patterns with light backgrounds",
      "Fresh florals and watercolor prints",
      "Light stripes and gentle polka dots",
      "Avoid heavy, dark, or high-contrast patterns",
    ],
    avoid: [
      {
        category: "Dark, heavy colors",
        colors: ["Black", "Dark burgundy", "Deep navy"],
        reason: "Dark colors overwhelm your light, delicate coloring and create harsh shadows.",
      },
      {
        category: "Cool, muted tones",
        colors: ["Dusty rose", "Mauve", "Cool grey"],
        reason: "Muted cool tones clash with your warm freshness and make you look washed out.",
      },
    ],
  },

  trueSpring: {
    key: "trueSpring",
    season: "True Spring",
    family: "Spring",
    alternativeName: "Warm Spring",
    description:
      "True Spring is the warmest of the Spring seasons. Your coloring is golden, sunny, and clear—warm undertones dominate with medium-light features. You shine in warm, clear colors like coral, golden yellow, and warm green that echo a sunny spring garden.",
    characteristics: [
      "Distinctly warm, golden coloring",
      "Clear, bright quality",
      "Medium-light contrast",
      "Sunny, vibrant appearance",
      "Golden or strawberry tones in features",
    ],
    clothing: {
      primary: [
        { name: "True Coral", hex: "#FF7F50" },
        { name: "Golden Yellow", hex: "#FFC30B" },
        { name: "Warm Green", hex: "#7BB661" },
        { name: "Tomato Red", hex: "#EF4026" },
        { name: "Warm Turquoise", hex: "#30D5C8" },
        { name: "Salmon", hex: "#FA8072" },
        { name: "Bright Camel", hex: "#D19C4C" },
        { name: "Warm Periwinkle", hex: "#8FA8E8" },
      ],
      neutrals: [
        { name: "Warm Ivory", hex: "#FDF6E3" },
        { name: "Golden Beige", hex: "#DFC492" },
        { name: "Camel", hex: "#C19A6B" },
        { name: "Warm Bronze", hex: "#B08D57" },
        { name: "Light Warm Navy", hex: "#3B5998" },
        { name: "Golden Brown", hex: "#996515" },
        { name: "Khaki", hex: "#C3B091" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
      accents: [
        { name: "Bright Orange", hex: "#FF7518" },
        { name: "Lime Green", hex: "#9ACD32" },
        { name: "Warm Fuchsia", hex: "#E85D9E" },
        { name: "Clear Aqua", hex: "#00C4B0" },
        { name: "Marigold", hex: "#F1A62A" },
        { name: "Geranium Red", hex: "#E8384F" },
        { name: "Violet", hex: "#8F5FD0" },
        { name: "Kelly Green", hex: "#4CBB17" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Yellow Gold", hex: "#FFD700" },
        { name: "Polished Gold", hex: "#E6BE44" },
        { name: "Warm Brass", hex: "#B5A642" },
        { name: "Copper", hex: "#B87333" },
      ],
      materials: ["Yellow gold", "Brass", "Copper", "Coral", "Amber", "Turquoise"],
    },
    patterns: [
      "Lively, fresh patterns with warm colors",
      "Tropical and botanical prints",
      "Medium-scale geometric patterns",
      "Avoid dark, heavy, or dusty patterns",
    ],
    avoid: [
      {
        category: "Cool, dark colors",
        colors: ["Black", "Cool navy", "Charcoal"],
        reason: "These heavy, cool colors dull your warm golden glow.",
      },
      {
        category: "Dusty, muted tones",
        colors: ["Dusty pink", "Sage", "Taupe"],
        reason: "Muted colors drain the natural clarity and brightness of your coloring.",
      },
    ],
  },

  brightSpring: {
    key: "brightSpring",
    season: "Bright Spring",
    family: "Spring",
    alternativeName: "Clear Spring",
    description:
      "Bright Spring combines warmth with high clarity and contrast. Your features are vivid—bright eyes, and clear skin with warm undertones. You need colors with saturation and sparkle: think bright coral, clear turquoise, and vivid warm pink.",
    characteristics: [
      "High clarity and brightness",
      "Warm undertones with contrast",
      "Vivid, sparkling eyes",
      "Can wear saturated color",
      "Neutral-warm lean",
    ],
    clothing: {
      primary: [
        { name: "Bright Coral", hex: "#FF6F61" },
        { name: "Clear Turquoise", hex: "#00CED1" },
        { name: "Vivid Pink", hex: "#FF4F9A" },
        { name: "Bright Yellow", hex: "#FFD300" },
        { name: "Clear Green", hex: "#2ECC71" },
        { name: "Bright Blue", hex: "#1E90FF" },
        { name: "Tangerine", hex: "#FF8C42" },
        { name: "Scarlet", hex: "#FF2400" },
      ],
      neutrals: [
        { name: "Bright White", hex: "#FDFDFD" },
        { name: "Light Camel", hex: "#CBA85E" },
        { name: "Warm Navy", hex: "#2C4A8A" },
        { name: "Clear Charcoal", hex: "#4A4A4A" },
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Golden Taupe", hex: "#B49B6C" },
        { name: "Medium Grey", hex: "#8C8C8C" },
        { name: "Warm Stone", hex: "#D6C6A5" },
      ],
      accents: [
        { name: "Hot Coral", hex: "#FF4040" },
        { name: "Electric Aqua", hex: "#00FFEF" },
        { name: "Vivid Violet", hex: "#9F00FF" },
        { name: "Lime Punch", hex: "#BFFF00" },
        { name: "Bright Fuchsia", hex: "#FF00A0" },
        { name: "Emerald", hex: "#009B77" },
        { name: "Sunflower", hex: "#FFDA03" },
        { name: "Cobalt", hex: "#0047AB" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Polished Gold", hex: "#E6BE44" },
        { name: "Bright Yellow Gold", hex: "#FFD700" },
        { name: "Light Rose Gold", hex: "#EDC0AC" },
        { name: "Shiny Silver Accent", hex: "#D8D8D8" },
      ],
      materials: ["Polished gold", "Shiny finishes", "Crystals", "Bright gemstones", "Turquoise", "Citrine"],
    },
    patterns: [
      "Bold, high-contrast patterns with clear colors",
      "Vivid geometric and abstract prints",
      "Color-blocking with bright hues",
      "Avoid dusty, faded, or overly subtle patterns",
    ],
    avoid: [
      {
        category: "Muted, dusty colors",
        colors: ["Dusty rose", "Sage green", "Mushroom"],
        reason: "Muted colors make your naturally bright coloring look flat and tired.",
      },
      {
        category: "Heavy, dark earth tones",
        colors: ["Dark olive", "Chocolate brown", "Rust"],
        reason: "Heavy earth tones weigh down your fresh, vivid quality.",
      },
    ],
  },

  // ============ SUMMER FAMILY ============
  lightSummer: {
    key: "lightSummer",
    season: "Light Summer",
    family: "Summer",
    alternativeName: "Light Cool",
    description:
      "Light Summer is light, cool, and delicate. Your features are soft and fair with cool or neutral-cool undertones—ash blonde or light brown hair, soft blue or grey eyes. You look best in light, cool, gentle colors like powder blue, soft rose, and lavender.",
    characteristics: [
      "Light, airy coloring",
      "Cool or neutral-cool undertones",
      "Low to medium contrast",
      "Soft, gentle quality",
      "Ashy rather than golden tones",
    ],
    clothing: {
      primary: [
        { name: "Powder Blue", hex: "#B0E0E6" },
        { name: "Soft Rose", hex: "#F4C2C2" },
        { name: "Lavender", hex: "#C8A2C8" },
        { name: "Cool Mint", hex: "#AAF0D1" },
        { name: "Dusty Pink", hex: "#DCA1A1" },
        { name: "Light Periwinkle", hex: "#C5CBE1" },
        { name: "Soft Lemon", hex: "#FDFD96" },
        { name: "Seafoam", hex: "#93E9BE" },
      ],
      neutrals: [
        { name: "Soft White", hex: "#F8F8FF" },
        { name: "Light Grey", hex: "#D3D3D3" },
        { name: "Cool Beige", hex: "#D6CFC7" },
        { name: "Light Navy", hex: "#5A6B9E" },
        { name: "Dove Grey", hex: "#BEBEBE" },
        { name: "Rose Beige", hex: "#D9C2BD" },
        { name: "Cocoa Mist", hex: "#B0A099" },
        { name: "Pearl", hex: "#EAE0E0" },
      ],
      accents: [
        { name: "Cool Raspberry", hex: "#D25E7E" },
        { name: "Soft Turquoise", hex: "#6FC7C7" },
        { name: "Wisteria", hex: "#9A7FBF" },
        { name: "Rose Pink", hex: "#E8909C" },
        { name: "Cornflower Blue", hex: "#6495ED" },
        { name: "Soft Emerald", hex: "#66B28C" },
        { name: "Orchid", hex: "#DA70D6" },
        { name: "Cool Melon", hex: "#F2A0A0" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Silver", hex: "#C0C0C0" },
        { name: "White Gold", hex: "#DBD7D2" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "Soft Rose Gold", hex: "#E9C9C0" },
      ],
      materials: ["Silver", "White gold", "Platinum", "Pearls", "Rose quartz", "Aquamarine"],
    },
    patterns: [
      "Soft, watercolor-style patterns",
      "Delicate florals with cool tones",
      "Gentle stripes in light colors",
      "Avoid bold, high-contrast, or warm-toned patterns",
    ],
    avoid: [
      {
        category: "Warm, golden colors",
        colors: ["Orange", "Golden yellow", "Rust"],
        reason: "Warm golden tones clash with your cool undertones and create a sallow effect.",
      },
      {
        category: "Dark, heavy colors",
        colors: ["Black", "Espresso", "Deep burgundy"],
        reason: "Heavy darks overpower your light, delicate features.",
      },
    ],
  },

  trueSummer: {
    key: "trueSummer",
    season: "True Summer",
    family: "Summer",
    alternativeName: "Cool Summer",
    description:
      "True Summer is the coolest of the Summer seasons. Your coloring is soft and cool with blue undertones—no golden warmth. You look best in cool, medium-soft colors like soft fuchsia, cool blue, and rose that echo a hazy summer afternoon.",
    characteristics: [
      "Distinctly cool, blue undertones",
      "Soft, medium contrast",
      "Ashy hair tones",
      "Elegant, understated quality",
      "Cool rather than bright",
    ],
    clothing: {
      primary: [
        { name: "Soft Fuchsia", hex: "#C74B8C" },
        { name: "Cool Blue", hex: "#5B7FBD" },
        { name: "Rose", hex: "#E48FA8" },
        { name: "Soft Teal", hex: "#4C9E9E" },
        { name: "Periwinkle", hex: "#8896D7" },
        { name: "Raspberry", hex: "#B44B6E" },
        { name: "Cool Lavender", hex: "#9B8AC4" },
        { name: "Slate Blue", hex: "#6A5ACD" },
      ],
      neutrals: [
        { name: "Soft White", hex: "#F5F5F5" },
        { name: "Grey Blue", hex: "#8DA3B9" },
        { name: "Cool Taupe", hex: "#AB9C94" },
        { name: "Medium Grey", hex: "#9A9A9A" },
        { name: "Navy", hex: "#31456E" },
        { name: "Rose Brown", hex: "#9E7B78" },
        { name: "Charcoal Blue", hex: "#4C5866" },
        { name: "Silver Grey", hex: "#C4C4C4" },
      ],
      accents: [
        { name: "Cool Watermelon", hex: "#E37383" },
        { name: "Amethyst", hex: "#9966CC" },
        { name: "Deep Rose", hex: "#B03060" },
        { name: "Spruce", hex: "#2E6E6E" },
        { name: "Cool Pink", hex: "#E75480" },
        { name: "Blue Iris", hex: "#5A4FCF" },
        { name: "Soft Burgundy", hex: "#8E4162" },
        { name: "Sea Blue", hex: "#4682B4" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Silver", hex: "#C0C0C0" },
        { name: "White Gold", hex: "#DBD7D2" },
        { name: "Brushed Platinum", hex: "#D9D8D6" },
        { name: "Pewter", hex: "#8E9294" },
      ],
      materials: ["Silver", "White gold", "Platinum", "Pearls", "Sapphire", "Rose quartz"],
    },
    patterns: [
      "Soft, blended patterns with cool tones",
      "Classic florals and paisleys in muted colors",
      "Tone-on-tone cool combinations",
      "Avoid warm-toned or high-contrast graphic patterns",
    ],
    avoid: [
      {
        category: "Warm earth tones",
        colors: ["Orange", "Camel", "Golden brown"],
        reason: "Warm earth tones make your cool complexion appear ruddy or sallow.",
      },
      {
        category: "Black and stark contrasts",
        colors: ["Black", "Pure white combos"],
        reason: "Stark contrast overwhelms your soft, blended coloring.",
      },
    ],
  },

  softSummer: {
    key: "softSummer",
    season: "Soft Summer",
    family: "Summer",
    alternativeName: "Soft Cool",
    description:
      "Soft Summer is muted, cool, and gentle. Your features blend softly with greyed, neutral-cool tones—no sharp contrast, no vivid color. You look best in dusty, misty colors like sage, dusty rose, and grey-blue that create a harmonious, elegant effect.",
    characteristics: [
      "Muted, greyed coloring",
      "Neutral-cool undertones",
      "Low contrast, blended features",
      "Misty, soft quality",
      "Neither too warm nor too cool",
    ],
    clothing: {
      primary: [
        { name: "Dusty Rose", hex: "#C08081" },
        { name: "Sage Green", hex: "#9CAF88" },
        { name: "Grey Blue", hex: "#7393A7" },
        { name: "Mauve", hex: "#B784A7" },
        { name: "Dusty Teal", hex: "#5F9EA0" },
        { name: "Soft Plum", hex: "#8E6C88" },
        { name: "Misty Lavender", hex: "#A2A2C2" },
        { name: "Dusty Blue", hex: "#6E91B0" },
      ],
      neutrals: [
        { name: "Soft White", hex: "#F2F0EB" },
        { name: "Greige", hex: "#B5AFA6" },
        { name: "Cool Taupe", hex: "#A39990" },
        { name: "Slate Grey", hex: "#708090" },
        { name: "Soft Navy", hex: "#46586E" },
        { name: "Mushroom", hex: "#B4A99A" },
        { name: "Pewter Grey", hex: "#93989C" },
        { name: "Stone", hex: "#C6BFB4" },
      ],
      accents: [
        { name: "Soft Raspberry", hex: "#AE5A73" },
        { name: "Dusty Purple", hex: "#7E6889" },
        { name: "Muted Emerald", hex: "#568F73" },
        { name: "Rose Taupe", hex: "#905D5D" },
        { name: "Soft Denim", hex: "#5876A3" },
        { name: "Heather", hex: "#9E7BB5" },
        { name: "Dusty Coral", hex: "#CB8577" },
        { name: "Smoky Teal", hex: "#48757A" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Brushed Silver", hex: "#BCC2C2" },
        { name: "Matte White Gold", hex: "#D5D2CC" },
        { name: "Antiqued Silver", hex: "#9FA5A5" },
        { name: "Soft Rose Gold", hex: "#DBBBB0" },
      ],
      materials: ["Brushed silver", "Matte finishes", "Grey pearls", "Rose quartz", "Labradorite", "Moonstone"],
    },
    patterns: [
      "Softly blended, low-contrast patterns",
      "Watercolor and heathered textures",
      "Muted florals and abstract prints",
      "Avoid vivid, saturated, or high-contrast patterns",
    ],
    avoid: [
      {
        category: "Bright, saturated colors",
        colors: ["Bright orange", "Electric blue", "Hot pink"],
        reason: "Vivid colors overwhelm your muted coloring and wear you instead of you wearing them.",
      },
      {
        category: "Warm golden tones",
        colors: ["Golden yellow", "Rust", "Warm camel"],
        reason: "Strong warmth clashes with your neutral-cool undertone.",
      },
    ],
  },

  // ============ AUTUMN FAMILY ============
  softAutumn: {
    key: "softAutumn",
    season: "Soft Autumn",
    family: "Autumn",
    alternativeName: "Soft Warm",
    description:
      "Soft Autumn is characterized by muted warmth with lower contrast between features. Your coloring is gentle and blended—warm but subtle, like sun-faded autumn colors. You look best in soft, warm, muted colors like sage, terracotta, and warm taupe.",
    characteristics: [
      "Muted, gentle warmth",
      "Low contrast features",
      "Soft, blended appearance",
      "Sun-faded quality",
      "Warm but subtle undertones",
    ],
    clothing: {
      primary: [
        { name: "Soft Terracotta", hex: "#C87F5D" },
        { name: "Sage Green", hex: "#9CAF88" },
        { name: "Warm Olive", hex: "#8A8B5C" },
        { name: "Dusty Peach", hex: "#E5B39A" },
        { name: "Muted Gold", hex: "#C9A66B" },
        { name: "Soft Salmon", hex: "#DC9788" },
        { name: "Faded Denim", hex: "#7290A5" },
        { name: "Warm Sand", hex: "#D4B896" },
      ],
      neutrals: [
        { name: "Oatmeal", hex: "#E0D5C0" },
        { name: "Warm Taupe", hex: "#AF9C8A" },
        { name: "Mushroom", hex: "#B4A99A" },
        { name: "Soft Camel", hex: "#BFA378" },
        { name: "Warm Grey", hex: "#A79E94" },
        { name: "Cream", hex: "#F5EFE0" },
        { name: "Soft Brown", hex: "#8F7A66" },
        { name: "Khaki", hex: "#B0A583" },
      ],
      accents: [
        { name: "Soft Mauve", hex: "#B08699" },
        { name: "Muted Teal", hex: "#5E8B7E" },
        { name: "Dusty Coral", hex: "#CB8577" },
        { name: "Warm Sage", hex: "#A3A380" },
        { name: "Soft Rust", hex: "#B5715F" },
        { name: "Faded Plum", hex: "#8E7086" },
        { name: "Antique Gold", hex: "#B69C5F" },
        { name: "Smoky Turquoise", hex: "#5F8A8B" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Brushed Gold", hex: "#C9AE5D" },
        { name: "Antique Gold", hex: "#AB9144" },
        { name: "Bronze", hex: "#B08D57" },
        { name: "Matte Copper", hex: "#B87355" },
      ],
      materials: ["Brushed gold", "Bronze", "Copper", "Wood", "Amber", "Smoky quartz"],
    },
    patterns: [
      "Soft blending with low contrast",
      "Matte fabrics over shiny finishes",
      "Gentle, organic patterns",
      "Avoid stark contrasts and vivid brights",
    ],
    avoid: [
      {
        category: "Bright, clear colors",
        colors: ["Hot pink", "Electric blue", "Bright orange"],
        reason: "Saturated colors overpower your soft, muted coloring.",
      },
      {
        category: "Stark black and white",
        colors: ["Pure black", "Optic white"],
        reason: "Harsh contrast fights your gentle, blended features.",
      },
    ],
  },

  trueAutumn: {
    key: "trueAutumn",
    season: "True Autumn",
    family: "Autumn",
    alternativeName: "Warm Autumn",
    description:
      "True Autumn is the heart of the Autumn family—unmistakably warm, rich, and golden. Your coloring glows with earthy warmth at medium depth and saturation. You look best in classic autumn colors: pumpkin, mustard, olive, and rich golden browns.",
    characteristics: [
      "Rich, golden warmth",
      "Medium depth and saturation",
      "Earthy, natural quality",
      "Golden undertones throughout",
      "Balanced autumn coloring",
    ],
    clothing: {
      primary: [
        { name: "Pumpkin", hex: "#C46210" },
        { name: "Mustard", hex: "#D4A017" },
        { name: "Olive Green", hex: "#708238" },
        { name: "Rust", hex: "#B7410E" },
        { name: "Warm Teal", hex: "#367588" },
        { name: "Tomato Red", hex: "#C4452C" },
        { name: "Golden Brown", hex: "#A87332" },
        { name: "Moss Green", hex: "#8A9A5B" },
      ],
      neutrals: [
        { name: "Cream", hex: "#F5EBD8" },
        { name: "Camel", hex: "#C19A6B" },
        { name: "Warm Brown", hex: "#7B5B3A" },
        { name: "Khaki", hex: "#BDB76B" },
        { name: "Chocolate", hex: "#5C4033" },
        { name: "Warm Beige", hex: "#D9C7A7" },
        { name: "Bronze", hex: "#9C7A3C" },
        { name: "Coffee", hex: "#6F4E37" },
      ],
      accents: [
        { name: "Burnt Orange", hex: "#CC5500" },
        { name: "Deep Gold", hex: "#B8860B" },
        { name: "Forest Green", hex: "#4A7023" },
        { name: "Warm Burgundy", hex: "#8E3A2F" },
        { name: "Turquoise", hex: "#40826D" },
        { name: "Salmon", hex: "#E9967A" },
        { name: "Copper", hex: "#B87333" },
        { name: "Deep Periwinkle", hex: "#6667AB" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Yellow Gold", hex: "#D4AF37" },
        { name: "Antique Gold", hex: "#AB9144" },
        { name: "Copper", hex: "#B87333" },
        { name: "Bronze", hex: "#B08D57" },
      ],
      materials: ["Yellow gold", "Copper", "Bronze", "Amber", "Tiger's eye", "Carnelian"],
    },
    patterns: [
      "Rich, earthy patterns—paisley, plaid, animal prints",
      "Natural textures like suede and tweed",
      "Medium-contrast warm combinations",
      "Avoid icy pastels and stark monochrome",
    ],
    avoid: [
      {
        category: "Cool, icy colors",
        colors: ["Icy blue", "Cool pink", "Lavender"],
        reason: "Icy cools clash with your golden warmth and make you look tired.",
      },
      {
        category: "Stark black and white",
        colors: ["Pure black", "Optic white"],
        reason: "Harsh neutrals overpower your rich, earthy glow.",
      },
    ],
  },

  deepAutumn: {
    key: "deepAutumn",
    season: "Deep Autumn",
    family: "Autumn",
    alternativeName: "Dark Autumn",
    description:
      "Deep Autumn is characterized by richer, deeper, and more saturated warm colors. Your features are grounded and have warmth, meaning you look best in colors that have a certain 'weight' and saturation to them—deep olive, burnt orange, and espresso.",
    characteristics: [
      "Richer, deeper color palette",
      "More saturated warm tones",
      "Stronger warmth than Soft Autumn",
      "Earthy, grounded foundation",
      "Natural sophistication",
    ],
    clothing: {
      primary: [
        { name: "Deep Olive", hex: "#556B2F" },
        { name: "Burnt Orange", hex: "#CC5500" },
        { name: "Rust Red", hex: "#B7410E" },
        { name: "Mustard Gold", hex: "#FFDB58" },
        { name: "Forest Green", hex: "#228B22" },
        { name: "Warm Terracotta", hex: "#E2725B" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Warm Olive Brown", hex: "#6B5D3A" },
      ],
      neutrals: [
        { name: "Chocolate Brown", hex: "#3D2B1F" },
        { name: "Warm Cream", hex: "#FFFDD0" },
        { name: "Warm Charcoal", hex: "#36454F" },
        { name: "Camel", hex: "#C19A6B" },
        { name: "Warm Taupe", hex: "#8B8589" },
        { name: "Deep Ivory", hex: "#F5E8D3" },
        { name: "Warm Grey-Brown", hex: "#5C4E47" },
        { name: "Cognac", hex: "#9A463D" },
      ],
      accents: [
        { name: "Deep Teal", hex: "#367588" },
        { name: "Rust", hex: "#B7410E" },
        { name: "Eggplant Purple", hex: "#514051" },
        { name: "Warm Copper", hex: "#B87333" },
        { name: "Deep Marigold", hex: "#EAA221" },
        { name: "Warm Brick Red", hex: "#8B3A3A" },
        { name: "Forest Teal", hex: "#1F6357" },
        { name: "Warm Plum", hex: "#673147" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Antique Gold", hex: "#AB9144" },
        { name: "Copper", hex: "#B87333" },
        { name: "Bronze", hex: "#B08D57" },
        { name: "Warm Brass", hex: "#B5A642" },
      ],
      materials: ["Antique gold", "Copper", "Bronze", "Leather", "Tortoiseshell", "Garnet"],
    },
    patterns: [
      "Rich, deep patterns with warm saturation",
      "Textured fabrics—leather, suede, corduroy",
      "Medium-to-high contrast in warm tones",
      "Avoid pale pastels and icy tones",
    ],
    avoid: [
      {
        category: "Pale pastels",
        colors: ["Baby pink", "Powder blue", "Mint"],
        reason: "Pale colors wash out your rich, deep coloring.",
      },
      {
        category: "Cool, icy tones",
        colors: ["Icy grey", "Cool lavender", "Fuchsia"],
        reason: "Icy cools conflict with your warm, grounded depth.",
      },
    ],
  },

  // ============ WINTER FAMILY ============
  deepWinter: {
    key: "deepWinter",
    season: "Deep Winter",
    family: "Winter",
    alternativeName: "Dark Winter",
    description:
      "Deep Winter is dark, cool, and intense. Your features show strong depth with cool or neutral-cool undertones—dark hair, deep eyes, and the ability to wear dramatic contrast. You shine in deep, cool colors like black cherry, emerald, and true black.",
    characteristics: [
      "Deep, dark coloring",
      "Cool or neutral-cool undertones",
      "High contrast capability",
      "Dramatic, intense quality",
      "Can wear black beautifully",
    ],
    clothing: {
      primary: [
        { name: "Black Cherry", hex: "#5B2333" },
        { name: "Emerald", hex: "#046307" },
        { name: "Deep Teal", hex: "#014D4E" },
        { name: "Royal Purple", hex: "#4B0082" },
        { name: "True Red", hex: "#C41E3A" },
        { name: "Deep Fuchsia", hex: "#A50B5E" },
        { name: "Sapphire", hex: "#0F52BA" },
        { name: "Pine Green", hex: "#01796F" },
      ],
      neutrals: [
        { name: "Black", hex: "#000000" },
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Charcoal", hex: "#36454F" },
        { name: "Deep Navy", hex: "#1B2A4A" },
        { name: "Dark Chocolate", hex: "#3B2F2F" },
        { name: "Slate", hex: "#4A5568" },
        { name: "Cool Dark Grey", hex: "#54565A" },
        { name: "Deep Taupe", hex: "#6E5F5B" },
      ],
      accents: [
        { name: "Hot Pink", hex: "#E0218A" },
        { name: "Ice Blue", hex: "#A5D8E6" },
        { name: "Vivid Violet", hex: "#8329C7" },
        { name: "Ruby", hex: "#9B111E" },
        { name: "Bright Emerald", hex: "#009B77" },
        { name: "Icy Lemon", hex: "#F5F1A4" },
        { name: "Deep Magenta", hex: "#8B008B" },
        { name: "Electric Blue", hex: "#0072BB" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Silver", hex: "#C0C0C0" },
        { name: "White Gold", hex: "#DBD7D2" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "Gunmetal", hex: "#53565A" },
      ],
      materials: ["Silver", "White gold", "Platinum", "Onyx", "Ruby", "Emerald"],
    },
    patterns: [
      "Bold, high-contrast patterns",
      "Dramatic geometric prints",
      "Deep jewel tone combinations",
      "Avoid soft, dusty, or warm earthy patterns",
    ],
    avoid: [
      {
        category: "Warm earth tones",
        colors: ["Orange", "Rust", "Golden brown"],
        reason: "Warm earth tones dull your cool intensity and depth.",
      },
      {
        category: "Soft, muted pastels",
        colors: ["Dusty rose", "Sage", "Peach"],
        reason: "Muted soft colors make your dramatic coloring look faded.",
      },
    ],
  },

  trueWinter: {
    key: "trueWinter",
    season: "True Winter",
    family: "Winter",
    alternativeName: "Cool Winter",
    description:
      "True Winter is the coolest season of all—icy, vivid, and high-contrast. Your coloring has blue undertones with striking contrast between features. You look best in pure, cool colors: true white, black, royal blue, and icy brights.",
    characteristics: [
      "Purely cool, blue undertones",
      "High contrast features",
      "Icy, vivid quality",
      "Striking appearance",
      "No golden warmth",
    ],
    clothing: {
      primary: [
        { name: "Royal Blue", hex: "#4169E1" },
        { name: "True Red", hex: "#DC143C" },
        { name: "Emerald", hex: "#50C878" },
        { name: "Magenta", hex: "#CA1F7B" },
        { name: "Cool Purple", hex: "#6A0DAD" },
        { name: "Ice Pink", hex: "#F7C6D9" },
        { name: "Cobalt", hex: "#0047AB" },
        { name: "Cherry Red", hex: "#D2042D" },
      ],
      neutrals: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
        { name: "Cool Navy", hex: "#202A44" },
        { name: "Charcoal Grey", hex: "#3E4247" },
        { name: "Medium Grey", hex: "#848789" },
        { name: "Icy Grey", hex: "#D8DCDF" },
        { name: "Dark Taupe", hex: "#605A56" },
        { name: "Silver Grey", hex: "#BFC4C9" },
      ],
      accents: [
        { name: "Icy Blue", hex: "#BDE3F0" },
        { name: "Hot Pink", hex: "#FF69B4" },
        { name: "Vivid Fuchsia", hex: "#E5097F" },
        { name: "Icy Lavender", hex: "#D9D6F0" },
        { name: "Lemon Ice", hex: "#F8F4A6" },
        { name: "Bright Emerald", hex: "#00A86B" },
        { name: "Electric Violet", hex: "#8F00FF" },
        { name: "Icy Mint", hex: "#C9F0DD" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "White Gold", hex: "#DBD7D2" },
        { name: "Polished Chrome", hex: "#DBE2E9" },
      ],
      materials: ["Silver", "Platinum", "White gold", "Diamonds", "Sapphire", "Black onyx"],
    },
    patterns: [
      "Crisp, high-contrast patterns",
      "Black and white graphics",
      "Bold stripes and geometric prints",
      "Avoid warm, earthy, or muted patterns",
    ],
    avoid: [
      {
        category: "Warm, golden colors",
        colors: ["Orange", "Golden yellow", "Camel"],
        reason: "Any golden warmth clashes dramatically with your icy cool undertones.",
      },
      {
        category: "Muted, dusty tones",
        colors: ["Dusty rose", "Sage", "Taupe"],
        reason: "Muted colors dull your naturally vivid, high-contrast look.",
      },
    ],
  },

  brightWinter: {
    key: "brightWinter",
    season: "Bright Winter",
    family: "Winter",
    alternativeName: "Clear Winter",
    description:
      "Bright Winter is vivid, cool, and electric. Your coloring combines high clarity with cool undertones and notable contrast—clear, bright eyes and a sparkling quality. You look best in saturated, clear colors with icy contrast: fuchsia, cobalt, and true emerald.",
    characteristics: [
      "Maximum clarity and saturation",
      "Cool or neutral-cool undertones",
      "High contrast with sparkle",
      "Electric, vivid quality",
      "Clear rather than deep",
    ],
    clothing: {
      primary: [
        { name: "Bright Fuchsia", hex: "#FF1DCE" },
        { name: "Cobalt Blue", hex: "#0047AB" },
        { name: "True Emerald", hex: "#009B77" },
        { name: "Scarlet", hex: "#FF2400" },
        { name: "Vivid Purple", hex: "#9F00C5" },
        { name: "Bright Turquoise", hex: "#08E8DE" },
        { name: "Shocking Pink", hex: "#FC0FC0" },
        { name: "Electric Blue", hex: "#007FFF" },
      ],
      neutrals: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Black", hex: "#000000" },
        { name: "Icy Grey", hex: "#DEE2E6" },
        { name: "Cool Navy", hex: "#1F305E" },
        { name: "Bright Charcoal", hex: "#414A4C" },
        { name: "Icy Silver", hex: "#E8ECEF" },
        { name: "Cool Medium Grey", hex: "#8A8D90" },
        { name: "Crisp Taupe", hex: "#877F7D" },
      ],
      accents: [
        { name: "Neon Pink", hex: "#FF6EC7" },
        { name: "Icy Yellow", hex: "#FDFD96" },
        { name: "Vivid Lime", hex: "#AEFF6E" },
        { name: "Icy Violet", hex: "#D9C6F5" },
        { name: "Hot Coral", hex: "#FF4E5B" },
        { name: "Bright Amethyst", hex: "#9932CC" },
        { name: "Icy Aqua", hex: "#BDF5F0" },
        { name: "Ultramarine", hex: "#3F00FF" },
      ],
    },
    jewelry: {
      metals: [
        { name: "Polished Silver", hex: "#CFD4D9" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "White Gold", hex: "#DBD7D2" },
        { name: "Chrome", hex: "#DBE2E9" },
      ],
      materials: ["Polished silver", "Platinum", "Crystals", "Diamonds", "Bright gemstones", "Glass"],
    },
    patterns: [
      "Vivid, high-energy patterns",
      "Color-blocking with saturated brights",
      "Sharp geometric prints with contrast",
      "Avoid dusty, faded, or earthy patterns",
    ],
    avoid: [
      {
        category: "Muted, soft colors",
        colors: ["Dusty rose", "Sage", "Mushroom"],
        reason: "Soft muted colors make your electric coloring look washed out.",
      },
      {
        category: "Warm earth tones",
        colors: ["Rust", "Olive", "Golden brown"],
        reason: "Earthy warmth conflicts with your cool, sparkling clarity.",
      },
    ],
  },
};

export const seasonFamilies = {
  Spring: ["lightSpring", "trueSpring", "brightSpring"],
  Summer: ["lightSummer", "trueSummer", "softSummer"],
  Autumn: ["softAutumn", "trueAutumn", "deepAutumn"],
  Winter: ["deepWinter", "trueWinter", "brightWinter"],
} as const;

export type SeasonKey = keyof typeof allSeasons;

export const seasonKeys = Object.keys(allSeasons) as SeasonKey[];
