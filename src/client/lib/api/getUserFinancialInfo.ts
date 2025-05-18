import { BASE_URL } from '@/src/server/constants/API';

const getUserFinancialInfo = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/all-info`, {
    method: 'GET',
  });

  return await response.json();
};

export default getUserFinancialInfo;
