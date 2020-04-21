import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

// css groups
  // .square

// This component represents one square in a tic-tac-toe board. It will take in props representing the value to show on the board (x, o, or ''), an id, and a callback function called onClickCallback.

// Each Square component should take 2 props at this stage.

  // id the Id of the square
  // value the value being displayed in the square

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  return (
    <button
      className="square"
      onClick={() => {
        // basic w/ no if statement: 
        props.onClickCallback(props.id)
        // only click if there's no value - does this work?
        // if (props.value === '') props.onClickCallback(props.id)
        }
      }
    >
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square