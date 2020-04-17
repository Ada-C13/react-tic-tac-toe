import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

// Generates squares of the board.
const generateSquares = () => {
  const squares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) { // Each row
    squares.push([]);
    for (let col = 0; col < 3; col += 1) { // Each column
      squares[row].push({
        id: currentId,
        value: '',
        disabled: false
      });
      currentId += 1;
    }
  }

  return squares;
}

let trackBoard = [
  "", "", "",
  "", "", "",
  "", "", "",
];

const App = () => {
  const [itsXTurn, setXturn] = useState(true);
  const [squares, setSquares] = useState(generateSquares());
  
  // Updates the correct square for new value.
  const updateSquare = (updatedSquare) => {
    const squaresNew = [];

    for (let row = 0; row < 3; row ++) { // Each row
      squaresNew.push([]);
      for (let col = 0; col < 3; col ++) { // Each column
        if (squares[row][col].id === updatedSquare.id) {
          const newMarker = updateMarker(updatedSquare);
          updatedSquare.value = newMarker;
          checkForWinner(updatedSquare.id, updatedSquare.value);
          squaresNew[row].push(updatedSquare);
        } else {
          squaresNew[row].push(squares[row][col]);
        };
      };
    };

    setSquares(squaresNew);
  };

  // Updates the value for the new square.
  const updateMarker = (updatedSquare) => {
    if (itsXTurn) {
      setXturn(false);
      return 'X';
    } else {
      setXturn(true);
      return 'O';
    };
  };

  const checkForWinner = (id, value) => {
    trackBoard[id] = value;
    console.log(trackBoard);
  };

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
