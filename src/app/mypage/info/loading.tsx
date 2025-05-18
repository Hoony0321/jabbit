import { Center, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center width="100%" height="600px" flexDirection="column" gap={4}>
      <Spinner size="xl" color="primary" />
      <Text color="main.black_2" fontSize="lg">
        재무 정보를 불러오는 중입니다...
      </Text>
    </Center>
  );
};

export default Loading;
