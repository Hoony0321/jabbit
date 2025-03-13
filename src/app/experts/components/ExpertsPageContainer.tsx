import { BASE_URL } from '@/src/client/constants/API';
import ExpertsView from './ExpertsView';
import { useEffect, useState } from 'react';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import { AppError } from '@/src/client/errors/AppError';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import { SimpleProduct } from '@/src/client/types/product';
const ExpertsPageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { showErrorToast } = useErrorToast();
  const [data, setData] = useState<SimpleProduct[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/products/`, {
        method: 'GET',
        cache: 'no-store',
      });

      const responseJson = await response.json();

      if (!responseJson.success)
        throw new AppError({
          statusCode: ERROR_INFOS['fetchFailed'].statusCode,
          errorInfoKey: 'fetchFailed',
        });

      setData(responseJson.data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      if (!isAppError) {
        error = new AppError({
          statusCode: ERROR_INFOS['fetchFailed'].statusCode,
          errorInfoKey: 'fetchFailed',
        });
      }

      showErrorToast(error as AppError);
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
