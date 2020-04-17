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
  const [xIsNext, setXisNext] = useState(true);
  // const winner = checkforWinner(board);
  
  // Wave 2: create a method to change the square when clicked
  // then pass it into the squares as a callback
  const handleSquareClick = (i) => {
    const squaresCopy = [...squares];
    
    // If user clicks an occupied square or if game is won, return
    // if (winner || squaresCopy[i].value === "") return;

    // Put an X or an O in clicked square
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXisNext(!xIsNext);
}

  //   let newSquares = [];
  //   //iterate through current squares
  //   squares.forEach((square) => {
  //     //if square value changed, push updated square to newSquares
  //     if (square.value !== i.value) {
  //       newSquares.push(i);
  //     } else {
  //       newSquares.push(square);
  //     };
  //   })
    
  //   setSquares(newSquares);
  // }


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
        {/* // add onClickCallback props with our handleSquareClick callback function */}
        <Board squares={squares} onClickCallback={handleSquareClick}/>
      </main>
    </div>
  );
}

export default App;