import React, { createContext, useState, useContext, useEffect } from "react";
import { theme } from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme());

  useEffect(() => {
    if (isDarkMode) {
      setCurrentTheme(theme("dark"));
    } else {
      setCurrentTheme(theme("light"));
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCurrentTheme = () => useContext(ThemeContext);
