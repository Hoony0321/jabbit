import { Box, Flex, Text } from '@chakra-ui/react';
import { formatKoreanCurrency } from '@/src/client/utils/currency';

const ChartBar = ({
  value,
  maxValue,
  color,
}: {
  value: number;
  maxValue: number;
  color: string;
}) => {
  return (
    <Flex flex="row" gap="12px" alignItems="center">
      <Box
        width={`calc(${(value / maxValue) * 100}% - 60px)`}
        height="30px"
        backgroundColor={color}
        borderRadius="5px"
      />
      <Text
        color="main.black_2"
        fontSize="14px"
        fontWeight="medium"
        flexShrink={0}
      >
        {`${formatKoreanCurrency(value)}원`}
      </Text>
    </Flex>
  );
};

const PredictionChartItem = ({
  maxValue,
  current,
  future,
  name,
}: {
  maxValue: number;
  current: number;
  future: number;
  name: string;
}) => {
  return (
    <Flex flexDir="row" gap="24px" alignItems="center" w="100%">
      <Text fontSize="14px" fontWeight="medium" color="main.black_1">
        {name}
      </Text>
      <Flex flexDir="column" gap="10px" w="90%">
        <ChartBar value={current} maxValue={maxValue} color="main.black_6" />
        <ChartBar value={future} maxValue={maxValue} color="primary" />
      </Flex>
    </Flex>
  );
};

export default PredictionChartItem;
