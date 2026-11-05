import Link from "next/link";
import Logo from "./Logo";
import { email, phones, telHref } from "@/data/contact";

async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-cream/70">
            Where humans meet nature. Organic and only organic. Natural, and
            everything natural — nothing beyond.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
            {["100% Organic", "100% Natural", "Preservative-Free", "Lab-Checked"].map((t) => (
              <span key={t} className="rounded-full border border-cream/20 px-3 py-1 text-cream/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg">Explore</h3>
          <ul className="mt-4 space-y-2 text-cream/70">
            <li><Link href="/about" className="hover:text-cream">Our Story</Link></li>
            <li><Link href="/products" className="hover:text-cream">Products</Link></li>
            <li><Link href="/our-promise" className="hover:text-cream">Our Promise</Link></li>
            <li><Link href="/farmers" className="hover:text-cream">Our Farmers</Link></li>
            <li><Link href="/credits" className="hover:text-cream">Photo credits</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Get in touch</h3>
          <ul className="mt-4 space-y-2 text-cream/70">
            <li><Link href="/contact" className="hover:text-cream">Contact us</Link></li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-cream">{email}</a>
            </li>
            {phones.map((phone) => (
              <li key={phone}>
                <a href={telHref(phone)} className="hover:text-cream">{phone}</a>
              </li>
            ))}
            <li>Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-sm text-cream/50">
        © <Year /> Thottakaran. Grown by nature, picked by hand.
      </div>
    </footer>
  );
}
