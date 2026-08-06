import type { ProductFaq, ProductPageLocale } from "@/content/aluminiumProductSeo";

type Props = { locale: ProductPageLocale; faqs: ProductFaq[] };

const labels = {
  en: {
    eyebrow: "Product FAQ",
    title: "Technical questions",
    intro: "Reference answers for early system selection. Final dimensions, components and performance are fixed in the project-specific technical package.",
  },
  ru: {
    eyebrow: "Вопросы о системе",
    title: "Технические вопросы",
    intro: "Справочная информация для первичного выбора. Итоговые размеры, комплектующие и показатели фиксируются в техническом пакете проекта.",
  },
} as const;

export default function ProductFaqSection({ locale, faqs }: Props) {
  const text = labels[locale];
  return (
    <section className="bg-surface py-[89px]">
      <div className="mx-auto max-w-[1000px] px-[55px] max-lg:px-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-red">{text.eyebrow}</p>
        <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
          {text.title}<span className="text-red">.</span>
        </h2>
        <p className="mt-4 max-w-[760px] text-[13px] leading-[1.8] text-warm">{text.intro}</p>
        <div className="mt-[34px] grid gap-[13px]">
          {faqs.map((faq) => (
            <article key={faq.question} className="border border-line bg-obsidian p-6 sm:p-8">
              <h3 className="text-[18px] font-extrabold leading-[1.45] text-alabaster">{faq.question}</h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-warm">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
