"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products, type Category } from "@/data/products";

export default function ProductCatalog() {
  const [active, setActive] = useState<Category | "All">("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === c
                ? "bg-forest text-cream"
                : "bg-white/60 text-forest ring-1 ring-forest/15 hover:bg-sand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
