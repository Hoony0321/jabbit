import { Box, Flex, Text } from '@chakra-ui/react';
import { FinancialPredictionGoalAchievementPrediction } from '@/src/server/types/domains';
import { formatKoreanCurrency } from '@/src/client/utils/currency';

const Tag = ({
  text,
  bgColor,
  color,
}: {
  text: string;
  bgColor: string;
  color: string;
}) => {
  return (
    <Flex p="4px 8px" bg={bgColor} borderRadius="8px">
      <Text fontSize="12px" fontWeight="bold" color={color}>
        {text}
      </Text>
    </Flex>
  );
};

const GoalAchievementCard = ({
  title,
  targetDate,
  targetAmount,
  estimatedAchievementDate,
}: FinancialPredictionGoalAchievementPrediction) => {
  const isPossible = estimatedAchievementDate < targetDate;
  const leftYear =
    new Date(targetDate).getFullYear() - new Date().getFullYear();
  const yearDiff =
    new Date(estimatedAchievementDate).getFullYear() -
    new Date(targetDate).getFullYear();

  return (
    <Flex
      flexDir="column"
      p="28px"
      borderRadius="10px"
      boxShadow="0px 4px 28px 0px rgba(0, 0, 0, 0.08)"
      justifyContent="space-between"
      minH="200px"
    >
      <Flex flexDir="column">
        <Flex flexDir="row" gap="8px">
          <Tag text={`${leftYear}년 뒤`} bgColor="#F5F6FB" color="#83889F" />
          <Tag
            text={isPossible ? '가능' : '불가능'}
            bgColor={isPossible ? '#D8F3DD' : '#FEE8E5'}
            color={isPossible ? '#1F7F31' : '#B86358'}
          />
        </Flex>
        <Box h="10px" />
        <Text fontSize="18px" fontWeight="semibold" color="main.black_2">
          {title}
        </Text>
        <Box h="6px" />
        <Text fontSize="14px" fontWeight="medium" color="main.black_4">
          {formatKoreanCurrency(targetAmount)}원
        </Text>
      </Flex>
      <Text
        fontSize="16px"
        fontWeight={isPossible ? 'medium' : 'semibold'}
        color={isPossible ? 'main.black_4' : '#D24040'}
      >
        + {yearDiff < 0 ? 0 : yearDiff * 12}개월 더 걸려요
      </Text>
    </Flex>
  );
};

export default GoalAchievementCard;
