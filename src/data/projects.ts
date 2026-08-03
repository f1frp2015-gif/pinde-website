export interface CapabilityCase {
  slug: string;
  title: string;
  systemType: string;
  targetMarket: string;
  description: string;
  performanceHighlights: string[];
  applicableStandards: string[];
  images: string[];
}

// Honest capability showcase — system types & performance profiles,
// NOT claimed as completed projects. Each represents a configuration
// PINDÉ can supply, tested to the listed standards.
export const capabilityCases: CapabilityCase[] = [
  {
    slug: "thermally-broken-casement-residential",
    title: "Thermally Broken Casement — Cold-Climate Residential",
    systemType: "A120 Casement Window",
    targetMarket: "Russia, Kazakhstan, Belarus",
    description:
      "120.6mm profile depth with 35.3mm PA66GF25 thermal break strip and triple EPDM sealing. Designed for residential window fabricators targeting Uw ≤ 1.0 W/m²K with triple glazing up to 130mm. Compatible with GOST-rated hardware and local EPDM profiles.",
    performanceHighlights: [
      "35.3mm PA66GF25 thermal break — 500× lower conductivity than aluminium",
      "Triple EPDM sealing for air tightness Class 4 (EN 12207)",
      "Accepts triple glazing up to 130mm for Uw ≤ 1.0 W/m²K",
      "6063-T5 alloy, 1.4mm minimum wall thickness",
    ],
    applicableStandards: ["GOST 23166", "GOST 30673", "EN 14351-1", "NFRC 100"],
    images: [],
  },
  {
    slug: "sliding-door-large-opening-eaeu",
    title: "Large-Opening Sliding — Villa & Hospitality",
    systemType: "AP187 88 Sliding Door",
    targetMarket: "Kazakhstan, Uzbekistan, Armenia",
    description:
      "196.8mm profile depth sliding door with 88mm sash width for oversized panels. Engineered for large openings in luxury villas and hotel projects. Marble-track option for seamless indoor-outdoor transition. PA66GF25 thermal break with EPDM foam seals.",
    performanceHighlights: [
      "196.8mm profile depth for structural stability on large spans",
      "88mm sash width — reinforced for panels up to 3m height",
      "Max glazing 191mm — triple-glazed for extreme climates",
      "Novabes roller system rated for 400kg panel weight",
    ],
    applicableStandards: ["GOST 23166", "EN 14351-1", "AS/NZS 4420"],
    images: [],
  },
  {
    slug: "frp-window-system-pilot",
    title: "FRP Composite Window — Pilot Programme",
    systemType: "FRP Pultruded Window System",
    targetMarket: "Russia (Siberia & Far East), Kazakhstan (north)",
    description:
      "Pultruded glass-fibre profile system for fabricators evaluating FRP as a low-conductivity alternative to aluminium in extreme cold. Released against a defined BOM, mechanical joint method, and project-specific test plan. Includes cutting/drilling/bonding parameters and first-article inspection protocol.",
    performanceHighlights: [
      "GFRP thermal conductivity ~0.3 W/m·K — no thermal break needed",
      "Pultruded profiles with ≥60% glass fibre by weight",
      "Corner joints via mechanical fastening + structural adhesive",
      "Pilot kits: 3–10 glass-free units for local fabrication testing",
    ],
    applicableStandards: ["GOST R 57790", "EN 13706-3", "ASTM E283"],
    images: [],
  },
  {
    slug: "ckd-supply-multi-opening-project",
    title: "Glass-Free CKD — Multi-Opening Project Supply",
    systemType: "Mixed AL Systems (P3 CKD)",
    targetMarket: "Kyrgyzstan, Armenia, Belarus",
    description:
      "Glass-free CKD kit supply for a mixed-opening project: casement windows (A65), sliding doors (AP187-50), and swing doors (A65). All profiles cut, drilled, machined, and labelled by opening. Seals, joints, approved hardware, and spares pack included. Dimensions confirmed by local fabricator before production release.",
    performanceHighlights: [
      "P3 glass-free CKD: machined profiles packed by opening",
      "Mixed system types in one shipment with separate BOMs",
      "Rail-compatible export packing from Chongqing",
      "2-business-day technical RFQ review before quotation",
    ],
    applicableStandards: ["GOST 23166", "Local national conformity per market"],
    images: [],
  },
];

// Compatibility export — old code importing `projects` still works
export const projects = capabilityCases;
