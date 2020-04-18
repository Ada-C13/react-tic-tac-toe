import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
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
          console.log(returnXIndexes(newBoard));
          console.log(returnOIndexes(newBoard));
          console.log(checkForWinner(newBoard));
          return;
        };
      };
  };
};

  function switchPlayer(player) {
    player === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
  }

  function returnXIndexes(board) {

    let checkWinner = [...squares].flat()
    let indexXCollection = []

    checkWinner.filter(function(square) {
      if(square.value === 'X'){
        indexXCollection.push(square.id)
      };
    });
    return indexXCollection;
  }

  function returnOIndexes(board) {

    let checkWinner = [...squares].flat()
    let indexOCollection = []

    checkWinner.filter(function(square) {
      if(square.value === 'O'){
        indexOCollection.push(square.id)
      };
    });
    return indexOCollection;
  }

  // For wave 3, you will add the game logic to detect if a player has won or if there is a tie (all squares filled and with no winner). To do this you will complete the checkForWinner method and display the winner in the header section. The game should also cease responding to clicks on the board if the game has a winner.
  const checkForWinner = (newBoard) => {
    // Complete in Wave 3
    let winner = null

    WINNING_LINES.forEach(combination => {
      // if(returnOIndexes(newBoard).includes(combination)){
      //   winner = PLAYER_2
      // }
      // else if(returnXIndexes(newBoard).includes(combination)){
      //   winner = PLAYER_1
      // }
      // if(returnOIndexes(newBoard).includes(combination)){
      //  return true;}
      // else if(returnXIndexes(newBoard).includes(combination)){
      //   return true;}
      if(combination.every(e => returnOIndexes(newBoard).includes(e))){
        winner = PLAYER_2;
        console.log('THIS TIME IT WAS '+ PLAYER_2 )
      }
      else if(combination.every(e => returnXIndexes(newBoard).includes(e))){
        winner = PLAYER_1;
        console.log('THIS TIME IT WAS '+ PLAYER_1 )
      };
      // console.log(returnOIndexes(newBoard).includes(combination))
    });
    // console.log(winner)
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
        {/* Event listener */}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
