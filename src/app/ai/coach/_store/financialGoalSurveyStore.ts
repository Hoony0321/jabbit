import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

export type Answer = Record<string, string | number>;

interface FinancialGoalSurveyState {
  response: Answer;
  isSubmitted: boolean;
  dateSubmitted: string | null;
  setResponse: (id: number, answer: string | number) => void;
  clearSurvey: () => void;
  submitSurvey: () => void;
}

export const useFinancialGoalSurveyStore = create<FinancialGoalSurveyState>()(
  persist(
    (set) => ({
      response: {},
      isSubmitted: false,
      dateSubmitted: null,

      setResponse: (id, answer) =>
        set((state) => ({
          response: {
            ...state.response,
            [`q${id}`]: answer,
          },
        })),
      clearSurvey: () =>
        set({ response: {}, isSubmitted: false, dateSubmitted: null }),
      submitSurvey: () =>
        set({
          isSubmitted: true,
          dateSubmitted: getCurrentTimestamp(),
        }),
    }),
    {
      name: 'financial-goal-survey-storage',
    },
  ),
);
