'use client';
import { Suspense } from 'react';
import Content from './components/Content';

const ExpertsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
};

export default ExpertsPage;
