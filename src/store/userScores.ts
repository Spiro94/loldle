import { create } from 'zustand';
import type { UserScore } from '../types/userScores';
import { USER_SCORES_KEY } from '../utils/constants';

type State = {
  scores: UserScore[];
};

type Actions = {
  saveScore: (score: UserScore) => void;
};

export const useUserScores = create<State & Actions>((set) => {
  const stored = localStorage.getItem(USER_SCORES_KEY);
  let scores: UserScore[] = [];
  try {
    scores = stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error parsing scores from localStorage:', error);
  }
  return {
    scores: scores,
    saveScore: (score) =>
      set((state) => {
        const newScores = [...state.scores, score];
        localStorage.setItem(USER_SCORES_KEY, JSON.stringify(newScores));
        return { ...state, scores: newScores };
      }),
  };
});
