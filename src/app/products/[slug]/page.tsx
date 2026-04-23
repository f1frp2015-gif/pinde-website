import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import PindeMark from "@/components/PindeMark";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${product.series} Series`,
    description: product.description.slice(0, 160),
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | PINDÉ`,
      description: product.description.slice(0, 160),
      type: "website",
      url: `/products/${product.slug}`,
      images: product.images.length > 0
        ? [{ url: product.images[0], alt: product.name }]
        : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: "https://pinde-alu.com" },
    { name: "Systems", url: "https://pinde-alu.com/products" },
    { name: product.name, url: `https://pinde-alu.com/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-20 py-4 bg-obsidian border-b border-line">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted">
          <Link href="/" className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-alabaster transition-colors">Systems</Link>
          <span>/</span>
          <span className="text-warm">{product.series}</span>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-2 gap-[89px]">
            {/* Product Image */}
            <div className="aspect-[4/3] bg-surface border border-line rounded-[2px] overflow-hidden relative">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={`${product.name} — ${product.series} Series aluminium ${product.category.replace("-", " ")}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PindeMark size={55} frame="#E5E2DC" />
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-[10px] font-medium tracking-[3px] uppercase text-bronze mb-[13px]">
                {product.series} Series
              </p>
              <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster mb-[21px]">
                {product.name}
                <span className="text-red">.</span>
              </h1>
              <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-[34px]">
                <h2 className="text-[10px] font-medium tracking-[3px] uppercase text-muted mb-[21px]">
                  Key features
                </h2>
                <ul className="space-y-[13px]">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-[13px] text-warm text-[13px]"
                    >
                      <span className="inline-block w-[5px] h-[5px] rounded-full bg-red mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
              >
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
            Technical specifications<span className="text-red">.</span>
          </h2>
          <div className="bg-obsidian border border-line rounded-[2px] overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={
                      index % 2 === 0 ? "bg-obsidian" : "bg-surface/30"
                    }
                  >
                    <td className="px-[34px] py-[13px] text-[13px] font-medium text-muted w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-[34px] py-[13px] text-[13px] text-warm">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-[13px] text-[10px] text-muted tracking-[1px]">
            * Specifications may vary. Contact us for detailed technical data
            sheets.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
            Other systems<span className="text-red">.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[13px]">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block bg-surface border border-line rounded-[2px] p-[34px] hover:border-warm/20 transition-all"
                >
                  <p className="text-[9px] tracking-[2px] uppercase text-bronze mb-[8px]">
                    {p.series} Series
                  </p>
                  <h3 className="font-[family-name:var(--font-serif)] text-[20px] font-normal text-alabaster group-hover:text-bronze transition-colors">
                    {p.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
