import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const initialSquares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {

    initialSquares.push([]);
    for (let col = 0; col < 3; col += 1) {
      initialSquares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }

  }

  return initialSquares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer]   = useState(PLAYER_1);

  const onClickCallback = (row, col) => {
    if (squares[row][col].value === "") {
      console.log('beforeclick', row, col, player, squares[row][col]);
      const updatedSquare = squares;
      updatedSquare[row][col].value = player;
      setSquares(updatedSquare);
      if (player === PLAYER_1) {
        setPlayer(PLAYER_2)
      } else {
        setPlayer(PLAYER_1)
      }
    }
    console.log('afterclick', row, col, player, squares[row][col]);
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
        <h2>Player is {player} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
        
      </main>
    </div>
  );
}

export default App;
