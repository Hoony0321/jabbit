import { create } from 'zustand';

interface answer {
  id: number;
  answer: string | number;
  text: string;
}

interface financialGoalSurveyState {
  answers: Record<number, answer>;
  setAnswer: (id: number, answer: string | number, text: string) => void;
  clearAnswers: () => void;
}

export const usefinancialGoalSurveyStore = create<financialGoalSurveyState>((set) => ({
  answers: {},
  setAnswer: (id, answer, text) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [id]: { id, answer, text },
      },
    })),
  clearAnswers: () => set({ answers: {} }),
}));
