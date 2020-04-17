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
      squares[row].push({ id: currentId, value: "" });
      currentId += 1;
    }
  }
  return squares;
};

// const useState = (defaultValue) => {
//   let result = defaultValue;  // [ [{}, {id: 5}, {}], [{}, {value: }, {}], [{}, {}, {}]]

//   const changeValue = (newValue) => {
//     result = newValue
//   }

//   return [result, changeValue]
// }

const App = () => {
  const [squares, setSquares] = useState(generateSquares()); // useState prevents this from being run every render
  // setSquares allows us to change the value of squares without manipulating it directly

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = () => {
    const newSquares = [...squares];
    newSquares[0][1]["value"] = "X";

    setSquares(newSquares);
  };

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
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} />
      </main>
    </div>
  );
};

export default App;

//if PLAYER_1 or PLAYER_2 click the square, changes that square value and button clicked is no longer available.
//the id makes the square unique?
//there are 9 squares
