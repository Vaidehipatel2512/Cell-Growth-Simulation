import React from 'react';
import Cell from './Cell';
import './Grid.css';

interface GridProps {
  grid: boolean[][];
  onClickCell: (row: number, col: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid,onClickCell}) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isOccupied={cell}
            onClick={() => onClickCell(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
