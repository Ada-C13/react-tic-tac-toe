import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // squares is an array of arrays [[1,2,3], [4,5,6], [7,8,9]]
  // modifying squares so that each index contains a Square Component

  const allSquares = [].concat(...squares);
  console.log(allSquares);
  const answer = allSquares.map(square => {
    return <Square
      key={square.id}
      id={square.id}
      value={square.value}
      onClickCallback={onClickCallback}
    />
  });
  console.log(answer);
  return (answer);

  
  //needs to return one-d array of 9 components
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
