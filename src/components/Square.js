import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

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


// const winningPatterns = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6]
    // ];
    
    // for(let pattern of winningPatterns) {
    //   console.log(newSquares[pattern[1]["value"]]);
    //   if (newSquares[pattern[0]["value"]] &&
    //       newSquares[pattern[0]["value"]] === newSquares[pattern[2]["value"]] &&
    //       newSquares[pattern[1]["value"]] === newSquares[pattern[2]["value"]]
    //     ) {
    //       console.log('got a winner')
    //       return newSquares[pattern[0]];
    //     }
    //   }  
    // console.log('no winner');
    // return null;