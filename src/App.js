import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const winningScenarios = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6]
]

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

  return squares; // array of 3 row arrays with 3 objects
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(null);

  const updateSquares = (id) => {
    let newSquares = [...squares]; // copy squares array
    // look for the clicked Square, then update it's value
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        let selectedSquare = newSquares[row][col];
        if (selectedSquare.id === id) {
          if (selectedSquare.value === '') {
            selectedSquare.value = currentPlayer;
            newSquares[row][col] = selectedSquare;
          }         
        }
      }
    }
    
    setSquares(newSquares); // pass update which is an array of arrays
    setWinner(checkForWinner(squares));
    // switch players
    currentPlayer === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1)
  };


  const checkForWinner = () => {
    // get values of each square in order
    const squareValues = []; 
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        squareValues.push(squares[row][col].value);
      };
    };

    // check against winningScenarios
    for (let line of winningScenarios) {
      // cleaner way to code this?
      if (squareValues[line[0]] === squareValues[line[1]] && squareValues[line[0]] === squareValues[line[2]] && squareValues[line[0]] !== '') {
        // console.log(squareValues[line[0]]);
        return squareValues[line[0]];
      }    
    }
    // TO DO: if there is a winner, update header
    // tie handling: if no winning scenario matched, and all 9 squares are filled, nothing happens?
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
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
