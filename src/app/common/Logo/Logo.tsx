'use client';

import { Box } from '@chakra-ui/react';
import LogoSVG from '@/public/assets/logo.svg';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <Box onClick={handleLogoClick} cursor="pointer">
      <LogoSVG />
    </Box>
  );
};

export default Logo;
