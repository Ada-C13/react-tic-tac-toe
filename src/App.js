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
 
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = ( (squareId) => {
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


  const checkForWinner = (newSquares) => {
    // Complete in Wave 3
    // if rows, cols, diagonal has no same pattern => no winner
    // else the square.value ( PLAYER1 or PLAYER2 ) is the winner
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for(let pattern of winningPatterns) {
      console.log("testing print" + newSquares[pattern[0]].value);
      console.log(newSquares);
      // if (newSquares[pattern[0]]["value"] &&
      //     newSquares[pattern[0]["value"]] === newSquares[pattern[2]["value"]] &&
      //     newSquares[pattern[1]["value"]] === newSquares[pattern[2]["value"]]
      //   ) {
      //     console.log('got a winner')
      //     return newSquares[pattern[0]];
      //   }
      }  
    console.log('no winner');
    return null;

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
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
