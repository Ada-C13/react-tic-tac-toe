import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

//squares is an array of 3 arrays
//use the object in each sub-array to create a Square component and return all those components to the Board component generator function
const generateSquareComponents = (squares, onClickCallback) => {
  
  const allSquares = []
  
  squares.forEach((row) => {
    row.forEach((square) => {
        allSquares.push(
          <Square 
          id={square.id} 
          value={square.value} 
          onClickCallback={square.onClickCallback}/>
        );
    });
  });
  
  return allSquares;
}

const Board = ({ squares, onClickCallback }) => {
  console.log(squares)
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
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;