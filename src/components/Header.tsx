"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/our-promise", label: "Our Promise" },
  { href: "/farmers", label: "Our Farmers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(12,58,38,0.08)] backdrop-blur">
      <div className="bg-moss text-center text-xs font-semibold tracking-wide text-cream">
        <p className="mx-auto max-w-7xl px-5 py-2">
          100% Organic · 100% Natural · Preservative-free · Lab-checked, every batch
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-moss ${
                isActive(link.href)
                  ? "text-moss after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-moss"
                  : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/products"
          className="hidden rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest lg:inline-block"
        >
          Shop products
        </Link>

        <button
          type="button"
          className="lg:hidden text-forest"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-white px-5 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-forest/5 py-3 font-medium ${
                isActive(link.href) ? "text-moss" : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
