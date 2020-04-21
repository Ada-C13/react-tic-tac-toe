import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

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

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on
    // disable click if there's a value?
  //   Then pass it into the squares as a callback

    // create onClickCallback fn to change square's value on click
        // create new array with row/columns with the value of the selected ID
          // change state onclick
            // if player x, change to o
            // if player o, change to x
            // pass in new array 


  const checkForWinner = () => {
    // Complete in Wave 3
    // check if XXX or OOO
    // if a yes, player has won
      // display winner
    // if no AND all squares filled
      // declare tie

  }

  const resetGame = () => {
    // Complete in Wave 4
    // reset board - rerun generate squared?
    // add reset button with onClick
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} /> 
        {/* add onClickCallback here */}
      </main>
    </div>
  );
}


export default App;