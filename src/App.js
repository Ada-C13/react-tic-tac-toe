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
  //For the future reference: the setSqaure hook:
    // initial vaule of the state object is a 2D array of square objects
    // squares is the current value of the state
    // setSquare is a function to change the state
  const [squares, setSquares] = useState(generateSquares());
  const [winner, setWinner] = useState(null); 
  const [currentPlayer, setPlayer] = useState(true) // the first player is always PLAYER_1
  
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // This updateSquare function is executed when the square is clicked via onClickCallback
  // How do we want to update the square? : mark X or O on the sqaure when it gets clicked

  const updateSquare = (id) =>{
    if (winner === PLAYER_1 || winner === PLAYER_2) return // this will stop the game when we found the winner 
    const newSquareList = squares.slice();
      for (let i = 0; i < newSquareList.length; i++){
        for (let j = 0 ; j < newSquareList.length; j++){
          if (newSquareList[i][j].id === id && newSquareList[i][j].value === ""){
            newSquareList[i][j].value = currentPlayer? PLAYER_1 : PLAYER_2
            setPlayer(!currentPlayer);
            checkForWinner(); 
          }
        } 
      }  
      setSquares(newSquareList)    
  }
  // Complete in Wave 3
  // The responsibility for CheckForWinner is to display the winner in the header section or there is a tie
  // Question: when will the function get invoked? => when we have three O or X lined up in one line
  // If there are three X or O lined up in one line, set the winner 
  // after all square have been clicked if there no three letters lined up in one line, then there is a tie  
    
  const checkForWinner = () => {
    const arrayOfSquareValues = [];
    squares.flat().forEach((square)=>{
      arrayOfSquareValues.push(square.value) 
    })
    //If I have time, I will refactor this codes below
    if (squares[0][0].value === squares[0][1].value && squares[0][0].value === squares[0][2].value && squares[0][0].value !== ""){
      setWinner(squares[0][0].value)
    }else if(squares[1][0].value === squares[1][1].value && squares[1][0].value === squares[1][2].value && squares[1][0].value !== ""){
      setWinner(squares[1][0].value)
    }else if (squares[2][0].value === squares[2][1].value && squares[2][0].value === squares[2][2].value && squares[2][0].value !== ""){
      setWinner(squares[2][0].value)
    }else if (squares[0][0].value === squares[1][0].value && squares[0][0].value === squares[2][0].value && squares[0][0].value !== "" ){
      setWinner(squares[0][0].value)
    }else if (squares[0][1].value === squares[1][1].value && squares[0][1].value === squares[2][1].value && squares[0][1].value !== "" ){
      setWinner(squares[0][1].value)
    }else if (squares[0][2].value === squares[1][2].value && squares[0][2].value === squares[2][2].value && squares[0][2].value !== "" ){
      setWinner(squares[0][2].value)
    }else if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value !== "" ){
      setWinner(squares[0][0].value)
    }else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][2].value !== "" ){
      setWinner(squares[0][2].value)
    }else if(!arrayOfSquareValues.includes("")){
      setWinner("There is a tie")
    }  
  }
  const resetGame = () => {
    // Complete in Wave 4
    // if the Reset Game button is clicked  it wil reset the game and clear all the game squares
    setSquares(generateSquares());
    setPlayer(PLAYER_1)
    setWinner(null)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is...{winner}</h2>
        <button  onClick = {resetGame}>Reset Game </button>
      </header>
      <main>
        <Board squares={squares} onClickCallback = {updateSquare} />
      </main>
    </div>
  );
}
export default App;
