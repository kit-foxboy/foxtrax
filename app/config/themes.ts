export const THEMES = {
  light: "emerald",
  dark: "synthwave",
} as const;

export type ThemeName = (typeof THEMES)[keyof typeof THEMES];

type ThemeOption = { name: ThemeName; label: string };

export const THEME_OPTIONS = [
  { name: THEMES.light, label: "Garden" },
  { name: THEMES.dark, label: "Synthwave" },
] as const satisfies readonly ThemeOption[];
