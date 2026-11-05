import { photos } from "./photos";

// Pack sizes are placeholders — update with Thottakaran's actual pack sizes.

export type Category =
  | "Traditional Rice"
  | "Cold-Pressed Oils"
  | "Nuts & Seeds"
  | "Turmeric"
  | "Spices"
  | "Natural Sweeteners";

export type Photo = {
  src: string;
  credit: string;
  license: string;
  source: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  origin: string;
  sizes: string[];
  highlights: string[];
  tint: string;
  featured?: boolean;
  photo?: Photo;
};

export const categories: Category[] = [
  "Traditional Rice",
  "Cold-Pressed Oils",
  "Nuts & Seeds",
  "Turmeric",
  "Spices",
  "Natural Sweeteners",
];

const origin = "Directly from our partner farmers";

const catalogue: Product[] = [
  {
    slug: "thuyamali-rice",
    name: "Thuyamali Rice",
    category: "Traditional Rice",
    tagline: "A native heritage rice, grown the natural way.",
    description:
      "Thuyamali is a traditional native rice variety, grown organically by farmers who preserve heritage seeds. Unpolished and free of any chemicals, it keeps the natural goodness of the grain intact.",
    origin,
    sizes: ["1 kg", "5 kg"],
    highlights: ["Heritage variety", "Unpolished", "Organically grown"],
    tint: "#ece0c4",
    featured: true,
  },
  {
    slug: "karpaguni-rice",
    name: "Karpaguni Rice",
    category: "Traditional Rice",
    tagline: "The traditional black rice, naturally rich.",
    description:
      "Karpaguni is a traditional black rice prized for generations. Grown organically and kept unpolished, so its deep colour and natural nutrients reach your plate untouched.",
    origin,
    sizes: ["1 kg", "5 kg"],
    highlights: ["Traditional black rice", "Unpolished", "Organically grown"],
    tint: "#6e5a6b",
  },
  {
    slug: "groundnut-oil",
    name: "Groundnut Oil",
    category: "Cold-Pressed Oils",
    tagline: "Cold-pressed from organic groundnuts.",
    description:
      "Pure groundnut oil pressed from organically grown groundnuts. Unrefined and free of preservatives — just natural oil with its natural aroma.",
    origin,
    sizes: ["500 ml", "1 L"],
    highlights: ["Cold-pressed", "Unrefined", "No preservatives"],
    tint: "#ecd18a",
    featured: true,
  },
  {
    slug: "gingelly-oil",
    name: "Sesame Oil (Gingelly Oil)",
    category: "Cold-Pressed Oils",
    tagline: "Gingelly oil, the way it always was.",
    description:
      "Traditional gingelly oil pressed from organically grown sesame seeds. Unrefined and chemical-free, with the rich flavour and aroma of real sesame.",
    origin,
    sizes: ["500 ml", "1 L"],
    highlights: ["Cold-pressed", "Unrefined", "No preservatives"],
    tint: "#c9a46a",
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "Cold-Pressed Oils",
    tagline: "Pure coconut, nothing else.",
    description:
      "Natural coconut oil pressed from organically grown coconuts. No refining, no bleaching, no preservatives — for cooking, hair and skin.",
    origin,
    sizes: ["500 ml", "1 L"],
    highlights: ["Cold-pressed", "Unrefined", "Multi-purpose"],
    tint: "#f1ead7",
  },
  {
    slug: "groundnuts",
    name: "Groundnuts",
    category: "Nuts & Seeds",
    tagline: "Naturally grown, naturally good.",
    description:
      "Organic groundnuts straight from the farm, sun-dried and cleaned by hand. Perfect for snacking, cooking and chutneys.",
    origin,
    sizes: ["500 g", "1 kg"],
    highlights: ["Organically grown", "Sun-dried", "Hand-cleaned"],
    tint: "#d9b383",
  },
  {
    slug: "sesame",
    name: "Sesame Seeds",
    category: "Nuts & Seeds",
    tagline: "Tiny seeds, full of nature.",
    description:
      "Organically grown sesame seeds, cleaned and packed without any processing or additives. Ideal for laddus, podis and everyday cooking.",
    origin,
    sizes: ["250 g", "500 g"],
    highlights: ["Organically grown", "Unprocessed", "Hand-cleaned"],
    tint: "#e8dcc0",
  },
  {
    slug: "cashews",
    name: "Cashews",
    category: "Nuts & Seeds",
    tagline: "Creamy, wholesome, honest cashews.",
    description:
      "Naturally grown cashews, processed without chemicals or preservatives. Rich, creamy and wholesome — just as nature made them.",
    origin,
    sizes: ["250 g", "500 g"],
    highlights: ["Naturally grown", "No preservatives", "Lab-checked"],
    tint: "#efd9b0",
    featured: true,
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    category: "Turmeric",
    tagline: "Whole dried turmeric, pure gold.",
    description:
      "Whole organic turmeric, boiled and sun-dried the traditional way. No polishing, no added colour — grind it fresh at home.",
    origin,
    sizes: ["250 g", "500 g"],
    highlights: ["Whole", "Sun-dried", "No added colour"],
    tint: "#e6b34a",
  },
  {
    slug: "raw-turmeric",
    name: "Raw Turmeric",
    category: "Turmeric",
    tagline: "Fresh from the soil.",
    description:
      "Fresh raw turmeric root, harvested from organic farms. Use it in cooking, pickles, juices and home remedies.",
    origin,
    sizes: ["250 g", "500 g"],
    highlights: ["Fresh root", "Organically grown", "Seasonal"],
    tint: "#e9a23b",
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Turmeric",
    tagline: "Golden, earthy, and honestly pure.",
    description:
      "Organic turmeric ground in small batches. No added colour, no fillers — lab-checked for purity before packing.",
    origin,
    sizes: ["100 g", "250 g"],
    highlights: ["No added colour", "No fillers", "Lab-checked"],
    tint: "#f0c35a",
    featured: true,
  },
  {
    slug: "pepper",
    name: "Pepper",
    category: "Spices",
    tagline: "Bold, aromatic black pepper.",
    description:
      "Naturally grown black pepper, hand-harvested and sun-dried. Strong aroma and real heat, with nothing added.",
    origin,
    sizes: ["100 g", "250 g"],
    highlights: ["Hand-harvested", "Sun-dried", "No additives"],
    tint: "#9c8b7a",
  },
  {
    slug: "chili",
    name: "Chili",
    category: "Spices",
    tagline: "Natural heat, natural colour.",
    description:
      "Organically grown red chillies, sun-dried naturally. No artificial colour, no preservatives — just honest spice.",
    origin,
    sizes: ["100 g", "250 g"],
    highlights: ["Sun-dried", "No artificial colour", "Organically grown"],
    tint: "#c8553d",
  },
  {
    slug: "country-sugar",
    name: "Country Sugar (Nattu Sakkarai)",
    category: "Natural Sweeteners",
    tagline: "Sweetness the way our grandparents knew it.",
    description:
      "Traditional country sugar made from sugarcane juice, without chemicals, bleaching or refining. Its natural brown colour and molasses keep the goodness that white sugar loses.",
    origin,
    sizes: ["500 g", "1 kg"],
    highlights: ["Unrefined", "No bleaching", "No chemicals"],
    tint: "#b07a46",
  },
];

export const products: Product[] = catalogue.map((p) => ({ ...p, photo: photos[p.slug] }));

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
