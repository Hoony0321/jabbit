import { Flex, Text } from '@chakra-ui/react';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';
import { AppError } from '@/src/errors/AppError';
import { useErrorToast } from '@/src/errors/useErrorToast';
import { useAuthStore, User } from '@/src/store/authStore';
import { Spinner } from '@chakra-ui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthPageContent = () => {
  const router = useRouter();
  const code = useSearchParams().get('code');
  const { setUser } = useAuthStore();
  const { showErrorToast } = useErrorToast();

  useEffect(() => {
    if (code) {
      const state = localStorage.getItem('naverState');
      fetch(`/api/auth/naver/callback?code=${code}&state=${state}`)
        .then(async (res) => {
          const data = await res.json();

          if (!data.success) {
            throw new AppError({
              statusCode: res.status,
              errorInfoKey: data.errorInfoKey || 'unknownError',
            });
          }

          const user: User = {
            id: data.id,
            provider: data.provider,
          };
          setUser(user, data.token);
          router.replace('/');
        })
        .catch((error) => {
          const isAppError = error instanceof AppError;

          if (!isAppError) {
            error = new AppError({
              statusCode: ERROR_INFOS['fetchFailed'].statusCode,
              errorInfoKey: 'fetchFailed',
            });
          }

          showErrorToast(error);
          router.replace('/login');
        });
    }
  }, [code, router, setUser]);

  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={4}
    >
      <Spinner size="xl" />
      <Text fontSize="lg">로그인 시도 중이에요.</Text>
    </Flex>
  );
};

export default AuthPageContent;
