/** Design tokens for Pizza Deli'Zza premium dark theme */

export const colors = {
  bg: "#0D0D0D",
  surface: "#1A1A1A",
  surface2: "#252525",
  surface3: "#2F2F2F",
  gold: "#D4A053",
  goldLight: "#E8C078",
  goldDark: "#B8863A",
  white: "#FFFFFF",
  text: "#F5F5F5",
  textSecondary: "#A0A0A0",
  textMuted: "#6B6B6B",
  red: "#E74C3C",
  green: "#2ECC71",
  overlay: "rgba(0,0,0,0.6)",
} as const;

export const radius = {
  sm: "12px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  full: "9999px",
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
} as const;

export const shadows = {
  sm: "0 2px 8px rgba(0,0,0,0.3)",
  md: "0 4px 16px rgba(0,0,0,0.4)",
  lg: "0 8px 32px rgba(0,0,0,0.5)",
  gold: "0 4px 20px rgba(212,160,83,0.3)",
} as const;

export const typography = {
  h1: { fontSize: "28px", fontWeight: "800", lineHeight: "1.2" },
  h2: { fontSize: "22px", fontWeight: "700", lineHeight: "1.3" },
  h3: { fontSize: "18px", fontWeight: "600", lineHeight: "1.4" },
  body: { fontSize: "15px", fontWeight: "400", lineHeight: "1.6" },
  bodySmall: { fontSize: "13px", fontWeight: "400", lineHeight: "1.5" },
  caption: { fontSize: "11px", fontWeight: "500", lineHeight: "1.4" },
} as const;

export const gradients = {
  goldCta: "linear-gradient(135deg, #D4A053 0%, #E8C078 100%)",
  darkOverlay: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
  surface: "linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)",
} as const;
