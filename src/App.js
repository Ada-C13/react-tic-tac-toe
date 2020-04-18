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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (id) => {
    
    if (winner) return;
    let newSquares = [];

    for (const row of squares) {
      const newRow = [];
      for (const square of row) {
        if (square.id === id && square.value === "") {
          square.value = currentPlayer;
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2);
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }

        newRow.push(square);
      }

      newSquares.push(newRow);
    } 

    checkForWinner();
    setSquares(newSquares);
  }

  const checkForWinner = () => {

    for (let i = 0; i < 3; i++) {
      // check rows for winner
      if (squares[i][0].value !== "" &&
        squares[i][0].value === squares[i][1].value &&
        squares[i][0].value === squares[i][2].value) {
          // winner = squares[i][0].value;
          console.log("Winner was found!");
          setWinner(currentPlayer);
          return currentPlayer;
        }

      // check columns for winner
      if (squares[0][i].value !== "" &&
        squares[0][i].value === squares[1][i].value &&
        squares[0][i].value === squares[2][i].value) {
          // winner = squares[0][i].value;
          console.log("Winner was found!");
          setWinner(currentPlayer);
          return currentPlayer;
        }

      // check downward diagonal for winner
        if (squares[0][0].value !== "" &&
          squares[0][0].value === squares[1][1].value &&
          squares[1][1].value === squares[2][2].value) {
            console.log("Winner was found!");
            setWinner(currentPlayer);
            return currentPlayer;
        }

      // check upward diagonal for winner
        if (squares[2][0].value !== "" &&
          squares[2][0].value === squares[1][1].value &&
          squares[2][0].value === squares[0][2].value) {
            console.log("Winner was found!");
            setWinner(currentPlayer);
            return currentPlayer;
        }
    }

    return null;
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h4>Next up: {currentPlayer}</h4>
        <h2>The winner is ... {winner}! </h2>
        <button>Reset Game</button>
      </header>
      <main>
        {/* // add onClickCallback props with our handleSquareClick callback function */}
        <Board squares={squares} onClickCallback={handleSquareClick}/>
      </main>
    </div>
  );
}

export default App;