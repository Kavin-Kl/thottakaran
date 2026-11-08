import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Emblem } from "@/components/Logo";
import { ButtonLink, CtaBand, SectionHeading } from "@/components/ui";
import { guarantees, process } from "@/data/content";
import { categories, products } from "@/data/products";

const photo = (slug: string) => products.find((p) => p.slug === slug)?.photo?.src ?? "";

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const categoryTiles = categories.map((c) => {
    const first = products.find((p) => p.category === c);
    return { name: c, count: products.filter((p) => p.category === c).length, src: first?.photo?.src };
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-turmeric ring-1 ring-white/15">
              Agro tech products · Tamil Nadu
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] md:text-7xl">
              Where humans
              <br />
              <span className="text-turmeric">meet nature.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-cream/75">
              Thottakaran — <em>the farmer</em> — brings food back to the way
              nature made it. Heritage rice, cold-pressed oils, spices and more,
              handpicked directly from farmers and lab-checked. Nothing beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-block rounded-full bg-turmeric px-7 py-3.5 font-bold text-forest shadow-lg shadow-black/20 transition hover:bg-white"
              >
                Explore our products
              </Link>
              <Link
                href="/our-promise"
                className="inline-block rounded-full border-2 border-cream/40 px-7 py-3.5 font-bold text-cream transition hover:border-cream hover:bg-white/5"
              >
                Our promise
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                [String(products.length), "Natural products"],
                ["100%", "Organic"],
                ["0", "Preservatives"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-bold text-white">{v}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo collage */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src={photo("karpaguni-rice")} alt="Traditional black rice on a woven tray" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" preload />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src={photo("turmeric-powder")} alt="Turmeric powder in a bowl" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" preload />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src={photo("chili")} alt="Sun-dried red chillies" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" preload />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 text-forest shadow-2xl sm:left-6 sm:translate-x-0">
              <Emblem className="h-12 w-12" sizes="48px" priority />
              <div>
                <p className="font-display text-sm font-bold leading-tight">Lab-checked</p>
                <p className="text-xs font-semibold text-ink/60">every single batch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="border-b border-forest/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-forest/10 px-5 md:grid-cols-4 md:divide-x">
          {guarantees.map((g) => (
            <div key={g.label} className="flex items-center justify-center gap-3 py-7">
              <span className="font-display text-3xl font-extrabold text-moss">{g.value}</span>
              <span className="text-sm font-bold uppercase tracking-wider text-ink/70">{g.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Shop by category" title="From our fields to your kitchen." />
          <Link href="/products" className="font-bold text-moss hover:text-forest">
            View all products →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categoryTiles.map((c) => (
            <Link
              key={c.name}
              href="/products"
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-forest"
            >
              {c.src && (
                <Image src={c.src} alt="" fill sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw" className="object-cover opacity-90 transition duration-700 group-hover:scale-110" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="font-display text-lg font-bold leading-tight">{c.name}</p>
                <p className="mt-0.5 text-xs font-semibold text-white/70">
                  {c.count} product{c.count > 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading eyebrow="Customer favourites" title="Handpicked for your kitchen." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
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
              src: photo("raw-turmeric"),
            },
            {
              title: "Natural, and everything natural.",
              text: "No preservatives, no additives, no artificial colour. Food the way nature made it — as part of human nature.",
              src: photo("groundnut-oil"),
            },
          ].map((p, i) => (
            <div key={p.title} className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-forest p-10 text-white">
              <Image src={p.src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-40 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-end">
                <span className="font-display text-6xl font-extrabold text-turmeric">0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl font-bold">{p.title}</h3>
                <p className="mt-3 max-w-md text-white/80">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading
            eyebrow="From farm to you"
            title="Every product, five careful steps."
            intro="Each and every Thottakaran product is handpicked, evaluated, curated, analysed and lab-checked — so we deliver exactly what we promise."
          />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-5">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-0.5 bg-mint md:block" />
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-moss font-display text-lg font-bold text-white ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-forest">{p.step}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Farmers */}
      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={photo("cashews")} alt="Farm workers sorting fresh cashews by hand" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turmeric">
              <span aria-hidden="true" className="h-px w-6 bg-turmeric" />
              Directly from the farmer
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              We choose personally — from farmers who live by naturalism.
            </h2>
            <p className="mt-6 text-lg text-cream/75">
              Thottakaran means <em>farmer</em>. That&apos;s who we work with —
              directly, with no middlemen. We visit the fields, meet the people
              who tend them, and partner only with farmers who imbibe the value
              of naturalism.
            </p>
            <div className="mt-8">
              <ButtonLink href="/farmers" variant="light">Meet our farming community</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
