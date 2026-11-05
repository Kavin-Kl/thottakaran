import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { LeafMark } from "@/components/Logo";
import { ButtonLink, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { guarantees, process } from "@/data/content";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-sand/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-32">
          <div>
            <Eyebrow>Organic &amp; natural food products</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-forest md:text-7xl">
              Where humans
              <br />
              <em className="text-moss">meet nature.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">
              Thottakaran — <span className="italic">the farmer</span> — brings
              food back to the way nature made it. Organic and only organic.
              Natural, and everything natural. Nothing beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/products">Explore our products</ButtonLink>
              <ButtonLink href="/our-promise" variant="outline">Our promise</ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-leaf/30" />
            <div className="absolute inset-8 rounded-full bg-moss/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <LeafMark className="h-48 w-48 text-cream" />
            </div>
            <div className="absolute -left-2 top-10 rounded-2xl bg-cream px-4 py-3 shadow-lg">
              <p className="font-display text-2xl text-forest">100%</p>
              <p className="text-xs font-semibold text-ink/60">Preservative-free</p>
            </div>
            <div className="absolute -right-2 bottom-12 rounded-2xl bg-cream px-4 py-3 shadow-lg">
              <p className="font-display text-2xl text-forest">Lab</p>
              <p className="text-xs font-semibold text-ink/60">checked, every batch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.label} className="text-center">
              <p className="font-display text-4xl text-turmeric md:text-5xl">{g.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-cream/80">
                {g.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two promises */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading
          eyebrow="Two promises. Nothing more."
          title="We promise only two things — and we keep both."
          center
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Organic, and only organic.",
              text: "Grown without synthetic fertilisers, pesticides or shortcuts. If it isn't organic, it isn't Thottakaran.",
            },
            {
              title: "Natural, and everything natural.",
              text: "No preservatives, no additives, no artificial colour. Food the way nature made it — as part of human nature.",
            },
          ].map((p, i) => (
            <div key={p.title} className="rounded-3xl bg-white/60 p-10 ring-1 ring-forest/10">
              <span className="font-display text-6xl text-leaf">0{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl text-forest">{p.title}</h3>
              <p className="mt-3 text-ink/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading
            eyebrow="From farm to you"
            title="Every product, five careful steps."
            intro="Each and every Thottakaran product is handpicked, evaluated, curated, analysed and lab-checked — so we deliver exactly what we promise."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.step} className="relative rounded-2xl bg-cream p-6 ring-1 ring-forest/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-moss font-bold text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-forest">{p.step}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="From our fields"
            title="Handpicked for your kitchen."
          />
          <Link href="/products" className="font-semibold text-moss hover:text-forest">
            View all products →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Farmers */}
      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Directly from the farmer</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
              We choose personally — from farmers who live by naturalism.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-cream/75">
            <p>
              Thottakaran means <em>farmer</em>. That&apos;s who we work with —
              directly, with no middlemen. We visit the fields, meet the people
              who tend them, and partner only with farmers who imbibe the value
              of naturalism.
            </p>
            <Link href="/farmers" className="inline-block font-semibold text-turmeric hover:text-cream">
              Meet our farming community →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
