import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

const LoadingPage = () => {
  return (
    <Flex
      width="100%"
      minHeight="80vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
      <Box h="20px" />
      <Text fontSize="20px" fontWeight="bold">
        Loading...
      </Text>
    </Flex>
  );
};

export default LoadingPage;
