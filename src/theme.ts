import { Context, useContext, createContext } from 'react';

export type Mods = 'light' | 'dark';

export type Theme = {
  background: string;
};

export const themes: Record<Mods, Theme> = {
  light: {
    background: '#F3F4F5',
  },
  dark: {
    background: '#222222',
  },
};

export const createThemeContext = (
  defaultTheme: Mods
): {
  ThemeContext: Context<Theme>;
  useTheme: () => Theme;
} => {
  const ThemeContext = createContext(themes[defaultTheme]);
  const useTheme = () => useContext(ThemeContext);
  return {
    useTheme,
    ThemeContext,
  };
};
