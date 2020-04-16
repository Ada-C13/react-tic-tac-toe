import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {

  const allRows = [];
  for (let row = 0; row < 3; row += 1) {
    const oneRow = [];
    for (let col = 0; col < 3; col += 1) {
      const currentSquare = squares[row][col];
      oneRow.push(
        <div key={col}>
          <Square key={currentSquare.id}
                  id={currentSquare.id}
                  value={currentSquare.value}
                  onClickCallback={onClickCallback} />
        </div>
      );
    }
    allRows.push(
      <div key={row}>
        {oneRow}
      </div>
    );
  }
  return (
    <div>
      {allRows}
    </div>
  )
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
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
