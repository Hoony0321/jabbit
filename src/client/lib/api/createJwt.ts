import { AuthUser } from '@/src/client/store/authStore';

export const createJwtToken = async (user: AuthUser): Promise<string> => {
  const response = await fetch('/api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create token');
  }

  const data = await response.json();
  return data.data;
};
