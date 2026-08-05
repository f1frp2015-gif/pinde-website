import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { capabilityCases } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = { locale: string };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function CasesPage({ locale }: Props) {
  const isRu = locale === "ru";
  const homeLabel = isRu ? "Главная" : "Home";
  const sectionLabel = isRu ? "Конфигурации систем" : "System Configurations";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: sectionLabel, url: `https://pindesys.com/${locale}/cases` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label={isRu ? "Хлебные крошки" : "Breadcrumb"} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">{homeLabel}</Link>
          <span>/</span>
          <span className="text-warm">{isRu ? "Конфигурации" : "System Configurations"}</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              {isRu ? "Демонстрация возможностей" : "Capability showcase"}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {isRu ? "Конфигурации систем" : "System configurations"}
            <span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[620px]">
            {isRu
              ? "Проверенные конфигурации систем, которые PINDÉ может поставить оконным производствам. Это конфигурации, готовые к поставке — не заявленные выполненные проекты. Каждая конфигурация подкреплена применимыми стандартами и доказательной базой испытаний."
              : "Verified system configurations that PINDÉ can supply to window fabricators. These represent supply-ready specifications — not claimed completed projects. Each configuration is backed by applicable standards and test evidence."}
          </p>
        </div>
      </section>
      <section className="py-[89px] bg-surface">
        <div className={`${container} grid md:grid-cols-2 gap-[13px]`}>
          {capabilityCases.map((c) => (
            <ProjectCard key={c.slug} project={c} />
          ))}
        </div>
        <div className={`${container} mt-6`}>
          <div className="flex items-start gap-4 border border-[#DAAF37] bg-[#F5E8D2] p-5 text-[12px] leading-[1.7] text-muted">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#DAAF37]" />
            {isRu
              ? "Эти конфигурации отражают то, что PINDÉ может поставить. Они не являются заявленными завершёнными проектами. Реальные спецификации проектов согласовываются в процессе квалификации и фиксации эталонной конструкции."
              : "These configurations represent what PINDÉ can supply. They are not claimed completed projects. Actual project specifications are agreed during the qualification and reference-build stages."}
          </div>
        </div>
      </section>
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            {isRu ? "Нужна конфигурация для вашего рынка" : "Need a configuration for your market"}
            <span className="text-red">?</span>
          </h2>
          <Link href={`/${locale}/rfq`} className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-gold text-navy text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90">
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            {isRu ? "Отправить технический запрос" : "Send technical RFQ"}
          </Link>
        </div>
      </section>
    </>
  );
}
