'use client';

import { Box, Stack, Text, VStack, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CircularProgress from '@/src/app/ai/coach/_components/form/CircularProgress';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';
import { Answer } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';

interface ResultItem {
  label: string;
  value: (response: Answer) => string | number;
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <Flex
      justify="space-between"
      align="center"
      padding="14px 20px"
      height="60px"
      backgroundColor="app_background"
      borderRadius="10px"
    >
      <Text textStyle="mobile_b1_semi" color="gray.800">
        {label}
      </Text>
      <Text textStyle="mobile_b1_semi" color="gray.900">
        {value}
      </Text>
    </Flex>
  );
}

function SummaryPage() {
  const router = useRouter();
  const [percentage, setPercentage] = useState(0);
  const { response } = useBuyHomeSurveyStore();
  const { q2, q3, q4, q5, q6, q7, q8 } = response;

  const resultItems: ResultItem[] = [
    { label: '기간', value: () => `${q2}년 뒤` },
    {
      label: '결혼계획',
      value: () =>
        q3 === '결혼했어요 or 결혼할거에요' ? '신혼부부' : '비혼으로 1인 가구',
    },
    {
      label: '거주지역',
      value: () => `${q4} ${q5}`,
    },
    {
      label: '거주 형태',
      value: () => `${q7} (${q6}평)`,
    },
    { label: '소유 형태', value: () => String(q8) },
  ];

  useEffect(() => {
    const steps = [
      { value: 10, delay: 200 },
      { value: 20, delay: 400 },
      { value: 60, delay: 800 },
      { value: 100, delay: 1200 },
    ];

    steps.forEach(({ value, delay }) => {
      setTimeout(() => {
        setPercentage(value);
        if (value === 100) {
          setTimeout(() => {
            router.push('/ai/coach/form/buy-home/result');
          }, 500);
        }
      }, delay);
    });
  }, [router]);

  return (
    <Box px="20px" backgroundColor="white" minHeight="100vh" pb="120px">
      <Stack pt="60px" align="center" gap="0">
        <Text textStyle="mobile_h1" textAlign="center">
          회원님을 위한 예상
          <br />
          목표 금액을 계산 중이에요
        </Text>

        <Box mt="70px" display="flex" justifyContent="center">
          <CircularProgress height={175} width={175} percentage={percentage} />
        </Box>

        <Text
          textStyle="mobile_b1_semi"
          color="gray.800"
          textAlign="center"
          mt="30px"
        >
          입력하신 정보를 분석하고 있어요···
        </Text>

        <Box padding="0px 16px" borderRadius="24px" mt="54px" width="100%">
          <VStack align="stretch" gap="4px">
            {resultItems.map(({ label, value }) => (
              <ResultRow
                key={label}
                label={label}
                value={String(value(response))}
              />
            ))}
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SummaryPage;
