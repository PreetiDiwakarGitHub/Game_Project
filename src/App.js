import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isXNext, setIsXNext] = useState(true); 
  const winner = calculateWinner(board); 
  const handleClick = (index) => {
    
    if (board[index] || winner) return;

    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext); 
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="info">
        {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
      </div>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};


const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};


const calculateWinner = (board) => {
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

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default App;
