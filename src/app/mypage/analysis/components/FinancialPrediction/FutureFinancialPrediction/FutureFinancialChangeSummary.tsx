import { formatKoreanCurrency } from '@/src/client/utils/currency';
import { Flex, Span, Text } from '@chakra-ui/react';

interface FutureFinancialChangeSummaryProps {
  income: {
    current: number;
    future: number;
  };
  asset: {
    current: number;
    future: number;
  };
  debt: {
    current: number;
    future: number;
  };
}

const calculateFinancialChange = (current: number, future: number): string => {
  const change = future - current;

  return change > 0
    ? `[+${formatKoreanCurrency(change)}]`
    : `[${formatKoreanCurrency(change)}]`;
};

const FutureFinancialChangeSummary = ({
  income,
  asset,
  debt,
}: FutureFinancialChangeSummaryProps) => {
  return (
    <Flex flexDir="column" gap="10px">
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • 소득은{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(income.current, income.future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • 자산은{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(asset.current, asset.future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • 부채는{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(debt.current, debt.future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
    </Flex>
  );
};

export default FutureFinancialChangeSummary;
