import { BASE_URL } from '@/src/server/constants/API';

const getAllExperts = async () => {
  const response = await fetch(`${BASE_URL}/experts`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getAllExperts;
