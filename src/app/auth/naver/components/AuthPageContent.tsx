import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Flex, Text, Spinner } from '@chakra-ui/react';

import { createJwtToken } from '@/src/client/lib/api/createJwt';
import { AppError } from '@/src/client/errors/AppError';
import { useErrorToast } from '@/src/client/errors/useErrorToast';
import { useAuthStore } from '@/src/client/store/authStore';
import { AuthUser } from '@/src/client/store/authStore';

const AuthPageContent = () => {
  const router = useRouter();
  const code = useSearchParams().get('code');
  const state = useSearchParams().get('state');

  const { setUser: setUser } = useAuthStore();
  const { showErrorToast } = useErrorToast();
  const [executedCode, setExecutedCode] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleAuth = async (data: {
    provider: string;
    providerId: string;
    userId: string | null;
    name: string | null;
    email: string | null;
  }) => {
    if (data.userId) {
      // 이미 가입된 유저일 경우 로그인 페이지로 라우팅
      const user: AuthUser = {
        id: data.userId,
        name: data.name ?? 'Unknown',
        email: data.email ?? 'Unknown',
      };
      const token = await createJwtToken(user);
      const decodedState = state
        ? JSON.parse(atob(decodeURIComponent(state ?? '')))
        : null;

      setUser(user, token);
      router.replace(decodedState.redirectTo || '/');
    } else {
      // 신규 유저일 경우 회원가입 페이지로 라우팅
      router.replace(
        `/signup?&provider=${data.provider}&providerId=${data.providerId}`,
      );
    }
  };

  useEffect(() => {
    if (code && executedCode !== code && !isFetching) {
      setExecutedCode(code);
      setIsFetching(true);

      fetch(`/api/auth/naver/callback?code=${code}&state=${state}`)
        .then(async (res) => {
          const response = await res.json();

          if (!response.success || !response.data) {
            throw new AppError({
              name: response.name,
              message: response.message,
            });
          }

          handleAuth(response.data);
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
