import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let WINNER = '';
let TURN = 0;

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
    if(WINNER) {
      return;
    }

    const newSquares = squares.map((row) => {
      const newRow = [];
      row.forEach((square) => {
        if (square.id === id && square.value === '') {
          TURN++;
          if (TURN % 2 === 1) {
            square.value = PLAYER_1;
          } else {
            square.value = PLAYER_2;
          }
        }
        newRow.push(square);
      });
      return newRow;
    });

    setSquares(newSquares);
    if (TURN > 4) {
      checkForWinner();
    }
  }

  const checkForWinner = () => {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const allSquares = squares.flat();

    winConditions.forEach((condition) => {
      let threeInARow = [];
      condition.forEach((i) => {
        threeInARow.push(allSquares[i]);
      })
      if (threeInARow.every(obj => obj.value === 'X')) {
        WINNER = "Player1 is the Winner!";
      } else if (threeInARow.every(obj => obj.value === 'O')) {
        WINNER = "Player2 is the Winner!";
      }
    });

    if (WINNER) {
      return;
    } else if (allSquares.every(obj => obj.value !== '')) {
        WINNER = "It's a tie!";
    }
  }

  const resetGame = () => {
    setSquares(generateSquares());
    WINNER = '';
    TURN = 0;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{WINNER}</h2>
        <button onClick={resetGame}>Reset Game</button>
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
