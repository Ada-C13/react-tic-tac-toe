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
  const [winner, setCurrentWinner] = useState(null);
  const [count, setCurrenCount] = useState(1);

  const onClickCallback = (id) => {
    if (winner === PLAYER_2 || winner === PLAYER_1) return

    let newSquare = [...squares];
    let i = 0;
    while(i < squares.length){
      let j = 0;
      while (j < squares.length){
        if (squares[i][j].id === id && squares[i][j].value === "" ){
          squares[i][j].value = currentPlayer? PLAYER_1 : PLAYER_2;
          setCurrenCount(count + 1);
          setCurrentPlayer(!currentPlayer);
          setCurrentWinner(checkForWinner());
        }     
        j++
      }
      i++
    }
   setSquares(newSquare);
  }

  const checkForWinner = () => {
    if  (squares[0][0].value !== "" &&
     squares[0][0].value === squares[1][1].value &&
     squares[0][0].value === squares[2][2].value){
      return squares[0][0].value;
    }else if (squares[2][0].value !== "" &&
     squares[2][0].value === squares[1][1].value &&
     squares[2][0].value === squares[0][2].value){
      return squares[1][1].value;
    }else{
      let i = 0
      while(i < squares.length){
        if (squares[i][0].value !== "" &&
          squares[i][0].value === squares[i][1].value &&
          squares[i][0].value === squares[i][2].value){
          return squares[i][0].value;
        }else if (squares[0][i].value !== "" &&
          squares[0][i].value === squares[1][i].value &&
          squares[0][i].value === squares[2][i].value){
          return squares[0][i].value;
        }
        i++
      };
    };
    if (count === 9){
      return "We don't have any winner!"
    } else{
      return "...no winner yet"
    };
  };

  const resetGame = () => {
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setCurrentWinner(null);
    setCurrenCount(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1> 
        <h2>The winner is: {winner} </h2>
        <button onClick = {resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback ={onClickCallback} />
      </main>
    </div>
  );
};

export default App;

