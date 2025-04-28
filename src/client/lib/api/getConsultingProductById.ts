import { BASE_URL } from '@/src/server/constants/API';

const getConsultingProductById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/consulting-products/${id}`, {
    method: 'GET',
    next: {
      revalidate: 3600,
    },
  });

  return await response.json();
};

export default getConsultingProductById;
