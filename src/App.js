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
  const [currentPlayer, setCurrentPlayer] = useState(true)
  const [winner, setCurrentWinner] = useState(null);
  const [count, setCurrenCount] = useState(0);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = (id) => {
    const newSquare = [...squares] 
    let i = 0
    while(i < squares.length){
      let j = 0
      while (j < squares.length){
        if (squares[i][j].id === id && squares[i][j].value === "" ){
          squares[i][j].value = currentPlayer? PLAYER_1 : PLAYER_2;
          setCurrentPlayer(!currentPlayer)
        }     
        j++
      }
      i++
    }
   setSquares(newSquare);
  }

  const checkForWinner = () => {
    // Complete in Wave 3

    const newSquare = [...squares]
    const flatSquare = newSquare.flat()

    if(flatSquare[0].value !== '' && 
    (flatSquare[0].value === flatSquare[4].value && 
      flatSquare[0].value === flatSquare[8].value) ) {
        setCurrentWinner(flatSquare[0].value)
      }

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner} -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
