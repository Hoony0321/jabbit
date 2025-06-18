'use client';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import Login from './Login';
import { usePwaStore } from '@/src/client/store/pwaStore';
import { useAuthStore } from '@/src/client/store/authStore';
import AiLogin from '@/src/app/ai/login/page';
import { useEffect } from 'react';
import { deleteJwtToken } from '@/src/client/lib/api/deleteJwt';

function LoginPage() {
  const isPwa = usePwaStore((state) => state.isPwa);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) return;
  
    (async () => {
      await deleteJwtToken();
    })();
  }, [accessToken]);
  

  if (isPwa) {
    return <AiLogin />;
  }

  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <Login />
    </Suspense>
  );
}

export default LoginPage;
