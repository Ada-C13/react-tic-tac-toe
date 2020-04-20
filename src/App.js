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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
 
  // Wave 2

  const onClickCallback = ( (squareId) => {

    // will not continue the game if there is already a winner
    if (winner) return;

    let copiedSquares = [...squares];
    for(let row of copiedSquares) {
      for(let square of row) {
       if (square.id === squareId && square.value === '') {
          // assign square.value base on the current valuse of isXTurn
          square.value = isXTurn ? PLAYER_1 : PLAYER_2;
          setXTurn(!isXTurn);
          isXTurn ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
        } 
      }
    }
    setSquares(copiedSquares);
    checkForWinner(copiedSquares);
  }) 


  const checkForWinner = () => {
    // Complete in Wave 3
    // check rows
    for(let row = 0; row < squares.length; row++) {
      let r = squares[row];
      if(r[0]["value"] !== '' &&
         r[0]["value"] === r[1]["value"] &&
         r[1]["value"] === r[2]["value"]
         ) {
        setWinner(r[0]["value"]);
        return r[0]["value"] ;
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
        return row1[col]["value"];
      }
    }

    // left diagonal
    if(squares[0][0]["value"] !== '' &&
      squares[0][0]["value"] === squares[1][1]["value"] &&
      squares[1][1]["value"] === squares[2][2]["value"]
      ) {
      setWinner(squares[0][0]["value"]);
      return squares[0][0]["value"]; 
    }
    
    // right diag
    if(squares[0][2]["value"] !== '' &&
      squares[0][2]["value"] === squares[1][1]["value"] &&
      squares[1][1]["value"] === squares[2][0]["value"] 
      ) {
      setWinner(squares[0][2]["value"]);
      return squares[0][2]["value"]; 
    }

    return winner;
  }  

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setXTurn(true);
    setWinner(null);
    setCurrentPlayer(PLAYER_1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
      { winner === null ?  <h2>Current Player {currentPlayer} </h2> : <h2>The winner is {winner}</h2>}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
