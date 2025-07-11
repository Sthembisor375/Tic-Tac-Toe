import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function LightAndDark() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={theme === "Light" ? "buttonStyle" : "buttonStyleDark"}
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
}

export default LightAndDark;
