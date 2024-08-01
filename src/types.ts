export type Theme = "dark" | "light" | "system";

export type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export type LinkUri = {
  label: string;
  uri: string;
};