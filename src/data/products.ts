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

const _products: Product[] = [
  // ==========================================
  // EXTERIOR WINDOWS
  // ==========================================
  {
    slug: "a65-casement-window",
    name: "A65 Casement Window",
    series: "A65",
    category: "exterior-windows",
    description:
      "A65 is a 65 mm thermally broken casement system for inward-opening, outward-opening and fixed units. The reference build combines 6063-T5 aluminium, PA66GF25 polyamide barriers, three EPDM sealing levels and drained glazing rebates. It is the compact system in the PINDÉ exterior-window range.",
    features: [
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 thermal break technology",
      "Three sealing levels with EPDM gaskets",
      "Four-point hardware set in the reference configuration",
      "Curved units subject to drawing review",
      "Flush frame and sash faces",
      "Drained and pressure-equalised glazing rebate",
      "Inward-opening, outward-opening and fixed configurations",
      "Catalogue finishes: Modern Grey, Metal Coffee and Porcelain Black",
    ],
    specs: [
      { label: "Frame Depth", value: "65 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 75 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-a65-thermal-break-aluminium-casement-window.webp"],
  },
  {
    slug: "a110-casement-window",
    name: "A110 Casement Window",
    series: "A110",
    category: "exterior-windows",
    description:
      "A110 uses a 110.5 mm thermally broken frame for projects that need more construction depth than A65. Its reference construction combines a continuous inner gasket, PA66GF25 barriers, EPDM seals and a drained glazing rebate. Glazing make-up and whole-window performance are selected and verified for each project.",
    features: [
      "6063-T5 aluminum alloy with PPG powder coating",
      "Continuous inner gasket in the reference build",
      "Nominal frame depth of 110.5 mm",
      "PA66GF25 polyamide thermal barriers",
      "EPDM gasket set",
      "304 stainless-steel hardware and optional insect screen",
      "External glazing gasket with internal sealant line",
      "Drained and pressure-equalised glazing rebate",
      "Glazing package released against the project schedule",
    ],
    specs: [
      { label: "Frame Depth", value: "110.5 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 120 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-a110-thermal-break-aluminium-casement-window.webp"],
  },
  {
    slug: "a120-casement-window",
    name: "A120 Casement Window",
    series: "A120",
    category: "exterior-windows",
    description:
      "A120 has the greatest frame depth in the PINDÉ aluminium casement range. The 120.6 mm frame uses a 35.3 mm PA66GF25 thermal barrier, a continuous inner gasket and three sealing levels. It is intended for project-specific triple-glazed insulating glass units; Uw must be confirmed for the released unit size, glazing and hardware set.",
    features: [
      "6063-T5 aluminum alloy construction",
      "35.3 mm PA66GF25 polyamide thermal barrier",
      "Continuous inner gasket in the reference build",
      "Reference detailing for a two-chamber insulating glass unit",
      "Three sealing levels with EPDM gaskets",
      "304 stainless-steel hardware and optional insect screen",
      "Glazing package released against the project schedule",
      "Catalogue finishes: grey, brown, black and white",
    ],
    specs: [
      { label: "Frame Depth", value: "120.6 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 130 mm" },
      { label: "Thermal-Barrier Width", value: "35.3 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-a120-thermal-break-aluminium-casement-window.webp"],
  },
  {
    slug: "s96n-inward-casement-window",
    name: "S96N Inward Casement Window",
    series: "S96N",
    category: "exterior-windows",
    description:
      "S96N is a 96 mm inward-opening tilt-and-turn system. The hardware schedule can include a restricted ventilation position, allowing the sash to ventilate without moving to the full turn position. Final opening sequence, safety hardware and sash limits are fixed in the project specification.",
    features: [
      "Inward-opening tilt-and-turn configuration",
      "Restricted ventilation position where specified",
      "6063-T5 aluminum alloy construction",
      "PA66GF25 polyamide thermal barriers",
      "Three sealing levels with EPDM gaskets",
      "304 stainless-steel hardware in the reference build",
    ],
    specs: [
      { label: "Frame Depth", value: "96 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
      { label: "Opening Type", value: "Tilt-and-Turn / Restricted Ventilation" },
    ],
    images: [],
  },
  {
    slug: "s175-push-out-window",
    name: "S175 Parallel-Projecting Window",
    series: "S175",
    category: "exterior-windows",
    description:
      "S175 is a 175 mm parallel-projecting window. The hardware moves the sash outward while keeping it broadly parallel to the frame, with a catalogue travel of 250 mm. Manual and motorised drives are available; wind load, opening restrictors and controls are selected for the project location.",
    features: [
      "Parallel-projecting hardware mechanism",
      "Catalogue sash travel of 250 mm",
      "Ventilation gap around the sash perimeter",
      "Manual or motorised operation",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 polyamide thermal barriers",
      "Three sealing levels with EPDM gaskets",
    ],
    specs: [
      { label: "Frame Depth", value: "175 mm" },
      { label: "Catalogue Sash Travel", value: "250 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-s175-parallel-push-out-aluminium-window.webp"],
  },
  {
    slug: "s115-sliding-window",
    name: "S115 Sliding Window",
    series: "S115",
    category: "exterior-windows",
    description:
      "S115 is a 115 mm thermally broken sliding-window system. The reference build uses 6063-T5 aluminium, PA66GF25 barriers, EPDM gaskets and a drained track. Roller capacity, sash size, glazing and insect-screen arrangement are confirmed from the project window schedule.",
    features: [
      "Sliding track with project-selected roller set",
      "6063-T5 aluminum alloy with powder coating",
      "PA66GF25 polyamide thermal barriers",
      "EPDM gasket set",
      "304 stainless steel mesh screen",
      "Glazing retained and sealed on both sides",
      "Drained track and glazing rebate",
      "Glazing package released against the project schedule",
    ],
    specs: [
      { label: "Frame Depth", value: "115 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 125 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: [],
  },
  {
    slug: "s126-sliding-window",
    name: "S126 Sliding Window",
    series: "S126",
    category: "exterior-windows",
    description:
      "S126 is a 126 mm sliding-window system with a recessed frame-and-track arrangement. The narrower exposed profile is intended to reduce visible aluminium around the glazed area. Track height, drainage, roller capacity and sill transition are checked against the opening detail before release.",
    features: [
      "Narrow exposed frame with recessed track detailing",
      "Concealed-frame option subject to the wall interface",
      "6063-T5 aluminum alloy with powder coating",
      "PA66GF25 polyamide thermal barriers",
      "Three sealing levels with EPDM gaskets",
      "Two-sided glazing seal with drained rebate",
      "Large operating handle in the reference hardware set",
      "Catalogue finishes: Modern Grey, Metal Coffee, Ink Black and Skin White",
    ],
    specs: [
      { label: "Frame Depth", value: "126 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 96 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: [],
  },
  {
    slug: "s132-side-pressed-window",
    name: "S132 Compression-Seal Window",
    series: "S132",
    category: "exterior-windows",
    description:
      "S132 is a 132 mm compression-seal window with a sash that closes flush into the frame and is drawn onto the gasket line. The mechanism is intended to combine a sliding motion with positive compression at the closed position. Guarding, screen type and operating hardware remain configuration choices.",
    features: [
      "Compression at the closed sash perimeter",
      "Manual sliding-and-compression operation",
      "Optional glass guardrail for safety",
      "Optional roll-up or electric screen mesh",
      "6063-T5 aluminum alloy with PPG powder coating",
      "Three sealing levels with EPDM gaskets",
      "PA66GF25 polyamide thermal barriers",
      "304 stainless steel mesh screen",
    ],
    specs: [
      { label: "Frame Depth", value: "132 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 142 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-s132-side-pressed-aluminium-window.webp"],
  },
  {
    slug: "s150-vertical-lifting-window",
    name: "S150 Vertical Sliding Window",
    series: "S150",
    category: "exterior-windows",
    description:
      "S150 is a 150 mm window with a vertically sliding sash. The system can be configured for manual operation or a two-stage motor, with optional control inputs for wind, rain and indoor sensors. Sash mass, guarding, travel limits and emergency operation are fixed during project engineering.",
    features: [
      "Optional wind, rain and indoor-sensor inputs",
      "Motorised glazed sash and insect-screen options",
      "Guangdong Keshi Begal two-stage motor",
      "External glazing gasket with internal sealant line",
      "6063-T5 aluminum alloy with metallic powder coating",
      "PA66GF25 polyamide thermal barriers",
      "Three sealing levels with EPDM gaskets",
      "304 stainless steel mesh screen",
      "Catalogue finishes: Flash Grey, Metal Gold Sand and Coffee",
    ],
    specs: [
      { label: "Frame Depth", value: "150 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 206 mm" },
      { label: "Operation", value: "Motorised / Manual" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: [],
  },

  // ==========================================
  // EXTERIOR DOORS
  // ==========================================
  {
    slug: "a65-swing-door",
    name: "A65 Hinged Door",
    series: "A65",
    category: "exterior-doors",
    description:
      "A65 is a thermally broken hinged-door system with 65.4 mm and 103.5 mm frame options. The reference hardware set uses IDH-G02 hinges and the IDL020341 lock, with gasketed frame-to-leaf junctions. Single-leaf, double-leaf and reinforced-mullion layouts are released against the opening schedule.",
    features: [
      "A65 (65.4 mm) and A103 (103.5 mm) frame options",
      "Gasketed hinge side and closing perimeter",
      "Flush frame and door-leaf faces",
      "IDH-G02 hinge hardware with IDL020341 lock system",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 polyamide thermal barriers",
      "Three sealing levels with EPDM gaskets",
      "Optional reinforced mullion for extra-large openings",
      "Single-leaf and double-leaf configurations",
    ],
    specs: [
      { label: "Frame Depth (A65)", value: "65.4 mm" },
      { label: "Frame Depth (A103)", value: "103.5 mm" },
      { label: "Minimum Interface Width (A65)", value: "≥ 75 mm" },
      { label: "Minimum Interface Width (A103)", value: "≥ 115.5 mm" },
      { label: "Hinge Set", value: "IDH-G02" },
      { label: "Lock Set", value: "IDL020341" },
      { label: "Reference Finish", value: "PPG Powder Coating" },
    ],
    images: ["/images/products/pinde-a65-thermal-break-aluminium-swing-door.webp"],
  },
  {
    slug: "ap187-50-sliding-door",
    name: "AP187 50 Sliding Door",
    series: "AP187",
    category: "exterior-doors",
    description:
      "AP187 50 is a thermally broken sliding-door system with a 156.8 mm frame and a 50 mm visible leaf profile in the reference section. High- and low-track details and two insect-screen options are available. Panel size, roller capacity, drainage and glazing are checked for each terrace or balcony opening.",
    features: [
      "50 mm visible leaf profile in the reference section",
      "Roller set selected for the calculated leaf mass",
      "Optional transparent or stainless-steel insect screen",
      "High-track and low-track sill details",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 polyamide thermal barriers",
      "EPDM foam gasket set",
      "Novabes roller system and Bao Ma lock",
    ],
    specs: [
      { label: "Frame Depth", value: "156.8 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 161 mm" },
      { label: "Visible Leaf Width", value: "50 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-ap187-50-aluminium-sliding-door.webp"],
  },
  {
    slug: "ap187-88-sliding-door",
    name: "AP187 88 Sliding Door",
    series: "AP187",
    category: "exterior-doors",
    description:
      "AP187 88 uses a 196.8 mm frame and an 88 mm visible leaf profile for larger sliding panels than the AP187 50 configuration. The wider leaf section, roller selection and optional security lock are coordinated with the calculated panel mass. Glazing, track drainage and deflection limits remain project-specific.",
    features: [
      "Large-panel configuration for wide terrace openings",
      "88 mm visible leaf profile in the reference section",
      "Optional transparent or stainless-steel insect screen",
      "High-track and low-track sill details",
      "Optional anti-theft lock system",
      "6063-T5 aluminum alloy with PPG powder coating",
      "PA66GF25 polyamide thermal barriers",
      "EPDM foam gasket set",
      "Novabes roller system and Bao Ma lock",
    ],
    specs: [
      { label: "Frame Depth", value: "196.8 mm" },
      { label: "Catalogue Interface Dimension", value: "≤ 191 mm" },
      { label: "Visible Leaf Width", value: "88 mm" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: ["/images/products/pinde-ap187-88-aluminium-sliding-door.webp"],
  },
  {
    slug: "s150-sliding-door",
    name: "S150 Sliding Door",
    series: "S150",
    category: "exterior-doors",
    description:
      "S150 is a thermally broken sliding-door system with a floor-integrated track detail. The surrounding stone or tile finish can be coordinated with the sill, while the drive can be manual or motorised. Panel mass, drainage access, service clearances and threshold level are fixed before machining.",
    features: [
      "Floor-integrated track detail for stone or tile finishes",
      "Narrow exposed profile around the glazed area",
      "Roller set selected for the calculated leaf mass",
      "Flush-threshold option subject to drainage design",
      "Optional motorised drive",
      "6063-T5 aluminum alloy with fluorocarbon coating",
      "Pinde custom rollers and Pinde custom lock system",
      "Optional glass guardrail",
    ],
    specs: [
      { label: "Series", value: "S150" },
      { label: "Track Type", value: "Floor-integrated stone track" },
      { label: "Operation", value: "Motorised / Manual" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Gaskets", value: "EPDM" },
    ],
    images: ["/images/products/pinde-s150-aluminium-sliding-door.webp"],
  },
  {
    slug: "s93-heavy-duty-folding-door",
    name: "S93 Heavy-Duty Folding Door",
    series: "S93",
    category: "exterior-doors",
    description:
      "S93 is a thermally broken aluminium folding-door system for openings where the leaves must stack at one or both jambs. Panel count, stacking direction, running hardware and clear opening are set by the opening schedule. The system is suited to commercial frontage, hospitality and residential terrace applications after structural and weather checks.",
    features: [
      "Leaves stack at the selected jamb position",
      "Panel count and stacking direction defined by the schedule",
      "PA66GF25 polyamide thermal barriers",
      "Multi-level EPDM gasket arrangement",
      "Multiple folding layouts",
      "Running hardware selected for leaf mass",
      "6063-T5 aluminum alloy with metallic powder coating",
      "Custom hardware with Pinde-specific seal strips",
    ],
    specs: [
      { label: "Series", value: "S93" },
      { label: "Catalogue Opening Ratio", value: "Up to 100%, configuration-dependent" },
      { label: "Construction", value: "Aluminium framed leaves" },
      { label: "Aluminium Alloy", value: "6063-T5" },
      { label: "Thermal Barrier", value: "PA66GF25" },
      { label: "Hardware Material", value: "304 Stainless Steel" },
    ],
    images: [],
  },

  // ==========================================
  // INTERIOR DOORS
  // ==========================================
  {
    slug: "perfect-system-non-interlocking-door",
    name: "Perfect System Independent / Linked-Panel Sliding Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "This Perfect System interior sliding partition supports independent or linked panel movement. The catalogue shows arrangements from one to six panels, with exposed or concealed track options. Panel sequence, parking side, soft-close hardware and the surrounding wall build-up are confirmed on the approved shop drawing.",
    features: [
      "One- to six-panel layouts with left, right or bi-parting movement",
      "Concealed running hardware where the selected detail permits",
      "Soft-close action in both directions",
      "Anti-derailment and anti-drop hardware",
      "Exposed-track and concealed-track details",
      "Multiple jamb and casing details",
      "Catalogue finishes: Fog Black, Daylight and Japanese Grey",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Catalogue Frame Width", value: "168 mm" },
      { label: "Catalogue Frame Depth", value: "149 mm" },
      { label: "Panel Movement", value: "Independent / Linked" },
      { label: "Application", value: "Interior" },
    ],
    images: ["/images/products/pinde-perfect-system-non-interlocking-interior-door.webp"],
  },
  {
    slug: "perfect-system-opposite-direction-linkage",
    name: "Perfect System Synchronised Bi-Parting Sliding Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "This Perfect System configuration links the sliding leaves so that they move in opposite directions and form a centred opening. The catalogue reference is a four-panel layout with a 105 mm system depth. The linkage ratio, stop positions and clear opening are fixed on the approved shop drawing.",
    features: [
      "Synchronised bi-parting sliding movement",
      "Four-panel catalogue configuration",
      "105 mm system depth",
      "Concealed linkage mechanism",
      "Centred clear opening",
      "Project-selected finish",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "System Depth", value: "105 mm" },
      { label: "Configuration", value: "Four-panel synchronised bi-parting" },
      { label: "Application", value: "Interior" },
    ],
    images: [],
  },
  {
    slug: "perfect-system-phantom-door",
    name: "Perfect System Top-Hung Concealed-Track Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "Phantom is a top-hung interior sliding door with a concealed overhead track and no continuous floor rail. The reference hardware includes soft-close and anti-collision functions. Wall structure, fixing points, service access and door-leaf mass must be checked before the concealed track is installed.",
    features: [
      "Top-hung leaf without a continuous floor track",
      "Concealed overhead running gear",
      "Soft-close action in both directions",
      "Anti-collision stops and wall-clearance control",
      "Wall-mounted or pocket-adjacent layouts",
      "Multiple jamb details",
      "Catalogue finishes: Fog Black and White Daylight",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Type", value: "Top-hung concealed-track sliding door" },
      { label: "Closing", value: "Soft-close" },
      { label: "Safety", value: "Anti-collision" },
      { label: "Application", value: "Interior" },
    ],
    images: ["/images/products/pinde-perfect-system-phantom-interior-door.webp"],
  },
  {
    slug: "perfect-system-folding-door",
    name: "Perfect System Interior Folding Door",
    series: "Perfect System",
    category: "interior-doors",
    description:
      "This Perfect System folding partition stacks the leaves at the selected side of an interior opening. The catalogue combines concealed hardware with anti-pinch detailing and multiple centre- or side-stacking layouts. Clear opening, panel count and parking space depend on the approved configuration.",
    features: [
      "Catalogue clear opening up to 90%, depending on layout",
      "Concealed running and folding hardware",
      "Anti-pinch detailing between leaves",
      "Intermediate positioning without a floor door stop",
      "Anti-wear and anti-collision components",
      "Centre- or side-stacking layouts",
      "Catalogue finish: Fog Black",
    ],
    specs: [
      { label: "Series", value: "Perfect System" },
      { label: "Catalogue Opening Ratio", value: "Up to 90%, configuration-dependent" },
      { label: "Safety", value: "Anti-pinch design" },
      { label: "Application", value: "Interior" },
    ],
    images: [],
  },
  {
    slug: "1645-bathroom-door",
    name: "1645 Bathroom Door Set",
    series: "1645",
    category: "interior-doors",
    description:
      "The 1645 series is an aluminium bathroom-door set with flush faces and concealed hardware options. The catalogue includes single- and double-track references as well as inward- and outward-opening variants, so the final opening type must be stated on the schedule. Finish, glazing and hardware are selected for the expected wet-area exposure.",
    features: [
      "Flush door faces with concealed-hardware options",
      "Single-track and double-track catalogue details",
      "Damped closing hardware where specified",
      "Glazed and opaque infill options",
      "Inward-opening and outward-opening variants",
      "Multiple jamb and casing details",
      "Multiple decorative handle options",
      "AP1645 catalogue finishes: Fog Black, Ink Black and Skin White; TP1645 colours by agreement",
    ],
    specs: [
      { label: "Series", value: "1645" },
      { label: "Track Options", value: "Single / Double, where applicable" },
      { label: "Design", value: "Flush face / Concealed hardware option" },
      { label: "Exposure", value: "Bathroom and wet-area interior use" },
      { label: "Application", value: "Interior bathroom door set" },
    ],
    images: ["/images/products/pinde-1645-aluminium-bathroom-door.webp"],
  },
];

// Sort: products with images first
export const products = _products.sort((a, b) => {
  const aHas = a.images.length > 0 ? 0 : 1;
  const bHas = b.images.length > 0 ? 0 : 1;
  return aHas - bHas;
});

export const productCategories = [
  {
    slug: "exterior-windows",
    name: "Exterior Windows",
    description:
      "Thermally broken aluminium systems for casement, tilt-and-turn, sliding, parallel-projecting, compression-seal and vertical-sliding windows.",
  },
  {
    slug: "exterior-doors",
    name: "Exterior Doors",
    description:
      "Aluminium hinged, sliding and folding door systems for entrance, balcony and terrace openings, released to the project hardware and glazing schedule.",
  },
  {
    slug: "interior-doors",
    name: "Interior Doors",
    description:
      "Perfect System sliding and folding partitions, concealed-track doors and the 1645 bathroom-door range for scheduled interior openings.",
  },
];
