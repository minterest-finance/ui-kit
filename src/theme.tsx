import React, { FC, useContext, createContext } from 'react';

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
  defaultTheme?: Mods
): {
  Provider: FC<{ children: React.ReactNode; value?: Theme }>;
  useTheme: () => Theme;
} => {
  const theme = themes[defaultTheme || 'dark'];
  const ThemeContext = createContext(theme);
  const useTheme = () => useContext(ThemeContext);
  return {
    useTheme,
    Provider: ({ value, children }) => {
      return (
          <ThemeContext.Provider value={value || theme}>
        {children}
      </ThemeContext.Provider>)
    }
  };
};
