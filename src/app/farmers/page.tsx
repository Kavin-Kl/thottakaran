import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Farmers",
  description:
    "Thottakaran chooses its products personally, directly from farmers who imbibe the value of naturalism.",
};

const pillars = [
  {
    title: "Direct, no middlemen",
    text: "We buy straight from the farm, so farmers receive a fair price and you receive the freshest harvest.",
  },
  {
    title: "Chosen personally",
    text: "We visit the fields ourselves. We see the soil, the seeds and the methods before we partner.",
  },
  {
    title: "Rooted in naturalism",
    text: "Our farmers grow the way their ancestors did — with natural inputs, native seeds and respect for the land.",
  },
];

export default function FarmersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our farmers"
        title="Every product begins with a farmer who believes in nature."
        intro="Thottakaran chooses its products personally, directly from the farmers who imbibe the value of naturalism. They are the heart of everything we do."
      />

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white/60 p-10 ring-1 ring-forest/10">
              <h3 className="font-display text-2xl text-forest">{p.title}</h3>
              <p className="mt-3 text-ink/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <blockquote className="font-display text-3xl leading-snug md:text-4xl">
            “When the soil is cared for, the food takes care of the people.”
          </blockquote>
          <p className="text-lg text-cream/75">
            Organism, human and health are one connected cycle. Healthy soil grows
            healthy food, and healthy food makes healthy, more human lives. Our
            farmers protect that cycle every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-3xl bg-sand/70 p-10 md:p-16">
          <SectionHeading
            eyebrow="Grow with us"
            title="Are you a natural or organic farmer?"
            intro="If you grow without chemicals and believe in naturalism, we'd love to meet you and visit your farm."
          />
          <div className="mt-8">
            <ButtonLink href="/contact?topic=farmer">Partner with Thottakaran</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
