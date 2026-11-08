import Link from "next/link";
import type { ReactNode } from "react";
import { Emblem } from "./Logo";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-moss">
      <span aria-hidden="true" className="h-px w-6 bg-moss" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-forest md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-ink/70">{intro}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] opacity-[0.12] md:-right-10">
        <Emblem className="h-full w-full grayscale" sizes="448px" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turmeric">
          <span aria-hidden="true" className="h-px w-6 bg-turmeric" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] md:text-6xl [&_em]:text-turmeric">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75">{intro}</p>
      </div>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  const styles = {
    primary: "bg-moss text-white shadow-lg shadow-moss/20 hover:bg-forest",
    outline: "border-2 border-moss text-moss hover:bg-moss hover:text-white",
    light: "bg-white text-moss hover:bg-sand",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 font-bold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-moss px-8 py-16 text-center text-cream md:px-16">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 opacity-15">
          <Emblem className="h-full w-full grayscale" sizes="288px" />
        </div>
        <Emblem className="relative mx-auto mb-6 h-16 w-16 rounded-full ring-4 ring-white/20" sizes="64px" />
        <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
          Bring nature back to your plate.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-cream/80">
          Every Thottakaran product is handpicked from farmers who live by
          naturalism — and lab-checked before it reaches you.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/products" variant="light">Explore products</ButtonLink>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-cream/60 px-7 py-3.5 font-bold text-cream transition hover:bg-cream/10"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
