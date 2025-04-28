'use client';

import { ConsultingHistoryWithProductAndExpert } from '@/src/server/types/domains';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { parseLastTwoNumberOfYear } from '@/src/client/utils/parser';
const ConsultationCard = ({
  consultingHistory,
}: {
  consultingHistory: ConsultingHistoryWithProductAndExpert;
}) => {
  const router = useRouter();
  const handleConsultationResult = () => {
    if (consultingHistory.status === 'completed') {
      router.push(
        `/mypage/consultation-history/${consultingHistory.id}?userId=${consultingHistory.user_id}`,
      );
    }
  };

  return (
    <Flex
      w="800px"
      h="144px"
      border="2px solid var(--chakra-colors-main-line)"
      borderRadius="10px"
      padding="20px"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Flex flexDirection="column" gap="12px">
        <Flex flexDirection="column" gap="8px">
          <Text fontSize="12px" fontWeight="400">
            {parseLastTwoNumberOfYear(new Date(consultingHistory.created_at))}
          </Text>
          <Text fontSize="14px" fontWeight="600">
            {consultingHistory.consulting_products.title}
          </Text>
          <Text fontSize="12px" fontWeight="400" color="main.black_3">
            {consultingHistory.consulting_products.category}
          </Text>
        </Flex>
        <Text fontSize="12px" fontWeight="400">
          {consultingHistory.consulting_products.experts.name} 재무설계사
        </Text>
      </Flex>
      <Button
        w="150px"
        h="40px"
        borderRadius="10px"
        bg={consultingHistory.status === 'completed' ? 'primary' : '#d9d9d9'}
        color={
          consultingHistory.status === 'completed'
            ? 'main.white_1'
            : 'main.black_1'
        }
        fontSize="12px"
        fontWeight="400"
        disabled={consultingHistory.status !== 'completed'}
        onClick={handleConsultationResult}
      >
        {consultingHistory.status === 'completed'
          ? '상담 결과 보기'
          : '상담 결과 작성 중'}
      </Button>
    </Flex>
  );
};

export default ConsultationCard;
