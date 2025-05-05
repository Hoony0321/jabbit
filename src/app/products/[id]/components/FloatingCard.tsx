import { Box, Button, Flex, Text } from '@chakra-ui/react';
import VerifiedIconSVG from '@/public/assets/verify_badge.svg';
import Image from 'next/image';
import { formatKoreanCurrency } from '@/src/client/utils/currency';

export interface FloatingCardProps {
  expertName: string;
  expertImage: string;
  priceTags: {
    name: string;
    price: number;
  }[];
  handlePriceTagClick: (index: number) => void;
  selectedPriceTagIndex: number;
  googleFormUrl: string;
}

const FloatingCard = ({
  expertName,
  expertImage,
  priceTags,
  handlePriceTagClick,
  selectedPriceTagIndex,
  googleFormUrl,
}: FloatingCardProps) => {
  return (
    <Flex
      w="563px"
      h="72vh"
      maxH="817px"
      minH="min-content"
      padding="44px 0"
      position="fixed"
      borderRadius="10px"
      border="2px solid var(--chakra-colors-main-line)"
      bg="main.white_1"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* 이름 섹션 */}
      <Flex gap="10px">
        <Text textStyle="xl" fontWeight={600} textAlign="center">
          {expertName} 재무설계사
        </Text>
        <VerifiedIconSVG />
      </Flex>
      {/* 이미지 카드, 버튼 섹션 */}
      <Flex
        flexDirection="column"
        h="75%"
        justifyContent="space-between"
        gap="10px"
      >
        <Box
          position="relative"
          maxW="400px"
          maxH="400px"
          width="100%"
          height="45dvh"
          borderRadius="10px"
          overflow="hidden"
        >
          <Image
            src={expertImage}
            alt="expert_image"
            style={{ objectFit: 'cover' }}
            fill
          />
        </Box>
        <Flex gap="18px">
          {priceTags.map((priceInfo, index) =>
            index === selectedPriceTagIndex ? (
              <Button
                key={index}
                w="193px"
                h="100px"
                borderRadius="20px"
                onClick={() => handlePriceTagClick(index)}
                bg="#e8ebff"
                border="2px solid var(--chakra-colors-primary)"
              >
                <Flex flexDirection="column" gap="6px">
                  <Text textStyle="xs" color="#848dc3">
                    {priceInfo.name}
                  </Text>
                  <Text textStyle="md" color="primary">
                    {formatKoreanCurrency(priceInfo.price)}원
                  </Text>
                </Flex>
              </Button>
            ) : (
              <Button
                key={index}
                w="193px"
                h="100px"
                borderRadius="20px"
                border="2px solid var(--chakra-colors-main-line)"
                bg="main.white_1"
                onClick={() => handlePriceTagClick(index)}
              >
                <Flex flexDirection="column" gap="6px">
                  <Text textStyle="xs" color="main.black_3">
                    {priceInfo.name}
                  </Text>
                  <Text textStyle="md" color="main.black_1">
                    {formatKoreanCurrency(priceInfo.price)}원
                  </Text>
                </Flex>
              </Button>
            ),
          )}
        </Flex>
      </Flex>
      {/* 상담신청 버튼 섹션 */}
      <Box position="relative" flexShrink={0}>
        <Flex
          zIndex="10"
          position="absolute"
          bottom="44px"
          left="50%"
          transform="translateX(-50%)"
          w="286px"
          h="34px"
          bg="#f6f7ff"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '30%',
            width: '0',
            height: '0',
            border: '7px solid transparent',
            borderTopColor: '#f6f7ff',
            borderBottom: '0',
            marginLeft: '-16px',
            marginBottom: '-7px',
          }}
        >
          <Text textStyle="xs" fontWeight={600} color="#5971b2">
            상담 요일과 시간은 전문가와 조율할 수 있어요
          </Text>
        </Flex>
        <Button
          w="400px"
          h="58px"
          borderRadius="10px"
          bg="primary"
          fontSize="20px"
          onClick={() => {
            window.open(googleFormUrl, '_blank');
          }}
        >
          상담 신청하기
        </Button>
      </Box>
    </Flex>
  );
};

export default FloatingCard;
