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
  //For the hook:
    //initial vaule of the state object is a 2D array of square objects
    // squares is the current value of the state
    // setSquare is a function to change the state

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // This updateSquare function is executed when the square is clicked via onClickCallback
  // How do we want to update the square? : mark X or O on it the clicked sqaure

  const [currentPlayer, setPlayer] = useState(PLAYER_1) // the first player is always PLAYER_1
  const updateSquare = (id) =>{
    const newSquareList = squares.slice();
      for (let i = 0; i < newSquareList.length; i++){
        for (let j = 0 ; j < newSquareList.length; j++){
          if (newSquareList[i][j].id === id && newSquareList[i][j].value === ""){
            newSquareList[i][j].value = currentPlayer? PLAYER_1 : PLAYER_2
          }
          setPlayer(!currentPlayer)
        }
      }  
      setSquares(newSquareList)
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
        <Board squares={squares} onClickCallback = {updateSquare} />
      </main>
    </div>
  );
}

export default App;
