import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { LeafMark } from "./Logo";

export function ProductArt({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        large ? "aspect-square rounded-3xl" : "aspect-[4/3] rounded-2xl"
      }`}
      style={{ backgroundColor: product.tint }}
    >
      {product.photo ? (
        <Image
          src={product.photo.src}
          alt={product.name}
          fill
          sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-105"
          preload={large}
        />
      ) : (
        <>
          <div className="grain absolute inset-0 opacity-60" />
          <LeafMark className={`${large ? "h-40 w-40" : "h-20 w-20"} text-forest/50`} />
        </>
      )}
      <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-forest">
        {product.category}
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-3xl bg-white/60 p-3 ring-1 ring-forest/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10"
    >
      <ProductArt product={product} />
      <div className="px-2 pb-2 pt-4">
        <h3 className="font-display text-xl text-forest group-hover:text-moss">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ink/60">{product.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.highlights.slice(0, 2).map((h) => (
            <span key={h} className="rounded-full bg-leaf/15 px-2.5 py-0.5 text-xs font-medium text-moss">
              {h}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
