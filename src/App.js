import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import { act } from '@testing-library/react';

// css groups
  // .App
  // .App-header


const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

// This component is the traditional outer component of the React App. The App component will manage the state for the application and track the status for the game including the winner.

  // App should pass to Board a 2D array of JavaScript objects and Board should use that to render an array of Square components.


// We have provided you a function generateSquares in App.js which generates a 2D array of JavaScript objects with Ids and values (blank strings). These should be used to provide data to Board and Square via props.

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
  const [activePlayer, setActivePlayer] = useState(PLAYER_1); 

  // Wave 2

    // check if won?
  //   Then pass it into the squares as a callback

  const takeTurn = (id) => { // create fn to change square's value on click
    const copySquares = Array.from(squares); // create copy (not just reference) of squares

    const row = Math.floor(id / 3);  
    const col = id % 3;             
    copySquares[row][col].value = activePlayer; // set value to activePlayer (X or O)
    setSquares(copySquares); // pass in new array 
    (activePlayer === PLAYER_1) ? setActivePlayer(PLAYER_2) : setActivePlayer(PLAYER_1); // Change active player, if x, change to o, and if o, change to x         
  };


  const checkForWinner = () => {
    // Complete in Wave 3
    // check if XXX or OOO in each column / row
    // if a yes, player has won
      // display winner
    // if no AND all squares filled
      // declare tie

  }

  const resetGame = () => {
    // Complete in Wave 4
    // reset board - rerun generate squares?
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
        {/* W4 - Add onClick behavior to button to reset */}
      </header>
      <main>
        <Board 
          squares={squares}
          onClickCallback={takeTurn} 
          /> 
        {/* add onClickCallback here */}
      </main>
    </div>
  );
}


export default App;