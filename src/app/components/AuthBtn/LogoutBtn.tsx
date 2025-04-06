'use client';

import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../client/store/authStore';

const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    // 렌더링 오류로 인해 setTimeout으로 다음 틱 처리
    setTimeout(() => {
      router.replace('/');
    }, 0);
  };

  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color="main.black_2"
      cursor="pointer"
      h="61px"
      onClick={handleLogout}
      transition="all 0.2s ease-in-out"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        color: 'main.black_1',
        transform: 'scale(1.05)',
        textDecoration: 'underline',
      }}
    >
      로그아웃
    </Text>
  );
};

export default LogoutBtn;
