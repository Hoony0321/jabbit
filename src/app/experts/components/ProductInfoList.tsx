import { Flex, Spinner, Text, Center } from '@chakra-ui/react';
import ProductInfoCard from './ProductInfoCard';
import { ConsultingProductWithExpert } from '@/src/server/types/domains';
interface ProductInfoListProps {
  products: ConsultingProductWithExpert[];
  isLoading: boolean;
}

const ProductInfoList = ({ products, isLoading }: ProductInfoListProps) => {
  if (isLoading) {
    return (
      <Center
        width="100%"
        maxWidth="1280px"
        height="600px"
        flexDirection="column"
        gap={4}
      >
        <Spinner size="xl" color="primary" />
        <Text color="main.black_2" fontSize="lg">
          전문가 정보를 불러오는 중입니다...
        </Text>
      </Center>
    );
  }

  return (
    <Flex
      w="100%"
      maxWidth="1280px"
      flexDirection="column"
      flexDir="row-reverse"
    >
      <Flex flexDirection="column" gap="164px">
        {products.map((product) => (
          <ProductInfoCard key={product.id} product={product} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProductInfoList;
