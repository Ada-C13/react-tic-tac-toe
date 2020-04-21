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
  const [xTurn, setxTurn] = useState(PLAYER_1);

  const onClickCallback = (id) => {
    if (checkForWinner() !== null) return;
    const updatedSquares = [...squares];

    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++) {
        let thisSquare = updatedSquares[i][j];  
        if (thisSquare.id === id) {
          if (thisSquare.value !== '') return;
          thisSquare.value = xTurn? PLAYER_1 : PLAYER_2;
          setxTurn(!xTurn);
        }
      }
    }

    console.log(checkForWinner());
    setSquares(updatedSquares);
  
  }

  const checkForWinner = () => {
    let square = squares.flat().map(square => ({id:square.id, value:square.value }))
    const winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningBoards.length; i++) {
      const [a, b, c] = winningBoards[i];
      if (square[a].value && square[a].value === square[b].value && square[a].value === square[c].value) {
        let player = "";
        square[a].value === 'X' ? player = 'X\'s' : player = 'O"s';
        return player;
      }
    }

    if ( square.every((square) => square.value !== "")) {
      return "CAT"
    }
    return null;
  }

  const resetGame = () => {
    setSquares(generateSquares());
    setxTurn(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner()}!</h2>
        <button className="reset" onClick={resetGame} >Reset Game </button>
      </header>
      <main>
        <Board squares={squares}
        onClickCallback = {onClickCallback}
        />
      </main>
    </div>
  );

}

export default App;
