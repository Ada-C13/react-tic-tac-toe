import React, { useState } from "react";
import "./App.css";

import Board from "./components/Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }
  }
  // returns 2D array of objects
  // an array of array of objects
  return squares;
};

const App = () => {
  // useState(generateSquares) becomes the variable squares
  // useState is setting the initial state of the App component
  // this is a 2D array of objects
  // setSquares() is a function to update squares - use setSquares to reset game
  const [squares, setSquares] = useState(generateSquares());
  console.log(squares);
  let newSquares = [];
  const onClickCallback = (id) => {
    for (let row = 0; row < squares.length; row++) {
      newSquares.push([]);
      for (let column = 0; column < squares.length; column++) {
        let currentSquare = squares[row][column];
        if (currentSquare.id === id) {
          currentSquare.value = PLAYER_1;
        }
        newSquares[row].push(currentSquare);
      }
    }

    // find square by id
    // update value to Player 1
    // set sqares to new updated squares

    // define 2D array to represent the new game state
    // this is an example but it's not 'right' line 40
    // do not worry about taking turns just yet.
    // set this up using Player 1 first. every click is Player 1.
    // const newSquares = [];
    setSquares(newSquares);
    console.log("clicking", id);
  };

  // const onClickCallback = (event) => {
  //     setSquares(event.target.value);
  //   };

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const checkForWinner = () => {
    // Complete in Wave 3
  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        {/* this button needs an onClick */}
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
