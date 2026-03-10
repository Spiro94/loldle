import { useContext } from 'react';
import { PuzzleLengthContext } from '../context/puzzleLengthContext';

function usePuzzleLengthContext() {
  const context = useContext(PuzzleLengthContext);
  if (!context) {
    throw new Error(
      'usePuzzleLengthContext must be used within a PuzzleLengthProvider',
    );
  }
  return context;
}

export default usePuzzleLengthContext;
