'use client';

import { useRouter } from 'next/navigation';
import { Box, Stack, Text, Button, VStack, Flex } from '@chakra-ui/react';
import { useBuyHomeSurveyStore } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';
import postBuyHomeSurvey from '@/src/client/lib/api/postBuyHomeSurvey';
import { Answer } from '@/src/app/ai/coach/_store/buyHomeSurveyStore';
import { mixpanelTrack } from '@/src/client/utils/mixpanelHelpers';
import { useAuthStore } from '@/src/client/store/authStore';

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

function ResultPage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const { response, submitSurvey } = useBuyHomeSurveyStore();
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

  const calculateEstimatedAmount = () => {
    const region = response[`q4`];
    const buildingType = response[`q7`];
    const rentalType = response[`q8`];

    const estimateTable: Record<
      string,
      Record<string, Record<string, number>>
    > = {
      서울: {
        아파트: { 전세: 45000, '자가(매매)': 25000 },
        오피스텔: { 전세: 35000, '자가(매매)': 20000 },
        빌라: { 전세: 40000, '자가(매매)': 22000 },
      },
      경기: {
        아파트: { 전세: 30000, '자가(매매)': 17000 },
        오피스텔: { 전세: 25000, '자가(매매)': 14000 },
        빌라: { 전세: 28000, '자가(매매)': 16000 },
      },
    };

    const estimatedAmount =
      estimateTable[region]?.[buildingType]?.[rentalType] ?? 0;

    const amountInBillions = Math.floor(estimatedAmount / 10000);
    const amountInThousands = Math.floor((estimatedAmount % 10000) / 1000);
    const formattedAmount =
      amountInThousands === 0
        ? `${amountInBillions}억원`
        : `${amountInBillions}억 ${amountInThousands}천만원`;
    return formattedAmount;
  };

  const calculatedAmount = calculateEstimatedAmount();

  const handleSubmitSurvey = async () => {
    mixpanelTrack('코치탭', '장기 목표 설정 버튼 클릭', '장기 목표 설정 버튼', user);
    submitSurvey();
    try {
      await postBuyHomeSurvey({ response });
    } catch (error) {
      console.error('설문 전송 중 오류 발생:', error);
    } finally {
      router.push('/ai/coach');
    }
  };

  return (
    <Box px="20px" backgroundColor="white" minHeight="100vh" pb="120px">
      <Stack pt="60px" align="center">
        <Text textStyle="mobile_h1" textAlign="center">
          목표 달성에 필요한
          <br /> 예상 금액이에요
        </Text>

        <Box
          padding="40px 16px"
          borderRadius="24px"
          mt="48px"
          backgroundColor="app_background"
          width="100%"
        >
          <Text
            textStyle="mobile_d1_bold"
            color="brand.blue"
            textAlign="center"
          >
            {calculatedAmount}
          </Text>

          <VStack align="stretch" gap="0" mt="54px">
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
        onClick={handleSubmitSurvey}
      >
        <Text textStyle="mobile_b1_semi" color="white">
          장기목표로 설정하기
        </Text>
      </Button>
    </Box>
  );
}

export default ResultPage;
