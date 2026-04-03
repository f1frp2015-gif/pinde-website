import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCard from "@/components/ProductCard";
import CertificationBanner from "@/components/CertificationBanner";
import { products } from "@/data/products";
import { ArrowRight, Building2, Users, Globe, Award } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Engineering Excellence in Every Frame"
        subtitle="Premium aluminum system windows and doors, designed for the world's most demanding climates and discerning tastes."
        ctaText="Explore Our Systems"
        ctaHref="/products"
      />

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: "XX+", label: "Years of Experience" },
              { icon: Globe, value: "XX+", label: "Countries Served" },
              { icon: Users, value: "XXXX+", label: "Projects Completed" },
              { icon: Award, value: "XX+", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon
                  size={28}
                  className="mx-auto mb-3 text-accent"
                  strokeWidth={1.5}
                />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                About PINDE
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Precision-Engineered for Global Markets
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Based in Chongqing, China, PINDE is a leading manufacturer of
                premium aluminum system windows and doors. We combine advanced
                European engineering principles with world-class manufacturing
                capabilities to deliver products that meet the highest
                international standards.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our systems are trusted by architects, builders, and homeowners
                across Australia, New Zealand, North America, Europe, and the
                Middle East.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">[Factory / About Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                Our Systems
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Product Range
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeatureGrid />

      {/* Certifications */}
      <CertificationBanner />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an architect, builder, or homeowner, our team is
            ready to help you find the perfect window and door solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
