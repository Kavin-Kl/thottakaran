import type { Metadata } from "next";
import ProductCatalog from "@/components/ProductCatalog";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Traditional rice, cold-pressed oils, groundnuts, sesame, cashews, turmeric, pepper and chili — handpicked from farmers and lab-checked.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Handpicked from the farm. Nothing added."
        intro="Every product is 100% organic, 100% natural and 100% preservative-free — chosen directly from farmers and lab-checked before it reaches you."
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <ProductCatalog />
      </section>
    </>
  );
}
