"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Only render after mount to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-full shadow px-3 py-1">
      <button
        aria-label="Light mode"
        className={`p-1 rounded-full ${theme === "light" ? "bg-blue-200 dark:bg-blue-700" : ""}`}
        onClick={() => setTheme("light")}
      >
        <span role="img" aria-label="Light">🌞</span>
      </button>
      <button
        aria-label="Dark mode"
        className={`p-1 rounded-full ${theme === "dark" ? "bg-blue-200 dark:bg-blue-700" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <span role="img" aria-label="Dark">🌚</span>
      </button>
    </div>
  );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // On first load, use system preference. After toggle, persist user choice.
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      // Default to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  // Update <html> class and persist
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      console.log("Dark mode ON");
    } else {
      root.classList.remove("dark");
      console.log("Light mode ON");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Only allow 'light' and 'dark'
  const setTheme = (t: "light" | "dark") => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {children}
    </ThemeContext.Provider>
  );
} 