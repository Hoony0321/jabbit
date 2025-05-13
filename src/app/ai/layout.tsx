import { Box, Flex } from '@chakra-ui/react';

function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box maxWidth="480px" width="100%" height="100vh" bgColor="gray.100">
        <Box
          width="100%"
          height="100%"
          bgColor="app_background"
          overflowY="scroll"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
}

export default MobileLayout;
