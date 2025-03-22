'use client';
import { Button, Flex, Text } from '@chakra-ui/react';
import ErrorCircleSVG from '@/public/assets/error_circle.svg';
import { useRouter } from 'next/navigation';

const NoData = ({ page }: { page: 'analysis' | 'consultation-history' }) => {
  const router = useRouter();
  if (page === 'analysis') {
    return (
      <Flex
        w="100%"
        h="100vh"
        flexDir="column"
        gap="24px"
        justifyContent="center"
        alignItems="center"
      >
        <ErrorCircleSVG />
        <Flex
          flexDir="column"
          alignItems="center"
          fontWeight="500"
          fontSize="20px"
        >
          <Text>아직 재무 정보를 작성하지 않았어요.</Text>
          <Text>재무 분석을 받고 싶다면 서둘러 주세요.</Text>
        </Flex>
        <Button
          bg="primary"
          color="white"
          w="240px"
          h="50px"
          borderRadius="10px"
        >
          <Text fontSize="18px" fontWeight="500">
            재무 정보 작성하기
          </Text>
        </Button>
      </Flex>
    );
  }
  return (
    <Flex
      w="100%"
      h="60vh"
      flexDir="column"
      gap="24px"
      justifyContent="center"
      alignItems="center"
    >
      <ErrorCircleSVG />
      <Flex
        flexDir="column"
        alignItems="center"
        fontWeight="500"
        fontSize="20px"
      >
        <Text>아직 상담을 받지 않았어요.</Text>
        <Text>필요한 재무상담을 받아보세요.</Text>
      </Flex>
      <Button
        bg="primary"
        color="white"
        w="240px"
        h="50px"
        borderRadius="10px"
        onClick={() => {
          router.push('/experts');
        }}
      >
        <Text fontSize="18px" fontWeight="500">
          상담 둘러보기
        </Text>
      </Button>
    </Flex>
  );
};

export default NoData;
