'use client';

import { useRouter } from 'next/navigation';
import { Box, Stack, Text, Button, VStack, Flex } from '@chakra-ui/react';
import { useBuyHomeSurveyStore } from '@/src/client/store/survey/buyHomeSurveyStore';
import postBuyHomeSurvey from '@/src/client/lib/api/postBuyHomeSurvey';
interface answer {
  id: number;
  answer: string | number;
  text: string;
  code?: string;
}
interface ResultItem {
  label: string;
  value: (answers: Record<number, answer>) => string;
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
  const { answers } = useBuyHomeSurveyStore();
  const resultItems: ResultItem[] = [
    { label: '기간', value: (answers) => `${answers[2]?.text}년 뒤` },
    {
      label: '결혼계획',
      value: (answers) =>
        answers[3]?.code === 'a' ? '신혼부부' : '비혼으로 1인 가구',
    },
    {
      label: '거주지역',
      value: (answers) => `${answers[4]?.text} ${answers[5]?.text}`,
    },
    {
      label: '거주 형태',
      value: (answers) => `${answers[7]?.text} (${answers[6]?.text}평)`,
    },
    { label: '소유 형태', value: (answers) => answers[8]?.text },
  ];

  const calculateEstimatedAmount = () => {
    const region = answers[4]?.answer;
    const buildingType = answers[7]?.answer;
    const rentalType = answers[8]?.answer;

    const estimateTable: Record<
      string,
      Record<string, Record<string, number>>
    > = {
      a: {
        a: { a: 45000, b: 25000 },
        b: { a: 35000, b: 20000 },
        c: { a: 40000, b: 22000 },
      },
      b: {
        a: { a: 30000, b: 17000 },
        b: { a: 25000, b: 14000 },
        c: { a: 28000, b: 16000 },
      },
    };

    const estimatedAmount =
      estimateTable[region]?.[buildingType]?.[rentalType] ?? 0;

    const amountInBillions = Math.floor(estimatedAmount / 10000);
    const amountInThousands = Math.floor((estimatedAmount % 10000) / 1000);
    const formattedAmount = `${amountInBillions}억 ${amountInThousands}천만원`;
    return formattedAmount;
  };

  const calculatedAmount = calculateEstimatedAmount();

  const handleSubmitSurvey = () => {
    //todo: API 호출
    postBuyHomeSurvey(answers);
    router.push('/ai/coach');
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
              <ResultRow key={label} label={label} value={value(answers)} />
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
