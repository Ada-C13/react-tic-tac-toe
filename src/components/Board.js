import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import './Board.css';


const generateSquareComponents = (squares, onClickCallback) => {

  const squareComponentArray = []; 

  // iterate through an array of arrays of 3 objects each
  squares.forEach ( (row) => {
    row.forEach ( (square) => {
      squareComponentArray.push(< Square id={square.id} value={square.value} onClickCallback={onClickCallback} key={square.id}/>);
    })
  });
  
  return squareComponentArray;
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