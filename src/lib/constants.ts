export const BRAND = {
  name: "PINDÉ",
  fullName: "Pinde Doors and Windows (Chongqing) Co., LTD",
  chineseName: "品得门窗（重庆）有限公司",
  group: "PINDÉ Group",
  tagline: "Architectural Aluminium Systems",
  slogan: "Precision Defined",
  description:
    "Architectural aluminium systems engineered with the precision of a red dot on the corner of a perfect square.",
  phone: "+86 138 8333 3993",
  email: "doris.li@pinde-alu.com",
  whatsapp: "+86 138 8333 3993",
  address: "No. 68 Chanye Avenue, Tongliang District, Chongqing, China",
  website: "https://www.pinde-alu.com",
  groupWebsite: "http://www.cq-md.com",
};

export const NAV_LINKS = [
  { label: "Systems", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Atelier", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Quality", href: "/quality" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* φ-cascade: 8 colors only
 * L0 Obsidian   #0A0A0C  61.80%  canvas
 * L1 Surface    #111113  14.59%  cards / alt sections
 * L2 Alabaster  #F5F0EB   9.02%  headlines / primary text
 * L3 Warm       #B5AFA8   5.57%  body text
 * L4 Bronze     #C4956A   3.44%  editorial accent
 * L5 Red        #D42B2B   2.13%  dot + CTA only
 * L6 Muted      #555555   1.32%  labels / meta
 * L7 Line       #1A1A1E   0.81%  all borders
 */
export const L = {
  0: "#0A0A0C",
  1: "#111113",
  2: "#F5F0EB",
  3: "#B5AFA8",
  4: "#C4956A",
  5: "#D42B2B",
  6: "#555555",
  7: "#1A1A1E",
} as const;

export const COLORS = {
  obsidian: L[0],
  surface: L[1],
  alabaster: L[2],
  warm: L[3],
  bronze: L[4],
  red: L[5],
  muted: L[6],
  line: L[7],
};

export const CERTIFICATIONS = [
  "ISO 9001",
  "ISO 14001",
  "CE",
  "AS2047",
  "NFRC",
  "60+ Patents",
];

export const STATS = {
  investment: "300M+ RMB",
  factoryArea: "100,000 m²",
  annualCapacity: "1,800,000 m²",
  experience: "23+",
  patents: "60+",
  subsidiaries: 5,
  groupTotalArea: "100,000+ m²",
};

export const PARTNERS = [
  "SIEGENIA",
  "G-U",
  "Roto",
  "HAND (合和建筑五金)",
  "KIN LONG (坚朗)",
  "VAIKE",
  "Key Point",
  "硅宝",
  "BAI YUN",
  "信义玻璃 (XINYI GLASS)",
  "Haida (海达)",
  "华建铝业",
  "兴发铝材",
  "TODN (塔奥帝诺)",
  "RUNAS (瑞纳斯)",
];

export const TOP_CLIENTS = [
  "JINMAO 中国金茂",
  "招商蛇口",
  "中渝地产",
  "越秀地产",
  "两江置业",
  "华利发展控股",
  "保利置业",
  "中梁·壹品",
  "爱玛",
  "中交建筑集团",
  "中交三公局",
  "中国葛洲坝集团",
];
