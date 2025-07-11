import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("Dark");

  function toggleTheme() {
    theme === "Dark" ? setTheme("Light") : setTheme("Dark");
    // document.body.className = theme === "Dark" ? "light-mode" : "dark-mode";
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
