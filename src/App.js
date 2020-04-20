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
    };
  };
  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [itsXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(undefined)

  const takeTurns = () => {
    setXTurn(!itsXTurn);
  };

  

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    const squaresList = [];
    for (let row of squares) {
      const new_row = [];
      for (let square of row) {
        // Update the value of a square if its id is the same as the passed id from the 'Square' component
        if (square.id === id) {
          let updatedSquare = square;
          updatedSquare.value = itsXTurn ? PLAYER_1 : PLAYER_2;
          new_row.push(updatedSquare);
        } else {
          new_row.push(square)
        };
      };
      squaresList.push(new_row);
    };
    setSquares(squaresList);
    takeTurns();
    checkForWinner();
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    const winningIndexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // Iterate over the winning indexes and check if there is a winning combination in the current square indexes with values
    // Flatten the current squares array
    let flattenedSquares = squares.flat();
    for (let i = 0; i < winningIndexes.length; i++) {
      // Array destructuring, abc store indexes
      const [a, b, c] = winningIndexes[i];
      if (flattenedSquares[a].value && flattenedSquares[a].value === flattenedSquares[b].value && flattenedSquares[a].value === flattenedSquares[c].value) {
        setWinner(`The winner is ${flattenedSquares[a].value.toUpperCase()}`);
        return;
      };
    };
    // Make sure there are some empty squares. If none, display 'No winner'
    let noValueSquare = 0;
    for (let square of flattenedSquares) {
      if (square.value === '') {
        noValueSquare++
      };
    };
    if (noValueSquare === 0) {setWinner('No winner!')}
  };    

  const resetGame = () => {
    // Complete in Wave 4
    setWinner(undefined);
    setXTurn(true);
    let squares = generateSquares();
    setSquares(squares);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner} </h2>
        <button onClick={resetGame}> Reset Game </button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} winner={winner}/> {/* Squares and function are passed as props to Board */}
      </main>
    </div>
  );
}

export default App;
