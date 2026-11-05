import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard, { ProductArt } from "@/components/ProductCard";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { process } from "@/data/content";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <Link href="/products" className="text-sm font-semibold text-moss hover:text-forest">
          ← All products
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <ProductArt product={product} large />
            {product.photo && (
              <p className="mt-2 text-xs text-ink/50">
                Photo:{" "}
                <a href={product.photo.source} target="_blank" rel="noreferrer" className="underline hover:text-moss">
                  {product.photo.credit}
                </a>{" "}
                · {product.photo.license}
              </p>
            )}
          </div>

          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-xl italic text-moss">{product.tagline}</p>
            <p className="mt-6 text-lg text-ink/75">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-sand/60 p-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Sourced from</dt>
                <dd className="mt-1 font-medium text-forest">{product.origin}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Available in</dt>
                <dd className="mt-1 font-medium text-forest">{product.sizes.join(" · ")}</dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {[...product.highlights, "100% Organic", "Preservative-free"].map((h) => (
                <li key={h} className="rounded-full bg-leaf/15 px-3 py-1 text-sm font-medium text-moss">
                  ✓ {h}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ButtonLink href={`/contact?product=${product.slug}`}>Enquire / Order</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="font-display text-2xl text-forest md:text-3xl">How this reached you</h2>
          <ol className="mt-8 flex flex-wrap gap-3">
            {process.map((p, i) => (
              <li key={p.step} className="rounded-full bg-cream px-5 py-2 font-medium text-forest ring-1 ring-forest/10">
                {i + 1}. {p.step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="font-display text-3xl text-forest">You may also like</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
