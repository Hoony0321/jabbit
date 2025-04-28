import ConsultationReportView from './components/ConsultationReportView';
import getUserConsultingHistoryById from '@/src/client/lib/api/getUserConsultingHistoryById';

const ConsultationReportPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ consultationId: string }>;
  searchParams: Promise<{ userId: string }>;
}) => {
  const paramsData = await params;
  const searchParamsData = await searchParams;

  const consultationId = paramsData.consultationId;
  const userId = searchParamsData.userId;
  const response = await getUserConsultingHistoryById(userId, consultationId);
  const data = response.data;

  return <ConsultationReportView consultingHistory={data} />;
};

export default ConsultationReportPage;
