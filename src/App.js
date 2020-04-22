import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';


const WINNINGOPTIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

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
  const [itsPlayer1Turn, setPlayer1Turn] = useState(true);
 
  // Wave 2
  // You will need to create a method to change the square 
  // When it is clicked on.
  // Then pass it into the squares as a callback
 

  const updateValue = (squareClickedId) => { // event handler
 
    const squareList = [];

    squares.forEach((row, i) => {
      squareList.push([]);
      row.forEach((square) => {
        if (square.id === squareClickedId.id && square.value === "" && winner === null) {
          // set the state to determine when is player1 or player2
          squareClickedId.value = itsPlayer1Turn ? PLAYER_1 : PLAYER_2;
          
          // Pass the turn to player2. 
          setPlayer1Turn(!itsPlayer1Turn);
         
          squareList[i].push(squareClickedId)
        } else {
          // Return a copy with clean square. 
          squareList[i].push({...square})
        }
      });
    });
    setSquares(squareList);
  }

  // It returns a flat array with the current clicked values. 
  const extractValuesFromSquares = ((setSquares) => {
    const values = [];

    setSquares.forEach((row) => {
      row.forEach((square) => {
        values.push(square.value)
      });
    });
    return values;
  });

  const checkForWinner = (setSquares) => {
    // Complete in Wave 3
    // Invoking the function to get a flat array with the values. 
    const values = extractValuesFromSquares(setSquares);

    for (let i in WINNINGOPTIONS) {
      // Destructuring (Example winningOptions first Iteration[i] i=0 
      // a = 0, b = 1 c = 2)
      const [a, b, c] = WINNINGOPTIONS[i];
      // Return the value of the winner
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        // Return the value of the winner player. 
        return values[a];
      } else if (!values.includes('')) {
        // Return false is there is tie.
        return false;
      }
    }
    // The game is runnig! 
    return null;
  }
  
  const winner = checkForWinner(squares);

  const resetGame = () => { // event handler
    // Complete in Wave 4 
    setSquares(generateSquares());
    setPlayer1Turn(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        { winner === false ?  <h2>Tere is a tie </h2> : <h2>The winner is Player {winner}</h2>}
        {/* Event listener */}
        <button className="reset" onClick={resetGame} >Reset Game </button> 
      </header>
      <main>
         {/* Event listener onClickCallback */}
        <Board squares={squares} onClickCallback={updateValue}/>
      </main>
    </div>
  );
}

export default App;
