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
        value: ''
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {
  
  const [squares, setSquares] = useState(generateSquares());
  // console.log(squares);
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const [turn, setTurn] = useState(true);
  const [winnerExist, setWinner] = useState(false);
  let winner = "NO ONE";
  const changeSquare = (changedSquare)=>{
      if(winnerExist === false){
        const squareNew =[];
        squares.forEach((row)=>{
          const rowNew = [];
          row.forEach((square)=>{
            if(square.id===changedSquare.id && turn===true){
              changedSquare.value = PLAYER_1;
              rowNew.push(changedSquare);
            }
            else if(square.id===changedSquare.id && turn===false){
              changedSquare.value = PLAYER_2;
              rowNew.push(changedSquare);
            }
            else {
              rowNew.push(square);
            };
          })
          squareNew.push(rowNew);
        })
  
        setSquares(squareNew);
        checkForWinner(squareNew);
        setTurn(!turn);
        
       
      }


  }

  
  

  const checkForWinner = (squares) => {
    // Complete in Wave 3
    let winnerFound = false;
    if(squares[0][0].value===squares[0][1].value && squares[0][1].value===squares[0][2].value && squares[0][0].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][0].value;
    }
    else if 
    (squares[1][0].value===squares[1][1].value && squares[1][1].value===squares[1][2].value && squares[1][0].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[1][0].value;
    }
    else if 
    (squares[2][0].value===squares[2][1].value && squares[2][1].value===squares[2][2].value && squares[2][0].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[2][0].value;
    }
    else if 
    (squares[0][0].value===squares[1][0].value && squares[1][0].value===squares[2][0].value && squares[0][0].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][0].value;
    }
    else if 
    (squares[0][1].value===squares[1][1].value && squares[1][1].value===squares[2][1].value && squares[0][1].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][1].value;
    }
    else if 
    (squares[0][2].value===squares[1][2].value && squares[1][2].value===squares[2][2].value && squares[0][2].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][2].value;
    }
    else if 
    (squares[0][0].value===squares[1][1].value && squares[1][1].value===squares[2][2].value && squares[0][0].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][0].value;
    }
    else if 
    (squares[0][2].value===squares[1][1].value && squares[1][1].value===squares[2][0].value && squares[0][2].value !==""){
      winnerFound = true;
      setWinner(true);
      winner =squares[0][2].value;
    }
    // console.log("has someone won:", winnerFound);
    // console.log("winnerExist:", winnerFound);
    else {
      console.log("no winner");
    }
    console.log("who is the winner:", winner);
  }

  




  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquare} />
      </main>
    </div>
  );
}

export default App;
