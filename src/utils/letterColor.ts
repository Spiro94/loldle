import type { LetterState } from '../types/letterState';

function getLetterColor(state: LetterState) {
  switch (state) {
    case 'correct':
      return 'bg-tile-hit';
    case 'present':
      return 'bg-tile-partial-hit';
    case 'absent':
      return 'bg-tile-no-hit';
    default:
      return 'bg-tile';
  }
}

export default getLetterColor;
