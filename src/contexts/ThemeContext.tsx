import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    return stored || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Ensure only the 'dark' class is used for Tailwind dark mode
    root.classList.toggle('dark', theme === 'dark');
    // Optionally expose current theme for CSS if needed
    root.setAttribute('data-theme', theme);
    // Keep browser UI chrome aligned with our theme, not system settings
    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]'
    ) as HTMLMetaElement | null;
    const colorSchemeMeta = document.querySelector(
      'meta[name="color-scheme"]'
    ) as HTMLMetaElement | null;

    const lightColor = '#ffffff';
    const darkColor = '#0f172a';
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? darkColor : lightColor);
    }
    if (colorSchemeMeta) {
      colorSchemeMeta.setAttribute('content', theme === 'dark' ? 'dark' : 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}