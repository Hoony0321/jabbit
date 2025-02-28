'use client';

import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../client/store/authStore';

const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color="main.black_2"
      cursor="pointer"
      onClick={handleLogout}
      transition="all 0.2s ease-in-out"
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
