export interface Project {
  slug: string;
  title: string;
  location: string;
  country: string;
  description: string;
  productsUsed: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "sydney-waterfront-residence",
    title: "Sydney Waterfront Residence",
    location: "Sydney, NSW",
    country: "Australia",
    description:
      "A luxury waterfront home featuring floor-to-ceiling sliding doors and fixed windows, maximising harbour views while meeting strict AS2047 requirements.",
    productsUsed: ["Sliding Windows & Doors", "Fixed Windows"],
    images: [],
  },
  {
    slug: "auckland-commercial-tower",
    title: "Auckland Commercial Tower",
    location: "Auckland",
    country: "New Zealand",
    description:
      "A 20-storey commercial building with unitized curtain wall system, delivering a striking glass facade with superior energy performance.",
    productsUsed: ["Curtain Wall Systems", "Hinged Doors"],
    images: [],
  },
  {
    slug: "vancouver-modern-villa",
    title: "Vancouver Modern Villa",
    location: "Vancouver, BC",
    country: "Canada",
    description:
      "Contemporary villa with extensive use of tilt & turn windows and bi-fold doors, creating seamless transitions between indoor and outdoor living spaces.",
    productsUsed: ["Tilt & Turn Windows", "Bi-fold Doors"],
    images: [],
  },
  {
    slug: "dubai-luxury-apartment",
    title: "Dubai Luxury Apartment Complex",
    location: "Dubai Marina",
    country: "UAE",
    description:
      "High-rise residential development with thermally enhanced sliding systems designed for extreme heat, delivering comfort and energy savings.",
    productsUsed: ["Sliding Windows & Doors", "Casement Windows"],
    images: [],
  },
  {
    slug: "london-heritage-renovation",
    title: "London Heritage Renovation",
    location: "Kensington, London",
    country: "United Kingdom",
    description:
      "Sensitive renovation of a period property, integrating modern casement and tilt & turn windows within the heritage facade.",
    productsUsed: ["Casement Windows", "Tilt & Turn Windows"],
    images: [],
  },
  {
    slug: "california-coastal-home",
    title: "California Coastal Home",
    location: "Malibu, CA",
    country: "USA",
    description:
      "Oceanfront residence with bi-fold doors and fixed windows, engineered to withstand coastal conditions while framing stunning Pacific views.",
    productsUsed: ["Bi-fold Doors", "Fixed Windows", "Hinged Doors"],
    images: [],
  },
];
