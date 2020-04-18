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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateSquare = (id) => {//Event handler
    let newBoard = [...squares]
    for(let row in newBoard){
      for(let column in newBoard){

        let playerMove = newBoard[row][column];
          
        if (playerMove.id === id && playerMove.value === '') {
          playerMove.value = currentPlayer;


          setSquares(newBoard);
          switchPlayer(currentPlayer);
          return;
        };
      };
  };
};

  function switchPlayer(player) {
    player === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
  }

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  //Event handler
  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... ${currentPlayer} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
