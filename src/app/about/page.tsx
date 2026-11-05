import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Thottakaran means farmer. We exist to bring organic, natural food back into the human food ecosystem.",
};

const values = [
  {
    title: "Nature first",
    text: "Natural food is part of human nature. We don't improve on nature — we protect it.",
  },
  {
    title: "Honesty in every grain",
    text: "Organic and natural, with nothing beyond. What's on the label is all that's in the pack.",
  },
  {
    title: "Farmers as partners",
    text: "We buy directly from farmers who value naturalism, and we build relationships that last.",
  },
  {
    title: "Health that's human",
    text: "Organism, human and health are connected. Good food heals, nourishes and humanises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Thottakaran means <em className="text-moss">farmer.</em></>}
        intro="We started with a simple belief: humans and nature were never meant to be apart. Food that is organic and natural isn't a luxury — it's how we were always meant to eat."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
        <SectionHeading eyebrow="Why we exist" title="Making natural food part of human nature again." />
        <div className="space-y-5 text-lg text-ink/75">
          <p>
            Somewhere along the way, food drifted away from the farm. Preservatives,
            additives and shortcuts crept into our kitchens, and we forgot what real
            food tastes like.
          </p>
          <p>
            Thottakaran is where humans meet nature. We serve food products that are
            organic and natural in nature — and we make them part of the everyday
            human food ecosystem, not a special occasion.
          </p>
          <p>
            We promise only two things: <strong>organic, and only organic</strong>;{" "}
            <strong>natural, and everything natural</strong>. Nothing beyond.
          </p>
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading eyebrow="What we stand for" title="Our values" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-cream p-8 ring-1 ring-forest/10">
                <h3 className="font-display text-2xl text-forest">{v.title}</h3>
                <p className="mt-3 text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
