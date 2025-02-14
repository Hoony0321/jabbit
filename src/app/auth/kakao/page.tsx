'use client';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import AuthPageContent from './components/AuthPageContent';

const KakaoAuthPage = () => {
  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <AuthPageContent />
    </Suspense>
  );
};

export default KakaoAuthPage;
