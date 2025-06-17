import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PwaState {
  isPwa: boolean;
  setIsPwa: (isPwa: boolean) => void;
}
export const usePwaStore = create<PwaState>()(
  persist(
    (set) => ({
      isPwa: false,
      setIsPwa: (isPwa) => set({ isPwa }),
    }),
    {
      name: 'pwa-storage',
    },
  ),
);