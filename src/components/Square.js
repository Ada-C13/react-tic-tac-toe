import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = (props) => {

  //Event Listenner
  const onSquareClick = () => {
    const updateSquare = {
      id: props.id,
      value: props.value,
    };
    props.onClickCallback(updateSquare);
  };

  return(<button className="square" onClick = {onSquareClick}>
    {props.value}
  </button>)
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
