'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MobileNotSupported = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // 윈도우 너비 설정
    setWindowWidth(window.innerWidth);

    // 모바일 기기 감지 (User Agent 확인)
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileDevices =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    setIsMobile(mobileDevices.test(userAgent));

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
      {isMobile ? (
        <>
          <Text>재빗은 PC에서 쓸 수 있어요.</Text>
          <Text>지금 접속하면 [영업없는 재무상담]을 받을 수 있어요!</Text>
        </>
      ) : (
        <>
          <Text>화면 비율이 너무 높거나 낮아요.</Text>
          <Text>
            화면 비율을 조정하면 [영업없는 재무상담]을 받을 수 있어요.
          </Text>
        </>
      )}
    </Flex>
  );
};

export default MobileNotSupported;
