import React from 'react';
import PropTypes from 'prop-types';

const GameInfo = ({turn, winner}) => {

  let winnerInfo = (
    <span>Player 1 (X) vs. Player 2 (O)</span>
  )

  if (winner === "tie") {
    winnerInfo = (
      <span>It's a tie!</span>
    )
  } else if (winner === "Player 1") {
    winnerInfo = (
      <span>The winner is Player 1!</span>
    )
  } else if (winner === "Player 2") {
    winnerInfo = (
      <span>The winner is Player 2!</span>
    )
  }

  return (
    <h2>Turn {turn}. {winnerInfo}</h2>
  )
}

export default GameInfo;