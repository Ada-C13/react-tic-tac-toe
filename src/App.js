import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
// eslint-disable-next-line
const PLAYER_1 = 'X';
// eslint-disable-next-line
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

//ask if we can add parameters to generate squares

const App = () => {

  const [squares, setSquares] = useState(generateSquares()); //initial state 


  const onClickCallback = (event) => { 
    
    alert(event);
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares.length; j++){
        if(event === squares[i][j].id){
          squares[i][j]["value"] = 'x';
        }
      }
    }
    setSquares(squares);
  }

// eslint-disable-next-line
  const checkForWinner = () => {
    // Complete in Wave 3

  }
// eslint-disable-next-line
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
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
