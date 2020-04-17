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
    
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    // console.log(id) 
    // When the user clicks first clicks on a square it should set the square's value to the proper x or o depending on the current player's turn.
    
    // find the square with id 
    // put player on value 
    const newSquares = [];

    for (let row of squares) {
      const newRow = [];
      newSquares.push(newRow);
      for (let col of row) {
        const newCol = {...col}
        if (newCol.id === id) {
          if (newCol.value !== "") {
            return;
          }
          newCol.value = player
        };
        newRow.push(newCol);
      };
    };
    
    setSquares(newSquares);
    // set player again
    const newPlayer = (player === PLAYER_1) ? PLAYER_2 : PLAYER_1
    setPlayer(newPlayer);

    // checkForWinner(newSquares);
  }

  // put in a param
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
        {/* {console.log(generateSquares())} */}
      </main>
    </div>
  );
}

export default App;
