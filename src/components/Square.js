import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

// This component represents one square in a tic-tac-toe board. It will take in props representing the value to show on the board (x, o, or ''), an id, and a callback function called onClickCallback.

const Square = (props) => {
  
  return (
    <button
      className="square"
      onClick={() => {
        if (props.value === '') props.onClickCallback(props.id) // only change if square has no value
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