import { createContext } from 'react';

interface PuzzleLengthContextValue {
  length: number;
  setLength: (length: number) => void;
}

export const PuzzleLengthContext =
  createContext<PuzzleLengthContextValue | null>(null);
