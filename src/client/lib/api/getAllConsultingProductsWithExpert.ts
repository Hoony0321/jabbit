import { BASE_URL } from '@/src/server/constants/API';

const getAllConsultingProductsWithExpert = async () => {
  const response = await fetch(
    `${BASE_URL}/consulting-products?includeExpert=true`,
    {
      method: 'GET',
      next: {
        revalidate: 3600,
      },
    },
  );

  return await response.json();
};

export default getAllConsultingProductsWithExpert;
