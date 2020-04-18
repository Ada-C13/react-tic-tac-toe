import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: "",
        row: row,
        column: col
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setPlayer] = useState(PLAYER_1); // Tracks state of "X" and "O". Sets the initial state to be "X"

  const updateSquare = (squareToUpdate) => {
    if (squareToUpdate.value !== "") {
      return;
    }

    squares[squareToUpdate.row][squareToUpdate.column] =  // Updates squares 2D array with the square which was clicked. 
    {                                                     // Uses row and columns attributes
      ...squareToUpdate, // spread operator 
      value: currentPlayer // updating the value with the current player
    };

    setPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1) // updating the state of the current player

    setSquares(squares); // updating the state of squares
  }
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
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
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
