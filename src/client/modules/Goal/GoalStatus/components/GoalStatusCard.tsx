import Link from 'next/link';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';

import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import { FinancialGoalItem } from '@/src/client/lib/api/postUserFinancialInfo';
import { GoalStatus } from '../../api/goal.type';

interface GoalStatusCardProps {
  data: GoalStatus;
}

const GOAL_TYPE_MAP: Record<FinancialGoalItem['goal_type'], string> = {
  short_term: '단기',
  mid_term: '중기',
  long_term: '장기',
};

function GoalStatusCard({ data }: GoalStatusCardProps) {
  const {
    goalTitle,
    goalType,
    targetYears,
    targetAmount,
    currentAmount,
    status,
    updatedAt,
  } = data;

  const isCurrentUnset = status === 'DISCONNECTED';
  const progress = !isCurrentUnset ? (currentAmount / targetAmount) * 100 : 0;

  const year = new Date(updatedAt).getFullYear();
  const deadlineYear = year + targetYears;
  const titleText = `${GOAL_TYPE_MAP[goalType]} | ${targetYears}년 (~${deadlineYear}년)`;

  return (
    <Stack gap="16px" p="20px" bgColor="app_background" borderRadius="16px">
      <Stack gap="4px">
        <Text textStyle="mobile_cap" color="blue_gray.400">
          {titleText}
        </Text>
        <Text textStyle="mobile_h3">{goalTitle}</Text>
      </Stack>
      <Stack gap="8px">
        <Flex alignItems="flex-end" justifyContent="space-between">
          <Text textStyle="mobile_cap">달성률</Text>
          <Text color="brand.blue" textStyle="mobile_h3">
            {progress % 1 === 0 ? progress.toFixed(0) : progress.toFixed(1)}%
          </Text>
        </Flex>
        <ProgressBar
          progress={Math.min(progress, 100)}
          height="16px"
          backgroundColor="blue_gray.200"
        />
      </Stack>
      <Stack gap="8px" textStyle="mobile_b1_semi">
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="blue_gray.400">목표</Text>
          <Text>{targetAmount.toLocaleString()}원</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="blue_gray.400">현재</Text>
          <Text color={isCurrentUnset ? 'font.required' : 'brand.blue'}>
            {isCurrentUnset ? '???' : currentAmount.toLocaleString()}원
          </Text>
        </Flex>
      </Stack>
      {isCurrentUnset && (
        <Link
          href={IDENTIFIER_TO_PATH_MAP.GOAL_STATUS_CONNECT.replace(
            ':goalId',
            data.id,
          )}
        >
          <Button
            w="100%"
            textStyle="mobile_b1_med"
            px="20px"
            py="12px"
            bgColor="brand.blue"
            color="brand.white"
            borderRadius="8px"
            h="46px"
            mt="6px"
          >
            <Text>나의 자산 연동하기</Text>
          </Button>
        </Link>
      )}
    </Stack>
  );
}

export default GoalStatusCard;
