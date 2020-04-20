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
  return squares;
};

const App = () => {
  const [player, setPlayer] = useState("player_1");
  const [squares, setSquares] = useState(generateSquares());
  const [winner, setWinner] = useState(null);

  // wave 2
  //  changes the square when it is clicked on.
  //  Then pass it into the squares as a callback
  const onClickCallback = (squareId) => {
    if (winner !== null) {
      return;
    }

    let gameValue = "";
    if (player === "player_1") {
      gameValue = PLAYER_1;
    } else if (player === "player_2") {
      gameValue = PLAYER_2;
    }

    const newSquares = [];
    squares.forEach((row) => {
      const newRow = [];
      row.forEach((square) => {
        if (square.id === squareId) {
          //updates the square
          const newSquare = {
            id: square.id,
            value: gameValue,
          };
          newRow.push(newSquare);
        } else {
          newRow.push(square);
        }
      });
      newSquares.push(newRow);
    });

    checkForWinner(newSquares);
    setSquares(newSquares);

    let nextPlayer = "";
    if (player === "player_1") {
      nextPlayer = "player_2";
    } else if (player === "player_2") {
      nextPlayer = "player_1";
    }
    setPlayer(nextPlayer);
  };

  // wave 3
  const checkForWinner = (squares) => {
    const winningRows = [
      [squares[0][0], squares[0][1], squares[0][2]],
      [squares[1][0], squares[1][1], squares[1][1]],
      [squares[2][0], squares[2][1], squares[2][2]],
      [squares[0][0], squares[1][0], squares[2][0]],
      [squares[0][1], squares[1][1], squares[2][1]],
      [squares[0][2], squares[1][2], squares[2][2]],
      [squares[0][0], squares[1][1], squares[2][2]],
      [squares[0][2], squares[1][1], squares[2][0]],
    ];

    for (let i = 0; i < winningRows.length; i++) {
      const [a, b, c] = winningRows[i];
      console.log(a.value);
      if (a.value && a.value === b.value && a.value === c.value) {
        //return a.value;
        if (a.value === PLAYER_1)  {
          setWinner("player_1");

        } else if (a.value === PLAYER_2) {
          setWinner("Player_2");
        // if (a.value === "o") setWinner("Player_2");
        }
      }
    } // otherwise
    return null;
  };

  // wave 4
  const resetGame = () => {
    setPlayer("player_1");
    setSquares(generateSquares());
    setWinner(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board
          squares={squares}
          onClickCallback={onClickCallback}
          player={player}
        />
      </main>
    </div>
  );
};

export default App;
