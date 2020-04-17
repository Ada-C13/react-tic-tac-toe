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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  // const winner = checkforWinner(board);

  
  // Wave 2: create a method to change the square when clicked
  // then pass it into the squares as a callback
  const handleSquareClick = (id) => {

    // accessing squares correctly?
    // const squaresCopy = [...squares];
    
    // If user clicks an occupied square or if game is won, return
    // if (winner || squaresCopy[i].value === "") return;

    // console.log(squares);
    // squares[row][col].value = PLAYER_1;

    // check that key of the individiual square is the same as the id passed in, 
    // if so, update that square value and push obj into newSquares
    // if not, push the old one in
    // setSquares with newSquares
    // setCurrentPlayer with next currentPlayer -> basic helper function to toggle

    // newSquares = [[], [], []]
    let newSquares = [];

    for (const row of squares) {
      const newRow = [];
      for (const square of row) {
        if (square.id === id && square.value === "") {
          square.value = currentPlayer;
          if(currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2);
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }
        newRow.push(square);
      }
      newSquares.push(newRow);
    } 
    setSquares(newSquares);
    
    
    // squares.forEach((row) => {
    //   row.forEach((square) => {
    //     if (square.id === id) {
    //       console.log(`Hello, clicked ${square.id}!`);
    //       square.value = "O";
    //       console.log(`Value is ${square.value}!`);
    //       newSquares.push(square);
    //     } else {
    //       newSquares.push(square);
    //     }
    //     setSquares(newSquares);
    //   })
    // })

    
  //     //if square value changed, push updated square to newSquares using key
  //     if x is playing, assign x to that square's value using key
  //     if o is playing, assing o to that square's value using key
  //     if (square.value !== ) {
  //       newSquares.push(i);
  //     } else {
  //       newSquares.push(square);
  //     };
  //   })
    
  //   setSquares(newSquares);
  //   setPlayer(!currentPlayer);
  }


// Put an X or an O in clicked square
//     squaresCopy[i] = xIsNext ? 'X' : 'O';
//     setSquares(squaresCopy);
//     setXisNext(!xIsNext);
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