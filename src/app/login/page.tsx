'use client';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import Login from './Login';
import { usePwaStore } from '@/src/client/store/pwaStore';
import AiLogin from '@/src/app/ai/login/page';

function LoginPage() {
  const isPwa = usePwaStore((state) => state.isPwa);

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
