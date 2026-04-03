export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
}

export const products: Product[] = [
  {
    slug: "sliding-windows-doors",
    name: "Sliding Windows & Doors",
    category: "Sliding System",
    description:
      "Ultra-slim sightlines with superior thermal performance. Our sliding systems offer effortless operation and maximum glass area for panoramic views.",
    features: [
      "Multi-point locking system",
      "Thermal break technology",
      "Weather-resistant seals",
      "Slim profile design",
      "Optional fly screen",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Panel Size", value: "XXXXmm x XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Air Tightness", value: "Class X" },
      { label: "Water Tightness", value: "Class X" },
    ],
    images: [],
  },
  {
    slug: "casement-windows",
    name: "Casement Windows",
    category: "Casement System",
    description:
      "Classic outward or inward opening windows with excellent ventilation and security. Precision-engineered hardware ensures smooth and reliable operation.",
    features: [
      "Heavy-duty hinges",
      "Multi-point locking",
      "Thermal break profiles",
      "Wide color range",
      "Child-safety restrictors available",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Sash Size", value: "XXXXmm x XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Air Tightness", value: "Class X" },
      { label: "Water Tightness", value: "Class X" },
    ],
    images: [],
  },
  {
    slug: "tilt-turn-windows",
    name: "Tilt & Turn Windows",
    category: "Tilt & Turn System",
    description:
      "Versatile European-style windows that tilt inward for ventilation or turn fully for easy cleaning. The gold standard for energy efficiency and comfort.",
    features: [
      "Dual opening modes",
      "Superior air tightness",
      "Easy interior cleaning",
      "Multi-point locking",
      "Concealed hardware options",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Sash Size", value: "XXXXmm x XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Air Tightness", value: "Class X" },
      { label: "Water Tightness", value: "Class X" },
    ],
    images: [],
  },
  {
    slug: "bi-fold-doors",
    name: "Bi-fold Doors",
    category: "Folding System",
    description:
      "Transform your living space with seamless indoor-outdoor flow. Our bi-fold doors fold neatly to one side, creating expansive openings.",
    features: [
      "Smooth folding operation",
      "Flush threshold option",
      "Multiple panel configurations",
      "Heavy-duty running gear",
      "Integrated drainage system",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Panel Width", value: "XXXXmm" },
      { label: "Max Panels", value: "X+X" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Wind Load", value: "XXXX Pa" },
    ],
    images: [],
  },
  {
    slug: "hinged-doors",
    name: "Hinged Doors",
    category: "Door System",
    description:
      "Elegant entrance and patio doors combining strength with refined aesthetics. Available in single or double configurations with premium hardware.",
    features: [
      "Heavy-duty hinges",
      "Multi-point locking",
      "Adjustable threshold",
      "Panic exit hardware option",
      "Wide style range",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Door Size", value: "XXXXmm x XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Security Rating", value: "Class X" },
      { label: "Wind Load", value: "XXXX Pa" },
    ],
    images: [],
  },
  {
    slug: "curtain-wall",
    name: "Curtain Wall Systems",
    category: "Facade System",
    description:
      "Architectural curtain wall solutions for commercial and high-rise residential projects. Engineered for structural integrity and design freedom.",
    features: [
      "Unitized or stick system",
      "Structural glazing option",
      "Integrated sunshade",
      "Seismic performance",
      "BIM data available",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Span", value: "XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Wind Load", value: "XXXX Pa" },
      { label: "Seismic Rating", value: "Zone X" },
    ],
    images: [],
  },
  {
    slug: "fixed-windows",
    name: "Fixed Windows",
    category: "Fixed System",
    description:
      "Maximise natural light with non-opening fixed windows. Ultra-slim frames deliver the largest possible glass area and highest thermal performance.",
    features: [
      "Minimal frame width",
      "Maximum glass area",
      "Superior thermal performance",
      "Structural bonding option",
      "Various shapes available",
    ],
    specs: [
      { label: "Profile Depth", value: "XXmm" },
      { label: "Glass Thickness", value: "XX-XXmm" },
      { label: "Max Panel Size", value: "XXXXmm x XXXXmm" },
      { label: "U-Value", value: "X.X W/m²K" },
      { label: "Frame Width", value: "XXmm" },
      { label: "Wind Load", value: "XXXX Pa" },
    ],
    images: [],
  },
];
