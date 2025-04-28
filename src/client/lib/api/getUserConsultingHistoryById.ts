import { BASE_URL } from '@/src/server/constants/API';

const getUserConsultingHistoryById = async (
  userId: string,
  consultingHistoryId: string,
) => {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/consulting-histories/${consultingHistoryId}`,
  );

  return await response.json();
};

export default getUserConsultingHistoryById;
