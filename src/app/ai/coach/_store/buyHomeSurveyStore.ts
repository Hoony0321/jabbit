import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

export type Answer = Record<string, string | number>;

interface BuyHomeSurveyState {
  response: Answer;
  isSubmitted: boolean;
  dateSubmitted: string | null;
  dateFirstVisit: string | null;
  setResponse: (id: number, answer: string | number) => void;
  setDateFirstVisit: () => void;
  clearSurvey: () => void;
  submitSurvey: () => void;
}

export const useBuyHomeSurveyStore = create<BuyHomeSurveyState>()(
  persist(
    (set, get) => ({
      response: {},
      isSubmitted: false,
      dateSubmitted: null,
      dateFirstVisit: null,
      setDateFirstVisit: () => {
        const current = get().dateFirstVisit;
        if (!current) {
          set(() => ({
            dateFirstVisit: getCurrentTimestamp(),
          }));
        }
      },
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
      name: 'buy-home-survey-storage',
    },
  ),
);
