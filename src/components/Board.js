import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  let squareList = []

  let i = 0
  while (i < squares.length){
    let j = 0
    while(j < squares.length){
      squareList.push(
        <Square 
        value = {squares[i][j].value}
        id = {squares[i][j].id}
        key = {squares[i][j].id}
        onClickCallback = {onClickCallback}/>
      )
      j++
    }
    i++
  }
  return squareList
}



const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
