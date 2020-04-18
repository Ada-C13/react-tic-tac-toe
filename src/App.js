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

// Tracks movements in game so far.
let trackBoard = [
  "", "", "",
  "", "", "",
  "", "", "",
];

const App = () => {
  const [itsXTurn, setXturn] = useState(true);
  const [squares, setSquares] = useState(generateSquares());
  const [winner, setWinner] = useState('');
  
  // Updates the correct square for new value.
  const updateSquare = (updatedSquare) => {
    const squaresNew = [];

    for (let row = 0; row < 3; row ++) { // Each row
      squaresNew.push([]);
      for (let col = 0; col < 3; col ++) { // Each column
        if (squares[row][col].id === updatedSquare.id) {
          updatedSquare.value = updateMarker(updatedSquare);
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
      return PLAYER_1;
    } else {
      setXturn(true);
      return PLAYER_2;
    };
  };

  // Check for a winner.
  const checkForWinner = (id, value) => {
    trackBoard[id] = value; // Tracks the tile that was just marked.
    
    // All possible winning combos from the tracking board.
    const possibleCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check the current board against all possible winning combos.
    for (let i = 0; i < possibleCombos.length; i++) {
      const[x, y, z] = possibleCombos[i];
      if (trackBoard[x] && trackBoard[x] === trackBoard[y] && trackBoard[x] === trackBoard[z]) {
        setWinner(trackBoard[x]);
      };
    };
  };  

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ...{winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
