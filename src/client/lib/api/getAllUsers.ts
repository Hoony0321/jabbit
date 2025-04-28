import { BASE_URL } from '@/src/server/constants/API';

const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    cache: 'no-store',
  });

  return await response.json();
};

export default getAllUsers;
