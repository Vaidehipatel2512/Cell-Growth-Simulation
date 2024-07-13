import React from 'react';

interface ControlsProps {
  running: boolean;
  toggleRunning: () => void;
  reset: () => void;
  interval: number;
  setInterval: (interval: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ running, toggleRunning, reset, interval, setInterval }) => {
  return (
    <div>
      <button onClick={toggleRunning}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
      <input 
        type="number" 
        value={interval} 
        onChange={(e) => setInterval(Number(e.target.value))} 
      />
    </div>
  );
};

export default Controls;
