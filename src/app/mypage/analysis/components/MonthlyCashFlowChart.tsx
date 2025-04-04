import { calculateMonthlyCashFlowChartData } from '@/src/client/services/analysis/calculations';
import { Flex, Text } from '@chakra-ui/react';
import BarChart from './BarChart';
import { formatKoreanCurrency } from '@/src/client/utils/currency';
import RatioWithColorBox from './RatioWithColorBox';
interface MonthlyCashFlowChartProps {
  monthlyIncome: number;
  monthlySaving: number;
  monthlyInvestment: number;
  monthlyExpense: number;
}

const MonthlyCashFlowChart = ({
  monthlyIncome,
  monthlySaving,
  monthlyInvestment,
  monthlyExpense,
}: MonthlyCashFlowChartProps) => {
  const { investmentRatio, savingRatio, expenseRatio } =
    calculateMonthlyCashFlowChartData(
      monthlyIncome,
      monthlySaving,
      monthlyInvestment,
      monthlyExpense,
    );
  return (
    <Flex
      w="100%"
      minW="430px"
      h="100%"
      borderRadius="10px"
      border="2px solid var(--chakra-colors-main-line)"
      flexDirection="column"
      gap="57px"
      p="28px"
    >
      <Flex flexDirection="column" gap="12px">
        <Text fontSize="20px" fontWeight="600">
          월 현금흐름
        </Text>
        <Text fontSize="18px" fontWeight="500">
          소득 {formatKoreanCurrency(monthlyIncome)}원
        </Text>
      </Flex>
      <BarChart
        firstRatio={investmentRatio}
        secondRatio={savingRatio}
        thirdRatio={expenseRatio}
      />
      <Flex flexDirection="column" gap="17px" padding="0 68px">
        <RatioWithColorBox
          color="#f0a57d"
          ratio={investmentRatio}
          text="투자"
          value={monthlyInvestment}
        />
        <RatioWithColorBox
          color="#d1f0b5"
          ratio={savingRatio}
          text="저축"
          value={monthlySaving}
        />
        <RatioWithColorBox
          color="#1d5e70"
          ratio={expenseRatio}
          text="지출"
          value={monthlyExpense}
        />
      </Flex>
    </Flex>
  );
};

export default MonthlyCashFlowChart;
