import { useRouter } from 'next/navigation';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { Route } from '../_constants/routes';
import ArrowLeftSVG from '@/src/client/assets/arrow-left.svg';

function Header(props: Route['header']) {
  const { title, hasPrev, rightButton } = props || {};
  const router = useRouter();

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="480px"
        w="100%"
        p="20px"
        pt="8px"
        bgColor="brand.white"
      >
        {hasPrev ? (
          <Button onClick={() => router.back()}>
            <ArrowLeftSVG width="24px" height="24px" />
          </Button>
        ) : (
          <Box boxSize="24px" />
        )}
        <Text textStyle="mobile_b1_semi">{title}</Text>
        {rightButton ? (
          <Button onClick={() => console.log('clicked')}>
            {rightButton.label}
          </Button>
        ) : (
          <Box boxSize="24px" />
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
