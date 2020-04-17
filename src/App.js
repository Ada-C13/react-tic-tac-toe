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
        value: '',
      });
      currentId += 1;
    }
  }
 
  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [itsPlayer1Turn, setPlayer1Turn] = useState(true);
 
  // Wave 2
  // You will need to create a method to change the square 
  const updateValue = (squareClickedId) => {
    const squareList = [];

    squares.forEach((row, i) => {
      // console.log(row);
      // console.log(i);
      squareList.push([]);
      // squareList.push(row)
      // console.log(squareList);
      row.forEach((square) => {
        // console.log(square)
        if (square.id === squareClickedId.id) {
          squareClickedId.value = "x"
          squareList[i].push(squareClickedId)
          // squareList.push(squareClickedId)
        } else {
          squareList[i].push(square)
        }
      });
    });
    console.log(squareList);
    setSquares(squareList);
  }
  
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
        <Board squares={squares} onClickCallback={updateValue}/>
      </main>
    </div>
  );
}

export default App;
