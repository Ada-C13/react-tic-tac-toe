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

const playerTurn = (oldPlayer) => {
  if (oldPlayer == 'X') {
    return 'O';
  }else { 
    return 'X';
  };
};

const App = () => {

  const [squares, setSquares] = useState(generateSquares());  
  const [player, setPlayer] = useState(playerTurn());

  const onClickCallback = (updatedSquare) => {
    const newSquares = [];

    squares.forEach( (row) => { 
      const newRow = []

      row.forEach( (indvSquarePerRow) => {
        if (indvSquarePerRow.id == updatedSquare.id){
          updatedSquare.value = player
          newRow.push(updatedSquare);  
          setPlayer(playerTurn(player));
        }else {
          newRow.push(indvSquarePerRow);
        }
      });
      newSquares.push(newRow);
    });
    
    setSquares(newSquares);
  };

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    // Complete in Wave 4
  }
console.log(squares);

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
