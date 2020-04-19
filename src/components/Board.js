import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, player) => {

  const squareComponents = squares.map((row) => {
    return row.map(({id, value}) => {
  return (
    <Square
       id={id}
       value={value}
       onClickCallback={onClickCallback}
       player={player}
       key={id}

  />
    
     );
    });
});
return squareComponents;
}

const Board = ({ squares, onClickCallback, player }) => {
  const squareList = generateSquareComponents(squares, onClickCallback, player);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,   
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired
};

export default Board;
