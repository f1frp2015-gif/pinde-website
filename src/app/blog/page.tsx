import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Aluminium Window & Door Engineering Insights",
  description:
    "Expert guides on thermal break technology, aluminium vs uPVC, climate-based window selection, and architectural glazing. From PINDÉ's engineering team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "PINDÉ Blog — Engineering Insights",
    description:
      "Technical guides and industry analysis from PINDÉ's aluminium window and door engineering team.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Insights
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Blog<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            Technical insights, product guides, and industry analysis from our
            engineering team.
          </p>
        </div>
      </section>

      {/* Post List */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-obsidian border border-line rounded-[2px] p-[34px] transition-all hover:border-warm/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-[13px] mb-[21px]">
                  <span className="text-[9px] tracking-[2px] uppercase text-bronze">
                    {post.category}
                  </span>
                  <span className="text-[9px] text-muted">·</span>
                  <span className="text-[9px] tracking-[1px] text-muted">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-serif)] text-[20px] font-normal text-alabaster mb-[13px] leading-[1.3] group-hover:text-bronze transition-colors">
                  {post.title}
                </h2>
                <p className="text-[13px] text-warm leading-[1.8] line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-[21px] text-[10px] tracking-[1px] text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
