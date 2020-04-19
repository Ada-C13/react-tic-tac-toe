import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';
import _ from 'lodash';


const generateSquareComponents = (squares, onClickCallback) => {
  // generate array of square components
  // flatten 2D array to 1D
  // methods to flatten a 2D array to 1D array: https://stackoverflow.com/questions/14824283/convert-a-2d-javascript-array-to-a-1d-array
  // then can iterate over each square with Square component
  const squares1DArray = _.flatten(squares);
  return squares1DArray.map((square) => {
    return <Square
      id = {square.id}
      value = {square.value}
      key = {square.id}
      onClickCallback = {onClickCallback}
    />
  });
}

// const Board = (props) => -- same as line below

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
