/**
 * PINDÉ Brand Icons (general)
 * Same VI spec as TechIcons: 24x24 grid, line-based, ~1.25 stroke,
 * rounded caps/joins, single color + signature red dot.
 * Used across home FeatureGrid, Quality QC steps, About strengths.
 */

type IconProps = { size?: number; className?: string };

const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const RED = "#D42B2B";

function Frame({ size = 24, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ============ Home · FeatureGrid ============ */

/* Security — window frame crowned by a padlock shackle */
export function SecurityIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M9 8 V 6.5 A 3 3 0 0 1 15 6.5 V 8" {...base} />
      <rect x="4" y="8" width="16" height="12" rx="0.5" {...base} />
      <line x1="4" y1="14" x2="20" y2="14" {...base} />
      <line x1="12" y1="8" x2="12" y2="20" {...base} />
      <circle cx="12" cy="14" r="0.9" fill={RED} />
    </Frame>
  );
}

/* Certified Quality — rosette medal with checkmark */
export function CertifiedIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="10" r="6" {...base} />
      <circle cx="12" cy="10" r="3.5" {...base} />
      <path d="M10.2 10 L 11.5 11.3 L 14 8.7" {...base} />
      <path d="M8 14.5 L 6.5 20 L 9.5 18.5 L 10.5 21 L 12 16" {...base} />
      <path d="M16 14.5 L 17.5 20 L 14.5 18.5 L 13.5 21 L 12 16" {...base} />
      <circle cx="12" cy="10" r="0.8" fill={RED} />
    </Frame>
  );
}

/* Global Reach — globe with latitude/longitude */
export function GlobalIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="8" {...base} />
      <ellipse cx="12" cy="12" rx="3.5" ry="8" {...base} />
      <line x1="4" y1="12" x2="20" y2="12" {...base} />
      <line x1="12" y1="4" x2="12" y2="20" {...base} />
      <circle cx="18" cy="8" r="1" fill={RED} />
    </Frame>
  );
}

/* Custom Solutions — calipers spanning a profile */
export function CustomIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <line x1="4" y1="4" x2="4" y2="20" {...base} />
      <line x1="20" y1="4" x2="20" y2="20" {...base} />
      <path d="M4 8 L 7 8 M 4 12 L 7 12 M 4 16 L 7 16" {...base} />
      <path d="M17 8 L 20 8 M 17 12 L 20 12 M 17 16 L 20 16" {...base} />
      <rect x="9" y="9" width="6" height="6" rx="0.5" {...base} />
      <circle cx="12" cy="12" r="0.9" fill={RED} />
    </Frame>
  );
}

/* Sustainability — leaf contained within architectural frame */
export function SustainabilityIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="0.5" {...base} />
      <path d="M8 16 C 8 10 12 7 16 7 C 16 13 13 16 8 16 Z" {...base} />
      <line x1="8" y1="16" x2="14" y2="10" {...base} />
      <circle cx="16" cy="7" r="0.9" fill={RED} />
    </Frame>
  );
}

/* ============ Quality · QC Steps ============ */

/* 01 Material Inspection — magnifier over layered material stack */
export function InspectionIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <line x1="3" y1="14" x2="21" y2="14" {...base} />
      <line x1="3" y1="17" x2="21" y2="17" {...base} opacity="0.5" />
      <line x1="3" y1="20" x2="21" y2="20" {...base} opacity="0.3" />
      <circle cx="10" cy="8" r="3.5" {...base} />
      <line x1="12.5" y1="10.5" x2="15" y2="13" {...base} />
      <circle cx="10" cy="8" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 02 Process Control — gear/cog */
export function ProcessIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="3.5" {...base} />
      <path d="M12 3 V 5.5 M12 18.5 V 21 M 3 12 H 5.5 M 18.5 12 H 21 M 5.6 5.6 L 7.4 7.4 M 16.6 16.6 L 18.4 18.4 M 5.6 18.4 L 7.4 16.6 M 16.6 7.4 L 18.4 5.6" {...base} />
      <circle cx="12" cy="12" r="1.2" fill={RED} />
    </Frame>
  );
}

/* 03 Finished Testing — window frame with gauge dial */
export function TestingIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="3" width="12" height="12" rx="0.5" {...base} />
      <line x1="9" y1="3" x2="9" y2="15" {...base} />
      <line x1="3" y1="9" x2="15" y2="9" {...base} />
      <circle cx="17" cy="17" r="4" {...base} />
      <line x1="17" y1="17" x2="19.5" y2="15" {...base} />
      <circle cx="17" cy="17" r="0.8" fill={RED} />
    </Frame>
  );
}

/* 04 Documentation & Traceability — document with lines + stamp */
export function DocumentIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M5 3 H 15 L 19 7 V 21 H 5 Z" {...base} />
      <path d="M15 3 V 7 H 19" {...base} />
      <line x1="8" y1="11" x2="16" y2="11" {...base} />
      <line x1="8" y1="14" x2="16" y2="14" {...base} />
      <line x1="8" y1="17" x2="13" y2="17" {...base} />
      <circle cx="16" cy="17" r="1.3" fill={RED} />
    </Frame>
  );
}

