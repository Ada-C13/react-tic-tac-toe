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
  const [player, setPlayer] = useState(PLAYER_1);

  const onClickCallback = (id) => {
    const clickedSquare = [...squares];
    let i = 0
    while (i < squares.length){
      let j = 0
      while (j < squares.length){
        if (squares[i][j].id === id && squares[i][j].value === ""){
          squares[i][j].value = player;
          if (player === PLAYER_1) {
            setPlayer(PLAYER_2);
          } else {
            setPlayer(PLAYER_1);
        }
      }

        j++
      }
      i++
    }
    setSquares(clickedSquare);
      
        }


  const checkForWinner = () => {
    // Complete in Wave 3
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]

  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board
        squares={squares}
        onClickCallback={onClickCallback}
        />
      </main>
    </div>
  );
}

export default App;
