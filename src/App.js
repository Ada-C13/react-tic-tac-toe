import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let TURN = 0

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());

  const updateSquare = (id) => {
    const newSquares = squares.map((row) => {
      const newRow = []
      row.forEach((square) => {
        if (square.id === id && square.value === '') {
          TURN++
          if (TURN % 2 === 1) {
            square.value = PLAYER_1
          } else {
            square.value = PLAYER_2
          }
        }
        newRow.push(square)
      })

      return newRow
    })

    setSquares(newSquares)
  }

  const checkForWinner = () => {
    // Complete in Wave 3

  }

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
        <Board 
          squares={squares} 
          onClickCallback={updateSquare}
          />
      </main>
    </div>
  );
}

export default App;
