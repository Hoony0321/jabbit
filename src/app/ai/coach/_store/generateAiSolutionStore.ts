import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

type SectionKey =
  | 'scenario'
  | 'plan'
  | 'routine'
  | 'selfFeedback'
  | 'weeklyFeedback';

interface TimestampState {
  requestedAt: string | null; // 알림받기 메시지 시간
  createdAt: string | null; // 읽어보기 메시지 시간
  notificationEnabled: boolean; // 알림받기 클릭 여부
}

interface SelfFeedbackState {
  requestedAt: string | null;
  isSubmitted: boolean;
}

interface WeeklyFeedbackState {
  createdAt: string | null;
}

interface GenerateAiSolutionState {
  scenario: TimestampState;
  plan: TimestampState;
  routine: TimestampState;
  selfFeedback: SelfFeedbackState;
  weeklyFeedback: WeeklyFeedbackState;

  setScenarioRequested: () => void;
  setPlanRequested: () => void;
  setRoutineRequested: () => void;
  setSelfFeedbackRequested: () => void;

  setScenarioCreated: () => void;
  setPlanCreated: () => void;
  setRoutineCreated: () => void;
  setWeeklyFeedbackCreated: () => void;

  setScenarioNotification: (enabled: boolean) => void;
  setPlanNotification: (enabled: boolean) => void;
  setRoutineNotification: (enabled: boolean) => void;
  setSelfFeedbackIsSubmitted: (isSubmitted: boolean) => void;
}

export const useGenerateAiSolutionStore = create<GenerateAiSolutionState>()(
  persist(
    (set, get) => {
      const setIfNotExists = (
        section: SectionKey,
        key: keyof TimestampState | keyof SelfFeedbackState | keyof WeeklyFeedbackState,
      ) => {
        // Type guard to ensure the key exists on the section
        const sectionState = get()[section] as any;
        const current = sectionState[key];
        if (!current) {
          set((state) => ({
            [section]: {
              ...state[section],
              [key]: getCurrentTimestamp(),
            },
          }));
        }
      };

      const setNotification = (section: SectionKey, enabled: boolean) => {
        set((state) => ({
          [section]: {
            ...state[section],
            notificationEnabled: enabled,
          },
        }));
      };

      return {
        scenario: {
          requestedAt: null,
          createdAt: null,
          notificationEnabled: false,
        },
        plan: {
          requestedAt: null,
          createdAt: null,
          notificationEnabled: false,
        },
        routine: {
          requestedAt: null,
          createdAt: null,
          notificationEnabled: false,
        },
        selfFeedback: {
          requestedAt: null,
          isSubmitted: false,
        },
        weeklyFeedback: {
          createdAt: null,
        },

        setScenarioRequested: () => setIfNotExists('scenario', 'requestedAt'),
        setPlanRequested: () => setIfNotExists('plan', 'requestedAt'),
        setRoutineRequested: () => setIfNotExists('routine', 'requestedAt'),
        setSelfFeedbackRequested: () =>
          setIfNotExists('selfFeedback', 'requestedAt'),

        setScenarioCreated: () => setIfNotExists('scenario', 'createdAt'),
        setPlanCreated: () => setIfNotExists('plan', 'createdAt'),
        setRoutineCreated: () => setIfNotExists('routine', 'createdAt'),
        setWeeklyFeedbackCreated: () =>
          setIfNotExists('weeklyFeedback', 'createdAt'),

        setScenarioNotification: (enabled) =>
          setNotification('scenario', enabled),
        setPlanNotification: (enabled) => setNotification('plan', enabled),
        setRoutineNotification: (enabled) =>
          setNotification('routine', enabled),
        setSelfFeedbackIsSubmitted: (isSubmitted) =>
          set((state) => ({
            selfFeedback: {
              ...state.selfFeedback,
              isSubmitted: isSubmitted,
            },
          })),
      };
    },
    {
      name: 'generate-ai-solution-storage',
    },
  ),
);
