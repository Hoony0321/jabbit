import { Flex } from '@chakra-ui/react';
import ConsultationCard from '../components/ConsultationCard';
import NoData from '../components/NoData';
import getAllUserConsultingHistories from '@/src/client/lib/api/getAllUserConsultingHistories';
import { ConsultingHistoryWithProductAndExpert } from '@/src/server/types/domains';
const ConsultationHistory = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string }>;
}) => {
  const params = await searchParams;
  const userId = params.userId;

  const response = await getAllUserConsultingHistories(userId);
  const data = response.data;

  if (!data || data.length === 0) {
    return <NoData page="consultation-history" />;
  }

  return (
    <Flex flexDirection="column" gap="64px" w="100%">
      {data.map((consultation: ConsultingHistoryWithProductAndExpert) => (
        <ConsultationCard
          key={consultation.id}
          consultingHistory={consultation}
        />
      ))}
    </Flex>
  );
};

export default ConsultationHistory;
