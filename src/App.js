import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square'

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
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

//squares is the result of generateSquares, setSqares is the method to use to update the state of sqares
const App = () => {

  const [squares, setSquares] = useState(generateSquares());  // this passes in the array of arrays of squares
  const [player, setPlayer] = useState(PLAYER_1) // this sets player as player 1

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
        <Board squares={squaresList} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
