import { useState } from 'react';

// Input: initial mode
// Output: an object { mode : initial }
export default function useVisualMode(initial) {
  // Keep track of the history of the modes
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    console.log(newMode);
    setHistory(prev => {
      if (replace) {
        return [...prev.slice(0, prev.length - 1), newMode]; // replace the last mode
      } else {
        return [...prev, newMode];
      }
    });
  };

  const back = () => {
    setHistory(prev => {
      if (prev.length > 1) {
        return prev.slice(0, prev.length - 1);
      } else {
        return prev; // Cannot remove the initial state
      }
    });
  }

  return { mode: history[history.length - 1], transition, back };
}