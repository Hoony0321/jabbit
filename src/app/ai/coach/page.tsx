'use client';

import { useEffect, useRef } from 'react';
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
import { mixpanelTrackWithCallback } from '@/src/client/utils/mixpanelHelpers';
import getAiScenario from '@/src/client/lib/api/getAiScenario';
import { getAiFeedback } from '@/src/client/modules/Coach/api/coach.api';

const isDev = process.env.NODE_ENV === 'development';

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
    selfFeedback: {
      requestedAt: dateSelfFeedbackRequested,
      isSubmitted: isSelfFeedbackSubmitted,
    },
    weeklyFeedback: { createdAt: dateWeeklyFeedbackCreated },
    setScenarioCreated,
    setPlanCreated,
    setRoutineCreated,
    setScenarioNotification,
    setPlanNotification,
    setRoutineNotification,
    setWeeklyFeedbackCreated,
  } = useGenerateAiSolutionStore();

  const fetchAiContentAndSet = async (
    type: 'SCENARIO' | 'PLAN' | 'ROUTINE',
    onSuccess: () => void,
  ) => {
    const response = isDev
      ? await getAiScenario(type)
      : await getAiContent(type);

    if (response.body.response !== null) {
      onSuccess();
    }
  };

  const fetchAiFeedbackAndSet = async (onSuccess: () => void) => {
    const response = isDev
      ? await getAiScenario('WEEKLY-FEEDBACK')
      : await getAiFeedback();
    if (response.body !== null) {
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

  useEffect(() => {
    const setTime = new Date('2025-06-30T08:00:00+09:00');
    const now = new Date();

    if (now < setTime) return;
    if (!dateRoutineCreated) return;
    if (dateRoutineCreated && !dateWeeklyFeedbackCreated) {
      fetchAiFeedbackAndSet(setWeeklyFeedbackCreated);
    }
  }, [dateRoutineCreated, dateWeeklyFeedbackCreated]);

  const { user } = useAuthStore();
  const displayName =
    !user?.name || user.name === 'unknown' ? '회원' : user.name;
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

  const handleBuyHomeButtonClick = () => {
    mixpanelTrackWithCallback(
      '코치탭',
      '내 집 마련 비용 계산하기 버튼 클릭',
      '내 집 마련 비용 계산하기 버튼',
      user,
      () => {
        push('/ai/coach/form/buy-home');
      },
    );
  };

  const handleFinancialGoalButtonClick = () => {
    mixpanelTrackWithCallback(
      '코치탭',
      '5분 설문 참여하기 버튼 클릭',
      '5분 설문 참여하기 버튼',
      user,
      () => {
        push('/ai/coach/form/financial-goal');
      },
    );
  };

  const handleGetNotificationClick = (
    type: 'scenario' | 'plan' | 'routine',
  ) => {
    const typeMap = {
      scenario: '시나리오',
      plan: '플랜',
      routine: '루틴',
    };
    mixpanelTrackWithCallback(
      '코치탭',
      `${typeMap[type]} 알림 받기 버튼 클릭`,
      `${typeMap[type]} 알림 받기 버튼`,
      user,
      () => {
        handleGetNotification(type);
      },
    );
  };

  const handleReadAiContentClick = (
    type: 'scenario' | 'plan' | 'routine' | 'weekly-feedback',
  ) => {
    const typeMap = {
      scenario: '시나리오',
      plan: '플랜',
      routine: '루틴',
      'weekly-feedback': '주간 피드백',
    };
    mixpanelTrackWithCallback(
      '코치탭',
      `${typeMap[type]} 읽어보기 버튼 클릭`,
      `${typeMap[type]} 읽어보기 버튼`,
      user,
      () => {
        push(`/ai/coach/${type}`);
      },
    );
  };

  const handleSelfFeedbackClick = () => {
    mixpanelTrackWithCallback(
      '코치탭',
      `셀프 피드백 작성하기 버튼 클릭`,
      `셀프 피드백 작성하기 버튼`,
      user,
      () => {
        push(`/ai/coach/self-feedback`);
      },
    );
  };

  const messages = [
    dateFirstVisit && {
      date: extractDateOnly(dateFirstVisit),
      component: (
        <Flex align="flex-end" gap="8px" key="buy-home">
          <ChatbotMessage
            message="내 집 마련하려면 얼마나 있어야 할까요? 5분 안에 알고 싶다면?"
            buttonText="내 집 마련 비용 계산하기"
            onButtonClick={handleBuyHomeButtonClick}
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
            onButtonClick={handleFinancialGoalButtonClick}
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
            message="코치가 나만을 위한 재무 전략을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotificationClick('scenario')}
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
            onButtonClick={() => handleReadAiContentClick('scenario')}
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
            message="코치가 나만을 위한 재무 전략을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotificationClick('plan')}
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
            message={`${displayName}님의 재무 목표, 어떻게 이룰 수 있을까요? 현실 가능한 여러 가지 플랜을 제안드릴게요.`}
            buttonText="읽어보기"
            onButtonClick={() => handleReadAiContentClick('plan')}
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
            message="코치가 나만을 위한 재무 전략을 만드는 중이에요. 완료되면 알림 드릴게요."
            buttonText="알림받기"
            buttonDisabledText="알림신청 완료"
            onButtonClick={() => handleGetNotificationClick('routine')}
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
            onButtonClick={() => handleReadAiContentClick('routine')}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateRoutineCreated)}
          </Text>
        </Flex>
      ),
    },
    dateRoutineCreated &&
      dateWeeklyFeedbackCreated && {
        date: extractDateOnly(dateWeeklyFeedbackCreated),
        component: (
          <Flex align="flex-end" gap="8px" key="weekly-feedback">
            <ChatbotMessage
              message="이번 주 피드백이 도착했어요."
              buttonText="읽어보기"
              onButtonClick={() => handleReadAiContentClick('weekly-feedback')}
            />
            <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
              {parseTimeFromTimestamp(dateWeeklyFeedbackCreated)}
            </Text>
          </Flex>
        ),
      },
    dateSelfFeedbackRequested && {
      date: extractDateOnly(dateSelfFeedbackRequested),
      component: (
        <Flex align="flex-end" gap="8px" key="self-feedback">
          <ChatbotMessage
            message="이번 주를 되돌아보며 나에게 주는 피드백을 적어보세요."
            buttonText="작성하기"
            onButtonClick={handleSelfFeedbackClick}
            isDisabled={isSelfFeedbackSubmitted}
          />
          <Text textStyle="mobile_cap" color="blue.600" whiteSpace="nowrap">
            {parseTimeFromTimestamp(dateSelfFeedbackRequested)}
          </Text>
        </Flex>
      ),
    },
  ].filter(Boolean) as { date: string; component: React.ReactNode }[];

  const grouped = groupMessagesByDate(messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
            <div ref={bottomRef} />
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

export default CoachPage;
