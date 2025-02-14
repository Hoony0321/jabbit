'use client';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import AuthPageContent from './components/AuthPageContent';

const NaverAuthPage = () => {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <AuthPageContent />
    </Suspense>
  );
};

export default NaverAuthPage;
