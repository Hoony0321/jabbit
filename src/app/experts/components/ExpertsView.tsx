import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Navigation from '../../components/Navigation/Naviagtion';
import PageTitle from './PageTitle';
import LeftSideBar from './LeftSideBar';
import ProductInfoList from './ProductInfoList';
import Footer from '../../components/Footer/Footer';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SimpleProduct } from '@/src/client/types/product';
interface ExpertsViewProps {
  data: SimpleProduct[];
  isLoading: boolean;
}

const ExpertsView = ({ data, isLoading }: ExpertsViewProps) => {
  const searchParams = useSearchParams();
  const specialty = searchParams.get('specialty');

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    specialty || '종합재무상담',
  );
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    console.log('data', data);
    if (data.length > 0) {
      console.log('data', data);
      const filteredProducts = data.filter(
        (product) => product.category === selectedSpecialty,
      );
      setFilteredProducts(filteredProducts);
    }
  }, [data, selectedSpecialty]);

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

export default ExpertsView;
