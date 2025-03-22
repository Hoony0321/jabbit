'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface ConsultationCardProps {
  id: string;
  userId: string;
  expertId: string;
  expertName: string;
  title: string;
  field: string;
  status: string;
  createdAt: string;
}

const ConsultationCard = ({
  id,
  userId,
  createdAt,
  title,
  field,
  expertName,
  status,
}: ConsultationCardProps) => {
  const router = useRouter();
  const handleConsultationResult = () => {
    if (status === 'completed') {
      router.push(`/mypage/consultation-history/${id}?userId=${userId}`);
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
            {createdAt}
          </Text>
          <Text fontSize="14px" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="12px" fontWeight="400" color="main.black_3">
            {field}
          </Text>
        </Flex>
        <Text fontSize="12px" fontWeight="400">
          {expertName} 재무설계사
        </Text>
      </Flex>
      <Button
        w="150px"
        h="40px"
        borderRadius="10px"
        bg={status === 'completed' ? 'primary' : '#d9d9d9'}
        color={status === 'completed' ? 'main.white_1' : 'main.black_1'}
        fontSize="12px"
        fontWeight="400"
        disabled={status !== 'completed'}
        onClick={handleConsultationResult}
      >
        {status === 'completed' ? '상담 결과 보기' : '상담 결과 작성 중'}
      </Button>
    </Flex>
  );
};

export default ConsultationCard;
