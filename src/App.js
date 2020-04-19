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
  const [player1Turn, setplayer1Turn] = useState(true);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  // callback function that will update the squares that will be 
  // passed to the board which will then be passed to squares


  // add x and o on board
  // use setSquares to change the board
  // need to switch back and forth between two players
  // display whose turn it is
  console.log(squares);
  const updateSquare = (id) => {
    // holds new copy of squares using spread "..." operator
    const squaresNew = [...squares];

    // need to iterate through 2D array
    // 2 loops, first go through rows
    // then within each row go through each column

    for (let i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        let currentSquare = squaresNew[i][j];  
        if (currentSquare.id === id) {
          console.log(currentSquare);

          // square already filled in, exit loop
          if (currentSquare.value !== '') return;

          currentSquare.value = player1Turn? PLAYER_1: PLAYER_2;

          setplayer1Turn(!player1Turn);
        }
      }
    }

    // update board
    setSquares(squaresNew);
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
        <Board 
          squares = {squares} 
          onClickCallback = {updateSquare}
        />
      </main>
    </div>
  );
}

export default App;
