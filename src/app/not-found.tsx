import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="font-display text-7xl text-leaf">404</p>
      <h1 className="mt-4 font-display text-4xl text-forest">This field is empty.</h1>
      <p className="mt-4 text-ink/70">The page you&apos;re looking for hasn&apos;t grown here yet.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
