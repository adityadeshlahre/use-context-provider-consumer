import React, { useEffect, useState } from "react";

type ThemeContextProps = {
  theme: string;
  toggleTheme?: () => void;
};

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: string;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => {
  const [defaultTheme, setDefaultTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        return "dark";
      return theme || "light";
    }
    return theme || "light";
  });

  if (!["light", "dark"].includes(defaultTheme)) {
    throw new Error("Theme must be either 'light' or 'dark'");
  }

  const toggleTheme = () => {
    setDefaultTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (defaultTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", defaultTheme);
    }
  }, [defaultTheme]);
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
