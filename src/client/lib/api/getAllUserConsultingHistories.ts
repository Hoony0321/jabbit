import { BASE_URL } from '@/src/server/constants/API';

const getAllUserConsultingHistories = async (userId: string) => {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/consulting-histories`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  );
  return await response.json();
};

export default getAllUserConsultingHistories;
