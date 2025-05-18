import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <SignUpForm />
    </Suspense>
  );
}

export default SignUpPage;
