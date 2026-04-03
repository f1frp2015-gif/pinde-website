import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore PINDE's complete range of premium aluminum system windows and doors — sliding, casement, tilt & turn, bi-fold, hinged, curtain wall, and fixed systems.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Systems</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive range of aluminum window and door systems engineered
            for performance, security, and beauty.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Need Help Choosing the Right System?
          </h2>
          <p className="text-gray-500 mb-6">
            Our technical team can help you select the ideal window and door
            systems for your specific project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
