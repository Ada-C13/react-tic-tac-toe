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
//   let result = defaultValue;  // [ [{id:0, value:}, {id:1, value:2}, {}], [{}, {value: }, {}], [{}, {}, {}]]

const App = () => {
  const [squares, setSquares] = useState(generateSquares()); // useState prevents this from being run every render
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [filledSquares, setFilledSquares] = useState(0);
  const [isWinner, setWinner] = useState(false);

  // setSquares allows us to change the value of squares without manipulating it directly

  const onClickCallback = (id) => {
    const newSquares = [...squares]; //clone of squares
    if (isWinner || filledSquares === 9) {
      return;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          newSquares[i][j].id === id &&
          newSquares[i][j].value === ""
        ) {
          // square clicked should be empty and there is no winner

          setFilledSquares(filledSquares + 1);
          newSquares[i][j].value = isPlayerOne ? PLAYER_1 : PLAYER_2;
          setIsPlayerOne(!isPlayerOne);
          // I need to check for a winner
        }
      }
    }
    setSquares(newSquares);
  };

  const allMySquaresValues = () => {
    //each square value(x or o) will be in the index of its ID.
    const values = [];
    squares.forEach((square) => {
      values.push(square[0].value, square[1].value, square[2].value);
    });
    return values;
  };

  const checkForWinner = () => {
    //check for winner wave 3 inspired on this website: https://github.com/kelanwu/react-tic-tac-toe
    const values = allMySquaresValues();

    const lines = [
      //those are the combinations for checking if there is a winner (rows, columns and diagonal)
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; //destructuring the array! a, b, c representes the variables I am assigning each element of the array of lines.
      if (values[a] && values[a] === values[b] && values[b] === values[c]) {
        setWinner(true)
        return;
      }
      return null;
    }
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
        <Board squares={squares} onClickCallback={onClickCallback} />
        <h3>{if(isWinner) }</h3>
      </main>
    </div>
  );
};

export default App;

//complicated solution

// const checkRows = (rows) => {
//   rows.forEach((row) => {
//     let xPoints = 0;
//     let oPoints = 0;

//     for (let i = 0; i < 3; i++) {
//       if (row[i].value === PLAYER_1) {
//         xPoints += 1;
//       } else if (row[i].value === PLAYER_2) {
//         oPoints += 1;
//       }
//     }
//     if (xPoints === 3) {
//       //return true, return the player that won?
//     } else if (oPoints === 3) {
//     }
//   });
// };
