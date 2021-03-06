import React from "react";
import './Board.css'

interface BoardProps {
  squares: {[index:number] : String},
  onClick: Function
}

  const Board = ({squares, onClick}: BoardProps) => {
  function renderSquare(id: number) {
    return (
      <button className="square" onClick={() => onClick(id)}>
        {squares[id]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;
