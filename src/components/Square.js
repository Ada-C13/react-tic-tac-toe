import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  return <button
    className="square"
    //This button is listening for the click event and we passed it props
    // so id can be accessed via the onClickCallback in App.js.
    // A square needs to know its id.
    onClick={() => props.onClickCallback(props.id)}>
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
