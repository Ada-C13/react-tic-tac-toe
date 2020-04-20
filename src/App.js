import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let xTurn = true; 

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

  const updateSquare = (squareId) => {

    const updatedSquares = [];
    
    squares.forEach ( (row) => {
      for (const square in row){
        if(row[square].id === squareId){

          // if value at square is empty, it could be either x or o's turn
          if(row[square].value === ""){
            // update accordingly
            if(xTurn){
              row[square].value = PLAYER_1;
              xTurn = false;
            } else {
              row[square].value = PLAYER_2;
              xTurn = true;
            }
          }
        }
      }
      updatedSquares.push(row);
    });

    setSquares(updatedSquares);
  }


  const checkForWinner = () => {

    // set up
    const boardState = squares.flat();
    // winning possibilities 
    const row1 = boardState[0].value.concat(boardState[1].value).concat(boardState[2].value);
    const row2 = boardState[3].value.concat(boardState[4].value).concat(boardState[5].value);
    const row3 = boardState[6].value.concat(boardState[7].value).concat(boardState[8].value);

    const col1 = boardState[0].value.concat(boardState[3].value).concat(boardState[6].value);
    const col2 = boardState[1].value.concat(boardState[4].value).concat(boardState[7].value);
    const col3 = boardState[2].value.concat(boardState[5].value).concat(boardState[8].value);

    const diag1 = boardState[0].value.concat(boardState[4].value).concat(boardState[8].value);
    const diag2 = boardState[2].value.concat(boardState[4].value).concat(boardState[6].value);

    const xWin = "XXX"
    const oWin = "OOO"
  
  
    if( (row1 === xWin) || (row2 === xWin) || (row3 === xWin) || 
        (col1 === xWin) || (col2 === xWin) || (col3 === xWin) || 
        (diag1 === xWin) || (diag2 === xWin) ) {
      return "X"; 
    }
    else if( (row1 === oWin) || (row2 === oWin) || (row3 === oWin) || 
             (col1 === oWin) || (col2 === oWin) || (col3 === oWin) || 
             (diag1 === oWin) || (diag2 === oWin) ) {
      return "O"; 
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner()} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
