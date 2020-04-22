import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// This component will take a callback function, onClickCallback and a list of 2D array of JavaScript objects with ids, and values and will render Square components each with ids, values and the callback function passed in as props.

const generateSquareComponents = (squares, onClickCallback) => {
  // squares is array of arrays

  // TODO can I refactor to flatten first and then map?

  return squares.flat().map( square => // loop through array of squares
      <Square   // square component
        id={square.id} // id set to props
        value={square.value} // value set to props
        onClickCallback={onClickCallback}  // onClickCallback
      />
    );
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
}

export default Board;