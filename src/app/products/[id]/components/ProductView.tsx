'use client';

import Navigation from '@/src/app/components/Navigation/Naviagtion';
import { Flex } from '@chakra-ui/react';
import FloatingCard from './FloatingCard';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import Footer from '@/src/app/components/Footer/Footer';
import { extractFloatingCardData } from '@/src/client/utils/product';
import { ConsultingProductWithExpert } from '@/src/server/types/domains';
interface ProductDetailViewProps {
  consultingProduct: ConsultingProductWithExpert;
}

const ProductView = ({ consultingProduct }: ProductDetailViewProps) => {
  const [selectedPriceTagIndex, setSelectedPriceTagIndex] = useState(0);

  const handlePriceTagClick = (index: number) => {
    setSelectedPriceTagIndex(index);
  };

  const floatingCardData = extractFloatingCardData(
    consultingProduct,
    handlePriceTagClick,
    selectedPriceTagIndex,
  );

  return (
    <Flex
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      paddingTop="35px"
      alignItems="center"
      gap="94px"
    >
      <Navigation />
      <Flex width="1280px" justifyContent="space-between" gap="78px">
        <Flex width="50%" flexDirection="column">
          <ProductDetail {...consultingProduct} />
          <Footer />
        </Flex>
        <Flex width="50%">
          <FloatingCard {...floatingCardData} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductView;
