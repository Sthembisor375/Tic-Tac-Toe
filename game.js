import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Square({ value, onClick }) {
  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      {value}
    </div>
  );
}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");

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
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{currentPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner || "None"}</span>
      </div>
      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function getWinner(board) {
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

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game />);
