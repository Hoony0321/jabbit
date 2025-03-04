import { Flex, Text } from '@chakra-ui/react';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import { AppError } from '@/src/client/errors/AppError';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import { useAuthStore, User } from '@/src/client/store/authStore';
import { Spinner } from '@chakra-ui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthPageContent = () => {
  const router = useRouter();
  const code = useSearchParams().get('code');
  const { setUser } = useAuthStore();
  const { showErrorToast } = useErrorToast();
  const [executedCode, setExecutedCode] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (code && executedCode !== code && !isFetching) {
      setExecutedCode(code);
      setIsFetching(true);

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
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [code]);

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
