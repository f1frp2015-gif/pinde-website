import type { PageLocale } from "@/content/pages";

export type FrpGuideSlug =
  | "fiberglass-windows"
  | "warmest-windows"
  | "warm-panoramic-sliding-doors"
  | "windows-below-minus-39";

type GuideSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type FrpGuideContent = {
  slug: FrpGuideSlug;
  locale: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  eyebrow: string;
  title: string;
  intro: string;
  answerTitle: string;
  answer: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedTitle: string;
  related: { href: string; label: string; description: string }[];
  ctaTitle: string;
  cta: string;
};

export const frpGuideSlugs: FrpGuideSlug[] = [
  "fiberglass-windows",
  "warmest-windows",
  "warm-panoramic-sliding-doors",
  "windows-below-minus-39",
];

export function isFrpGuideSlug(slug: string): slug is FrpGuideSlug {
  return frpGuideSlugs.includes(slug as FrpGuideSlug);
}

export const frpGuides: Record<FrpGuideSlug, Record<PageLocale, FrpGuideContent>> = {
  "fiberglass-windows": {
    en: {
      slug: "fiberglass-windows",
      locale: "en_US",
      seo: {
        title: "Fiberglass Windows: Construction, Cost and Limits | PINDÉ",
        description:
          "How fiberglass and FRP windows are made, what affects price, where they fit, and which whole-window data to verify before specification or purchase.",
        keywords: [
          "fiberglass windows",
          "FRP windows",
          "fiberglass window frames",
          "fiberglass windows cost",
          "pultruded composite windows",
          "fiberglass windows benefits",
        ],
      },
      eyebrow: "FRP window selection guide",
      title: "Fiberglass windows: construction, cost and practical limits",
      intro:
        "Fiberglass window, glass-fibre composite window, GFRP window and FRP window commonly describe a frame whose structural sections contain continuous glass fibres in a polymer matrix. The material can reduce heat flow through the frame, but the finished window still depends on glass, spacers, seals, hardware, joints and installation.",
      answerTitle: "What matters before buying",
      answer:
        "Compare a complete, documented window configuration rather than the frame material alone. Ask for whole-window Uw, air and water results, specimen size, glazing build-up, hardware and the exact scope of each report. Price follows the opening schedule and supply scope, so a fixed per-square-metre figure without those inputs is not a reliable quotation.",
      sections: [
        {
          title: "How a full-FRP frame is made",
          paragraphs: [
            "Continuous glass rovings and mats are pulled through resin and a heated die to form repeatable frame and sash profiles. The pultruded section then receives cutting, drilling, corner preparation, bonding and mechanical fastening according to the released fabrication process.",
            "A full-FRP frame is different from an aluminium-composite system. In PINDÉ FD90 and FDTL140 the load-bearing frame sections are pultruded composite. PD75 and PD95 retain aluminium faces and use an insulated composite zone, so their fabrication and evidence routes are separate.",
          ],
          points: [
            "Confirm whether the frame is full-FRP or aluminium-composite.",
            "Record the resin, reinforcement, profile section and batch controls.",
            "Qualify corner joints, fasteners, adhesive and dust extraction.",
          ],
        },
        {
          title: "What determines fiberglass-window cost",
          paragraphs: [
            "The main commercial inputs are opening size and quantity, fixed or operable configuration, colour, glass make-up, warm-edge spacer, hardware, insect screens, machining level, packaging, test scope and delivery term. A fabricator buying long profiles has a different cost structure from one buying machined, glass-free CKD kits.",
            "For a comparable offer, send a window schedule and separate the price of profiles, machining, components, packaging, freight, local glazing, assembly, conformity work and installation. This also shows which cost can change after the pilot batch.",
          ],
        },
        {
          title: "Benefits and limitations to check",
          paragraphs: [
            "Low frame conductivity, corrosion resistance and dimensional stability can support cold-climate design. These material characteristics do not by themselves prove the thermal, structural or weather performance of an installed unit.",
          ],
          table: {
            headers: ["Decision", "Useful evidence", "Common mistake"],
            rows: [
              ["Thermal", "Whole-window Uw with glass and size", "Quoting only material conductivity or frame depth"],
              ["Weather", "Air, water and wind report for a related specimen", "Assuming seals and joints work at every size"],
              ["Fabrication", "Released joint method and first-article record", "Treating FRP like aluminium during cutting and joining"],
              ["Compliance", "Destination-specific route and sample scope", "Calling a material standard a finished-window approval"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "Are fiberglass, GFRP and FRP windows the same thing?",
          answer:
            "In window-market usage they often refer to glass-fibre reinforced polymer frames. The exact resin, reinforcement and construction can differ, so the bill of materials and test specimen still need to be identified.",
        },
        {
          question: "Are fiberglass windows always warmer than PVC or wood windows?",
          answer:
            "No material label decides the result. Compare whole-window Uw for the same size, glazing, spacer and opening type, then check airtightness and the installation node.",
        },
        {
          question: "How is a fiberglass-window price calculated?",
          answer:
            "A usable quotation starts from the opening schedule, glass, hardware, colour, performance target, supply format, packing and delivery term. Profile-only and glass-free CKD quotations should be compared with local fabrication costs shown separately.",
        },
        {
          question: "Can FRP window profiles be assembled by a local fabricator?",
          answer:
            "Yes, after the system, tooling, joints and quality checks are qualified. PINDÉ can scope long profiles, machined profiles or glass-free CKD kits, while glazing and final assembly remain local.",
        },
      ],
      relatedTitle: "Continue from selection to a defined system",
      related: [
        { href: "/systems/frp/fd90", label: "FD90 fiberglass window", description: "90 mm full-FRP casement and tilt-turn system with a configuration-specific PHI reference." },
        { href: "/engineering/warmest-windows", label: "Which windows are warmest?", description: "Compare frame, glazing, airtightness and installation without relying on a material label." },
        { href: "/supply/frp-window-profiles", label: "FRP profiles and CKD", description: "B2B supply formats for window manufacturers and system fabricators." },
      ],
      ctaTitle: "Need a configuration and budget basis?",
      cta: "Send a window schedule",
    },
    ru: {
      slug: "fiberglass-windows",
      locale: "ru_RU",
      seo: {
        title: "Стеклопластиковые окна: цена, плюсы и минусы | PINDÉ",
        description:
          "Как устроены стеклопластиковые окна, от чего зависит цена, где они применяются и какие показатели готового окна проверять до заказа.",
        keywords: [
          "стеклопластиковые окна",
          "стеклокомпозитные окна",
          "окна из стеклопластика",
          "стеклопластиковые окна цена",
          "стеклопластиковые окна купить",
          "плюсы и минусы стеклопластиковых окон",
        ],
      },
      eyebrow: "Руководство по выбору окон FRP",
      title: "Стеклопластиковые окна: конструкция, цена и ограничения",
      intro:
        "Стеклопластиковые окна, стеклокомпозитные окна, окна GFRP и FRP обычно означают конструкции, где несущие профили содержат непрерывное стекловолокно в полимерной матрице. Материал снижает теплопередачу через раму, но результат готового окна также определяют стеклопакет, дистанционная рамка, уплотнения, фурнитура, стыки и монтаж.",
      answerTitle: "Что проверить до покупки",
      answer:
        "Сравнивайте полную документированную конструкцию, а не только материал рамы. Запросите Uw готового окна, показатели воздуха и воды, размер образца, формулу стеклопакета, фурнитуру и область каждого протокола. Цена зависит от ведомости проёмов и формы поставки, поэтому ставка за квадратный метр без этих данных не является полноценным предложением.",
      sections: [
        {
          title: "Как изготавливают полностью стеклопластиковую раму",
          paragraphs: [
            "Непрерывные стеклянные ровинги и маты протягивают через связующее и нагретую фильеру, получая повторяемые профили коробки и створки. Затем профиль режут, сверлят, подготавливают углы, склеивают и механически соединяют по утверждённому технологическому процессу.",
            "Полностью стеклопластиковая рама отличается от алюминиево-композитной. В PINDÉ FD90 и FDTL140 несущие сечения выполнены из пултрузионного композита. У PD75 и PD95 остаются алюминиевые поверхности и применяется теплоизоляционная композитная зона, поэтому технология и доказательная база у них другие.",
          ],
          points: [
            "Уточните, полностью ли рама выполнена из FRP или является алюминиево-композитной.",
            "Зафиксируйте связующее, армирование, сечения профилей и прослеживаемость партий.",
            "Квалифицируйте угловые соединения, крепёж, клей и удаление пыли.",
          ],
        },
        {
          title: "От чего зависит цена стеклопластикового окна",
          paragraphs: [
            "На цену влияют размеры и количество проёмов, глухое или открывающееся исполнение, цвет, формула стеклопакета, тёплая дистанционная рамка, фурнитура, москитные сетки, степень обработки, упаковка, испытания и базис поставки. У длинномерных профилей и обработанных CKD-комплектов разная структура затрат.",
            "Для сравнимого предложения направьте оконную ведомость и разделите стоимость профилей, обработки, комплектующих, упаковки, перевозки, местного остекления, сборки, подтверждения соответствия и монтажа. Так видно, какие расходы уточняются после опытной партии.",
          ],
        },
        {
          title: "Преимущества и ограничения, которые нужно подтвердить",
          paragraphs: [
            "Низкая теплопроводность рамы, коррозионная стойкость и стабильность размеров полезны для холодного климата. Эти свойства материала сами по себе не подтверждают теплотехнику, прочность и герметичность установленного оконного блока.",
          ],
          table: {
            headers: ["Решение", "Полезный документ", "Типичная ошибка"],
            rows: [
              ["Теплотехника", "Uw готового окна с размером и стеклом", "Сравнивать только теплопроводность материала или глубину"],
              ["Погода", "Протокол воздуха, воды и ветра для близкого образца", "Считать, что уплотнения одинаково работают при любом размере"],
              ["Производство", "Утверждённый стык и контроль первого образца", "Обрабатывать FRP по режимам алюминия"],
              ["Соответствие", "Маршрут и образцы для страны назначения", "Считать стандарт на материал разрешением на готовое окно"],
            ],
          },
        },
      ],
      faqs: [
        {
          question: "Стеклопластиковые, стеклокомпозитные и FRP-окна — это одно и то же?",
          answer:
            "На рынке окон эти слова часто обозначают рамы из стекловолокна и полимерной матрицы. Состав связующего, армирование и конструкция отличаются, поэтому всё равно нужно проверить BOM и испытанный образец.",
        },
        {
          question: "Стеклопластиковые окна всегда теплее ПВХ или дерева?",
          answer:
            "Нет. Сравнивайте Uw готового окна при одинаковом размере, стеклопакете, дистанционной рамке и типе открывания, а затем проверяйте воздухопроницаемость и монтажный узел.",
        },
        {
          question: "Как рассчитывается цена стеклопластиковых окон?",
          answer:
            "Для расчёта нужны ведомость проёмов, стеклопакет, фурнитура, цвет, целевые показатели, форма поставки, упаковка и базис доставки. Профиль и CKD без стекла сравнивают с отдельным учётом местной сборки.",
        },
        {
          question: "Можно ли собирать окна из профиля FRP на местном производстве?",
          answer:
            "Да, после квалификации системы, оснастки, угловых соединений и контроля. PINDÉ может поставить длинномерные или обработанные профили и CKD без стеклопакетов, а остекление и сборка остаются на месте.",
        },
      ],
      relatedTitle: "От выбора материала к определённой системе",
      related: [
        { href: "/systems/frp/fd90", label: "Стеклопластиковое окно FD90", description: "Полностью FRP система 90 мм с поворотным и поворотно-откидным открыванием и сертификатом PHI для конкретной комплектации." },
        { href: "/engineering/warmest-windows", label: "Какие окна самые тёплые?", description: "Сравнение рамы, стеклопакета, герметичности и монтажа без вывода по одному материалу." },
        { href: "/supply/frp-window-profiles", label: "Профили FRP и CKD", description: "Форматы B2B-поставки для производителей окон и системных переработчиков." },
      ],
      ctaTitle: "Нужны комплектация и основа для расчёта?",
      cta: "Отправить оконную ведомость",
    },
  },
  "warmest-windows": {
    en: {
      slug: "warmest-windows",
      locale: "en_US",
      seo: {
        title: "Which Windows Are Warmest? FRP, PVC, Wood or Aluminium",
        description:
          "Compare warm windows by whole-window Uw, glazing, spacer, airtightness and installation instead of choosing by frame material alone.",
        keywords: ["warmest windows", "energy efficient windows", "FRP vs PVC windows", "fiberglass vs wood windows", "window Uw comparison"],
      },
      eyebrow: "Cold-climate thermal guide",
      title: "Which windows are warmest: FRP, PVC, wood or aluminium?",
      intro:
        "The warmest window is the verified combination of frame, glass, spacer, seals, opening type, size and installation with the lowest suitable whole-window Uw and controlled air leakage. Frame material matters, but it cannot decide the result by itself.",
      answerTitle: "Short answer",
      answer:
        "Start with whole-window Uw for the actual or representative size. Then compare airtightness, glass-edge temperature, spacer, opening type and installation. Full-FRP, insulated PVC, engineered wood and thermally broken aluminium can all reach demanding targets when the complete construction is designed and tested for them.",
      sections: [
        {
          title: "Use Uw, not a material slogan",
          paragraphs: [
            "Uf describes frame heat transfer and Ug describes centre-of-glass heat transfer. Uw describes the assembled window and includes the frame, glazing and edge effect for a defined size. A low Uf does not guarantee a low Uw if glass, edge spacer or proportions change.",
            "Ask whether the figure is calculated or tested, which standard was used, and whether the quoted opening matches the reference. For operable windows, air leakage and seal compression affect heating demand and comfort alongside conductive heat loss.",
          ],
          table: {
            headers: ["Frame route", "Thermal design characteristic", "Verify before selection"],
            rows: [
              ["Full-FRP", "Low-conductivity structural profile without a continuous metal path", "Joints, fire route, weather tests and exact whole-window build"],
              ["PVC", "Multi-chamber frame with steel or composite reinforcement", "Reinforcement, dimensions, colour stability and cold-temperature behaviour"],
              ["Wood", "Low-conductivity solid or engineered sections", "Moisture protection, coating maintenance and joint quality"],
              ["Thermally broken aluminium", "Metal faces separated by an insulating zone", "Break geometry, connection, glass edge and whole-window value"],
            ],
          },
        },
        {
          title: "A practical comparison sequence",
          paragraphs: [
            "Set the required whole-window performance from the project climate and regulation. Compare the same representative size, opening function and glass build-up across systems. Then check air, water and wind evidence, internal surface temperatures and the installed junction.",
          ],
          points: [
            "Define climate, design temperature and target Uw.",
            "Hold size, opening type, glass and spacer constant when comparing frames.",
            "Review airtightness, water and wind together with thermal performance.",
            "Model or test the installation junction and perimeter sealing.",
          ],
        },
        {
          title: "Where FD90 fits",
          paragraphs: [
            "PINDÉ FD90 is a 90 mm full-FRP window system. Passive House Institute certificate 2491wi03 records Uw 0.78 W/(m²·K) for the identified configuration at class phB for the cool, temperate zone. That is useful evidence for the certified build, not a value for every size or glass option.",
          ],
        },
      ],
      faqs: [
        { question: "What is the best number for comparing warm windows?", answer: "Use whole-window Uw for the same size and glass build-up, then compare airtightness and installation. Uf or Ug alone describes only one part of the window." },
        { question: "Does triple glazing always make a window warmer?", answer: "It often lowers Ug, but whole-window Uw also depends on frame area, edge spacer and size. Glass weight can also change sash and hardware requirements." },
        { question: "Why can two windows with the same profile depth perform differently?", answer: "Internal geometry, reinforcement, glass position, spacer, seals, joints, sash proportion and installation all affect the finished result." },
      ],
      relatedTitle: "Apply the comparison",
      related: [
        { href: "/systems/frp/fd90", label: "FD90 thermal evidence", description: "Review the 90 mm full-FRP configuration, PHI scope and glazing references." },
        { href: "/engineering/windows-below-minus-39", label: "Windows below −39°C", description: "Add low-temperature deformation and air-leakage checks for severe winter use." },
        { href: "/systems/frp", label: "FRP system family", description: "Separate full-FRP and aluminium-composite window routes." },
      ],
      ctaTitle: "Want a like-for-like system comparison?",
      cta: "Send the target Uw and window schedule",
    },
    ru: {
      slug: "warmest-windows",
      locale: "ru_RU",
      seo: {
        title: "Какие окна самые тёплые: FRP, ПВХ, дерево или алюминий",
        description:
          "Сравнение тёплых окон по Uw, стеклопакету, дистанционной рамке, герметичности и монтажу, а не только по материалу профиля.",
        keywords: ["какие окна самые теплые", "самые теплые окна", "энергоэффективные окна", "FRP или ПВХ окна", "сравнение теплых окон"],
      },
      eyebrow: "Теплотехническое руководство",
      title: "Какие окна самые тёплые: FRP, ПВХ, дерево или алюминий?",
      intro:
        "Самое тёплое окно — это проверенная комбинация рамы, стеклопакета, дистанционной рамки, уплотнений, типа открывания, размера и монтажа с подходящим низким Uw и контролируемой воздухопроницаемостью. Материал профиля важен, но сам по себе не определяет результат.",
      answerTitle: "Короткий ответ",
      answer:
        "Сначала сравните Uw готового окна для фактического или репрезентативного размера. Затем проверьте воздухопроницаемость, температуру края стекла, дистанционную рамку, тип открывания и монтаж. Полностью FRP, утеплённый ПВХ, инженерная древесина и алюминий с терморазрывом могут решать сложные задачи при корректной конструкции и испытаниях.",
      sections: [
        {
          title: "Сравнивайте Uw, а не название материала",
          paragraphs: [
            "Uf описывает теплопередачу рамы, Ug — центральной зоны стеклопакета. Uw относится к собранному окну и учитывает раму, остекление и краевую зону для определённого размера. Низкий Uf не гарантирует низкий Uw при изменении стекла, дистанционной рамки или пропорций.",
            "Уточните, получено значение расчётом или испытанием, по какому стандарту и соответствует ли заказанный проём образцу. Для открывающихся окон воздухопроницаемость и прижим уплотнений влияют на теплопотери и комфорт вместе с теплопередачей.",
          ],
          table: {
            headers: ["Тип рамы", "Теплотехническая особенность", "Что проверить"],
            rows: [
              ["Полностью FRP", "Низкотеплопроводный несущий профиль без непрерывного металла", "Стыки, пожарный маршрут, погоду и готовое окно"],
              ["ПВХ", "Многокамерная рама со стальным или композитным усилением", "Армирование, размеры, цвет и поведение на морозе"],
              ["Дерево", "Низкотеплопроводные цельные или клеёные сечения", "Влагозащиту, обслуживание покрытия и стыки"],
              ["Алюминий с терморазрывом", "Металлические поверхности разделены теплоизоляционной зоной", "Геометрию терморазрыва, соединение, край стекла и Uw"],
            ],
          },
        },
        {
          title: "Практический порядок сравнения",
          paragraphs: [
            "Задайте требуемые показатели готового окна по климату и нормам проекта. Сравнивайте системы при одинаковом размере, функции открывания и стеклопакете. После этого проверяйте воздух, воду, ветер, внутреннюю температуру поверхности и монтажное примыкание.",
          ],
          points: [
            "Определите климат, расчётную температуру и целевой Uw.",
            "Зафиксируйте размер, открывание, стеклопакет и рамку для сравнения профилей.",
            "Рассматривайте воздух, воду и ветер вместе с теплотехникой.",
            "Рассчитайте или испытайте монтажный узел и периметральное уплотнение.",
          ],
        },
        {
          title: "Место FD90 в сравнении",
          paragraphs: [
            "PINDÉ FD90 — полностью стеклопластиковая оконная система глубиной 90 мм. Сертификат Passive House Institute 2491wi03 указывает Uw 0,78 Вт/(м²·K) для идентифицированной комплектации и класс phB для прохладной умеренной зоны. Это доказательство для сертифицированной конструкции, а не значение для любого размера и стеклопакета.",
          ],
        },
      ],
      faqs: [
        { question: "Какой показатель лучше использовать для сравнения тёплых окон?", answer: "Используйте Uw готового окна при одинаковом размере и стеклопакете, затем сравните воздухопроницаемость и монтаж. Uf и Ug описывают только отдельные части." },
        { question: "Двухкамерный стеклопакет всегда делает окно теплее?", answer: "Он часто снижает Ug, но Uw также зависит от площади рамы, края стекла и размера. Масса стекла может изменить требования к створке и фурнитуре." },
        { question: "Почему окна одинаковой глубины работают по-разному?", answer: "Влияют внутренняя геометрия, усиление, положение стекла, рамка, уплотнения, стыки, доля створки и монтаж." },
      ],
      relatedTitle: "Применить сравнение к проекту",
      related: [
        { href: "/systems/frp/fd90", label: "Теплотехника FD90", description: "Система 90 мм, область PHI и справочные конфигурации стеклопакетов." },
        { href: "/engineering/windows-below-minus-39", label: "Окна ниже −39°C", description: "Проверки деформации и воздухопроницаемости при сильном морозе." },
        { href: "/systems/frp", label: "Линейка систем FRP", description: "Разделение полностью FRP и алюминиево-композитных конструкций." },
      ],
      ctaTitle: "Нужно сравнение систем на одинаковых условиях?",
      cta: "Отправить целевой Uw и оконную ведомость",
    },
  },
  "warm-panoramic-sliding-doors": {
    en: {
      slug: "warm-panoramic-sliding-doors",
      locale: "en_US",
      seo: {
        title: "Warm Panoramic Sliding Doors for Winter Terraces | PINDÉ",
        description:
          "How to select a warm panoramic sliding door for a winter terrace: glass weight, compression seals, Uw, threshold, drainage and installation.",
        keywords: ["warm panoramic sliding doors", "winter terrace sliding doors", "energy efficient patio doors", "FRP sliding door", "cold climate sliding door"],
      },
      eyebrow: "Large-opening winter guide",
      title: "Warm panoramic sliding doors for winter terraces",
      intro:
        "A winter-terrace sliding door must control heat transfer and air leakage while carrying a large glass leaf. The selection therefore joins thermal design, leaf weight, rollers, locking, compression seals, threshold drainage and the installation junction.",
      answerTitle: "What to specify first",
      answer:
        "Send the clear opening, overall frame size, number of leaves, glass build-up, design wind, indoor and outdoor temperatures, sill detail and accessibility requirement. Those inputs determine whether a proposed warm sliding system is structurally and thermally relevant to the project.",
      sections: [
        {
          title: "Why sliding-door results vary",
          paragraphs: [
            "A large glazed area can lower centre-of-panel heat loss when good insulated glass is used, yet the long perimeter increases the importance of spacers, seals and installation. Sliding hardware must maintain alignment and closing pressure as leaf mass and temperature change.",
            "A quoted Uw must identify the tested or calculated door size and glass. A smaller reference unit, different sill or different number of leaves can change the result.",
          ],
        },
        {
          title: "Selection checklist for a winter terrace",
          paragraphs: [
            "Review the complete opening before choosing the profile. The same system can require different glass, rollers, locking points, sill treatment and reinforcement at different dimensions.",
          ],
          points: [
            "Opening dimensions, panel arrangement and daily operating pattern.",
            "Glass thickness, insulated-glass make-up and calculated leaf mass.",
            "Compression-seal path, locking points and hardware temperature range.",
            "Threshold height, drainage, snow exposure and accessible-route needs.",
            "Perimeter fixing, insulation continuity and interior condensation check.",
          ],
        },
        {
          title: "FDTL140 reference",
          paragraphs: [
            "FDTL140 is a 140 mm full-FRP side-press sliding system. The leaf slides horizontally and is pressed against the seals at the end of closing. The source catalogue lists a maximum leaf mass of 200 kg and Uw 1.02 W/(m²·K) for an identified configuration; each ordered opening still requires hardware, glass, drainage and installation review.",
          ],
          table: {
            headers: ["Input", "Why it matters", "Release record"],
            rows: [
              ["Leaf mass", "Roller and profile loading", "Glass calculation and hardware schedule"],
              ["Closing pressure", "Airtightness around the perimeter", "Seal and lock adjustment criteria"],
              ["Sill", "Water removal and surface temperature", "Drainage and installation detail"],
              ["Door Uw", "Project energy and comfort", "Size, glass, spacer and calculation scope"],
            ],
          },
        },
      ],
      faqs: [
        { question: "Can a panoramic sliding door be used on a heated winter terrace?", answer: "Yes when the complete door, glass, seals, sill and installation meet the project thermal, air, water and structural requirements. A product name alone is not enough." },
        { question: "What makes a sliding door warm?", answer: "Whole-door Uw, insulated glass, warm-edge spacer, frame construction, perimeter seals, closing pressure and an insulated installation junction work together." },
        { question: "How is maximum sliding-leaf size determined?", answer: "The glass and sash mass, profile deflection, hardware capacity, wind load, aspect ratio and operating force are checked for the actual opening." },
      ],
      relatedTitle: "Define the door and supply route",
      related: [
        { href: "/systems/frp/fdtl140", label: "FDTL140 sliding door", description: "Review the 140 mm full-FRP system, 200 kg reference and performance scope." },
        { href: "/engineering/windows-below-minus-39", label: "Severe-cold verification", description: "Add low-temperature deformation and air-leakage checks where the project requires them." },
        { href: "/supply/frp-window-profiles", label: "Profiles and glass-free CKD", description: "Choose the fabrication responsibility split for a pilot or project batch." },
      ],
      ctaTitle: "Have a panoramic opening to check?",
      cta: "Send the opening and glass schedule",
    },
    ru: {
      slug: "warm-panoramic-sliding-doors",
      locale: "ru_RU",
      seo: {
        title: "Тёплые панорамные раздвижные двери для зимней террасы",
        description:
          "Как выбрать тёплую панорамную раздвижную дверь: масса стекла, прижим, Uw, порог, дренаж, фурнитура и монтаж для зимней террасы.",
        keywords: ["панорамные раздвижные двери", "теплые раздвижные двери", "раздвижные двери для зимней террасы", "теплая стеклянная дверь", "FRP раздвижная дверь"],
      },
      eyebrow: "Руководство для больших зимних проёмов",
      title: "Тёплые панорамные раздвижные двери для зимней террасы",
      intro:
        "Раздвижная дверь для отапливаемой зимней террасы должна ограничивать теплопередачу и продувание, одновременно неся тяжёлую стеклянную створку. Поэтому вместе рассматривают теплотехнику, массу створки, ролики, замки, прижим уплотнений, дренаж порога и монтажный узел.",
      answerTitle: "Какие данные задать сначала",
      answer:
        "Направьте чистый проём, габарит коробки, схему и количество створок, формулу стеклопакета, расчётный ветер, температуры внутри и снаружи, узел порога и требования доступности. По этим данным проверяют, относится ли предлагаемая тёплая раздвижная система к вашему проекту.",
      sections: [
        {
          title: "Почему показатели раздвижных дверей различаются",
          paragraphs: [
            "Большая площадь качественного стеклопакета может снизить средние теплопотери центральной зоны, но длинный периметр повышает роль дистанционной рамки, уплотнений и монтажа. Фурнитура должна сохранять положение и прижим при изменении массы и температуры створки.",
            "Для Uw указывают испытанный или расчётный размер двери и стеклопакет. Меньший образец, другой порог или другое количество створок меняют результат.",
          ],
        },
        {
          title: "Чек-лист для зимней террасы",
          paragraphs: [
            "До выбора профиля проверяют весь проём. Для одной системы при разных размерах могут потребоваться другие стекло, ролики, точки запирания, порог и усиление.",
          ],
          points: [
            "Размер проёма, схема полотен и частота ежедневного использования.",
            "Толщина и формула стеклопакета, расчётная масса створки.",
            "Контур прижимных уплотнений, замки и температурный диапазон фурнитуры.",
            "Высота порога, водоотвод, снеговая экспозиция и требования доступности.",
            "Крепление по периметру, непрерывность утепления и риск конденсата.",
          ],
        },
        {
          title: "Справочная система FDTL140",
          paragraphs: [
            "FDTL140 — раздвижная система с прижимом и полностью FRP коробкой глубиной 140 мм. Створка перемещается горизонтально и в конце закрывания прижимается к уплотнениям. В исходном каталоге указаны масса створки до 200 кг и Uw 1,02 Вт/(м²·K) для конкретной комплектации; каждый проём требует проверки фурнитуры, стекла, дренажа и монтажа.",
          ],
          table: {
            headers: ["Исходные данные", "На что влияют", "Документ выпуска"],
            rows: [
              ["Масса створки", "Нагрузка на ролики и профиль", "Расчёт стекла и спецификация фурнитуры"],
              ["Прижим", "Воздухопроницаемость периметра", "Критерии регулировки уплотнений и замков"],
              ["Порог", "Водоотвод и температура поверхности", "Узел дренажа и монтажа"],
              ["Uw двери", "Энергия и комфорт проекта", "Размер, стекло, рамка и область расчёта"],
            ],
          },
        },
      ],
      faqs: [
        { question: "Можно ли поставить панорамную раздвижную дверь на отапливаемой террасе?", answer: "Да, если готовая дверь, стеклопакет, уплотнения, порог и монтаж выполняют требования проекта по теплотехнике, воздуху, воде и прочности. Одного названия системы недостаточно." },
        { question: "Что делает раздвижную дверь тёплой?", answer: "Совместно работают Uw готовой двери, стеклопакет, тёплая рамка, конструкция профиля, периметральные уплотнения, прижим и утеплённый монтажный узел." },
        { question: "Как определяют максимальный размер раздвижной створки?", answer: "Для фактического проёма проверяют массу стекла и створки, прогиб профиля, грузоподъёмность фурнитуры, ветер, пропорции и усилие управления." },
      ],
      relatedTitle: "Определить систему и форму поставки",
      related: [
        { href: "/systems/frp/fdtl140", label: "Раздвижная дверь FDTL140", description: "Система полностью FRP 140 мм, справочная масса 200 кг и область показателей." },
        { href: "/engineering/windows-below-minus-39", label: "Проверка для сильного мороза", description: "Деформации и воздухопроницаемость при отрицательной температуре, если это требуется проекту." },
        { href: "/supply/frp-window-profiles", label: "Профили и CKD без стекла", description: "Распределение производственных операций для пилотной или проектной партии." },
      ],
      ctaTitle: "Нужно проверить панорамный проём?",
      cta: "Отправить проём и спецификацию стекла",
    },
  },
  "windows-below-minus-39": {
    en: {
      slug: "windows-below-minus-39",
      locale: "en_US",
      seo: {
        title: "Windows Below −39°C: Testing and Selection Guide | PINDÉ",
        description:
          "Engineering checklist for windows intended below −39°C: low-temperature deformation, thermal resistance, air leakage, glass edge and installation.",
        keywords: ["windows below minus 39", "extreme cold windows", "cold climate window testing", "windows for Siberia", "FRP windows extreme cold"],
      },
      eyebrow: "Severe-cold engineering guide",
      title: "Windows for climates below −39°C: testing and selection",
      intro:
        "At very low outdoor temperatures, material contraction, seal stiffness, hardware movement, glass-edge temperature and installation joints can change together. A room-temperature report or nominal frame depth is therefore not enough to release a window for severe-cold service.",
      answerTitle: "Engineering position",
      answer:
        "For projects with design temperatures below −39°C, define a low-temperature verification programme for the ordered construction. Russian SP 538.1325800.2024 calls for laboratory assessment of negative-temperature effects on deformation, reduced heat-transfer resistance and air permeability for such window applications. The project team should confirm the current applicable standards and exact sample scope locally.",
      sections: [
        {
          title: "What changes at severe negative temperature",
          paragraphs: [
            "Frame, glass, spacer, gaskets, hardware and wall junctions have different thermal expansion and stiffness. The resulting movement can alter sash alignment, seal compression, closing force and local surface temperature even when each material is acceptable on its own.",
          ],
          points: [
            "Frame and sash deformation at the design temperature.",
            "Air leakage before, during and after cold exposure.",
            "Reduced heat-transfer resistance and interior surface temperature.",
            "Hardware operation, locking and seal recovery.",
            "Glass edge, drainage, frost and installation-joint behaviour.",
          ],
        },
        {
          title: "How to define the test specimen",
          paragraphs: [
            "Use a representative or critical project size with the intended opening type, glass, spacer, seals, hardware, joints and anchoring. Record conditioning, temperature steps, measurement points and acceptance criteria before testing. A pass for a smaller fixed light should not be transferred to a larger operable sash without an engineering basis.",
          ],
          table: {
            headers: ["Scope item", "Record before test", "Review after test"],
            rows: [
              ["Configuration", "Size, opening, BOM, glass and hardware", "Permanent set, fit and operation"],
              ["Temperature", "Design point, dwell and cycling", "Measured profile and surface temperatures"],
              ["Air", "Baseline leakage and pressure steps", "Cold and recovered leakage"],
              ["Thermal", "Calculation model and boundary conditions", "Resistance and condensation-risk locations"],
            ],
          },
        },
        {
          title: "Use standards at the right level",
          paragraphs: [
            "GOST 33344-2015 addresses structural pultruded polymer-composite profiles. It can support profile qualification but does not replace finished-window air, water, wind, thermal and installation verification. SP 50.13330.2024 provides the building thermal-protection framework, while the project designer and local conformity party determine the applicable product and test route.",
            "For imported profile or CKD supply, agree who is the local applicant, which laboratory is accepted, how samples are selected and how the tested BOM is controlled in repeat production.",
          ],
        },
      ],
      faqs: [
        { question: "Does a window need special testing below −39°C?", answer: "For Russian projects in this range, SP 538.1325800.2024 identifies laboratory assessment of negative-temperature effects on deformation, thermal resistance and air permeability. Confirm the current project route with the designer and local conformity party." },
        { question: "Is a low Uw enough for Siberian or Arctic use?", answer: "No. Uw addresses heat transfer for a defined configuration. Air leakage, deformation, hardware, surface temperature, frost, drainage and installation also need review at the project temperature." },
        { question: "Does GOST 33344-2015 certify a finished FRP window?", answer: "No. It addresses structural pultruded composite profiles. A finished window still needs the applicable product, performance and installation verification." },
      ],
      relatedTitle: "Connect the test plan to a system",
      related: [
        { href: "/systems/frp/fd90", label: "FD90 full-FRP window", description: "Review the window configuration and current PHI component evidence." },
        { href: "/engineering/warmest-windows", label: "Thermal comparison method", description: "Use Uw, air leakage, glass edge and installation in one decision." },
        { href: "/process", label: "Pilot and qualification process", description: "Freeze the reference build before a paid local pilot and test programme." },
      ],
      ctaTitle: "Need a severe-cold verification scope?",
      cta: "Send the design temperature and window schedule",
    },
    ru: {
      slug: "windows-below-minus-39",
      locale: "ru_RU",
      seo: {
        title: "Окна ниже −39°C: испытания и выбор для сильного мороза",
        description:
          "Чек-лист для окон ниже −39°C: деформации на морозе, сопротивление теплопередаче, воздухопроницаемость, край стекла и монтаж.",
        keywords: ["окна для мороза минус 40", "окна для Сибири", "окна для Крайнего Севера", "испытания окон при низкой температуре", "стеклопластиковые окна мороз"],
      },
      eyebrow: "Инженерное руководство для сильного мороза",
      title: "Окна для климата ниже −39°C: испытания и выбор",
      intro:
        "При очень низкой наружной температуре одновременно меняются усадка материалов, жёсткость уплотнений, работа фурнитуры, температура края стекла и монтажные стыки. Поэтому протокола при комнатной температуре или номинальной глубины профиля недостаточно для выпуска окна в условия сильного мороза.",
      answerTitle: "Инженерная позиция",
      answer:
        "Для проектов с расчётной температурой ниже −39°C задают низкотемпературную проверку заказной конструкции. СП 538.1325800.2024 предусматривает лабораторную оценку влияния отрицательной температуры на деформации, приведённое сопротивление теплопередаче и воздухопроницаемость таких окон. Актуальность норм и точный объём образцов подтверждает местная проектная команда.",
      sections: [
        {
          title: "Что меняется при сильной отрицательной температуре",
          paragraphs: [
            "Рама, стекло, дистанционная рамка, уплотнения, фурнитура и примыкание к стене имеют разное температурное расширение и жёсткость. Перемещения могут изменить положение створки, прижим, усилие закрывания и локальную температуру поверхности, даже если каждый материал отдельно соответствует спецификации.",
          ],
          points: [
            "Деформация коробки и створки при расчётной температуре.",
            "Воздухопроницаемость до, во время и после холодовой выдержки.",
            "Приведённое сопротивление теплопередаче и температура внутри.",
            "Работа фурнитуры, запирание и восстановление уплотнений.",
            "Край стекла, дренаж, иней и поведение монтажного шва.",
          ],
        },
        {
          title: "Как задать испытательный образец",
          paragraphs: [
            "Используйте репрезентативный или критичный размер проекта с выбранным открыванием, стеклом, рамкой, уплотнениями, фурнитурой, стыками и креплением. До испытания фиксируют кондиционирование, температурные ступени, точки измерений и критерии приёмки. Результат меньшего глухого окна нельзя без обоснования переносить на крупную открывающуюся створку.",
          ],
          table: {
            headers: ["Часть программы", "До испытания", "После испытания"],
            rows: [
              ["Конфигурация", "Размер, открывание, BOM, стекло и фурнитура", "Остаточная деформация, сопряжение и работа"],
              ["Температура", "Расчётная точка, выдержка и циклы", "Температуры профиля и поверхности"],
              ["Воздух", "Начальная утечка и ступени давления", "Утечка на холоде и после восстановления"],
              ["Теплотехника", "Модель и граничные условия", "Сопротивление и зоны риска конденсата"],
            ],
          },
        },
        {
          title: "Применяйте стандарты на правильном уровне",
          paragraphs: [
            "ГОСТ 33344-2015 относится к конструкционным пултрузионным полимерным композитным профилям. Он полезен для квалификации профиля, но не заменяет проверку готового окна по воздуху, воде, ветру, теплотехнике и монтажу. СП 50.13330.2024 задаёт основу тепловой защиты зданий, а применимый продуктовый маршрут определяют проектировщик и местная сторона подтверждения соответствия.",
            "При импорте профилей или CKD заранее согласуют местного заявителя, признанную лабораторию, отбор образцов и контроль испытанного BOM в повторном производстве.",
          ],
        },
      ],
      faqs: [
        { question: "Нужны ли специальные испытания окон ниже −39°C?", answer: "Для российских проектов в этом диапазоне СП 538.1325800.2024 предусматривает лабораторную оценку деформаций, теплопередачи и воздухопроницаемости при отрицательной температуре. Маршрут подтверждают проектировщик и местная сторона соответствия." },
        { question: "Достаточно ли низкого Uw для Сибири или Арктики?", answer: "Нет. Uw описывает теплопередачу определённой конструкции. На расчётной температуре также проверяют воздух, деформацию, фурнитуру, температуру поверхности, обмерзание, дренаж и монтаж." },
        { question: "ГОСТ 33344-2015 сертифицирует готовое окно FRP?", answer: "Нет. Стандарт относится к конструкционным пултрузионным композитным профилям. Для готового окна остаются продуктовые, эксплуатационные и монтажные проверки." },
      ],
      relatedTitle: "Связать испытания с оконной системой",
      related: [
        { href: "/systems/frp/fd90", label: "Полностью FRP окно FD90", description: "Конфигурация окна и действующая доказательная база компонента PHI." },
        { href: "/engineering/warmest-windows", label: "Метод теплотехнического сравнения", description: "Uw, воздухопроницаемость, край стекла и монтаж в одном решении." },
        { href: "/process", label: "Опытная партия и квалификация", description: "Фиксация эталонной конструкции до местного пилота и испытаний." },
      ],
      ctaTitle: "Нужна программа проверки для сильного мороза?",
      cta: "Отправить температуру и оконную ведомость",
    },
  },
};
