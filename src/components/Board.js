import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// css groups
  // div.grid


// This component will take a callback function, onClickCallback and a list of 2D array of JavaScript objects with ids, and values and will render Square components each with ids, values and the callback function passed in as props.

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1

  // can I refactor to flatten first and then map?

  // loop through array of squares

  return squares.flat().map( square =>
      <Square   // square component
        // do I need a key? ID makes a good key
        id={square.id} // id set to props
        value={square.value} // value set to props
        onClickCallback={onClickCallback}  // onClickCallback
      />
    );
  
      
      
     
  
 
  // Update the Board component to render the grid of squares. You will need to complete the generateSquareComponents function in the Board component.

  // App should pass to Board a 2D array of JavaScript objects and Board should use that to render an array of Square components.

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