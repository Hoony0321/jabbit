import { Flex, Box } from '@chakra-ui/react';
import LegendBox from './LegendBox';
import PredictionChartItem from './PredictionChartItem';

interface FutureFinancialPredictionChartProps {
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

const FutureFinancialPredictionChart = ({
  income,
  asset,
  debt,
}: FutureFinancialPredictionChartProps) => {
  const maxValue = Math.max(
    income.current,
    income.future,
    asset.current,
    asset.future,
    debt.current,
  );

  return (
    <Flex
      flexDir="column"
      px="30px"
      pt="30px"
      pb="40px"
      border="2px solid #F2F3F5"
      borderRadius="10px"
    >
      <LegendBox />
      <Box height="52px" />
      <Flex flexDir="column" gap="30px" w="100%" ml="30px">
        <PredictionChartItem
          maxValue={maxValue}
          current={income.current}
          future={income.future}
          name="소득"
        />
        <PredictionChartItem
          maxValue={maxValue}
          current={asset.current}
          future={asset.future}
          name="자산"
        />
        <PredictionChartItem
          maxValue={maxValue}
          current={debt.current}
          future={debt.future}
          name="부채"
        />
      </Flex>
    </Flex>
  );
};
export default FutureFinancialPredictionChart;
