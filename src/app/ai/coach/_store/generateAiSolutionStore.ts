import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

type SectionKey = 'scenario' | 'plan' | 'routine';

interface TimestampState {
  requestedAt: string | null; // 알림받기 메시지 시간
  createdAt: string | null; // 읽어보기 메시지 시간
  notificationEnabled: boolean; // 알림받기 클릭 여부
}

interface GenerateAiSolutionState {
  scenario: TimestampState;
  plan: TimestampState;
  routine: TimestampState;

  setScenarioRequested: () => void;
  setPlanRequested: () => void;
  setRoutineRequested: () => void;

  setScenarioCreated: () => void;
  setPlanCreated: () => void;
  setRoutineCreated: () => void;

  setScenarioNotification: (enabled: boolean) => void;
  setPlanNotification: (enabled: boolean) => void;
  setRoutineNotification: (enabled: boolean) => void;
}

export const useGenerateAiSolutionStore = create<GenerateAiSolutionState>()(
  persist(
    (set, get) => {
      const setIfNotExists = (
        section: SectionKey,
        key: keyof TimestampState,
      ) => {
        const current = get()[section][key];
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

        setScenarioRequested: () => setIfNotExists('scenario', 'requestedAt'),
        setPlanRequested: () => setIfNotExists('plan', 'requestedAt'),
        setRoutineRequested: () => setIfNotExists('routine', 'requestedAt'),

        setScenarioCreated: () => setIfNotExists('scenario', 'createdAt'),
        setPlanCreated: () => setIfNotExists('plan', 'createdAt'),
        setRoutineCreated: () => setIfNotExists('routine', 'createdAt'),

        setScenarioNotification: (enabled) =>
          setNotification('scenario', enabled),
        setPlanNotification: (enabled) => setNotification('plan', enabled),
        setRoutineNotification: (enabled) =>
          setNotification('routine', enabled),
      };
    },
    {
      name: 'generate-ai-solution-storage',
    },
  ),
);
