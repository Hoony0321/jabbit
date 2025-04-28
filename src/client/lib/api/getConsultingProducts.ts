import { BASE_URL } from '@/src/server/constants/API';

const getConsultingProducts = async () => {
  const response = await fetch(`${BASE_URL}/consulting-products`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getConsultingProducts;
