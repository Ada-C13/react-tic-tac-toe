import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // Wave 2: enable Square to alert a parent component when clicked

  return (
    <button className="square"
      onClick={() => props.onClickCallback(props.id)}
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
