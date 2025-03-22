import { Flex } from '@chakra-ui/react';
import ConsultationCard from '../components/ConsultationCard';
import { BASE_URL } from '@/src/client/constants/API';
import NoData from '../components/NoData';

const ConsultationHistory = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string }>;
}) => {
  const params = await searchParams;
  const userId = params.userId;

  const response = await fetch(`${BASE_URL}/users/${userId}/consultations`, {
    method: 'GET',
    cache: 'no-store',
  });

  const consultationHistoryData = await response.json();
  const data = consultationHistoryData.data;

  if (!data || data.length === 0) {
    return <NoData page="consultation-history" />;
  }

  return (
    <Flex flexDirection="column" gap="64px" w="100%">
      {data.map((consultation: any) => (
        <ConsultationCard key={consultation.id} {...consultation} />
      ))}
    </Flex>
  );
};

export default ConsultationHistory;
