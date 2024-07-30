// src/App.js
import React from 'react';
import './App.css';
import Board from './components/Board';
import Square from './components/Square';

const TicTacToeGame = () => {
  return (
    <div className="tic-tac-toe-game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default TicTacToeGame;
