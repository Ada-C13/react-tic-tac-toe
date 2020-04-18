import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

//ASSIGNMENT REQ: Update the Board component to render the grid of squares. You will need to complete the generateSquareComponents function in the Board component.
const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  let squareComponents
  return squareComponents = squares.flat().map(((square) => {
      return (
      <Square 
        value={square.value} 
        onClickCallback={onClickCallback} 
        id={square.id}
        key={square.id} 
      />
      )
  }))
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
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
