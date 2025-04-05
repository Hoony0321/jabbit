import AnalysisClient from './AnalysisClient';
import { Suspense } from 'react';
import { BASE_URL } from '@/src/client/constants/API';
import LoadingPage from '@/src/app/common/LoadingPage/LoadingPage';
import NoData from '../components/NoData';
export default async function AnalysisPage({
  searchParams,
}: {
  searchParams: Promise<{ userId: string }>;
}) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <AnalysisContent searchParams={searchParams} />
    </Suspense>
  );
}

const AnalysisContent = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string }>;
}) => {
  const params = await searchParams;
  const userId = params.userId;

  const response = await fetch(
    `${BASE_URL}/users/${userId}/financial-analysis`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  );

  const financialAnalysisData = await response.json();
  const data = financialAnalysisData.data;

  if (!data) {
    return <NoData page="analysis" />;
  }

  return <AnalysisClient data={data} />;
};
