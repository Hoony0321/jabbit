import { useRouter } from 'next/navigation';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import ArrowLeftSVG from '@/src/client/assets/arrow-left.svg';

type HeaderProps = {
  title?: string;
  hasPrev?: boolean;
  children?: React.ReactNode;
};

function Header(props: HeaderProps) {
  const { title, hasPrev, children } = props || {};
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
      zIndex={1000}
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
          <Button
            onClick={() => router.back()}
            boxSize="24px"
            p="0px"
            bgColor="transparent"
            minW="unset"
          >
            <ArrowLeftSVG width={24} height={24} />
          </Button>
        ) : (
          <Box boxSize="24px" />
        )}
        <Text textStyle="mobile_b1_semi">{title}</Text>
        {children || <Box boxSize="24px" />}
      </Flex>
    </Flex>
  );
}

export default Header;
