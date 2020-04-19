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
  const [player, setPlayer] = useState(PLAYER_1);


  const switchPlayers = () => {
    if (player === PLAYER_1) {
      setPlayer(PLAYER_2)
    }
    if (player === PLAYER_2) {
      setPlayer(PLAYER_1)
    }; 
  };

 


  // Wave 2
  let onClickCallback = (squareClickedOnId) => {
    let updatedSquares = []
    
    if (checkForWinner() !== null) {
      return; 
    }
    
    squares.forEach((row) => {
      let updatedSquareRow = []

      row.forEach((square) => {
        if (squareClickedOnId === square.id){
          if (square.value === ''){
          const updatedSquare = {id: squareClickedOnId, value: player }
          updatedSquareRow.push(updatedSquare)
          switchPlayers()
          } else {
            updatedSquareRow.push(square) 
          }
        
        }else {
          updatedSquareRow.push(square)
        };
      });
      updatedSquares.push(updatedSquareRow)
    });
   
    setSquares(updatedSquares);
  };


  const checkForWinner = () => {
    // Complete in Wave 3
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value !== '' && squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value) {
        console.log("Winner Detected")
        return squares[i][0].value;
      } else if (squares[0][i].value !== '' && squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value) {
        console.log("Winner Detected")
        return squares[0][i].value;
      };
    };
    if (squares[1][1].value !== '' && squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value) {
      console.log("Winner Detected")
      return squares[0][0].value;
    };
    if (squares[1][1].value !== '' && squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value) {
      console.log("Winner Detected")
      return squares[0][2].value;
    };
    console.log("NOOO Winner Detected")
    return null
  };


  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setPlayer(PLAYER_1)
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner()}</h2>
        <button onClick = {resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
