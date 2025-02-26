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
      <Text>현재 모바일 기기 지원을 열심히 제작하고 있어요.</Text>
      <Text>1280px 이상 너비의 기기에서 사용해주세요.</Text>
      <Text>현재 화면 너비: {windowWidth}px</Text>
    </Flex>
  );
};

export default MobileNotSupported;
