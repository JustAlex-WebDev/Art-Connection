import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

// Interface definition for the context value
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

// Interface definition for the provider props
interface ThemeProviderProps {
  initialTheme?: string;
  children: ReactNode;
}

// Function to get the initial theme based on local storage or user preference
const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

// Create the ThemeContext with a default value
const defaultThemeContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    window.localStorage.setItem("color-theme", theme);
  };

  // Set initial theme if provided
  useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    } else {
      rawSetTheme(theme);
    }
  }, [initialTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
