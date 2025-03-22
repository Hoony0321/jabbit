import { BASE_URL } from '@/src/client/constants/API';
import ConsultationReportView from './components/ConsultationReportView';

const ConsultationReportPage = async ({
  params,
  searchParams,
}: {
  params: { consultationId: string };
  searchParams: { userId: string };
}) => {
  const paramsData = await params;
  const searchParamsData = await searchParams;

  const consultationId = paramsData.consultationId;
  const userId = searchParamsData.userId;

  const response = await fetch(
    `${BASE_URL}/users/${userId}/consultations/${consultationId}`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  );

  const consultationData = await response.json();
  const data = consultationData.data;

  return <ConsultationReportView {...data} />;
};

export default ConsultationReportPage;
