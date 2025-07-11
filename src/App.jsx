import "./App.css";
import "./style/Board.css";
import "./style/Square.css";
import Board from "./components/Board";
import LightAndDark from "./components/Dark-Mode-Button.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
