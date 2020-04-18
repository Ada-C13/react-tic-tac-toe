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

let winnner = null
const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(true);
  // const [count, setCurrentPlayer] = useState(0);
  // const [winner, setCurrentWinner]  = useState(null);

  const onClickCallback = (id) => {
    let newSquare = [...squares] 
    let i = 0
    while(i < squares.length){
      let j = 0
      while (j < squares.length){
        if (squares[i][j].id === id && squares[i][j].value === "" ){
          squares[i][j].value = currentPlayer? PLAYER_1 : PLAYER_2;
          setCurrentPlayer(!currentPlayer)
          winnner = checkForWinner()
        }     
        j++
      }
      i++
    }
   setSquares(newSquare);
  }

  let count = 0
  const checkForWinner = () => {
    count = count + 1
    
    if (squares[0][0].value !== "" &&
     squares[0][0].value === squares[1][1].value &&
     squares[0][0].value === squares[2][2].value){
      return squares[0][0].value
    }else if (squares[2][0].value !== "" &&
     squares[2][0].value === squares[1][1].value &&
     squares[2][0].value === squares[0][2].value){
      return squares[1][1].value
    }else{
      let i = 0
      while(i < squares.length){
        if (squares[i][0].value !== "" &&
          squares[i][0].value === squares[i][1].value &&
          squares[i][0].value === squares[i][2].value){
          return squares[i][0].value
        }else if (squares[0][i].value !== "" &&
          squares[0][i].value === squares[1][i].value &&
          squares[0][i].value === squares[2][i].value){
          return squares[0][i].value
        }
        i++
      }
      
    }
    return "No winner yet"
  }

  console.log(count)





  // let winnnner = checkForWinner()

 
  

  

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winnner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback ={onClickCallback} />
      </main>
    </div>
  );
}

export default App;

