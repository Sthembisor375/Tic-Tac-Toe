import "./App.css";
import "./style/Board.css";
import "./style/Square.css";
import Board from "./components/Board";
// import "./components/Dark-Mode-Button";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
