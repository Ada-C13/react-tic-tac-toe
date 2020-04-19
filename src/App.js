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
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
 
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = ( (squareId) => {

    // will not continue the game if there is a winner
    if (winner) return;

    let copiedSquares = [...squares];
    for(let row of copiedSquares) {
      for(let square of row) {
       if (square.id === squareId && square.value === '') {
          square.value = isXTurn ? PLAYER_1 : PLAYER_2;
          setXTurn(!isXTurn);
          
        } 
      }
    }
    setSquares(copiedSquares);
    checkForWinner(copiedSquares);
  }) 


  const checkForWinner = () => {
    // Complete in Wave 3
    // if rows, cols, diagonal has no same pattern => no winner
    // else the square.value ( PLAYER1 or PLAYER2 ) is the winner
    for(let row = 0; row < squares.length; row++) {
      // for every row:
      // first check if everything in that row is equal
      let r = squares[row];
      if(r[0]["value"] !== '' &&
         r[0]["value"] === r[1]["value"] &&
         r[1]["value"] === r[2]["value"]
         ) {
        setWinner(r[0]["value"]) 
        console.log(r[0]["value"]);
        return r[0]["value"] ; // if we return early here after finding a winner, then stop searching for a winner
      }
    }

      // check cols
    for(let col = 0; col < squares.length; col++ ) {
      let row1 = squares[0];
      let row2 = squares[1];
      let row3 = squares[2];
      
      if(row1[col]["value"] !== '' &&
        row1[col]["value"] === row2[col]["value"] &&
        row2[col]["value"] === row3[col]["value"]
        ) {
        setWinner(row1[col]["value"]);
        console.log(row1[col]["value"]);
        return row1[col]["value"];
      }
    }

    // left diagonal
    if(squares[0][0]["value"] !== '' &&
      squares[0][0]["value"] === squares[1][1]["value"] &&
      squares[1][1]["value"] === squares[2][2]["value"]
      ) {
      setWinner(squares[0][0]["value"]);
      console.log(squares[0][0]["value"]);
      return squares[0][0]["value"]; 
    }
    
    // right diag
    if(squares[0][2]["value"] !== '' &&
      squares[0][2]["value"] === squares[1][1]["value"] &&
      squares[1][1]["value"] === squares[2][0]["value"] 
      ) {
      setWinner(squares[0][2]["value"]);
      console.log(squares[0][2]["value"]);
      return squares[0][2]["value"]; 
    }

    console.log(winner);
    return winner;
  }  

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setXTurn(true);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
  <h2>The winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
