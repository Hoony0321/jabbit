'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MobileNotSupported = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (typeof windowWidth === 'undefined') return null;

  if (windowWidth >= 1280) return <>{children}</>;

  return (
    <Flex
      w="100vw"
      h="100dvh"
      bg="main.white_1"
      padding="20px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      fontWeight={600}
      color="primary"
      margin="auto"
      gap="20px"
      fontSize={{
        base: '14px',
        md: '18px',
        lg: '23px',
        xl: '45px',
      }}
    >
      <Text>재빗은 PC에서 쓸 수 있어요.</Text>
      <Text>지금 접속하면 [영업없는 재무상담]을 받을 수 있어요! </Text>
    </Flex>
  );
};

export default MobileNotSupported;
