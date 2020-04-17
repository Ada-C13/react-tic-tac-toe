import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const squaresArray = [];

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

  // console.log(squaresArray);
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
