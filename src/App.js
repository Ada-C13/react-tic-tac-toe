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
        value: '-',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [turn, setTurn] = useState(PLAYER_1);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const clickSquare = (clickedSquare) => {
    const updatedSquares = [...squares];
  
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (updatedSquares[row][col].id === clickedSquare.id) {
          updatedSquares[row][col].value = clickedSquare.value;
        }
      }
    }

    console.log(updatedSquares);
    setSquares(updatedSquares);
    turn === "X"? setTurn(PLAYER_2) : setTurn(PLAYER_1);

    checkForWinner();
  };


  const checkForWinner = () => {
    // Complete in Wave 3
   
    for (let row = 0; row < 3; row++) {
      let rowSum = "";
      for (let col = 0; col < 3; col++) {
        rowSum += squares[row][col].value;
      }
      if (rowSum === "OOO") {
        console.log("Circle WIN!");
      } else if (rowSum === "XXX") {
        console.log("Cross WIN!");
      }
    }

    for (let col = 0; col < 3; col++) {
      let colSum = "";
      for (let row = 0; row < 3; row++) {
        colSum += squares[row][col].value;
      }
      if (colSum === "OOO") {
        console.log("Circle WIN!");
      } else if (colSum === "XXX") {
        console.log("Cross WIN!");
      }
    }

    if (squares[0][0].value + squares[1][1].value + squares[2][2].value === "OOO") {
      console.log("Circle WIN!");
    } else if (squares[0][0].value + squares[1][1].value + squares[2][2].value === "XXX") {
      console.log("Cross WIN!");
    }

    if (squares[2][0].value + squares[1][1].value + squares[0][2].value === "OOO") {
      console.log("Circle WIN!");
    } else if (squares[2][0].value + squares[1][1].value + squares[0][2].value === "XXX") {
      console.log("Cross WIN!");
    }
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
        <Board squares={squares} turn={turn} onClickCallback={clickSquare} />
      </main>
    </div>
  );
}

export default App;
