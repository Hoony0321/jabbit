import { Box, Text, VStack, Flex } from '@chakra-ui/react';

function BulletText({
  text,
  textStyle,
  textColor,
}: {
  text?: string;
  textStyle?: string;
  textColor?: string;
}) {
  if (!text) return null;

  const lines = text.split('\n').filter(Boolean);
  return (
    <Box mt="8px">
      {lines.map((line, idx) => (
        <Flex key={idx} align="center" mb="6px" pl="5px">
          <Box as="span" mr="8px" fontSize="lg" color="gray.600" lineHeight="1">
            •
          </Box>
          <Text
            textStyle={textStyle}
            whiteSpace="pre-wrap"
            color={textColor ? textColor : 'font.black'}
          >
            {line}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

interface FeedbackProps {
  statusCheckRoutine?: string;
  statusCheckBudget?: string;
  emotionCarePositive?: string;
  emotionCareNegative?: string;
  forecastAssetChange?: string;
  forecastCashFlow?: string;
  routineRecoList?: {
    name: string;
    category: string;
    frequency: string;
    description: string;
  }[];
}

export default function Feedback({ data }: { data: FeedbackProps }) {
  return (
    <VStack gap="8px" align="stretch">
      <Box>
        <Text textStyle="mobile_h2">🗓️ 6월 5주차</Text>
      </Box>
      <Box backgroundColor="blue.200" borderRadius="14px" p="16px" mt="20px">
        <Text color="blue.700" textStyle="mobile_cap">
          피드백 생성 기준
        </Text>
        <Text color="brand.blue" textStyle="mobile_b1_semi" mt="4px">
          AI 피드백은 어떻게 만들어지나요?
        </Text>
        <Text textStyle="mobile_b2" color="font.800" mt="10px">
          반영한 정보
        </Text>
        <BulletText
          text={'이번 주 루틴수행 결과'}
          textStyle="mobile_b2"
          textColor="font.800"
        />
        <BulletText
          text={'이번 주 가계부 작성 결과'}
          textStyle="mobile_b2"
          textColor="font.800"
        />
        <Text textStyle="mobile_b2" color="font.800">
          → 다음 주에 더 양질의 피드백을 받고 싶다면 루틴 수행하고 가계부를
          작성해 보세요!
        </Text>
      </Box>
      <Box mt="20px">
        <Text textStyle="mobile_h3" color="main.black_1">
          ✅ 현황 점검
        </Text>
        <Box
          backgroundColor="app_background"
          borderRadius="14px"
          p="16px"
          mt="16px"
        >
          <Text textStyle="mobile_b1_semi">1. 루틴 수행률</Text>
          <BulletText
            text={data.statusCheckRoutine}
            textStyle="mobile_b1_med"
          />

          <Text textStyle="mobile_b1_semi" mt="32px">
            2. 예산 대비 지출
          </Text>
          <BulletText text={data.statusCheckBudget} textStyle="mobile_b1_med" />
        </Box>
      </Box>

      <Box mt="20px">
        <Text textStyle="mobile_h3" color="main.black_1">
          🧠 감정 케어
        </Text>
        <Box
          backgroundColor="app_background"
          borderRadius="14px"
          p="16px"
          mt="16px"
        >
          <Text textStyle="mobile_b1_med" mb={1}>
            1. 잘한 점
          </Text>
          <BulletText
            text={data.emotionCarePositive}
            textStyle="mobile_b1_med"
          />

          <Text textStyle="mobile_b1_med" mt="32px">
            2. 보완할 점
          </Text>
          <BulletText
            text={data.emotionCareNegative}
            textStyle="mobile_b1_med"
          />
        </Box>
      </Box>

      <Box mt="20px">
        <Text textStyle="mobile_h3" color="main.black_1">
          📊 예측 & 개선 제안
        </Text>
        <Box
          backgroundColor="app_background"
          borderRadius="14px"
          p="16px"
          mt="16px"
        >
          <Text textStyle="mobile_b1_med" mb={1}>
            1. 이번 달 자산/부채 변화 예상
          </Text>
          <BulletText
            text={data.forecastAssetChange}
            textStyle="mobile_b1_med"
          />

          <Text textStyle="mobile_b1_med" mt="32px">
            2. 이번 달 현금흐름 예상
          </Text>
          <BulletText text={data.forecastCashFlow} textStyle="mobile_b1_med" />
        </Box>
      </Box>

      <Box mt="20px" mb="20px">
        <Text textStyle="mobile_h3" color="main.black_1">
          ✏️ 신규 루틴 추천
        </Text>
        <Box backgroundColor="blue.200" borderRadius="14px" p="16px" mt="16px">
          {data.routineRecoList?.map((item, idx) => (
            <BulletText
              key={idx}
              text={item.name}
              textStyle="mobile_b1_med"
              textColor="brand.blue"
            />
          ))}
        </Box>
      </Box>
    </VStack>
  );
}
