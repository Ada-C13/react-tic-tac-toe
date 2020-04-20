import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
//import Square from './components/Square';

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

  const blankBoard = generateSquares();
  const [squares, setSquares] = useState(blankBoard); // TO DO: initial value, pass in a value not a function
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1); 
  const [numOfSquareOccupied, setNumOfSquareOccupied] = useState(1);
  const [currentWinner, setCurrentWinner] = useState(null); 
  const [gameStatus, setGameStatus] = useState(`Current Player : ${PLAYER_1}`);
  
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateSquare = (rowIndex, colIndex) => {

    const newSquares = [...squares];
    // cease responding to clicks on the board if the game has a winner.
    if (currentWinner !== null) {
      return;
    }
    
    // find that square that's clicked and check whether it's already occupied 
    if (newSquares[rowIndex][colIndex].value === "") {
      newSquares[rowIndex][colIndex].value = currentPlayer;
      setNumOfSquareOccupied(numOfSquareOccupied + 1);
    } else { 
      // if the square already is occupied, just return as it is.
      return;
    }
    
    checkForWinner(newSquares);
    
    setGameStatus(`The winner is ${currentWinner}`);
    //set the state of the board
    setSquares(newSquares);
    nextPlayer();
  } 

  //helper function for switching next player
  const nextPlayer = () => {
    if (currentWinner === null){
      if (currentPlayer === PLAYER_1){
        setCurrentPlayer(PLAYER_2);
        setGameStatus(`Current Player : ${PLAYER_2}`)
      } else {
        setCurrentPlayer(PLAYER_1);
        setGameStatus(`Current Player : ${PLAYER_1}`)
      }  
    }
    
  }

  const checkForWinner = (squares) => {
    // Complete in Wave 3
    //list out all possibel winningLines
    
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6] 
    ];
    const squareArray = squares.flat();
    
    for(let i = 0; i < winningLines.length; i ++) {
      //destruction
      const [a,b,c] = winningLines[i]
      if (squareArray[a].value && squareArray[a].value === squareArray[b].value  && squareArray[b].value ===squareArray[c].value) {
        setCurrentWinner(squareArray[a].value);        
      } 
    }
      
    //check for winner
    if (currentWinner !== null) {
      setGameStatus(`The winner is ${currentWinner}`)
    } else {
      // if all 9 squares are filled but no winner - it's a tie!
      if (numOfSquareOccupied === 9) {
        setCurrentWinner(`no one! It's a tie!!!! :(`)
      }
    }

  }

  const resetGame = () => {
    // Complete in Wave 4
    // resetting all the states in order to restart the game
    setSquares(generateSquares());
    setNumOfSquareOccupied(1);
    setCurrentPlayer(PLAYER_1);
    setCurrentWinner(null);
    setGameStatus(`Current Player : ${PLAYER_1}`);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{gameStatus}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
