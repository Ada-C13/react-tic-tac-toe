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
  // const [squaresPlayed, setSquaresPlayed] = useState(0); // TODO use to declare tie if is === 8 and winner === '' NOTE: Ada example doesn't do this: https://adagold.github.io/react-tic-tac-toe/
  const [winner, setWinner] = useState('');

  const takeTurn = (id) => { // create fn to change square's value on click
    if (winner !== '') return;     // TODO check if won?

    const copySquares = Array.from(squares); // create copy (not just reference) of squares
    
    // TODO can click square with value and it will change - should not

    const row = Math.floor(id / 3);  
    const col = id % 3;             
    copySquares[row][col].value = activePlayer; // set value to activePlayer (X or O)
    setSquares(copySquares); // pass in new array   
     // setSquaresPlayed(squaresPlayed +1);
    checkForWinner(copySquares);   
    (activePlayer === PLAYER_1) ? setActivePlayer(PLAYER_2) : setActivePlayer(PLAYER_1); // Change active player, if x, change to o, and if o, change to x  
  };


  // const checkForWinner = () => {
  function checkForWinner(boxes) {
    // check if XXX or OOO in each column / row / diagonal
    // if a yes, player has won
      // display winner
    // ! ADA example doesn't do the following
    // if no AND all squares played
      // declare tie

    // code adapted from tic-tac-toe tutorial at https://medium.com/@shifrb/how-to-build-tic-tac-toe-with-react-hooks-ca37f6040022  
      const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      // go over all possibly winning lines and check if they consist of only X's/only O's
      for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        // return boxes[a];
        return setWinner(activePlayer);
        }
      }
      return '';
    }

  const resetGame = () => {
    setSquares(generateSquares()); // reset board
    setActivePlayer(PLAYER_1);
    // setSquaresPlayed(0);
    setWinner();
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner ? `The winner is ${winner}` : `Make your move, ${activePlayer}!`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board 
          squares={squares}
          onClickCallback={takeTurn} 
          />
      </main>
    </div>
  );
}


export default App;