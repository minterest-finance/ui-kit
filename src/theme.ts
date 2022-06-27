import { Context, useContext, createContext } from 'react';

enum mods {
  light = 'light',
  dark = 'dark',
}

type theme = {
  background: string;
};

export const themes: Record<mods, theme> = {
  light: {
    background: '#F3F4F5',
  },
  dark: {
    background: '#222222',
  },
};

export const createThemeContext = (
  defaultTheme: mods
): {
  ThemeContext: Context<theme>;
  useTheme: () => theme;
} => {
  const ThemeContext = createContext(themes[defaultTheme]);
  const useTheme = () => useContext(ThemeContext);
  return {
    useTheme,
    ThemeContext,
  };
};
