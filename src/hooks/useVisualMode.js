import { useState } from 'react';

// Input: initial mode
// Output: an object { mode : initial }
export default function useVisualMode(initial) {
  // Keep track of the history of the modes
  const [history, setHistory] = useState([initial]);

  const transition = (newMode) => {
    setHistory(prev => [...prev, newMode])
  }

  const back = () => {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  return { mode: history[history.length - 1], transition, back };
}