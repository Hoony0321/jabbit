'use client';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const LoginBtn = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <Button
      bg="primary"
      w="184px"
      h="61px"
      borderRadius="12px"
      textStyle="md"
      color="main.white_1"
      onClick={handleLogin}
    >
      로그인/회원가입
    </Button>
  );
};

export default LoginBtn;