/* 05 Packing & Shipping — crate with cross-braces */
export function PackingIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 7 L 12 3 L 21 7 V 17 L 12 21 L 3 17 Z" {...base} />
      <line x1="3" y1="7" x2="12" y2="11" {...base} />
      <line x1="21" y1="7" x2="12" y2="11" {...base} />
      <line x1="12" y1="11" x2="12" y2="21" {...base} />
      <circle cx="12" cy="11" r="1" fill={RED} />
    </Frame>
  );
}

/* 06 Continuous Improvement — cyclic arrow rising */
export function ImprovementIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M19 8 A 7 7 0 1 0 20 13" {...base} />
      <path d="M20 13 L 20 9 L 16 9" {...base} />
      <path d="M8 16 L 11 13 L 14 15 L 17 11" {...base} />
      <circle cx="17" cy="11" r="0.9" fill={RED} />
    </Frame>
  );
}

/* ============ About · Core Strengths ============ */

/* German & Italian CNC — micrometer caliper */
export function CNCIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="9" width="18" height="5" rx="0.5" {...base} />
      <line x1="6" y1="9" x2="6" y2="12" {...base} />
      <line x1="9" y1="9" x2="9" y2="11" {...base} />
      <line x1="12" y1="9" x2="12" y2="12" {...base} />
      <line x1="15" y1="9" x2="15" y2="11" {...base} />
      <line x1="18" y1="9" x2="18" y2="12" {...base} />
      <path d="M10 14 V 19 H 14 V 14" {...base} />
      <circle cx="12" cy="17" r="0.9" fill={RED} />
    </Frame>
  );
}

/* Industry 4.0 Factory — factory silhouette with network node */
export function FactoryIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 20 V 11 L 9 14 V 11 L 15 14 V 8 L 21 11 V 20 Z" {...base} />
      <rect x="5.5" y="16" width="2" height="4" {...base} />
      <rect x="10" y="16" width="2" height="4" {...base} />
      <rect x="14.5" y="16" width="2" height="4" {...base} />
      <line x1="18" y1="8" x2="18" y2="4" {...base} />
      <circle cx="18" cy="4" r="1.2" fill={RED} />
    </Frame>
  );
}

/* 1,800+ Professionals — team silhouettes */
export function TeamIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="8" cy="8" r="2.5" {...base} />
      <path d="M3 19 C 3 15.5 5 13.5 8 13.5 C 11 13.5 13 15.5 13 19" {...base} />
      <circle cx="16" cy="9" r="2" {...base} />
      <path d="M13.5 18 C 13.5 15 15.5 13.5 16 13.5 C 17.5 13.5 21 14.5 21 18" {...base} />
      <circle cx="8" cy="8" r="0.8" fill={RED} />
    </Frame>
  );
}

/* 60+ Patents — certificate with seal + ribbon */
export function PatentIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="3" y="4" width="18" height="13" rx="0.5" {...base} />
      <line x1="6" y1="8" x2="13" y2="8" {...base} />
      <line x1="6" y1="11" x2="11" y2="11" {...base} />
      <circle cx="16.5" cy="12" r="2.2" {...base} />
      <path d="M15 14 L 14.5 20 L 16.5 19 L 18.5 20 L 18 14" {...base} />
      <circle cx="16.5" cy="12" r="0.8" fill={RED} />
    </Frame>
  );
}

/* ============ Quality · Testing Lab illustration ============ */

/* Full test-rig composition for the Testing Lab placeholder */
export function LabRigIllustration({ size = 144 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 144 108"
      fill="none"
      aria-hidden="true"
    >
      {/* Test chamber frame */}
      <rect x="28" y="18" width="56" height="72" rx="1" stroke="currentColor" strokeWidth="1" />
      <line x1="28" y1="54" x2="84" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="56" y1="18" x2="56" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Air pressure arrows from left */}
      <line x1="8" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1" />
      <path d="M22 28 L 24 30 L 22 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="8" y1="40" x2="24" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M22 38 L 24 40 L 22 42" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Water droplets from above */}
      <path d="M44 5 Q 42.5 7 44 8.5 Q 45.5 7 44 5 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 2 Q 56.5 4 58 5.5 Q 59.5 4 58 2 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 5 Q 70.5 7 72 8.5 Q 73.5 7 72 5 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Gauge dial on right */}
      <circle cx="110" cy="42" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="110" cy="42" r="14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <line x1="110" y1="42" x2="119" y2="33" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="110" cy="42" r="1.5" fill="#D42B2B" />
      <line x1="110" y1="25" x2="110" y2="27" stroke="currentColor" strokeWidth="1" />
      <line x1="127" y1="42" x2="125" y2="42" stroke="currentColor" strokeWidth="1" />
      <line x1="110" y1="59" x2="110" y2="57" stroke="currentColor" strokeWidth="1" />
      <line x1="93" y1="42" x2="95" y2="42" stroke="currentColor" strokeWidth="1" />

      {/* Connection line chamber → gauge */}
      <path d="M84 42 L 92 42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Readout strip */}
      <rect x="92" y="72" width="36" height="18" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="96" y1="78" x2="116" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="96" y1="83" x2="108" y2="83" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* Label */}
      <text x="56" y="104" textAnchor="middle" fontSize="6" letterSpacing="1.5" fill="currentColor" opacity="0.5" fontFamily="monospace">
        TEST CHAMBER · AS/NZS 4420
      </text>
    </svg>
  );
}
