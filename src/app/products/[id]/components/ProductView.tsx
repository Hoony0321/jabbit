'use client';

import Navigation from '@/src/app/components/Navigation/Naviagtion';
import { Flex } from '@chakra-ui/react';
import FloatingCard from './FloatingCard';
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import Footer from '@/src/app/components/Footer/Footer';

interface ProductDetailViewProps {
  productData: any;
}

const ProductView = ({ productData }: ProductDetailViewProps) => {
  const [selectedPriceTagIndex, setSelectedPriceTagIndex] = useState(0);

  const handlePriceTagClick = (index: number) => {
    setSelectedPriceTagIndex(index);
  };

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
          <ProductDetail
            productTitle={productData.data.name}
            expertName={productData.data.expert.name}
            isVerified={productData.data.expert.isVerified}
            certifications={productData.data.expert.certificates}
            specialties={productData.data.expert.specialties}
            specialtyDetail={productData.data.detailFields}
            activities={productData.data.expert.activities}
            targetDescription={productData.data.targetDescription}
            productDescription={productData.data.productDescription}
            experiences={productData.data.expert.experiences}
            yearsOfExperience={productData.data.expert.yearsOfExperience}
          />
          <Footer />
        </Flex>
        <Flex width="50%">
          <FloatingCard
            expertName={productData.data.expert.name}
            expertImage={'/assets/test.png'}
            priceTags={productData.data.priceInfos}
            handlePriceTagClick={handlePriceTagClick}
            selectedPriceTagIndex={selectedPriceTagIndex}
            googleFormUrl={productData.data.googleFormUrl}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductView;
