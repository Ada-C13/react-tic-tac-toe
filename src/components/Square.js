import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Square.css'


const Square = (props) => {
  // Event callback function
  const onButtonClick = () => props.onClickCallback(props.id);

  return <button onClick={onButtonClick}
    className="square">
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square