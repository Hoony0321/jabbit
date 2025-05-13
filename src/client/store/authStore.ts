import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  setUser: (user: AuthUser, accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isLoggedIn: false,
      setUser: (user, accessToken) =>
        set({ user, accessToken, isLoggedIn: true }),
      logout: () => set({ user: null, accessToken: null, isLoggedIn: false }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
