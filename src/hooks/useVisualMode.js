import { useState } from 'react';

// Input: initial mode
// Output: an object { mode : initial }
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial); // <-- stateful variable!

  return { mode };
}