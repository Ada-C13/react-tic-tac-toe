import React from 'react';
import PropTypes from 'prop-types';

import './Scorecard.css'

const Scorecard = (props) => {

  return (
    <div className="indScore" key={props.id} >
      <p>Player: {props.value}</p>
      <p>Score: {props.count}</p>
    </div>)
}

Scorecard.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Scorecard
