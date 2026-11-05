import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
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
      <h2 className="mt-3 font-display text-3xl leading-tight text-forest md:text-5xl">
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
    <section className="grain border-b border-forest/10 bg-sand/60">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-forest md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">{intro}</p>
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
    primary: "bg-forest text-cream hover:bg-moss",
    outline: "border-2 border-forest text-forest hover:bg-forest hover:text-cream",
    light: "bg-cream text-forest hover:bg-sand",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-moss px-8 py-16 text-center text-cream md:px-16">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-5xl">
          Bring nature back to your plate.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">
          Every Thottakaran product is handpicked from farmers who live by
          naturalism — and lab-checked before it reaches you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/products" variant="light">Explore products</ButtonLink>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-cream/60 px-7 py-3.5 font-semibold text-cream transition hover:bg-cream/10"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
