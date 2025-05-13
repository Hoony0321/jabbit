'use client';

import { useAuthStore } from '@/src/client/store/authStore';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const MyPageBtn = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return null;
  }

  const handleMyPage = () => {
    router.push('/mypage');
  };

  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color="main.black_2"
      cursor="pointer"
      h="61px"
      onClick={handleMyPage}
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
      mr="40px"
    >
      마이페이지
    </Text>
  );
};

export default MyPageBtn;
