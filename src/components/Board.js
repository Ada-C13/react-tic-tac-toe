import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';
import _ from 'lodash';


const generateSquareComponents = (squares, onClickCallback) => {
  // generate array of square components
  // flatten 2D array to 1D
  // then can iterate over each square with Square component
  const squares1DArray = _.flatten(squares);
  return squares1DArray.map((square) => {
    return <Square
      id={square.id}
      key={square.id}
    />
  });
}

// const Board = (props) => -- same as line below

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
