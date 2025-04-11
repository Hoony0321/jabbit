import { Flex, Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Flex flexDir="column" gap="12px">
      <Text fontSize="24px" fontWeight="semibold" color="main.black_1">
        재무목표 달성 예측
      </Text>
      <Text fontSize="16px" color="main.black_3">
        미래 재무정보로 목표를 달성할 수 있는지 예측해 드릴게요
      </Text>
    </Flex>
  );
};

export default Title;
