import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square'

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
  const [xTurn, setXTurn] = useState(true);
  const whosUp = (xTurn ? "X" : "O");

  const onClickCallback = (id) => {
    let newSquares = [];
    
    squares.forEach((row) => {
      let newRow = [];
      row.forEach((squareComponent) => {
        if (squareComponent.id === id) {
          squareComponent = {
            id: id,
            value: whosUp
          }
          newRow.push(squareComponent);
        } else {
          newRow.push(squareComponent);
        }
      })
      newSquares.push(newRow);
    });
  
    setSquares(newSquares);
    setXTurn(!xTurn);
    //checkForWinner
  } 

  const checkForWinner = () => {
    // Complete in Wave 3

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
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;