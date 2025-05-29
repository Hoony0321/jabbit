'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import Image from 'next/image';
import { useGenerateAiSolutionStore } from '@/src/app/ai/coach/_store/generateAiSolutionStore';
import postAiContent from '@/src/client/lib/api/postAiContent';
import getAiContent from '@/src/client/lib/api/getAiContent';

function Loading({ message }: { message: string }) {
  const typing = keyframes`
  from { width: 0 }
  to { width: ${message.length}ch }
`;

  const blink = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: black }
`;

  const blinkImage = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
`;
  return (
    <Flex
      align="center"
      gap="8px"
      padding="24px 30px"
      justifyContent="flex-start"
    >
      <Box animation={`${blinkImage} 2s ease-in-out infinite`}>
        <Image
          src="/assets/ico_money.svg"
          alt="돈 아이콘"
          width={24}
          height={24}
          priority={false}
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Text
        textStyle="mobile_b2"
        color="font.800"
        whiteSpace="nowrap"
        overflow="hidden"
        borderRight="1px solid"
        animation={`${typing} 3s steps(${message.length}), ${blink} 1s step-end infinite`}
      >
        {message}
      </Text>
    </Flex>
  );
}

export default function GuidePage() {
  const router = useRouter();
  const { topic } = useParams();
  const topicStr = typeof topic === 'string' ? topic : '';
  const buttonTextMap: Record<string, string> = {
    scenario: '시나리오 추가하기',
    plan: '플랜으로 설정하기',
    routine: '루틴으로 설정하기',
  };
  const topicKrMap: Record<string, string> = {
    scenario: '시나리오를',
    plan: '플랜을',
    routine: '루틴을',
  };

  const loadingMessage = `재무코치가 나만을 위한 ${topicKrMap[topicStr]} 만들고 있어요...`;
  const [data, setData] = useState<any>(null);

  const { setPlanRequested, setRoutineRequested } =
    useGenerateAiSolutionStore();

  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!topicStr) return;

    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          getAiContent(
            topicStr.toUpperCase() as 'SCENARIO' | 'PLAN' | 'ROUTINE',
          ),
          new Promise((resolve) => setTimeout(resolve, 5000)),
        ]);
        if (response.body.response !== null) {
          setData(response.body.response);
          setTypingDone(true);
        }
      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
      }
    };

    fetchData();
  }, [buttonTextMap, topicStr]);

  const handleButtonClick = async () => {
    if (topicStr === 'scenario') {
      setPlanRequested();
      await postAiContent({ contentType: 'PLAN' });
      router.push('/ai/coach');
    } else if (topicStr === 'plan') {
      setRoutineRequested();
      await postAiContent({ contentType: 'ROUTINE' });
      router.push('/ai/coach');
    } else if (topicStr === 'routine') {
      // 페이지 이동
    }
  };

  if (!typingDone) return <Loading message={loadingMessage} />;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px">
        <Text textStyle="mobile_b1_med" color="main.black_1">
          {JSON.stringify(data)}
        </Text>
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
          {buttonTextMap[topicStr]}
        </Text>
      </Button>
    </Box>
  );
}
