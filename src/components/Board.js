import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // squares is an array of arrays [[1,2,3], [4,5,6], [7,8,9]]
  // modifying squares so that each index contains a Square Component
  
  for (const row in squares) {
    for (const col in squares[row]) {
      squares[row][col] = <Square 
                              id={squares[row][col].id}
                              value={squares[row][col].value}
                              // onClickCallback={onClickCallback}
                          />
    }
  }

  return squares;
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
