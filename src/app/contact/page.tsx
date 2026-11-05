import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { email, phones, telHref } from "@/data/contact";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Order products, ask questions or partner with Thottakaran as a farmer.",
};

async function PrefilledForm({ searchParams }: { searchParams: PageProps<"/contact">["searchParams"] }) {
  const params = await searchParams;
  const productSlug = typeof params.product === "string" ? params.product : undefined;
  const product = productSlug ? getProduct(productSlug) : undefined;
  const topic = params.topic === "farmer" ? "farmer" : "order";

  return (
    <ContactForm
      defaultTopic={topic}
      defaultMessage={product ? `Hi, I'd like to order ${product.name}.` : ""}
    />
  );
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk — farm to table."
        intro="Want to order, buy in bulk, or partner with us as a farmer? Send us a message and we'll get back to you."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-moss">Email</p>
            <a href={`mailto:${email}`} className="mt-1 block break-all font-display text-xl text-forest hover:text-moss">
              {email}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-moss">Call us</p>
            {phones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="mt-1 block font-display text-xl text-forest hover:text-moss">
                {phone}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-moss">Based in</p>
            <p className="mt-1 font-display text-xl text-forest">Tamil Nadu, India</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <Suspense fallback={<ContactForm defaultTopic="order" defaultMessage="" />}>
            <PrefilledForm searchParams={props.searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
