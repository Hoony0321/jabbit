import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import Login from './Login';

function LoginPage() {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <Login />
    </Suspense>
  );
}

export default LoginPage;
