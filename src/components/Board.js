import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  return (
    [<Square id={squares[0][0].id} value={squares[0][0].value} onClickCallback={onClickCallback} />,
    <Square id={squares[0][1].id} value={squares[0][1].value} onClickCallback={onClickCallback} />,
    <Square id={squares[0][2].id} value={squares[0][2].value} onClickCallback={onClickCallback} />,
    <Square id={squares[1][0].id} value={squares[1][0].value} onClickCallback={onClickCallback} />,
    <Square id={squares[1][1].id} value={squares[1][1].value} onClickCallback={onClickCallback} />,
    <Square id={squares[1][2].id} value={squares[1][2].value} onClickCallback={onClickCallback} />,
    <Square id={squares[2][0].id} value={squares[2][0].value} onClickCallback={onClickCallback} />,
    <Square id={squares[2][1].id} value={squares[2][1].value} onClickCallback={onClickCallback} />,
    <Square id={squares[2][2].id} value={squares[2][2].value} onClickCallback={onClickCallback} />]
  )
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
