import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { ProductSimpleDto } from '@/src/server/dtos/product.simple.dto';
import VerifiedBadgeSVG from '@/public/assets/verifiedBadge.svg';
import type { ProductPriceInfo } from '@/src/server/domains/product';
import Image from 'next/image';

const ProductTitle = ({ name }: { name: string }) => {
  return (
    <Text fontSize="28px" fontWeight="600" color="main.black_1">
      {name}
    </Text>
  );
};

const ExpertNameWithVerifiedBadge = ({
  name,
  isVerified,
}: {
  name: string;
  isVerified: boolean;
}) => {
  return (
    <Flex flexDirection="row" gap="8px">
      <Text fontSize="18px" fontWeight="500" color="main.black_1">
        {`${name} 재무설계사`}
      </Text>
      {isVerified && <VerifiedBadgeSVG />}
    </Flex>
  );
};

const ProductDetailFields = ({ fields }: { fields: string[] }) => {
  return (
    <Flex flexDirection="row" gap="10px">
      {fields.map((field) => (
        <Box key={field} borderRadius="7px" padding="6px 8px" bgColor="#FFF3C7">
          <Text fontSize="12px" fontWeight="500" color="#93844F">
            {`#${field}`}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

const formatKRW = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'decimal',
  }).format(price);
};

const ProductPriceInfo = ({ priceInfo }: { priceInfo: ProductPriceInfo }) => {
  return (
    <Flex flexDirection="row">
      <Text fontSize="14px" fontWeight="500" color="primary">
        {priceInfo.name}
      </Text>
      <Text fontSize="14px" fontWeight="500" color="#93844F" ml="4px">
        {` | ${formatKRW(priceInfo.price)}원 ~`}
      </Text>
    </Flex>
  );
};

const ProfileImage = ({ product }: { product: ProductSimpleDto }) => {
  const imageStyle = {
    width: '140px',
    height: '140px',
    objectFit: 'cover' as const,
    objectPosition: 'top' as const,
    borderRadius: '20px',
  };

  return product.expert.profileImageUrl ? (
    <Image
      src={product.expert.profileImageUrl}
      alt="profile image"
      width={140}
      height={140}
      style={imageStyle}
    />
  ) : (
    <Image
      src="/assets/TestProfile.png"
      alt="profile image"
      width={140}
      height={140}
      style={imageStyle}
    />
  );
};

const MoreInfoButton = () => {
  return (
    <Text
      fontSize="16px"
      fontWeight="600"
      color="#7D7D7D"
      cursor="pointer"
      textDecoration="underline"
      textUnderlineOffset="4px"
      textDecorationThickness="1px"
    >
      더 알아보기
    </Text>
  );
};
const ProductInfoCard = ({ product }: { product: ProductSimpleDto }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <Flex
        w="640px"
        h="200px"
        flexDirection="row"
        cursor="pointer"
        justifyContent="space-between"
      >
        <Flex w="400px" h="100%" flexDirection="column">
          <ProductTitle name={product.name} />
          <Box h="16px" />
          <ExpertNameWithVerifiedBadge
            name={product.expert.name}
            isVerified={product.expert.isVerified}
          />
          <Box h="16px" />
          <ProductDetailFields fields={product.detailFields} />
          <Box h="30px" />
          <ProductPriceInfo priceInfo={product.getMinimumPriceInfo()} />
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <ProfileImage product={product} />
          <Box h="40px" />
          <MoreInfoButton />
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductInfoCard;
