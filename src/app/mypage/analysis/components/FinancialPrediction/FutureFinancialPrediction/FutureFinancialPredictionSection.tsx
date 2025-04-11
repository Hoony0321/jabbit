import { Box, Flex } from '@chakra-ui/react';
import FutureFinancialPredictionTitle from './FutureFinancialPredictionTitle';
import FutureFinancialPredictionBarChart from './PredictionChart.tsx/FutureFinancialPredictionChart';
import FutureFinancialChangeSummary from './FutureFinancialChangeSummary';

interface FutureFinancialPredictionSectionProps {
  futureFinancialPrediction: any;
}

const FutureFinancialPredictionSection = ({
  futureFinancialPrediction,
}: FutureFinancialPredictionSectionProps) => {
  console.log(futureFinancialPrediction);
  return (
    <Flex flexDir="column">
      <FutureFinancialPredictionTitle />
      <Box h="37px" />
      <FutureFinancialPredictionBarChart
        income={futureFinancialPrediction.income}
        asset={futureFinancialPrediction.asset}
        debt={futureFinancialPrediction.debt}
      />
      <Box h="40px" />
      <FutureFinancialChangeSummary
        income={futureFinancialPrediction.income}
        asset={futureFinancialPrediction.asset}
        debt={futureFinancialPrediction.debt}
      />
    </Flex>
  );
};
export default FutureFinancialPredictionSection;
