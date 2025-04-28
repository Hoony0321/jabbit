import AnalysisClient from './AnalysisClient';
import { Suspense } from 'react';
import LoadingPage from '@/src/app/common/LoadingPage/LoadingPage';
import NoData from '../components/NoData';
import getUserFinancialInfoByUserId from '@/src/client/lib/api/getUserFinancialAnalysisByUserId';

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

  const response = await getUserFinancialInfoByUserId(userId);
  const financialAnalysisData = response.data;

  if (
    !financialAnalysisData.user_financial_info &&
    !financialAnalysisData.user_financial_diagnosis &&
    !financialAnalysisData.user_financial_prediction
  ) {
    return <NoData page="analysis" />;
  }

  return <AnalysisClient userFinancialAnalysis={financialAnalysisData} />;
};
