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
  const [winner, setWinner] = useState("No one! it's a tie!!");
    
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    const newSquares = [];

    for (let row of squares) {
      const newRow = [];
      newSquares.push(newRow);
      for (let col of row) {
        const newCol = {...col}
        if (newCol.id === id) {
          if (newCol.value !== "" || 
            winner === "Player 1" ||
            winner === "Player 2") {
            return;
          }
          newCol.value = player
        };
        newRow.push(newCol);
      };
    };
    
    setSquares(newSquares);
    checkForWinner(newSquares);

    const newPlayer = (player === PLAYER_1) ? PLAYER_2 : PLAYER_1
    setPlayer(newPlayer);
  }

  const checkForWinner = (squares) => {
    // Complete in Wave 3
    const values = squares.flat().map((square) => square.value);

    const threeX = ['X','X','X'];
    const threeO = ['O','O','O'];

    if (arrayEquals([values[0],values[1],values[2]], threeX) ||
      arrayEquals([values[3],values[4],values[5]], threeX) ||
      arrayEquals([values[6],values[7],values[8]], threeX) ||
      arrayEquals([values[0],values[3],values[6]], threeX) ||
      arrayEquals([values[1],values[4],values[7]], threeX) ||
      arrayEquals([values[2],values[5],values[8]], threeX) ||
      arrayEquals([values[0],values[4],values[8]], threeX) ||
      arrayEquals([values[2],values[4],values[6]], threeX)) {
        return setWinner("Player 1")
    } else if (arrayEquals([values[0],values[1],values[2]], threeO) ||
        arrayEquals([values[3],values[4],values[5]], threeO) ||
        arrayEquals([values[6],values[7],values[8]], threeO) ||
        arrayEquals([values[0],values[3],values[6]], threeO) ||
        arrayEquals([values[1],values[4],values[7]], threeO) ||
        arrayEquals([values[2],values[5],values[8]], threeO) ||
        arrayEquals([values[0],values[4],values[8]], threeO) ||
        arrayEquals([values[2],values[4],values[6]], threeO)) {
        return setWinner("Player 2")
    } else {
        return setWinner("No one! it's a tie!!")
    };
  }

  const arrayEquals = (one, two) => {
    return JSON.stringify(one) === JSON.stringify(two);
  }

  const resetGame = () => {
    // Complete in Wave 4
    window.location.reload();
    // found this on upmostly.com
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button  onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
