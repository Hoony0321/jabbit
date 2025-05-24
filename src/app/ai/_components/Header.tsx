import { useRouter } from 'next/navigation';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { Route } from '../_constants/routes';
import ArrowLeftSVG from '@/src/client/assets/arrow-left.svg';

function Header(props: Route['header']) {
  const { title, hasPrev, rightButton } = props || {};
  const router = useRouter();

  return (
    <Flex alignItems="center" justifyContent="space-between" p="20px" pt="8px">
      {hasPrev ? (
        <Button onClick={() => router.back()} backgroundColor="white">
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
  );
}

export default Header;
