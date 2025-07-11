import LightAndDark from "./Dark-Mode-Button";
import Square from "./Square";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const { theme } = useContext(ThemeContext);

  function handleClick(index) {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXNext ? "X" : "O";
    setBoard(updatedBoard);

    const calculatedWinner = getWinner(updatedBoard);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    } else {
      setIsXNext(!isXNext);
      setCurrentPlayer(isXNext ? "O" : "X");
    }
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setCurrentPlayer("X");
  }

  function renderSquare(i) {
    return <Square value={board[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div
      className={
        theme === "Light"
          ? "gameBoard containerStyle"
          : "gameBoard containerStyleDark"
      }
    >
      <div
        id="statusArea"
        className={
          theme === "Light"
            ? "status instructionsStyle"
            : "status instructionsStyleDark"
        }
      >
        Next player: <span>{currentPlayer}</span>
      </div>
      <div
        id="winnerArea"
        className={
          theme === "Light"
            ? "winner instructionsStyle"
            : "winner instructionsStyleDark"
        }
      >
        Winner: <span>{winner || "None"}</span>
      </div>
      <button
        className={theme === "Light" ? "buttonStyle" : "buttonStyleDark"}
        onClick={handleReset}
      >
        Reset
      </button>
      <div className={theme === "Light" ? "boardStyle" : "boardStyleDark"}>
        <div className="board-row rowStyle">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row rowStyle">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row rowStyle">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <LightAndDark />
    </div>
  );
}

export function getWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default Board;
