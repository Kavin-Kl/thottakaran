import Image from "next/image";
import Link from "next/link";
import emblem from "../../public/brand/logo-emblem-mark.png";
import wordmark from "../../public/brand/logo-wordmark.png";
import wordmarkLight from "../../public/brand/logo-wordmark-light.png";

/** The round Thottakaran emblem (raised fist with pickaxe). */
export function Emblem({
  className = "h-10 w-10",
  sizes = "80px",
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={emblem}
      alt=""
      aria-hidden="true"
      sizes={sizes}
      className={className}
      preload={priority}
    />
  );
}

/** The full Thottakaran — Agro Tech Products wordmark, linking home. */
export default function Logo({ light = false, className = "h-11 w-auto md:h-12" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Thottakaran — home">
      <Image
        src={light ? wordmarkLight : wordmark}
        alt="Thottakaran Agro Tech Products"
        sizes="200px"
        className={className}
        preload
      />
    </Link>
  );
}
