import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import './App.css';

const App: React.FC = () => {
  const [gridSize, setGridSize] = useState(20); // Default size of 20x20
  const [grid, setGrid] = useState<boolean[][]>(createEmptyGrid(gridSize));
  const [isRunning, setIsRunning] = useState(false);
  const [interval, setIntervalValue] = useState(1000);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setGrid((prevGrid) => simulateGrowth(prevGrid));
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isRunning, interval]);

  const CellState = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  const resetGrid = () => {
    setGrid(createEmptyGrid(gridSize));
  };

  const Simulation = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      if (grid.flat().includes(true)) {
        setIsRunning(true);
      } else {
        alert("Please place at least one cell before starting the simulation.");
      }
    }
  };

  const IntervalUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntervalValue(Number(e.target.value));
  };

  
  
  return (
    <div className="app">
      <h1>Cell Growth Simulation</h1>
      <div className="controls">
        <button onClick={Simulation}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetGrid}>Reset</button>
        <label>
          Interval:
          <input
            type="number"
            value={interval}
            onChange={IntervalUpdate}
            min="100"
            step="100"
          />
        </label>
        <Grid grid={grid} onClickCell={CellState} />
      </div>
    </div>
  );
};

const createEmptyGrid = (size: number): boolean[][] => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false)
  );
};

const simulateGrowth = (grid: boolean[][]): boolean[][] => {
  const newGrid = grid.map((row) => [...row]);
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col]) {
        const neighbors = [
          [row - 1, col], 
          [row + 1, col],
          [row, col - 1],
          [row, col + 1]
        ];
        for (const [newRow, newCol] of neighbors) {
          if (
            newRow >= 0 &&
            newRow < grid.length &&
            newCol >= 0 &&
            newCol < grid[row].length &&
            !grid[newRow][newCol]
          ) {
            newGrid[newRow][newCol] = true;
          }
        }
        
      }
    }
  }
  return newGrid;
};

export default App;
