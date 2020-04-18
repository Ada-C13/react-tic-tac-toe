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
  const [turn, setTurn] = useState(true);
  const [winnerExist, setWinner] = useState(false);
  const [winner,showWinner] = useState("Let's play!");


  const changeSquare = (changedSquare)=>{
      if(winnerExist === false){
        const squareNew =[];
        squares.forEach((row)=>{
          const rowNew = [];
          row.forEach((square)=>{
            if(square.id===changedSquare.id && turn===true && changedSquare.value ===""){
              changedSquare.value = PLAYER_1;
              rowNew.push(changedSquare);
            }
            else if(square.id===changedSquare.id && turn===false && changedSquare.value ===""){
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
      else {
        console.log("winner is", winnerExist);
      }


  }

  
  

  const checkForWinner = (squares) => {

    if(squares[0][0].value===squares[0][1].value && squares[0][1].value===squares[0][2].value && squares[0][0].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][0].value);

    }
    else if 
    (squares[1][0].value===squares[1][1].value && squares[1][1].value===squares[1][2].value && squares[1][0].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[1][0].value);
    }
    else if 
    (squares[2][0].value===squares[2][1].value && squares[2][1].value===squares[2][2].value && squares[2][0].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[2][0].value);
    }
    else if 
    (squares[0][0].value===squares[1][0].value && squares[1][0].value===squares[2][0].value && squares[0][0].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][0].value);
    }
    else if 
    (squares[0][1].value===squares[1][1].value && squares[1][1].value===squares[2][1].value && squares[0][1].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][1].value);
    }
    else if 
    (squares[0][2].value===squares[1][2].value && squares[1][2].value===squares[2][2].value && squares[0][2].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][2].value);
    }
    else if 
    (squares[0][0].value===squares[1][1].value && squares[1][1].value===squares[2][2].value && squares[0][0].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][0].value);
    }
    else if 
    (squares[0][2].value===squares[1][1].value && squares[1][1].value===squares[2][0].value && squares[0][2].value !==""){
      setWinner(true);
      showWinner("The winner is " + squares[0][2].value);
    }

    else if (
      squares[0][0].value !== "" && squares[0][1].value !== "" && squares[0][2].value !== "" && 
      squares[1][0].value !== "" && squares[1][1].value !== "" && squares[1][2].value !== "" && 
      squares[2][0].value !== "" && squares[2][1].value !== "" && squares[2][2].value !== "" )
      {
        showWinner("It's a tie!")
    }
    console.log("who is the winner:", winner);
  }

  

  const resetGame = () => {

    console.log("test");
    setSquares(generateSquares());
    setWinner(false);
    showWinner("Let's play!");
    setTurn(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquare} />
      </main>
    </div>
  );
}

export default App;
