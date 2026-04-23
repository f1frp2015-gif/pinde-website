/**
 * PINDÉ Technology Icons
 * Built to VI manual spec: 24x24 grid, line-based, 1.5px stroke (scales to ~2px visual),
 * rounded caps/joins, window-frame motif as foundational vocabulary,
 * signature red dot (#D42B2B) as interactive/brand accent.
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

/* 1. Thermal Break — window frame bisected by a broken thermal barrier */
export function ThermalBreakIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="0.5" {...base} />
      <line x1="4" y1="12" x2="10" y2="12" {...base} strokeDasharray="1.5 1.25" />
      <line x1="14" y1="12" x2="20" y2="12" {...base} strokeDasharray="1.5 1.25" />
      <circle cx="12" cy="12" r="1.2" fill={RED} />
    </Frame>
  );
}

/* 2. Air Tightness — nested frames (triple sealing gaskets) with airflow blocked */
export function AirTightnessIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="0.5" {...base} />
      <rect x="7" y="7" width="10" height="10" rx="0.5" {...base} />
      <path d="M1 9 Q 3 10 1 11" {...base} />
      <path d="M1 13 Q 3 14 1 15" {...base} />
      <circle cx="20" cy="4" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 3. Water Resistance — frame with droplets deflected off top edge */
export function WaterResistanceIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="8" width="16" height="12" rx="0.5" {...base} />
      <path d="M8 3 Q 6.5 5 8 6 Q 9.5 5 8 3 Z" {...base} />
      <path d="M13 2 Q 11.5 4 13 5 Q 14.5 4 13 2 Z" {...base} />
      <path d="M18 3.5 Q 16.5 5.5 18 6.5" {...base} />
      <circle cx="20" cy="8" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 4. Solar Control — sun with rays above a framed glass pane */
export function SolarControlIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="6" cy="6" r="2.2" {...base} />
      <line x1="6" y1="1.5" x2="6" y2="2.5" {...base} />
      <line x1="2" y1="6" x2="3" y2="6" {...base} />
      <line x1="3.1" y1="3.1" x2="3.8" y2="3.8" {...base} />
      <line x1="8.9" y1="3.1" x2="8.2" y2="3.8" {...base} />
      <rect x="11" y="11" width="9" height="9" rx="0.5" {...base} />
      <line x1="11" y1="15.5" x2="20" y2="15.5" {...base} opacity="0.5" />
      <line x1="15.5" y1="11" x2="15.5" y2="20" {...base} opacity="0.5" />
      <circle cx="15.5" cy="15.5" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 5. Acoustic Performance — frame with sound waves dampened to a dot */
export function AcousticIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="8" y="4" width="12" height="16" rx="0.5" {...base} />
      <path d="M5 9 Q 2.5 12 5 15" {...base} />
      <path d="M2 7 Q -1.5 12 2 17" {...base} opacity="0.5" />
      <circle cx="14" cy="12" r="1.2" fill={RED} />
    </Frame>
  );
}

/* 6. Structural Integrity — frame with diagonal brace + load arrow */
export function StructuralIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="0.5" {...base} />
      <line x1="4" y1="4" x2="20" y2="20" {...base} />
      <line x1="20" y1="4" x2="4" y2="20" {...base} />
      <circle cx="12" cy="12" r="1.5" fill="var(--color-obsidian, #FAFAF8)" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="0.6" fill={RED} />
    </Frame>
  );
}

/* 7. Extrusion — die block with profile emerging under press arrow */
export function ExtrusionIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2 12 L 5 12" {...base} />
      <path d="M3.5 10.5 L 5 12 L 3.5 13.5" {...base} />
      <rect x="6" y="7" width="6" height="10" rx="0.5" {...base} />
      <path d="M14 10 L 22 10 L 22 11.5 L 16 11.5 L 16 12.5 L 22 12.5 L 22 14 L 14 14 Z" {...base} />
      <circle cx="9" cy="12" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 8. Surface Treatment — spray droplets settling onto horizontal surface */
export function SurfaceTreatmentIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <line x1="3" y1="17" x2="21" y2="17" {...base} />
      <line x1="3" y1="20" x2="21" y2="20" {...base} opacity="0.4" />
      <path d="M7 5 Q 5.8 7 7 8 Q 8.2 7 7 5 Z" {...base} />
      <path d="M12 3 Q 10.8 5 12 6 Q 13.2 5 12 3 Z" {...base} />
      <path d="M17 6 Q 15.8 8 17 9 Q 18.2 8 17 6 Z" {...base} />
      <line x1="7" y1="10" x2="7" y2="13" {...base} opacity="0.5" />
      <line x1="12" y1="8" x2="12" y2="13" {...base} opacity="0.5" />
      <line x1="17" y1="11" x2="17" y2="13" {...base} opacity="0.5" />
      <circle cx="12" cy="17" r="0.9" fill={RED} />
    </Frame>
  );
}

/* 9. Glass Processing — stacked glass panes with precision cut marker */
export function GlassProcessingIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="4" y="6" width="13" height="13" rx="0.5" {...base} />
      <rect x="7" y="3" width="13" height="13" rx="0.5" {...base} />
      <line x1="17" y1="6" x2="7" y2="16" {...base} opacity="0.4" strokeDasharray="1 1" />
      <circle cx="20" cy="3" r="0.9" fill={RED} />
    </Frame>
  );
}
