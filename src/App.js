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
  const [squares, setSquares] = useState(generateSquares());
  const [turn, setTurn] = useState(PLAYER_1);
  console.log(squares);
  let newSquares = [];
  const onClickCallback = (id) => {
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
    console.log("clicking", id);
  };

  // const onClickCallback = (event) => {
  //     setSquares(event.target.value);
  //   };


  const checkRow = () => {
    console.log("this is inside checkRow")
    for (let row = 0; row < squares.length; row++) {
      let counter = 0;
      for (let column = 0; column < squares.length; column++) {
        if (squares[row][column].value === turn) {
          counter++;
        }
      }
      if (counter === 3) {
        return true;
      };
    };
  };

  const checkDiagonals = () => {
    const winnerL = squares[0][0].value;
    const winnerR = squares[0][2].value;
    if(squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value !== ' ') {
      return winnerL;
      
    }else if(squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][2].value && squares[0][2] !== '' ) {
      return winnerR;

    };
  };

  const checkColumn = () => {
    for(let row = 0; row < squares.length; row++) {
      let counter = 0;
      for( let column = 0; column < squares.length; column++) {
        if(squares[column][row].value === turn) {
          counter++;
        }
      }
      if (counter === 3) {
        return true;
      }
    }
  };

  const checkForWinner = () => {
    // pass in a ->"turn" on line  77
    // check row -
    // Complete in Wave 3
    if (checkRow(turn === PLAYER_1)) {
      return turn;
    };
    checkDiagonals();
  };
  console.log(checkForWinner());


  // const resetGame = () => {
  //   // Complete in Wave 4
  //   // setSquares() is a function to update squares - use setSquares to reset game

  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
          {/* this button needs an onClick   */}
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
