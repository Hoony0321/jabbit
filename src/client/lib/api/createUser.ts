import { BASE_URL } from '@/src/client/constants/API';

async function createUser({
  provider_id,
  provider,
  email,
}: {
  provider_id: string;
  provider: string;
  email: string;
}) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify({
      provider_id,
      provider,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return await response.json();
}

export default createUser;
