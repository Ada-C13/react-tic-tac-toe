import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

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
  // set up state variables
  const [squares, setSquares] = useState(generateSquares());
  const [winner, setWinner] = useState(null);
  const [xTurn, setXTurn] = useState(true);

  const updateSquare = (squareId) => {
    // do not update squares if winner has been declared 
    if(winner !== null) return;

    const updatedSquares = [];
    
    squares.forEach ( (row) => {
      for (const square in row){
        if(row[square].id === squareId){
          // if value at square is empty, it could be either x or o's turn
          if(row[square].value === ""){
            // update accordingly
            if(xTurn){
              row[square].value = PLAYER_1;
              setXTurn(false);
            } else {
              row[square].value = PLAYER_2;
              setXTurn(true);
            }
          }
        }
      }
      // add updated row
      updatedSquares.push(row);
    });

    // update state variables before method is called again
    setWinner(checkForWinner()); // will update status of winner to X, O, or null
    setSquares(updatedSquares);
  }

  const checkForWinner = () => {
    // set up data structure 
    const boardState = squares.flat();

    // define winning possibilities 
    const row1 = boardState[0].value.concat(boardState[1].value).concat(boardState[2].value);
    const row2 = boardState[3].value.concat(boardState[4].value).concat(boardState[5].value);
    const row3 = boardState[6].value.concat(boardState[7].value).concat(boardState[8].value);

    const col1 = boardState[0].value.concat(boardState[3].value).concat(boardState[6].value);
    const col2 = boardState[1].value.concat(boardState[4].value).concat(boardState[7].value);
    const col3 = boardState[2].value.concat(boardState[5].value).concat(boardState[8].value);

    const diag1 = boardState[0].value.concat(boardState[4].value).concat(boardState[8].value);
    const diag2 = boardState[2].value.concat(boardState[4].value).concat(boardState[6].value);

    // 3 in a row wins
    const xWin = "XXX";
    const oWin = "OOO";
  
    // check winner
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
    else return null;
  }

  const resetGame = () => {
    // reset all states
    setWinner(null);
    setSquares(generateSquares());
    setXTurn(true);
  }

  const displayCurrentPlayer = () => {
    if (winner){
      return `Congrats!`
    } else if (xTurn){
      return `Current Player: X`
    } else if (!xTurn){
      return `Current Player: O`
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{displayCurrentPlayer()}</h2>
        <h3>The winner is {winner? `Player ${checkForWinner()}` : "..."} </h3>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;