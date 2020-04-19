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
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState("");

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
    

    checkForWinner();
    setTurn(turn + 1);

  };


  const checkForWinner = () => {
    // Complete in Wave 3
    for (let row = 0; row < 3; row++) {
      let rowSum = "";
      for (let col = 0; col < 3; col++) {
        rowSum += squares[row][col].value;
      }
      if (rowSum === "OOO") {
        return setWinner("Player 2");
      } else if (rowSum === "XXX") {
        return setWinner("Player 1");
      }
    }

    for (let col = 0; col < 3; col++) {
      let colSum = "";
      for (let row = 0; row < 3; row++) {
        colSum += squares[row][col].value;
      }
      if (colSum === "OOO") {
        return setWinner("Player 2");
      } else if (colSum === "XXX") {
        return setWinner("Player 1");
      }
    }

    if (squares[0][0].value + squares[1][1].value + squares[2][2].value === "OOO") {
      return setWinner("Player 2");
    } else if (squares[0][0].value + squares[1][1].value + squares[2][2].value === "XXX") {
      return setWinner("Player 1");
    }

    if (squares[2][0].value + squares[1][1].value + squares[0][2].value === "OOO") {
      return setWinner("Player 2");
    } else if (squares[2][0].value + squares[1][1].value + squares[0][2].value === "XXX") {
      return setWinner("Player 1");
    }

    if (turn === 9 && winner === "") {
      setWinner("tie");
    } 
  }

  const resetGame = () => {
    console.log("Resetting the game...");
    setSquares(generateSquares);
    setTurn(1);
    setWinner("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board 
          squares={squares} 
          turn={turn} 
          winner={winner}
          onClickCallback={clickSquare} />
      </main>
    </div>
  );
}

export default App;
