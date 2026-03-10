import type { LetterState } from '../types/letterState';

function evaluateGuess(guess: string, answer: string): LetterState[] {
  const g = guess.toLowerCase().split('');
  const a = answer.toLowerCase().split('');
  const evaluation: LetterState[] = Array(g.length).fill('absent');
  const remaining = new Map<string, number>();

  // Pass 1: mark exact matches and count unmatched answer letters
  for (let i = 0; i < g.length; i++) {
    if (a[i] === g[i]) {
      evaluation[i] = 'correct';
    } else {
      const letter = a[i];
      remaining.set(letter, (remaining.get(letter) ?? 0) + 1);
    }
  }

  // Pass 2: mark present only if there is remaining count for that letter
  for (let i = 0; i < g.length; i++) {
    if (evaluation[i] === 'correct') continue;

    const letter = g[i];
    const count = remaining.get(letter) ?? 0;
    if (count > 0) {
      evaluation[i] = 'present';
      remaining.set(letter, count - 1);
    }
  }

  return evaluation;
}

export default evaluateGuess;
