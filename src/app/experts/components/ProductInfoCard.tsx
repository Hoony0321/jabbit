import { Box, Flex, Text, Link } from '@chakra-ui/react';
import VerifiedBadgeSVG from '@/public/assets/verifiedBadge.svg';
import Image from 'next/image';
import { SimpleProduct, ProductPriceInfo } from '@/src/client/types/product';

const ProductTitle = ({ name }: { name: string }) => {
  return (
    <Text maxW="400px" fontSize="28px" fontWeight="600" color="main.black_1">
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

const ProductMinimumPriceInfo = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  return (
    <Flex flexDirection="row">
      <Text fontSize="14px" fontWeight="500" color="primary">
        {name}
      </Text>
      <Text fontSize="14px" fontWeight="500" color="#93844F" ml="4px">
        {` | ${formatKRW(price)}원 ~`}
      </Text>
    </Flex>
  );
};

const ProfileImage = ({
  profileImageUrl,
}: {
  profileImageUrl: string | undefined;
}) => {
  const imageStyle = {
    width: '140px',
    height: '140px',
    objectFit: 'cover' as const,
    objectPosition: 'top' as const,
    borderRadius: '20px',
  };

  return profileImageUrl ? (
    <Image
      src={profileImageUrl}
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
const ProductInfoCard = ({ product }: { product: SimpleProduct }) => {
  const minimumPriceInfo = product.priceInfos.reduce(
    (min: ProductPriceInfo, current: ProductPriceInfo) => {
      return current.price < min.price ? current : min;
    },
  );

  return (
    <Link
      href={`/products/${product.id}`}
      target="_blank"
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <Flex
        w="640px"
        h="200px"
        flexDirection="row"
        cursor="pointer"
        justifyContent="space-between"
      >
        <Flex w="auto" h="100%" flexDirection="column">
          <ProductTitle name={product.name} />
          <Box h="16px" />
          <ExpertNameWithVerifiedBadge
            name={product.expert.name}
            isVerified={product.expert.isVerified}
          />
          <Box h="16px" />
          <ProductDetailFields fields={product.detailFields} />
          <Box h="30px" />
          <ProductMinimumPriceInfo
            name={minimumPriceInfo.name}
            price={minimumPriceInfo.price}
          />
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <ProfileImage profileImageUrl={product.expert.profileImageUrl} />
          <Box h="40px" />
          <MoreInfoButton />
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductInfoCard;
