import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let winner = false; 

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

const playerTurn = (oldPlayer) => {
  if (oldPlayer == 'X') {
    return 'O';
  }else { 
    return 'X';
  };
};

const App = () => {

  const [squares, setSquares] = useState(generateSquares());  
  const [player, setPlayer] = useState(playerTurn());

  const onClickCallback = (updatedSquare) => {
    const newSquares = [];

    if (winner ==true) {
      return
    }

    squares.forEach( (row) => { 
      const newRow = []

      row.forEach( (indvSquarePerRow) => {
        if (indvSquarePerRow.id == updatedSquare.id){
          updatedSquare.value = player
          newRow.push(updatedSquare);  
          setPlayer(playerTurn(player));
        }else {
          newRow.push(indvSquarePerRow);
        }
      });
      newSquares.push(newRow);
    });
    
    setSquares(newSquares);
    checkForWinner();
  };

  const arrayEquals = (one, two) => {
    return JSON.stringify(one)==JSON.stringify(two)
  }

  const checkForWinner = () => {
    const flatSquares = squares.flat()
    let list = [];
    const threeX = ["X","X","X"]
    const threeO = ["O","O","O"]

    flatSquares.forEach((square) => {
      if (square.value === '') 
      {
        list.push("n")
      }else {
      list.push(square.value)
      }
    });
    console.log(winner)
    
    if( (arrayEquals([list[0],list[1],list[2]], threeX)) ||
        (arrayEquals([list[3],list[4],list[5]], threeX)) ||
        (arrayEquals([list[6],list[7],list[8]], threeX)) ||
        (arrayEquals([list[0],list[3],list[6]], threeX)) ||
        (arrayEquals([list[1],list[4],list[7]], threeX)) ||
        (arrayEquals([list[2],list[5],list[8]], threeX)) ||
        (arrayEquals([list[0],list[4],list[8]], threeX)) ||
        (arrayEquals([list[2],list[4],list[6]], threeX))
    ) {
      winner = true
      return (
        <div>
        <h2>Player 1 </h2>
      </div>
      )
    }else if (
        (arrayEquals([list[0],list[1],list[2]], threeO)) ||
        (arrayEquals([list[3],list[4],list[5]], threeO)) ||
        (arrayEquals([list[6],list[7],list[8]], threeO)) ||
        (arrayEquals([list[0],list[3],list[6]], threeO)) ||
        (arrayEquals([list[1],list[4],list[7]], threeO)) ||
        (arrayEquals([list[2],list[5],list[8]], threeO)) ||
        (arrayEquals([list[0],list[4],list[8]], threeO)) ||
        (arrayEquals([list[2],list[4],list[6]], threeO))
    ) {
      winner = true
      return (
      <div>
        <h2>Player 2 </h2>
      </div>
      )
    }else if (
      !list.includes("n")
    ) {
      winner = true
      return (
        <div>
        <h2>a tie</h2>
      </div>
      )
    }else {
      return (
        <div>
        <h2> --- </h2>
        </div>
      )
    }
  }

  const resetGame = () => {
    setSquares(generateSquares());
    winner = false;
    setPlayer('X');
   
  }
  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner()} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>  
      </main>
    </div>
  );
}

export default App;
