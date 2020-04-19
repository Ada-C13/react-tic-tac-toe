import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


// It returs and array with Square components with prop. 
const generateSquareComponents = (squares, onClickCallback) => {
  const squaresArray = [];
  // Iteraring over the 2D array from the parent App. 
  squares.forEach((row) => {
    row.forEach((square)=> {

      squaresArray.push(
        <Square
          key={square.id}
          id={square.id}
          value={square.value}
          onClickCallback={onClickCallback}
        />
      );
    })
  });

  // An array with square components. 
  return squaresArray;
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
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
