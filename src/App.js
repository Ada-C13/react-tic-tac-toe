import React, { useState, useEffect } from "react";
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
  const [squares, setSquares] = useState(generateSquares());
  const [turn, setTurn] = useState(PLAYER_1);
  const [winner, setWinner] = useState();

  let newSquares = [];
  const onClickCallback = (id) => {
    if (winner) {
      return;
    }
    for (let row = 0; row < squares.length; row++) {
      newSquares.push([]);
      for (let column = 0; column < squares.length; column++) {
        let currentSquare = squares[row][column];
        // find square by id
        // update square value if square is empty
        // set sqares to new squares
        //  use State to keep track of 'turns' and update square accordingly
        if (currentSquare.id === id && currentSquare.value === "") {
          currentSquare.value = turn;
          if (turn === PLAYER_2) {
            setTurn(PLAYER_1);
          } else if (turn === PLAYER_1) {
            setTurn(PLAYER_2);
          }
        }
        newSquares[row].push(currentSquare);
      }
    }

    setSquares(newSquares);
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    checkRowsandColumns();
    checkDiagonals();
    checkForTie();
  };

  useEffect(() => {
    checkForWinner();
  });

  const checkForTie = () => {
    if (winner) {
      return;
    }
    for (let row = 0; row < squares.length; row++) {
      for (let column = 0; column < squares.length; column++) {
        if (squares[row][column].value === "") {
          return;
        }
      }
    }
    setWinner("...There is no winner! It's a Tie!");
  };

  const checkDiagonals = () => {
    if (
      squares[0][0].value === squares[1][1].value &&
      squares[0][0].value === squares[2][2].value &&
      squares[0][0].value !== ""
    ) {
      setWinner(squares[0][0].value);
    } else if (
      squares[0][2].value === squares[1][1].value &&
      squares[0][2].value === squares[2][0].value &&
      squares[0][2].value !== ""
    ) {
      setWinner(squares[0][2].value);
    }
  };

  const checkRowsandColumns = () => {
    for (let row = 0; row < squares.length; row++) {
      for (let column = 0; column < squares.length; column++) {
        if (
          squares[row][0].value === squares[row][1].value &&
          squares[row][0].value === squares[row][2].value &&
          squares[row][0].value !== ""
        ) {
          setWinner(squares[row][0].value);
        } else if (
          squares[0][column].value === squares[1][column].value &&
          squares[0][column].value === squares[2][column].value &&
          squares[0][column].value !== ""
        )
          setWinner(squares[0][column].value);
      }
    }
  };

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setTurn(PLAYER_1);
    setWinner();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner ? <h2>{`The winner is ${winner}`}</h2> : null}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
