import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

export type Answer = Record<string, string | number>;

interface financialGoalSurveyState {
  response: Answer;
  isSubmitted: boolean;
  dateSubmitted: string | null;
  setResponse: (id: number, answer: string | number) => void;
  clearSurvey: () => void;
  submitSurvey: () => void;
  isNotificationEnabled: boolean;
  setNotification: (isNotificationEnabled: boolean) => void;
  setScenarioCreated: () => void;
  setPlanCreated: () => void;
  setRoutineCreated: () => void;
  dateScenarioCreated: string | null;
  datePlanCreated: string | null;
  dateRoutineCreated: string | null;
}

export const useFinancialGoalSurveyStore = create<financialGoalSurveyState>()(
  persist(
    (set) => ({
      response: {},
      isSubmitted: false,
      dateSubmitted: null,
      isNotificationEnabled: false,
      dateScenarioCreated: null,
      datePlanCreated: null,
      dateRoutineCreated: null,
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
      setNotification: (isNotificationEnabled) =>
        set({ isNotificationEnabled: isNotificationEnabled }),
      setScenarioCreated: () =>
        set({
          dateScenarioCreated: getCurrentTimestamp(),
        }),
      setPlanCreated: () =>
        set({
          datePlanCreated: getCurrentTimestamp(),
        }),
      setRoutineCreated: () =>
        set({
          dateRoutineCreated: getCurrentTimestamp(),
        }),
    }),
    {
      name: 'financial-goal-survey-storage',
    },
  ),
);
