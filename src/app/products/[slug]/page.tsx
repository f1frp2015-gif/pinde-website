import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft, Check } from "lucide-react";

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
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image Gallery Placeholder */}
            <div>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400">[Main Product Image]</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded flex items-center justify-center"
                  >
                    <span className="text-gray-400 text-xs">[{i}]</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                {product.series} Series
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <Check
                        size={16}
                        className="text-accent shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            * Specifications may vary. Contact us for detailed technical data
            sheets.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Other Systems You May Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block bg-light rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    {p.series} Series
                  </p>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
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
