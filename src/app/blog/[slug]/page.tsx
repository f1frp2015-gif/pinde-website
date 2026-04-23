import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | PINDÉ`,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: "https://pinde-alu.com" },
    { name: "Blog", url: "https://pinde-alu.com/blog" },
    { name: post.title, url: `https://pinde-alu.com/blog/${post.slug}` },
  ]);

  // Simple markdown-like rendering: ## headers, **bold**, | tables
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-[family-name:var(--font-serif)] text-[24px] font-normal text-alabaster mt-[55px] mb-[21px]"
          >
            {trimmed.replace("## ", "")}
            <span className="text-red">.</span>
          </h2>
        );
      }
      if (trimmed.startsWith("| ")) {
        const rows = trimmed.split("\n").filter((r) => !r.match(/^\|[-\s|]+\|$/));
        const headers = rows[0]
          ?.split("|")
          .filter(Boolean)
          .map((h) => h.trim());
        const dataRows = rows.slice(1);
        return (
          <div key={i} className="overflow-x-auto my-[21px]">
            <table className="w-full text-[13px]">
              <thead>
                <tr>
                  {headers?.map((h, j) => (
                    <th
                      key={j}
                      className="text-left text-[10px] tracking-[2px] uppercase text-muted py-[8px] px-[13px] border-b border-line"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, j) => {
                  const cells = row
                    .split("|")
                    .filter(Boolean)
                    .map((c) => c.trim());
                  return (
                    <tr key={j}>
                      {cells.map((cell, k) => (
                        <td
                          key={k}
                          className="py-[8px] px-[13px] text-warm border-b border-line/50"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((l) => l.replace(/^- \*\*/, "").replace(/\*\*/, ""));
        return (
          <ul key={i} className="space-y-[8px] my-[13px]">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-[13px] text-warm text-[15px] leading-[1.9]"
              >
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-red mt-2.5 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(/^- /, "")
                      .replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-alabaster">$1</strong>'
                      ),
                  }}
                />
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p
          key={i}
          className="text-warm text-[15px] leading-[1.9] mb-[13px]"
          dangerouslySetInnerHTML={{
            __html: trimmed.replace(
              /\*\*(.+?)\*\*/g,
              '<strong class="text-alabaster">$1</strong>'
            ),
          }}
        />
      );
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "PINDÉ",
              url: "https://pinde-alu.com",
            },
            publisher: {
              "@type": "Organization",
              name: "PINDÉ",
              url: "https://pinde-alu.com",
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-20 py-4 bg-obsidian border-b border-line"
      >
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted">
          <Link href="/" className="hover:text-alabaster transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-alabaster transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-warm truncate max-w-[200px]">
            {post.category}
          </span>
        </div>
      </nav>

      {/* Article */}
      <article className="py-[89px] bg-obsidian">
        <div className="max-w-[720px] mx-auto px-[55px] max-lg:px-6">
          {/* Meta */}
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="text-[9px] tracking-[2px] uppercase text-bronze">
              {post.category}
            </span>
            <span className="text-[9px] text-muted">·</span>
            <span className="text-[9px] tracking-[1px] text-muted">
              {post.readTime}
            </span>
            <span className="text-[9px] text-muted">·</span>
            <time className="text-[9px] tracking-[1px] text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(28px,4vw,40px)] leading-[1.2] text-alabaster mb-[55px]">
            {post.title}
            <span className="text-red">.</span>
          </h1>

          {/* Content */}
          <div>{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-[89px] pt-[34px] border-t border-line">
            <p className="text-warm text-[15px] leading-[1.9] mb-[21px]">
              Need technical guidance for your project? Our engineering team can
              help you select the right system.
            </p>
            <div className="flex flex-wrap gap-[21px]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
              >
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
                Get a quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
              >
                Browse systems
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
            More insights<span className="text-red">.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-obsidian border border-line rounded-[2px] p-[34px] hover:border-warm/20 transition-all"
                >
                  <span className="text-[9px] tracking-[2px] uppercase text-bronze">
                    {p.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-[18px] font-normal text-alabaster mt-[8px] leading-[1.3] group-hover:text-bronze transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
