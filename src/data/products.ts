export interface Product {
  slug: string;
  name: string;
  series: string;
  category: "exterior-windows" | "exterior-doors" | "interior-doors";
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
}

export const products: Product[] = [
  // ==========================================
  // EXTERIOR WINDOWS
  // ==========================================
  {
    slug: "a65-casement-window",
    name: "A65 Casement Window",
    series: "A65",
    category: "exterior-windows",
    description:
      "A versatile outward/inward opening casement window with a compact 65mm profile depth. Engineered with PA66GF25 thermal break strips and triple EPDM seals for reliable weather resistance. Ideal for residential and light commercial applications requiring proven performance at an accessible price point.",
    features: [
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "New EPDM compound foam sealing strips",
      "European standard four-point hardware set",
      "Arc window customization available",
      "Flush frame-sash interior/exterior design",
      "Drain-type water discharge system",
      "Outward, inward, and fixed opening modes",
      "Available in LH Modern Grey, LH Metal Coffee, LH Porcelain Black",
    ],
    specs: [
      { label: "Profile Depth", value: "65 mm" },
      { label: "Max Glass", value: "≤ 75 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/a65-casement-window.jpg"],
  },
  {
    slug: "a110-casement-window",
    name: "A110 Casement Window",
    series: "A110",
    category: "exterior-windows",
    description:
      "A high-performance casement window featuring a robust 110.5mm profile depth and integrated thermal break design. The deeper profile accommodates glazing up to 120mm, delivering superior thermal and acoustic insulation for demanding climates and energy-conscious projects.",
    features: [
      "6063-T5 aluminum alloy with PPG powder coating",
      "Integrated full-window rubber strip for consistent seal quality",
      "Deep 109.3mm frame for enhanced insulation",
      "PA66GF25 thermal break strips",
      "New EPDM compound foam sealing strips",
      "304 stainless steel hardware with insect screen",
      "Double-sided glass sealing with exterior strip / interior sealant",
      "Drain-type water discharge system",
      "Max glazing thickness up to 120mm",
    ],
    specs: [
      { label: "Profile Depth", value: "110.5 mm" },
      { label: "Max Glass", value: "≤ 120 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/a110-casement-window.jpg"],
  },
  {
    slug: "a120-casement-window",
    name: "A120 Casement Window",
    series: "A120",
    category: "exterior-windows",
    description:
      "The flagship casement window in the PINDE range, with a 120.6mm profile depth and a 35.3mm wide thermal break strip with integrated full-window rubber seal for dual thermal insulation. Features triple glass seal construction for exceptional thermal and acoustic performance. The top choice for premium residential and commercial facades in extreme climates.",
    features: [
      "6063-T5 aluminum alloy construction",
      "35.3mm wide PA66GF25 thermal break strip",
      "Integrated full-window rubber strip for dual thermal insulation",
      "Triple glass seal (三玻两腔) for superior insulation",
      "Triple EPDM rubber sealing",
      "304 stainless steel hardware with insect screen",
      "Max glazing thickness up to 130mm",
      "Available in grey, brown, black, and white",
    ],
    specs: [
      { label: "Profile Depth", value: "120 mm" },
      { label: "Max Glass", value: "≤ 130 mm" },
      { label: "Thermal Break Width", value: "35.3 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/a120-casement-window.jpg"],
  },
  {
    slug: "s96n-inward-casement-window",
    name: "S96N Inward Casement Window",
    series: "S96N",
    category: "exterior-windows",
    description:
      "A European-style inward-opening casement window with a 96mm profile depth and dedicated micro-ventilation mode. The inward opening allows easy cleaning from inside, while the micro-ventilation position provides gentle, controlled airflow without fully opening the sash.",
    features: [
      "Inward opening for easy interior cleaning",
      "Micro-ventilation mode for gentle airflow",
      "6063-T5 aluminum alloy construction",
      "PA66GF25 thermal break technology",
      "Triple EPDM rubber sealing",
      "304 stainless steel hardware",
    ],
    specs: [
      { label: "Profile Depth", value: "96 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
      { label: "Opening Mode", value: "Inward / Micro-ventilation" },
    ],
    images: [],
  },
  {
    slug: "s175-push-out-window",
    name: "S175 Push-Out Window",
    series: "S175",
    category: "exterior-windows",
    description:
      "An innovative parallel push-out window with a 175mm profile depth. The sash moves outward in a parallel plane up to 200mm, allowing ventilation without wind interference. Perfect for high-rise and coastal applications where conventional casement windows are impractical.",
    features: [
      "Parallel push-out opening mechanism (hinge-based)",
      "250mm interior/exterior parallel movement",
      "Adjustable ventilation without direct wind",
      "Manual or electric push-out operation",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "Triple EPDM rubber sealing",
    ],
    specs: [
      { label: "Profile Depth", value: "175 mm" },
      { label: "Opening Distance", value: "250 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/s175-push-out-window.jpg"],
  },
  {
    slug: "s115-sliding-window",
    name: "S115 Sliding Window",
    series: "S115",
    category: "exterior-windows",
    description:
      "A smooth-operating sliding window with a 115mm profile depth, accommodating glazing up to 125mm. The precision-engineered track system ensures effortless day-to-day operation. An excellent choice for residential projects seeking generous glazing with practical sliding functionality.",
    features: [
      "Wide-adaptability sliding track system",
      "6063-T5 aluminum alloy with powder coating",
      "PA66GF25 thermal break technology",
      "New EPDM compound foam sealing strips",
      "304 stainless steel mesh screen",
      "Double-sided glass sealing",
      "Drain-type water discharge system",
      "Max glazing thickness up to 125mm",
    ],
    specs: [
      { label: "Profile Depth", value: "115 mm" },
      { label: "Max Glass", value: "≤ 125 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: [],
  },
  {
    slug: "s126-sliding-window",
    name: "S126 Sliding Window",
    series: "S126",
    category: "exterior-windows",
    description:
      "A sliding window with an embedded track design and 126mm profile depth. The recessed track creates a clean, flush aesthetic while maximizing the visible glass area for full transparency. Ideal for modern architectural projects demanding clean lines and unobstructed views.",
    features: [
      "Ultra-narrow frame embedded track design for full transparency",
      "Recessed full-hidden frame minimizes profile visibility",
      "6063-T5 aluminum alloy with powder coating",
      "PA66GF25 thermal break technology",
      "EPDM triple sealing system",
      "Double-sided glass sealing with drain-type water discharge",
      "Large handle design for easy operation",
      "Available in Modern Grey, Metal Coffee, Ink Black, Skin White",
    ],
    specs: [
      { label: "Profile Depth", value: "126 mm" },
      { label: "Max Glass", value: "≤ 96 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: [],
  },
  {
    slug: "s132-side-pressed-window",
    name: "S132 Side-Pressed Window",
    series: "S132",
    category: "exterior-windows",
    description:
      "A side-pressed window with a low-profile flush design and 132mm profile depth. The innovative opening mechanism allows the sash to sit flush with the frame when closed, providing maximum airflow when open and a sleek, modern appearance when closed. Accommodates glazing up to 142mm.",
    features: [
      "Superior sealing — side-pressed seal strips form multi-layer barrier",
      "Manual sliding window operation",
      "Optional glass guardrail for safety",
      "Optional roll-up or electric screen mesh",
      "6063-T5 aluminum alloy with PPG powder coating",
      "New EPDM triple sealing strips",
      "PA66GF25 thermal break technology",
      "304 stainless steel mesh screen",
    ],
    specs: [
      { label: "Profile Depth", value: "132 mm" },
      { label: "Max Glass", value: "≤ 142 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/s132-side-pressed-window.jpg"],
  },
  {
    slug: "s150-vertical-lifting-window",
    name: "S150 Vertical Lifting Window",
    series: "S150",
    category: "exterior-windows",
    description:
      "A vertical lifting window with a 150mm profile depth, accepting glazing up to 206mm for outstanding thermal and acoustic insulation. The sash lifts vertically, saving exterior space. Available with electric motor or manual operation, making it suitable for both residential luxury and commercial automation projects.",
    features: [
      "Smart home compatible — wind/rain sensors, gas sensors",
      "Electric glass panel and electric screen mesh",
      "Guangdong Keshi Begal two-stage motor",
      "Double-sided glass sealing with strip/sealant system",
      "6063-T5 aluminum alloy with metallic powder coating",
      "PA66GF25 thermal break technology",
      "EPDM triple sealing strips",
      "304 stainless steel mesh screen",
      "Available in Flash Grey, Metal Gold Sand, Coffee",
    ],
    specs: [
      { label: "Profile Depth", value: "150 mm" },
      { label: "Max Glass", value: "≤ 206 mm" },
      { label: "Operation", value: "Electric / Manual" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: [],
  },

  // ==========================================
  // EXTERIOR DOORS
  // ==========================================
  {
    slug: "a65-swing-door",
    name: "A65 Swing Door",
    series: "A65",
    category: "exterior-doors",
    description:
      "A robust swing door available in A65 (65.4mm) and A103 (103.5mm) profile configurations. Features hinge + seal strip dual sealing structure for superior wind, water, and sound insulation — outperforming sliding doors. IDH-G02 hinge hardware and IDL020341 lock system ensure reliable long-term performance. Available with optional reinforced mullion for extra-large openings and double-door configuration.",
    features: [
      "A65 (65.4mm) and A103 (103.5mm) frame configurations",
      "Hinge + seal strip dual sealing for wind, water, and sound insulation",
      "Flush frame-sash interior/exterior design",
      "IDH-G02 hinge hardware with IDL020341 lock system",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "EPDM triple sealing system",
      "Optional reinforced mullion for extra-large openings",
      "Available in double-door configuration",
    ],
    specs: [
      { label: "Profile Depth (A65)", value: "65.4 mm" },
      { label: "Profile Depth (A103)", value: "103.5 mm" },
      { label: "Min Wall Width (A65)", value: "≥ 75 mm" },
      { label: "Min Wall Width (A103)", value: "≥ 115.5 mm" },
      { label: "Hinge", value: "IDH-G02" },
      { label: "Lock System", value: "IDL020341" },
      { label: "Surface", value: "PPG Powder Coating" },
    ],
    images: ["/images/products/a65-swing-door.jpg"],
  },
  {
    slug: "ap187-50-sliding-door",
    name: "AP187 50 Sliding Door",
    series: "AP187",
    category: "exterior-doors",
    description:
      "A premium sliding door with a 156.8mm profile depth and mid-rail design for enhanced wind and rain protection. Accommodates glazing up to 161mm for excellent thermal performance. The 50mm sash width keeps sightlines slim while maintaining structural integrity. Ideal for patios, balconies, and terrace openings.",
    features: [
      "Mid-narrow frame design for slim, transparent appearance",
      "Smooth heavy-duty sliding operation",
      "Optional screen mesh (transparent mesh / stainless steel mesh)",
      "High/low track options available",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "EPDM compound foam sealing strips",
      "Novabes roller system and Bao Ma lock",
    ],
    specs: [
      { label: "Profile Depth", value: "156.8 mm" },
      { label: "Max Glass", value: "≤ 161 mm" },
      { label: "Sash Width", value: "50 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/ap187-50-sliding-door.jpg"],
  },
  {
    slug: "ap187-88-sliding-door",
    name: "AP187 88 Sliding Door",
    series: "AP187",
    category: "exterior-doors",
    description:
      "A large-panel sliding door with a 196.8mm profile depth, designed for bigger openings where maximum glass area is essential. Accommodates glazing up to 191mm for superior insulation. The wider 88mm sash provides additional structural support for oversized panels, making it the preferred choice for grand residential and hospitality projects.",
    features: [
      "Large-span design for oversized openings — ideal for villas and terraces",
      "Wide 88mm sash for enhanced structural support",
      "Optional screen mesh (transparent mesh / stainless steel mesh)",
      "High/low track options available",
      "Optional anti-theft lock system",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "EPDM compound foam sealing strips",
      "Novabes roller system and Bao Ma lock",
    ],
    specs: [
      { label: "Profile Depth", value: "196.8 mm" },
      { label: "Max Glass", value: "≤ 191 mm" },
      { label: "Sash Width", value: "88 mm" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/ap187-88-sliding-door.jpg"],
  },
  {
    slug: "s150-sliding-door",
    name: "S150 Sliding Door",
    series: "S150",
    category: "exterior-doors",
    description:
      "A premium sliding door with marble track system, engineered for large openings that create seamless indoor-outdoor living. Available with electric opening for effortless operation of heavy panels. The refined track design ensures whisper-quiet, smooth sliding. Perfect for luxury villas, resort hotels, and high-end commercial spaces.",
    features: [
      "Premium marble track — tiles and marble can seamlessly blend indoor/outdoor flooring",
      "Ultra-narrow frame design for maximum transparency",
      "Large-inertia smooth sliding operation",
      "Track flush with floor surface",
      "Electric sliding option available",
      "6063-T5 aluminum alloy with fluorocarbon coating",
      "Pinde custom rollers and Pinde custom lock system",
      "Optional glass guardrail",
    ],
    specs: [
      { label: "Series", value: "S150" },
      { label: "Track Type", value: "Marble track" },
      { label: "Operation", value: "Electric / Manual" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Seals", value: "EPDM" },
    ],
    images: ["/images/products/s150-sliding-door.jpg"],
  },
  {
    slug: "s93-heavy-duty-folding-door",
    name: "S93 Heavy-Duty Folding Door",
    series: "S93",
    category: "exterior-doors",
    description:
      "A heavy-duty folding door with full aluminum construction delivering a 100% opening ratio. All panels fold completely to one side, removing any visual obstruction and creating a fully open connection between interior and exterior spaces. Ideal for restaurants, showrooms, and luxury residences seeking unobstructed panoramic views.",
    features: [
      "Full panoramic open-close design — 100% unobstructed view",
      "Large-span folding structure for complete indoor/outdoor connection",
      "Thermal break insulation for energy efficiency",
      "Multi-seal weather protection",
      "Flexible panel configuration options",
      "Smooth open-close operation",
      "6063-T5 aluminum alloy with metallic powder coating",
      "Custom hardware with Pinde-specific seal strips",
    ],
    specs: [
      { label: "Series", value: "S93" },
      { label: "Opening Ratio", value: "100%" },
      { label: "Construction", value: "Full aluminum" },
      { label: "Aluminum Alloy", value: "6063-T5" },
      { label: "Thermal Break", value: "PA66GF25" },
      { label: "Hardware", value: "304 Stainless Steel" },
    ],
    images: [],
  },

  // ==========================================
  // INTERIOR DOORS
  // ==========================================
  {
    slug: "perfect-system-non-interlocking-door",
    name: "Perfect System Non-Interlocking / Interlocking Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "An ultra-narrow frame interior sliding door with a maximum width of just 168mm and depth of 149mm. Available in both non-interlocking (independent panel) and interlocking (synchronized panel) configurations. Multiple panel arrangements allow flexible room division. Sleek minimal profiles create a modern, open-plan aesthetic.",
    features: [
      "Multi-panel linkage — 1 to 6 panels, left/right push, bidirectional",
      "All hardware fully concealed",
      "Bidirectional damping for quiet operation",
      "Anti-tip drop-proof safety design",
      "Exposed or hidden track options",
      "Flexible door frame styles",
      "Available in Fog Black, Daylight, and Japanese Grey",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Max Frame Width", value: "168 mm" },
      { label: "Max Frame Depth", value: "149 mm" },
      { label: "Type", value: "Non-interlocking / Interlocking" },
      { label: "Application", value: "Interior" },
    ],
    images: ["/images/products/perfect-system-non-interlocking-door.jpg"],
  },
  {
    slug: "perfect-system-opposite-direction-linkage",
    name: "Perfect System Opposite Direction Linkage Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "An innovative interior door system where panels slide in opposite directions simultaneously, creating a symmetrical opening. Designed for 4-door configurations with a slim 105mm profile. Ideal for wide interior openings such as living-dining room dividers and conference room partitions.",
    features: [
      "Opposite direction synchronized sliding",
      "4-door panel configuration",
      "Slim 105mm profile depth",
      "Smooth linkage mechanism",
      "Modern interior aesthetic",
      "Multiple finish options",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Profile Depth", value: "105 mm" },
      { label: "Configuration", value: "4-door opposite direction" },
      { label: "Application", value: "Interior" },
    ],
    images: [],
  },
  {
    slug: "perfect-system-phantom-door",
    name: "Perfect System Phantom Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "A hidden suspension sliding door that appears to float in space. The concealed overhead track eliminates visible floor rails, creating a clean, seamless floor surface. Equipped with soft-close and anti-collision features for safe, quiet operation. A signature piece for high-end interior design.",
    features: [
      "Hidden suspension design — door appears to float in space",
      "All hardware fully concealed",
      "Bidirectional damping for quiet operation",
      "Anti-wear and anti-collision wall-hugging design",
      "Fits minimalist, light luxury, and various decor styles",
      "Flexible door frame options",
      "Available in Fog Black and White Daylight",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Type", value: "Phantom (hidden suspension)" },
      { label: "Closing", value: "Soft-close" },
      { label: "Safety", value: "Anti-collision" },
      { label: "Application", value: "Interior" },
    ],
    images: ["/images/products/perfect-system-phantom-door.jpg"],
  },
  {
    slug: "perfect-system-folding-door",
    name: "Perfect System Folding Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "An interior folding door delivering a 100% opening ratio for maximum spatial flexibility. When fully folded, the panels stack neatly to one side, providing unobstructed passage and natural ventilation. Features an anti-pinch safety design to protect fingers during operation. Ideal for open-plan living areas and flexible commercial spaces.",
    features: [
      "90% opening area for maximum ventilation and light",
      "Minimalist aesthetics with hidden hardware",
      "All hardware fully concealed",
      "No door-stop required for flexible positioning",
      "Anti-wear and anti-collision design",
      "Center/side placement, multiple form options",
      "Available in Fog Black",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Opening Ratio", value: "100%" },
      { label: "Safety", value: "Anti-pinch design" },
      { label: "Application", value: "Interior" },
    ],
    images: [],
  },
  {
    slug: "1645-bathroom-door",
    name: "1645 Bathroom Door",
    series: "1645",
    category: "interior-doors",
    description:
      "A purpose-built bathroom sliding door with a hidden concealed design and flat surface finish. Available in single-track and double-track configurations to suit various bathroom layouts. The waterproof design ensures long-term durability in wet environments. Clean lines and a flush appearance complement modern bathroom interiors.",
    features: [
      "Concealed hinge design — flat door surface with no visible hinges",
      "Minimalist aesthetics with clean lines",
      "Silent damping for quiet operation",
      "Large glass-to-frame ratio for maximum light",
      "Inward/outward opening options",
      "Flexible door frame styles",
      "Multiple decorative handle options",
      "Available in Fog Black, Ink Black, and Skin White (AP1645) or custom colors (TP1645)",
    ],
    specs: [
      { label: "Series", value: "1645" },
      { label: "Track Options", value: "Single / Double" },
      { label: "Design", value: "Hidden concealed, flat surface" },
      { label: "Water Resistance", value: "Waterproof" },
      { label: "Application", value: "Bathroom / Wet areas" },
    ],
    images: ["/images/products/1645-bathroom-door.jpg"],
  },
];

export const productCategories = [
  {
    slug: "exterior-windows",
    name: "Exterior Windows",
    description:
      "High-performance aluminum system windows engineered for superior thermal insulation, acoustic comfort, and weather resistance. Available in casement, sliding, push-out, side-pressed, and vertical lifting configurations.",
  },
  {
    slug: "exterior-doors",
    name: "Exterior Doors",
    description:
      "Premium aluminum entrance and patio door systems built for durability, security, and seamless indoor-outdoor living. Swing, sliding, and folding options for every architectural requirement.",
  },
  {
    slug: "interior-doors",
    name: "Interior Doors",
    description:
      "Ultra-narrow frame interior door systems from the Perfect System collection, plus specialized bathroom doors. Designed to maximize space, light, and modern aesthetics within any interior.",
  },
];
