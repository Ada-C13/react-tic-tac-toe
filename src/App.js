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
  const [current, changeCurrent] = useState(true);
  const onClickCallback = (event) => { 
    
    let newSquares =[];
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares.length; j++){
        
        if(event === squares[i][j].id){
          squares[i][j]["value"] = (switchPlayer() ? PLAYER_2 : PLAYER_1);
        }
      }
      newSquares.push(squares[i]);
    }
    setSquares(newSquares);
  }
  
  

  function switchPlayer() {
    changeCurrent(!current);
    return current;
  };
  

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
