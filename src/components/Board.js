import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const squaresArray = [];
  // console.log(squaresArray);
  console.log(onClickCallback);

  squares.forEach((row) => {
    row.forEach((square)=> {
      // console.log(square)

      squaresArray.push(
        <Square
          key={square.id}
          id={square.id}
          value={square.value}
          onClickCallback={square.onClickCallback}
        />
      );
    })
  });
  console.log(squaresArray);
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
