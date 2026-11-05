import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { guarantees, process } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Promise",
  description:
    "100% quality, 100% preservative-free, 100% natural and organic. Every product handpicked, evaluated, curated, analysed and lab-checked.",
};

const never = [
  "Chemical preservatives",
  "Artificial colours or flavours",
  "Synthetic pesticides or fertilisers",
  "Refining, bleaching or polishing",
  "Fillers or adulterants",
  "Anything beyond organic and natural",
];

export default function PromisePage() {
  return (
    <>
      <PageHero
        eyebrow="Our promise"
        title="We deliver what we promise. Every single time."
        intro="Thottakaran assures 100% quality, 100% preservative-free, 100% natural and 100% organic. Here's how we make sure of it."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.label} className="rounded-3xl bg-forest p-8 text-center text-cream">
              <p className="font-display text-5xl text-turmeric">{g.value}</p>
              <p className="mt-2 font-semibold">{g.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <SectionHeading
            eyebrow="Our quality process"
            title="Five steps between the farm and your home."
            center
          />
          <ol className="relative mt-16 space-y-10 border-l-2 border-leaf/50 pl-10">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <span className="absolute -left-[3.15rem] flex h-10 w-10 items-center justify-center rounded-full bg-moss font-bold text-cream ring-4 ring-sand">
                  {i + 1}
                </span>
                <h3 className="font-display text-2xl text-forest">{p.step}</h3>
                <p className="mt-2 max-w-2xl text-lg text-ink/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
        <SectionHeading
          eyebrow="Nothing beyond"
          title="What you'll never find in a Thottakaran product."
          intro="Our promise is as much about what we leave out as what we put in."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {never.map((n) => (
            <li key={n} className="flex items-start gap-3 rounded-2xl bg-white/60 p-5 ring-1 ring-forest/10">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soil/15 text-sm font-bold text-soil">
                ✕
              </span>
              <span className="font-medium text-forest">{n}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
