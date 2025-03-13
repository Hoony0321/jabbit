'use client';
import { Suspense } from 'react';
import ExpertsPageContainer from './components/ExpertsPageContainer';

const ExpertsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExpertsPageContainer />
    </Suspense>
  );
};

export default ExpertsPage;
