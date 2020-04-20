import React, {useState} from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// const onClickCallback = () => {
//   console.log("test")
// }

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // {allSquares}
  
  console.log(onClickCallback)

  const allSquares = squares.map (row =>
    row.map (square =>
      <Square key={square.id} id={square.id} value='X'/>
    )
  )

  return (
    
    <div>
        {allSquares}
    </div>
  )
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
