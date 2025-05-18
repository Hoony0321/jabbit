'use client';

import { usePathname } from 'next/navigation';
import { Box, Flex } from '@chakra-ui/react';

import Header from './_components/Header';
import Navigation from './_components/Navigation';
import { ROUTE_PATH_MAP, ROUTES } from './_constants/routes';

function MobileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeName =
    ROUTE_PATH_MAP[pathname as keyof typeof ROUTE_PATH_MAP] || '';
  const { hasNav, header } = ROUTES[routeName as keyof typeof ROUTES] || {};

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgColor="blue.200"
    >
      <Box maxWidth="480px" width="100%" height="100vh">
        <Box
          width="100%"
          height="100%"
          bgColor="brand.white"
          overflowY="scroll"
        >
          {header && <Header {...header} />}
          <Box pb={hasNav ? '68px' : '0px'}>{children}</Box>
          {hasNav && <Navigation />}
        </Box>
      </Box>
    </Flex>
  );
}

export default MobileLayout;
