import React, { useState, useEffect } from "react";
import "./App.css";

import Board from "./components/Board";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const generateSquares = () => {
  const squares = [];

  let currentId = 0;
  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: "",
      });
      currentId += 1;
    }
  }
  return squares;
};

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [turn, setTurn] = useState(PLAYER_1);
  const [winner, setWinner] = useState();

  let newSquares = [];
  const onClickCallback = (id) => {
    if(winner) { return }
    for (let row = 0; row < squares.length; row++) {
      newSquares.push([]);
      for (let column = 0; column < squares.length; column++) {
        let currentSquare = squares[row][column];
        if (currentSquare.id === id && currentSquare.value === "") {
          currentSquare.value = turn;
          if (turn === PLAYER_2) {
            setTurn(PLAYER_1);
          } else if (turn === PLAYER_1) {
            setTurn(PLAYER_2);
          }
        }
        newSquares[row].push(currentSquare);
      }
    }
    setSquares(newSquares);
  };
  
  const checkForWinner = () => {
    // Complete in Wave 3
    checkRowsandColumns();
    checkDiagonals();
    checkForTie();
  };
  // https://reactjs.org/docs/hooks-effect.html
  // JavaScript was completing b/4 React could update the DOM.
  // Implementing useEffect allows the program to
  // perform our effects after React has updated the DOM.
  useEffect(() => {
    checkForWinner();
  });

  const checkForTie = () => {
    if(winner) { return }
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares.length; j++){ 
        if(squares[i][j].value === '') {
          return;
        }
      }
    }
    setWinner('...There is no winner! It\'s a Tie!');
  };
    
  const checkDiagonals = () => {
    if(squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value !== '') 
    {
      setWinner(squares[0][0].value);
      
    }else if(squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value && squares[0][2].value !== '') 
    {
      setWinner(squares[0][2].value);
    }
  };
  
  const checkRowsandColumns  = () =>  {
    for(let i = 0; i < squares.length; i++){
      for(let j = 0; j < squares.length; j++){
        if(squares[i][0].value === squares[i][1].value && squares[i][0].value === squares[i][2].value && squares[i][0].value !== '' )
        {
          setWinner(squares[i][0].value);
        }else if(squares[0][j].value === squares[1][j].value && squares[0][j].value === squares[2][j].value && squares[0][j].value !== '')
          setWinner(squares[0][j].value);
      }
    }
  };
  
  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setTurn(PLAYER_1);
    setWinner();
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner ? <h2>{`The winner is ${winner}`}</h2>: null}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
