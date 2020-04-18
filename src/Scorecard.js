import React from 'react';
import PropTypes from 'prop-types';

const Scorecard = (props) => {

  return (
    <div key={props.id} >
      <p>Player: {props.value}</p>
      <p>Score: {props.count}</p>
    </div>)
}

Scorecard.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Scorecard
