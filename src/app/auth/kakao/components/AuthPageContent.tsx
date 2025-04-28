import { Flex, Text } from '@chakra-ui/react';
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
  const [isFetching, setIsFetching] = useState(false);
  const [executedCode, setExecutedCode] = useState<string | null>(null);

  useEffect(() => {
    if (code && executedCode !== code && !isFetching) {
      setExecutedCode(code);
      setIsFetching(true);
      fetch(`/api/auth/kakao/callback?code=${code}`)
        .then(async (res) => {
          const response = await res.json();
          const data = response.data;

          if (!response.success || !data) {
            throw new AppError({
              name: response.name,
              message: response.message,
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
