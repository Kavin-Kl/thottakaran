import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { Emblem } from "./Logo";

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
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          preload={large}
        />
      ) : (
        <Emblem className={`${large ? "h-40 w-40" : "h-20 w-20"} opacity-80`} />
      )}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-moss shadow-sm backdrop-blur">
        {product.category}
      </span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-forest/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest/10"
    >
      <div className="p-2.5 pb-0">
        <ProductArt product={product} />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-display text-xl font-semibold text-forest">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{product.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.highlights.slice(0, 2).map((h) => (
            <span key={h} className="rounded-full bg-mint px-2.5 py-0.5 text-xs font-semibold text-moss">
              {h}
            </span>
          ))}
        </div>
        <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-bold text-moss">
          View product
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
