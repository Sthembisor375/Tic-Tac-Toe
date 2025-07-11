import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Square({ value, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "Light" ? "square squareStyleDark" : "square squareStyle"
      }
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Square;
