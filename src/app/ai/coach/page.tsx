'use client';

import { useEffect } from 'react';
import { Stack, Text, Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import ChatbotMessage from './_components/ChatbotMessage';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';
import { useFinancialGoalSurveyStore } from '@/src/app/ai/coach/_store/financialGoalSurveyStore';
import {
  parseTimeFromTimestamp,
  groupMessagesByDate,
  extractDateOnly,
  formatKoreanDate,
} from '@/src/client/utils/parser';
import { useAuthStore } from '@/src/client/store/authStore';

function CoachPage() {
  const { push } = useRouter();
  const {
    isSubmitted: isBuyHomeSubmitted,
    dateSubmitted: buyHomeDateSubmitted,
    dateFirstVisit,
    setDateFirstVisit,
  } = useBuyHomeSurveyStore();

  const {
    isSubmitted: isFinancialGoalSubmitted,
    dateSubmitted: financialGoalDateSubmitted,
    isNotificationEnabled,
    setNotification,
    // setScenarioCreated,
    // setPlanCreated,
    // setRoutineCreated,
    dateScenarioCreated,
    datePlanCreated,
    dateRoutineCreated,
  } = useFinancialGoalSurveyStore();

  const { user } = useAuthStore();

  const handleGetNotification = () => {
    setNotification(!isNotificationEnabled);
  };

  useEffect(() => {
    if (!dateFirstVisit) {
      setDateFirstVisit();
    }
    // api 호출 로직
    // 응답 200일 경우 setScenarioCreated, setPlanCreated, setRoutineCreated 순으로 호출
  }, []);

  const messages = [
    dateFirstVisit && {
      date: extractDateOnly(dateFirstVisit),
      component: (
        <Flex align="flex-end" gap="8px" key="buy-home">
          <ChatbotMessage
            message="내 집 마련하려면 얼마나 있어야 할까요? 5분 안에 알고 싶다면?"
            buttonText="내 집 마련 비용 계산하기"
            onButtonClick={() => push('/ai/coach/form/buy-home')}
            isDisabled={isBuyHomeSubmitted}
          />
          <Text fontSize="sm" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateFirstVisit)}
          </Text>
        </Flex>
      ),
    },

    buyHomeDateSubmitted && {
      date: extractDateOnly(buyHomeDateSubmitted),
      component: (
        <Flex align="flex-end" gap="8px" key="financial-goal">
          <ChatbotMessage
            message="맞춤형 재무 목표와 루틴을 만들기 위해 몇가지 여쭤볼게요."
            buttonText="5분 설문 참여하기"
            onButtonClick={() => push('/ai/coach/form/financial-goal')}
            isDisabled={isFinancialGoalSubmitted}
          />
          <Text fontSize="sm" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(buyHomeDateSubmitted)}
          </Text>
        </Flex>
      ),
    },
    isFinancialGoalSubmitted && {
      date: extractDateOnly(financialGoalDateSubmitted || ''),
      component: (
        <Flex align="flex-end" gap="8px" key="notification">
          <ChatbotMessage
            message="코치가 나만을 위한 재무플랜을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={handleGetNotification}
            isDisabled={isNotificationEnabled}
          />
          <Text fontSize="sm" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(financialGoalDateSubmitted)}
          </Text>
        </Flex>
      ),
    },
    dateScenarioCreated && {
      date: extractDateOnly(dateScenarioCreated),
      component: (
        <Flex align="flex-end" gap="8px" key="scenario">
          <ChatbotMessage
            message="내 집 마련 목표, 지금 뭐부터 해야 할까요? 쪼개서 알려드릴게요."
            buttonText="읽어보기"
            onButtonClick={() => push('/ai/coach/goal')}
          />
          <Text fontSize="sm" color="blue.60" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateScenarioCreated)}
          </Text>
        </Flex>
      ),
    },
    datePlanCreated && {
      date: extractDateOnly(datePlanCreated),
      component: (
        <Flex align="flex-end" gap="8px" key="plan">
          <ChatbotMessage
            message={`${user?.name}님의 재무 목표, 어떻게 이룰 수 있을까요? 현실 가능한 여러 가지 플랜을 제안드릴게요.`}
            buttonText="읽어보기"
            onButtonClick={() => push('/ai/coach/plan')}
          />
          <Text fontSize="sm" color="blue.60" whiteSpace="nowrap">
            {parseTimeFromTimestamp(datePlanCreated)}
          </Text>
        </Flex>
      ),
    },
    dateRoutineCreated && {
      date: extractDateOnly(dateRoutineCreated),
      component: (
        <Flex align="flex-end" gap="8px" key="routine">
          <ChatbotMessage
            message="목표를 이루기 위한 루틴이 도착했어요. 작지만 꾸준히 실천할 수 있는 루틴을 추천드려요."
            buttonText="읽어보기"
            onButtonClick={() => push('/ai/coach/routine')}
          />
          <Text fontSize="sm" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateRoutineCreated)}
          </Text>
        </Flex>
      ),
    },
  ].filter(Boolean) as { date: string; component: React.ReactNode }[];

  const grouped = groupMessagesByDate(messages);
  console.log('grouped', grouped);

  return (
    <Stack direction="column" gap="20px" px="20px" height="100%" mt="24px">
      {Object.entries(grouped).map(([date, items]) => (
        <Box key={date}>
          <Flex align="center" gap="8px" my="12px">
            <Box borderBottom="1px solid" borderColor="blue.600" width="100%" />
            <Text fontSize="sm" color="blue.600" whiteSpace="nowrap">
              {formatKoreanDate(date)}
            </Text>
            <Box borderBottom="1px solid" borderColor="blue.600" width="100%" />
          </Flex>
          <Stack direction="column" gap="20px">
            {items}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

export default CoachPage;
