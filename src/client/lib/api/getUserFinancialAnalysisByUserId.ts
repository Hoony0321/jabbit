import { BASE_URL } from '@/src/client/constants/API';

const getUserFinancialAnalysisByUserId = async (userId: string) => {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/financial-analysis`,
  );
  return await response.json();
};

export default getUserFinancialAnalysisByUserId;
