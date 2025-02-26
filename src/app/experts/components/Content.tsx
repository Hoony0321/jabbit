import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Navigation from '../../components/Navigation/Naviagtion';
import PageTitle from './PageTitle';
import LeftSideBar from './LeftSideBar';
import ProductInfoList from './ProductInfoList';
import Footer from '../../components/Footer/Footer';
import { ProductSimpleDto } from '@/src/server/dtos/product.simple.dto';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AppError } from '@/src/errors/AppError';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import { useErrorToast } from '@/src/errors/useErrorToast';
import { BASE_URL } from '@/src/constants/API';

const Content = () => {
  const searchParams = useSearchParams();
  const specialty = searchParams.get('specialty');

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    specialty || '종합재무상담',
  );
  const [products, setProducts] = useState<ProductSimpleDto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductSimpleDto[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const { showErrorToast } = useErrorToast();

  const fetchProducts = async () => {
    setIsLoading(true);
    fetch(`${BASE_URL}/products`)
      .then(async (res) => {
        const resData = await res.json();
        if (res.status != 200 || !resData.success) {
          throw new AppError({
            statusCode: ERROR_INFOS['fetchFailed'].statusCode,
            errorInfoKey: 'fetchFailed',
          });
        }

        const productDtos = resData.data.map(
          (product: any) => new ProductSimpleDto(product),
        );
        setProducts(productDtos);
      })
      .catch((error) => {
        const isAppError = error instanceof AppError;

        if (!isAppError) {
          error = new AppError({
            statusCode: ERROR_INFOS['fetchFailed'].statusCode,
            errorInfoKey: 'fetchFailed',
          });
        }

        showErrorToast(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.category === selectedSpecialty,
      );
      setFilteredProducts(filteredProducts);
    }
  }, [products, selectedSpecialty]);

  useEffect(() => {
    if (specialty) {
      setSelectedSpecialty(specialty);
    }
  }, [specialty]);
  return (
    <Flex
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      paddingTop="35px"
      alignItems="center"
    >
      <Navigation />
      <PageTitle />
      <Box h="122px" />

      <Flex width="100%" maxWidth="1280px" flex="1" position="relative">
        <LeftSideBar
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
        />

        <ProductInfoList products={filteredProducts} isLoading={isLoading} />
      </Flex>
      <Box h="122px" />
      <Footer />
    </Flex>
  );
};

export default Content;
