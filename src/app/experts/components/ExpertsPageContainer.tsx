import ExpertsView from './ExpertsView';
import { useEffect, useState } from 'react';
import { AppError } from '@/src/client/errors/AppError';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import getAllConsultingProductsWithExpert from '@/src/client/lib/api/getAllConsultingProductsWithExpert';
import { ConsultingProductWithExpert } from '@/src/server/types/domains';

const ExpertsPageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { showErrorToast } = useErrorToast();
  const [data, setData] = useState<ConsultingProductWithExpert[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getAllConsultingProductsWithExpert();

      if (!response.success)
        throw new AppError({
          name: response.name,
          message: response.message,
        });

      setData(response.data);
    } catch (error) {
      showErrorToast(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ExpertsView data={data} isLoading={isLoading} />;
};

export default ExpertsPageContainer;
