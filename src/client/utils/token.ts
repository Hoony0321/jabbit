/* eslint-disable @typescript-eslint/no-require-imports */

export const getAccessToken = async (): Promise<string | null> => {
  // server-side
  if (typeof window === 'undefined') {
    const { cookies } = require('next/headers');
    return (await cookies()).get('token')?.value ?? null;
  }

  // client-side
  const { useAuthStore } = require('@/src/client/store/authStore');
  return useAuthStore.getState().accessToken;
};
