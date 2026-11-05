import Link from "next/link";

export function LeafMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="currentColor" opacity="0.12" />
      <path
        d="M20 33c0-9 2-15 10-21-9 0-15 4-16 12-1-4-3-6-7-7 1 6 4 9 9 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${light ? "text-cream" : "text-forest"}`}
    >
      <LeafMark />
      <span className="font-display text-2xl font-semibold tracking-tight">
        Thottakaran
      </span>
    </Link>
  );
}
