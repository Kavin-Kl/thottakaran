import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits and licences for the photographs used on this website.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo credits"
        title="Thank you to the photographers."
        intro="Product photographs on this site are public-domain (CC0) stock photographs, sourced via Openverse."
      />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <ul className="divide-y divide-forest/10">
          {products.map(({ slug, name, photo }) =>
            photo ? (
              <li key={slug} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                <span className="font-display text-lg text-forest">{name}</span>
                <span className="text-sm text-ink/70">
                  <a href={photo.source} target="_blank" rel="noreferrer" className="underline hover:text-moss">
                    {photo.credit}
                  </a>{" "}
                  · {photo.license}
                </span>
              </li>
            ) : null,
          )}
        </ul>
      </section>
    </>
  );
}
