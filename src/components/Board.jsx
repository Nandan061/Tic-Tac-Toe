// src/components/Board.js
import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);
  const gameOver = squares.every((square) => square !== null);

  return (
    <div>
      {winner ? (
        <div>
          <div className="status">Winner: {winner}</div>
          <button className="play-again-button" onClick={handleRestart}>
            Play Again
          </button>
        </div>
      ) : gameOver ? (
        <div className="status">Game Over</div>
      ) : (
        <div className="status">Next turn: {isXNext ? 'X' : 'O'}</div>
      )}
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => (
              <Square
                key={row * 3 + col}
                value={squares[row * 3 + col]}
                onClick={() => handleClick(row * 3 + col)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
