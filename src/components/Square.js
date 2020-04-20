import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // Wave 1

  const onSquareClick = ( () => {
    console.log(props.id)
    props.onClickCallback(props.id)
  })

  return <button className="square" onClick={onSquareClick}>
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
