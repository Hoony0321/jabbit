'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Text, Box } from '@chakra-ui/react';
import Feedback from '@/src/client/modules/Coach/components/Feedback';
import Loading from '@/src/client/modules/Coach/components/Loading';
import getAiScenario from '@/src/client/lib/api/getAiScenario';
import { useGenerateAiSolutionStore } from '@/src/app/ai/coach/_store/generateAiSolutionStore';
import { getAiFeedback } from '@/src/client/modules/Coach/api/coach.api';
import { mixpanelTrack } from '@/src/client/utils/mixpanelHelpers';
import { useAuthStore } from '@/src/client/store/authStore';

export default function WeeklyFeedbackPage() {
  const router = useRouter();
  const { setSelfFeedbackRequested } = useGenerateAiSolutionStore();
  const loadingMessage = `피드백을 만들고 있어요...`;
  const [data, setData] = useState<any>(null);
  const [typingDone, setTypingDone] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          isDev
            ? getAiScenario('WEEKLY-FEEDBACK').then(
                (res) => res.body.response[0],
              )
            : getAiFeedback().then((res) => res.body),
          new Promise((resolve) => setTimeout(resolve, 5000)),
        ]);
        if (response !== null) {
          setData(response);
          setTypingDone(true);
        }
      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async () => {
    setSelfFeedbackRequested();

    mixpanelTrack(
      '코치탭',
      '주간 피드백 루틴 추가하기 버튼 클릭',
      '주간 피드백 루틴 추가하기 버튼',
      user,
    );

    router.push('/ai/coach');
  };

  if (!typingDone) return <Loading message={loadingMessage} />;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px" pb="80px">
        <Feedback data={data} />
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="14px"
        height="60px"
        color="white"
        backgroundColor="brand.blue"
        borderWidth="2px"
        borderColor="gray.100"
        minWidth="335px"
        onClick={handleButtonClick}
      >
        <Text textStyle="mobile_b1_semi" color="white">
          루틴 추가하기
        </Text>
      </Button>
    </Box>
  );
}
