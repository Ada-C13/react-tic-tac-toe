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
  const [player, setPlayer] = useState(true);

  const onClickCallback = (event) => {
    let updatedGrid = [];
    for(let i = 0; i < squares.length; i++) {
      for(let j = 0; j < squares.length; j++) {
        if (event === squares[i][j].id) {
          squares[i][j]["value"] = (swapPlayers() ? PLAYER_2 : PLAYER_1);
        }
      }
      updatedGrid.push(squares[i]);
    }
    setSquares(updatedGrid);
  }

  function swapPlayers() {
    setPlayer(!player);
    return player;
  };

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
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
