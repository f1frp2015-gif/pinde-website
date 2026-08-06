import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductPageLocale } from "@/content/aluminiumProductSeo";
import { frpProductLinks, type FrpProductSlug } from "@/content/frpProductEnhancements";

type Props = { locale: ProductPageLocale; current: FrpProductSlug };

export default function FrpRelatedProducts({ locale, current }: Props) {
  const related = frpProductLinks.filter((product) => product.slug !== current);
  return (
    <section className="bg-obsidian py-[89px]">
      <div className="mx-auto max-w-[1200px] px-[55px] max-lg:px-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-red">
          {locale === "ru" ? "Внутренние ссылки" : "Explore the range"}
        </p>
        <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
          {locale === "ru" ? "Другие системы FRP" : "Related FRP systems"}<span className="text-red">.</span>
        </h2>
        <div className="mt-[34px] grid gap-[13px] md:grid-cols-3">
          {related.map((product) => (
            <Link key={product.slug} href={`/${locale}/systems/frp/${product.slug}`} className="group border border-line bg-surface p-6 transition-colors hover:border-warm/40 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-bronze">{product.name}</p>
              <h3 className="mt-3 text-[19px] font-extrabold leading-[1.45] text-alabaster">{product.type[locale]}</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted transition-colors group-hover:text-bronze">
                {locale === "ru" ? "Открыть систему" : "View system"} <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
