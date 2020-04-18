import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row++) {
    squares.push([]);
    for (let col = 0; col < 3; col++) {
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

  const onClickCallBack = () => {
      // Wave 2
      //define new 2D array to represent the new game state
      //const newSquares = arrays;
      //setSquares(NewSquares);

      //for now ignore two players just say always player ones turn
      
      // call set squares here with two d array 
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  }
  //we define it in app bc the funtion will nn access to the state of the gam e
  //we need to call the function in squre bc thats where the button is 
  //responsible for knowing when something happens to it 


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
        <Board squares={squares} onClickCallback={onClickCallBack} />
        {/* since not using () onClickCallBacl we are referenceing the function, not calling the function */}
      </main>
    </div>
  );
}

export default App;
