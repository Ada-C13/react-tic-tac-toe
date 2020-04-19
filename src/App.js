import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Scorecard from './Scorecard';

const PLAYER_1 = 'X';
let playerOneCount = 0
const PLAYER_2 = 'O';
let playerTwoCount = 0

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
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  // Wave 2
  const updateSquare = (id) => {//Event handler
    let newBoard = [...squares]
    for(let row in newBoard){
      for(let column in newBoard){

        let playerMove = newBoard[row][column];
          
        if (playerMove.id === id && playerMove.value === '') {
          playerMove.value = currentPlayer;

          setSquares(newBoard);
          switchPlayer(currentPlayer);
          setWinner(checkForWinner(newBoard));
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

  const checkForWinner = (newBoard) => {
    // Complete in Wave 3
    let winner = null

    WINNING_LINES.forEach(combination => {
      if(combination.every(num => returnOIndexes(newBoard).includes(num))){
        winner = PLAYER_2;
        playerTwoCount++;
        setTie(true);
        resetGame();
      }
      else if(combination.every(num => returnXIndexes(newBoard).includes(num))){
        winner = PLAYER_1;
        playerOneCount++;
        setTie(true);
        resetGame();
      };
    });
    return winner;
  }

  const inLead = () => {
    if(playerOneCount > playerTwoCount){
      return 'X'
    }
    else if(playerOneCount < playerTwoCount){
      return 'O'
    }
    else if(playerOneCount === playerTwoCount && playerOneCount !== 0 && playerTwoCount !== 0){
      return 'It\'s a tie'
    }
    else {
      return " "
    }
  }
  //Event handler
  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setWinner(null);
  }

  const resetCount = () => {
    playerOneCount = 0;
    playerTwoCount = 0;
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>In the lead ... {inLead()} </h2>
        <div className="Scorecard-section">
          <div className="Scorecard-only">
            <Scorecard value="X" count={playerOneCount}/>
            <Scorecard value="O" count={playerTwoCount}/>
          </div>
          <button className="resetCountButton" onClick={resetCount}>Reset Count</button>
        </div>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
