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
import { useGenerateAiSolutionStore } from '@/src/app/ai/coach/_store/generateAiSolutionStore';
import postAiContentNotification from '@/src/client/lib/api/postAiContentNotification';
import getAiContent from '@/src/client/lib/api/getAiContent';

function CoachPage() {
  const { push } = useRouter();
  const {
    isSubmitted: isBuyHomeSubmitted,
    dateSubmitted: buyHomeDateSubmitted,
    dateFirstVisit,
    setDateFirstVisit,
  } = useBuyHomeSurveyStore();

  const { isSubmitted: isFinancialGoalSubmitted } =
    useFinancialGoalSurveyStore();

  const {
    scenario: {
      notificationEnabled: isScenarioNotificationEnabled,
      requestedAt: dateScenarioRequested,
      createdAt: dateScenarioCreated,
    },
    plan: {
      notificationEnabled: isPlanNotificationEnabled,
      requestedAt: datePlanRequested,
      createdAt: datePlanCreated,
    },
    routine: {
      notificationEnabled: isRoutineNotificationEnabled,
      createdAt: dateRoutineCreated,
      requestedAt: dateRoutineRequested,
    },
    setScenarioCreated,
    setPlanCreated,
    setRoutineCreated,
    setScenarioNotification,
    setPlanNotification,
    setRoutineNotification,
  } = useGenerateAiSolutionStore();

  const fetchAiContentAndSet = async (
    type: 'SCENARIO' | 'PLAN' | 'ROUTINE',
    onSuccess: () => void,
  ) => {
    const response = await getAiContent(type);
    if (response.status === 200) {
      onSuccess();
    }
  };

  useEffect(() => {
    if (!dateScenarioRequested) return;
    if (dateScenarioRequested && !dateScenarioCreated) {
      fetchAiContentAndSet('SCENARIO', setScenarioCreated);
    }
  }, [dateScenarioRequested, dateScenarioCreated, setScenarioCreated]);

  useEffect(() => {
    if (!datePlanRequested) return;
    if (datePlanRequested && !datePlanCreated) {
      fetchAiContentAndSet('PLAN', setPlanCreated);
    }
  }, [datePlanRequested, datePlanCreated, setPlanCreated]);

  useEffect(() => {
    if (!dateRoutineRequested) return;
    if (dateRoutineRequested && !dateRoutineCreated) {
      fetchAiContentAndSet('ROUTINE', setRoutineCreated);
    }
  }, [dateRoutineRequested, dateRoutineCreated, setRoutineCreated]);

  const { user } = useAuthStore();

  const handleGetNotification = async (
    type: 'scenario' | 'plan' | 'routine',
  ) => {
    setNotificationEnabled(type);
    await postAiContentNotification({
      contentType: type.toUpperCase() as 'SCENARIO' | 'PLAN' | 'ROUTINE',
      isAgreed: true,
    });
  };

  const setNotificationEnabled = (type: 'scenario' | 'plan' | 'routine') => {
    if (type === 'scenario') {
      setScenarioNotification(!isScenarioNotificationEnabled);
    } else if (type === 'plan') {
      setPlanNotification(!isPlanNotificationEnabled);
    } else if (type === 'routine') {
      setRoutineNotification(!isRoutineNotificationEnabled);
    }
  };

  useEffect(() => {
    if (!dateFirstVisit) {
      setDateFirstVisit();
    }
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
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
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
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(buyHomeDateSubmitted)}
          </Text>
        </Flex>
      ),
    },
    dateScenarioRequested && {
      date: extractDateOnly(dateScenarioRequested || ''),
      component: (
        <Flex align="flex-end" gap="8px" key="notification-scenario">
          <ChatbotMessage
            message="코치가 나만을 위한 재무플랜을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotification('scenario')}
            isDisabled={isScenarioNotificationEnabled}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateScenarioRequested)}
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
            onButtonClick={() => push('/ai/coach/scenario')}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateScenarioCreated)}
          </Text>
        </Flex>
      ),
    },
    datePlanRequested && {
      date: extractDateOnly(datePlanRequested || ''),
      component: (
        <Flex align="flex-end" gap="8px" key="notification-plan">
          <ChatbotMessage
            message="코치가 나만을 위한 재무플랜을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotification('plan')}
            isDisabled={isPlanNotificationEnabled}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(datePlanRequested)}
          </Text>
        </Flex>
      ),
    },
    datePlanCreated && {
      date: extractDateOnly(datePlanCreated),
      component: (
        <Flex align="flex-end" gap="8px" key="plan">
          <ChatbotMessage
            message={`${user?.name ? user.name : '회원'}님의 재무 목표, 어떻게 이룰 수 있을까요? 현실 가능한 여러 가지 플랜을 제안드릴게요.`}
            buttonText="읽어보기"
            onButtonClick={() => push('/ai/coach/plan')}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(datePlanCreated)}
          </Text>
        </Flex>
      ),
    },
    dateRoutineRequested && {
      date: extractDateOnly(dateRoutineRequested || ''),
      component: (
        <Flex align="flex-end" gap="8px" key="notification-routine">
          <ChatbotMessage
            message="코치가 나만을 위한 재무플랜을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotification('routine')}
            isDisabled={isRoutineNotificationEnabled}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateRoutineRequested)}
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
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateRoutineCreated)}
          </Text>
        </Flex>
      ),
    },
  ].filter(Boolean) as { date: string; component: React.ReactNode }[];

  const grouped = groupMessagesByDate(messages);

  return (
    <Stack direction="column" gap="20px" px="20px" height="100%" mt="24px">
      {Object.entries(grouped).map(([date, items]) => (
        <Box key={date}>
          <Flex align="center" gap="8px" my="12px">
            <Box borderBottom="1px solid" borderColor="blue.600" width="100%" />
            <Text textStyle="mobile_b2" color="blue.600" whiteSpace="nowrap">
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
